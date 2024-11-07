import data from './rawBooks.json' assert { type: 'json' };
console.log(data[0].da);

//if ( data[])
//forEach function
//forEach
//filter to only ones read
// let timelength = data[x]['Date Read'];


// const validBooks = data.filter(data => 
//     typeof data.TimeOnTBRDays === 'number' && book.TimeOnTBRDays >= 0
//   );
  
// console.log(validBooks);
// console.log(averageTimeOnTBR);
// data.forEach((averageTimeOnTBR) => {console.log(averageTimeOnTBR>=0)});
//forEach(averageTimeOnTBR>=0)


var total =0;
let count= 0;

for(let x =0; x<data.length;x++){
    if (data[x]['Time on TBR (days)'] >= 0 && data[x]['Time on TBR (days)']<20000){
        total += data[x]['Time on TBR (days)'];
        count = count +1;
        //console.log(data[x]['Time on TBR (days)']);
       
    }
  //  console.log(Time);
}//
let avg = 0;
avg = total/count;
//console.log(avg);

//what % books have I read

let booksread = 0;
for( let i =0; i<data.length;i++){
    if(data[i]['read?'] == "Yes"){
        booksread=booksread +1;
    }
}
let percentage = booksread/data.length;
//console.log (percentage *100);


//favorite genre

//const uniqueArray = data.filtered (category) => 

const dadaCat =[];

  for(let x = 0; x< data.length; x++){
        dadaCat.push(data[x].category);
  }
  //console.log(dadaCat);
  
  let unique = [];
  let count2 =0;
  let start = false;

  for (let j = 0; j < dadaCat.length; j++) {
    for (let k = 0; k < unique.length; k++) {
        if (dadaCat[j] == unique[k]) {
            start = true;
        }
    }
    count++;
    if (count == 1 && start == false) {
        unique.push(dadaCat[j]);
    }
    start = false;
    count = 0;
}

console.log(unique);
//console.log(total);



//console.log(data[x]['Time on TBR (days)'])

// const validDays = books
//     .map(book => book["Time on TBR (days)"])
//     .filter(days => typeof days === "number");

// // Calculate the average if there are valid entries
// if (validDays.length > 0) {
//     const averageTimeOnTBR = validDays.reduce((sum, days) => sum + days, 0) / validDays.length;
//     console.log("Average Time on TBR (days):", averageTimeOnTBR);
// } else {
//     console.log("No valid data for Time on TBR.");
// }


// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));