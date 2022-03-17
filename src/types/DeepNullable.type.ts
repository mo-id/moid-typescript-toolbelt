import { Nullable } from "./Nullable.type";
import { PlainObject } from "./PlainObject.type";

export type DeepNullable<Type> = Type extends PlainObject
  ? Type extends Array<any>
    ? Nullable<Type>
    : Nullable<{
        [Property in keyof Type]: Type[Property] extends Array<any>
          ? Nullable<Type[Property]>
          : DeepNullable<Type[Property]>;
      }>
  : Nullable<Type>;
