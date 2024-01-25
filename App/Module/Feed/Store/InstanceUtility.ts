export class InstanceGetUtility {
    static getInstance<T>(typeNew: new () => T, instance?: T): T {
      if (instance) {
        return instance;
      }
  
      return new typeNew();
    }
  }
  