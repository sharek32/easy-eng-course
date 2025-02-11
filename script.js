// Function to toggle completion state of a section
function toggleCompletion(sectionId) {
  const section = document.getElementById(sectionId);
  const completeBtn = section.querySelector(".complete-btn");

  // Toggle the "completed" class on the section
  section.classList.toggle("completed");

  // Update the button text and save the state to localStorage
  if (section.classList.contains("completed")) {
    completeBtn.textContent = "✔";
    localStorage.setItem(sectionId + "_completed", "true");
  } else {
    completeBtn.textContent = "✔";
    localStorage.setItem(sectionId + "_completed", "false");
  }
}

// Function to load saved completion states when the page loads
function loadCompletionStates() {
  document.querySelectorAll("section").forEach(section => {
    const sectionId = section.id;
    const completeBtn = section.querySelector(".complete-btn");

    // Check localStorage for the saved state
    if (localStorage.getItem(sectionId + "_completed") === "true") {
      section.classList.add("completed");
      completeBtn.textContent = "✔";
    }
  });
}

// Function to check answers in the test section
function checkAnswers() {
  const answers = {
    q1: "অ্যাপল",
    q2: "বল",
    q3: "কুকুর",
    q4: "মাছ",
    q5: "গাছ",
    q6: "Book",
    q7: "Sun",
    q8: "Water",
    q9: "Moon",
    q10: "River",
  };

  let score = 0;

  // Check each answer
  Object.keys(answers).forEach((key, index) => {
    const userAnswer = document.getElementById(key).value.trim();
    const correctAnswer = answers[key];
    const answerElement = document.getElementById(`a${index + 1}`);

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      score++;
      answerElement.style.color = "green";
      answerElement.textContent = `Correct! Answer: ${correctAnswer}`;
    } else {
      answerElement.style.color = "red";
      answerElement.textContent = `Incorrect! Correct Answer: ${correctAnswer}`;
    }
    answerElement.style.display = "block";
  });

  // Show the total score
  alert(`You scored ${score} out of ${Object.keys(answers).length}`);
}

// Function to show all answers in the test section
function showAllAnswers() {
  const answers = {
    q1: "অ্যাপল",
    q2: "বল",
    q3: "কুকুর",
    q4: "মাছ",
    q5: "গাছ",
    q6: "Book",
    q7: "Sun",
    q8: "Water",
    q9: "Moon",
    q10: "River",
  };

  // Display all answers
  Object.keys(answers).forEach((key, index) => {
    const answerElement = document.getElementById(`a${index + 1}`);
    answerElement.textContent = `Answer: ${answers[key]}`;
    answerElement.style.color = "blue";
    answerElement.style.display = "block";
  });
}

// Load saved completion states when the page loads
document.addEventListener("DOMContentLoaded", function () {
  loadCompletionStates();
});
