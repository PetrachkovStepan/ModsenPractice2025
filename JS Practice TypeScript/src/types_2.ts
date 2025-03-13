interface Undef {
  readonly a?: number;
  readonly b?: string;
}
type RequiredValue<T> = T extends (undefined | null) ? never : T;
let x: Undef = {a: 1}
// let y: RequiredValue<Undef> = {a: 1, b: undefined} // -- // undefined is not assignable to string


let requiredString = (a: unknown): string | never => {
  switch (typeof a) {
    case "string":
      return a;

    default:
      throw new Error("Youn value is not string");
      break;
  }
  return "a";
};
console.log(requiredString("string"));
console.log(requiredString(1));
