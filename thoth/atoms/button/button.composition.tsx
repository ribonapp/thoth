import React from "react";
import { Button } from "./button";

export const PrimaryButton = () => <Button buttonText="Button text" />;

export const OutlineButton = () => (
  <Button
    buttonText="hello from outline Button"
    buttonType="outlined"
    buttonColor="ribon"
    buttonSize="large"
  />
);

export const TextButton = () => (
  <Button
    buttonText="hello from text Button"
    buttonType="textOnly"
    buttonColor="ribon"
    buttonSize="large"
  />
);

export const RedButton = () => (
  <Button
    buttonText="hello from red Button"
    buttonType="filled"
    buttonColor="red"
    buttonSize="large"
  />
);

export const RedOutlinedButton = () => (
  <Button
    buttonText="hello from red Button"
    buttonType="outlined"
    buttonColor="red"
    buttonSize="large"
  />
);

export const RedTextOnlyButton = () => (
  <Button
    buttonText="hello from red Button"
    buttonType="textOnly"
    buttonColor="red"
    buttonSize="large"
  />
);

export const GrayButton = () => (
  <Button
    buttonText="hello from gray Button"
    buttonType="filled"
    buttonColor="gray"
    buttonSize="large"
  />
);

export const GrayOutlinedButton = () => (
  <Button
    buttonText="hello from gray Button"
    buttonType="outlined"
    buttonColor="gray"
    buttonSize="large"
  />
);

export const GrayTextOnlyButton = () => (
  <Button
    buttonText="hello from gray Button"
    buttonType="textOnly"
    buttonColor="gray"
    buttonSize="large"
  />
);
