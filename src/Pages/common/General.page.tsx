import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/organisms/HeaderOrganism/Header.organism';

const Marketplace = lazy(() => import('./Marketplace.page'));
const Articles = lazy(() => import('./Articles.page'));
const About = lazy(() => import('./About.page'));
const LoginPage = lazy(() => import('./LoginPage/Login.page'));
const ConsultoriaPage = lazy(() => import('./consultoria.page'));
const HomeGeneralPage = lazy(() => import('./HomePage/Home.page'));

const GeneralPage = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<HomeGeneralPage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/articulos" element={<Articles />} />
            <Route path="/nuestro-proposito" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/consultoria" element={<ConsultoriaPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default GeneralPage;
