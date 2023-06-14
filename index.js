import express from 'express'
import env from './scripts/env/index.js'
import logger from './lib/logger/index.js'
import mainRouter from './routes/index.js'
import middleware from './middlewares/index.js'
import cors from 'cors'

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'


(() => {
	const JSDOC_SETUP = {
		definition: {
			openapi: '3.0.0',
			info: {
				title: 'AI Newsletter v2',
				version: '1.0.0'
			}
		},
		apis: ['./routes/*/index.js']
	}

	const swaggerSpec = swaggerJSDoc(JSDOC_SETUP)
	env.loadEnv()
	const app = express()
	const PORT = process.env.PORT || 4444
	app.use(cors({ origin: '*' }))
	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
	app.use(middleware.attachMiddleware)
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
	logger.success('Middlewares loaded!')
	app.use(mainRouter)
	logger.success('Routes loaded!')

	app.listen(PORT, () => {
		logger.success(`Server started at port ${PORT}`)
	})
})()