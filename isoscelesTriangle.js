function isosceles(num) {
    var ary = []
    for (let i = 0; num > ary.length; i++) {
        if (i%2 !=0) {
            ary.push(i)
        }
    }
    hash = "#"
    space = " "
    for (let i = 0; i < ary.length; i++) {
        invisiblespace =ary.length-i
        isoscelesline = space.repeat(invisiblespace)
        hashrepeat = hash.repeat(ary[i])
        console.log(isoscelesline+hashrepeat+isoscelesline)
    }
}

isosceles(4)