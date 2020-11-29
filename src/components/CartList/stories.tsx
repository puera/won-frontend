import { Meta, Story } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'
import cartMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    games: cartMock,
    total: 'R$ 430,00'
  },
  argTypes: {
    games: {
      type: ''
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)