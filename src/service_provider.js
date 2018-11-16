class ServiceProvider {
    constructor(sp) {
        const {
            accountType,
            address,
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
            createdAt,
            updatedAt,
        } = sp || {}

        this.accountType = accountType || undefined
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
}

export default ServiceProvider
