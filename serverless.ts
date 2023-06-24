import type { AWS } from "@serverless/typescript";

import { productServices } from "@functions/product-services";

const serverlessConfiguration: AWS = {
  service: "beflow",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      DATABASE_CONNECTION:
        "mongodb+srv://root:crnujQPMXQ8D7yfn@cluster0.ghrtxcd.mongodb.net/?retryWrites=true&w=majority",
    },
  },
  // import the function via paths
  functions: { productServices },
  package: { individually: true },
  custom: {
    "serverless-offline": {
      DATABASE_CONNECTION:
        "mongodb+srv://root:crnujQPMXQ8D7yfn@cluster0.ghrtxcd.mongodb.net/?retryWrites=true&w=majority",
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
