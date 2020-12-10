function updateInventory(arr1, arr2) {
    let obj1 = arr1.reduce((acc, el)=>{
        acc[el[1]] = el[0]
        return acc
    },{})
    arr2.forEach(ele =>{
        if(obj1.hasOwnProperty(ele[1])){
            obj1[ele[1]] += ele[0]
        }else{
            obj1[ele[1]] = ele[0]
        }
    })
    let newArr = []
    for(let key in obj1){
        newArr.push([obj1[key], key])
    }
    return newArr.sort((x,y) =>{
        if(x[1].toUpperCase() < y[1].toUpperCase()){
            return -1
        }
        if(x[1].toUpperCase() > y[1].toUpperCase()){
            return 1
        }
        return 0
    })
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
