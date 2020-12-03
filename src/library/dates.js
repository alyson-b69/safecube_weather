class dates {
  static datify(date) {
    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2];

    return day + "/" + month + "/" + year;
  }
}

export default dates;
