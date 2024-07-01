module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "192.168.1.165",
      ref: "origin/main",
      repo: "https://github.com/Devgynflo/nextjs_pm2",
      path: "/home/ubuntu/",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      "ssh-options": "ForwardAgent=yes",
    },
  },
};
