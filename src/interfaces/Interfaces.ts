export interface FormState {
  username: string;
  email: string;
  password: string;
}

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface NavLink {
  to: string;
  label: string;
  children?: React.ReactNode;
}

export interface NavListProps {
  links: NavLink[];
  className?: string;
}

export interface DataPageProps {
  dataPage: {
    links: NavLink[];
    className?: string;
  };
}

export interface ButtonConfig {
  text: string;
  variant: "primary" | "secondary";
}
