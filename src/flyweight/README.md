## Typescript 设计模式之享元模式

### 一、简介

享元模式就是运行共享技术有效地支持大量细粒度的对象，避免大量拥有相同内容的小类的开销（如耗费内存），使大家共享一个类。

在享元模式中有两个重要的概念：内部状态和外部状态。

* 内部状态：在享元对象内部不随外界环境改变而改变的共享部分。
* 外部状态：随着环境的改变而改变，不能够共享的状态就是外部状态。

由于享元模式区分了内部状态和外部状态，所以我们可以通过设置不同的外部状态使得相同的对象可以具备一些不同的特性，而内部状态设置为相同部分。

### 二、优缺点

#### 优点

* 享元模式的优点在于它能够极大的减少系统中对象的个数。
* 享元模式由于使用了外部状态，外部状态相对独立，不会影响到内部状态，所以享元模式使得享元对象能够在不同的环境被共享。

#### 缺点

- 由于享元模式需要区分外部状态和内部状态，使得应用程序在某种程度上来说更加复杂化了。
- 为了使对象可以共享，享元模式需要将享元对象的状态外部化，而读取外部状态使得运行时间变长。 

### 三、应用场景

- 一个程序中使用了大量的相似对象。
- 由于使用了大量对象，造成很大的内存开销。
- 对象的大多数状态都可以变为外部状态。
- 剥离出对象的外部状态之后，可以用相对较少的共享对象取代大量对象。

### 四、实战

苹果公司批量生产 iPhone，iPhone的大部分数据比如型号、屏幕都是一样，少部分数据比如内存有分16、32G等。未使用享元模式前，我们写代码如下：

```javascript
class Iphone {
  constructor(model: string, screen: number, memory: number, SN: number) {}
}

let phones = [];
for (var i = 0; i < 10000; i++) {
  let memory = i % 2 == 0 ? 16 : 32;
  phones.push(new Iphone("iPhone6s", 5.0, memory, i));
}
```

这段代码中，创建了一百万个 iPhone，每个 iPhone 都独立申请一个内存。但是我们仔细观察可以看到，大部分 iPhone 都是类似的，只是内存和序列号不一样，如果是一个对性能要求比较高的程序，我们就要考虑去优化它。

当存在大量相似对象的程序，我们就可以考虑用享元模式去优化它，我们分析出大部分的 iPhone 的型号、屏幕、内存都是一样的，那么这部分数据就可以公用，这就是享元模式中的内在数据，因此定义 iPhone 对应的享元类如下：

```typescript
class IphoneFlyweight {
  constructor(model: string, screen: number, memory: number) {}
}
```

我们定义了 iPhone 的享元类，其中包含型号、屏幕、内存三个数据。我们还需要一个享元工厂来维护这些数据：

```typescript
export class FlyweightFactory {
    private phonesMap: { [s: string]: IphoneFlyweight } = <any>{};

    public get(model: string, screen: number, memory: number): IphoneFlyweight {
      const key = model + screen + memory;
      if (!this.phonesMap[key]) {
        this.phonesMap[key] = new IphoneFlyweight(model, screen, memory);
      }
      return this.phonesMap[key];
    }
}
```

在这个工厂中，我们定义了一个对象来保存享元对象，并提供一个方法根据参数来获取享元对象，如果字典中有则直接返回，没有则创建一个返回。

#### 具体实现

IphoneFlyweight & FlyweightFactory

```typescript
/**
   * 内部状态：model, screen, memory
   * 外部状态：sn
   */
export class IphoneFlyweight {
    constructor(model: string, screen: number, memory: number) {}
}

export class FlyweightFactory {
    private phonesMap: { [s: string]: IphoneFlyweight } = <any>{};

    public get(model: string, screen: number, memory: number): IphoneFlyweight {
      const key = model + screen + memory;
      if (!this.phonesMap[key]) {
        this.phonesMap[key] = new IphoneFlyweight(model, screen, memory);
      }
      return this.phonesMap[key];
    }
}
```

Iphone & IphoneFactory

```typescript
export class Iphone {
    constructor(flyweight: IphoneFlyweight, sn: number) {}
}

export class IphoneFactory {
    private static flyweightFactory: FlyweightFactory = new FlyweightFactory();

    public getIphone(
      model: string,
      screen: number,
      memory: number,
      sn: number
    ) {
      const flyweight: IphoneFlyweight = IphoneFactory.flyweightFactory.get(
        model,
        screen,
        memory
      );
      return new Iphone(flyweight, sn);
    }
}
```

#### 使用示例

```typescript
export function show(): void {
      const iphoneFactory = new IphoneFactory();
      const phones = [];
      for (var i = 0; i < 10000; i++) {
        var memory = i % 2 == 0 ? 16 : 32;
        phones.push(iphoneFactory.getIphone("iPhoneX", 5.0, memory, i));
      }
      console.log("Already created 10000 iPhoneX");
}
```

