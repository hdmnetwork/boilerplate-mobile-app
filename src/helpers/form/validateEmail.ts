import { validateRegex } from './validateRegex';

export function validateEmail(value: string) {
  return validateRegex(value, /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}
