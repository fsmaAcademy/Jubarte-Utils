import * as $ from 'jquery';

import { IJubarteKeyboardEvent } from "./library/IJubarteKeyboardEvent";
import { JubarteEvent } from "./library/JubarteEvent";
console.log('iniciou');
let jbrtKeyEvent: IJubarteKeyboardEvent = new JubarteEvent($('#input'));
jbrtKeyEvent.preventNumber(() => {
  console.log('fora');
});
