import loggerMiddleware from './logger/logger.js'
import e from 'express'

/**
 * 
 * @param {e.Request} req
 * @param {e.Response} res 
 * @param {e.NextFunction} next 
 */
function attachMiddleware(req, res, next) {
    loggerMiddleware.logReq(req)
    next()
}

export default { 
    attachMiddleware
}