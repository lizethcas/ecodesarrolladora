import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../Pages/common/HomePage/Home.page'));
const Marketplace = lazy(() => import('../Pages/common/Marketplace.page'));
const Articles = lazy(() => import('../Pages/common/Articles.page'));
const About = lazy(() => import('../Pages/common/About.page'));
const LoginPage = lazy(() => import('../Pages/common/LoginPage/Login.page'));
const ConsultoriaPage = lazy(() => import('../Pages/common/consultoria.page'));


const RoutePage = () => {

    return (
        <>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/articulos" element={<Articles />} />
                        <Route path="/nuestro-proposito" element={<About />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/consultoria" element={<ConsultoriaPage />} />
                    </Routes>
                </Suspense>
            </main>




        </>
    )
}

export default RoutePage