import { Router } from 'express'
import getRSSFeed from '../../controllers/rss/getRSSFeed.js'


const router = Router()
/**
   * @swagger
   * tags:
   *   name: Feed
   *   description: RSS Feed endpoints
   */
  
/**
 * @openapi
 * /feed/:
 *  post:
 *      description: Get RSS feed from RSS URL
 *      tags: [Feed]
 *      produces: 
 *          - application/json
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          url:
 *                              type: string
 *                              description: The URL for the RSS Feed
 *                              example: https://randomdomain.com/feed
 *      responses:
 *          200:
 *              description: an object containing the RSS feed items
 */
router.post('/feed/', getRSSFeed)


export default router

