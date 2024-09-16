export interface linkProps {
  to: string;
  label: string;
 
}

export interface NavLinkProps  {
  links: linkProps[];
  children?: React.ReactNode;
  navClassName?:string;
  ulClassName?:string;
  
}

export interface FormState {
  username: string;
  email: string;
  password: string;
}

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
