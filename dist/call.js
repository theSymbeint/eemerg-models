"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ServiceCall = function ServiceCall(sc) {
  _classCallCheck(this, ServiceCall);

  var _ref = sc || {},
      id = _ref.id,
      srId = _ref.srId,
      spId = _ref.spId,
      bidId = _ref.bidId,
      userId = _ref.userId,
      createdAt = _ref.createdAt,
      updatedAt = _ref.updatedAt,
      arrivalAt = _ref.arrivalAt,
      completedAt = _ref.completedAt,
      cancelledCallAt = _ref.cancelledCallAt,
      notes = _ref.notes,
      status = _ref.status;

  this.id = id || undefined;
  this.srId = srId || undefined;
  this.spId = spId || undefined;
  this.bidId = bidId || undefined;
  this.userId = userId || undefined;
  this.createdAt = createdAt || undefined;
  this.updatedAt = updatedAt || undefined;
  this.arrivalAt = arrivalAt || undefined;
  this.completedAt = completedAt || undefined;
  this.cancelledCallAt = cancelledCallAt || undefined;
  this.notes = notes || undefined;
  this.status = status || undefined;
};

_defineProperty(ServiceCall, "STATUS_LEVEL", {
  PENDING: 1,
  READY: 2,
  ACTIVE: 3,
  COMPLETED: 4,
  ARCHIVED: 5,
  CANCELLED: 6
});

var _default = ServiceCall;
exports.default = _default;