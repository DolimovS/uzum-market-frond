export const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const findProduct = cart.find(item => item.id === product.id);

    if (findProduct) {
        findProduct.count = (findProduct.count || 1) + 1;
    } else {
        cart.push({ ...product, count: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};