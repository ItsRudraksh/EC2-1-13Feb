// filepath: ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "frontend",
      cwd: "client", // Assuming your frontend is in the 'client' directory
      script: "npm",
      args: "run dev", // Or 'start', depending on your frontend script
    },
    {
      name: "backend",
      cwd: "server", // Assuming your backend is in the 'server' directory or root
      script: "node", // Or 'npm' if you use npm start
      args: "index.js", // Replace with your main backend file
    },
  ],
};
