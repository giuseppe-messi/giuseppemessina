import { useMemo } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import giuseppesAvatar from "../../assets/giuseppe.jpeg";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";

const About = () => {
  const components = useMemo(
    () => [
      <SectionHeader
        title="About me"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas
            eleifend leo eu fermentum. Aliquam sed sollicitudin sem. Vestibulum
            suscipit odio vel ultrices finibus. Nullam ut vehicula diam. Sed non
            nunc dictum, efficitur nisl sit amet, ultrices lorem. Sed at nibh
            efficitur, lacinia sapien ac, eleifend mauris. In quis mi et erat
            efficitur convallis sed ut mi."
      />,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas
            eleifend leo eu fermentum. Aliquam sed sollicitudin sem. Vestibulum
            suscipit odio vel ultrices finibus. Nullam ut vehicula diam. Sed non
            nunc dictum, efficitur nisl sit amet, ultrices lorem. Sed at nibh
            efficitur, lacinia sapien ac, eleifend mauris. In quis mi et erat
            efficitur convallis sed ut mi.
          </p>
          <p>
            Proin neque tellus, consectetur vestibulum metus vitae, molestie
            tincidunt justo. Mauris eu luctus sapien. Proin ut fringilla nisi,
            vestibulum volutpat nulla. Mauris ullamcorper fermentum odio, in
            imperdiet risus ornare quis. Donec sit amet laoreet metus, convallis
            scelerisque ligula. Integer ut odio sapien. Nullam quis sem
            consectetur, pulvinar libero vel, volutpat eros. Nullam pretium leo
            sollicitudin, bibendum enim vitae, ultricies libero. Vivamus viverra
            eros eget cursus pretium. Aenean libero lacus, fermentum a elit non,
            sodales luctus justo. Duis et pretium odio, ut mattis purus. Aliquam
            non finibus libero. Maecenas in tellus nisl.
          </p>
          <p>
            Nam imperdiet maximus blandit. Aliquam aliquet massa eget rutrum
            volutpat. Ut mollis metus libero, a ultrices velit bibendum vel. In
            fringilla, sapien vitae ullamcorper vestibulum, nunc dui viverra
            ipsum, vitae commodo justo ligula at sem. Phasellus sollicitudin
            eros a sapien aliquam, fringilla tincidunt eros dapibus. Phasellus
            sit amet sem ac nisi consectetur faucibus. Suspendisse potenti.
            Donec auctor nec dui vitae interdum. Nunc et magna sed justo cursus
            volutpat. Fusce blandit consequat arcu, sed congue dolor molestie
            quis. Aenean sit amet mauris mi. In accumsan faucibus ipsum, nec
            tristique nisl varius eu.
          </p>
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
