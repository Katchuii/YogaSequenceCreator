export interface IVariation {
    ancestor: string,
    name: string
  }
  
export interface IAsana {
    id: number,
    name: string,
    isVariation: boolean,
    level: number,
    type: number[],
    theme: number[],
    locus: number,
    order: number[],
    balance: string | boolean,
    variation?: IVariation,
    counter? : string[],
    prepare? : string[], 
    titel? : string
  }
  
  export interface IUserData { // alles number, weil sonst später Konflikte mit asanas.ts beim vergleichen -> string-Wert aus Form muss wieder in number umgewandelt werden
    level: number,
    options: number[],
    duration: number,
    theme: number
  }
  
