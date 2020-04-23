// Create time function
function showTime() {
  
    let date = new Date(); // Global object
    let hours = date.getHours(); // 0-23
    let minutes = date.getMinutes(); // 0-59
    let seconds = date.getSeconds(); // 0-59
  
    // Var for formating hours equal to funct
    let formatHours = convertFormat(hours);
  
    // Declare a variable for getting value from 0 to 11 for hours 
    hours = checkTime(hours); // Passing hours variable as an argument. This is a function expression.
  
    // Declare variables so there will be 0 in front if number is less than 10.
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} : ${formatHours}`; // using template literals so we can access variables
  }
  
  
  function convertFormat(time) { // We make a generic name for actual argument. Whatever time we get from Date object in hours we passing here as argument.
    // Get values of AM and PM
    let format = "AM"; // By default it is AM
    if (time >= 12) {
      format = "PM";
    }
    return format;  // After returning, variable formatHours will store this.
  }
  
  // Function for getting value from 0 to 11 for hours 
  function checkTime(time) {
    if (time > 12) {
      time = time - 12; // For getting less than 12
    }
    if (time === 0) {
      time = 12; // When time goes to 0 it will be 12 and not 0
    }
    return time;
  }
  
  // Funct to adding zero
  function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time; 
  }
  
  showTime(); // Calling funct here because without it we have to wait 1 second for time to appear after refreshing.
  setInterval(showTime,1000); // Calling as a callback funct. Build in JS function. 1 second.

  // Scroll Appear Animation
  function scrollAppear() {
    var introText = document.querySelector('.skills-container');
    var introPosition = introText.getBoundingClientRect().top; // Access the top
    var screenPosition = window.innerHeight / 2; // For different devices

    if(introPosition < screenPosition) {
        introText.classList.add('skills-appear');
    }
}

// When we scroll add event listener

window.addEventListener('scroll', scrollAppear);


  