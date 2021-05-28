import {Router, Request, Response} from 'express'
import { Ftp } from './ftp'
const ftp = new Ftp()
const routes = Router()


routes.get('/files', async (req: Request, res: Response) => {
  const result = await ftp.execute()
  res.status(200).json(result)
})

export default routes