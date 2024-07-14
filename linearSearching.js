function indexFounder (arr, arg) {
    let position = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arg == arr[i]) {
            position = i + 1;
            break;
        }
    }
    return position;
}
console.log(indexFounder([1, 3, 5 , 7, 9], 2));