//Michaels awesome app by Michaels awesome app company

const fruitArr = ["apple", "banana", "mango", "blueberry"];

const printFruit = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "apple") {
            console.log(`I like ${arr[i]}s`);
        } else {
            console.log(`I dont like ${arr[i]}s`);
        }
    }
};

printFruit(fruitArr);