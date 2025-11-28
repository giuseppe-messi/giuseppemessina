import type { ElementType } from "react";

type IconProps = {
  Icon: ElementType;
  title: string;
  desc: string;
  hasBorder?: boolean;
};

export const Icon = ({ Icon, title, desc, hasBorder = false }: IconProps) => (
  <div className="flex items-center gap-3">
    <Icon
      className={`h-10 w-10 rounded-md ${
        hasBorder ? "border-1 border-[var(--light-gray)] p-1" : ""
      }`}
    />
    <div>
      <p className="text-md">{title}</p>
      <p className="text-sm text-[var(--text-gray)]">{desc}</p>
    </div>
  </div>
);
