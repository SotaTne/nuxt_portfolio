/*
var works_list: (string | null)[] = [null, null, 'hello']
var a = works_list.forEach((element) => {
  if (element != null) return true
})
console.log(a)
*/

const result_hello = [75, 68, 92, 84, 90]

const passIndex: boolean = result_hello.some((element) => element > 85)
console.log(passIndex)
