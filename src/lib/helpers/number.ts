export const handleNaN = (number: number) => {
	return Number.isNaN(number) ? 0 : number;
};

export const isNumber = (number: any) => {
	return Number.isInteger(parseInt(number ?? ""))
};


export const parseNumber = (number: any) => {
	return parseInt(number ?? "0") + 0
}