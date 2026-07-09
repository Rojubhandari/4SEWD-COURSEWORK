// ===== LOGIN FORM VALIDATION =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop the form from submitting for now

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;

    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required.";
      isValid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    if (isValid) {
      alert("Login successful! (this is just a demo, no real login yet)");
      // later this is where you would send data to a server
    }
  });
}

// ===== RECIPE FORM VALIDATION =====
const recipeForm = document.getElementById("recipeForm");

if (recipeForm) {
  recipeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const instructions = document.getElementById("instructions").value.trim();
    const quantity1 = document.querySelector('input[name="quantity1"]').value;
    const quantity2 = document.querySelector('input[name="quantity2"]').value;

    if (name === "") {
      document.getElementById("nameError").textContent = "Recipe name is required.";
      isValid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    if (description === "") {
      document.getElementById("descriptionError").textContent = "Description is required.";
      isValid = false;
    } else {
      document.getElementById("descriptionError").textContent = "";
    }

    if (instructions === "") {
      document.getElementById("instructionsError").textContent = "Instructions are required.";
      isValid = false;
    } else {
      document.getElementById("instructionsError").textContent = "";
    }

    if (quantity1 !== "" && quantity1 < 0) {
      document.getElementById("quantity1Error").textContent = "Quantity cannot be negative.";
      isValid = false;
    } else {
      document.getElementById("quantity1Error").textContent = "";
    }

    if (quantity2 !== "" && quantity2 < 0) {
      document.getElementById("quantity2Error").textContent = "Quantity cannot be negative.";
      isValid = false;
    } else {
      document.getElementById("quantity2Error").textContent = "";
    }

    if (isValid) {
      alert("Recipe saved! (this is just a demo, no real saving yet)");
    }
  });
}

// ===== ADD MORE INGREDIENT FIELDS =====
const addIngredientBtn = document.getElementById("addIngredientBtn");
const ingredientContainer = document.getElementById("ingredientContainer");
let ingredientCount = 2; // we already have ingredient1 and ingredient2

if (addIngredientBtn) {
  addIngredientBtn.addEventListener("click", function () {
    ingredientCount++;

    const label = document.createElement("label");
    label.textContent = "Ingredient " + ingredientCount;

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "ingredient" + ingredientCount;
    nameInput.placeholder = "Ingredient name";

    const qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.name = "quantity" + ingredientCount;
    qtyInput.placeholder = "Quantity";
    qtyInput.min = "1";

    ingredientContainer.appendChild(label);
    ingredientContainer.appendChild(nameInput);
    ingredientContainer.appendChild(qtyInput);
  });
}

// ===== INGREDIENT FORM VALIDATION =====
const ingredientForm = document.getElementById("ingredientForm");

if (ingredientForm) {
  ingredientForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    const name = document.getElementById("ingName").value.trim();

    if (name === "") {
      document.getElementById("ingNameError").textContent = "Ingredient name is required.";
      isValid = false;
    } else {
      document.getElementById("ingNameError").textContent = "";
    }

    if (isValid) {
      alert("Ingredient saved! (this is just a demo, no real saving yet)");
    }
  });
}