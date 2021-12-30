const pizzaSelect = document.querySelector("#pizza-select")
const pizzaDisplay = document.querySelector("#pie-count-display")
const poolish = document.querySelector("#poolish")
const recipeTitle = document.querySelector("#recipe-title")
const poolishSpan = document.querySelector("#yeast-p")
// text that will be rendered in recipe-title
let sizeText = ""


let numberOfPizzas = pizzaSelect.value
let pizzaIcon = "🍕"
let flourAmount = 0
let waterAmount = 0
let waterPercentage = 0
let saltAmount = 0 
let yeastAmount = 0.5
let poolishWeight = 0

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
        
        renderRecipe()
    })
})

function hydrationCalc(e) {
  let hydration = e.target.id.slice(6, 8)
  waterPercentage = Number.parseInt(hydration)
  waterAmount = Math.round(flourAmount / 100 * waterPercentage)

  renderRecipe()
}
//Even listeners for the hydration buttons
document.querySelectorAll(".water-drop").forEach(btn => {
    btn.addEventListener("click", hydrationCalc)})

pizzaSelect.addEventListener("change", () => {
    pizzaDisplay.textContent = " "
    for (let i = 0; i < pizzaSelect.value; i++) {
        pizzaDisplay.textContent += pizzaIcon
        numberOfPizzas = pizzaSelect.value
        saltAmount = pizzaSelect.value
      }

    // poolish checked or not 
    poolishWeight = 75 * numberOfPizzas
    if (poolish.checked) {
      poolishSpan.innerHTML = `Poolish <span class="text-yellow">${poolishWeight}</span> gr`}

    renderRecipe()
})

function renderRecipe() {
    recipeTitle.innerHTML = `You're making ${numberOfPizzas} ${sizeText} pizza('s).`
    water.textContent = Math.round(flourAmount / 100 * waterPercentage) * numberOfPizzas
    flour.textContent = Math.round(flourAmount * numberOfPizzas)
    //the 3.5 in salt is the standard amount of grams per pizza
    salt.textContent = saltAmount * 3.5
    yeast.textContent = Math.round(yeastAmount * numberOfPizzas)
    poolishWeight = 75 * numberOfPizzas 
    
}

poolish.addEventListener("change", poolishCalc)

function poolishCalc() {
  if (poolish.checked) {
    poolishSpan.innerHTML = `Poolish <span class="text-yellow">${poolishWeight}</span> gr`
    flourAmount = flourAmount- 37.5
    waterAmount = waterAmount- 37.5 
  } else {
    flourAmount = flourAmount+ 37.5 
    waterAmount = waterAmount+ 37.5 
    poolishSpan.innerHTML = `Yeast <span id="yeast-weight">${Math.round(yeastAmount * numberOfPizzas)}</span> gr`
  }
  renderRecipe()
}
