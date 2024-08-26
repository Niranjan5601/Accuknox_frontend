

import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
    <div className='font-poppins'>
      <Body/>
    </div>
    </Provider>
  )
}

export default App;
