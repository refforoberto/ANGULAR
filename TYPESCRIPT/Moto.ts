import Veiculo from './Veiculo';

export default class Moto extends Veiculo {
    public acelerar(): void {
        this.velocidade += 20;
    }   
}