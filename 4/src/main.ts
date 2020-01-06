import { StringValidator, NumberValidator } from './my-other-module';

const fiveValidator = new NumberValidator(5);
const fiveStrValidator = new StringValidator('5');

const a = fiveValidator.validate(100);
const b = fiveStrValidator.validate('100');