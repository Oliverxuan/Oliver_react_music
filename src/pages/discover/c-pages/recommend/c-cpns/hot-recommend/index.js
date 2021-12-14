import React, { memo, useEffect } from 'react'

import { HotRecommendWrapper } from './style'

import OXThemeHeaderRCM from '@/components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'

import { HOT_RECOMMEND_LIMIT } from '@/common/contants'

import OXSongsCover from '@/components/songs-cover'

export default memo(function OXHotRecommend() {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <OXThemeHeaderRCM
        title='热门推荐'
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className='recommend-list'>
        {hotRecommends.map((item, index) => {
          return <OXSongsCover key={item.id} info={item}></OXSongsCover>
        })}
      </div>
    </HotRecommendWrapper>
  )
})
