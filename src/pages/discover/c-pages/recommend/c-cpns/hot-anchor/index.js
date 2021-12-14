import React, { memo } from 'react'

import { HotAnchor } from './style'

export default memo(function OXHotAnchor() {
  return (
    <HotAnchor>
      <div className='avatar'></div>
      <div className='content'>
        <h2>本项目仅供学习</h2>
        <h2>联系作者：</h2>
        <h2>Oliver-xuan</h2>
        <h2>微信:yzx690144569</h2>
      </div>
    </HotAnchor>
  )
})
