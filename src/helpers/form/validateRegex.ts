export function validateRegex(value: string, regex: RegExp) {
  return regex.test(value);
}
