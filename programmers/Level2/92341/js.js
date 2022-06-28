const solution = (fees, records) => {
	let obj = new Object();

	console.log(records[0].split(' ')[1])

	records.forEach(val => {
		const curData = val.split(' ');
		obj[`${curData[1]} ${curData[2]}`] = curData[0];
	})

	return obj;
}

console.log(solution(
	[180, 5000, 10, 600],
	[
		"05:34 5961 IN",
		"06:00 0000 IN",
		"06:34 0000 OUT",
		"07:59 5961 OUT",
		"07:59 0148 IN",
		"18:59 0000 IN", 
		"19:09 0148 OUT", 
		"22:59 5961 IN", 
		"23:00 5961 OUT"
	]
)); 
// [14600, 34400, 5000]