import parseRSS from '../../lib/rssParser/rssParser.js'
import e from 'express'

/**
 * 
 * @param {e.Request} req 
 * @param {e.Response} res 
 */
async function getRSSFeed(req, res) {
	try {
		const { url } = req.body || {}
		if(url) {
			const feed = await parseRSS(url)
			if(feed) return res.status(200).json(feed)
			throw String('Feed not found')
		}
		throw String('URL not provided')
        
	} catch (error) {
		res.status(400).send(error?.message || JSON.stringify(error))
	}
}

export default getRSSFeed