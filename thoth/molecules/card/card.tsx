import React from "react";
import { Button, ButtonProps } from "@ribonteam/thoth.atoms.button";
import styles from "./card.module.scss";

export type CardProps = {
  /**
   * a text to be rendered in the card.
   */
  text: string;
} & ButtonProps;

export function Card({
  text,
  buttonText,
  buttonSize = "large",
  buttonType = "filled",
  buttonColor = "ribon",
}: CardProps) {
  return (
    <div className={styles.card}>
      {text}
      <Button
        buttonText={buttonText}
        buttonSize={buttonSize}
        buttonType={buttonType}
        buttonColor={buttonColor}
      />
    </div>
  );
}
