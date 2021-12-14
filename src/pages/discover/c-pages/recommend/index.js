import React, { memo } from 'react'
import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content,
} from './style'

import OXTopBanner from './c-cpns/top-banner'
import OXHotRecommend from './c-cpns/hot-recommend'
import OXNewAlbum from './c-cpns/new-album'
import OXRecommendRanking from './c-cpns/recommend-ranking'
import OXHotAnchor from './c-cpns/hot-anchor'

function OXRecommend(props) {
  return (
    <RecommendWrapper>
      <OXTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <OXHotRecommend />
          <OXNewAlbum />
          <OXRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <OXHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(OXRecommend)

// function OXRecommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>OxRecommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// })

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(OXRecommend))
