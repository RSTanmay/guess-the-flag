"use client";

import { useEffect, useState } from "react";

import { countries, Country } from "@/lib/countries";
import { generateOptions } from "@/lib/generateOptions";

export default function GamePage() {
   
const [currentCountry, setCurrentCountry] = useState<Country>(countries[0]);
const [options, setOptions] = useState<Country[]>([]);

const [score, setScore] = useState(0);

const [question, setQuestion] = useState(1);

const [selectedAnswer, setSelectedAnswer] = useState("");

const [showAnswer, setShowAnswer] = useState(false);

const [gameOver, setGameOver] = useState(false);

function loadQuestion() {
  const random =
    countries[Math.floor(Math.random() * countries.length)];

  setCurrentCountry(random);
  setOptions(generateOptions(random));

  setSelectedAnswer("");
  setShowAnswer(false);
}



useEffect(() => {
  loadQuestion();
}, []);


function handleAnswer(country: Country) {
  setSelectedAnswer(country.name);

  if (country.name === currentCountry.name) {
    setScore((prev) => prev + 1);
  }

  setShowAnswer(true);

  setTimeout(() => {
  if (question >= 10) {
    setGameOver(true);
  } else {
    setQuestion((prev) => prev + 1);
    loadQuestion();
  }
}, 1000);
}
const accuracy = Math.round((score / 10) * 100);
if (gameOver) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center">

        <h1 className="text-4xl font-bold mb-8">
          🎉 Game Over
        </h1>

        <p className="text-2xl font-semibold mb-4">
          Final Score
        </p>

        <p className="text-5xl font-bold text-blue-600 mb-8">
          {score} / 10
        </p>

        <p className="text-xl mb-10">
          Accuracy: <span className="font-bold">{accuracy}%</span>
        </p>

        <div className="flex flex-col gap-4">

          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Play Again
          </button>

          <button
            onClick={() => window.location.href = "/"}
            className="border border-gray-400 py-3 rounded-lg hover:bg-gray-100"
          >
            Back to Home
          </button>

        </div>

      </div>
    </main>
  );
}

  return (
    <main>
      <div className= "shadow-[0_12px_20px_-4px_rgba(0,0,0,0.15)]">
             {/* Title */}
        <h1 className="  pt-6 pb-5  text-3xl font-bold text-center text-blue-600 mb-2">
          🌍 Guess The Flag
        </h1>
        </div>
    
      
      <div className="">
<div className="max-w-xl  mx-auto px-8 py-8">

  {/* Top Section */}
  <div className="flex items-center justify-between mb-10 pr-30">

    {/* Question Number */}
    <div className="w-1/4">

      <h2 className="text-xl font-bold">
        #Question {question}/10
      </h2>

      <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${(question / 10) * 100}%` }}
        />
      </div>

    </div>

    {/* Flag */}
    <div className="w-2/3 flex justify-end">
      <img
        src={currentCountry.flag}
        alt={currentCountry.name}
        className="w-80 border shadow-lg"
      />
    </div>

  </div>

  {/* Question */}
  <h2 className="text-2xl font-semibold text-center mb-10">
    Which country does this flag belong to?
  </h2>

  {/* Options */}
  <div className="grid grid-cols-2 gap-5 max-w-3xl mx-auto">

    {options.map((country) => (
      <button
        key={country.name}
        disabled={showAnswer}
        onClick={() => handleAnswer(country)}
        className={`py-4 rounded-lg text-lg font-medium border transition

        ${
          showAnswer
            ? country.name === currentCountry.name
              ? "bg-green-600 text-white"
              : country.name === selectedAnswer
              ? "bg-red-600 text-white"
              : "bg-gray-300"
            : "bg-gray-100 hover:bg-blue-600 hover:text-white"
        }`}
      >
        {country.name}
      </button>
    ))}

  </div>

  {/* Feedback */}

  {showAnswer && (
    <div className="text-center mt-8">

      {selectedAnswer === currentCountry.name ? (
        <p className="text-green-600 text-2xl font-bold">
          ✅ Correct!
        </p>
      ) : (
        <>
          <p className="text-red-600 text-2xl font-bold">
            ❌ Wrong!
          </p>

          <p className="mt-2 text-lg">
            Correct Answer:
            <span className="font-bold">
              {" "}
              {currentCountry.name}
            </span>
          </p>
        </>
      )}

    </div>
  )}
</div>
</div>
    </main>
  );
}