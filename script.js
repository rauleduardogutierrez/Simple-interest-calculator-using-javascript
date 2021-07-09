function compute()
{
    var amountnumber = document.getElementById("amountnumber").value;

    if(amountnumber == "" || amountnumber < 0)
    {
        alert("Enter a positive number of amount");
        document.getElementById("amountnumber").focus();
        return;
    }

    var years = document.getElementById("years").value;

  
    var num = document.getElementById("num").value;
    var years = document.getElementById("years").value;
    var interest = amountnumber * years * num / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML =  "<br>If you deposit " + "<span class='highlight'>" + amountnumber + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + num + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}

function SliderValue()
{
    var slider = document.getElementById("num");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function()
    {
        output.innerHTML = this.value;
    }
}
