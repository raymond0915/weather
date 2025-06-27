
import './App.css';
import Home from './pages/Home';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
