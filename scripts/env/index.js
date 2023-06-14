import dotenv from 'dotenv'
import logger from '../../lib/logger/index.js'
function loadEnv() {
	const config = dotenv.config({ path: `${process.cwd()}/.env` })

	if(config) logger.success('Config loaded!')
}

export default {
	loadEnv
}