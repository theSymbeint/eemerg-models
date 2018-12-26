"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cars =
/*#__PURE__*/
function () {
  function Cars() {
    _classCallCheck(this, Cars);

    _defineProperty(this, "_makes", ["ACURA", "ALFA ROMEO", "AMC", "ARIEL", "ASTON MARTIN", "AUDI", "AUSTIN HEALEY", "BENTLEY", "BMW", "BUGATTI", "BUICK", "CADILLAC", "CALLAWAY", "CATERHAM", "CHEVROLET", "CHRYSLER", "CITROEN", "DAEWOO", "DAIHATSU", "DATSUN", "DE TOMASO", "DODGE", "EAGLE", "FERRARI", "FIAT", "FISKER", "FORD", "GENESIS", "GEO", "GMC", "HOLDEN", "HONDA", "HUMMER", "HYUNDAI", "INFINITI", "ISUZU", "JAGUAR", "JEEP", "KIA", "KOENIGSEGG", "LAMBORGHINI", "LANCIA", "LAND ROVER", "LEXUS", "LINCOLN", "LOTUS", "MASERATI", "MAYBACH", "MAZDA", "MCLAREN", "MERCEDES", "MERCURY", "MG", "MINI", "MITSUBISHI", "MORGAN", "MOSLER / ROSSION", "NISSAN", "NOBLE", "OLDSMOBILE", "OPEL", "PAGANI", "PEUGEOT", "PLYMOUTH", "PONTIAC", "PORSCHE", "PROTON", "RAM", "RENAULT", "ROLLS-ROYCE", "SAAB", "SALEEN", "SATURN", "SCION", "SEAT", "SHELBY", "SKODA", "SMART", "SSANGYONG", "SUBARU", "SUZUKI", "TESLA", "TOYOTA", "TRIUMPH", "VAUXHALL", "VW", "VOLVO", "WESTFIELD"]);
  }

  _createClass(Cars, [{
    key: "getCarMakes",
    value: function getCarMakes() {
      return this._makes;
    }
  }]);

  return Cars;
}();

var _default = Cars;
exports.default = _default;