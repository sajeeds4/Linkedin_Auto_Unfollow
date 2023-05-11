// Function to withdraw connection request
const withdrawRequests = () => {
  // Get all the connection request buttons (button structure 1)
  const withdrawButtons1 = document.querySelectorAll('button[aria-label^="Withdraw invitation sent to"]');

  // Loop through each withdraw button and click to withdraw the request (button structure 1)
  withdrawButtons1.forEach((button) => {
    button.click();
  });

  // Get all the connection request buttons (button structure 2)
  const withdrawButtons2 = document.querySelectorAll('button[data-test-dialog-primary-btn]');

  // Function to trigger a click event on the button (button structure 2)
  const clickWithdrawButton = (button) => {
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    button.dispatchEvent(clickEvent);
  };

  // Loop through each withdraw button and trigger a click event to withdraw the request (button structure 2)
  withdrawButtons2.forEach(clickWithdrawButton);
};

// Prompt user for the number of times to run the script
const userInputTimes = prompt('Enter how many times to run this script: ');
const timesToRun = parseInt(userInputTimes, 10);

// Prompt user for the time delay between each run (in seconds)
const userInputDelay = prompt('Enter the time delay (in seconds) between each run: ');
const delayBetweenRuns = parseInt(userInputDelay, 10);

// Validate user input
if (!isNaN(timesToRun) && timesToRun > 0 && !isNaN(delayBetweenRuns) && delayBetweenRuns >= 0) {
  // Run the code as per user input
  for (let i = 0; i < timesToRun; i++) {
    setTimeout(withdrawRequests, i * delayBetweenRuns * 1000); // Convert delay to milliseconds
  }
} else {
  console.log('Invalid input. Please enter valid numbers.');
}
