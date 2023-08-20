import { ComponentPropsWithoutRef } from "react";
import { IconBaseProps } from "react-icons";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { colors } from "src/app/utils/theme";

type Props = {
  isChecked: boolean;
  iconProps?: IconBaseProps;
} & ComponentPropsWithoutRef<"button">;

export const RadioButton = ({ isChecked, iconProps, ...props }: Props) => {
  return (
    <button {...props}>
      {isChecked ? (
        <MdRadioButtonChecked {...iconProps} />
      ) : (
        <MdRadioButtonUnchecked {...iconProps} color={colors.gray} />
      )}
    </button>
  );
};
