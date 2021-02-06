import { GetStaticProps } from 'next'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import gamesMock from 'components/GameCardSlider/mock'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function WishList(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloCLient = initializeApollo()

  const { data } = await apolloCLient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
