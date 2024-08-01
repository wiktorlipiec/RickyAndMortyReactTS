import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import { GlobalStyle } from './styles/globalStyles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
