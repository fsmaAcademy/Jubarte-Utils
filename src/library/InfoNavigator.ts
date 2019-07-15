import { INavigator } from "./interfaces/INavigator";

export class InfoNavigator implements INavigator {

  public name(): string {
    return navigator.appName;
  }

  public version(): string {
    return navigator.appVersion;
  }
}
