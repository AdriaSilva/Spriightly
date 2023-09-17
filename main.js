var num = 25 * 60;



function startTime(){
    const element = document.getElementById("demo");
    state = 'counting';
    var x = setInterval(function() {
        num -= 1;
        var minutes = Math.floor(num/60);
        var seconds = num % 60;
    
        element.innerHTML = minutes + ":" + seconds;
        if (num < 0 || state == 'stopped'){
            stopTime(x);
        }
    }, 1000);
};

function stopTime(x){
    state = 'stopped';
    clearInterval(x);
    document.getElementById("demo").innerHTML = minutes + ":" + seconds ;
};

function breakTime(){
    var checkBox = document.getElementById("mySlider");
    if (checkBox.checked == true){
        num = 5 * 60
    }
    else{
        num = 15 * 60
    }
}
