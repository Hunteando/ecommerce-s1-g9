import Cart from '../../dao/models/Cart';
export const getCartService = async () => {
    try {
        const cartRetrieved = await Cart.findAll();

        const response = {
            msg: 'Route working',
            status: 200,
            cart: cartRetrieved,
        };
        console.log(cartRetrieved);
        return response;
    } catch (error) {
        return error;
    }
};
