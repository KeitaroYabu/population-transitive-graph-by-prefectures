import { ComponentPropsWithoutRef } from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"button"> & {
  isChecked: boolean;
  size: number;
};

export const RadioButton = ({ isChecked, size, ...props }: Props) => {
  return (
    <button {...props}>
      {isChecked ? (
        <MdRadioButtonChecked size={size} />
      ) : (
        <MdRadioButtonUnchecked size={size} />
      )}
    </button>
  );
};
