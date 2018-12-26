"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ServiceProvider =
/*#__PURE__*/
function () {
  function ServiceProvider(sp) {
    _classCallCheck(this, ServiceProvider);

    var _ref = sp || {},
        id = _ref.id,
        accountType = _ref.accountType,
        address = _ref.address,
        active = _ref.active,
        email = _ref.email,
        phone = _ref.phone,
        city = _ref.city,
        state = _ref.state,
        zip = _ref.zip,
        lat = _ref.lat,
        lng = _ref.lng,
        companyName = _ref.companyName,
        coverage = _ref.coverage,
        firstName = _ref.firstName,
        lastName = _ref.lastName,
        maxServiceArea = _ref.maxServiceArea,
        vehicleType = _ref.vehicleType,
        serviceRatingPoints = _ref.serviceRatingPoints,
        serviceRatingCount = _ref.serviceRatingCount,
        serviceCallCount = _ref.serviceCallCount,
        createdAt = _ref.createdAt,
        updatedAt = _ref.updatedAt;

    this.id = id || undefined;
    this.accountType = accountType || undefined;
    this.active = active || false;
    this.email = email || undefined;
    this.phone = phone || undefined;
    this.serviceRatingPoints = serviceRatingPoints || 0;
    this.serviceRatingCount = serviceRatingCount || 0;
    this.serviceCallCount = serviceCallCount || 0;
    this.address = address || undefined;
    this.city = city || undefined;
    this.state = state || undefined;
    this.zip = zip || undefined;
    this.lat = lat || undefined;
    this.lng = lng || undefined;
    this.bankName || undefined;
    this.accountNumber = accountnumber || undefined;
    this.routingNumber = routingNUmber;
    this.companyName = companyName || undefined;
    this.coverage = coverage || undefined;
    this.firstName = firstName || undefined;
    this.lastName = lastName || undefined;
    this.maxServiceArea = maxServiceArea || undefined;
    this.vehicleType = vehicleType || undefined;
    this.createdAt = createdAt || undefined;
    this.updatedAt = updatedAt || undefined;
    this._provider_data = ["id", "accountType", "address", "active", "email", "phone", "city", "state", "zip", "lat", "lng", "companyName", "coverage", "firstName", "lastName", "maxServiceArea", "vehicleType", "serviceRatingPoints", "serviceRatingCount", "serviceCallCount", "createdAt", "updatedAt"];
  }

  _createClass(ServiceProvider, [{
    key: "serviceRating",
    value: function serviceRating() {
      if (this.serviceRatingCount === 0 || this.serviceRatingPoints === 0) {
        return 0;
      }

      return this.serviceRatingPoints / this.serviceRatingCount;
    }
  }, {
    key: "persist",
    value: function persist() {
      var _this = this;

      var _obj = {}; //persist what is defined

      this._provider_data.forEach(function (o) {
        if (_this[o] !== undefined) {
          _obj[o] = _this[o];
        }
      });

      return _obj;
    }
  }]);

  return ServiceProvider;
}();

_defineProperty(ServiceProvider, "VEHICLE_TYPE", {
  SV: "SERVICE VEHICLE",
  TR: "TRUCK",
  WR: "WRECKER",
  RB: "ROLLBACK"
});

var _default = ServiceProvider;
exports.default = _default;