import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  willDefaultToFlexColsForMobile?: boolean;
  type?: "columns" | "rows";
};

export const Card = ({
  children,
  willDefaultToFlexColsForMobile,
  type = "rows"
}: CardProps) => {
  return (
    <div className="group mx-auto w-full rounded-md cursor-pointer border border-[#2c2c2c]">
      <div
        className={`flex gap-4 px-6 pb-6 pt-5 mb bg-[var(--main-gray)] border-t border-[#2c2c2c] ${
          type === "columns" ? "flex-col" : "items-end justify-between"
        }
        ${willDefaultToFlexColsForMobile ? "flex-col md:flex-row" : ""}
        `}
      >
        {children}
      </div>
    </div>
  );
};
