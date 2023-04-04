import {createHashRouter} from "react-router-dom";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";
import MainLayout from "../app/MainLayout";
import Calculator from "../features/input/Calculator";
import Cart from "../features/cart/Cart";
import CartItemPage from "../features/cart/CartItemPage";

export const PATH = {
    calculator: '/calculator/',
    cart: '/cart/',
    item: '/cart/:itemId',
}

export const router = createHashRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {index: true, element: <Calculator/>},
                    {
                        path: PATH.calculator,
                        element: <Calculator/>,
                    },
                    {
                        path: PATH.cart,
                        element: <Cart/>,
                    },
                    {
                        path: PATH.item,
                        element: <CartItemPage/>,
                    },
                ],
            },
        ],
    },
])