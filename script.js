const input = document.querySelector('.input')
const textnumber = document.querySelector('.textnumber')
const toast = document.querySelector('.toast')

input.addEventListener('input', (e)=>{

    const inputText = (e.target.value);
    const inputLength = (inputText.length);
    textnumber.textContent = `${inputLength}/200`

    if (inputLength >= 200) {
        input.classList.add('active')
        textnumber.classList.add('activetextnumber')
        input.value =  inputText.slice(0, 199)
        toast.innerHTML = `<p>sorry, you have exceeded the text limit.</p>`
        toast.classList.remove('toast')
    } else {
         input.classList.remove('active')
         textnumber.classList.remove('activetextnumber')
          toast.classList.add('toast')
    }
})
