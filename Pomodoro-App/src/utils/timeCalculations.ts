export function timeToPercentage(milliseconds: number) {
  const totalMilliseconds = 60000 // 1 minute in milliseconds
  const percentage = (milliseconds / totalMilliseconds) * 100

  return percentage
}
