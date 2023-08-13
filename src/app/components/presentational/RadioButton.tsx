import { ComponentPropsWithoutRef } from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"button"> & {
  isChecked: boolean;
};

export const RadioButton = ({ isChecked, ...props }: Props) => {
  return (
    <button {...props}>
      {isChecked ? (
        <MdRadioButtonChecked size={20} />
      ) : (
        <MdRadioButtonUnchecked size={20} />
      )}
    </button>
  );
};
