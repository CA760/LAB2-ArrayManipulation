let shoppingList = [];

        let itemInput = document.getElementById("itemInput");

        let addItemButton = document.getElementById("addItemButton");

        let removeItemButton = document.getElementById("removeItemButton");

        let cartList = document.getElementById("cart");

        // Add item
        function addItem(item) {

            if (item === "") {
                alert("Please enter an item.");
                return;
            }

            if (shoppingList.includes(item)) {
                alert("Item already exists.");
                return;
            }

            shoppingList.push(item);

            renderCart();

            itemInput.value = "";
        }

        // Remove last item
        function removeLastItem() {

            shoppingList.pop();

            renderCart();

        }

        // Display items
        function renderCart() {

            cartList.innerHTML = "";

            for (let i = 0; i < shoppingList.length; i++) {

                let listItem = document.createElement("li");

                listItem.innerText = shoppingList[i];

                cartList.appendChild(listItem);

            }
        }

        // Add button
        addItemButton.addEventListener("click", function() {

            let item = itemInput.value.trim();

            addItem(item);

        });

        // Remove button
        removeItemButton.addEventListener("click", function() {

            removeLastItem();

        });

        // Allow Enter key to add items
        itemInput.addEventListener("keypress", function(event) {

            if (event.key === "Enter") {

                addItem(itemInput.value.trim());

            }

        });
        
        // Filter items
        function filterItems(searchTerm) {

            return shoppingList.filter(function(item) {

            return item.toLowerCase().includes(searchTerm.toLowerCase());

        });

        }

        // Search button
        searchButton.addEventListener("click", function() {

            let searchTerm = searchInput.value.trim();

            let results = filterItems(searchTerm);

            cartList.innerHTML = "";

            if (results.length === 0) {

                cartList.innerHTML = "<li>No matching items found.</li>";

                return;

            }

            for (let i = 0; i < results.length; i++) {

                let listItem = document.createElement("li");

                    listItem.innerText = results[i];

                    cartList.appendChild(listItem);

            }

        });