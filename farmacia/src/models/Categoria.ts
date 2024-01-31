import Produto from "./Produto";

export default interface Tema {
    id: number;
    nome: string;
    produto?: Produto | null;
}