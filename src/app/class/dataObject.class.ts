export class dataObject {
  name: any;
  position: any;
  weight: any;
  symbol: any;
  constructor(name: any, position: any, weight: any, symbol: any) {
    this.name = name;
    this.position = position;
    this.weight = weight;
    this.symbol = symbol;
  }
  getObject() {
    return {
      name: this.name,
      position: this.position,
      weight: this.weight,
      symbol: this.symbol,
    };
  }
}
