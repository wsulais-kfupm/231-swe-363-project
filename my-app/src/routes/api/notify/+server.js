// @ts-nocheck
import * as db from '$lib/BackEnd/DB/DBcontroller.js'
    export const GET= async ({url}) =>{
        const product=url.searchParams.get('pname')
        const res = await db.psuhAllNotifications()
        return new Response(JSON.stringify({result:'success'}))
    }