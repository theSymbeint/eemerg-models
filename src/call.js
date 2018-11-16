

class ServiceCall{
    constructor({id, srId, bidId, userId, createdAt, updatedAt, arrivalAt, completedAt, cancelledCallAt, status}){
		this.STATUS_LEVEL = { PENDING: 1, READY: 2, ACTIVE: 3, COMPLETED: 4, ARCHIVED: 5, CANCELLED: 6 }     
		
    }
}