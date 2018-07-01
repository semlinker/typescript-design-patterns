## Typescript 设计模式之装饰模式

### 一、简介

装饰模式 (Decorator Pattern) ：动态地给一个对象增加一些额外的职责 (Responsibility)，就增加对象功能来说，装饰模式比生成子类实现更为灵活。其别名也可以称为包装器 (Wrapper)，与适配器模式的别名相同，但它们适用于不同的场合。

### 二、优缺点

#### 优点

- 装饰模式与继承关系的目的都是要扩展对象的功能，但是装饰模式可以提供比继承更多的灵活性。
- 可以通过一种动态的方式来扩展一个对象的功能，通过配置文件可以在运行时选择不同的装饰器，从而实现不同的行为。
- 通过使用不同的具体装饰类以及这些装饰类的排列组合，可以创造出很多不同行为的组合。可以使用多个具体装饰类来装饰同一对象，得到功能更为强大的对象。
- 具体构件类与具体装饰类可以独立变化，用户可以根据需要增加新的具体构件类和具体装饰类，在使用时再对其进行组合，原有代码无须改变，符合“开闭原则”

#### 缺点

- 使用装饰模式进行系统设计时将产生很多小对象，这些对象的区别在于它们之间相互连接的方式有所不同，而不是它们的类或者属性值有所不同，同时还将产生很多具体装饰类。这些装饰类和小对象的产生将增加系统的复杂度，加大学习与理解的难度。
- 这种比继承更加灵活机动的特性，也同时意味着装饰模式比继承更加易于出错，排错也很困难，对于多次装饰的对象，调试时寻找错误可能需要逐级排查，较为烦琐。

### 三、应用场景

- 在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责。
- 需要动态地给一个对象增加功能，这些功能也可以动态地被撤销。

### 四、模式结构

装饰模式包含如下角色：

- Component: 抽象构件
- ConcreteComponent: 具体构件
- Decorator: 抽象装饰类
- ConcreteDecorator: 具体装饰类

![decorator](decorator.png)

### 五、实战

#### 具体实现

定义 Weapon 接口

```typescript
export interface Weapon {
    fire(): void;
}
```

定义 Plane 类

```typescript
export class Plane implements Weapon {
    fire(): void {
      console.log("发射普通子弹");
    }
}
```

定义 Decorator 类

```typescript
export class Decorator implements Weapon {
    constructor(private weapon: Weapon) {}

    public fire(): void {
      console.log("`fire` of Decorator, is being called!");
      this.weapon.fire();
    }
}
```

定义 MissileDecorator 类

```typescript
export class MissileDecorator extends Decorator {
    constructor(weapon: Weapon) {
      super(weapon);
    }

    public fire(): void {
      super.fire();
      console.log("发射导弹");
    }
}
```

#### 使用示例

```typescript
export function show(): void {
      const missileDecorator: DecoratorPattern.Decorator = new 
        DecoratorPattern.MissileDecorator(
        new DecoratorPattern.Plane()
      );

      missileDecorator.fire();
}
```