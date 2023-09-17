class PartyPlanner {
	constructor(){
		this.guestList=[];
	}
	addToGuestList(name){
		return this.guestList.push(name);
	}
	throwParty(){
		if (this.guestList.length !== 0){
				return "Welcome to the party " + `${this.guestList.join(" and ")}`
			}
			return "Gotta add people to the guest list"
		}
	}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
