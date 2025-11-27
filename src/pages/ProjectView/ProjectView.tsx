import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { MoveLeft, Pencil } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../shared/projects";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import projectJson from "../../copy/projects.json";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id)) ?? null;
  const currentCopy = projectJson.projects.find((p) => p.id === id);

  const components = useMemo(
    () => [
      <div className="flex items-center gap-2 text-[var(--text-gray)]">
        <MoveLeft size={18} />
        <Link to="/projects">
          <p>All Projects</p>
        </Link>
      </div>,
      <>
        <br />
        <br />
      </>,
      <SectionHeader title={project?.title ?? ""} />,
      <>
        <br />
      </>,
      <p className="text-[var(--text-gray)]">
        {project?.year} - {project?.desc}
      </p>,
      <>
        <br />
        <br />
      </>,
      <div className="w-full">
        <img
          src={project?.thumbnailImg}
          alt="Giuseppe Messina"
          className="w-full h-auto mx-auto max-w-[560px] rounded-lg object-cover object-[center_30%]"
        />
      </div>,

      <>
        <br />
        <br />
      </>,
      <div className="text-[var(--text-gray)] max-w-[700px] text-justify mx-auto">
        <p>{currentCopy?.background}</p>
      </div>,
      <>
        <br />
        <br />
      </>,
      <div className="max-w-[700px] text-justify mx-auto">
        <h4 className="text-2xl text-[var(--text-white)] mb-3 font-semibold">
          Challenge:
        </h4>
        <ul className="text-[var(--text-gray)] list-decimal pl-5 space-y-3">
          {currentCopy?.challenge.map((c) => (
            <li key={c} className="pl-4">
              {c}
            </li>
          ))}
        </ul>
      </div>,
      <>
        <br />
        <br />
      </>,
      <div className="max-w-[700px] text-justify mx-auto">
        <h4 className="text-2xl text-[var(--text-white)] mb-3 font-semibold">
          Solution:
        </h4>
        <ul className="text-[var(--text-gray)] list-decimal pl-5 space-y-3">
          {currentCopy?.solution.map((c) => (
            <li key={c.title} className="pl-4">
              <span className="font-semibold">{c.title}:</span>
              <span>{c.details}</span>
            </li>
          ))}
        </ul>
      </div>,
      <>
        <br />
        <br />
      </>,
      <div className="max-w-[700px] text-justify mx-auto">
        <h4 className="text-2xl text-[var(--text-white)] mb-3 font-semibold">
          Outcome:
        </h4>
        <p className="text-[var(--text-gray)]">{currentCopy?.outcome}</p>
      </div>,
      <>
        <br />
        <br />
        <br />
      </>,
      <div className="max-w-[700px] mx-auto">
        <div className="flex flex-col items-start max-w-80">
          <Card type="columns" onClick={() => navigate("/projects")}>
            <div className="bg-[var(--medium-gray)] text-[var(--light-white)] border-1 border-[var(--light-gray)] rounded-full flex items-center justify-center w-10 h-10">
              <Pencil size={20} />
            </div>

            <div className="mb-4 flex flex-col gap-2">
              <p>More Projects</p>
              <p className="text-sm text-[var(--text-gray)]">
                Blending creativity and functionality.
              </p>
            </div>

            <Button>All Projects</Button>
          </Card>
        </div>
      </div>,
      <>
        <br />
        <br />
        <br />
      </>
    ],
    [currentCopy, project, navigate]
  );

  if (!project) {
    return <ErrorPage />;
  }

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

export default ProjectView;
