let carArr = [
  { name: "BMW", color: "Red", capacity: 4 },
  { name: "Audi", color: "Green", capacity: 8 },
  { name: "BMW", color: "Blue", capacity: 6 },
  { name: "Merc", color: "Green", capacity: 4 },
];

let carBMW = [];
function listBMW(carArr) {
  if (carArr.name == "BMW") {
    carBMW.push(carArr);
  }
}
carArr.forEach(listBMW);
console.log("List car BMW is: ", carBMW);

let sum = 0;
function sumCarCapacities(carArr) {
  sum += carArr.capacity;
}
carArr.forEach(sumCarCapacities);
console.log("sum capacity is: ", sum);

let count = 0;
function countGreenCars(carArr) {
  if (carArr.color == "Green") {
    count++;
  }
}
carArr.forEach(countGreenCars);
console.log("số lượng xe màu Green là: ", count);

let max = carArr[0];
const findMaxCapacity = (carArr) => {
  if (carArr.capacity > max.capacity) {
    max = carArr;
  }
};
carArr.forEach(findMaxCapacity);
console.log("Car max capacity is: ", max);

function sortDescending() {
  let carArrAfterSort = carArr.sort((a, b) => {
    return a.capacity - b.capacity;
  });

  console.log("Sắp xếp tăng dần theo sức chứa: ", carArrAfterSort);
}
sortDescending(carArr);

function sortAscendiing(carArr) {
  let carArr2 = carArr.sort((a, b) => {
    return (result = b.name.localeCompare(a.name));
  });
  console.log(result);
  console.log("Sắp xếp giảm dần theo tên xe: ", carArr2);
}
sortAscendiing(carArr);
