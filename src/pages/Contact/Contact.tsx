import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "../../components/Reveal/Reveal";
import { Button } from "../../components/Button/Button";
import { Copy } from "lucide-react";
import { Card } from "../../components/Card/Card";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  // const { enQueueToast } = useToastersStore();

  useEffect(() => {
    if (!emailCopied) return;
    const id = setTimeout(() => {
      setEmailCopied(false);
    }, 2000);

    return () => clearTimeout(id);
  }, [emailCopied]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const fd = new FormData(formRef.current);

    const formData = {
      firstName: String(fd.get("firstName")),
      lastName: String(fd.get("lastName")),
      email: String(fd.get("email")),
      password: String(fd.get("password"))
    };

    console.log("🚀 ~ formData:", formData);
  };

  const components = useMemo(
    () => [
      <div className="font-semibold leading-tight tracking-tight">
        <h1 className="text-5xl">Contact</h1>

        <div className="text-xl mt-4 flex gap-3 flex-wrap text-[var(--text-gray)]">
          <p>
            I'm always looking to collaborate on interesting projects with great
            people. Need a supportive hand? I have two!
          </p>
        </div>
      </div>,
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
      </>,
      <Card>
        <div className="flex min-h-full w-full flex-col justify-center px-6 py-8 lg:px-8">
          <div className="mt-5 w-full">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              method="POST"
              className="space-y-6"
            >
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
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
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
      </Card>,
      <>
        <br />
        <br />
        <br />
        <br />
      </>
    ],
    [emailCopied]
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
