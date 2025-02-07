function mySlice(arr, start = 0, end = arr.length) {
	let startArray = start >= 0 ? Math.min(start, arr.length) : Math.max(arr.length + start, 0);
	let endArray = end >= 0 ? Math.min(end, arr.length) : Math.max(arr.length + end, 0);
	return arr.filter((_, index) => index >= startArray && index < endArray);
}

function myIndexOf(arr, item, from) {
	let indexItem = -1;
	let fromSearch = from > 0 ? from : from < 0 ? arr.length + from : 0;
	for (let i = fromSearch; i < arr.length; i++)
	{ if (arr[i] === item) { indexItem = i; break; } }
	return indexItem;
}


function myIncludes(arr, item, from) {
	return arr.slice(from ? from : 0).some((elem) => elem === item );
}
