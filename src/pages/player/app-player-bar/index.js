import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { Slider } from 'antd'
import { getSongDetalAction } from '../store/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

export default memo(function OXAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  )

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.al && currentSong.ar[0].name) || '匿名'
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrenttime = formatDate(currentTime, 'mm:ss')

  const audioRef = useRef()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetalAction(428375722))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    if (!isChange) {
      setCurrentTime(e.target.currentTime * 1000)

      setProgress((currentTime / duration) * 100)
    }
  }

  const sliderChange = useCallback(
    (value) => {
      setIsChange(true)
      const currentTime = (value / 100) * duration
      setCurrentTime(currentTime)
      setProgress(value)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChange(false)

      if (!isPlaying) {
        playMusic()
      }
    },
    [duration, isPlaying, playMusic]
  )

  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev'></button>
          <button
            className='sprite_player play'
            onClick={(e) => playMusic()}
          ></button>
          <button className='sprite_player next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <a href='/#'>
              <img src={getSizeImage(picUrl, 35)} alt='' />
            </a>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <a href='/#' className='singer-name'>
                {singerName}
              </a>
            </div>
            <div className='progress'>
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className='time'>
                <span className='now-time'>{showCurrenttime}</span>
                <span className='divider'>/</span>
                <span className='duration'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'></button>
            <button className='sprite_player btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlaybarWrapper>
  )
})
