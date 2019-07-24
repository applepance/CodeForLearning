const isPro = process.env.NODE_ENV === 'production'

module.exports = {
    app: {
        domain: isPro ? 'https://www.86886.wang' : 'http://127.0.0.1:3025',
        siteName: 'Essay',
    }
}