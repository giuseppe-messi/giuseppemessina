import React from "react";
import { IntroHeader } from "../../components/IntroHeader/IntroHeader";
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

const homeComponents = [
  <IntroHeader />,
  <div className="flex gap-3 mt-8 [&>button]:w-25">
    <Button>About</Button>
    <Button variant="outline">
      <span className="flex items-center gap-2">
        <Copy size={14} color="var(--text-gray)" />
        E-Mail
      </span>
    </Button>
  </div>,
  <h2 className="mt-12 mb-6 font-semibold">New Drops</h2>,
  <div className="flex flex-wrap gap-10">
    {projects.map((p) => (
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
  </>,
  <Card willDefaultToFlexColsForMobile>
    <div>
      <h2 className={cardH2}>About Giuseppe</h2>
      <p className="text-sm text-zinc-400 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
        turpis ac nisi mollis, quis aliquet ante ullamcorper. Maecenas laoreet
        nulla semper vulputate consectetur. Vivamus fringilla semper est eu
        placerat. Fusce ac pellentesque metus. Morbi a dui vitae mauris ultrices
        blandit nec id ex. Aenean id interdum lorem. Nulla facilisi. Proin ut
        magna neque. Sed et mauris nec massa luctus
        <br />
        <br />
        scelerisque. Sed maximus, turpis in finibus tempus, erat nunc interdum
        lectus, vel mattis nisl nunc posuere justo. Integer aliquam magna in
        odio commodo eleifend. Donec tincidunt augue ac ipsum finibus finibus.
        Proin semper velit sed risus congue, ut vulputate nisl sagittis.
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
  <Card type="columns">
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
];

const Home: React.FC = () => (
  <>
    {homeComponents.map((component, index) => (
      <Reveal key={index} delay={0.4 + index / 10} fullwidth>
        {component}
      </Reveal>
    ))}
  </>
);

export default Home;
