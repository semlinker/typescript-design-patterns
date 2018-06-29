/// <reference path="flyweight.ts" />
namespace FlyweightPattern {
  export namespace Demo {
    export function show(): void {
      const iphoneFactory = new IphoneFactory();
      const phones = [];
      for (var i = 0; i < 10000; i++) {
        var memory = i % 2 == 0 ? 16 : 32;
        phones.push(iphoneFactory.getIphone("iPhoneX", 5.0, memory, i));
      }
      console.log("Already created 10000 iPhoneX");
    }
  }
}
