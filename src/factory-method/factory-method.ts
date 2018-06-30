namespace FactoryMethodPattern {
  export interface Product {
    use(param?: any): void;
  }

  export class ConcreteProductA implements Product {
    use(param?: any): void {
      console.log("ConcreteProductA's use method has been called!");
    }
  }

  export class ConcreteProductB implements Product {
    use(param?: any): void {
      console.log("ConcreteProductB's use method has been called!");
    }
  }

  export abstract class Factory {
    abstract createProduct(): Product;
  }

  export class ConcreteFactoryA extends Factory {
    createProduct(): Product {
      return new ConcreteProductA();
    }
  }

  export class ConcreteFactoryB extends Factory {
    createProduct(): Product {
      return new ConcreteProductB();
    }
  }
}
