/// <reference path="strategy.ts" />
namespace StrategyPattern {
  export namespace Demo {
    export function show(): void {
      let context: StrategyPattern.Context = new StrategyPattern.Context(
        new StrategyPattern.ConcreteStrategyA()
      );
      context.executeStrategy();

      context = new StrategyPattern.Context(
        new StrategyPattern.ConcreteStrategyB()
      );
      context.executeStrategy();
    }
  }
}
