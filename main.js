function getCommonElements(array1, array2) {
    // Change code below this line
    const array3 = [];
    for (let temp of array1){
        if (array2.includes(temp)) {
            array3.push(temp);
        }
    }
    return console.log(array3);

    // Change code above this line
}
 console.log("Hello");
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([1, 2, 3], [10, 20, 30]);