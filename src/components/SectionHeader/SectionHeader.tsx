import { type JSX } from "react";

type SectionHeaderProps = {
  title: string | JSX.Element;
  subTitle?: string | JSX.Element;
};

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => (
  <div className="leading-tight tracking-tight">
    <h1 className="text-5xl font-semibold">{title}</h1>

    <div className="text-xl mt-4 flex gap-3 flex-wrap text-[var(--text-gray)]">
      {subTitle}
    </div>
  </div>
);
