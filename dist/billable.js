"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Billable =
/*#__PURE__*/
function () {
  function Billable(_ref) {
    var item = _ref.item,
        cost = _ref.cost,
        qty = _ref.qty;

    _classCallCheck(this, Billable);

    this.item = item || undefined;
    this.cost = cost || undefined;
    this.qty = qty || undefined;
  }

  _createClass(Billable, [{
    key: "total",
    get: function get() {
      if (this.cost === undefined || this.qty === undefined) {
        throw new Error("Billable has no cost value or no qty value. ");
      }

      return this.cost * this.qty;
    }
  }]);

  return Billable;
}();

var _default = Billable;
exports.default = _default;