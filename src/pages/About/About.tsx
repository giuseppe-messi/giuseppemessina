import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import giuseppesAvatar from "../../assets/giuseppe.jpeg";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { Button } from "../../components/Button/Button";
import { Download, Layers2 } from "lucide-react";
import { Card } from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const components = useMemo(
    () => [
      <SectionHeader
        title="About me"
        subTitle="I’m Giuseppe Messina, a full-stack TypeScript developer with a strong frontend focus and over eight years of professional experience building accessible, performant, and maintainable web applications."
      />,
      <>
        <br />
      </>,
      <div>
        <Button variant="outline">
          <a
            href="/Giuseppe-Messina-CV.pdf"
            download
            aria-label="CV download"
            className="flex items-center gap-2"
          >
            <Download size={18} color="var(--text-gray)" />
            <strong>Download my CV</strong>
          </a>
        </Button>
      </div>,
      <>
        <br />
        <br />
      </>,
      <div className="flex flex-col items-center">
        <div className="w-full">
          <img
            src={giuseppesAvatar}
            alt="Giuseppe Messina"
            className="w-full h-auto mx-auto max-w-[560px] max-h-[400px] rounded-lg object-cover object-[center_30%]"
          />
        </div>
        <br />
        <br />
        <div className="w-full max-w-[700px] mx-auto text-md mt-4 flex gap-3 flex-wrap text-[var(--text-gray)] text-justify">
          <p>
            React and TypeScript are where I’m strongest, but I also have
            hands-on backend experience from personal full-stack projects using
            Node, Express, PostgreSQL, MongoDB, Prisma, and real-time features
            like Socket.IO.
          </p>
          <p>
            My commercial background spans design systems, UI architecture,
            component libraries, accessibility, performance optimisation, and
            cross-team collaboration. I’ve worked across SaaS, accessibility
            tech, AI-driven platforms, CRO, and large multi-department
            organisations, always pushing for cleaner abstractions, reusable
            components, and predictable user experiences.
          </p>
          <p>
            Outside of work, my GitHub and personal site act as an evolving lab,
            showcasing experiments, micro-demos, full products, and deep dives
            into React, TypeScript, design systems, animations, real-time
            features, and backend services. I’m continuously learning,
            improving, and exploring new approaches across the full
            JavaScript/TypeScript ecosystem.
          </p>
          <p>
            I’m driven by building things that feel great to use, look clean,
            and scale well, whether that’s a polished UI, a well-structured API,
            or a full product from scratch.
          </p>
        </div>
      </div>,
      <>
        <br />
        <br />
        <br />
      </>,
      <div className="max-w-[700px] mx-auto flex flex-wrap gap-5 [&_button]:w-25">
        <div className="w-full sm:w-[48%]">
          <Card type="columns">
            <a
              href="/Giuseppe-Messina-CV.pdf"
              download
              aria-label="CV download"
              className="flex items-center gap-2 flex flex-col items-start"
            >
              <div className="bg-[var(--medium-gray)] text-[var(--light-white)] border-1 border-[var(--light-gray)] rounded-full flex items-center justify-center w-10 h-10">
                <Download size={20} />
              </div>

              <div className="mb-4 flex flex-col gap-2">
                <p>Download my CV</p>
                <p className="text-sm text-[var(--text-gray)]">
                  Blending creativity and functionality.
                </p>
              </div>

              <Button>Download</Button>
            </a>
          </Card>
        </div>
        <div className="w-full sm:w-[48%]">
          <Card type="columns" onClick={() => navigate("/stack")}>
            <div className="flex items-center gap-2 flex flex-col items-start">
              <div className="bg-[var(--medium-gray)] text-[var(--light-white)] border-1 border-[var(--light-gray)] rounded-full flex items-center justify-center w-10 h-10">
                <Layers2 size={20} />
              </div>

              <div className="mb-4 flex flex-col gap-2">
                <p>My stack</p>
                <p className="text-sm text-[var(--text-gray)]">
                  Tools and resources I use daily.
                </p>
              </div>

              <Button>Stack</Button>
            </div>
          </Card>
        </div>
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

export default About;
