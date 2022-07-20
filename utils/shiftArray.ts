export default function shiftArray<T>(arr: T[], offset: number): T[] {
  const temp = arr.slice()

  if (offset < 0) {
    const change = temp.pop()!

    return shiftArray([change, ...temp], offset + 1)
  } else if (offset > 0) {
    const change = temp.shift()!

    return shiftArray([...temp, change], offset - 1)
  } else {
    return temp
  }
}
