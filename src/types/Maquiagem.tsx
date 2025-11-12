export interface Maquiagem {
  id: string | undefined;
  nome: string;
  descricao: string;
  preco: number;
  peso: number | null;
  categorias: string[];
  imagens: string[];
}
