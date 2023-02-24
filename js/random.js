function fetchData() {
  const url = "https://randomuser.me/api/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const person = data.results[0];
      const { picture, email, dob, location, cell, login } = person;

      const images = document.getElementById("images");
      const img = picture.large;
      const Name = person.name;
      const FullName = `<p>My Name is </p> <h2>${Name.title} ${Name.first} ${Name.last}</h2>`;
      const EmailText = `<p>My Email is </p><h2>${email}</h2>`;
      const Phone = `<p>My phone no. is</p> <h2>${cell}</h2>`;
      const date = new Date(dob.date);
      const Location = `<p>My Location is </p><h2>${location.postcode} ${location.city} ${location.state}</h2>`;
      const Password = `<p>My Password Is </p> <h2>${login.password}</h2>`;
      const DOB = `<p>My Age Is </p> <h2>${date.getDate()}/${date.getMonth()}/${date.getFullYear()} <br> ${
        dob.age
      } years Old</h2>`;
      const detailsId = document.getElementById("details");

      detailsId.innerHTML = FullName;
      images.src = img;
      const icons = document.querySelectorAll(".fa-solid");
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          icons.forEach((icon) => icon.classList.remove("active"));
          const className = icon.className;
          icon.classList.add("active");
          if (className.includes("fa-user-large")) {
            detailsId.innerText = "";
            detailsId.innerHTML = FullName;
          } else if (className.includes("fa-envelope")) {
            detailsId.innerText = "";
            detailsId.innerHTML = EmailText;
          } else if (className.includes("fa-calendar")) {
            detailsId.innerText = "";
            detailsId.innerHTML = DOB;
          } else if (className.includes("fa-map-location-dot")) {
            detailsId.innerText = "";
            detailsId.innerHTML = Location;
          } else if (className.includes("fa-phone-volume")) {
            detailsId.innerText = "";
            detailsId.innerHTML = Phone;
          } else if (className.includes("fa-lock")) {
            detailsId.innerText = "";
            detailsId.innerHTML = Password;
          }
        });
      });
    });
}

fetchData();
document.getElementById("images").addEventListener("click", () => fetchData());
