import React, { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

const App = () => {
  const [habits, setHabits] = useState([]);

  // Load habits from localStorage
  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(savedHabits);
  }, []);

  // Save habits to localStorage
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const updateStreak = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, streak: habit.streak + 1 } : habit
    );
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Streakly</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} updateStreak={updateStreak} deleteHabit={deleteHabit} />
    </div>
  );
};

export default App;
