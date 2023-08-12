"use client";

import { ComponentPropsWithoutRef } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"button"> & {
  isChecked: boolean;
};

export const Checkbox = ({ isChecked, ...props }: Props) => {
  return (
    <button {...props}>
      {isChecked ? (
        <MdCheckBox size={20} />
      ) : (
        <MdCheckBoxOutlineBlank size={20} />
      )}
    </button>
  );
};
