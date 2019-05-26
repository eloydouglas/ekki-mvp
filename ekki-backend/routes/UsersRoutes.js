const User = require('../src/controllers/UsersController');

module.exports = (api) => {
    api.route('/users').post(User.create);
    api.route('/users').get(User.index);
    api.route('/users/:id').get(User.show);
    api.route('/users/:id').delete(User.delete);
    api.route('/users/:id').patch(User.update);
};