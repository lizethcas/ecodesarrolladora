import RoutePage from "./RoutesPages/Routes.pages";
import Button from "./components/Atoms/ButtonComponent/Button.component";
function App() {

  return (
    <>
      <RoutePage />
      <Button label="iniciar sesion" size="m" variant="secondary" className="border-borderGradient"/>

    </>
  );
}

export default App;
