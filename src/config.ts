import assert from "assert";

interface Configuration {
    apiGatewayBaseUrl: String,
}

interface Configurations {
    dev: Configuration,
    stg: Configuration,
    prd: Configuration,
}

const dev: Configuration = {
    apiGatewayBaseUrl: "https://api.dev.test.com",
};

const stg: Configuration = {
    apiGatewayBaseUrl: "https://api.stg.test.com",
};

const prd: Configuration = {
    apiGatewayBaseUrl: "https://api.prd.test.com",
};

const configurations: Configurations = {
    dev,
    stg,
    prd
}

type Stage = "dev" | "stg" | "prd"

const isValidStage = (value: String): value is Stage => ["dev", "stg", "prd"].includes(value as any);

export default (stage: String): Configuration => {
    assert(isValidStage(stage), Error(`Stage: ${stage} is invalid.`))
    return configurations[stage];
};
