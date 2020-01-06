import { IValidator } from './my-module';

const a = 10000;

export class StringValidator implements IValidator<string> {
  constructor(public otherValue: string) { }
  validate(value: string) {
    return value.includes(this.otherValue);
  }
}

export class NumberValidator implements IValidator<number> {
  constructor(public otherValue: number) { }
  validate(value: number) {
    return value === 10;
  }
}