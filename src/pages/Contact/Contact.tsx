import { useEffect, useMemo, useState } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import { Button } from "../../components/Button/Button";
import { Copy } from "lucide-react";
import { Card } from "../../components/Card/Card";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { useFormSubmit } from "../../hooks/useFormSubmit";

const Contact = () => {
  const { onSubmit } = useFormSubmit();
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
        title="Contact"
        subTitle="I'm always looking to collaborate on interesting projects with great
            people. Need a supportive hand? I have two!"
      />,
      <div className="flex gap-3 mt-8 [&>button]:w-25">
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
      <>
        <br />
        <br />
      </>,
      <div className="max-w-[700px] text-justify mx-auto">
        <Card>
          <div className="flex min-h-full w-full flex-col justify-center px-2 py-8 lg:px-8">
            <div className="mt-5 w-full [&_label]:text-[var(--text-gray)]">
              <form
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={onSubmit}
              >
                {/* needed for Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot */}
                <p style={{ display: "none" }}>
                  <label htmlFor="bot-field">
                    Don’t fill this out:{" "}
                    <input name="bot-field" aria-label="none" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-100"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      type="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-100"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-medium text-gray-100"
                  >
                    Your message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      required
                      autoComplete="message"
                      className="h-30 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>,
      <>
        <br />
        <br />
        <br />
        <br />
      </>
    ],
    [emailCopied, onSubmit]
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

export default Contact;
