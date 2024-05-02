import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // verificar se o item ja esta no carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );

            //se ele estiver, aumentar a quantidade em 1
            if (productIsAlreadyInCart) {
                state.products = state.products.map((product) =>
                    product.id === action.payload.id
                        ? {...product, quantity: product.quantity + 1}
                        : product
                );
                return;
            }
            //se nao estiver, adicionar ao carrinho
            state.products = [
                ...state.products,
                {...action.payload, quantity: 1},
            ];
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        increaseProductQuantity: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id
                    ? {...product, quantity: product.quantity + 1}
                    : product
            );
        },
        decreaseProductQuantity: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id
                    ? {...product, quantity: product.quantity - 1}
                    : product
            );
        },
    },
});

export const {
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
} = cartSlice.actions;

export const cartSelectors = state => state.cart;

export default cartSlice.reducer;