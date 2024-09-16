document.addEventListener("DOMContentLoaded", () => {
  // Select buttons and message elements
  const buttons = document.querySelectorAll(".button");
  const messages = document.querySelectorAll(".message");

  // Function to change button color on click
  function changeColor(event) {
    event.target.style.backgroundColor = "lightblue";
  }

  // Function to show message on mouseover
  function showMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    const message = document.getElementById(messageId);
    message.style.display = "block";
  }

  // Function to hide message on mouseout
  function hideMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    const message = document.getElementById(messageId);
    message.style.display = "none";
  }

  // Function to hide button on double-click
  function hideButton(event) {
    event.target.style.display = "none";
  }

  // Add event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener("click", changeColor);
    button.addEventListener("mouseover", showMessage);
    button.addEventListener("mouseout", hideMessage);
    button.addEventListener("dblclick", hideButton);
  });
});
