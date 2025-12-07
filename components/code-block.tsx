"use client";

import { Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

// Simple HTML escape function that works on both server and client
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

type TokenType =
  | "keyword"
  | "string"
  | "number"
  | "comment"
  | "identifier"
  | "other"
  | "whitespace"
  | "import";

interface Token {
  type: TokenType;
  value: string;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenize = (code: string): Token[] => {
    const tokens: Token[] = [];
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
        continue;
      }

      // Comments (multi-line)
      if (code[i] === "/" && code[i + 1] === "*") {
        let comment = "/*";
        i += 2;
        while (i < code.length - 1) {
          if (code[i] === "*" && code[i + 1] === "/") {
            comment += "*/";
            i += 2;
            break;
          }
          comment += code[i];
          i++;
        }
        tokens.push({ type: "comment", value: comment });
        continue;
      }

      // Strings (backticks)
      if (code[i] === "`") {
        let str = "`";
        i++;
        while (i < code.length && code[i] !== "`") {
          if (code[i] === "\\" && i + 1 < code.length) {
            str += code[i] + code[i + 1];
            i += 2;
          } else {
            str += code[i];
            i++;
          }
        }
        if (i < code.length && code[i] === "`") {
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
          if (code[i] === "\\" && i + 1 < code.length) {
            str += code[i] + code[i + 1];
            i += 2;
          } else {
            str += code[i];
            i++;
          }
        }
        if (i < code.length && code[i] === '"') {
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
          if (code[i] === "\\" && i + 1 < code.length) {
            str += code[i] + code[i + 1];
            i += 2;
          } else {
            str += code[i];
            i++;
          }
        }
        if (i < code.length && code[i] === "'") {
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
          "const",
          "let",
          "var",
          "async",
          "await",
          "function",
          "return",
          "if",
          "else",
          "try",
          "catch",
          "finally",
          "throw",
          "new",
          "class",
          "extends",
          "static",
        ];

        const importKeywords = ["import", "export", "from", "as"];

        if (importKeywords.includes(word)) {
          tokens.push({ type: "import", value: word });
        } else if (keywords.includes(word)) {
          tokens.push({ type: "keyword", value: word });
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

  const highlightCode = (code: string, lang: string) => {
    const lines = code.split("\n");

    return lines.map((line, idx) => {
      const tokens = tokenize(line);

      const highlighted = tokens
        .map((token, tokenIdx) => {
          const escaped = escapeHtml(token.value);

          // Check if this is a property (identifier after a dot)
          const prevToken = tokens[tokenIdx - 1];
          const isProperty =
            prevToken?.type === "other" && prevToken.value === ".";

          switch (token.type) {
            case "import":
              return `<span class="text-blue-400">${escaped}</span>`;
            case "keyword":
              return `<span class="text-purple-400">${escaped}</span>`;
            case "string":
              return `<span class="text-green-400">${escaped}</span>`;
            case "number":
              return `<span class="text-cyan-400">${escaped}</span>`;
            case "comment":
              return `<span class="text-gray-500">${escaped}</span>`;
            case "identifier":
              // Check if it's a property (preceded by dot)
              if (isProperty) {
                return `<span class="text-orange-400">${escaped}</span>`;
              }
              // Check if it's followed by ( to determine if it's a method call
              const nextToken = tokens[tokenIdx + 1];
              if (nextToken?.type === "other" && nextToken.value === "(") {
                return `<span class="text-yellow-400">${escaped}</span>`;
              }
              return escaped;
            case "other":
              return escaped;
            default:
              return escaped;
          }
        })
        .join("");

      const finalHighlighted = highlighted;

      return (
        <div key={idx} className="flex">
          <span className="text-gray-600 w-12 text-right pr-4 select-none">
            {idx + 1}
          </span>
          <span
            dangerouslySetInnerHTML={{ __html: finalHighlighted }}
            className="flex-1"
          />
        </div>
      );
    });
  };

  const renderPlainCode = () => {
    const lines = code.split("\n");
    return lines.map((line, idx) => (
      <div key={idx} className="flex">
        <span className="text-gray-600 w-12 text-right pr-4 select-none">
          {idx + 1}
        </span>
        <span className="flex-1">{line || "\u00A0"}</span>
      </div>
    ));
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-6">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
        <span className="text-sm font-mono text-gray-400">
          {title || language}
        </span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 hover:bg-gray-700 rounded transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
      <pre className="px-4 py-4 overflow-x-auto font-mono text-sm text-gray-100">
        <code className="font-mono">
          {isMounted ? highlightCode(code, language) : renderPlainCode()}
        </code>
      </pre>
    </div>
  );
}
