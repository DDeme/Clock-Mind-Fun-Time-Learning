import React from "react";
import { Button } from "../Button";

type ContinueButtonProps = {
  onNext: () => void;
};

export const ContinueButton: React.FC<ContinueButtonProps> = ({ onNext }) => (
  <Button onClick={onNext} variant="dark">
    CONTINUE
  </Button>
);
