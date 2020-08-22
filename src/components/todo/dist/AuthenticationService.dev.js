"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthenticationService =
/*#__PURE__*/
function () {
  function AuthenticationService() {
    _classCallCheck(this, AuthenticationService);
  }

  _createClass(AuthenticationService, [{
    key: "registerSuccessfulLogin",
    value: function registerSuccessfulLogin(username, password) {
      console.log("Register successful log");
      sessionStorage.setItem('authenticatedUser', username);
    }
  }, {
    key: "logout",
    value: function logout() {
      sessionStorage.removeItem('authenticatedUser');
    }
  }]);

  return AuthenticationService;
}();

var _default = new AuthenticationService();

exports["default"] = _default;