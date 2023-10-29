import router from './router.js'

document.addEventListener('click', event => {
    event.preventDefault()


    if(event.target.className.includes("menu__item") || event.target.className.includes("mobile-menu__item") || event.target.className.includes("mobile-menu__item") ) {
        urlRoutes(event)
    } else {
        return false
    }
})

function urlRoutes(event) {
    window.history.pushState({}, "", event.target.href)
    locationHandler()
}

async function locationHandler() {
    const loc = window.location.pathname;

    const route = router[loc] || router[404];

    const html = await fetch(route.template).then(res => res.text())
    document.querySelector('#content').innerHTML = html;

    document.title = route.title
}


window.onpopstate = locationHandler;