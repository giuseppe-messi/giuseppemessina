import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";

const Projects = () => {
  const components = useMemo(
    () => [
      <div className="font-semibold leading-tight tracking-tight">
        <h1 className="text-5xl">Projects</h1>

        <div className="text-2xl mt-4 flex gap-3 flex-wrap">
          <p>bla bla bla bla bla </p>
        </div>
      </div>
    ],
    []
  );

  return (
    <>
      {components.map((component, index) => (
        <Reveal key={index} delay={0.4 + index / 10} fullwidth>
          {component}
        </Reveal>
      ))}
    </>
  );
};

export default Projects;
