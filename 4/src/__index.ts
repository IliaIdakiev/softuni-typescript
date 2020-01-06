/// <reference path="validation.ts" />


namespace Validation {
  export class MyAwesomeValidator {

  };
}

const a = Validation.MyAwesomeValidator

const v1 = new a();
const v = new Validation.ZipCodeValidator();
v.isAcceptable('sdasd');