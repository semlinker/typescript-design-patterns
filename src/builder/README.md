## Typescript 设计模式之建造者模式

### 一、简介

建造者模式是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型和内容就可以构建它们，用户不需要知道内部的具体构建细节。

### 二、优缺点

#### 优点

- 在建造者模式中， 客户端不必知道产品内部组成的细节，将产品本身与产品的创建过程解耦，使得相同的创建过程可以创建不同的产品对象。
- 每一个具体建造者都相对独立，而与其他的具体建造者无关，因此可以很方便地替换具体建造者或增加新的具体建造者，用户使用不同的具体建造者即可得到不同的产品对象 。
- 可以更加精细地控制产品的创建过程 。将复杂产品的创建步骤分解在不同的方法中，使得创建过程更加清晰，也更方便使用程序来控制创建过程。

#### 缺点

- 建造者模式所创建的产品一般具有较多的共同点，其组成部分相似，如果产品之间的差异性很大，则不适合使用建造者模式，因此其使用范围受到一定的限制。
- 如果产品的内部变化复杂，可能会导致需要定义很多具体建造者类来实现这种变化，导致系统变得很庞大。

### 三、应用场景

- 需要生成的产品对象有复杂的内部结构，这些产品对象通常包含多个成员属性。
- 需要生成的产品对象的属性相互依赖，需要指定其生成顺序。
- 对象的创建过程独立于创建该对象的类。在建造者模式中引入了指挥者类，将创建过程封装在指挥者类中，而不在建造者类中。
- 隔离复杂对象的创建和使用，并使得相同的创建过程可以创建不同的产品。

### 四、模式结构

建造者模式包含如下角色：

- Builder：抽象建造者
- ConcreteBuilder：具体建造者
- Director：指挥者
- Product：产品角色

![builder](builder.png)

### 五、实战

#### 具体实现

创建 User 类

```typescript
export class User {
    private name: string;
    private age: number;
    private address: string;

    constructor(builder: UserBuilder) {
      this.name = builder.Name;
      this.age = builder.Age;
      this.address = builder.Address;
    }

    get Name() {
      return this.name;
    }
    get Age() {
      return this.age;
    }
    get Address() {
      return this.address;
    }
}
```

创建 UserBuilder 类

```typescript
export class UserBuilder {
    private name: string;
    private age: number;
    private address: string;

    constructor(name: string) {
      this.name = name;
    }

    get Name() {
      return this.name;
    }
    setAge(value: number): UserBuilder {
      this.age = value;
      return this;
    }
    get Age() {
      return this.age;
    }
    setAddress(value: string): UserBuilder {
      this.address = value;
      return this;
    }
    get Address() {
      return this.address;
    }

    build(): User {
      return new User(this);
    }
}
```

#### 使用示例

```typescript
export function show(): void {
      const user: BuilderPattern.User = new BuilderPattern.UserBuilder(
        "semlinker"
      )
        .setAge(12)
        .setAddress("asdf")
        .build();
      console.log(user.Name + " " + user.Age + " + " + user.Address);
}
```