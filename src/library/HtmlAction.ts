import { SelectVM } from "./core/models/SelectVM";
import { IHtmlSelectAction } from "./interfaces/IHtmlSelectAction";

export class HtmlAction implements IHtmlSelectAction {

  constructor(private jquerySelect: JQuery<HTMLElement>) {
  }

  public fill(selectParams: SelectVM) {
    // TODO
  }

}
