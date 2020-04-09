let cars = (["Mercedes", "BMW", "Porche", "Koenigsegg"])
let food = (["Eggs", "Burger", "Pizza", "Chocolate"])

function AddArray(array1, array2) {
    var combinedArray = [];
    array1.forEach((item, index) => {
        combinedArray.push(item)
        combinedArray.push(array2[index])
    });
    return combinedArray;
}

console.log(AddArray(cars, food))