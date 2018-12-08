"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _billable = _interopRequireDefault(require("./billable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Bid =
/*#__PURE__*/
function () {
  function Bid(bid) {
    var _this = this;

    _classCallCheck(this, Bid);

    var _ref = bid || {},
        id = _ref.id,
        spId = _ref.spId,
        srId = _ref.srId,
        billables = _ref.billables,
        bidDuration = _ref.bidDuration,
        ert = _ref.ert,
        createdAt = _ref.createdAt,
        updatedAt = _ref.updatedAt,
        notes = _ref.notes,
        adminNotes = _ref.adminNotes,
        status = _ref.status;

    this.id = id || undefined;
    this.spId = spId || undefined;
    this.srId = srId || undefined;
    this.billables = billables || undefined;
    this.notes = notes || "";
    this.adminNotes = adminNotes || "";
    this.ert = ert || undefined;
    this.bidDuration = bidDuration || 15;
    this.createdAt = createdAt || undefined;
    this.updatedAt = updatedAt || undefined;
    this.bArry = [];
    this.status = status || Bid.STATUS_LEVEL.OPEN;

    if (this.billables !== undefined) {
      JSON.parse(this.billables).forEach(function (b) {
        _this.bArry.push(new _billable.default(b));
      });
    }
  }

  _createClass(Bid, [{
    key: "persistMe",
    value: function persistMe() {
      return {
        id: this.id,
        spId: this.spId,
        srId: this.srId,
        ert: this.ert,
        bidDuration: this.bidDuration,
        billables: this.billables,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        notes: this.notes,
        adminNotes: this.adminNotes,
        status: this.status
      };
    }
  }, {
    key: "total",
    get: function get() {
      var v = 0;

      if (this.bArry) {
        this.bArry.forEach(function (b) {
          v = v + parseInt(b.total);
        });
      }

      return v;
    }
  }]);

  return Bid;
}();

_defineProperty(Bid, "STATUS_LEVEL", {
  OPEN: 1,
  PENDING: 2,
  CANCEL_PENDING: 3,
  ACCEPTED: 4,
  REJECTED: 5,
  CANCELLED: 6,
  ARCHIVED: 7
});

var _default = Bid;
exports.default = _default;