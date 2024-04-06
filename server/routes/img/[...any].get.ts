import fs from 'node:fs'
import { sendStream } from 'h3'

export default defineEventHandler((event) => {
    // console log pwd
    console.log('pwd', process.cwd())
    return sendStream(event, fs.createReadStream('./public/img/intro.jpg'))
})
