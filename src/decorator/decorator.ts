namespace DecoratorPattern {
  export interface Weapon {
    fire(): void;
  }

  export class Plane implements Weapon {
    fire(): void {
      console.log("发射普通子弹");
    }
  }

  export class Decorator implements Weapon {
    constructor(private weapon: Weapon) {}

    public fire(): void {
      console.log("`fire` of Decorator, is being called!");
      this.weapon.fire();
    }
  }

  export class MissileDecorator extends Decorator {
    constructor(weapon: Weapon) {
      super(weapon);
    }

    public fire(): void {
      super.fire();
      console.log("发射导弹");
    }
  }
}
