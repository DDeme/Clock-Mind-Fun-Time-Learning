import { useState, useEffect, useCallback } from "react";
import { AnalogClock } from "../AnalogClock/AnalogClock";
import { MascotBubble } from "../MascotBubble/MascotBubble";
import { ActionFooter } from "../ActionFooter";
import { Answers } from "../Answers";
import { BottomNav } from "../BottomNav";
import { Header } from "../Header";

export type QuestionType = "input" | "multiple-choice";

export type GameState = {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  level: "Beginner" | "Intermediate" | "Expert";
  mode: QuestionType;
};

export type ClockTime = {
  hours: number;
  minutes: number;
};

export const Game = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(1);
  const [totalQuestions] = useState(5);
  const [score, setScore] = useState(120);
  const [mode, setMode] = useState<QuestionType>("multiple-choice");
  const [targetTime, setTargetTime] = useState<ClockTime>({
    hours: 3,
    minutes: 45,
  });
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userInputHours, setUserInputHours] = useState("");
  const [userInputMinutes, setUserInputMinutes] = useState("");
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateRandomTime = useCallback(() => {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 12) * 5; // Use 5 min intervals for beginner
    return { hours, minutes };
  }, []);

  const formatTime = (time: ClockTime) => {
    const h = time.hours;
    const m = time.minutes.toString().padStart(2, "0");
    return `${h}:${m}`;
  };

  const startNewQuestion = useCallback(() => {
    const newTime = generateRandomTime();
    setTargetTime(newTime);
    setSelectedOption(null);
    setUserInputHours("");
    setUserInputMinutes("");
    setIsFeedbackVisible(false);
    setIsCorrect(null);

    // Swap modes for variety
    const newMode: QuestionType =
      Math.random() > 0.5 ? "input" : "multiple-choice";
    setMode(newMode);

    if (newMode === "multiple-choice") {
      const correct = formatTime(newTime);
      const distractors = new Set<string>();
      while (distractors.size < 3) {
        const d = formatTime(generateRandomTime());
        if (d !== correct) distractors.add(d);
      }
      const allOptions = Array.from(distractors);
      allOptions.splice(Math.floor(Math.random() * 4), 0, correct);
      setOptions(allOptions);
    }
  }, [generateRandomTime]);

  useEffect(() => {
    startNewQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckAnswer = () => {
    let correct = false;
    if (mode === "multiple-choice") {
      correct = selectedOption === formatTime(targetTime);
    } else {
      correct =
        parseInt(userInputHours) === targetTime.hours &&
        parseInt(userInputMinutes) === targetTime.minutes;
    }

    setIsCorrect(correct);
    setIsFeedbackVisible(true);
    if (correct) {
      setScore((s) => s + 20);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < totalQuestions) {
      setCurrentQuestionIdx((prev) => prev + 1);
      startNewQuestion();
    } else {
      // Game over logic could go here
      alert("Practice complete! Great job!");
      setCurrentQuestionIdx(1);
      setScore(0);
      startNewQuestion();
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background-light relative overflow-hidden">
      <Header
        currentQuestionIdx={currentQuestionIdx}
        totalQuestions={totalQuestions}
        score={score}
        onClose={() => {}}
      />

      <main className="flex-1 flex flex-col items-center px-6 overflow-y-auto">
        <MascotBubble message="Look at the clock! What time is it?" />
        <div className="mb-10">
          <AnalogClock hours={targetTime.hours} minutes={targetTime.minutes} />
        </div>

        <Answers
          mode={mode}
          options={options}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
          userInputHours={userInputHours}
          onChangeHours={setUserInputHours}
          userInputMinutes={userInputMinutes}
          onChangeMinutes={setUserInputMinutes}
        />
      </main>

      <ActionFooter
        isFeedbackVisible={isFeedbackVisible}
        isCorrect={isCorrect}
        isDisabled={
          mode === "multiple-choice"
            ? !selectedOption
            : !userInputHours || !userInputMinutes
        }
        correctTimeLabel={formatTime(targetTime)}
        onCheckAnswer={handleCheckAnswer}
        onNext={handleNext}
      />

      <BottomNav />
    </div>
  );
};
