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