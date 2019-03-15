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
            bidDuration,
            ert,
            createdAt,
            updatedAt,
            notes,
            adminNotes,
            status,
        } = bid || {}

        this.id = id || undefined
        this.spId = spId || undefined
        this.srId = srId || undefined
        this.billables = billables || undefined
        this.notes = notes || ""
        this.adminNotes = adminNotes || ""
        this.ert = ert || undefined
        this.bidDuration = bidDuration || 15
        this.createdAt = createdAt || undefined
        this.updatedAt = updatedAt || undefined

        this.bArry = []

        this.status = status || Bid.STATUS_LEVEL.OPEN

        if (this.billables !== undefined) {
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
            ert: this.ert,
            bidDuration: this.bidDuration,
            billables: this.billables,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            notes: this.notes,
            adminNotes: this.adminNotes,
            status: this.status,
        }
    }

    get total() {
        let v = 0

        if (this.bArry) {
            this.bArry.forEach(b => {
                v = v + parseFloat(b.total)
            })
        }
        return v
    }
}

export default Bid
