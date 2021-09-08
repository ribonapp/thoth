import React from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  /**
   * a text to be rendered in the button.
   */
  buttonText: string;
  /**
   * button sizes.
   */
  buttonSize?: "large" | "small";
  /**
   * button type.
   */
  buttonType?: "filled" | "outlined" | "textOnly";
  /**
   * button colors.
   */
  buttonColor?: "ribon" | "red" | "gray";
};

export function Button({
  buttonText,
  buttonSize = "large",
  buttonType = "filled",
  buttonColor = "ribon",
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      data-buttonSize={buttonSize}
      data-buttonType={buttonType}
      data-buttonColor={buttonColor}
    >
      {buttonText}
    </button>
  );
}
