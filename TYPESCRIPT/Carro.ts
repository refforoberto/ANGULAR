import Veiculo from './Veiculo';

export default class Carro extends Veiculo{
   
    private numeroDeportas: number; 

    constructor(modelo: string, numeroDePortas: number){
        super()
        this.modelo = modelo;
        this.numeroDeportas = numeroDePortas;
    }
   
}