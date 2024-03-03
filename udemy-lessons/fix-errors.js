function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
		return 'Цена ниже средней';
	} else {
		return 'Цена выше средней';
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));