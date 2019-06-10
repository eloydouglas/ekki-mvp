export const createTransaction = (transaction) => {
    return {
        type: 'CREATE_TRANSACTION',
        payload: {transaction}
    };
};