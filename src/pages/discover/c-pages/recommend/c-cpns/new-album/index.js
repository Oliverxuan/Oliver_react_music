import React, { memo, useEffect, useRef } from 'react'

import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import OXAlbumCover from '@/components/album-cover'

import { NEW_ALBUM_LIMIT } from '@/common/contants'

import OXThemeHeaderRCM from '@/components/theme-header-rcm'
import { getNewAlbumsAction } from '../../store/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function OXNewAlbum() {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const pageRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUM_LIMIT))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <OXThemeHeaderRCM title='新碟上架' />
      <div className='content'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={item} className='page'>
                  {newAlbums
                    .slice(item * 5, (item + 1) * 5)
                    .map((iten, indey) => {
                      return (
                        <OXAlbumCover
                          key={iten.id}
                          info={iten}
                          size={100}
                          width={118}
                          bgp='-570px'
                        />
                      )
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className='arrow arrow-right sprite_02'
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})
