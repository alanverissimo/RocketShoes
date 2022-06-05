import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(95)/undeaeoo/catalog/nike/nike-air-force-1-07-triple-white-cw2288-111-yythkg.jpg" alt="Tênis" />
                    </td>
                    <td>
                        <strong>Tenis brabo</strong>
                        <span>R$150,00</span>
                    </td>
                    <td>
                        <div>
                    <button type="button">
                        <MdRemoveCircleOutline size={20} color="7159c1" />
                    </button>
                    <input type="number" readOnly value={1} />
                    <button type="button">
                        <MdAddCircleOutline size={20} color="7159c1" />
                    </button>
                    </div>
                    </td>
                    <td>
                       <strong>R$300,00</strong> 
                    </td>
                    <td>
                        <button type= "button">
                            <MdDelete size={20} color="7159c1" />
                        </button>
                    </td>
                </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>Total</span>
                    <strong>R$1900,00</strong>
                </Total>
            </footer>
        </Container>
    )

}