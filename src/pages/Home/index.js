import Loadable from 'react-loadable';

import Loading from 'components/Loading';

const LoadablePage = Loadable({
  loader: () => import('./page'),
  loading: Loading,
  delay: 300,
});

export default LoadablePage;
