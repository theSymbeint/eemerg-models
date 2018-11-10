
class Billable {
	constructor({item,cost,qty}){
		this.item = item || undefined;
		this.cost = cost || undefined;
		this.qty = qty || undefined;
	}



	get total() {
		if(this.cost === undefined || this.qty === undefined){
			throw new Error("Billable has no cost value or no qty value. ");
		}

		return this.cost * this.qty;
	}
}



export default Billable;