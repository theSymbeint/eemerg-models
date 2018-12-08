"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ServiceRequest =
/*#__PURE__*/
function () {
  function ServiceRequest(sr) {
    _classCallCheck(this, ServiceRequest);

    var _ref = sr || {},
        id = _ref.id,
        userId = _ref.userId,
        lat = _ref.lat,
        lng = _ref.lng,
        locType = _ref.locType,
        mAddress = _ref.mAddress,
        mCity = _ref.mCity,
        mState = _ref.mState,
        mZip = _ref.mZip,
        make = _ref.make,
        model = _ref.model,
        year = _ref.year,
        serviceSelected = _ref.serviceSelected,
        status = _ref.status,
        towRange = _ref.towRange,
        towType = _ref.towType,
        towAddress = _ref.towAddress,
        towCity = _ref.towCity,
        towState = _ref.towState,
        towZip = _ref.towZip,
        zip = _ref.zip,
        arrivalCode = _ref.arrivalCode,
        completionCode = _ref.completionCode,
        customerNotes = _ref.customerNotes,
        adminNotes = _ref.adminNotes,
        updatedAt = _ref.updatedAt,
        createdAt = _ref.createdAt;

    this.id = id || undefined;
    this.userId = userId || undefined;
    this.lat = lat || undefined;
    this.lng = lng || undefined;
    this.locType = locType || undefined;
    this.mAddress = mAddress || undefined;
    this.mCity = mCity || undefined;
    this.mState = mState || undefined;
    this.mZip = mZip || undefined;
    this.make = make || undefined;
    this.model = model || undefined;
    this.year = year || undefined;
    this.serviceSelected = serviceSelected || undefined;
    this.status = status || undefined;
    this.towRange = towRange || undefined;
    this.towType = towType || undefined;
    this.towAddress = towAddress || undefined;
    this.towCity = towCity || undefined;
    this.towState = towState || undefined;
    this.towZip = towZip || undefined;
    this.zip = zip || undefined;
    this.arrivalCode = arrivalCode || undefined;
    this.completionCode = completionCode || undefined;
    this.customerNotes = customerNotes || undefined;
    this.adminNotes = adminNotes || undefined;
    this.updatedAt = updatedAt || undefined;
    this.createdAt = createdAt || undefined;
    this._request_data = ["id", "userId", "lat", "lng", "locType", "mAddress", "mCity", "mState", "mZip", "make", "model", "year", "serviceSelected", "status", "towRange", "towType", "towAddress", "towCity", "towState", "towZip", "zip", "arrivalCode", "completionCode", "customerNotes", "adminNotes", "updatedAt", "createdAt"];
  }

  _createClass(ServiceRequest, [{
    key: "persist",
    value: function persist() {
      var _this = this;

      var _obj = {}; //persist what is defined

      this._request_data.forEach(function (o) {
        if (_this[o] !== undefined) {
          _obj[o] = _this[o];
        }
      });

      return _obj;
    }
  }]);

  return ServiceRequest;
}();

_defineProperty(ServiceRequest, "STATUS_LEVEL", {
  OPEN: 1,
  PENDING: 2,
  ASSIGNED: 3,
  CANCELLED: 4,
  ARCHIVED: 5
});

var _default = ServiceRequest;
exports.default = _default;