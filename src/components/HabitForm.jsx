import React, { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit) {
      addHabit({ name: habit, streak: 0 });
      setHabit("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter a new habit..."
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
