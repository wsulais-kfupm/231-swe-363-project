import * as db from '$lib/BackEnd/DB/DBcontroller.js'
    // @ts-ignore
    export const GET= async ({params}) =>{
        console.log(params.tableName)
        const res = await db.table(params.tableName)
        return new Response(JSON.stringify(res))
    }