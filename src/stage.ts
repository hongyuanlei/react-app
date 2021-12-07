import assert from 'assert';

declare global {
  interface Window {
    STAGE: string;
  }
}

export type Stage = 'local' | 'dev' | 'stg' | 'prd';

const isValidStage = (value: string): value is Stage =>
  ['local', 'dev', 'stg', 'prd'].includes(value);

export default (): Stage => {
  let stage: string = window.STAGE;
  if (process.env.NODE_ENV === 'development') {
    stage = 'local';
  }
  assert(isValidStage(stage), Error(`Stage: ${stage} is invalid.`));
  return stage;
};
