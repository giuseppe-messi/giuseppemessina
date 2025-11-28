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
// import RTLPng from "../../assets/logos/rtl.png";
import EslintSvg from "../../assets/logos/eSLint.svg?react";
// import PrettierPng from "../../assets/logos/prettier.png";

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
          <Icon Icon={TsSvg} title="Typescript" desc="Javascript Framework" />
          <Icon Icon={JsSvg} title="Javascript" desc="Javascript Framework" />
          <Icon Icon={HtmlSvg} title="HTML" desc="Javascript Framework" />
          <Icon Icon={CssSvg} title="CSS" desc="Javascript Framework" />
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
          <Icon Icon={ReduxSvg} title="Redux" desc="Javascript Framework" />
          <Icon Icon={ZustandSvg} title="Zustand" desc="Javascript Framework" />
          <Icon
            Icon={ReactQuerySvg}
            title="React Query"
            desc="Javascript Framework"
          />
          <Icon Icon={AxiosSvg} title="Axios" desc="Javascript Framework" />
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
            desc="Javascript Framework"
          />
          <Icon Icon={MuiSvg} title="Material UI" desc="Javascript Framework" />
          <Icon
            Icon={StorybookSvg}
            title="Storybook"
            desc="Javascript Framework"
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
          <Icon Icon={NodeSvg} title="Node.js" desc="Javascript Framework" />
          <Icon Icon={ExpressSvg} title="Express" desc="Javascript Framework" />
          <Icon Icon={PrismaSvg} title="Prisma" desc="Javascript Framework" />
          <Icon
            Icon={PostGreSvg}
            title="PostgresSQL"
            desc="Javascript Framework"
          />
          <Icon Icon={MongoSvg} title="MongoDB" desc="Javascript Framework" />
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
          <Icon Icon={JestSvg} title="Jest" desc="Javascript Framework" />
          <Icon Icon={EslintSvg} title="Eslint" desc="Javascript Framework" />
          {/* <Icon
            Icon={RTLPng}
            title="React Testing Library"
            desc="Javascript Framework"
          />
          <Icon
            Icon={PrettierPng}
            title="Prettier"
            desc="Javascript Framework"
          /> */}
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
          <Icon Icon={GitSvg} title="Git" desc="Javascript Framework" />
          <Icon Icon={GithubSvg} title="GitHub" desc="Javascript Framework" />
          <Icon
            Icon={BitbucketSvg}
            title="BitBucket"
            desc="Javascript Framework"
          />
          <Icon Icon={JiraSvg} title="Jira" desc="Javascript Framework" />
          <Icon Icon={NpmSvg} title="NPM" desc="Javascript Framework" />
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
