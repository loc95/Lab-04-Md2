let arr = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];

let listNegativeNumbers = [];
function listOutNegativeNumbers(item) {
  if (item < 0) {
    listNegativeNumbers.push(item);
  }
}

arr.forEach(listOutNegativeNumbers);
console.log("Mảng số âm là : ", listNegativeNumbers);

let sum = 0;
function sumEvenPositive(item) {
  if (item > 0 && item % 2 == 0) {
    sum += item;
  }
}
arr.forEach(sumEvenPositive);
console.log("Tổng các số chẳn là:", sum);

let count = 0;
function countOddSmallerThan10(item) {
  if (item < 10 && item % 2 != 0) {
    count++;
  }
}
arr.forEach(countOddSmallerThan10);
console.log("Số lg số lẻ < 10 là:", count);

let min = arr[0];
function findMinPositive(item) {
  if (item < min && item > 0) {
    min = item;
  }
}
arr.forEach(findMinPositive);
console.log("Số nguyên dương nhỏ nhất là:", min);

function sortDescending() {
  let arrAfterSort = arr.sort((a, b) => {
    return b - a;
  });
  console.log("mảng sau khi sắp xếp giảm dần là: ", arrAfterSort);
}
sortDescending(arr);

function sortAscendiing() {
  let arrAfterSortAscending = arr.sort((a, b) => {
    return a - b;
  });
  console.log("Mảng sắp xếp tăng dần : ", arrAfterSortAscending);
}
sortAscendiing(arr);
