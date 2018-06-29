namespace SingletonPattern {
  export class Singleton {
    private static singleton: Singleton;
    private constructor() {}

    public static getInstance(): Singleton {
      if (!Singleton.singleton) {
        Singleton.singleton = new Singleton();
      }
      return Singleton.singleton;
    }
  }
}
