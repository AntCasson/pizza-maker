const pizzaSelect = document.querySelector("#pizza-select")
const pizzaDisplay = document.querySelector("#pie-count-display")
const poolish = document.querySelector("#poolish")
const recipeTitle = document.querySelector("#recipe-title")
// text that will be rendered in recipe-title
let sizeText = ""


let numberOfPizzas = pizzaSelect.value
let pizzaIcon = "🍕"
let flourAmount = 0
let waterAmount = 0
let saltAmount = 0 
let yeastAmount = 0.5 

// Pizza size selectors btns
const flour = document.querySelector("#flour-weight")
const water = document.querySelector("#water-weight")
const salt = document.querySelector("#salt-weight")
const yeast = document.querySelector("#yeast-weight")

document.querySelectorAll(".btn-size").forEach(btn => {
    btn.addEventListener("click", (event) => {
        let sizePie = event.target.textContent.trim()
        flourAmount = 0
        yeastAmount = 0.5
        saltAmount = pizzaSelect.value 

        switch (sizePie) {
            case "S":
              flourAmount = 152
              sizeText=  "small"
              break
            case "M":
                flourAmount = 175
                sizeText=  "medium"
              break
            case "L":
                sizeText=  "large"
                flourAmount = 200
                yeastAmount = 0.6
              break
        }
        flourAmount = flourAmount * numberOfPizzas
        renderRecipe()
        console.log(flourAmount * numberOfPizzas, waterAmount, saltAmount)
    })
})

document.querySelectorAll(".water-drop").forEach(btn => {
    btn.addEventListener("click", (event) => {
        let hydration = event.target.id.slice(6, 8)
        
        switch (hydration) {
            case "60":
              waterAmount = Math.round(flourAmount / 100 * 60)
              break
            case "65":
                waterAmount = Math.round(flourAmount / 100 * 65)
              break
            case "70":
                waterAmount = Math.floor(flourAmount / 100 * 70)
              break
        }
        renderRecipe()
    })
})

pizzaSelect.addEventListener("change", () => {
    pizzaDisplay.textContent = " "
    for (let i = 0; i < pizzaSelect.value; i++) {
        pizzaDisplay.textContent += pizzaIcon
        numberOfPizzas = pizzaSelect.value
        saltAmount = pizzaSelect.value 
        renderRecipe()
        console.log(pizzaIcon)
    }
})

function renderRecipe() {
    recipeTitle.innerHTML = `You're making ${numberOfPizzas} ${sizeText} pizza('s).`
    water.textContent = waterAmount 
    flour.textContent = flourAmount 

    //the 3.5 in salt is the standard amount of grams per pizza
    salt.textContent = saltAmount * 3.5
    yeast.textContent = Math.round(yeastAmount * numberOfPizzas)
}

poolish.addEventListener("change", () =>{
  console.log("checked")
  const hideYeast = document.querySelector("#yeast-p")
  
  if (poolish.checked) {
    hideYeast.innerHTML = `Poolish <span class="text-yellow">${75*numberOfPizzas}</span> gr`
    flourAmount = flourAmount- 50 *numberOfPizzas
    waterAmount = waterAmount- 50 *numberOfPizzas
  } else {
    flourAmount = flourAmount+ 50 *numberOfPizzas
    waterAmount = waterAmount+ 50 *numberOfPizzas
    hideYeast.innerHTML = `Yeast <span id="yeast-weight">${Math.round(yeastAmount * numberOfPizzas)}</span> gr`
  }

  renderRecipe()
})

function 