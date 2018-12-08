"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(user) {
    _classCallCheck(this, User);

    var _ref = user || {},
        id = _ref.id,
        email = _ref.email,
        phone = _ref.phone,
        firstName = _ref.firstName,
        lastName = _ref.lastName,
        emailVerified = _ref.emailVerified,
        phoneVerified = _ref.phoneVerified,
        anonymous = _ref.anonymous,
        createdAt = _ref.createdAt,
        updatedAt = _ref.updatedAt;

    this._user_data = ["id", "email", "phone", "firstName", "lastName", "emailVerified", "phoneVerified", "anonymous", "createdAt", "updatedAt"];
    this.id = id || undefined;
    this.email = email || undefined;
    this.phone = phone || undefined;
    this.firstName = firstName || undefined;
    this.lastName = lastName || undefined;
    this.emailVerified = emailVerified || undefined;
    this.phoneVerified = phoneVerified || undefined;
    this.anonymous = anonymous || false;
    this.createdAt = createdAt || undefined;
    this.updatedAt = updatedAt || undefined;
  }

  _createClass(User, [{
    key: "persist",
    value: function persist() {
      var _this = this;

      var _obj = {}; //persist what is defined

      this._user_data.forEach(function (o) {
        if (_this[o] !== undefined) {
          _obj[o] = _this[o];
        }
      });

      return _obj;
    }
  }]);

  return User;
}();

var _default = User;
exports.default = _default;