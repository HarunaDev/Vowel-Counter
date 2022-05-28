// Grab elements 
const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("btn")

// submit event
submitBtn.addEventListener("click", () => {
    const countVowels = inputEl.value = Array.from(inputEl.value).filter(letter => `aeiou`.includes(letter)).length
  
    inputEl.value=""
  
    return alert(`${countVowels}`)
  
    
  })