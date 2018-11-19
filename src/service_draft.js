class ServiceDraft {
    constructor(sd) {
        const {
            id,
            amount,
            eemerg_fee,
            serviceChargeRate,
            serviceCharge,
            createdAt,
            updatedAt,
        } = sd || {}

        this.id = id || undefined
        this.amount = amount || undefined
        this.eemerg_fee = eemerg_fee || undefined
        this.serviceChargeRate = serviceChargeRate || undefined
        this.serviceCharge = serviceCharge || undefined
        this.createdAt = createdAt || undefined
        this.updatedAt = updatedAt || undefined
    }

    calculateServiceCharge() {
        this.serviceCharge = this.serviceChargeRate * (this.amount / 100)
    }
}

export default ServiceDraft
