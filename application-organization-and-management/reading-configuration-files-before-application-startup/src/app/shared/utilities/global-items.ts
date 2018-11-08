import { GlobalEndpoints } from './global-endpoints';

export class GlobalItems {
  constructor() {
  }

  public static endpoints = new GlobalEndpoints();

  // Kdnc Step 5
  public static setConfiguration(configuration: any): void {
    Object.assign(GlobalItems.endpoints, configuration.endpoints);
  }
}
