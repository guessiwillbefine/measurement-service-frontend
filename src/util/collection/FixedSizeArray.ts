/**
 * массив фиксированного размера, если size > переданного значения - удаляется первый элемент
 */
export class FixedSizeArray<T> {

  private arr : T[] = [];
  private readonly size: number;

  constructor(size: number = 15) { this.size = size }

  public push(value: T) {
    if (this.arr.length >= this.size) {
       this.arr.shift();
    }
    this.arr.push(value);
  }
  public getArray() {
    return this.arr;
  }
}
