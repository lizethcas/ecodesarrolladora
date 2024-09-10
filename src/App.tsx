import { Routes, Route } from "react-router-dom";
import {
  About,
  BlogPage,
  ContactView,
  FooterView,
  HomeView,
  Login,
  NavBarView,
  NotFound,
  PropetiesView,
  Registration,
} from "./pages/common";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <NavBarView />
      </div>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/properties" element={<PropetiesView />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/aboutus" element={<About />} />

        {/* Registro y Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Ruta inexistente */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterView />
    </>
  );
}

export default App;
