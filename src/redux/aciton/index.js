import { type } from "@testing-library/user-event/dist/type";
import Product from "../../components/product";

// {this is use to the add product into cart}
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }

}
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }

}