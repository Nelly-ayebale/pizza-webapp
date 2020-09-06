$(document).ready(function () {
    function Pizza(type, size, crust, toppings) {
        this.type = type;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
    Pizza.prototype.pizzaPrice = function () {
        return this.getSizePrice() + this.getCrustPrice() + this.getToppingsPrice();
    };

    Pizza.prototype.getToppingsPrice = function () {
        if (this.size === "large") {
            if (this.toppings === "pepperoni") {
                return 7000
            } else if (this.toppings === "mushrooms") {
                return 5000
            } else if (this.toppings === "bacon") {
                return 5000
            } else if (this.toppings === "cheese") {
                return 6000
            } else {
                return 4000
            }
        } else if (this.size === "medium") {
            if (this.toppings === "pepperoni") {
                return 5000
            } else if (this.toppings === "mushrooms") {
                return 4500
            } else if (this.toppings === "bacon") {
                return 4500
            } else if (this.toppings === "cheese") {
                return 5000
            } else {
                return 4000
            }
        } else {

            if (this.toppings === "pepperoni") {
                return 4000
            } else if (this.toppings === "mushrooms") {
                return 3500
            } else if (this.toppings === "bacon") {
                return 3500
            } else if (this.toppings === "cheese") {
                return 4000
            } else {
                return 2000
            }
        }


    }
    Pizza.prototype.getSizePrice = function () {
        if (this.size === "large") {
            return 10000
        } else if (this.size === "medium") {
            return 7000
        } else {
            return 4000
        }
    }
    Pizza.prototype.getCrustPrice = function () {
        if (this.size === "large")
            if (this.crust === "crispy") {
                return 3000
            } else if (this.crust === "stuffed") {
                return 4000
            } else {
                return 2000
            }
        else if (this.size === "medium") {
            if (this.crust === "crispy") {
                return 2500
            } else if (this.crust === "stuffed") {
                return 3000
            } else {
                return 1500
            }
        }
        else {
            if (this.crust === "crispy") {
                return 2000
            } else if (this.crust === "stuffed") {
                return 2500
            } else {
                return 1000
            }
        }


    }
    var numberOfPizzas = [];
    var yourBill = 0;

    $("form#Choose").submit(function (event) {
        event.preventDefault();

        var pizzaType = $(this).find("#type").val();
        var pizzaSize = $(this).find("#size").val();
        var pizzaCrust = $(this).find("#crust").val();
        var pizzaToppings = $(this).find("#toppings").val();

        var newPizza = new Pizza(pizzaType, pizzaSize, pizzaCrust, pizzaToppings);
        numberOfPizzas.push(newPizza);


        $("ul#pizza").append("<li><span class='pizzalist'>" + newPizza.pizzaPrice() + "</span></li>")

        for (let i = 0; i < numberOfPizzas.length; i++) {
            yourBill += numberOfPizzas[i].pizzaPrice();

        }
        alert("UGX " + yourBill);

    })


})

