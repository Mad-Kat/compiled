import React, {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
} from "react";
import { styled } from "@compiled/react";

export const toggleSwitchColors = {
  SWITCH: "#b3b3b3",
  SWITCH_ACTIVATED: "#73c44d",
  SWITCH_BORDER_FOCUS: "rgba(0, 0, 0, 0.2)",
  SWITCH_SWITCH: "#ffffff",
  TEXT: "#000000",
} as const;

export interface IToggleSwitchProps
  extends Omit<ComponentPropsWithoutRef<"input">, "type" | "onChange"> {
  /** Is the slide switch checked */
  checked: boolean;
  /** Event on toggle */
  onChange?: (checked: boolean) => void;
  /** If true, the switch is disabled */
  disabled?: boolean;
  /** Label for the switch */
  children: ReactNode;
  /** @ignore Ensures that the styled method works with every component */
  className?: string;
}

export const ToggleSwitch: FunctionComponent<IToggleSwitchProps> = ({
  className,
  children,
  onChange,
  checked = false,
  disabled = false,
  ...other
}) => {
  return (
    <SwitchLabel isDisabled={disabled} className={className}>
      <SwitchContainer isChecked={checked}>
        <StyledCheckbox
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          type="checkbox"
          {...other}
        />
      </SwitchContainer>
      {children}
    </SwitchLabel>
  );
};

export const SwitchLabel = styled.label<{
  isDisabled: boolean;
}>`
  display: flex;
  color: ${toggleSwitchColors.TEXT};
  cursor: ${({ isDisabled }) => (!isDisabled ? "pointer" : "default")};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
`;

const SwitchContainer = styled.span<{ isChecked: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: 36px;
  height: 18px;
  border-radius: 9px;
  background-color: ${({ isChecked }) =>
    isChecked
      ? toggleSwitchColors.SWITCH_ACTIVATED
      : toggleSwitchColors.SWITCH};
  transition: background-color 200ms ease-out;
  margin-top: 2px;
  &:focus-within {
    outline: ${toggleSwitchColors.SWITCH_BORDER_FOCUS} solid 2px;
    outline-offset: 1px;
  }
  &:before {
    position: absolute;
    content: "";
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${toggleSwitchColors.SWITCH_SWITCH};
    transition: transform 200ms ease-out;
    transform: translateX(${({ isChecked }) => (isChecked ? "18px" : "0")});
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  appearance: none;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  &:not(:disabled) {
    cursor: pointer;
  }
`;
