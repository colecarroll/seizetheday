var form = document.getElementById('birthDate');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  //users DOB
  var input = (event.target.elements[0].value);
  console.log(input);

  function getTimeRemaining(input) {
    var t = Date.parse(new Date()) - Date.parse(input);
    var seconds = Math.floor( (t/1000) % 60 );
    //31536000 seconds in a year, times 85 years
    var secondsExpectancy = 2680560000 - seconds;

    var minutes = Math.floor( (t/1000/60) % 60 );
    //525600 minutes in a year, times 85 years
    var minutesExpectancy = 44676000 - minutes;

    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    //8760 hours in a year, times 85 years
    var hoursExpectancy = 744600 - hours;

    var days = Math.floor( t/(1000*60*60*24) );
    //365 * 85
    var daysExpectancy = 31025 - days;

    var weeks = Math.floor(days/ 7)
    //52 * 85
    var weeksExpectancy = 4420 - weeks;

    var years = Math.floor(days/365)
    var yearsExpectancy= 85 - years;

    var months = Math.floor(years/12)
    //12 * 85
    var monthsExpectancy = 1020 - months;

    var el = document.getElementById('yearsLeft');
    el.innerText = yearsExpectancy;

    return {
    'months': monthsExpectancy,
    'weeks': weeksExpectancy,
    'days': daysExpectancy,
    'hours': hoursExpectancy,
    'minutes': minutesExpectancy,
    'seconds': secondsExpectancy
    };
  }
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var timeinterval = setInterval(function(){
        var t = getTimeRemaining(input);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
                          'hours: '+ t.hours + '<br>' +
                        'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
        if(t.total<=0){
          clearInterval(timeinterval);
        }
      },1000);
    }
})
