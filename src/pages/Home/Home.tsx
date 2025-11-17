import React from "react";
import { IntroHeader } from "../../components/IntroHeader/IntroHeader";
import { Button } from "../../components/Button/Button";
import { Copy } from "lucide-react";
import giuseppesAvatar from "../../assets/giuseppe.jpeg";

const Home: React.FC = () => {
  return (
    <>
      <IntroHeader />

      <div className="flex gap-3 mt-8 [&>button]:w-25">
        <Button>About</Button>
        <Button variant="outline">
          <span className="flex items-center gap-2">
            <Copy size={14} color="var(--text-gray)" />
            E-Mail
          </span>
        </Button>
      </div>

      <h2 className="mt-15 font-semibold">New Drops</h2>

      <div>
        <div className="group mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-800 p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
          <div className="flex h-full flex-col rounded-3xl bg-zinc-950/90">
            <div className="h-80 rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 flex items-center justify-center">
              <div className="w-[70%] max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
                <img
                  src={giuseppesAvatar}
                  alt="Billify template preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 px-6 pb-6 pt-5">
              <div>
                <p className="text-xl font-semibold text-white">Billify</p>
                <p className="text-sm text-zinc-400">Template</p>
              </div>

              <div className="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-5 py-2 text-sm font-medium text-zinc-100">
                $25
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
