import rss from './rss/index.js'
import { Router } from 'express'

const mainRouter = Router()
mainRouter.use(rss)

export default mainRouter