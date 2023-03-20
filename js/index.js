var hands = document.getElementsByClassName("hand");
var weekday = document.getElementsByClassName("weekday")[0];
var dayspan = weekday.getElementsByTagName("span")[0];
var weekspan = weekday.getElementsByTagName("span")[1];
var time = document.getElementsByClassName("time")[0];
var clock = function () {
    var timeNow = new Date();
    var day = timeNow.getDate();
    var week = timeNow.getDay();
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    dayspan.innerHTML = day;
    weekspan.innerHTML = weeks[week];

    var h = timeNow.getHours();
    var m = timeNow.getMinutes();
    var s = timeNow.getSeconds();
    time.innerHTML = format(h) + ":" + format(m) + ":" + format(s);

    var sRot = s * 6 - 90;
    hands[2].style.transform = "rotate(" + sRot + "deg)";
    var mRot = m * 6 + (s / 10) - 90;
    hands[1].style.transform = "rotate(" + mRot + "deg)";
    var hRot = h * 12 + (m / 2) - 90;
    hands[0].style.transform = "rotate(" + hRot + "deg)";

}
clock();
setInterval(clock, 1000);
function format(n) {
    return n > 9 ? n : ('0' + n);
}