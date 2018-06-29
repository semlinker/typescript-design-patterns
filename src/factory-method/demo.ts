/// <reference path="factory-method.ts" />

namespace FactoryMethodPattern {
  export namespace Demo {
    export function show(): void {
      const productFactory: ConcreteFactory = new FactoryMethodPattern.ConcreteFactory();
      const productA: FactoryMethodPattern.Product = productFactory.createProduct("A");
	  const productB: FactoryMethodPattern.Product = productFactory.createProduct("B");
	  productA.use();
	  productB.use();
    }
  }
}
