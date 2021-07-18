(function (startime = "Jul 16 2021 20:00:00 GMT+0530") { //accept from user
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const time_limit = ["0005","0010","0015","0030","0100","0200",""]
  
    let prev = new Date(startime).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              timer =  now - prev,
              timeLimit = ;
  
          document.getElementById("days").innerText = Math.floor(timer / (day)),
          document.getElementById("hours").innerText = Math.floor((timer % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((timer % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((timer % (minute)) / second);
  
          //do something later when date is reached
          console.log(timer,now,prev)
          if (timer < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Times up!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 1000)                    // total_time_limit 
}());
