function sortCatalog(products) {
    // Create an array of objects with name and price properties
    const catalog = products.map((product) => {
        const [name, price] = product.split(" : ");
        return { name, price: Number(price) };
    });

    // Sort the array of objects by name, ignoring case
    catalog.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    // Group the products by the initial of their name
    const groups = {};
    catalog.forEach((product) => {
        const initial = product.name[0].toUpperCase();
        if (!groups[initial]) groups[initial] = [];
        groups[initial].push(product);
    });

    // Create an array of strings with the sorted catalog
    const sortedCatalog = [];
    for (const initial in groups) {
        sortedCatalog.push(initial);
        groups[initial].forEach((product) => {
            sortedCatalog.push(`  ${product.name}: ${product.price}`);
        });
    }

    // Return the sorted catalog as a string
    return sortedCatalog.join("\n");
}



console.log(sortCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]

));