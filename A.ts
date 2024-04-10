class A {
  A1: number;
  A2: number;

  constructor() {}

  public getA1(): number {
    return this.A1;
  }

  public getA2(): number {
    return this.A2;
  }

  public MA1(): string {
    return "MA1";
  }

  public MA2(): string {
    return "MA2";
  }

  public MA3():string {
    return "Alteração a classe A partir do clone";
  }
}