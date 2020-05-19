function Hello(name) {
    console.log("Hello " + name)
}
Hello("Themba")

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(evenOrOdd(11))

function drawsquare(num) {
    str = "#"
    strRow = str.repeat(num) + "\n"
    return strRow.repeat(num);
}
console.log(drawsquare(4))

function rightAngleTriangle(num) {
    for (let i = 1; i < num + 1; i++) {
        str = "#"
        strRow = str.repeat(i)
        console.log(strRow)
    }
}
rightAngleTriangle(4)

function isosceles(num) {
    var ary = []
    for (let i = 0; num > ary.length; i++) {
        if (i % 2 != 0) {
            ary.push(i)
        }
    }
    hash = "#"
    space = " "
    for (let i = 0; i < ary.length; i++) {
        invisiblespace = ary.length - i
        isoscelesline = space.repeat(invisiblespace)
        hashrepeat = hash.repeat(ary[i])
        console.log(isoscelesline + hashrepeat + isoscelesline)
    }
}
isosceles(4)

var longest = ["the", "quick", "brown", "fox", "ate", "my"]
function longestString(array) {
    var longString = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longString.length) {
            longString = array[i]
        } else if (array[i].length == longString.length) {
            longString += ("\n" + array[i])
        }
    }
    return longString
}
console.log(longestString(longest))

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

var frame = (["Write", "good", "code", "every", "day"])
function frameWithText(array) {
    hash = "*"
    space = " "
    var longString = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longString.length) {
            longString = array[i].length
        }
    }
    var addedLength = longString + 4
    console.log(hash.repeat(addedLength))
    for (let i = 0; i < array.length; i++) {
        invisiblespace = longString - array[i].length + 1
        hashspace = space.repeat(invisiblespace) + hash
        spacehash = hash + space
        console.log(spacehash + array[i] + hashspace)
    }
    console.log(hash.repeat(addedLength))
}
frameWithText(frame)