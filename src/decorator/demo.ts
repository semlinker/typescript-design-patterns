/// <reference path="decorator.ts" />
namespace DecoratorPattern {
  export namespace Demo {
    export function show(): void {
      const missileDecorator: DecoratorPattern.Decorator = new DecoratorPattern.MissileDecorator(
        new DecoratorPattern.Plane()
      );

      missileDecorator.fire();
    }
  }
}
