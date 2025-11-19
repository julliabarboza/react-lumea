import axios from "axios";
import type { Maquiagem } from "../types/Maquiagem";

export const getMaquiagem = async (): Promise<Maquiagem[]> => {
  try {
    const resposta = await axios.get("http://localhost:3000/produtos/");
    return resposta.data;
  } catch (error) {
    console.error("Erro ao buscar os dados: ", error);
    throw error; 
  }
};
