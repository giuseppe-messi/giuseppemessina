import React, { useEffect, useMemo, useState } from "react";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { Button } from "../../components/Button/Button";
import { Copy, Search } from "lucide-react";
import { ProjectThumbNail } from "../../components/ProjectThumbNail/ProjectThumbNail";
import { projects } from "../../shared/projects";
import { Card } from "../../components/Card/Card";
import ReactSvg from "../../assets/logos/react.svg?react";
import TsSvg from "../../assets/logos/ts.svg?react";
import ReduxSvg from "../../assets/logos/redux.svg?react";
import JsSvg from "../../assets/logos/js.svg?react";
import HtmlSvg from "../../assets/logos/html.svg?react";
import CssSvg from "../../assets/logos/css.svg?react";
import MuiSvg from "../../assets/logos/mui.svg?react";
import StorybookSvg from "../../assets/logos/storybook.svg?react";
import { Icon } from "../../components/Icon/Icon";
import { Reveal } from "../../components/Reveal/Reveal";
import { cardH2 } from "../../shared/styles";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (!emailCopied) return;
    const id = setTimeout(() => {
      setEmailCopied(false);
    }, 2000);

    return () => clearTimeout(id);
  }, [emailCopied]);

  const components = useMemo(
    () => [
      <SectionHeader
        title="Hey, I'm Giuseppe"
        subTitle={
          <>
            <span>Full Stack Typescript Developer</span>
            <span className="text-[var(--text-white)]">Frontend-leaning</span>
          </>
        }
      />,
      <div className="flex gap-3 mt-8 [&>button]:w-25">
        <Button onClick={() => navigate("/about")}>About</Button>
        <Button
          onClick={() => {
            if (emailCopied) return;
            setEmailCopied(true);
            navigator.clipboard.writeText("giuseppe91messina@gmail.com");
          }}
          variant="outline"
        >
          <span className="flex items-center gap-2">
            <Copy size={14} color="var(--text-gray)" />
            {emailCopied ? "Copied!" : "E-Mail"}
          </span>
        </Button>
      </div>,
      <h2 className="text-lg mt-12 mb-6 font-semibold">New Drops</h2>,
      <div className="flex flex-wrap gap-10">
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
      <Card willDefaultToFlexColsForMobile onClick={() => navigate("/about")}>
        <div>
          <h2 className={cardH2}>About me</h2>
          <p className="text-sm text-zinc-400 text-justify">
            I’m Giuseppe Messina, a full-stack TypeScript developer with a
            strong frontend focus and over eight years of professional
            experience building accessible, performant, and maintainable web
            applications. React and TypeScript are where I’m strongest, but I
            also have hands-on backend experience from personal full-stack
            projects using Node, Express, PostgreSQL, MongoDB, Prisma, and
            real-time features like Socket.IO.
            <br />
            <br />
            I’m driven by building things that feel great to use, look clean,
            and scale well, whether that’s a polished UI, a well-structured API,
            or a full product from scratch.
          </p>
        </div>

        <div className="rounded-full self-end border border-[#2c2c2c] px-4 py-2 text-sm font-medium">
          <Search size={15} color="var(--text-gray)" />
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns" onClick={() => navigate("/stack")}>
        <div>
          <p className={cardH2}>Stack</p>
          <p className="text-sm text-zinc-400">
            Software and resources I use on a regular basis.
          </p>
        </div>

        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon Icon={ReactSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={TsSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={ReduxSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={JsSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={HtmlSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={CssSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={MuiSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={StorybookSvg} title="React" desc="Javascript Framework" />
        </div>

        <Button className="w-full">View all</Button>
      </Card>,
      <>
        <br />
        <br />
      </>
    ],
    [emailCopied, navigate]
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

export default Home;
