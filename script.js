const btn = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const result = document.querySelector(".result");

const stringToCheck = '';

function reverseString(str){
    let orginalStr = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
    const reversedStr = orginalStr.split("").reverse().join("");
    let checkedStr = reversedStr.toLowerCase();

    if( orginalStr === checkedStr){
        result.textContent = `${str} is a palindrome`
        result.style.color = "green"
    } else {
        result.textContent = `${str} is not a palindrome`
        result.style.color = "red"
    };
}

btn.addEventListener("click", (e) => {
    console.log(input.value)

    if(input.value === ''){
        alert("Please enter a valid word or phase")
    } else {
        console.log(reverseString(input.value))
    }
    e.preventDefault()
})