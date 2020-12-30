function x () {
    console.log("werwe")
}

const x = (y) => console.log(y)


x()

if(x == 5) {
    console.log("y")
}

function test ( x , t , ...y ) {
    console.log(x , t , ...y )
}

test(1,2,3,4,5)