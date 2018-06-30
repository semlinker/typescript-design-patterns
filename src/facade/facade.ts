namespace FacadePattern {
  export class SystemA {
    public operationA(): void {
      console.log("`operationA` of SystemA");
    }
  }

  export class SystemB {
    public operationB(): void {
      console.log("`operationB` of SystemB");
    }
  }

  export class SystemC {
    public operationC(): void {
      console.log("`operationC` of SystemC");
    }
  }

  export class Facade {
    private systemA: SystemA = new SystemA();
    private systemB: SystemB = new SystemB();
    private systemC: SystemC = new SystemC();

    public wrapOperation(): void {
      console.log("`wrapOperation` is called ===");
      this.systemA.operationA();
      this.systemB.operationB();
      this.systemC.operationC();
      console.log("==========================");
    }
  }
}
