const numberArray = [1,2,3,4,5,6,7,8,9]
let numberArrayCopy = [...numberArray]

window.onload = function(){
    createGrid(numberArray);
};
//ceate element from array
createGrid =(array)=>{
    let gridElement = document.getElementById('shuffleGrid');
    gridElement.innerHTML = ''
    array && array.forEach((item,i) => {
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.innerHTML = `${item}`;
        div.classList = `counter grid-${i+1}`;
        div.append(span);
        gridElement.append(div);
    });
};
//Shuffle the array
shuffleGrid =(array)=>{
    let arrayLength = array.length;
    let random;
    while (arrayLength != 0) {
        random = Math.floor(Math.random() * arrayLength);
        arrayLength--;
        [array[arrayLength], array[random]] = [array[random], array[arrayLength]];
    }
    createGrid(array);
}
//on shuffle button click
onClickShauffle =()=>{
    shuffleGrid(numberArrayCopy);
}
//on sort button click
onClickSort =() => {
    createGrid(numberArray);
}