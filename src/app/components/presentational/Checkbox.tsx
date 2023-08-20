import { ComponentPropsWithoutRef } from "react";
import { IconBaseProps } from "react-icons";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { colors } from "src/app/utils/theme";

type Props = {
  isChecked: boolean;
  iconProps?: IconBaseProps;
} & ComponentPropsWithoutRef<"button">;

export const Checkbox = ({ isChecked, iconProps, ...props }: Props) => {
  return (
    <button {...props}>
      {isChecked ? (
        <MdCheckBox {...iconProps} />
      ) : (
        <MdCheckBoxOutlineBlank {...iconProps} color={colors.gray} />
      )}
    </button>
  );
};
