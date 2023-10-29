const pageTitle = 'KHOOMI Spa'
const router = {
    404: {
        template: "./404.html",
        title: `Not Find | ${pageTitle}`
    },
    "/": {
        template: "./home.html",
        title: `Home | ${pageTitle}`
    },
    "/products": {
        template: "./products.html",
        title: `Products | ${pageTitle}`
    },
    "/Trending": {
        template: "./Trending.html",
        title: `Trending | ${pageTitle}`
    }
}

export default router;