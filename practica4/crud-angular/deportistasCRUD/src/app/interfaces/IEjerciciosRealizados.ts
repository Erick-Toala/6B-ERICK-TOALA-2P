export interface IEjerciciosRealizados {
    sum:number;
    ejerciciorealizados: IEjerciciosRealizado[];
}
export interface IEjerciciosRealizado {
    _id?: string;
    nombre:string;
    idtipoejercicio:string;
    iddeportista:string;
    fecha:string;
    hora:string;
    tiempo:string;
    caloriasquemadas:string;
}