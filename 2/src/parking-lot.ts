abstract class Activities {
  abstract parkVehicle(plate: string): void;
  abstract payForStay(hours: number, rate: number, plate: string): void;
  abstract leaveTheParking(plate: string): void;
}

type ParkedVehicles = { plate: string, didPay: boolean }[];

class ParkingLot extends Activities {

  constructor(
    public capacity: number,
    public revenue = 0,
    public parkedVehicles: ParkedVehicles = []
  ) {
    super();
  }

  parkVehicle(plate: string) {
    if (this.capacity === this.parkedVehicles.length) { throw "No more space!"; }
    this.parkedVehicles.push({ plate, didPay: false });
  }

  payForStay(hours: number, rate: number, plate: string) {
    const item = this.parkedVehicles.find(i => i.plate === plate);
    if (!item) { throw "Not found!"; }
    this.revenue += rate * hours;
    item.didPay = true;
  }

  leaveTheParking(plate: string) {
    const item = this.parkedVehicles.find(i => i.plate === plate);
    if (!item) { throw "Not found!"; }
    if (item && !item.didPay) { throw "You must pay!!!!!!!!" }
    this.parkedVehicles = this.parkedVehicles.filter(i => i.plate !== plate);
  };

  overview() {
    return `capacity: ${this.capacity}\nrevenue: ${this.revenue}\nparkedVehicles: ${this.parkedVehicles.map(i => `${i.plate} ${i.didPay}\n`)}`;
  }
}


const p = new ParkingLot(2, 100000);

p.parkVehicle('SASASA');
p.parkVehicle('SASASA');

p.payForStay(10, 1000, 'SASASA');
p.leaveTheParking('SASASA');

console.log(p.overview());

