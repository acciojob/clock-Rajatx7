//your JS code here. If required.
  function updateClock() {
      const currentDate = new Date();
      const dateTimeElement = document.getElementById("liveClock");
      dateTimeElement.textContent = `${currentDate.toLocaleString()}`;
    }

     // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);

  // Initial call to display the clock immediately
  updateClock();