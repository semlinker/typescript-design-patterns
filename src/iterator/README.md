## Typescript 设计模式之迭代器模式

### 一、简介

迭代器（Iterator）模式，又叫做游标（Cursor）模式。它提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

### 二、优缺点

#### 优点

- 简化了遍历方式，对于对象集合的遍历，还是比较麻烦的，对于数组或者有序列表，我们尚可以通过游标取得，但用户需要在对集合了解的前提下，自行遍历对象，但是对于 hash 表来说，用户遍历起来就比较麻烦。而引入迭代器方法后，用户用起来就简单的多了。
- 封装性良好，用户只需要得到迭代器就可以遍历，而不用去关心遍历算法。

#### 缺点

- 遍历过程是一个单向且不可逆的遍历。

### 三、应用场景

* 访问一个聚合对象的内容而无需暴露它的内部表示。
* 支持对聚合对象的多种遍历。
* 为遍历不同的聚合结构提供一个统一的接口(即, 支持多态迭代)。

### 四、实战

#### 具体实现

Iterator 接口

```typescript
export interface Iterator {
    next(): any;
    hasNext(): boolean;
}
```

Aggregator（聚合） 接口

```typescript
export interface Aggregator {
    createIterator(): Iterator;
}
```

ConcreteIterator 

```typescript
export class ConcreteIterator implements Iterator {
    private collection: any[] = [];
    private position: number = 0;

    constructor(collection: any[]) {
      this.collection = collection;
    }

    public next(): any {
      var result = this.collection[this.position];
      this.position += 1;
      return result;
    }

    public hasNext(): boolean {
      return this.position < this.collection.length;
    }
}
```

Numbers 

```typescript
export class Numbers implements Aggregator {
    private collection: number[] = [];

    constructor(collection: number[]) {
      this.collection = collection;
    }
    public createIterator(): Iterator {
      return new ConcreteIterator(this.collection);
    }
}
```

#### 使用示例

```typescript
export function show(): void {
      const nArray = [7, 29, 8, 15, 2, 14];
      const numbers: IteratorPattern.Numbers = new IteratorPattern.Numbers(
          nArray
        ),
        it: IteratorPattern.ConcreteIterator = <
          IteratorPattern.ConcreteIterator
        >numbers.createIterator();
        
      while (it.hasNext()) {
        console.log(it.next());
      }
}
```

