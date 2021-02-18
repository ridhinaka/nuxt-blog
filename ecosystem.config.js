const { join } = require('path')

module.exports = {
    apps: [
        {
            name: 'nuxt-app',
            exec_mode: 'cluster',
            script: 'server/index.js',
            cwd: './',
            instances: 2,
            autorestart: true,
            watch: false,
            max_memory_restart: '900M',
            args: `-c ${join(__dirname, 'nuxt.config.js')}`,
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
}
