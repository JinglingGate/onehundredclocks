$(document).ready(function() {
  setTime()
})
function setTime() {
  time = new Date;
  hours = time.getHours();
  hours_12 = hours >= 12 ? hours - 12 : (hours == 0 ? 12 : hours)
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  milliseconds_since_1970 = time.getSeconds();
  $(".hours_24_text").html(hours);
  $(".hours_12_text").html(hours_12);
  $(".minutes_text").html(minutes);
  $(".seconds_text").html(seconds);
  $(".am_pm").html(hours >= 12 ? "PM" : "AM");
  $(".hour_line").css('transform', 'rotate('+(hours_12)*30+'deg)');
  $(".smooth_hour_line").css('transform', 'rotate('+((hours_12)*3600 + minutes*60 + seconds)*360/43200+'deg)');
  $(".smooth_24_hour_line").css('transform', 'rotate('+((hours)*3600 + minutes*60 + seconds)*360/86400+'deg)');
  $(".minute_line").css('transform', 'rotate('+minutes*6+'deg)');
  $(".rotating_clock").css('transform', 'rotate('+ -1*((hours_12)*3600 + minutes*60 + seconds)*360/43200+'deg)');
}
setInterval(setTime,1000);
