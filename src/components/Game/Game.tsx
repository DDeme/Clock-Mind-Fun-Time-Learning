import React, { useState, useEffect, useCallback } from "react";
import { AnalogClock } from "../AnalogClock/AnalogClock";
import { MascotBubble } from "../MascotBubble/MascotBubble";
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

      {/* Action Footer */}
      <footer className="p-6 pb-4 bg-white  border-t border-slate-100  z-20">
        {!isFeedbackVisible ? (
          <button
            onClick={handleCheckAnswer}
            disabled={
              mode === "multiple-choice"
                ? !selectedOption
                : !userInputHours || !userInputMinutes
            }
            className={`
              w-full font-extrabold py-5 rounded-2xl text-xl transition-all flex items-center justify-center gap-3 shadow-lg
              ${
                (
                  mode === "multiple-choice"
                    ? !selectedOption
                    : !userInputHours || !userInputMinutes
                )
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90 text-white shadow-primary/30 active:translate-y-1 active:shadow-none"
              }
            `}
          >
            CHECK ANSWER
            <span className="material-symbols-outlined font-bold">
              arrow_forward
            </span>
          </button>
        ) : (
          <div className={`flex flex-col gap-4 animate-slide-up`}>
            <div
              className={`flex items-center gap-3 p-4 rounded-xl ${isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              <span className="material-symbols-outlined text-3xl">
                {isCorrect ? "check_circle" : "cancel"}
              </span>
              <div>
                <p className="font-black text-lg">
                  {isCorrect ? "Amazing Job!" : "Not Quite Right"}
                </p>
                <p className="text-sm opacity-80">
                  {isCorrect
                    ? "You earned +20 stars!"
                    : `The correct time was ${formatTime(targetTime)}`}
                </p>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-slate-900 d text-white  font-extrabold py-5 rounded-2xl text-xl shadow-xl active:scale-95 transition-transform"
            >
              CONTINUE
            </button>
          </div>
        )}
      </footer>

      <BottomNav />
    </div>
  );
};
