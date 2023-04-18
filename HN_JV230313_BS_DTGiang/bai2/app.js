let input = prompt("Nhap vao mot cau bat ky");
newArr = input.trim().split(" ");
console.log(newArr);

newArr1 = [];
for (let i = 0; i < newArr.length; i++) {
  newArr1.push(
    newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase()
  );
}

newArr1.join(" ");
alert(newArr1.join(" "));
