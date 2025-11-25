import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import { projects } from "../../shared/projects";
import { ProjectThumbNail } from "../../components/ProjectThumbNail/ProjectThumbNail";

const Projects = () => {
  const components = useMemo(
    () => [
      <div className="font-semibold leading-tight tracking-tight">
        <h1 className="text-5xl">Projects</h1>

        <div className="text-xl mt-4 flex gap-3 flex-wrap text-[var(--text-gray)]">
          <p>bla bla bla bla bla </p>
        </div>
      </div>,
      <>
        <br />
        <br />
      </>,
      <div className="grid md:grid-cols-2 gap-8">
        {projects.slice(0, 2).map((p) => (
          <ProjectThumbNail
            key={p.title}
            title={p.title}
            desc={p.desc}
            thumbnailImg={p.thumbnailImg}
          />
        ))}
      </div>,
      <div className="grid md:grid-cols-2 gap-8">
        {projects.slice(2).map((p) => (
          <ProjectThumbNail
            key={p.title}
            title={p.title}
            desc={p.desc}
            thumbnailImg={p.thumbnailImg}
          />
        ))}
      </div>,
      <>
        <br />
        <br />
        <br />
        <br />
      </>
    ],
    []
  );

  return (
    <>
      {components.map((component, index) => (
        <Reveal key={index} delay={index / 10} fullwidth>
          {component}
        </Reveal>
      ))}
    </>
  );
};

export default Projects;
