## Typescript 设计模式之单例模式

### 一、简介

单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器中的 window 对象等。单例模式用于保证一个类仅有一个实例，并提供一个访问它的全局访问点。

### 二、优缺点

#### 优点

- 由于单例模式在内存中只有一个实例，减少了内存开支，特别是一个对象需要频繁地创建、销毁时，而且创建或销毁时性能又无法优化，单例模式的优势就非常明显。
- 由于单例模式只生成一个实例，所以减少了系统的性能开销，当一个对象的产生需要比较多的资源时，如读取配置、产生其他依赖对象时，则可以通过在应用启动时直接产生一个单例对象，然后用永久驻留内存的方式解决。
- 单例模式可以在系统设置全局的访问点，优化和共享资源的访问。
- 避免对资源的多重占用，避免对同一个资源文件的同时操作，造成文件状体不一致。

#### 缺点

- 单例模式一般没有接口，扩展很困难，若要扩展，除了修改代码基本上没有第二种途径可以实现。

### 三、应用场景

- 系统只需要一个实例对象，如系统要求提供一个唯一的序列号生成器或资源管理器，或者需要考虑资源消耗太大而只允许创建一个对象。
- 创建对象时耗时过多或耗资源过多，但又经常用到的对象。
- 需要频繁实例化然后销毁的对象。

### 四、模式结构

单例模式包含如下角色：

- Singleton：单例

![singleton](singleton.png)

### 五、实战

#### 具体实现

```typescript
export class Singleton {
    private static singleton: Singleton;
    private constructor() {}

    public static getInstance(): Singleton {
      if (!Singleton.singleton) {
        Singleton.singleton = new Singleton();
      }
      return Singleton.singleton;
    }
}
```

#### 使用示例

```typescript
export function show(): void {
      const singleton1 = SingletonPattern.Singleton.getInstance();
      const singleton2 = SingletonPattern.Singleton.getInstance();

      if (singleton1 === singleton2) {
        console.log("two singletons are equivalent");
      } else {
        console.log("two singletons are not equivalent");
      }
}
```
