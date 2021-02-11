import Main from '@/pages/Main'
import PaymentResult from '@/pages/PaymentResult'
import NewBlocks from '@/pages/NewBlocks'

export default [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/NewBlocks',
    name: 'NewBlocks',
    component: NewBlocks
  },
  {
    path: '/result',
    name: 'result',
    component: PaymentResult,
    children: [
      {
        path: 'fail',
        name: 'fail',
        component: () => import('@/components/PaymentResult/Fail')
      },
      {
        path: 'success',
        name: 'success',
        component: () => import('@/components/PaymentResult/Success')
      }
    ]
  }
]
