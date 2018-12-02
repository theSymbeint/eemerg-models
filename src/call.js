class ServiceCall {
    static STATUS_LEVEL = {
        PENDING: 1,
        READY: 2,
        ACTIVE: 3,
        COMPLETED: 4,
        ARCHIVED: 5,
        CANCELLED: 6,
    }
    constructor(sc) {
        const {
            id,
            srId,
            spId,
            bidId,
            userId,
            createdAt,
            updatedAt,
            arrivalAt,
            completedAt,
            cancelledCallAt,
            notes,
            status,
        } = sc || {}

        this.id = id || undefined
        this.srId = srId || undefined
        this.spId = spId || undefined
        this.bidId = bidId || undefined
        this.userId = userId || undefined
        this.createdAt = createdAt || undefined
        this.updatedAt = updatedAt || undefined
        this.arrivalAt = arrivalAt || undefined
        this.completedAt = completedAt || undefined
        this.cancelledCallAt = cancelledCallAt || undefined
        this.notes = notes || undefined
        this.status = status || undefined
    }
}

export default ServiceCall
