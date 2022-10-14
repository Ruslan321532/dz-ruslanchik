let star = ""
for (let i = 0; i < 7; i++) {
  star += "*"
  console.log(star);
}

///////---dis//////

for (let i = 1; i < 102; i++) {
    if (i % 15 == 0) {
        console.log("fizzBuzz");
    }else if( i % 3 == 0 ) { 
        console.log("Fizz");
    }else if(i % 5 == 0) {
        console.log("Buzz"); 
    }else
     console.log(i);
}


/////////22222///////

function ChessBoard() {
    const limit = 8
    return Array.from(Array(limit).keys())
        .reduce((acc, _, index) => {
          let result = ''
          if (index % 2 !== 0) {
            result += ' #'.repeat(limit / 1)
          } else {
            result += '# '.repeat(limit / 1)
          }
          return acc + result + '\n'
     }, '')
    }
    
    console.log(ChessBoard());