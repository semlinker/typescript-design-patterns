## Typescript 设计模式之代理模式

### 一、简介

> 代理模式是为一个对象提供一个代用品，或占位符，以便控制对它的访问。
给目标对象提供一个代理对象，并由代理对象控制对目标对象的引用 通俗的来讲代理模式就是我们生活中常见的中介。

在对象前面加了一层，外部需要通过这层代理来操作原对象，代理可以加一些控制来过滤或简化操作。

### 二、优缺点

#### 优点

- 协调调用者和被调用者，降低了系统的耦合度
- 代理对象作为客户端和目标对象之间的中介，起到了保护目标对象的作用
- 开闭原则，增加功能

#### 缺点

- 由于在客户端和真实主题之间增加了代理对象，因此会造成请求的处理速度变慢；
- 实现代理模式需要额外的工作（有些代理模式的实现非常复杂），从而增加了系统实现的复杂度。

### 三、应用场景

* 当对象不希望被外部直接访问时可以考虑代理模式，典型的有远程代理、保护代理、透明代理、虚拟代理等。

### 四、实战

#### 具体实现

主题接口

```typescript
export interface Subject {
    doAction(): void;
}
```

代理主题

```typescript
export class Proxy implements Subject {
        private realSubject: RealSubject;  
        private s: string;

        constructor(s: string) {
            this.s = s;
        }

        public doAction(): void {
            if (this.realSubject === null || this.realSubject === undefined) {
                this.realSubject = new RealSubject(this.s);
            }
            this.realSubject.doAction();
        }
    }
```

真实主题

```typescript
export class RealSubject implements Subject {
        private s: string;
        constructor(s: string) {
            this.s = s;
        }
        public doAction(): void {
        }
    }
```

#### 使用示例

```typescript
  export function show() : void {
    var proxy: ProxyPattern.Proxy = new ProxyPattern.Proxy("proxy")
    proxy.doAction();
  }
```
