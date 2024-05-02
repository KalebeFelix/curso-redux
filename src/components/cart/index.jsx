import {useSelector} from "react-redux";

import CartItem from "../cart-item/index.jsx";

// Styles
import * as Styles from "./styles";
import {selectProductsTotalPrice} from "../../redux/cart/cart.selectors.js";
import { cartSelectors } from "../../redux/cart/slice.js";

const Cart = ({isVisible, setIsVisible}) => {
    const handleEscapeAreaClick = () => setIsVisible(false);

    const {products} = useSelector(cartSelectors);

    const productsTotalPrice = useSelector(selectProductsTotalPrice);

    return (
        <Styles.CartContainer isVisible={isVisible}>
            <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
            <Styles.CartContent>
                <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
                {products.map((product) => (
                    <CartItem product={product} />
                ))}
                <Styles.CartTotal>R$ {productsTotalPrice}</Styles.CartTotal>
            </Styles.CartContent>
        </Styles.CartContainer>
    );
};

export default Cart;
