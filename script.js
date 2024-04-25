document.addEventListener("DOMContentLoaded", function() {
    const categoriesContainer = document.getElementById("categories-container");

    // Mock JSON data
    const data = {
        "categories": [
            {
                "category_name": "Men",
                "category_products": [
                    {
                        "id": "1",
                        "title": "Mens Kurta",
                        "price": "1199",
                        "compare_at_price": "1299",
                        "vendor": "Manyvar",
                        "badge_text": "Wedding Special",
                        "image": "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384",
                        "second_image": "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267"
                    },
                    // Other products...
                ]
            },
            // Other categories...
        ]
    };

    // Create category elements
    data.categories.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");
        categoryElement.innerHTML = `<h2>${category.category_name}</h2>`;

        // Create product cards
        const productCards = category.category_products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Vendor: ${product.vendor}</p>
                ${product.badge_text ? `<span class="badge">${product.badge_text}</span>` : ''}
            </div>
        `).join("");

        categoryElement.innerHTML += productCards;
        categoriesContainer.appendChild(categoryElement);
    });
});
