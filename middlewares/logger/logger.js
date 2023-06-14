import logger from '../../lib/logger/index.js'

/**
 * 
 * @param {import('express').Request} req 
 */
async function logReq(req) {
	logger.info(`[${req.method}]: ${req.url} -> ${JSON.stringify(req.body)}`)
}

export default { logReq }