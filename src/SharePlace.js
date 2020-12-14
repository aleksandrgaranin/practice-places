class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn')

    locateUserBtn.addEventListener('click', this.locateUserHandler)
    addressForm.addEventListener('submit', this.findAddressHandler)
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Location feature is not avalable in your browser - please use a more browser or manually eter an adress')
      return;
    };
    navigator.geolocation.getCurrentPosition(
      successResult => {
        const coordinates = {
          lat: successResult.coords.latitude + Math.random() * 50,
          lng: successResult.coords.longitude + Math.random() * 50
        };
        console.log(coordinates);
      }, error => {
      alert('Could not locate you unfortunately. Please enter an adress manually!')
    })
  }

  findAddressHandler() {

  }
} 

const plaseFinder = new PlaceFinder()