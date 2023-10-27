import { Pedido } from "./pedido";
import { Cliente } from "./cliente";
import { Produto } from "./produto";
import { CLIENTES } from "./CLIENTES";
import { PRODUTOS } from "./PRODUTOS";

export const PEDIDOS = [
    new Pedido(CLIENTES[0], [PRODUTOS[0], PRODUTOS[1]]),
    new Pedido(CLIENTES[1], [PRODUTOS[2], PRODUTOS[1], PRODUTOS[0]]),
    new Pedido(CLIENTES[2], [PRODUTOS[3]]),
    new Pedido(CLIENTES[3], [PRODUTOS[2], PRODUTOS[2]])
]