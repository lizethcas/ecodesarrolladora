import { useEffect, useState } from "react";
import Button from "./components/Atoms/ButtonComponent/Button.component";
import axios from "axios";



function App() {
   return (
    <>
      <h1 className="text-3xl">Titulo</h1>
      <Button
        type="primary"
        text="boton"
        onClick={() => {
          alert("button clicked");
        }}
      />

         </>
  );
}

export default App;
