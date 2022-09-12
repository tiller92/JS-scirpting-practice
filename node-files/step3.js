const fs = require('fs')
const axios = require('axios')


const path = process.argv[3]
console.log(path)
const cmd1 = process.argv[2]
let out

cmd1 === '--out' ? out = true : out = false

function cat(path, out = false) {
    if (out === false) {
        fs.readFile(path, 'utf-8', function(err, data) {
            if (err) {
                console.error(err)
                process.exit(1)
            }
            console.log(data)
        })
    }
    // write data to file
    if (out) {
        fs.readFile(path, 'utf-8', function(err, data) {
            if (err) {
                console.log(err)
                process.exit(1)
            }
            fs.writeFile('new.txt', data, 'utf-8', function(err) {
                if (err) {
                    console.error(err)
                    process.exit(1)
                }
                console.log('check new.txt')

            })
        })

    }
}


async function webCat(urlPath, out = false) {
    if (out === false) {
        console.log(urlPath)
        const res = await axios.get(urlPath)
        console.log(res)
    }
    // write data to file
    if (out) {
        const res = await axios.get(urlPath)
        console.log(await typeof(res))

        fs.writeFile('new.txt', res.data, 'utf-8', function(err) {
            if (err) {
                console.error(err)
                process.exit(1)
            }
            console.log('check new.txt')

        })
    }
}



(path.startsWith('http')) ? webCat(path, out): cat(path, out)