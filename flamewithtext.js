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