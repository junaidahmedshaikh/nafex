"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ColorCodeBlock } from "@/components/color-code-block";
import { Package, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 sm:px-6 lg:px-8 border-b border-border">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(100, 50, 255, 0.1) 0%, transparent 50%)",
          }}
        ></div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Complete Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Everything you need to master Nafex for API testing, step tracking,
            and system monitoring.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      {/* <section className="px-4 py-12 sm:px-6 lg:px-8 bg-card/50 border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {[
              { title: "Installation", id: "installation" },
              { title: "Quick Start", id: "quick-start" },
              { title: "API Module", id: "api-module" },
              { title: "Step Tracking", id: "step-tracking" },
              { title: "System Monitor", id: "system-monitoring" },
              { title: "Best Practices", id: "best-practices" },
              { title: "Error Handling", id: "error-handling" },
              { title: "Troubleshooting", id: "troubleshooting" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-2 rounded-lg bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-all text-sm font-medium border border-border hover:border-primary group"
              >
                <span className="truncate">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-24">
          {/* Installation */}
          <div id="installation" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 flex items-center gap-3">
              <Package className="h-8 w-8 text-primary flex-shrink-0" />
              Installation & Setup
            </h2>

            <div className="space-y-8">
              <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                <ul className="space-y-3">
                  {[
                    { icon: CheckCircle, text: "Node.js 18.0.0 or higher" },
                    { icon: CheckCircle, text: "npm or yarn package manager" },
                    { icon: CheckCircle, text: "ESM support in your project" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex gap-3 items-start">
                        <Icon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Install via npm</h3>
                <ColorCodeBlock
                  code="npm install nafex"
                  language="bash"
                  title="Install nafex"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Install via yarn</h3>
                <ColorCodeBlock
                  code="yarn add nafex"
                  language="bash"
                  title="Install with yarn"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Configure ESM Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ensure your{" "}
                  <code className="bg-card px-2 py-1 rounded text-sm font-mono">
                    package.json
                  </code>{" "}
                  includes the following:
                </p>
                <ColorCodeBlock
                  code={`{
  "type": "module",
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "nafex": "^2.0.0"
  }
}`}
                  language="json"
                  title="package.json"
                />
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div id="quick-start" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 flex items-center gap-3">
              <Zap className="h-8 w-8 text-primary flex-shrink-0" />
              Quick Start Examples
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  1. Basic API Testing
                </h3>
                <p className="text-muted-foreground mb-6">
                  Perform comprehensive API testing with a single line of code:
                </p>
                <ColorCodeBlock
                  code={`import { ApiTester } from 'nafex';

async function testAPI() {
  const api = new ApiTester('https://jsonplaceholder.typicode.com');

  // Simple GET request
  const response = await api.get('/posts/1');
  console.log('Status:', response.status);
  console.log('Data:', response.data);

  // Comprehensive testing (1 line!)
  const results = await api.test('/posts/1');
  console.log('Grade:', results.grade);
  console.log('Risk Score:', results.riskScore);
}

testAPI().catch(console.error);`}
                  language="typescript"
                  title="api-testing.ts"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">2. Step Tracking</h3>
                <p className="text-muted-foreground mb-6">
                  Track execution steps with automatic timing and error
                  tracking:
                </p>
                <ColorCodeBlock
                  code={`import { stepTracker } from 'nafex';

async function trackSteps() {
  await stepTracker.trackStep('Initialize Application', async () => {
    console.log('Initializing...');
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { initialized: true };
  });

  await stepTracker.trackStep('Load Data', async () => {
    console.log('Loading...');
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { users: [{ id: 1, name: 'John' }] };
  });

  await stepTracker.trackStep('Process Data', async () => {
    console.log('Processing...');
    await new Promise((resolve) => setTimeout(resolve, 200));
    return { processed: true };
  });

  // Print summary
  stepTracker.printFinalSummary();
  
  // Save reports (JSON, HTML, CSV)
  stepTracker.reporter.saveAllReports();
}

trackSteps().catch(console.error);`}
                  language="typescript"
                  title="step-tracking.ts"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  3. System Monitoring
                </h3>
                <p className="text-muted-foreground mb-6">
                  Monitor CPU, memory, and disk usage in real-time:
                </p>
                <ColorCodeBlock
                  code={`import { systemResourceMonitor } from 'nafex';

async function monitorPerformance() {
  // Start monitoring
  await systemResourceMonitor.startMonitoring('API Test Suite', 2000);

  // Your test code here
  console.log('Running tests...');
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Stop monitoring and get summary
  const summary = await systemResourceMonitor.stopMonitoring();
  
  console.log('Performance Score:', summary.performanceScore);
  console.log('Average CPU:', summary.avgCPU?.toFixed(2) + '%');
  console.log('Average Memory:', summary.avgMemory?.toFixed(2) + 'MB');
  console.log('Peak Memory:', summary.maxMemory?.toFixed(2) + 'MB');
}

monitorPerformance().catch(console.error);`}
                  language="typescript"
                  title="system-monitoring.ts"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  4. Complete Test Suite
                </h3>
                <p className="text-muted-foreground mb-6">
                  Combine all three features for comprehensive testing:
                </p>
                <ColorCodeBlock
                  code={`import { ApiTester, stepTracker, systemResourceMonitor } from 'nafex';

async function completeTestSuite() {
  const api = new ApiTester('https://jsonplaceholder.typicode.com');

  // Start system monitoring
  await systemResourceMonitor.startMonitoring('Complete Test Suite', 2000);

  try {
    await stepTracker.trackStep('Test Posts Endpoint', async () => {
      const results = await api.test('/posts/1');
      console.log('Posts Test Grade:', results.grade);
      return results;
    });

    await stepTracker.trackStep('Test Users Endpoint', async () => {
      const results = await api.test('/users/1');
      console.log('Users Test Grade:', results.grade);
      return results;
    });

    await stepTracker.trackStep('Test Comments Endpoint', async () => {
      const results = await api.test('/comments/1');
      console.log('Comments Test Grade:', results.grade);
      return results;
    });
  } finally {
    // Print execution summary
    stepTracker.printFinalSummary();
    
    // Get system monitoring summary
    const summary = await systemResourceMonitor.stopMonitoring();
    console.log('\\n📊 System Monitoring:');
    console.log('Performance Score:', summary.performanceScore);
    console.log('Average CPU:', summary.avgCPU?.toFixed(2) + '%');
    console.log('Average Memory:', summary.avgMemory?.toFixed(2) + 'MB');
    
    // Save all reports
    stepTracker.reporter.saveAllReports();
  }
}

completeTestSuite().catch(console.error);`}
                  language="typescript"
                  title="complete-suite.ts"
                />
              </div>
            </div>
          </div>

          {/* API Module */}
          <div id="api-module" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              API Testing Module
            </h2>

            <div className="space-y-8">
              <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground mb-4">
                  The API Testing module provides comprehensive HTTP testing
                  with:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Security testing (10+ security checks)",
                    "Performance testing (6 test types)",
                    "Reliability testing (concurrency, errors)",
                    "Schema validation and detection",
                    "Automatic response analysis",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Creating an API Tester Instance
                </h3>
                <ColorCodeBlock
                  code={`import { ApiTester } from 'nafex';

const api = new ApiTester(
  'https://api.example.com',
  {
    type: 'bearer',              // 'bearer', 'basic', 'apiKey'
    token: 'your-api-token'      // Your authentication token
  },
  {
    timeout: 5000,               // Request timeout (ms)
    retries: 3,                  // Retry attempts
    retryDelay: 1000,            // Delay between retries (ms)
    autoValidate: true,          // Auto-validate responses
    autoDetectShape: true        // Auto-detect response structure
  }
);`}
                  language="typescript"
                  title="api-setup.ts"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">HTTP Methods</h3>
                <ColorCodeBlock
                  code={`// GET request
const getResponse = await api.get('/users', { 
  timeout: 5000,
  validateStatus: [200]
});

// POST request
const postResponse = await api.post('/users', { 
  name: 'John Doe',
  email: 'john@example.com'
});

// PUT request (full replacement)
const putResponse = await api.put('/users/1', { 
  name: 'Jane Doe',
  email: 'jane@example.com'
});

// PATCH request (partial update)
const patchResponse = await api.patch('/users/1', { 
  name: 'Jane Smith'
});

// DELETE request
const deleteResponse = await api.delete('/users/1', {
  validateStatus: [200, 204]
});

// All methods return standardized response object
console.log({
  status: getResponse.status,           // 200
  statusText: getResponse.statusText,   // 'OK'
  data: getResponse.data,               // Response body
  responseTime: getResponse.responseTime, // Latency in ms
  contentType: getResponse.contentType, // 'application/json'
  size: getResponse.size,               // Response size (bytes)
  isJSON: getResponse.isJSON            // Is valid JSON
});`}
                  language="typescript"
                  title="http-methods.ts"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Comprehensive Testing
                </h3>
                <ColorCodeBlock
                  code={`// One-line comprehensive testing
const result = await api.test('/users/1');

// Test result includes security, performance, reliability
console.log({
  endpoint: result.endpoint,
  timestamp: result.timestamp,
  summary: {
    total: result.summary.total,
    passed: result.summary.passed,
    failed: result.summary.failed,
    successRate: result.summary.successRate
  },
  grade: result.grade,                 // A, B, C, D, or F
  riskScore: result.riskScore,         // 0-100 (lower is better)
  suggestions: result.suggestions      // Improvement tips
});

// With custom options
const customResult = await api.test('/users/1', {
  schema: {
    id: 'number',
    name: 'string',
    email: 'string',
    createdAt: 'string'
  },
  performance: {
    iterations: 100,
    concurrentUsers: 20
  },
  skipTests: ['reliability']  // Skip specific tests
});`}
                  language="typescript"
                  title="comprehensive-testing.ts"
                />
              </div>
            </div>
          </div>

          {/* Step Tracking */}
          <div id="step-tracking" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Step Tracking Module
            </h2>

            <div className="space-y-8">
              <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground">
                  Track execution steps across your entire application with
                  automatic timing, error tracking, and beautiful reports. Steps
                  from multiple files automatically combine into unified
                  reports.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Using Global Instance
                </h3>
                <ColorCodeBlock
                  code={`import { stepTracker } from 'nafex';

// Track a single step
await stepTracker.trackStep('Step Name', async () => {
  // Your code here
  console.log('Step executing...');
  await someAsyncWork();
  return { result: 'data' };
});

// Available methods:
// - trackStep(name, callback, options?)  - Execute and track a step
// - printFinalSummary()                   - Print formatted summary
// - reporter.saveAllReports()             - Save JSON, HTML, CSV reports
// - getSteps()                            - Get array of all steps
// - clear()                               - Clear all steps

// Step options:
await stepTracker.trackStep('Retry Example', async () => {
  // This might fail, will retry
  throw new Error('Temporary failure');
}, {
  retry: 2,                  // Retry 2 times
  timeout: 10000             // Step timeout (ms)
});`}
                  language="typescript"
                  title="step-tracking.ts"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Cross-Component Tracking
                </h3>
                <ColorCodeBlock
                  code={`// userService.ts
import { stepTracker } from 'nafex';

export async function fetchUsers() {
  await stepTracker.trackStep('Fetch Users from API', async () => {
    const response = await fetch('/api/users');
    return await response.json();
  });
}

// postService.ts
import { stepTracker } from 'nafex';

export async function fetchPosts() {
  await stepTracker.trackStep('Fetch Posts from API', async () => {
    const response = await fetch('/api/posts');
    return await response.json();
  });
}

// main.ts
import { stepTracker } from 'nafex';
import { fetchUsers } from './userService.js';
import { fetchPosts } from './postService.js';

async function main() {
  await fetchUsers();        // Step 1
  await fetchPosts();        // Step 2

  // Both steps combined in one unified report!
  stepTracker.printFinalSummary();
  stepTracker.reporter.saveAllReports();
}

main().catch(console.error);`}
                  language="typescript"
                  title="cross-component.ts"
                />
              </div>
            </div>
          </div>

          {/* System Monitoring */}
          <div id="system-monitoring" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              System Monitoring Module
            </h2>

            <div className="space-y-8">
              <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor real-time CPU, memory, and disk usage with automatic
                  performance scoring.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Real-time CPU, memory, disk monitoring",
                    "Automatic performance score (0-100)",
                    "Historical data collection",
                    "Cross-platform support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Using System Monitor
                </h3>
                <ColorCodeBlock
                  code={`import { systemResourceMonitor } from 'nafex';

// Start monitoring with 2-second interval
await systemResourceMonitor.startMonitoring('Test Suite', 2000);

// Your test code here
await runTests();

// Stop monitoring and get summary
const summary = await systemResourceMonitor.stopMonitoring();

console.log({
  performanceScore: summary.performanceScore,      // 0-100
  avgCPU: summary.avgCPU?.toFixed(2),              // Average %
  avgMemory: summary.avgMemory?.toFixed(2),        // Average MB
  maxCPU: summary.maxCPU?.toFixed(2),              // Peak %
  maxMemory: summary.maxMemory?.toFixed(2),        // Peak MB
  duration: summary.duration,                      // Total ms
  samples: summary.samples                         // Number of samples
});

// Available methods:
// - startMonitoring(name, interval)  - Start collecting metrics
// - stopMonitoring()                 - Stop and get summary
// - getSystemStats()                 - Get current stats
// - getPerformanceScore()            - Get current score`}
                  language="typescript"
                  title="system-monitoring.ts"
                />
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div id="best-practices" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Best Practices
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Use Step Tracking for Workflows",
                  description:
                    "Track steps for better visibility into test execution flow with automatic timing.",
                  color: "green",
                },
                {
                  title: "Always Validate Status Codes",
                  description:
                    "Don't ignore status codes. Validate expected responses to catch failures early.",
                  color: "blue",
                },
                {
                  title: "Use Environment Variables for Secrets",
                  description:
                    "Never hardcode API tokens or credentials. Use environment variables instead.",
                  color: "purple",
                },
                {
                  title: "Monitor System Resources",
                  description:
                    "Use system monitoring for long-running tests to track performance.",
                  color: "orange",
                },
                {
                  title: "Save Reports at the End",
                  description:
                    "Call saveAllReports() once at the end, not after each step.",
                  color: "cyan",
                },
                {
                  title: "Handle Errors Properly",
                  description:
                    "Use try/catch blocks. Errors in steps are automatically tracked in reports.",
                  color: "pink",
                },
              ].map((practice, idx) => {
                const colorClasses = {
                  green: "border-green-500 bg-green-500/5",
                  blue: "border-blue-500 bg-blue-500/5",
                  purple: "border-purple-500 bg-purple-500/5",
                  orange: "border-orange-500 bg-orange-500/5",
                  cyan: "border-cyan-500 bg-cyan-500/5",
                  pink: "border-pink-500 bg-pink-500/5",
                };
                return (
                  <div
                    key={idx}
                    className={`border-l-4 ${
                      colorClasses[practice.color as keyof typeof colorClasses]
                    } rounded p-6`}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {practice.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Error Handling */}
          <div id="error-handling" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Error Handling
            </h2>

            <div className="space-y-6">
              <ColorCodeBlock
                code={`import { ApiTester, stepTracker } from 'nafex';

async function robustTesting() {
  const api = new ApiTester('https://api.example.com');

  try {
    // Wrap API tests in try/catch
    await stepTracker.trackStep('Test Critical Endpoint', async () => {
      try {
        const response = await api.get('/critical');
        
        if (!response.ok) {
          throw new Error(\`Unexpected status: \${response.status}\`);
        }
        
        return response.data;
      } catch (error) {
        console.error('API Error:', error instanceof Error ? error.message : error);
        throw error;  // Re-throw to mark step as failed
      }
    });
  } catch (stepError) {
    console.error('Step failed:', stepError);
  }

  // Errors are automatically tracked in reports
  stepTracker.printFinalSummary();
  stepTracker.reporter.saveAllReports();
}

robustTesting().catch(console.error);`}
                language="typescript"
                title="error-handling.ts"
              />
            </div>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" className="scroll-mt-32">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Troubleshooting
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Request timed out",
                  cause: "API is slow or unreachable",
                  solution: "Increase timeout: { timeout: 10000 }",
                },
                {
                  title: "Status code mismatch",
                  cause: "Wrong status code expectation",
                  solution: "Update validateStatus in options",
                },
                {
                  title: "System stats undefined",
                  cause: "OS permissions issue",
                  solution: "Run with elevated privileges or check OS support",
                },
                {
                  title: "Cannot find module",
                  cause: "Missing ESM configuration",
                  solution: 'Add "type": "module" to package.json',
                },
                {
                  title: "Reports not generated",
                  cause: "Incorrect path or permissions",
                  solution: "Check ./Report/ directory exists and is writable",
                },
              ].map((issue, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-6 bg-card/30"
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                    {issue.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Cause:</strong> {issue.cause}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> {issue.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
