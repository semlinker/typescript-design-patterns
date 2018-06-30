/// <reference path="factory-method.ts" />

namespace FactoryMethodPattern {
  export namespace Demo {
    export function show(): void {
      const productFactoryA: ConcreteFactoryA = new FactoryMethodPattern.ConcreteFactoryA();
      const productA: FactoryMethodPattern.Product = productFactoryA.createProduct();

      const productFactoryB: ConcreteFactoryA = new FactoryMethodPattern.ConcreteFactoryB();
      const productB: FactoryMethodPattern.Product = productFactoryB.createProduct();
      
      productA.use();
      productB.use();
    }
  }
}
