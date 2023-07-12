export interface IDeportistas {
    sum:number;
    deportistas: IDeportista[];
}
export interface IDeportista {
    _id?: string;
    nombre:string;
    peso:number;
    altura:number;
    edad:number;
}