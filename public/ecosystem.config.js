module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 1,
      script: './server/index.mjs'
    }
  ]
}
