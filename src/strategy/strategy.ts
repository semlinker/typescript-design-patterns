namespace StrategyPattern {
  export interface Strategy {
    execute(): void;
  }

  export class ConcreteStrategyA implements Strategy {
    public execute(): void {
      console.log("`execute` method of ConcreteStrategy1 is being called");
    }
  }

  export class ConcreteStrategyB implements Strategy {
    public execute(): void {
      console.log("`execute` method of ConcreteStrategy2 is being called");
    }
  }

  export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
      this.strategy = strategy;
    }

    public executeStrategy(): void {
      this.strategy.execute();
    }
  }
}
