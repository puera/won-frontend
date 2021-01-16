import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown games={gamesMock} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${gamesMock.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart games and total', () => {
    renderWithTheme(<CartDropdown games={gamesMock} total="R$ 300,00" />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${gamesMock[0].title}`)).toBeInTheDocument()
  })
})
