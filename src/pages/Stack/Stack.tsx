import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import { Card } from "../../components/Card/Card";
import { cardH2 } from "../../shared/styles";
import { Icon } from "../../components/Icon/Icon";
import ReactSvg from "../../assets/logos/react.svg?react";
import TsSvg from "../../assets/logos/ts.svg?react";
import ReduxSvg from "../../assets/logos/redux.svg?react";
import JsSvg from "../../assets/logos/js.svg?react";
import HtmlSvg from "../../assets/logos/html.svg?react";
import CssSvg from "../../assets/logos/css.svg?react";
import ZustandSvg from "../../assets/logos/zustand.svg?react";
import ReactQuerySvg from "../../assets/logos/react-query.svg?react";
import AxiosSvg from "../../assets/logos/axios.svg?react";
import MuiSvg from "../../assets/logos/mui.svg?react";
import StorybookSvg from "../../assets/logos/storybook.svg?react";
import TailwindSvg from "../../assets/logos/tailwind.svg?react";
import NodeSvg from "../../assets/logos/node.svg?react";
import ExpressSvg from "../../assets/logos/express.svg?react";
import PrismaSvg from "../../assets/logos/prisma.svg?react";
import PostGreSvg from "../../assets/logos/postgresSQL.svg?react";
import MongoSvg from "../../assets/logos/mongoDB.svg?react";
import JestSvg from "../../assets/logos/jest.svg?react";
import RTLSvg from "../../assets/logos/testingLibrary.svg?react";
import EslintSvg from "../../assets/logos/eSLint.svg?react";
import PrettierSvg from "../../assets/logos/prettier.svg?react";
import GitSvg from "../../assets/logos/git.svg?react";
import GithubSvg from "../../assets/logos/gitHub.svg?react";
import BitbucketSvg from "../../assets/logos/bitBucket.svg?react";
import JiraSvg from "../../assets/logos/jira.svg?react";
import NpmSvg from "../../assets/logos/NPM.svg?react";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";

const Stack = () => {
  const components = useMemo(
    () => [
      <SectionHeader
        title="Stack"
        subTitle="Tools, resources and software I use daily."
      />,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <h2 className={cardH2}>Core Frontend</h2>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon Icon={ReactSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={TsSvg} title="Typescript" desc="Typed JavaScript" />
          <Icon Icon={JsSvg} title="Javascript" desc="Programming language" />
          <Icon Icon={HtmlSvg} title="HTML" desc="Markup language" />
          <Icon Icon={CssSvg} title="CSS" desc="Style sheet language" />
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <h2 className={cardH2}>State & Data</h2>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon Icon={ReduxSvg} title="Redux" desc="State management library" />
          <Icon
            Icon={ZustandSvg}
            title="Zustand"
            desc="State management library"
          />
          <Icon
            Icon={ReactQuerySvg}
            title="React Query"
            desc="Async state management"
          />
          <Icon Icon={AxiosSvg} title="Axios" desc="HTTP client" />
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <h2 className={cardH2}>Styling & UI</h2>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon
            Icon={TailwindSvg}
            title="Tailwind CSS"
            desc="Utility-first CSS framework"
          />
          <Icon
            Icon={MuiSvg}
            title="Material UI"
            desc="React component library"
          />
          <Icon
            Icon={StorybookSvg}
            title="Storybook"
            desc="Frontend workshop"
          />
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <h2 className={cardH2}>Backend & Databases</h2>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon
            Icon={NodeSvg}
            title="Node.js"
            desc="JavaScript runtime environment"
          />
          <Icon
            Icon={ExpressSvg}
            title="Express"
            desc="Node.js web framework"
          />
          <Icon
            Icon={PrismaSvg}
            title="Prisma"
            desc="Node.js / TypeScript ORM"
          />
          <Icon
            Icon={PostGreSvg}
            title="PostgresSQL"
            desc="Object-relational database"
          />
          <Icon Icon={MongoSvg} title="MongoDB" desc="Document database" />
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <h2 className={cardH2}>Testing & Quality</h2>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon
            Icon={JestSvg}
            title="Jest"
            desc="JavaScript testing framework"
          />
          <Icon Icon={EslintSvg} title="Eslint" desc="JavaScript linter" />
          <Icon
            Icon={RTLSvg}
            title="React Testing Library"
            desc="UI testing utilities"
          />
          <Icon Icon={PrettierSvg} title="Prettier" desc="Code formatter" />
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <h2 className={cardH2}>Tooling</h2>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon Icon={GitSvg} title="Git" desc="Distributed version control" />
          <Icon Icon={GithubSvg} title="GitHub" desc="Git code hosting" />
          <Icon Icon={BitbucketSvg} title="BitBucket" desc="Git code hosting" />
          <Icon Icon={JiraSvg} title="Jira" desc="Agile project management" />
          <Icon Icon={NpmSvg} title="NPM" desc="JavaScript package manager" />
        </div>
      </Card>,
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

export default Stack;
