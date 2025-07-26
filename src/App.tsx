import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from '@/pages/HomePage';
import BusinessesPage from '@/pages/BusinessesPage';
import BusinessDetailPage from '@/pages/BusinessDetailPage';
import Layout from '@/components/layout/Layout';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="businesses" element={<BusinessesPage />} />
            <Route path="business/:slug" element={<BusinessDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
