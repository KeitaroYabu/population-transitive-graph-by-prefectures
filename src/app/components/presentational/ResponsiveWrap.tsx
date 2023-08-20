import { ReactNode } from "react";

export const ResponsiveWrap = (props: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="mx-10 flex max-w-screen-lg flex-col gap-1 lg:mx-auto">
        {props.children}
      </div>
    </div>
  );
};
