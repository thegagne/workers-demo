addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a given request object
 * @param {Request} request
 */
async function handleRequest(request) {
    console.log('Got request', request)
    let num = parseFizzBuzzUrl(request.url)
    if (num) {
        console.log('Got num: ', num)
        let fb = getFizzBuzz(num)
        console.log('Got fb: ', fb)
        const response = new Response(fb,
            {status: 200, statusText: 'ok'})
    }
    else {
        let response = await fetch('https://thegagne.github.io/fizzbuzz.html')
    }
    return response
}

function parseFizzBuzzUrl(url) {
    let myUrl = new URL(url)
    console.log('path: ', myUrl.pathname.split('/')[2])
    if (myUrl.pathname.split('/')[1] === "fizzbuzz") {
        return +myUrl.pathname.split('/')[2]
    }
}

function getFizzBuzz(num) {
    if (num == 0) {
        return "No soda bees here"
    }
    if (num % 15 == 0) {
        return "FizzBuzz"
    }
    if (num % 5 == 0) {
        return "Buzz"
    }
    if (num % 3 == 0) {
        return "Fizz"
    }
    return "None"
}
