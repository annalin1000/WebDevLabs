let x = 5;
let x = 7;
let z = x + y;
console.log(z);

let A = "Hello "
let B = "world!"
let C = A + B;
console.log(C)

function SumNPrint(x1, x2) 
{
    let x3 = x1 + x2;
    console.log(x3);
}
SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) 
{
    console.log(C);
}
else if (C.length < z) 
{
    console.log(z);
}
else 
{
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array) 
// {
//     for (let i = 0; i < array.length; i++)
//     {
//         if (array[i] == "Banana")
//         {
//             alert("found the Banana in ${i}!");
//         }
//     }
// }

function findTheBananaForEach(array) 
{
    array.forEach(item =>
    {
        if (item == "Banana")
        {
            alert("We found a banana in the ${i} array");
        }
    });
}
findTheBananaForEach(L1);
findTheBananaForEach(L2);

function greetingFunc() 
{
    let d = new Date();
    let h = d.getHours();

    if (h < 12)
    {
        console.log("Good Morning");
    }
    else if (h >= 12 && h < 18)
    {
        console.log("Good afternoon");
    }
    else if (h >= 18 && h < 20)
    {
        console.log("Good evening");
    }
    else if (h >= 20 && h < 24) || (h >= 0 && h < 5)
    {
        console.log("Good night")
    }
    document.getElementById("greeting").textContent = message;
}
greetingFunc();