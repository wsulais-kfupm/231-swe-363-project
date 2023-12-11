import * as db from '$lib/BackEnd/DB/DBcontroller.js';
export const GET = async ({}) => {
	const res = await db.psuhAllNotifications();
	// @ts-ignore
	return new Response({ message: 'succcess' });
};
