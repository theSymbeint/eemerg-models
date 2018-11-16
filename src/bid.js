import Billable from "./billable"

class Bid {
    static STATUS_LEVEL = {
        OPEN: 1,
        PENDING: 2,
        CANCEL_PENDING: 3,
        ACCEPTED: 4,
        REJECTED: 5,
        CANCELLED: 6,
        ARCHIVED: 7,
    }

    constructor(bid) {
        const {
            id,
            spId,
            srId,
            billables,
            createdAt,
            updatedAt,
            notes,
            adminNotes,
            status,
        } = bid || {}

        this.id = id || undefined
        this.spId = spId || undefined
        this.srId = srId || undefined
        this.billables = billables || []
        this.notes = notes || undefined
        this.adminNotes = adminNotes || undefined
        this.createdAt = createdAt || undefined
        this.updatedAt = updatedAt || undefined

        this.bArry = []

        this.status = status || Bid.STATUS_LEVEL.OPEN

        if (this.billables.length > 0) {
            JSON.parse(this.billables).forEach(b => {
                this.bArry.push(new Billable(b))
            })
        }
    }

    persistMe() {
        return {
            id: this.id,
            spId: this.spId,
            srId: this.srId,
            billables: this.billables,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            status: this.status,
        }
    }

    get total() {
        let v = 0

        if (this.bArry) {
            this.bArry.forEach(b => {
                v = v + parseInt(b.total)
            })
        }
        return v
    }
}

export default Bid
