module.exports = {
  apps: [
    {
      name: 'poc',
      exec_mode: 'cluster',
      instances: '3', // Or a number of instances
      script: './dist/index.js',

    }
  ]
}
