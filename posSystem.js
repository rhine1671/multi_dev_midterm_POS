function addFoodItem() {
    var foodItems = document.getElementById("foodItems");

    var foodItemDiv = document.createElement("div");
    foodItemDiv.className = "foodItem";

    var choiceHeading = document.createElement("h3");
    choiceHeading.textContent = " Extra Choice";

    var foodSelect = document.createElement("select");
    foodSelect.name = "streetFoods";
    var foods = ["Burger", "Fries", "Fishbol", "Kikiam"];
    foods.forEach(function(food) {
        var option = document.createElement("option");
        option.value = food.toLowerCase();
        option.textContent = food;
        foodSelect.appendChild(option);
    });

    var quantityHeading = document.createElement("h3");
    quantityHeading.className = "choices";
    quantityHeading.textContent = "Quantity";

    var quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.name = "quantity";

    foodItemDiv.appendChild(choiceHeading);
    foodItemDiv.appendChild(foodSelect);
    foodItemDiv.appendChild(quantityHeading);
    foodItemDiv.appendChild(quantityInput);

    foodItems.appendChild(foodItemDiv);
}

function pay() {
    var totalCost = 0;
    var foodItems = document.querySelectorAll(".foodItem");

    // Calculate total cost
    foodItems.forEach(function(item) {
        var foodSelect = document.getElementsByName("streetFoods")[0];
        var quantityInput = document.getElementsByName("quantity")[0];
        var quantity = parseInt(quantityInput.value);

        var price = 0;
        switch (foodSelect.value) {
            case "burger":
                price = 30;
                break;
            case "fries":
                price = 25;
                break;
            case "fishbol":
                price = 10;
                break;
            case "kikiam":
                price = 12.5;
                break;
            default:
                price = 0;
                break;
        }

        totalCost += price * quantity;
    });

    // Retrieve the amount of cash paid by the customer
    var cashInput = document.getElementById("cash");
    var cash = parseFloat(cashInput.value.trim());

    console.log("Total Cost: " +totalCost);
    console.log("Cash: " + cash);

    // Check if the cash paid is sufficient
    if (!isNaN(cash) && cash >= totalCost) {
        var change = cash - totalCost;
        alert("Payment successful! Your change is: " + change.toFixed(2) + " pesos");
    } else {
        alert("Insufficient cash! Please pay the correct amount.");
    }
}