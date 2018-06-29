namespace FlyweightPattern {
  /**
   * 内部状态：model, screen, memory
   * 外部状态：sn
   */
  export class IphoneFlyweight {
    constructor(model: string, screen: number, memory: number) {}
  }

  export class Iphone {
    constructor(flyweight: IphoneFlyweight, sn: number) {}
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
}
