// @ts-nocheck
import * as db from '$lib/BackEnd/DB/DBcontroller.js'
    export const POST= async ({request}) =>{
        const body=await request.json()
        const res = await db.listing(body.pname_slug)
        // @ts-ignore
        return new Response(JSON.stringify(res))
    }