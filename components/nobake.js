const temp = [
    {
        "id": 1,
        "name": "Chia Seed Pudding",
        "tags": [
            "Easy",
            "GF",
            "Unrefined Sugars"
        ]
    },
    {
        "id": 2,
        "name": "Cornflake Christmas Wreaths",
        "tags": [
            "Easy",
            "GF",
            "Singles"
        ]
    },
    {
        "id": 3,
        "name": "Crunch Truffles",
        "tags": [
            "Easy",
            "Chocolate",
            "GF",
            "Snack"
        ]
    },
    {
        "id": 4,
        "name": "Granola Bars",
        "tags": [
            "Easy",
            "Vegan",
            "GF",
            "Singles"
        ]
    },
    {
        "id": 5,
        "name": "Granola",
        "tags": [
            "Easy",
            "Vegan",
            "GF",
            "Snack"
        ]
    },
    {
        "id": 6,
        "name": "Healthy Twix Bars",
        "tags": [
            "Medium",
            "Vegan",
            "GF",
            "Chocolate",
            "Singles"
        ]
    },
    {
        "id": 7,
        "name": "Protein Balls",
        "tags": [
            "Easy",
            "GF",
            "Unrefined Sugars",
            "Snack"
        ]
    },
    {
        "id": 8,
        "name": "Matcha Latte",
        "tags": [
            "Easy",
            "Vegan",
            "GF"
        ]
    },
    {
        "id": 9,
        "name": "Matcha PB Cups",
        "tags": [
            "Easy",
            "GF",
            "Singles"
        ]
    },
    {
        "id": 10,
        "name": "Matcha Ice Cream",
        "tags": [
            "Easy",
            "GF"
        ]
    },
    {
        "id": 11,
        "name": "Sorbet Base",
        "tags": [
            "Easy",
            "Vegan",
            "GF",
            "Unrefined Sugars"
        ]
    }
]


document.body.onload = addElement;

function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
