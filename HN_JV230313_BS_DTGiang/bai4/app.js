let input = prompt("Nhap vao cac so bat ky cach nhau 1 khoang trang");
numList = input.split(" ");//numList=[3,12,38,25,49]
console.log(numList);
//cach 1: ham sort

numList.sort((a, b) => b - a);
console.log("mang theo thu tu tang dan la", numList);

//cach 2:

let max = 0;
for (let i = 0; i < numList.length; i++) {
  for (let j = i + 1; j < numList.length; j++) {
    if (Number(numList[i]) < Number(numList[j])) {
      max = Number(numList[i]);
      Number(numList[i]) = Number(numList[j]);
      Number(numList[j]) = max;
    }
  }
}
console.log("mang theo thu tu tang dan la", numList);
