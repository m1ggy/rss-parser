import Parser from 'rss-parser'

const parser = new Parser()

async function parseRSS(url) {
	return await parser.parseURL(url) 
}


export default parseRSS