console.log('222')

async function start() {
    return await Promise.resolve('async working')
}

start().then(console.log)
