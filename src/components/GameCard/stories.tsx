import { Meta, Story } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'Game/GameCard',
  component: GameCard,
  args: {
    slug: 'red-dead-2',
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
