/// <reference path="iterator.ts" />
namespace IteratorPattern {
  export namespace Demo {
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
  }
}
