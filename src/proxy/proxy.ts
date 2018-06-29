namespace ProxyPattern {
    //声明了真实主题和代理主题的共同接口
    export interface Subject {
        doAction(): void;
    }
    //代理主题
    export class Proxy implements Subject {
        private realSubject: RealSubject;  
        private s: string;

        constructor(s: string) {
            this.s = s;
        }

        public doAction(): void {
            console.log("`doAction` of Proxy(", this.s, ")");
            if (this.realSubject === null || this.realSubject === undefined) {
                console.log("creating a new RealSubject.");
                this.realSubject = new RealSubject(this.s);  //对真实主题的引用
            }
            this.realSubject.doAction();
        }
    }
    //真实主题角色
    export class RealSubject implements Subject {
        private s: string;

        constructor(s: string) {
            this.s = s;
        }
        public doAction(): void {
            console.log("`doAction` of RealSubject", this.s, "is being called!");
        }
    }
}