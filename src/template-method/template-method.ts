namespace TemplateMethodPattern {
  abstract class Beverage {
    boilWater() {
      console.log("把水煮沸");
    }

    abstract brew(): void;
    abstract pourInCup(): void;
    abstract addCondiments(): void;

    makeBeverage() {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
    }
  }

  export class Coffee extends Beverage {
    brew(): void {
      console.log("用沸水冲泡咖啡");
    }
    pourInCup(): void {
      console.log("把咖啡倒进杯子");
    }
    addCondiments(): void {
      console.log("加糖和牛奶");
    }
  }

  export class Tea extends Beverage {
    brew(): void {
      console.log("用沸水浸泡茶叶");
    }
    pourInCup(): void {
      console.log("把茶倒进杯子");
    }
    addCondiments(): void {
      console.log("加柠檬");
    }
  }
}
