# CloudWatch Front Logger Demo

Demo app for [mpyw/cloudwatch-front-logger](https://github.com/mpyw/cloudwatch-front-logger).

![image](https://user-images.githubusercontent.com/1351893/124327974-b7947e80-dbc3-11eb-98b0-8189d7be415c.png)

## Requirements

- Linux / macOS / WSL2
- Git
- Node.js
- Docker

## Preparation

```bash
git clone https://github.com/mpyw/cloudwatch-front-logger.git
cd cloudwatch-front-logger
npm install
```

## Usage

### Basic

```bash
npm start
```

Default port is `4566`.

### Specify port for LocalStack

```bash
REACT_APP_LOCALSTACK_EXTERNAL_EDGE_PORT=9999 npm start
```
