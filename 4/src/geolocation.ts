
const opn = require('opn');
export default class Geolocation {
  constructor(private latitude: string, private longitude: string) { }

  showCoordinates() {
    opn(`https://www.google.com/maps/search/${this.latitude},${this.longitude}`).then(() => {
      console.log('Page was opened!');
    });
  }
}