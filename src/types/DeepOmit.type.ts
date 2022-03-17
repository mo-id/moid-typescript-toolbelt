export type DeepOmit<
  Type,
  Keys extends string | number | symbol
> = Type extends Array<any>
  ? { [index: number]: Omit<Type[number], Keys> }
  : Type extends object
  ? Omit<{ [Property in keyof Type]: DeepOmit<Type[Property], Keys> }, Keys>
  : Omit<Type, Keys>;
