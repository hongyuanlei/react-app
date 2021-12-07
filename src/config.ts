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

export default (stage: Stage) => {
    return configurations[stage];
};
