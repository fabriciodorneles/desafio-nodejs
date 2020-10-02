export default class CrudeDataRepository {
  private crudeData: any[];

  constructor() {
    this.crudeData = [];
  }

  public initializeCrudeData(data: any[]): void {
    this.crudeData = data;
  }

  public getCrudeData(): any[] {
    return this.crudeData;
  }
}
