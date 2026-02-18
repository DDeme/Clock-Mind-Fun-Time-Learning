
import React, { useState, useEffect, useCallback } from 'react';
import AnalogClock from './components/AnalogClock';
import MascotBubble from './components/MascotBubble';
import { QuestionType, ClockTime } from './types';

const App: React.FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(1);
  const [totalQuestions] = useState(5);
  const [score, setScore] = useState(120);
  const [mode, setMode] = useState<QuestionType>('multiple-choice');
  const [targetTime, setTargetTime] = useState<ClockTime>({ hours: 3, minutes: 45 });
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userInputHours, setUserInputHours] = useState('');
  const [userInputMinutes, setUserInputMinutes] = useState('');
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateRandomTime = useCallback(() => {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 12) * 5; // Use 5 min intervals for beginner
    return { hours, minutes };
  }, []);

  const formatTime = (time: ClockTime) => {
    const h = time.hours;
    const m = time.minutes.toString().padStart(2, '0');
    return `${h}:${m}`;
  };

  const startNewQuestion = useCallback(() => {
    const newTime = generateRandomTime();
    setTargetTime(newTime);
    setSelectedOption(null);
    setUserInputHours('');
    setUserInputMinutes('');
    setIsFeedbackVisible(false);
    setIsCorrect(null);

    // Swap modes for variety
    const newMode: QuestionType = Math.random() > 0.5 ? 'input' : 'multiple-choice';
    setMode(newMode);

    if (newMode === 'multiple-choice') {
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
    if (mode === 'multiple-choice') {
      correct = selectedOption === formatTime(targetTime);
    } else {
      correct = parseInt(userInputHours) === targetTime.hours && 
                parseInt(userInputMinutes) === targetTime.minutes;
    }

    setIsCorrect(correct);
    setIsFeedbackVisible(true);
    if (correct) {
      setScore(s => s + 20);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < totalQuestions) {
      setCurrentQuestionIdx(prev => prev + 1);
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
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark relative overflow-hidden">
      
      {/* Header */}
      <header className="px-6 pt-10 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">close</span>
          </button>
          
          <div className="flex flex-col items-center flex-1 mx-4">
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 rounded-full" 
                style={{ width: `${(currentQuestionIdx / totalQuestions) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-bold mt-2 text-slate-500 uppercase tracking-widest">
              Question {currentQuestionIdx} of {totalQuestions}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-bold text-primary">{score}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 overflow-y-auto">
        <MascotBubble message="Look at the clock! What time is it?" />

        <div className="mb-10">
          <AnalogClock hours={targetTime.hours} minutes={targetTime.minutes} />
        </div>

        {mode === 'multiple-choice' ? (
          <div className="grid grid-cols-2 gap-4 w-full mb-12">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`
                  p-6 rounded-2xl border-2 transition-all duration-200 active:scale-95 text-center
                  ${selectedOption === option 
                    ? 'bg-primary/5 border-primary shadow-md ring-4 ring-primary/10' 
                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/40'}
                `}
              >
                <span className={`text-3xl font-bold ${selectedOption === option ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>
                  {option}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="w-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-primary/5 mb-12">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Hours</label>
                <input 
                  type="number"
                  min="1"
                  max="12"
                  value={userInputHours}
                  onChange={(e) => setUserInputHours(e.target.value)}
                  placeholder="--"
                  className="w-20 h-20 text-center text-3xl font-black bg-background-light dark:bg-background-dark border-2 border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl text-primary transition-all outline-none"
                />
              </div>
              <div className="text-4xl font-bold text-slate-300 dark:text-slate-600 mt-6">:</div>
              <div className="flex flex-col items-center gap-2">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Minutes</label>
                <input 
                  type="number"
                  min="0"
                  max="59"
                  value={userInputMinutes}
                  onChange={(e) => setUserInputMinutes(e.target.value)}
                  placeholder="--"
                  className="w-20 h-20 text-center text-3xl font-black bg-background-light dark:bg-background-dark border-2 border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl text-primary transition-all outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Action Footer */}
      <footer className="p-6 pb-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 z-20">
        {!isFeedbackVisible ? (
          <button 
            onClick={handleCheckAnswer}
            disabled={mode === 'multiple-choice' ? !selectedOption : (!userInputHours || !userInputMinutes)}
            className={`
              w-full font-extrabold py-5 rounded-2xl text-xl transition-all flex items-center justify-center gap-3 shadow-lg
              ${(mode === 'multiple-choice' ? !selectedOption : (!userInputHours || !userInputMinutes))
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 text-white shadow-primary/30 active:translate-y-1 active:shadow-none'}
            `}
          >
            CHECK ANSWER
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        ) : (
          <div className={`flex flex-col gap-4 animate-slide-up`}>
            <div className={`flex items-center gap-3 p-4 rounded-xl ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              <span className="material-symbols-outlined text-3xl">
                {isCorrect ? 'check_circle' : 'cancel'}
              </span>
              <div>
                <p className="font-black text-lg">{isCorrect ? 'Amazing Job!' : 'Not Quite Right'}</p>
                <p className="text-sm opacity-80">{isCorrect ? 'You earned +20 stars!' : `The correct time was ${formatTime(targetTime)}`}</p>
              </div>
            </div>
            <button 
              onClick={handleNext}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold py-5 rounded-2xl text-xl shadow-xl active:scale-95 transition-transform"
            >
              CONTINUE
            </button>
          </div>
        )}
      </header>

      {/* Bottom Nav */}
      <nav className="flex justify-around items-center bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pb-8 pt-3 px-6">
        <NavButton icon="menu_book" label="LEARN" active={false} />
        <NavButton icon="videogame_asset" label="PLAY" active={true} fill={true} />
        <NavButton icon="emoji_events" label="AWARDS" active={false} />
        <NavButton icon="person" label="PROFILE" active={false} />
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(0); }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}} />
    </div>
  );
};

interface NavButtonProps {
  icon: string;
  label: string;
  active: boolean;
  fill?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, fill }) => (
  <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary' : 'text-slate-400'}`}>
    <span className="material-symbols-outlined" style={{ fontVariationSettings: fill ? "'FILL' 1" : undefined }}>
      {icon}
    </span>
    <span className="text-[9px] font-black tracking-widest">{label}</span>
  </button>
);

export default App;
