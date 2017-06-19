// Show a weekday
//
// Write a function weekday(date) to find the weekday for a given Date object, returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.

const date = new Date(2017, 5, 19)
let day = date.getDay()
let name = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"][day]

weekday(date) // returns "Mon"
weekday(new Date(2017, 5, 15))
