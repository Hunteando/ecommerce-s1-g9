import User from '../../dao/models/User';
export const getUserService = async () => {
    try {
        const userRetrieved = await User.findAll();

        const response = {
            msg: 'Route working',
            status: 200,
            user: userRetrieved,
        };
        console.log(userRetrieved);
        return response;
    } catch (error) {
        return error;
    }
};
