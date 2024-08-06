module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 1,
      script: '/home/azureuser/dist/server/index.mjs'
    }
  ]
}
