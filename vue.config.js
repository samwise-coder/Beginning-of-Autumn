module.exports = {
    devServer: {
        proxy: {
            '/HPImageArchive.aspx': {
                target: 'https://cn.bing.com',
                ws: true,
                changeOrigin: true
            },
            'a076d05399.js': {
                target: 'https://kit.fontawesome.com',
                ws: true,
                changeOrigin: true
            }
        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
}