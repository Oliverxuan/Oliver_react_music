import React, { memo, useEffect } from 'react'

import { RankingWrapper } from './style'

import OXThemeHeaderRCM from '@/components/theme-header-rcm'
import OXTopRanking from '@/components/top-ranking'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function OXRecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <OXThemeHeaderRCM title='榜单' />
      <div className='tops'>
        <OXTopRanking info={upRanking} />
        <OXTopRanking info={newRanking} />
        <OXTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
