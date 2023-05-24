import { ConnectedComponent } from "react-redux";

export type InjectComp =
  | ConnectedComponent<(prop: any) => JSX.Element, any>
  | ((prop?: any) => JSX.Element);
