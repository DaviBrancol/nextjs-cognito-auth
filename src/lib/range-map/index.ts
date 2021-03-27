export function rangeMap(n: number, fn: (i: number) => unknown) {
  const arr = []
  while (n > arr.length) {
    arr.push(fn(arr.length))
  }
  return arr
}
