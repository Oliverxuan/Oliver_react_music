import OXDiscover from '@/pages/discover'
import OXFriend from '@/pages/friend'
import OXMine from '@/pages/mine'
import OXRecommend from '@/pages/discover/c-pages/recommend'
import OXAlbum from '@/pages/discover/c-pages/album'
import OXArtist from '@/pages/discover/c-pages/artist'
import Djradio from '@/pages/discover/c-pages/djradio'
import OXRanking from '@/pages/discover/c-pages/ranking'
import OXSongs from '@/pages/discover/c-pages/songs'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const routers = [
  {
    path: '/',
    exact: true,
    //重定向   当url为 /  的时候  直接跳转到 /discover
    render: () => <Redirect to='/discover' />,
  },
  {
    path: '/discover',
    component: OXDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />,
      },
      {
        path: '/discover/recommend',
        component: OXRecommend,
      },
      {
        path: '/discover/album',
        component: OXAlbum,
      },
      {
        path: '/discover/artist',
        component: OXArtist,
      },
      {
        path: '/discover/djradio',
        component: Djradio,
      },
      {
        path: '/discover/ranking',
        component: OXRanking,
      },
      {
        path: '/discover/songs',
        component: OXSongs,
      },
    ],
  },
  {
    path: '/mine',
    component: OXMine,
  },
  {
    path: '/friend',
    component: OXFriend,
  },
]

export default routers
