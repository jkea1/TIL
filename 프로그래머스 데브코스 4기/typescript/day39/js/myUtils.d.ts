interface Add {
  (a: number, b: number): number;
}
interface Subtract {
  (a: number, b: number): number;
}

interface DefaultExport {
  add: Add;
  subtract: Subtract;
}

declare const de: DefaultExport;
export const add: Add;
export const subtract: Subtract;
export default de;
