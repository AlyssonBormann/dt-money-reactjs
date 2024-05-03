import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Jogos</td>
              <td>
                <PriceHighLight variant="income">R$ 120.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>02/05/2024</td>
            </tr>
            <tr>
              <td width="50%">Terere</td>
              <td>
                {' '}
                <PriceHighLight variant="outcome">-R$ 20.000,00</PriceHighLight>
              </td>
              <td>Alimentacao</td>
              <td>01/05/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}
