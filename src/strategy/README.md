## Typescript 设计模式之策略模式

### 一、简介

策略模式定义了一系列的算法，把它们一个个封装起来，并且使它们可以互相替换。策略模式的重心不是如何实现算法，而是如何组织、调用这些算法，从而让程序结构更灵活、可维护、可扩展。

策略模式对算法的调度具有平等性，算法仅仅是一种性质相同而行为不同的处理，地位相同，可相互替换，算法间没有依赖关系。

### 二、优缺点

#### 优点

- 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
- 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它们易于切换，易于理解，易于扩展。
- 策略模式中的算法有可以复用在系统其它地方，从而避免许多重复的复制粘贴工作。
- 在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的替代方案。

#### 缺点

- 每个具体策略类都会产生一个新类，所以会增加系统需要维护的类的数量。
- 客户端必须知道所有的策略类，并自行决定使用哪一个策略类。

### 三、应用场景

- 多个类只区别在表现行为不同（性质一样，但行为不同），可以使用策略模式，在运行时动态选择具体要执行的行为。
- 需要在不同情况下使用不同的策略，或者策略还可能在未来用其它方式来实现。
- 对客户隐藏具体策略的实现细节（只公开一个功能，隐藏此功能实现的细节），彼此完全独立。

### 四、模式结构

策略模式包含如下角色：

- Context: 环境类
- Strategy: 抽象策略类
- ConcreteStrategy: 具体策略类

![strategy](strategy.png)

### 五、实战

#### 具体实现

定义 Strategy 接口

```typescript
export interface Strategy {
    execute(): void;
}
```

定义 ConcreteStrategyA & ConcreteStrategyB

```typescript
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
```

定义 Context 类

```typescript
export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
      this.strategy = strategy;
    }

    public executeStrategy(): void {
      this.strategy.execute();
    }
}
```

#### 使用示例

```typescript
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
```