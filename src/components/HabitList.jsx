import React from "react";

const HabitList = ({ habits, updateStreak, deleteHabit }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Habits</h2>
      {habits.length === 0 ? (
        <p className="text-gray-500">No habits yet! Add one to get started.</p>
      ) : (
        <ul>
          {habits.map((habit, index) => (
            <li
              key={index}
              className="mb-2 px-4 py-2 bg-white shadow rounded-md flex justify-between items-center"
            >
              <span>
                {habit.name} - <strong>Streak: {habit.streak}</strong>
              </span>
              <div>
                <button
                  onClick={() => updateStreak(index)}
                  className="mr-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  +1
                </button>
                <button
                  onClick={() => deleteHabit(index)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
