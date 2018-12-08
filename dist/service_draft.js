"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServiceDraft =
/*#__PURE__*/
function () {
  function ServiceDraft(sd) {
    _classCallCheck(this, ServiceDraft);

    var _ref = sd || {},
        id = _ref.id,
        amount = _ref.amount,
        eemerg_fee = _ref.eemerg_fee,
        serviceChargeRate = _ref.serviceChargeRate,
        serviceCharge = _ref.serviceCharge,
        createdAt = _ref.createdAt,
        updatedAt = _ref.updatedAt;

    this.id = id || undefined;
    this.amount = amount || undefined;
    this.eemerg_fee = eemerg_fee || undefined;
    this.serviceChargeRate = serviceChargeRate || undefined;
    this.serviceCharge = serviceCharge || undefined;
    this.createdAt = createdAt || undefined;
    this.updatedAt = updatedAt || undefined;
  }

  _createClass(ServiceDraft, [{
    key: "calculateServiceCharge",
    value: function calculateServiceCharge() {
      this.serviceCharge = this.serviceChargeRate * (this.amount / 100);
    }
  }]);

  return ServiceDraft;
}();

var _default = ServiceDraft;
exports.default = _default;