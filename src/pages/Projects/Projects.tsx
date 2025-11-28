import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import { projects } from "../../shared/projects";
import { ProjectThumbNail } from "../../components/ProjectThumbNail/ProjectThumbNail";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";

const Projects = () => {
  const components = useMemo(
    () => [
      <SectionHeader
        title="Projects"
        subTitle="Some of the projects I’m most proud of are the ones that best
            reflect my approach to building real-world, production-ready
            applications."
      />,
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
            id={p.id}
          />
        ))}
      </div>,
      <>
        <br />
        <br />
      </>,
      <div className="grid md:grid-cols-2 gap-8">
        {projects.slice(2).map((p) => (
          <ProjectThumbNail
            key={p.title}
            title={p.title}
            desc={p.desc}
            thumbnailImg={p.thumbnailImg}
            id={p.id}
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
