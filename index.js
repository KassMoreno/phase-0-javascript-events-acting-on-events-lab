

//returns what key is pressed
/*document.addEventListener("keydown", function (event) {
    console.log(event);
});*/

const dodger= document.getElementById('dodger')
dodger.style.backgroundColor = 'rgba(6, 236, 156)'
dodger.style.bottom = "0px"
dodger.style.left = "0px"

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }