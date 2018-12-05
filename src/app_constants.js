const tow = { item: "EEMERG TOW", cost: 20, qty: 1 };
const flat = { item: "EEMERG TIRE", cost: 15, qty: 1 };
const lockout = { item: "EEMERG LOCKOUT", cost: 15, qty: 1 };
const gas = { item: "EEMERG GAS", cost: 15, qty: 1 };
const battery = { item: "EEMERG DEADBAT", cost: 15, qty: 1 };

const ptow = { item: "PROVIDER TOW", cost: 20, qty: 1 };
const pflat = { item: "PROVIDER TIRE", cost: 5, qty: 1 };
const plockout = { item: "PROVIDER LOCKOUT", cost: 5, qty: 1 };
const pgas = { item: "PROVIDER GAS", cost: 5, qty: 1 };
const pdeadbat = { item: "PROVIDER DEADBAT", cost: 5, qty: 1 };

const BASE_COST_EEMERG = {
    TOW: tow,
    LOCKOUT: lockout,
    FLAT: flat,
    GAS: gas,
    DEADBAT: battery
};

const BASE_COST_PROVIDER = {
    TOW: ptow,
    LOCKOUT: plockout,
    FLAT: pflat,
    GAS: pgas,
    DEADBAT: pdeadbat
};

const APPCON = {
    BASE_COST_EEMERG: BASE_COST_EEMERG,
    BASE_COST_PROVIDER: BASE_COST_PROVIDER
};

const BIDSLOTS = 2;

const ERT = [
    { text: "1/2Hr to 1Hr", value: "1/2Hr to 1Hr" },
    { text: "1Hr to 2Hr", value: "1Hr to 2Hr" },
    { text: "2Hr to 3Hr", value: "2Hr to 3Hr" },
    { text: "Unknown", value: "Unknown" }
];
const BIDDURATION = [
    { text: "5 MINUTES", value: 6 },
    { text: "10 MINUTES", value: 11 },
    { text: "15 MINUTES", value: 16 }
];


export {BASE_COST_EEMERG,BASE_COST_PROVIDER,APPCON,BIDDURATION,BIDSLOTS,ERT}