const UserTransaction = require('../src/controllers/UsersTransactionsController');

module.exports = (api) => {
    api.route('/users-transactions').post(UserTransaction.create);
    api.route('/users-transactions/:id').get(UserTransaction.index);
};