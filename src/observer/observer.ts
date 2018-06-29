namespace ObserverPattern {
  export class Subject {
    /**
     * 观察者列表
     */
    private observers: Observer[] = [];

    /**
     * 注册观察者
     * @param observer
     */
    public addObserver(observer: Observer): void {
      console.log(observer, "is pushed!");
      this.observers.push(observer);
    }

    /**
     * 移除观察者
     * @param observer
     */
    public deleteObserver(observer: Observer): void {
      var n: number = this.observers.indexOf(observer);
      console.log(observer, "is removed");
      this.observers.splice(n, 1);
    }

    /**
     * 通知所有观察者
     */
    public notifyObservers(): void {
      console.log("notify all the observers", this.observers);
      this.observers.forEach(observer => observer.notify());
    }
  }

  export class Observer {
    constructor(private name: string) {}

    notify() {
      console.log(`${this.name} has been notified.`);
    }
  }
}
