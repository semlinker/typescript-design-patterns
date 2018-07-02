## Typescript 设计模式之中介者模式

### 一、简介

中介者模式（Mediator Pattern）定义：用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。中介者模式又称为调停者模式，它是一种对象行为型模式。

中介者模式的作用就是接触对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者对象即可。中介者使各对象之间耦合松散，而且可以独立地改变它们之间的交互。中介者模式使网状的多对多关系变成了相对简单的一对多关系。

### 二、优缺点

#### 优点

- 适当地使用中介者模式可以避免同事类之间的过度耦合，使得各同事类之间可以相对独立地使用。
- 使用中介者模式可以将对象间一对多的关联转变为一对一的关联，使对象间的关系易于理解和维护。
- 使用中介者模式可以将对象的行为和协作进行抽象，能够比较灵活的处理对象间的相互作用。

#### 缺点

- 在具体中介者类中包含了同事之间的交互细节，可能会导致具体中介者类非常复杂，使得系统难以维护。

### 三、应用场景

- 系统中对象之间存在复杂的引用关系，产生的相互依赖关系结构混乱且难以理解。
- 一个对象由于引用了其他很多对象并且直接和这些对象通信，导致难以复用该对象。
- 想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。可以通过引入中介者类来实现，在中介者中定义对象。
- 交互的公共行为，如果需要改变行为则可以增加新的中介者类。

### 四、模式结构

中介者模式包含如下角色：

- Mediator: 抽象中介者
- ConcreteMediator: 具体中介者
- Colleague: 抽象同事类
- ConcreteColleague: 具体同事类

![mediator](mediator.png)

### 五、实战

#### 具体实现

定义 Mediator 接口

```typescript
export interface Mediator {
    send(msg: string, colleague: Colleague): void;
}
```

定义抽象 Colleague 类

```typescript
export abstract class Colleague {
    public mediator: Mediator;

    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }

    abstract send(msg: string): void;

    abstract receive(msg: string): void;
}
```

定义 ConcreteColleagueA 类

```typescript
export class ConcreteColleagueA extends Colleague {
    constructor(mediator: Mediator) {
      super(mediator);
    }

    public send(msg: string): void {
      this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
      console.log(msg, "`receive` of ConcreteColleagueA is being called!");
    }
}
```

定义 ConcreteColleagueB 类

```typescript
export class ConcreteColleagueB extends Colleague {
    constructor(mediator: Mediator) {
      super(mediator);
    }

    public send(msg: string): void {
      this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
      console.log(msg, "`receive` of ConcreteColleagueB is being called!");
    }
}
```

定义 ConcreteMediator 类

```typescript
export class ConcreteMediator implements Mediator {
    public concreteColleagueA: ConcreteColleagueA;
    public concreteColleagueB: ConcreteColleagueB;

    public send(msg: string, colleague: Colleague): void {
      if (this.concreteColleagueA === colleague) {
        this.concreteColleagueB.receive(msg);
      } else {
        this.concreteColleagueA.receive(msg);
      }
    }
}
```

#### 使用示例

```typescript
export namespace Demo {
    export function show(): void {
      let cm: MediatorPattern.ConcreteMediator = new MediatorPattern.ConcreteMediator(),
        c1: MediatorPattern.ConcreteColleagueA = new MediatorPattern.ConcreteColleagueA(
          cm
        ),
        c2: MediatorPattern.ConcreteColleagueB = new MediatorPattern.ConcreteColleagueB(
          cm
        );

      cm.concreteColleagueA = c1;
      cm.concreteColleagueB = c2;

      c1.send("`send` of ConcreteColleagueA is being called!");
      c2.send("`send` of ConcreteColleagueB is being called!");
    }
}
```