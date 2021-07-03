import './App.css';
import { Logger } from 'cloudwatch-front-logger';
import { CloudWatchLogsClient } from '@aws-sdk/client-cloudwatch-logs';

// Override custom endpoint for localstack environment
class CustomCloudWatchLogsClient extends CloudWatchLogsClient {
  constructor(config) {
    super({
      ...config,
      endpoint: `http://localhost:${process.env.REACT_APP_LOCALSTACK_EXTERNAL_EDGE_PORT || '4566'}`,
    });
  }
}

// Configuration
const accessKeyId = 'XXXXXXXXXXXXXXXXXXXX'
const secretAccessKey = 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY';
const region = 'ap-northeast-1';
const logGroupName = 'my-logs';

// Setup Logger
const logger = new Logger(accessKeyId, secretAccessKey, region, logGroupName);
logger.setLevels(['warn', 'error']);
logger.install({
  ClientConstructor: CustomCloudWatchLogsClient,
});

// Trigger 1 error per 10 seconds
setInterval(() => console.error('Interval'), 10000);

// Render App
function App() {
  const endpoint = `http://localhost:${process.env.REACT_APP_LOCALSTACK_EXTERNAL_EDGE_PORT || '4566'}/`;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* Trigger 1 warning when clicked */}
          <button className="App-button" onClick={() => console.warn('Clicked')}>
            Trigger Warning
          </button>
        </div>
        <table className="App-table">
          <tbody>
            <tr>
              <th>Web Page</th>
              <td><code>{document.documentURI}</code></td>
            </tr>
            <tr>
              <th>CloudWatch Logs</th>
              <td><code><a className="App-link" target="_blank" href={endpoint} rel="noreferrer">{endpoint}</a></code></td>
            </tr>
          </tbody>
        </table>
        <a
          className="App-link"
          href="https://github.com/mpyw/cloudwatch-front-logger"
          target="_blank"
          rel="noopener noreferrer"
        >
          CloudWatch Front Logger
        </a>
      </header>
    </div>
  );
}

export default App;
