class ServiceRequest {
    static STATUS_LEVEL = {
        OPEN: 1,
        PENDING: 2,
        ASSIGNED: 3,
        CANCELLED: 4,
        ARCHIVED: 5,
    }

    constructor(sr) {
        if (typeof sr === "object") {
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
            } = sr
            //TODO throw an error in no object is passed
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
    }
}

export default ServiceRequest
