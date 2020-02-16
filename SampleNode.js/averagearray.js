var array = [90,98,89,100,100,86,94];

function averageArray(array) {
    var sum = 0;
    for (var i=0;i<array.length;i++)
    {
         sum = sum + array[i];
    }
    var avg = sum/array.length;
    return Math.round(avg);
}

console.log(averageArray(array));