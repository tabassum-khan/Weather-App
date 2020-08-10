$(document).ready(function(){

    //display todays date
    let now = new Date();
    $('.location .date').text(dateBuilder(now));

    //prevent form from being automatically submitted by the browser
    $("#search").submit(function(e){
        e.preventDefault();
    });

    $(".search-box").keypress(function(event){
        console.log("Keypress event called");

        //if 'Enter' key is pressed, then call ajaxGet function
        if(event.keyCode === 13){
            ajaxGet();
        }
    });

});

//Access openweather api through Ajax
function ajaxGet(){

    //Collecting data required for the url of the api
    var id = "76c8e84c0ba04c8599209688113adff5"; //id given by openweatherorg
    var city = $(".search-box").val();
    console.log("City entered: " + city);
    var units = "metric";

    //base address of the openweatherorg api
    var base = "https://api.openweathermap.org/";

    //AJAX call
    $.ajax({
        type : "GET",
        url: base + "data/2.5/weather?q="+ city +"&appid="+ id +"&units=" + units,

        success :function(res){
            displayResults(res);
        }, //receive the response from the api and handle it accordingly

        error : function(e){
            displayError(e);
        }
    });
}

function displayResults(res){
    var city = res.name;
    var country = res.sys.country;

    var temp = Math.round(res.main.temp);
    var min_temp = Math.round(res.main.temp_min);
    var max_temp = Math.round(res.main.temp_max);
    var temp_desc = res.weather[0].main;

    var icon = res.weather[0].icon;
    var img_url = "https://openweathermap.org/img/wn/" + icon  + "@2x.png";

    //Resetting values
    $(".city").text(city + ", " + country);
    
    $('.current .temp').html(temp + "<span>°c</span>");

    $(".weather .description").text(temp_desc);

    $(".weather .icon").attr("src", img_url);

    $(".current .hi-low").text(min_temp + "°c / " + max_temp + "°c");
}

function displayError(e){
    console.log("Error: " + e);
}

//Customised Date Builder 
function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }