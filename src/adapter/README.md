## Typescript 设计模式之适配器模式

### 一、简介

在实际生活中，也存在适配器的使用场景，比如：港式插头转换器、电源适配器和 USB 转接口。而在软件工程中，适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。

### 二、优缺点

#### 优点

- 将目标类和适配者类解耦，通过引入一个适配器类来重用现有的适配者类，而无须修改原有代码。
- 增加了类的透明性和复用性，将具体的实现封装在适配者类中，对于客户端类来说是透明的，而且提高了适配者的复用性。
- 灵活性和扩展性都非常好，通过使用配置文件，可以很方便地更换适配器，也可以在不修改原有代码的基础上增加新的适配器类，符合开闭原则。

#### 缺点

* 过多地使用适配器，会让系统非常零乱，不易整体进行把握。

### 三、应用场景

- 系统需要使用现有的类，而这些类的接口不符合系统的需要。
- 想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类，包括一些可能在将来引进的类一起工作。

### 四、模式结构

适配器模式包含以下角色：

- Target：目标抽象类
- Adapter：适配器类
- Adaptee：适配者类
- Client：客户类

适配器模式有对象适配器和类适配器两种实现，这里我们主要介绍对象适配器。

对象适配器：

![adapter-for-object](adapter-for-object.png)

### 五、实战

#### 具体实现

定义 Target 接口

```typescript
export interface Target {
    request(): void;
}
```

创建 Adaptee 类

```typescript
export class Adaptee {
    public specificRequest(): void {
      console.log("specificRequest of Adaptee is being called");
    }
}
```

创建 Adapter 类

```typescript
export class Adapter implements Target {
    public request(): void {
      console.log("Adapter's request method is being called");
      var adaptee: Adaptee = new Adaptee();
      adaptee.specificRequest();
    }
}
```

#### 使用示例

```typescript
export function show(): void {
      const adapter: AdapterPattern.Adapter = new AdapterPattern.Adapter();
      adapter.request();
}
```