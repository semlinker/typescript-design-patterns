## Typescript 设计模式之抽象工厂模式

### 一、简介

抽象工厂模式(Abstract Factory Pattern)：提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。抽象工厂模式又称为Kit模式，属于对象创建型模式。

在工厂方法模式中具体工厂负责生产具体的产品，每一个具体工厂对应一种具体产品，工厂方法也具有唯一性，一般情况下，一个具体工厂中只有一个工厂方法或者一组重载的工厂方法。但是有时候我们需要一个工厂可以提供多个产品对象，而不是单一的产品对象。

**抽象工厂模式与工厂方法模式最大的区别在于**：工厂方法模式针对的是一个产品等级结构，而抽象工厂模式则需要面对多个产品等级结构，一个工厂等级结构可以负责多个不同产品等级结构中的产品对象的创建 。当一个工厂等级结构可以创建出分属于不同产品等级结构的一个产品族中的所有对象时，抽象工厂模式比工厂方法模式更为简单、有效率。

### 二、优缺点

#### 优点

- 抽象工厂模式隔离了具体类的生成，使得客户并不需要知道什么被创建。由于这种隔离，更换一个具体工厂就变得相对容易。所有的具体工厂都实现了抽象工厂中定义的那些公共接口，因此只需改变具体工厂的实例，就可以在某种程度上改变整个软件系统的行为。另外，应用抽象工厂模式可以实现高内聚低耦合的设计目的，因此抽象工厂模式得到了广泛的应用。
- 当一个产品族中的多个对象被设计成一起工作时，它能够保证客户端始终只使用同一个产品族中的对象。这对一些需要根据当前环境来决定其行为的软件系统来说，是一种非常实用的设计模式。

#### 缺点

- 在添加新的产品对象时，难以扩展抽象工厂来生产新种类的产品，这是因为在抽象工厂角色中规定了所有可能被创建的产品集合，要支持新种类的产品就意味着要对该接口进行扩展，而这将涉及到对抽象工厂角色及其所有子类的修改，显然会带来较大的不便。

### 三、应用场景

- 一个系统不应当依赖于产品类实例如何被创建、组合和表达的细节，这对于所有类型的工厂模式都是重要的。
- 系统中有多于一个的产品族，而每次只使用其中某一产品族。
- 属于同一个产品族的产品将在一起使用，这一约束必须在系统的设计中体现出来。
- 系统提供一个产品类的库，所有的产品以同样的接口出现，从而使客户端不依赖于具体实现。

### 四、模式结构

抽象工厂模式包含如下角色：

- AbstractFactory：抽象工厂
- ConcreteFactory：具体工厂
- AbstractProduct：抽象产品
- Product：具体产品

![abatract-factory](abstract-factory.png)

### 五、实战

#### 具体实现

定义抽象产品 A & B

```typescript
export interface AbstractProductA {
    methodA(): string;
}

export interface AbstractProductB {
    methodB(): number;
}
```

定义产品 A1 & A2

```typescript
export class ProductA1 implements AbstractProductA {
    methodA = () => {
      return "This is methodA of ProductA1";
    };
}

export class ProductA2 implements AbstractProductA {
    methodA = () => {
      return "This is methodA of ProductA2";
    };
}
```

定义产品 B1 & B2

```typescript
export class ProductB1 implements AbstractProductB {
    methodB = () => {
      return 1;
    };
}

export class ProductB2 implements AbstractProductB {
    methodB = () => {
      return 2;
    };
}
```

定义抽象工厂 AbstractFactory

```typescript
export interface AbstractFactory {
    createProductA(param?: any): AbstractProductA;
    createProductB(): AbstractProductB;
}
```

定义具体工厂 ConcreteFactory1 & ConcreteFactory2 

```typescript
export class ConcreteFactory1 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
      return new ProductA1();
    }

    createProductB(param?: any): AbstractProductB {
      return new ProductB1();
    }
}
  
export class ConcreteFactory2 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
      return new ProductA2();
    }

    createProductB(param?: any): AbstractProductB {
      return new ProductB2();
    }
}
```

定义测试类 Tester

```typescript
export class Tester {
    private abstractProductA: AbstractProductA;
    private abstractProductB: AbstractProductB;

    constructor(factory: AbstractFactory) {
      this.abstractProductA = factory.createProductA();
      this.abstractProductB = factory.createProductB();
    }

    public test(): void {
      console.log(this.abstractProductA.methodA());
      console.log(this.abstractProductB.methodB());
    }
}
```

#### 使用示例

```typescript
export function show() {
      // Abstract factory1
      let factory1: AbstractFactoryPattern.AbstractFactory = new 
          AbstractFactoryPattern.ConcreteFactory1();
      let tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(
        factory1
      );
      tester1.test();

      // Abstract factory2
      let factory2: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory2();
      let tester2: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(
        factory2
      );
      tester2.test();
}
```
