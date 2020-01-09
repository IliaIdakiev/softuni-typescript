export function Validate(validatonSchema: { [key: string]: (arg: any) => boolean }[]) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const errors = args.reduce((currErrors, currentArg, index) => {
        const currentValidations = validatonSchema[index];
        const currentArgErrors = Object.keys(currentValidations).reduce((acc: any, key) => {
          const validator = currentValidations[key];
          if (validator(currentArg)) { return acc; }
          return [...acc, key];
        }, []);
        currErrors[index] = { value: currentArg, errors: currentArgErrors };
        return currErrors;
      }, {});

      const hasErrors = Object.values(errors).reduce((acc, curr: any) => {
        return acc || curr.errors.length !== 0
      }, false)

      if (!hasErrors) {
        return originalFn.apply(this, args);
      }
      return Promise.reject(errors);
    }
  }
}