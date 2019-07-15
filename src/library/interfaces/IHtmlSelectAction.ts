import { SelectVM } from "../core/models/SelectVM";

export interface IHtmlSelectAction {
  fill(selectParams: SelectVM): void;
}
