class ServiceProvider {
    static VEHICLE_TYPE = {
        SV: "SERVICE VEHICLE",
        TR: "TRUCK",
        WR: "WRECKER",
        RB: "ROLLBACK",
    }

    constructor(sp) {
        const {
            id,
            accountType,
            address,
            active,
            email,
            phone,
            city,
            state,
            zip,
            lat,
            lng,
            coverage,
            firstName,
            lastName,
            maxServiceArea,
            vehicleType,
            serviceRatingPoints,
            serviceRatingCount,
            serviceCallCount,
            createdAt,
            updatedAt,
        } = sp || {}
        this.id = id || undefined
        this.accountType = accountType || undefined
        this.active = active || false
        this.email = email || undefined
        this.phone = phone || undefined
        this.serviceRatingPoints = serviceRatingPoints || 0
        this.serviceRatingCount = serviceRatingCount || 0
        this.serviceCallCount = serviceCallCount || 0
        this.address = address || undefined
        this.city = city || undefined
        this.state = state || undefined
        this.zip = zip || undefined
        this.lat = lat || undefined
        this.lng = lng || undefined
        this.coverage = coverage || undefined
        this.firstName = firstName || undefined
        this.lastName = lastName || undefined
        this.maxServiceArea = maxServiceArea || undefined
        this.vehicleType = vehicleType || undefined
        this.createdAt = createdAt || undefined
        this.updatedAt = updatedAt || undefined
    }

    serviceRating() {
        if (this.serviceRatingCount === 0 || this.serviceRatingPoints === 0) {
            return 0
        }
        return this.serviceRatingPoints / this.serviceRatingCount
    }

    persist() {}
}

export default ServiceProvider
