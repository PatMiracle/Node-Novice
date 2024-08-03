function getYear(age) {
  return new Date().getFullYear() - age;
}

function getAge(year) {
  return new Date().getFullYear() - year;
}

module.exports = { getYear, getAge };
