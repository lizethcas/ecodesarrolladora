import { Routes, Route } from "react-router-dom";
import { BlogPage, ContactView, FooterView, HomeView, NavBarView, PropetiesView } from "./juan-views";
import { NotFound } from "./juan-views/NotFound/NotFound";

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
        <Route path="/aboutus" element={<ContactView />} />

        {/* Ruta inexistente */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterView />
    </>
  );
}

export default App;
