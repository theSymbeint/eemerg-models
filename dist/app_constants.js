"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERT = exports.BIDSLOTS = exports.BIDDURATION = exports.APPCON = exports.BASE_COST_PROVIDER = exports.BASE_COST_EEMERG = void 0;
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