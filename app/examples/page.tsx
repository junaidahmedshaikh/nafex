import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ColorCodeBlock } from "@/components/color-code-block";
import { Code, Zap, Shield, BarChart3, Workflow } from "lucide-react";
import HeroHeader from "@/components/hero-header";
export const metadata = {
  title: "Examples - nafex | Real-World Code Examples",
  description:
    "Real-world code examples for nafex API testing, step tracking, and system monitoring",
};

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <HeroHeader
        title="Code Examples"
        subtitle=" Real-world examples showing how to use Nafex for API testing, step
            tracking, and system monitoring in your projects."
      />

      {/* Examples */}
      <section className="px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Example 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Example 1: Simple API Test</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Basic API testing with automatic validation and reporting:
            </p>
            <ColorCodeBlock
              language="javascript"
              code={`import { ApiTester } from 'nafex';

async function testUserAPI() {
  const api = new ApiTester('https://api.example.com');

  // Test an endpoint - runs all checks automatically
  const result = await api.test('/users/1');
  
  console.log(\`
    Grade: \${result.grade}
    Risk Score: \${result.riskScore}
    Success Rate: \${result.summary.successRate}%
  \`);

  // Automatic features:
  // ✅ Status code validation
  // ✅ Response shape detection
  // ✅ Security testing
  // ✅ Performance checks
  // ✅ Reliability analysis
}

testUserAPI().catch(console.error);`}
              title="simple-api-test.js"
            />
          </div>

          {/* Example 2 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                Example 2: Multi-Step Workflow
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Track multiple steps across your test workflow with automatic
              timing:
            </p>
            <ColorCodeBlock
              language="javascript"
              code={`import { stepTracker, ApiTester } from 'nafex';

async function userCreationWorkflow() {
  const api = new ApiTester('https://api.example.com');

  await stepTracker.trackStep('Fetch user list', async () => {
    const users = await api.get('/users');
    return users.data;
  });

  await stepTracker.trackStep('Create new user', async () => {
    const newUser = await api.post('/users', {
      name: 'John Doe',
      email: 'john@example.com'
    });
    return newUser.data;
  });

  await stepTracker.trackStep('Verify user creation', async () => {
    const users = await api.get('/users');
    return users.data.length > 0;
  });

  // Save reports: JSON, HTML, and CSV
  stepTracker.reporter.saveAllReports();
  console.log('✅ Workflow completed and reports saved');
}

userCreationWorkflow().catch(console.error);`}
              title="workflow-example.js"
            />
          </div>

          {/* Example 3 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                Example 3: Security Testing
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Perform comprehensive security testing with authentication:
            </p>
            <ColorCodeBlock
              language="javascript"
              code={`import { ApiTester } from 'nafex';

async function securityAudit() {
  const api = new ApiTester(
    'https://api.example.com',
    {
      type: 'bearer',
      token: process.env.API_TOKEN
    }
  );

  // Run comprehensive security tests
  const securityResults = await api.security('/admin/users');
  
  console.log('Security Test Results:');
  console.log('✅ HTTPS enforced:', securityResults.https);
  console.log('✅ CORS configured:', securityResults.cors);
  console.log('✅ Security headers:', securityResults.headers);
  console.log('✅ SQL injection protection:', securityResults.sqlInjection);
  console.log('✅ XSS protection:', securityResults.xss);

  // Also run complete test with focus on security
  const fullResults = await api.test('/admin/users', {
    skipTests: []  // Run all tests
  });

  console.log(\`
    Overall Grade: \${fullResults.grade}
    Risk Score: \${fullResults.riskScore}
  \`);
}

securityAudit().catch(console.error);`}
              title="security-testing.js"
            />
          </div>

          {/* Example 4 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                Example 4: Performance Testing
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Load testing with concurrent users and performance monitoring:
            </p>
            <ColorCodeBlock
              language="javascript"
              code={`import { ApiTester, systemResourceMonitor } from 'nafex';

async function performanceTest() {
  const api = new ApiTester('https://api.example.com');

  // Start monitoring system resources
  await systemResourceMonitor.startMonitoring('Load Test', 1000);

  try {
    // Perform load test
    const loadTest = await api.performance('/products', 'load', {
      startUsers: 1,
      maxUsers: 50,
      rampUpTime: 60,  // Ramp up over 60 seconds
      duration: 300     // Run for 5 minutes
    });

    console.log('Load Test Results:');
    console.log('📊 Average Response Time:', loadTest.avgLatency + 'ms');
    console.log('📊 95th Percentile:', loadTest.p95 + 'ms');
    console.log('📊 99th Percentile:', loadTest.p99 + 'ms');
    console.log('📊 Max Response Time:', loadTest.maxLatency + 'ms');
    console.log('📊 Throughput:', loadTest.throughput + ' req/s');
    console.log('📊 Error Rate:', loadTest.errorRate + '%');
  } finally {
    // Stop monitoring and get summary
    const summary = await systemResourceMonitor.stopMonitoring();
    
    console.log('System Performance:');
    console.log('💻 Average CPU:', summary.avgCPU?.toFixed(2) + '%');
    console.log('💾 Average Memory:', summary.avgMemory?.toFixed(2) + 'MB');
    console.log('📈 Performance Score:', summary.performanceScore);
  }
}

performanceTest().catch(console.error);`}
              title="performance-testing.js"
            />
          </div>

          {/* Example 5 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                Example 5: Complete Test Suite
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Comprehensive test suite combining all features with
              cross-component tracking:
            </p>
            <ColorCodeBlock
              language="javascript"
              code={`import { ApiTester, stepTracker, systemResourceMonitor } from 'nafex';

async function runCompletTestSuite() {
  const api = new ApiTester(
    'https://api.example.com',
    { type: 'bearer', token: process.env.API_TOKEN }
  );

  // Start system monitoring
  await systemResourceMonitor.startMonitoring('Complete Test Suite', 2000);

  try {
    // API Functionality Tests
    await stepTracker.trackStep('Test User Endpoints', async () => {
      return await api.test('/users/1');
    });

    await stepTracker.trackStep('Test Product Endpoints', async () => {
      return await api.test('/products');
    });

    // Security Tests
    await stepTracker.trackStep('Security Audit', async () => {
      return await api.security('/admin');
    });

    // Performance Tests
    await stepTracker.trackStep('Load Testing', async () => {
      return await api.performance('/api/data', 'load', {
        startUsers: 1,
        maxUsers: 30,
        rampUpTime: 30
      });
    });

    // Reliability Tests
    await stepTracker.trackStep('Reliability Check', async () => {
      return await api.reliability('/critical-endpoint', {
        concurrency: 5,
        iterations: 50
      });
    });
  } finally {
    // Get results
    const systemSummary = await systemResourceMonitor.stopMonitoring();
    
    console.log('📊 System Performance Summary:');
    console.log('Performance Score:', systemSummary.performanceScore);
    console.log('Average CPU:', systemSummary.avgCPU?.toFixed(2) + '%');
    console.log('Average Memory:', systemSummary.avgMemory?.toFixed(2) + 'MB');

    // Save all reports
    stepTracker.reporter.saveAllReports();
    stepTracker.printFinalSummary();
  }
}

runCompleteTestSuite().catch(console.error);`}
              title="complete-test-suite.js"
            />
          </div>

          {/* Example 6 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">
                Example 6: CI/CD Integration
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Integration with CI/CD pipelines for automated testing:
            </p>
            <ColorCodeBlock
              language="javascript"
              code={`import { ApiTester, stepTracker } from 'nafex';

async function cicdTestRun() {
  const api = new ApiTester(
    process.env.API_URL || 'https://api.example.com',
    { type: 'bearer', token: process.env.API_TOKEN }
  );

  let testsPassed = true;

  try {
    await stepTracker.trackStep('Run API Tests', async () => {
      const result = await api.test('/health');
      
      // Fail CI/CD if tests don't meet criteria
      if (result.grade !== 'A' && result.grade !== 'B') {
        testsPassed = false;
        throw new Error(\`API grade is \${result.grade}, expected A or B\`);
      }
      
      if (result.riskScore > 30) {
        testsPassed = false;
        throw new Error(\`Risk score \${result.riskScore} exceeds limit of 30\`);
      }

      return result;
    });

    // Save reports for CI/CD artifacts
    stepTracker.reporter.saveAllReports();

    if (testsPassed) {
      console.log('✅ All tests passed');
      process.exit(0);
    } else {
      console.log('❌ Tests failed');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Test execution failed:', error.message);
    stepTracker.reporter.saveAllReports();
    process.exit(1);
  }
}

cicdTestRun();`}
              title="cicd-integration.js"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
