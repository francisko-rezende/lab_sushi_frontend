import { render, screen } from "@testing-library/react"
import { Contact } from "./Contact";

describe('<Contact />', () => {
  test('it loads the input fields properly', () => {
    render(<Contact />)
    const elements = [
      screen.getByRole('heading', { name: /entre em contato/i }),
      screen.getByRole('textbox', { name: /email/i }),
      screen.getByRole('textbox', { name: /contato/i }),
      screen.getByRole('textbox', { name: /mensagem/i })
    ]

    elements.forEach(element => expect(element).toBeInTheDocument())
  })
})