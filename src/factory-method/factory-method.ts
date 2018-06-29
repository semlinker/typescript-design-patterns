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
    abstract createProduct(type: string): Product;
  }

  export class ConcreteFactory extends Factory {
    createProduct(type: string): Product {
      if (type === "A") {
        return new ConcreteProductA();
      } else if (type === "B") {
        return new ConcreteProductB();
      }
      return null;
    }
  }
}
