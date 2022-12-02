import { getUserService } from '../../services';

export const getUser = async (req, res, next) => {
    try {
        const response = await getUserService();

        const { status } = response;

        return res.status(status).json({ response });
    } catch (error) {
        return res.status(500).json({
            error,
        });
    }
};
