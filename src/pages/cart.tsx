import { GetServerSideProps } from 'next'
import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      games: itemsMock,
      total: 'R$ 430,00',
      cards: cardsMock
    }
  }
}
