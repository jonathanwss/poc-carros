import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { AuthProvider } from './auth';
import { CarProvider } from './contexts';

function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CarProvider>
    </AuthProvider>
  );
}

export default App;
