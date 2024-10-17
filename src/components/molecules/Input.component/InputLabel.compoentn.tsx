// InputLabel.tsx
import React from "react";
import Label from "../../Atoms/LabelComponent/Label.component";
import InputAtom, { InputAtomProps } from "../../Atoms/LabelComponent/Input.component.prueba";

interface InputLabelProps {
  id: string;
  labelText: string;
  inputProps?: InputAtomProps; // Props para el input
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>; // Props para el label
}

const InputLabel: React.FC<InputLabelProps> = React.memo(({ id, labelText, inputProps, labelProps }) => {
  return (
    <div className="relative text-start">
      <Label htmlFor={id} {...labelProps}
      >{labelText}</Label>
      <InputAtom
        id={id}
        name={id} // Asegúrate de que name sea igual al id
        {...inputProps}
      />

    </div>
  );
});

export default InputLabel;
