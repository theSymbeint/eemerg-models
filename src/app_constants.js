import Cars from "./cars"
import States from "./states"

const tow = { item: "EEMERG TOW", cost: 20, qty: 1 }
const flat = { item: "EEMERG TIRE", cost: 15, qty: 1 }
const lockout = { item: "EEMERG LOCKOUT", cost: 15, qty: 1 }
const gas = { item: "EEMERG GAS", cost: 15, qty: 1 }
const battery = { item: "EEMERG DEADBAT", cost: 15, qty: 1 }

const ptow = { item: "PROVIDER TOW", cost: 20, qty: 1 }
const pflat = { item: "PROVIDER TIRE", cost: 5, qty: 1 }
const plockout = { item: "PROVIDER LOCKOUT", cost: 5, qty: 1 }
const pgas = { item: "PROVIDER GAS", cost: 5, qty: 1 }
const pdeadbat = { item: "PROVIDER DEADBAT", cost: 5, qty: 1 }

const BASE_COST_EEMERG = {
    TOW: tow,
    LOCKOUT: lockout,
    FLAT: flat,
    GAS: gas,
    DEADBAT: battery,
}

const BASE_COST_PROVIDER = {
    TOW: ptow,
    LOCKOUT: plockout,
    FLAT: pflat,
    GAS: pgas,
    DEADBAT: pdeadbat,
}

const APPCON = {
    BASE_COST_EEMERG: BASE_COST_EEMERG,
    BASE_COST_PROVIDER: BASE_COST_PROVIDER,
}

const BIDSLOTS = 2

const ERT = [
    { text: "1/2Hr to 1Hr", value: "1/2Hr to 1Hr" },
    { text: "1Hr to 2Hr", value: "1Hr to 2Hr" },
    { text: "2Hr to 3Hr", value: "2Hr to 3Hr" },
    { text: "Unknown", value: "Unknown" },
]
const BIDDURATION = [
    { text: "5 MINUTES", value: 6 },
    { text: "10 MINUTES", value: 11 },
    { text: "15 MINUTES", value: 16 },
]

const SERVICE_AREA = [
    { value: 10, text: "10 Mile Radius" },
    { value: 20, text: "20 Mile Radius" },
    { value: 30, text: "30 Mile Radius" },
    { value: 50, text: "50 Mile Radius" },
    { value: 65, text: "65 Mile Radius" },
]

const VEHICLE_TYPE = [
    { value: "", text: "None" },
    { value: "SV", text: "Service Vehicle" },
    { value: "TR", text: "Truck" },
    { value: "WR", text: "Wrecker" },
    { value: "RB", text: "Rollback" },
]

const COMPANY_TYPES = [
    { value: "sole_proprietor", text: "Ind/Sole Proprietor" },
    { value: "c_corp", text: "C Corporation" },
    { value: "s_corp", text: "S Corporation" },
    { value: "partnership", text: "Partnership" },
    { value: "trust_estate", text: "Trust/estate" },
    { value: "llc_sole", text: "LLC/Sole proprietor" },
    { value: "llc_c_corp", text: "LLC/ C Corporation" },
    { value: "llc_s_corp", text: "LLC/S Corporation" },
    { value: "llc_partnership", text: "LLC/Partnership" },
]

const TAX_ID_TYPES = [
    { value: "ssn", text: "SSN" },
    { value: "ein", text: "EIN" },
]

const US_STATES = new States().getStatesList()

const VEHICLE_MAKES = new Cars().getCarMakes()

export {
    BASE_COST_EEMERG,
    BASE_COST_PROVIDER,
    APPCON,
    BIDDURATION,
    BIDSLOTS,
    ERT,
    SERVICE_AREA,
    VEHICLE_TYPE,
    VEHICLE_MAKES,
    US_STATES,
    COMPANY_TYPES,
    TAX_ID_TYPES,
}
