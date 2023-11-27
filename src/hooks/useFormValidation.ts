import lodash from 'lodash';
import { useState } from 'react';

export enum FieldValidationRuleType {
  MANDATORY = 'MANDATORY',
  EMAIL = 'EMAIL',
  CUSTOM = 'CUSTOM',
}

export interface FieldValidationRule {
  type: FieldValidationRuleType,
  regex?: RegExp,
}

export interface FieldValidation<Fields> {
  rules: FieldValidationRule[],
  field: Fields,
}

export type FieldValidationResultSet<Fields extends string> = {
  [key in Fields]: { invalidRules: FieldValidationRule[], };
};

function initializeValidations<Fields extends string>(fields: FieldValidation<Fields>[]) {
  let validations = {};

  fields.forEach((fieldValidation) => {
    validations = { ...validations, [fieldValidation.field]: { invalidRules: [] } };
  });

  return validations;
}

function validateMandatory(value: any) {
  if (lodash.isArray(value)) {
    return value.length > 0;
  }

  return typeof value === 'string' && value !== '';
}

function validateRegex(value: string, regex: RegExp) {
  return regex.test(value);
}

function validateEmail(value: string) {
  return validateRegex(value, /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}

type ValidationFunction<Fields extends string> =
  (values: { [key in Fields]: any; }) => FieldValidationResultSet<Fields>;

type ErrorsCounterFunction<Fields extends string> = (resultSet: FieldValidationResultSet<Fields>) => number;

export default function useFormValidation<T extends string>(fields: FieldValidation<T>[]):
  [{ validateForm: ValidationFunction<T>, countErrors: ErrorsCounterFunction<T>}, FieldValidationResultSet<T>] {
  const [validations, setValidations] = useState(initializeValidations(fields));

  const validateForm: ValidationFunction<T> = (values: { [key in T]: any; }): FieldValidationResultSet<T> => {
    const currentValidations: any = initializeValidations(fields);

    fields.forEach((fieldValidation) => {
      currentValidations[fieldValidation.field] = { invalidRules: [] };

      if (fieldValidation.field in values) {
        fieldValidation.rules.forEach((rule) => {
          if (rule.type === FieldValidationRuleType.MANDATORY && !validateMandatory(values[fieldValidation.field])) {
            currentValidations[fieldValidation.field].invalidRules.push(rule);
          }

          if (rule.type === FieldValidationRuleType.EMAIL && !validateEmail(values[fieldValidation.field])) {
            currentValidations[fieldValidation.field].invalidRules.push(rule);
          }

          if (
            rule.type === FieldValidationRuleType.CUSTOM
            && rule.regex
            && !validateRegex(values[fieldValidation.field], rule.regex)
          ) {
            currentValidations[fieldValidation.field].invalidRules.push(rule);
          }
        });
      }

      setValidations(currentValidations);
    });

    return currentValidations;
  };

  const countErrors = (resultSet: FieldValidationResultSet<T>): number => {
    let errorsCount = 0;

    Object.keys(resultSet).forEach((resultSetKey) => {
      if (resultSet[resultSetKey as keyof FieldValidationResultSet<T>].invalidRules.length) {
        errorsCount += resultSet[resultSetKey as keyof FieldValidationResultSet<T>].invalidRules.length;
      }
    });

    return errorsCount;
  };

  return [{ validateForm, countErrors }, validations as FieldValidationResultSet<T>];
}
