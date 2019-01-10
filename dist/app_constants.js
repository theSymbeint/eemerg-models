"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TAX_ID_TYPES = exports.COMPANY_TYPES = exports.US_STATES = exports.VEHICLE_MAKES = exports.VEHICLE_TYPE = exports.SERVICE_AREA = exports.ERT = exports.BIDSLOTS = exports.BIDDURATION = exports.APPCON = exports.BASE_COST_PROVIDER = exports.BASE_COST_EEMERG = void 0;

var _cars = _interopRequireDefault(require("./cars"));

var _states = _interopRequireDefault(require("./states"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tow = {
  item: "EEMERG TOW",
  cost: 20,
  qty: 1
};
var flat = {
  item: "EEMERG TIRE",
  cost: 15,
  qty: 1
};
var lockout = {
  item: "EEMERG LOCKOUT",
  cost: 15,
  qty: 1
};
var gas = {
  item: "EEMERG GAS",
  cost: 15,
  qty: 1
};
var battery = {
  item: "EEMERG DEADBAT",
  cost: 15,
  qty: 1
};
var ptow = {
  item: "PROVIDER TOW",
  cost: 20,
  qty: 1
};
var pflat = {
  item: "PROVIDER TIRE",
  cost: 5,
  qty: 1
};
var plockout = {
  item: "PROVIDER LOCKOUT",
  cost: 5,
  qty: 1
};
var pgas = {
  item: "PROVIDER GAS",
  cost: 5,
  qty: 1
};
var pdeadbat = {
  item: "PROVIDER DEADBAT",
  cost: 5,
  qty: 1
};
var BASE_COST_EEMERG = {
  TOW: tow,
  LOCKOUT: lockout,
  FLAT: flat,
  GAS: gas,
  DEADBAT: battery
};
exports.BASE_COST_EEMERG = BASE_COST_EEMERG;
var BASE_COST_PROVIDER = {
  TOW: ptow,
  LOCKOUT: plockout,
  FLAT: pflat,
  GAS: pgas,
  DEADBAT: pdeadbat
};
exports.BASE_COST_PROVIDER = BASE_COST_PROVIDER;
var APPCON = {
  BASE_COST_EEMERG: BASE_COST_EEMERG,
  BASE_COST_PROVIDER: BASE_COST_PROVIDER
};
exports.APPCON = APPCON;
var BIDSLOTS = 2;
exports.BIDSLOTS = BIDSLOTS;
var ERT = [{
  text: "1/2Hr to 1Hr",
  value: "1/2Hr to 1Hr"
}, {
  text: "1Hr to 2Hr",
  value: "1Hr to 2Hr"
}, {
  text: "2Hr to 3Hr",
  value: "2Hr to 3Hr"
}, {
  text: "Unknown",
  value: "Unknown"
}];
exports.ERT = ERT;
var BIDDURATION = [{
  text: "5 MINUTES",
  value: 6
}, {
  text: "10 MINUTES",
  value: 11
}, {
  text: "15 MINUTES",
  value: 16
}];
exports.BIDDURATION = BIDDURATION;
var SERVICE_AREA = [{
  value: 10,
  text: "10 Mile Radius"
}, {
  value: 20,
  text: "20 Mile Radius"
}, {
  value: 30,
  text: "30 Mile Radius"
}, {
  value: 50,
  text: "50 Mile Radius"
}, {
  value: 65,
  text: "65 Mile Radius"
}];
exports.SERVICE_AREA = SERVICE_AREA;
var VEHICLE_TYPE = [{
  value: "",
  text: "None"
}, {
  value: "SV",
  text: "Service Vehicle"
}, {
  value: "TR",
  text: "Truck"
}, {
  value: "WR",
  text: "Wrecker"
}, {
  value: "RB",
  text: "Rollback"
}];
exports.VEHICLE_TYPE = VEHICLE_TYPE;
var COMPANY_TYPES = [{
  value: "sole_proprietor",
  text: "Ind/Sole Proprietor"
}, {
  value: "c_corp",
  text: "C Corporation"
}, {
  value: "s_corp",
  text: "S Corporation"
}, {
  value: "partnership",
  text: "Partnership"
}, {
  value: "trust_estate",
  text: "Trust/estate"
}, {
  value: "llc_sole",
  text: "LLC/Sole proprietor"
}, {
  value: "llc_c_corp",
  text: "LLC/ C Corporation"
}, {
  value: "llc_s_corp",
  text: "LLC/S Corporation"
}, {
  value: "llc_partnership",
  text: "LLC/Partnership"
}];
exports.COMPANY_TYPES = COMPANY_TYPES;
var TAX_ID_TYPES = [{
  value: "ssn",
  text: "SSN"
}, {
  value: "ein",
  text: "EIN"
}];
exports.TAX_ID_TYPES = TAX_ID_TYPES;
var US_STATES = new _states.default().getStatesList();
exports.US_STATES = US_STATES;
var VEHICLE_MAKES = new _cars.default().getCarMakes();
exports.VEHICLE_MAKES = VEHICLE_MAKES;