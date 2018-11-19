class ServiceRequest {
    static STATUS_LEVEL = {
        OPEN: 1,
        PENDING: 2,
        ASSIGNED: 3,
        CANCELLED: 4,
        ARCHIVED: 5,
    }

    constructor(sr) {
        const {
            id,
            userId,
            lat,
            lng,
            locType,
            mAddress,
            mCity,
            mState,
            mZip,
            make,
            model,
            year,
            serviceSelected,
            status,
            towRange,
            towType,
            towAddress,
            towCity,
            towState,
            towZip,
            zip,
            arrivalCode,
            completionCode,
            customerNotes,
            adminNotes,
            updatedAt,
            createdAt,
        } = sr || {}

        this.id = id || undefined
        this.userId = userId || undefined
        this.lat = lat || undefined
        this.lng = lng || undefined
        this.locType = locType || undefined
        this.mAddress = mAddress || undefined
        this.mCity = mCity || undefined
        this.mState = mState || undefined
        this.mZip = mZip || undefined
        this.make = make || undefined
        this.model = model || undefined
        this.year = year || undefined
        this.serviceSelected = serviceSelected || undefined
        this.status = status || undefined
        this.towRange = towRange || undefined
        this.towType = towType || undefined
        this.towAddress = towAddress || undefined
        this.towCity = towCity || undefined
        this.towState = towState || undefined
        this.towZip = towZip || undefined
        this.zip = zip || undefined
        this.arrivalCode = arrivalCode || undefined
        this.completionCode = completionCode || undefined
        this.customerNotes = customerNotes || undefined
        this.adminNotes = adminNotes || undefined
        this.updatedAt = updatedAt || undefined
        this.createdAt = createdAt || undefined

        this._request_data = [
            "id",
            "userId",
            "lat",
            "lng",
            "locType",
            "mAddress",
            "mCity",
            "mState",
            "mZip",
            "make",
            "model",
            "year",
            "serviceSelected",
            "status",
            "towRange",
            "towType",
            "towAddress",
            "towCity",
            "towState",
            "towZip",
            "zip",
            "arrivalCode",
            "completionCode",
            "customerNotes",
            "adminNotes",
            "updatedAt",
            "createdAt",
        ]
    }

    persist() {
        let _obj = {}
        //persist what is defined
        this._request_data.forEach(o => {
            if (this[o] !== undefined) {
                _obj[o] = this[o]
            }
        })
        return _obj
    }
}

export default ServiceRequest
