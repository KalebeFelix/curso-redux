export const selectProductsCount = (rootReducer) => {
    return rootReducer.cart.products.reduce(
        (acc, curr) => acc + curr.quantity,
        0
    );
};

export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cart.products.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    );
};
