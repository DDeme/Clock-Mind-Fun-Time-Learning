import React from "react";
import type { QuestionType } from "../Game/Game";
import { MultipleChoice } from "../MultipleChoice/MultipleChoice";
import { NumericAnswer } from "../NumericAnswer/NumericAnswer";

type AnswersProps = {
    mode: QuestionType;
    options: string[];
    selectedOption: string | null;
    onSelectOption: (option: string) => void;
    userInputHours: string;
    onChangeHours: (value: string) => void;
    userInputMinutes: string;
    onChangeMinutes: (value: string) => void;
};

export const Answers: React.FC<AnswersProps> = ({
    mode,
    options,
    selectedOption,
    onSelectOption,
    userInputHours,
    onChangeHours,
    userInputMinutes,
    onChangeMinutes,
}) => (
    <>
        {mode === "multiple-choice" ? (
            <MultipleChoice
                options={options}
                selectedOption={selectedOption}
                onSelectOption={onSelectOption}
            />
        ) : (
            <NumericAnswer
                hoursValue={parseInt(userInputHours)}
                minutesValue={parseInt(userInputMinutes)}
                onHoursChange={onChangeHours}
                onMinutesChange={onChangeMinutes}
            />
        )}
    </>
);
