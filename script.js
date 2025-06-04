const textinput = document.querySelector(".inputs input");
checkbtn = document.querySelector(".inputs button");
result = document.querySelector(".result");
let filterinput;

textinput.addEventListener("keyup",() =>{
    filterinput = textinput.value.toLowerCase();
   if (filterinput.trim() !== "") {
        checkbtn.classList.add("active");
    } else {
        checkbtn.classList.remove("active");
        result.style.display = "none";
    }
});

checkbtn.addEventListener("click" , () =>{
    let reverseinput = filterinput.split("").reverse().join("");
    result.style.display = "block";
    if(reverseinput == filterinput){
      return result.innerHTML = `Yes, <span>${textinput.value}</span> is a Palindrome`;
    }
    result.innerHTML = `No, <span>${textinput.value}</span> isn't a Palindrome`;
});
