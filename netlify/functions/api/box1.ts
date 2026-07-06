import { drizzle } from 'drizzle-orm/netlify-db'
import * as schema from '../../../db/schema'

const db = drizzle();

export async function handler(event: { path: string }) {
    const path = event.path.replace('/.netlify/functions/api', '');

    try {
        //fetch the first box of pokedex entries
        if (path === '/box1' || path === '') {
            const result = await db.select().from(schema.pokedex).limit(30);
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result)
            }
        }
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'Not Found' })
        }
    } catch (err) {
        console.error('Database error:', err)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Database query failed' })
        }
    }
}