import { Search } from "lucide-react";

type ProjectThumbNailProps = {
  thumbnailImg: string;
  title: string;
  desc: string;
};

export const ProjectThumbNail = ({
  thumbnailImg,
  title,
  desc
}: ProjectThumbNailProps) => (
  <div className="group flex flex-col flex-1 w-full rounded-md cursor-pointer border border-[#2c2c2c]">
    <div className="h-full min-h-70 rounded-md rounded-b-none bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
      <div className="w-[60%] max-w-xl rounded-md overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
        <img
          src={thumbnailImg}
          alt="project thumbnail"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    <div className="flex items-end justify-between gap-4 px-6 pb-6 pt-5 bg-[var(--main-gray)] border-t border-[#2c2c2c]">
      <div>
        <p className="text-md font-semibold text-white mb-1">{title}</p>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>

      <div className="rounded-full border border-[#2c2c2c] px-4 py-2 text-sm font-medium">
        <Search size={15} color="var(--text-gray)" />
      </div>
    </div>
  </div>
);
