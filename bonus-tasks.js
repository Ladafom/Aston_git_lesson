// task1

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
	let i = 0
	let j = arr.length - 1

	while(i < j){
		let result = arr[i]+arr[j]

		if(result > total) {
			j--

		} else if(result < total) {
			i++

		} else if(result === total){
			console.log(`[${arr[i]}, ${arr[j]}]`)
			break
		}
	}
}

firstSum(arr,total)
// Сложность алгоритма O(n), данная функция работает только для отсортированного по возрастанию массива