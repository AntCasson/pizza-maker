const pizzaSelect = document.querySelector("#pizza-select")
const pizzaDisplay = document.querySelector("#pie-count-display")
const poolish = document.querySelector("#poolish")
const recipeTitle = document.querySelector("#recipe-title")
<<<<<<< HEAD
<<<<<<< HEAD
const poolishSpan = document.querySelector("#yeast-p")
=======
>>>>>>> d252876bebb2ca148d9b953bbc41013462f717ad
=======
const poolishSpan = document.querySelector("#yeast-p")
>>>>>>> poolish-addition
// text that will be rendered in recipe-title
let sizeText = ""


let numberOfPizzas = pizzaSelect.value
let pizzaIcon = "🍕"
let flourAmount = 0
let waterAmount = 0
<<<<<<< HEAD
<<<<<<< HEAD
let waterPercentage = 0
let saltAmount = 0 
let yeastAmount = 0.5
let poolishWeight = 0
=======
let saltAmount = 0 
let yeastAmount = 0.5 
>>>>>>> d252876bebb2ca148d9b953bbc41013462f717ad
=======
let waterPercentage = 0
let saltAmount = 0 
let yeastAmount = 0.5
let poolishWeight = 0
>>>>>>> poolish-addition

// Pizza size selectors btns
const flour = document.querySelector("#flour-weight")
const water = document.querySelector("#water-weight")
const salt = document.querySelector("#salt-weight")
const yeast = document.querySelector("#yeast-weight")

document.querySelectorAll(".btn-size").forEach(btn => {
    btn.addEventListener("click", (event) => {
        let sizePie = event.target.innerText
        flourAmount = 0
        yeastAmount = 0.5
        saltAmount = pizzaSelect.value 

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> poolish-addition
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
        
<<<<<<< HEAD
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
=======
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
=======
>>>>>>> poolish-addition
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
<<<<<<< HEAD
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
>>>>>>> d252876bebb2ca148d9b953bbc41013462f717ad
=======
    btn.addEventListener("click", hydrationCalc)})
>>>>>>> poolish-addition

pizzaSelect.addEventListener("change", () => {
    pizzaDisplay.textContent = " "
    for (let i = 0; i < pizzaSelect.value; i++) {
        pizzaDisplay.textContent += pizzaIcon
        numberOfPizzas = pizzaSelect.value
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> poolish-addition
        saltAmount = pizzaSelect.value
      }

    // poolish checked or not 
    poolishWeight = 75 * numberOfPizzas
    if (poolish.checked) {
      poolishSpan.innerHTML = `Poolish <span class="text-yellow">${poolishWeight}</span> gr`}

    renderRecipe()
<<<<<<< HEAD
=======
        saltAmount = pizzaSelect.value 
        renderRecipe()
        console.log(pizzaIcon)
    }
>>>>>>> d252876bebb2ca148d9b953bbc41013462f717ad
=======
>>>>>>> poolish-addition
})

function renderRecipe() {
    recipeTitle.innerHTML = `You're making ${numberOfPizzas} ${sizeText} pizza('s).`
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    water.textContent = waterAmount 
    flour.textContent = flourAmount 

=======
    water.textContent = Math.round(flourAmount / 100 * waterPercentage) * numberOfPizzas
    flour.textContent = Math.round(flourAmount * numberOfPizzas)
>>>>>>> poolish-addition
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
<<<<<<< HEAD
})
>>>>>>> d252876bebb2ca148d9b953bbc41013462f717ad
=======
}
>>>>>>> poolish-addition
