import { IKeyboardEvent } from "./interfaces/IKeyboardEvent";
import { Regex } from "./Regex";

/**
 *
 * @class JubarteEvent
 * @implements {IJubarteKeyboardEvent}
 */
export class JubarteEvent implements IKeyboardEvent {

  /**
   * Creates an instance of JubarteEvent.
   * @param {JQuery<HTMLElement>} [dom] Elemento de seleção do DOM.
   * @param {JQuery.KeyDownEvent} [event] Evento selecionado do DOM.
   * @memberof JubarteEvent
   */
  constructor(
    private dom?: JQuery<HTMLElement>,
    private event?: JQuery.KeyDownEvent,
    ) {}

  public letterNotAllowed(): void {
    this.dom.off('keydown');
    this.dom.on('keydown', (e: JQuery.KeyDownEvent) => {
      const keyCode: number = e.which;
      if (!((e.keyCode >= 48 && e.keyCode <= 57)
        || (e.keyCode >= 96 && e.keyCode <= 105)
        || keyCode === 8
        || keyCode === 46)) {
        console.log(keyCode);
        e.preventDefault();
      }
    });
  }

  public letterNotAllowedByEvent(): void {
    let keyCode: number = this.event.which;
    if (!(keyCode > 95 && keyCode < 106
      || keyCode === 8
      || keyCode === 46
      || keyCode === 38)) {
      this.event.preventDefault();
    }
  }

  public numberNotAllowed(): void {
    this.dom.off('keydown');
    this.dom.on('keydown', (e: JQuery.KeyDownEvent) => {
      const keyCode = e.keyCode ? e.keyCode : e.which;
      if (keyCode > 95) {
        e.preventDefault();
      }
    });
  }

  public preventNumber(callback: () => void): void {
    this.dom.off('input');
    this.dom.on('input', (e: JQuery.KeyDownEvent) => {
      if (Regex.ANY_NUMBER.test(this.dom.val() as string)) {
        callback();
      }
    });
  }
}
