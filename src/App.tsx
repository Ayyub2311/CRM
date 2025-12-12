import {BrowserRouter} from 'react-router-dom';
import AppContextProvider from '@crema/context/AppContextProvider';
import ThemeContextProvider from '@crema/context/AppContextProvider/ThemeContextProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import AppAuthProvider from '@crema/core/AppAuthProvider';
import AuthRoutes from '@crema/components/AuthRoutes';
import AppLayout from '@crema/core/AppLayout';
import '@crema/mockapi';
import {Normalize} from 'styled-normalize';
import './styles/index.css';
import "@crema/mockapi/fakedb/apps/todo/todoMock";

const App=()=> {
  return (
      <AppContextProvider>
          <ThemeContextProvider>   
            <Normalize /> 
              <AppLocaleProvider>
                  <BrowserRouter>
                      <AppAuthProvider>
                          <AuthRoutes>
                              <AppLayout />
                          </AuthRoutes>
                      </AppAuthProvider>
                  </BrowserRouter>
              </AppLocaleProvider>
          </ThemeContextProvider>
      </AppContextProvider>
  )
}

export default App
