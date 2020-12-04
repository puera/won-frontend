import OrdersList, { OrdersListProps } from 'components/OrdersList'
import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

import ordersMock from 'components/OrdersList/mock'

const Orders = ({ items }: OrdersListProps) => {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      items: ordersMock
    }
  }
}

export default Orders
