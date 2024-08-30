import Button from "./components/ButtonComponent/Button.component";

function App() {
  
  return (
    <>
      <h1 className="text-3xl">titulo</h1>
      <Button type="primary" text="boton" onClick={()=>{alert('button clicked')}} />
    </>
  );
}

export default App;
