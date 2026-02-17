class Room {
    constructor(public name: string) { }

    getDetails(): string {
        return `Room: ${this.name}`;
    }
}


class House {
    public rooms: Room[] = [];
    constructor(public address: string, roomNames: string[]) {
        this.rooms = roomNames.map(name => new Room(name));
    }

    listRooms(): void {
        console.log(`House at ${this.address} has the following rooms:`);
        this.rooms.forEach(room => {
            console.log(room.getDetails());
        });
    }

}

const house = new House("123 Main St", ["Living Room", "Kitchen", "Bedroom"]);
house.listRooms();