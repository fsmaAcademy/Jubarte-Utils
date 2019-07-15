import * as $ from 'jquery';
import { InfoNavigator } from './library/InfoNavigator';
import { INavigator } from './library/interfaces/INavigator';

const browser: INavigator = new InfoNavigator();
console.log(browser.name());
console.log(browser.version());
