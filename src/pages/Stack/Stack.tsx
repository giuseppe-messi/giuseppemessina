import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import { Card } from "../../components/Card/Card";
import { cardH2 } from "../../shared/styles";
import { Icon } from "../../components/Icon/Icon";
import ReactSvg from "../../assets/logos/react.svg?react";
import TsSvg from "../../assets/logos/ts.svg?react";
import ReduxSvg from "../../assets/logos/redux.svg?react";

const Stack = () => {
  const components = useMemo(
    () => [
      <div className="font-semibold leading-tight tracking-tight">
        <h1 className="text-5xl">Stack</h1>

        <div className="text-xl mt-4 flex gap-3 flex-wrap text-[var(--text-gray)]">
          <p>Tools, resources and software I use daily.</p>
        </div>
      </div>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <p className={cardH2}>Design</p>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon Icon={ReactSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={TsSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={ReduxSvg} title="React" desc="Javascript Framework" />
          {/* <Icon Icon={JsSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={HtmlSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={CssSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={MuiSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={StorybookSvg} title="React" desc="Javascript Framework" /> */}
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <p className={cardH2}>Productivity</p>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon Icon={ReactSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={TsSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={ReduxSvg} title="React" desc="Javascript Framework" />
        </div>
      </Card>,
      <>
        <br />
        <br />
      </>,
      <Card type="columns">
        <div>
          <p className={cardH2}>Development</p>
        </div>
        <div className="flex flex-col h-[218px] overflow-hidden sm:h-full sm:overflow-auto sm:grid grid-cols-2 gap-6 my-6">
          <Icon Icon={ReactSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={TsSvg} title="React" desc="Javascript Framework" />
          <Icon Icon={ReduxSvg} title="React" desc="Javascript Framework" />
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
