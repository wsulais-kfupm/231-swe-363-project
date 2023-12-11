/**
 * @param {{ variants: any; }[]} product
 */
export function filter(product){
    let pname=product[0].pname_slug
    let bname=product[0].bname
    let img=product[0].img
    let quantities=[]
    let prices=[]
    let marketnames=[]
    let variants= product[0].variants
    for (const variant of variants){
        quantities.push(String(variant.quantity) + variant.quantity_unit)
        prices.push(variant.price)
        marketnames.push(variant.marketname)
    }
    return {
        pname: pname,
        bname: bname,
        img: img,
        quantities: quantities,
        prices: prices,
        marketnames:marketnames
    }
}