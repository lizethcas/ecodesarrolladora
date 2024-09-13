export interface HeadingPropos {
  /** The type of input (e.g., text, number, password) */
  level: "h1" | "h2" | "h3";

  text: string;
}

/** headings component for titles */
const Heading = ({ level = "h1", text = "Title" }: HeadingPropos) => {
  return (
    <>
      <>
        {level === "h1" && <h1>{text}</h1>}
        {level === "h2" && <h2>{text}</h2>}
        {level === "h3" && <h3>{text}</h3>}
      </>
    </>
  );
};

export default Heading;
