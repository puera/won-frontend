import { GetServerSideProps } from 'next'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItems from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItems
    }
  }
}
