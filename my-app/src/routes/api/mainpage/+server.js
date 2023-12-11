import * as db from '$lib/BackEnd/DB/DBcontroller.js';
export const GET = async ({}) => {
	const res = await db.mainPage();
	// @ts-ignore
	return new Response(JSON.stringify(res));
};
