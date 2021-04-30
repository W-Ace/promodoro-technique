import Layout from '@/layout/default';

const route = {
  path: '/',
  name: 'Index',
  component: () => import('@/views/index'),
  meta: {
    layout: Layout,
  },
};

export default route;
