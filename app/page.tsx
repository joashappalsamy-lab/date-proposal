"use client";

import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);
const [accepted, setAccepted] = useState(false);
const [venue, setVenue] = useState("");
const [day, setDay] = useState("");
const [time, setTime] = useState("");

if (!started) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
  Hello ❤️
</h1>

        <p className="text-lg mb-8 text-black">
  I have a question for you...
</p>

        <button
          onClick={() => setStarted(true)}
          className="bg-pink-500 text-white px-8 py-4 rounded-xl"
        >
          Continue ❤️
        </button>
      </div>
    </main>
  );
}
  if (started && !accepted){
    return (
      <main className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="text-center p-8">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            I Have A Question For You 😊
          </h1>

<p className="text-gray-700 mb-8 max-w-md mx-auto">
  I think you're pretty awesome, and I'd love to take you out sometime.
  What do you say? ❤️
</p>

          <div className="flex justify-center gap-4">

  <button
    onClick={() => setAccepted(true)}
    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl text-xl transition"
  >
    Yes ❤️
  </button>

  <button
    onMouseEnter={(e) => {
      const btn = e.currentTarget;

      btn.style.position = "absolute";
      btn.style.left = `${Math.random() * 70}%`;
      btn.style.top = `${Math.random() * 70}%`;
    }}
    className="bg-gray-500 text-white px-8 py-4 rounded-xl"
  >
    No 😅
  </button>

</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-black">

        <h2 className="text-3xl font-bold text-center mb-6">
          Choose Our Date ❤️
        </h2>

        <div className="space-y-3">

          <button
            onClick={() => setVenue("Willard Beach Boardwalk")}
            className={`w-full p-4 border rounded-xl transition ${
  venue === "Willard Beach Boardwalk"
    ? "bg-pink-500 text-white border-pink-500"
    : "hover:bg-pink-100"
}`}
          >
            🏖️ Willard Beach Boardwalk
          </button>

          <button
            onClick={() => setVenue("The Waterberry Coffee Shop")}
            className={`w-full p-4 border rounded-xl transition ${
  venue === "The Waterberry Coffee Shop"
    ? "bg-pink-500 text-white border-pink-500"
    : "hover:bg-pink-100"
}`}
          >
            ☕ The Waterberry Coffee Shop
          </button>

          <button
            onClick={() => setVenue("Ballito Farmers Market")}
            className={`w-full p-4 border rounded-xl transition ${
  venue === "Ballito Farmers Market"
    ? "bg-pink-500 text-white border-pink-500"
    : "hover:bg-pink-100"
}`}
          >
            🛍️ Ballito Farmers Market
          </button>

        </div>

        {venue && (
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-black text-lg">
              Select Day
            </h3>

            <div className="flex gap-4">

              <button
                onClick={() => setDay("Saturday")}
                className={`flex-1 p-3 rounded-lg font-semibold transition ${
  day === "Saturday"
    ? "bg-pink-500 text-white"
    : "bg-pink-200 text-black"
}`}
              >
                Saturday
              </button>

              <button
                onClick={() => setDay("Sunday")}
                className={`flex-1 p-3 rounded-lg font-semibold transition ${
  day === "Sunday"
    ? "bg-pink-500 text-white"
    : "bg-pink-200 text-black"
}`}
              >
                Sunday
              </button>

            </div>
          </div>
        )}

        {day && (
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-black text-lg">
              Select Time
            </h3>

            <div className="grid grid-cols-2 gap-3">

              <button onClick={() => setTime("09:00")} className={`p-3 rounded-lg font-semibold transition ${
  time === "09:00"
    ? "bg-pink-500 text-white"
    : "bg-pink-100 text-black"
}`}>
                09:00
              </button>

              <button onClick={() => setTime("11:00")} className={`p-3 rounded-lg font-semibold transition ${
  time === "11:00"
    ? "bg-pink-500 text-white"
    : "bg-pink-100 text-black"
}`}>
                11:00
              </button>

              <button onClick={() => setTime("13:00")} className={`p-3 rounded-lg font-semibold transition ${
  time === "13:00"
    ? "bg-pink-500 text-white"
    : "bg-pink-100 text-black"
}`}>
                13:00
              </button>

              <button onClick={() => setTime("15:00")} className={`p-3 rounded-lg font-semibold transition ${
  time === "15:00"
    ? "bg-pink-500 text-white"
    : "bg-pink-100 text-black"
}`}>
                15:00
              </button>

            </div>
          </div>
        )}

        {time && (
          <div className="mt-8 bg-pink-100 rounded-xl p-6 text-center">

            <h2 className="text-2xl font-bold mb-4">
              🎉 Date Confirmed!
            </h2>

            <p>📍 {venue}</p>
            <p>📅 {day}</p>
            <p>🕒 {time}</p>

            <p className="mt-4 text-pink-900 font-medium">
              I can't wait to spend time with you ❤️
            </p>

          </div>
        )}

      </div>
    </main>
  );
}