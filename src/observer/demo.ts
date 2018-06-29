/// <reference path="observer.ts" />
namespace ObserverPattern {
  export namespace Demo {
    export function show(): void {
      const subject: ObserverPattern.Subject = new ObserverPattern.Subject();

      subject.addObserver(new ObserverPattern.Observer("semlinker"));
      subject.addObserver(new ObserverPattern.Observer("lolo"));
      subject.notifyObservers();
    }
  }
}
