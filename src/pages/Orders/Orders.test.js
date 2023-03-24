import { render, screen } from "@testing-library/react"
import { Orders } from "./Orders";

describe('<Orders />', () => {
  test('it loads the input fields properly', async () => {
    render(<Orders />)
    const elements = [
      screen.getByRole('heading', { name: /meus pedidos/i }),
      ...(await screen.findAllByRole('listitem'))
    ]

    elements.forEach(element => expect(element).toBeInTheDocument())
  })
})