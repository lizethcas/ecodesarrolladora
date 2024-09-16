import { useEffect, useState, lazy, Suspense } from 'react';
import { checkSession } from './services/api.service';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './RoutesPages/ProtectedRoute';
import Header from './components/organisms/HeaderOrganism/Header.organism';
const AgentPage = lazy(() => import('./Pages/consultor/Agent.page'));
const PersonPage = lazy(() => import('./Pages/navigator/Person.page'));
const Marketplace = lazy(() => import('./Pages/common/Marketplace.page'));
const Articles = lazy(() => import('./Pages/common/Articles.page'));
const About = lazy(() => import('./Pages/common/About.page'));
const LoginPage = lazy(() => import('./Pages/common/LoginPage/Login.page'));
const ConsultoriaPage = lazy(() => import('./Pages/common/consultoria.page'));
const HomeGeneralPage = lazy(() => import('./Pages/common/HomePage/Home.page'));
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifySession = async () => {
      const sessionIsValid = await checkSession();
      setIsAuthenticated(sessionIsValid);
      setLoading(false);
    };

    verifySession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>

      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeGeneralPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/nuestro-proposito" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/consultoria" element={<ConsultoriaPage />} />
          <Route
            path="/agente"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AgentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/persona"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PersonPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
      {/* <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeGeneralPage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/articulos" element={<Articles />} />
            <Route path="/nuestro-proposito" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/consultoria" element={<ConsultoriaPage />} />
            <Route
              path="/agente"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <AgentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/persona"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <PersonPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router> */}
    </>
  );
}

export default App;
