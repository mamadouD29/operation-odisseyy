export function getRandomIntInclusive(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export function getResult(
	title: string,
	oldVal: number,
	newVal: number,
	size: number,
) {
	if (title === "Addition") {
		return (oldVal += newVal);
	}

	if (title === "Multiplication") {
		console.log("size: ", size);
		return size === 0 ? newVal * 1 : (oldVal *= newVal);
	}

	if (title === "Subtraction") {
		return (oldVal -= newVal);
	}
	return size === 0 ? newVal : oldVal * newVal;
}
export function initialValue(title: string) {
	if (title === "Multiplication") {
		return 1;
	}
	return 0;
}
