export function timeToPercentage(milliseconds: number, startValue: number) {
  // Convert milliseconds to minutes
  const minutes = milliseconds / 60000
  // Calculate percentage of time passed
  const percentage = (minutes / startValue) * 100
  // Return percentage, but not more than 100
  const result = Math.floor(percentage) > 100 ? 100 : Math.floor(percentage)
  return result
}
