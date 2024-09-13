import RoutePage from "./RoutesPages/Routes.pages";
import Button from "./components/Atoms/ButtonComponent/Button.component";
function App() {

  return (
    <>
      <RoutePage />
      <Button label="iniciar sesion" size="m" variant="secondary" icon={"users"} iconStyles={{ size: 24}}/>

    </>
  );
}

export default App;
