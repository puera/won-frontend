import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CartList from '.'

import cartMock from './mock'

const props = {
  games: cartMock,
  total: 'R$ 330'
}

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(<CartList {...props} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(props.total)).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
