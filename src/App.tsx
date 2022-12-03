import React from 'react';
import { GlobalStyles } from './config/GlobalStyles';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;