"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function ColorCodeBlock({
  code,
  language = "javascript",
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenizeJS = (code: string): Array<{ type: string; value: string }> => {
    const tokens: Array<{ type: string; value: string }> = [];
    let i = 0;

    while (i < code.length) {
      // Comments (single line)
      if (code[i] === "/" && code[i + 1] === "/") {
        let comment = "";
        while (i < code.length && code[i] !== "\n") {
          comment += code[i];
          i++;
        }
        tokens.push({ type: "comment", value: comment });
        if (code[i] === "\n") {
          tokens.push({ type: "whitespace", value: "\n" });
          i++;
        }
        continue;
      }

      // Comments (multi-line)
      if (code[i] === "/" && code[i + 1] === "*") {
        let comment = "";
        while (i < code.length - 1) {
          comment += code[i];
          i++;
          if (code[i - 1] === "*" && code[i] === "/") {
            comment += "/";
            i++;
            break;
          }
        }
        tokens.push({ type: "comment", value: comment });
        continue;
      }

      // Strings (backticks)
      if (code[i] === "`") {
        let str = "`";
        i++;
        while (i < code.length && code[i] !== "`") {
          str += code[i];
          i++;
        }
        if (code[i] === "`") {
          str += "`";
          i++;
        }
        tokens.push({ type: "string", value: str });
        continue;
      }

      // Strings (double quotes)
      if (code[i] === '"') {
        let str = '"';
        i++;
        while (i < code.length && code[i] !== '"' && code[i] !== "\n") {
          if (code[i] === "\\") {
            str += code[i];
            i++;
            if (i < code.length) {
              str += code[i];
              i++;
            }
          } else {
            str += code[i];
            i++;
          }
        }
        if (code[i] === '"') {
          str += '"';
          i++;
        }
        tokens.push({ type: "string", value: str });
        continue;
      }

      // Strings (single quotes)
      if (code[i] === "'") {
        let str = "'";
        i++;
        while (i < code.length && code[i] !== "'" && code[i] !== "\n") {
          if (code[i] === "\\") {
            str += code[i];
            i++;
            if (i < code.length) {
              str += code[i];
              i++;
            }
          } else {
            str += code[i];
            i++;
          }
        }
        if (code[i] === "'") {
          str += "'";
          i++;
        }
        tokens.push({ type: "string", value: str });
        continue;
      }

      // Numbers
      if (/\d/.test(code[i])) {
        let num = "";
        while (i < code.length && /[\d.]/.test(code[i])) {
          num += code[i];
          i++;
        }
        tokens.push({ type: "number", value: num });
        continue;
      }

      // Keywords and identifiers
      if (/[a-zA-Z_$]/.test(code[i])) {
        let word = "";
        while (i < code.length && /[a-zA-Z0-9_$]/.test(code[i])) {
          word += code[i];
          i++;
        }

        const keywords = [
          "import",
          "from",
          "const",
          "let",
          "var",
          "async",
          "await",
          "function",
          "return",
          "class",
          "interface",
          "type",
          "if",
          "else",
          "for",
          "while",
          "do",
          "switch",
          "case",
          "break",
          "continue",
          "try",
          "catch",
          "finally",
          "throw",
          "export",
          "default",
          "new",
          "extends",
          "implements",
          "static",
          "async",
          "await",
          "yield",
          "typeof",
          "instanceof",
          "in",
          "of",
          "delete",
          "void",
          "this",
          "super",
          "require",
          "module",
          "exports",
          "true",
          "false",
          "null",
          "undefined",
        ];

        const primitives = [
          "true",
          "false",
          "null",
          "undefined",
          "Infinity",
          "NaN",
        ];

        if (keywords.includes(word)) {
          tokens.push({ type: "keyword", value: word });
        } else if (primitives.includes(word)) {
          tokens.push({ type: "primitive", value: word });
        } else {
          tokens.push({ type: "identifier", value: word });
        }
        continue;
      }

      // Whitespace
      if (/\s/.test(code[i])) {
        let ws = "";
        while (i < code.length && /\s/.test(code[i])) {
          ws += code[i];
          i++;
        }
        tokens.push({ type: "whitespace", value: ws });
        continue;
      }

      // Other characters
      tokens.push({ type: "other", value: code[i] });
      i++;
    }

    return tokens;
  };

  const renderTokens = (tokens: Array<{ type: string; value: string }>) => {
    return tokens.map((token, index) => {
      let color = "#e0e0e0";

      if (token.type === "keyword") {
        color = "oklch(0.6 0.15 280)";
      } else if (token.type === "string") {
        color = "oklch(0.65 0.15 135)";
      } else if (token.type === "number") {
        color = "oklch(0.646 0.222 41.116)";
      } else if (token.type === "primitive") {
        color = "oklch(0.6 0.118 184.704)";
      } else if (token.type === "comment") {
        color = "oklch(0.5 0 0)";
      } else if (token.type === "identifier") {
        color = "oklch(0.65 0.112 251.813)";
      }

      return (
        <span key={index} style={{ color }}>
          {token.value}
        </span>
      );
    });
  };

  const tokens = tokenizeJS(code);

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border my-6">
      {title && (
        <div className="bg-card/80 px-4 py-3 border-b border-border flex items-center justify-between">
          <span className="text-sm font-mono text-muted-foreground">
            {title}
          </span>
          <span className="text-xs text-muted-foreground">
            {language === "node" ? "Node.js" : "JavaScript"}
          </span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute right-4 top-4 p-2 rounded bg-card/50 hover:bg-card transition-colors z-10"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed bg-background">
          <code className="font-mono text-foreground">
            {renderTokens(tokens)}
          </code>
        </pre>
      </div>
    </div>
  );
}
