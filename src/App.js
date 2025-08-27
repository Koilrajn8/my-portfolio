
import { Suspense } from 'react';
import './App.css';
import GlobalErrorBoundary from './ErrorBoundary';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { router } from './routes';
import store from "./store";
import Loader from './modules/Loader/Loader';

function App() {
 


  return (
    <div className="App">
      <>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <GlobalErrorBoundary>
            <RouterProvider router={router} />
          </GlobalErrorBoundary>
        </Suspense>
      </Provider>
    </>
  
    </div>
  );
  
}

export default App;


