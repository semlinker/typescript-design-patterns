## Typescript 设计模式之工厂方法

### 一、简介

工厂方法模式(Factory Method Pattern)又称为工厂模式，也叫虚拟构造器(Virtual Constructor)模式或者多态工厂(Polymorphic Factory)模式，它属于类创建型模式。

在工厂方法模式中，工厂父类负责定义创建产品对象的公共接口，而工厂子类则负责生成具体的产品对象，这样做的目的是将产品类的实例化操作延迟到工厂子类中完成，即通过工厂子类来确定究竟应该实例化哪一个具体产品类。

### 二、优缺点

#### 优点

- 在工厂方法模式中，工厂方法用来创建客户所需要的产品，同时还向客户隐藏了哪种具体产品类将被实例化这一细节，用户只需要关心所需产品对应的工厂，无须关心创建细节，甚至无须知道具体产品类的类名。
- 基于工厂角色和产品角色的多态性设计是工厂方法模式的关键。它能够使工厂可以自主确定创建何种产品对象，而如何创建这个对象的细节则完全封装在具体工厂内部。工厂方法模式之所以又被称为多态工厂模式，是因为所有的具体工厂类都具有同一抽象父类。
- 使用工厂方法模式的另一个优点是在系统中加入新产品时，无须修改抽象工厂和抽象产品提供的接口，无须修改客户端，也无须修改其他的具体工厂和具体产品，而只要添加一个具体工厂和具体产品就可以了。这样，系统的可扩展性也就变得非常好，完全符合 “开闭原则”。

#### 缺点

- 在添加新产品时，需要编写新的具体产品类，而且还要提供与之对应的具体工厂类，系统中类的个数将成对增加，在一定程度上增加了系统的复杂度，有更多的类需要编译和运行，会给系统带来一些额外的开销。

### 三、应用场景

- 一个类不知道它所需要的对象的类：在工厂方法模式中，客户端不需要知道具体产品类的类名，只需要知道所对应的工厂即可，具体的产品对象由具体工厂类创建；客户端需要知道创建具体产品的工厂类。
- 一个类通过其子类来指定创建哪个对象：在工厂方法模式中，对于抽象工厂类只需要提供一个创建产品的接口，而由其子类来确定具体要创建的对象，利用面向对象的多态性和里氏代换原则，在程序运行时，子类对象将覆盖父类对象，从而使得系统更容易扩展。

### 四、模式结构

工厂方法模式包含以下角色：

* Product：抽象产品
* Concrete Product：具体产品
* Factory：抽象工厂
* ConcreteFactory：具体工厂

![factory-method](factory-method.png)

### 五、实战

#### 具体实现

定义 Product 接口

```typescript
export interface Product {
    use(param?: any): void;
}
```

创建 ConcreteProductA 类

```typescript
export class ConcreteProductA implements Product {
    use(param?: any): void {
      console.log("ConcreteProductA's use method has been called!");
    }
}
```

创建 ConcreteProductB 类

```typescript
export class ConcreteProductB implements Product {
    use(param?: any): void {
      console.log("ConcreteProductB's use method has been called!");
    }
}
```

定义 Factory 抽象类

```typescript
export abstract class Factory {
    abstract createProduct(type: string): Product;
}
```

创建 ConcreteFactory 类

```typescript
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
```

#### 使用示例

```typescript
export function show(): void {
      const productFactory: ConcreteFactory = new FactoryMethodPattern.ConcreteFactory();
      const productA: FactoryMethodPattern.Product = productFactory.createProduct("A");
	  const productB: FactoryMethodPattern.Product = productFactory.createProduct("B");
	  productA.use();
	  productB.use();
}
```