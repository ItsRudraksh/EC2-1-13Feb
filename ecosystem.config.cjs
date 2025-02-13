module.exports = {
  apps: [
    {
      name: "deploy",
      script: "npm",
      args: "run deploy",
      cwd: ".", // Set the current working directory to the root of your project
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
