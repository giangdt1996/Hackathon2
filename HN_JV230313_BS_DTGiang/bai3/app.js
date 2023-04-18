let m = +prompt("Nhap vao thang");
let y = +prompt("Nhap vao nam");

switch (m) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("So ngay trong thang" + `${m}` + "la " + 31);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("So ngay trong thang" + `${m}` + "la " + 30);
    break;
  case 2:
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
      console.log("So ngay trong thang 2 nam " + `${y}` + " la " + 29);
    } else {
      console.log("So ngay trong thang 2 nam " + `${y}` + " la " + 28);
    }
  default:
    break;
}
