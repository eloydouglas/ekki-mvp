const Authentication = require('../src/controllers/AuthenticationController');

module.exports = (api) => {
    api.route('/auth/signin').post(Authentication.create);
}