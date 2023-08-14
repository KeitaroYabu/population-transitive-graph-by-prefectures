import { ComponentPropsWithoutRef } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"button"> & {
  isChecked: boolean;
  size: number;
};

export const Checkbox = ({ isChecked, size, ...props }: Props) => {
  return (
    <button {...props}>
      {isChecked ? (
        <MdCheckBox size={size} />
      ) : (
        <MdCheckBoxOutlineBlank size={size} />
      )}
    </button>
  );
};
