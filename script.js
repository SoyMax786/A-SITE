document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add task to the list when the button is clicked
    addTaskButton.addEventListener("click", function() {
        const task = taskInput.value.trim(); // Trim whitespace

        if (task !== "") { // Only add non-empty tasks
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            taskList.appendChild(taskItem);

            // Save task in localStorage
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            taskInput.value = ""; // Clear input field
        }
    });

    // Load tasks from localStorage when the page is loaded
    window.addEventListener("load", function() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            taskList.appendChild(taskItem);
        });
    });

    // Display a random motivational quote
    const motivationalTips = [
        "Believe in yourself, and all that you are.",
        "Your only limit is your mind.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Don’t watch the clock; do what it does. Keep going."
    ];

    document.getElementById("quote").textContent = motivationalTips[Math.floor(Math.random() * motivationalTips.length)];

    // AI Helper - Dummy AI Response
    document.getElementById("ask-btn").addEventListener("click", function() {
        const query = document.getElementById("user-query").value;
        document.getElementById("ai-response").textContent = "AI is thinking... " + query;
    });

    // Reminder Pop-up - Display at Specific Time
    function showReminder() {
        const reminderPopup = document.getElementById("reminder-popup");
        reminderPopup.style.display = "block";

        setTimeout(() => {
            reminderPopup.style.display = "none";
        }, 5000);
    }

    // Set reminder to trigger at a specific time (e.g., 9 AM)
    const reminderTime = "09:00";
    const currentTime = new Date();
    const reminderHour = reminderTime.split(":")[0];
    const reminderMinute = reminderTime.split(":")[1];

    if (currentTime.getHours() === parseInt(reminderHour) && currentTime.getMinutes() === parseInt(reminderMinute)) {
        showReminder();
    }

    // Close button functionality
    document.getElementById("close-popup-btn").addEventListener("click", function() {
        window.location.href = "farewell.html";  // Redirect to the Farewell Page when clicked
    });

    // View Saved Tasks button functionality (this should load saved tasks on another page)
    document.getElementById("view-saved-tasks-btn").addEventListener("click", function() {
        window.location.href = "saved-tasks.html";  // Redirect to the Saved Tasks Page
    });
});
