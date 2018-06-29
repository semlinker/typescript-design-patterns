/// <reference path="builder.ts" />

namespace BuilderPattern {
  export namespace Demo {
    export function show(): void {
      const user: BuilderPattern.User = new BuilderPattern.UserBuilder(
        "semlinker"
      )
        .setAge(31)
        .setAddress("FJXM")
        .build();
      console.log(user.Name + " " + user.Age + " " + user.Address);
    }
  }
}
