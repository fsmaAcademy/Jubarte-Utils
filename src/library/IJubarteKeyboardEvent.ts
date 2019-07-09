/**
 * Interface resposável por armazenar os eventos de teclado gerados pelo DOM
 *
 * @export IJubarteKeyboardEvent
 * @interface IJubarteKeyboardEvent
 */
export interface IJubarteKeyboardEvent {
  /**
   * Esta classe permite apenas digitos numéricos a partir do DOM selecionado.
   *
   * @remarks
   * Este método é uma implementado em { @link library#JubartEvent }
   * @return void
   */
  letterNotAllowed(): void;

  /**
   * Esta classe permite apenas digitos numéricos a partir do DOM selecionado.
   *
   * @remarks
   * Este método é uma implementado em { @link library#JubartEvent }
   * @return void
   */
  letterNotAllowedByEvent(): void;

  /**
   * Método não permite nenhum número a ser digitado no DOM selecionado.
   *
   * @return void
   */
  numberNotAllowed(): void;

  preventNumber(callback: () => void): void;
}
