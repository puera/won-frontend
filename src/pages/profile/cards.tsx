import CardsList, { CardsListProps } from 'components/CardsList'
import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

import cardsMock from '../../components/PaymentOptions/mock'

const Cards = ({ cards }: CardsListProps) => {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      cards: cardsMock
    }
  }
}

export default Cards
