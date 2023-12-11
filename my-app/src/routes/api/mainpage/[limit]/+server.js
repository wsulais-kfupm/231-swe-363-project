// @ts-nocheck
import * as db from '$lib/BackEnd/DB/DBcontroller.js'
    export const GET= async ({params}) =>{
        console.log(params)
        const res = await db.frontpage(params.limit)
        // @ts-ignore
        return new Response(JSON.stringify(res))
    }