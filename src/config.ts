import { Stage } from './stage';

interface Configuration {
  apiGatewayBaseUrl: string;
}

interface Configurations {
  local: Configuration;
  dev: Configuration;
  stg: Configuration;
  prd: Configuration;
}

const local: Configuration = {
  apiGatewayBaseUrl: 'http://localhost:5000'
};

const dev: Configuration = {
  apiGatewayBaseUrl: 'https://api.dev.test.com'
};

const stg: Configuration = {
  apiGatewayBaseUrl: 'https://api.stg.test.com'
};

const prd: Configuration = {
  apiGatewayBaseUrl: 'https://api.prd.test.com'
};

const configurations: Configurations = {
  local,
  dev,
  stg,
  prd
};

export default (stage: Stage): Configuration => {
  return configurations[stage];
};
