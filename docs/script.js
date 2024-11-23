document.addEventListener("DOMContentLoaded", () => {
    const habitForm = document.getElementById("habit-form");
    const habitNameInput = document.getElementById("habit-name");
    const habitList = document.getElementById("habit-list");
  
    // Load habits from localStorage
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
  
    const saveHabits = () => {
      localStorage.setItem("habits", JSON.stringify(habits));
    };
  
    const renderHabits = () => {
      habitList.innerHTML = "";
      habits.forEach((habit, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${habit.name} - <span class="streak">Streak: ${habit.streak}</span></span>
          <div>
            <button class="streak-btn" data-index="${index}">+1 Streak</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </div>
        `;
        habitList.appendChild(li);
      });
    };
  
    const addHabit = (name) => {
      habits.push({ name, streak: 0 });
      saveHabits();
      renderHabits();
    };
  
    const updateStreak = (index) => {
      habits[index].streak++;
      saveHabits();
      renderHabits();
    };
  
    const deleteHabit = (index) => {
      habits.splice(index, 1);
      saveHabits();
      renderHabits();
    };
  
    // Handle form submission
    habitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const habitName = habitNameInput.value.trim();
      if (habitName) {
        addHabit(habitName);
        habitNameInput.value = "";
      }
    });
  
    // Handle habit list button clicks
    habitList.addEventListener("click", (e) => {
      if (e.target.classList.contains("streak-btn")) {
        const index = e.target.getAttribute("data-index");
        updateStreak(index);
      } else if (e.target.classList.contains("delete-btn")) {
        const index = e.target.getAttribute("data-index");
        deleteHabit(index);
      }
    });
  
    // Initial render
    renderHabits();
  });
  