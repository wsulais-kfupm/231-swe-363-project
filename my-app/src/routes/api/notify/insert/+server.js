// @ts-nocheck
import * as db from '$lib/BackEnd/DB/DBcontroller.js'
    export const POST= async ({request}) =>{
        const body=await request.json()
        db.addEndPoint(body)
        // @ts-ignore
        return new Response(JSON.stringify({message:'done'}))
    }