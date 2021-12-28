import { Never } from "./Never.type";

export type OneOrOther<T1, T2> =
  | (T1 & Never<Partial<Omit<T2, keyof T1>>>)
  | (T2 & Never<Partial<Omit<T1, keyof T2>>>);
