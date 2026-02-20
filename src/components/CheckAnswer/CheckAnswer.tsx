import React from "react";
import { Button } from "../Button";

type CheckAnswerProps = {
  isDisabled: boolean;
  onCheckAnswer: () => void;
};

export const CheckAnswer: React.FC<CheckAnswerProps> = ({
  isDisabled,
  onCheckAnswer,
}) => (
  <Button onClick={onCheckAnswer} disabled={isDisabled} variant="primary">
    CHECK ANSWER
    <span className="material-symbols-outlined font-bold">arrow_forward</span>
  </Button>
);
