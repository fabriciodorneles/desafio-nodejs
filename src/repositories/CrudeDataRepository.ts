export default class CrudeDataRepository {
  private crudeData: JSON[];

  constructor() {
    this.crudeData = [];
  }

  public initializeCrudeData(data: JSON[]): void {
    this.crudeData = data;
  }

  public getCrudeData(): JSON[] {
    return this.crudeData;
  }
}
