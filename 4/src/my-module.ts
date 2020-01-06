export interface IValidator<T> {
  otherValue: T;
  validate(value: T): boolean;
}
