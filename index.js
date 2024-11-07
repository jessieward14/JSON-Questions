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

const counts=[];

for (let f=0;f<unique.length;f++){

let count3=0;
for(let k=0;k<data.length;k++){
    if(unique[f]==data[k].category){
    count3=count3+1;
}
}

counts.push(count3);}
console.log(counts);




    
    // Initialize maximum element
    let connection = 0; 
    let max = counts[0]; 

    // Traverse array elements  
    // from second and compare 
    // every element with current max  
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] > max) {
            max = counts[i]; 
            connection = i;
        }
    } 
    console.log(max);
    console.log(connection);
    console.log(unique[connection]);

//Most owned author

const author =[];

  for(let x = 0; x< data.length; x++){
        author.push(data[x].author);
  }
console.log(author);

let unique2 = [];
  let count5 =0;
  let start3 = false;

  for (let j = 0; j < author.length; j++) {
    for (let k = 0; k < unique2.length; k++) {
        if (author[j] == unique2[k]) {
            start3 = true;
        }
    }
    count5++;
    if (count5 == 1 && start3 == false) {
        unique2.push(author[j]);
    }
    start3 = false;
    count5 = 0;
}

console.log(unique2.length);
console.log(author.length);


const counts2=[];

for (let f=0;f<unique2.length;f++){

let count6=0;
for(let k=0;k<data.length;k++){
    if(unique2[f]==data[k].author){
    count6=count6+1;
}
}

counts2.push(count6);}
console.log(counts2);


    
let connection2 = 0; 
let max2 = counts2[0]; 

// Traverse array elements  
// from second and compare 
// every element with current max  
for (let i = 1; i < counts2.length; i++) {
    if (counts2[i] > max2) {
        max2 = counts2[i]; 
        connection2 = i;
    }
} 
console.log(max2);
console.log(connection2);
console.log(unique2[connection2]);

//find cool stat