let x = 5;
let y = 7;
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
        if (item == "Banana" && array == L1)
        {
            alert(`We found a banana in the first array`);
        }
        if (item == "Banana" && array == L2)
            {
                alert(`We found a banana in the second array`);
            }
    });
}
findTheBananaForEach(L1);
findTheBananaForEach(L2);

function greetingFunc() 
{
    let d = new Date();
    let h = d.getHours();
    message = "My Name is Anna Lin"
    if (h < 12)
    {
        console.log("Good Morning");
        message = "Good Morning, " + message
    }
    else if (h >= 12 && h < 18)
    {
        console.log("Good afternoon");
        message = "Good Afternoon, " + message

    }
    else if (h >= 18 && h < 20)
    {
        console.log("Good evening");
        message = "Good Evening, " + message
    }
    else
    {
        console.log("Good night")
        message = "Good Night, " + message

    }
    document.getElementById("greeting").textContent = message;
}
greetingFunc();

function addYear() {
    var d = newDate();
    var y = d.getFullYear;
    var E = document.getElementById("copyYear");
    
}