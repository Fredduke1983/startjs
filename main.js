function filterArray(numbers, value) {
  // Change code below this line
 let newArr=[];
 for (let arrFilter of numbers){
   if (arrFilter > value){
     newArr.push(arrFilter);
   }
 }
  return console.log(newArr);


  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 2);
filterArray([12, 24, 8, 41, 76], 38);