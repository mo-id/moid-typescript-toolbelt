import { ReactNode } from "react";

export type DefinedReactNode = Exclude<ReactNode, undefined>;
