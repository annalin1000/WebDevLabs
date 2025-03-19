function greetingFunc() 
{
    let d = new Date();
    let h = d.getHours();
    message = "my name is Anna Lin"
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

function addYear()
{
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");

    if (E)
    {
        E.textContent = "© " + y + " Designed and coded by Anna Lin "
    }
}

function showList()
{
    let list = document.getElementById("funList");
    let button = document.getElementById("showListButton");

    list.style.display = "block";
    button.style.display = "none";
}

$(document).ready(function()
{
    $("#readMore").click(function()
    {
        $("#shortBio").hide();
        $("#fullBio").show();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function()
    {
        $("#shortBio").show();
        $("#fullBio").hide();
        $("#readMore").show();
        $("#readLess").hide();
    });
});


document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("contactForm").addEventListener("submit", function(event)
    {
        let isValid = true;

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let comment = document.getElementById("comment");

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let commentError = document.getElementById("commentError");

        nameError.textContent = "";
        emailError.textContent = "";
        commentError.textContent = "";

        if (!name.value.trim())
        {
            nameError.textContent = "Your name is required.";
            isValid = false
        }

        if (!email.value.trim())
            {
                lnameError.textContent = "Your email is required.";
                isValid = false
            }
        else if (!email.checkValidity())
        {
            emailError.textContent = "Please enter a valid email address";
            isValid = false;
        }

        if (!comment.value.trim())
        {
            commentError.textContent = "Please enter your message.";
            isValid = false;
        } 
        if (!isValid)
        {
            event.preventDefault();
        }
        else
        {
            alert("Form submitted successfully! Thank you and have a good day.")
            event.preventDefault();
        }
        
    });
});