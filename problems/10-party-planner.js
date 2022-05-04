// Your code here
class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList;
	}
	addToGuestList(name) {
		this.guestList.push(name);
	}
	throwParty() {
		if (this.guestList.length === 0) {
			return `Gotta add people to the guest list`;
		}
		let result = 'Welcome to the party '
		this.guestList.forEach((guest, i) => {
			if (i === 0) {
				result += guest
			} else {
				result += ` and ${guest}`;
			}
		})
		return result;
	}
}
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
