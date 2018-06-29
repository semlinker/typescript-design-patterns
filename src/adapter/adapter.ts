namespace AdapterPattern {
  export class Adaptee {
    public specificRequest(): void {
      console.log("specificRequest of Adaptee is being called");
    }
  }

  export interface Target {
    request(): void;
  }

  export class Adapter implements Target {
    public request(): void {
      console.log("Adapter's request method is being called");
      var adaptee: Adaptee = new Adaptee();
      adaptee.specificRequest();
    }
  }
}
