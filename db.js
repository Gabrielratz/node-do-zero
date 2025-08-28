import 'dotenv/config'
import postgres from "postgres";


const URL = 'postgresql://neondb_owner:npg_XjmIu4xQ2khs@ep-still-block-ad15o918-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
export const sql = postgres(URL,{ ssl: 'require'

})