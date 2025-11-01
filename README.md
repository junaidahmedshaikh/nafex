# Nafex

> Comprehensive testing library for API testing, system monitoring, and step execution tracking
> 

## Installation

```bash
npm install nafex

```

## Quick Start

### API Testing

```jsx
import { ApiTester } from 'nafex';

// Create an API tester instance
const tester = new ApiTester('<https://api.example.com>', {
  type: 'bearer',
  token: 'your-token'
});

// Test an endpoint (includes security, reliability, and performance tests)
const results = await tester.testEndpoint('/users');
console.log(results);

```

### Step Tracking

```jsx
import { StepTracker } from 'nafex';

const tracker = new StepTracker();

// Track execution steps
await tracker.trackStep('Login', async () => {
  // Your login logic here
  return await login();
});

await tracker.trackStep('Fetch Data', async () => {
  // Your data fetching logic
  return await fetchData();
});

// Generate reports
tracker.reporter.generateJSONReport();
tracker.reporter.generateSummary();

```

### System Resource Monitoring

### Option 1: Using the Singleton (Easy)

```jsx
import { systemResourceMonitor } from 'nafex';

// Start monitoring
await systemResourceMonitor.startMonitoring('My Test');

// Run your code
await doSomeWork();

// Stop and get summary
const summary = await systemResourceMonitor.stopMonitoring();
console.log(summary);

```

### Option 2: Using Class Instance (More Control)

```jsx
import { SystemResourceMonitor } from 'nafex';

// Create instance with options
const monitor = new SystemResourceMonitor({
  monitorInterval: 1000,
  enableLogging: true
});

// Start monitoring
await monitor.startMonitoring('Performance Test');

// Collect metrics at specific points
const metrics = await monitor.collectMetrics('Critical Operation');

// Stop monitoring
const summary = await monitor.stopMonitoring();

// Get all collected data
const allData = monitor.getData();

// Export as JSON
const jsonReport = monitor.exportJSON();

```

### Complete Example: Combining All Features

```jsx
import { ApiTester, StepTracker, systemResourceMonitor } from 'nafex';

async function runTests() {
  // Start system monitoring
  await systemResourceMonitor.startMonitoring('Full Test Suite');

  // Create testers
  const apiTester = new ApiTester('<https://api.example.com>');
  const stepTracker = new StepTracker();

  try {
    // Track each step
    await stepTracker.trackStep('API Health Check', async () => {
      return await apiTester.testEndpoint('/health');
    });

    await stepTracker.trackStep('User Authentication', async () => {
      return await apiTester.testEndpoint('/auth');
    });

    await stepTracker.trackStep('Data Fetch', async () => {
      return await apiTester.testEndpoint('/data');
    });

    // Generate reports
    stepTracker.reporter.generateJSONReport();
    stepTracker.reporter.generateSummary();

  } finally {
    // Stop monitoring
    const summary = await systemResourceMonitor.stopMonitoring();
    console.log('System Performance:', summary);
  }
}

runTests();

```

## API Reference

### ApiTester

**Constructor:**

```jsx
new ApiTester(baseURL, authConfig?, timeout?)

```

**Methods:**

- `testEndpoint(endpoint, config?)` - Run comprehensive tests on an endpoint

**Auth Config Examples:**

```jsx
// Bearer token
{ type: 'bearer', token: 'your-token' }

// Basic auth
{ type: 'basic', username: 'user', password: 'pass' }

// API Key
{ type: 'apiKey', apiKey: 'key', headerName: 'X-API-Key' }

```

### StepTracker

**Constructor:**

```jsx
new StepTracker()

```

**Methods:**

- `trackStep(stepName, stepFunction)` - Track execution of a step

### SystemResourceMonitor

**Constructor:**

```jsx
new SystemResourceMonitor(options?)

```

**Options:**

```jsx
{
  maxHistorySize: 1000,        // Max data points to store
  diskCacheTTL: 30000,         // Disk usage cache TTL (ms)
  enableLogging: true,         // Enable console logging
  logLevel: 'info',            // 'debug' | 'info' | 'warn' | 'error'
  monitorInterval: 2000       // Collection interval (ms)
}

```

**Methods:**

- `startMonitoring(testName, intervalMs?)` - Start continuous monitoring
- `stopMonitoring()` - Stop and get summary
- `collectMetrics(testStep)` - Collect metrics at current moment
- `pauseMonitoring()` - Pause without stopping
- `resumeMonitoring()` - Resume paused monitoring
- `getData(filters?)` - Get all collected data
- `getSummaryStats()` - Get statistical summary
- `clearData()` - Clear all monitoring data
- `exportJSON()` - Export data as JSON string

## Features

- ✅ **API Testing**: Security, reliability, and performance testing
- ✅ **Step Tracking**: Track and report on execution steps
- ✅ **System Monitoring**: CPU, memory, disk, and network monitoring
- ✅ **Performance Metrics**: P50, P95, P99 percentiles
- ✅ **Report Generation**: JSON and console reports

## Requirements

- Node.js >= 18.0.0

## License

ISC
