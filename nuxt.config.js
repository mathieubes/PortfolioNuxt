export default {
    server: {
        port: 8080
    },
    css: [
        '@/assets/scss/style'
    ],
    head: {
        title: 'MB - Dev & UI',
        meta: [
            { charset: 'utf-8' },
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png'}
        ]
    },
    components: true,
    buildModules: ["@nuxtjs/svg"]
}