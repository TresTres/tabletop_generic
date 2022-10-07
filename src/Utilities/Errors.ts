export class ValidationError extends Error {
  /**
   * Class of errors where fields contain valid types but
   * contain incompatible values.
   */

  constructor (ruleField: string, errValue: unknown, message: string) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.name = 'ValidationError';
    this.message = `Error:\n\t'${message}'\noccurred when checking object field '${ruleField}' which contained ${String(errValue)})`;
  }
}
