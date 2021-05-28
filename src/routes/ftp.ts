const ftp = require('basic-ftp')


export class Ftp {

 async  execute() {

    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
        })
        const list = await client.list()

        const data = list.map((obj: any) => ({name: obj.name, updatedAt: obj.modifiedAt}))
        return data
    }
    catch(err) {
        console.log('error => ',err)
    }
    client.close()
  }
}