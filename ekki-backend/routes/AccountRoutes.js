const Account = require('../src/controllers/AccountsController');

module.exports = (api) => {
    api.route('/accounts/:user_id').get(Account.show);
    api.route('/accounts/:user_id').patch(Account.update);
};