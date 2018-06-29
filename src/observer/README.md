## Typescript 设计模式之观察者模式

### 一、简介

观察者模式，它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

我们可以使用日常生活中，期刊订阅的例子来形象地解释一下上面的概念。期刊订阅包含两个主要的角色：期刊出版方和订阅者，他们之间的关系如下：

- 期刊出版方 —— 负责期刊的出版和发行工作。
- 订阅者 —— 只需执行订阅操作，新版的期刊发布后，就会主动收到通知，如果取消订阅，以后就不会再收到通知。

在观察者模式中也有两个主要角色：Subject (主题) 和 Observer (观察者) 。它们分别对应例子中的期刊出版方和订阅者。接下来我们来看张图，从而加深对上面概念的理解。

![观察者模式](./observer-pattern.png)

### 二、优缺点

#### 优点

- 支持简单的广播通信，自动通知所有已经订阅过的对象。
- 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。

#### 缺点

- 如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。
- 如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。

### 三、应用场景

- 一个对象的行为依赖于另一个对象的状态。或者换一种说法，当被观察对象（目标对象）的状态发生改变时 ，会直接影响到观察对象的行为。

### 四、模式结构

观察者模式包含以下角色：

* Subject：主题类
* Observer：观察者

![observer-pattern-class-diagram](observer-pattern-class-diagram.png)

### 五、实战

#### 具体实现

Subject

```typescript
export class Subject {
    private observers: Observer[] = [];

    public register(observer: Observer): void {
      console.log(observer, "is pushed!");
      this.observers.push(observer);
    }

    public unregister(observer: Observer): void {
      var n: number = this.observers.indexOf(observer);
      console.log(observer, "is removed");
      this.observers.splice(n, 1);
    }

    public notify(): void {
      console.log("notify all the observers", this.observers);
      this.observers.forEach(observer => observer.notify());
    }
  }
```

Observer

```typescript
export class Observer {
    constructor(private name: string) {}

    notify() {
      console.log(`${this.name} has been notified.`);
    }
}
```

#### 使用示例

```typescript
export function show(): void {
      const subject: ObserverPattern.Subject = new ObserverPattern.Subject();
      subject.addObserver(new ObserverPattern.Observer("semlinker"));
      subject.addObserver(new ObserverPattern.Observer("lolo"));
      subject.notifyObservers();
}
```