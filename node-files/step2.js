const fs = require('fs')
const axios = require('axios')


const path = process.argv[2]
console.log(process.argv)

function cat(path) {
    fs.readFile(path, 'utf-8', function(err, data) {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(data)
    })
}

// cat(process.argv[2])

async function webCat(urlPath) {
    console.log(urlPath)
    const res = await axios.get(urlPath)
    console.log(res)
}



(path.startsWith('http')) ? webCat(path): cat(path)