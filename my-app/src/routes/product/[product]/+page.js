export async function load({ url }) {
    let pname = url.searchParams.get('pname');
    console.log('1111111111111111'+pname)
    return { pname };
}