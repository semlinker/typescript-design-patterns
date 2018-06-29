/// <reference path="template-method.ts" />
namespace TemplateMethodPattern {
  export namespace Demo {
    export function show(): void {
      const coffee: TemplateMethodPattern.Coffee = new TemplateMethodPattern.Coffee();
      const tea: TemplateMethodPattern.Tea = new TemplateMethodPattern.Tea();
      coffee.makeBeverage();
      tea.makeBeverage();
    }
  }
}
