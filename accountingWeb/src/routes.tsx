import {
  Cash,
  Manage,
  ManageList,
  OilSale,
  Reserves,
  AntG2,
  WaveBox,
} from './pages'
interface IRoutesType {
  id: string,
  element: JSX.Element,
  path: string,
  isPublic?: boolean,
  text?: string,
  icon?: JSX.Element
}
export const routesArr: IRoutesType[] = [
  {
    id: 'cash',
    element: <Cash />,
    path: '/dashboard/cash',

  },
  {
    id: 'oilSale',
    element: <OilSale />,
    path: '/dashboard/oilSale',
  },
  {
    id: 'reserves',
    element: <Reserves />,
    path: '/dashboard/reserves',
  },
  {
    id: 'antG2',
    element: <AntG2 />,
    path: '/dashboard/antG2',
  },
  {
    id: 'manage',
    element: <Manage />,
    path: '/dashboard/manage',
  },
  {
    id: 'manageList',
    element: <ManageList />,
    path: '/dashboard/manageList',
  },
  {
    id: 'WaveBox',
    element: <WaveBox />,
    path: '/dashboard/waveBox',
  },
]

