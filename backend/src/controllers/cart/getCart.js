import { getCartService } from '../../services';

export const getCart = async (req, res, next) => {
    try {
        const response = await getCartService();

        const { status } = response;

        return res.status(status).json({ response });
    } catch (error) {
        return res.status(500).json({
            error,
        });
    }
};
