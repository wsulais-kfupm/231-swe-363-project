/**
 * @param {{ variants: any; }[]} product
 */
export function filter(product) {
	// @ts-ignore
	let pname = product.pname_slug;
	// @ts-ignore
	let bname = product.bname;
	// @ts-ignore
	let img = product.img;
	let quantities = [];
	let prices = [];
	let marketnames = [];
	console.log(product);

	let variants = product.variants;

	if (variants) {
		for (const variant of variants) {
			quantities.push(String(variant.quantity) + variant.quantity_unit);
			prices.push(variant.price);
			marketnames.push(variant.marketname);
		}
	}

	return {
		pname: pname,
		bname: bname,
		img: img,
		quantities: quantities,
		prices: prices,
		marketnames: marketnames
	};
}
