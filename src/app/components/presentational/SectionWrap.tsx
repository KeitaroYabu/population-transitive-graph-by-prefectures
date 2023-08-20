import { ReactNode } from "react";

export const SectionWrap = (props: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex w-full max-w-screen-lg flex-col gap-1">
      <h2 className="text-lg">{props.heading}</h2>
      {props.children}
    </section>
  );
};
