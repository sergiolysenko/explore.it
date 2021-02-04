const cities = document.querySelectorAll(".city__link");
const welcomeBtn = document.querySelector(".top__welcome-btn");
const main = document.querySelector(".main");

welcomeBtn.addEventListener('click', () => {
  main.classList.add('hidden');
});
// Add or remove class "city__link--active" on city link after clicked

cities.forEach((city, i, allCities) => {
  city.addEventListener('click', (evt) => {
    evt.preventDefault();
    allCities.forEach((oneCity) => {
      if(oneCity.classList.contains('city__link--active') && city !== oneCity) {
        oneCity.classList.remove('city__link--active');
      }
    });
    city.classList.toggle('city__link--active');
  })
})
