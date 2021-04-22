export default {
    server: {
	host: '51.210.254.197',
        port: 3000
    },
    css: [
        '@/assets/scss/style'
    ],
    head: {
        title: 'MB - Dev & UI',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png'}
        ]
    },
    components: true,
    buildModules: ["@nuxtjs/svg"]
}
