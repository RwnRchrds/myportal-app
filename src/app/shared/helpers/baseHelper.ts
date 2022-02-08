export abstract class BaseHelper {
  protected constructor() {
    throw new Error('Cannot instantiate helper class. Use static methods instead.');
  }
}
