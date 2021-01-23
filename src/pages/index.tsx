import { GetServerSideProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

//getStaticProps => gera estático em build time
//getServerProps => gerav via SSR a cada request (nunca vai para o bundle do client)
//getInitialProps => gera via SSR em cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
