function myName() {
  let year = document.getElementById("year").value;
  let month = Number(document.getElementById("month").value);
  let day = Number(document.getElementById("day").value);
  let genders = document.getElementById("gender");

  // getting gender
  function gettingGender() {
    for (let gender of genders) {
      if (gender.selected) {
        return gender.value;
      }
    }
  }

  let valueOfGender = gettingGender();
  console.log(valueOfGender);

  // functions for validation
  function checkMonth() {
    if (month < 1 || month > 12) {
      return false;
    } else {
      return true;
    }
  }

  function checkDay() {
    if (month === 2 && Number(year)%4 === 0) {
      if (day > 28 || day < 1) {

      }
    }
  }
}