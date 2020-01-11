const daysMap = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7
};

function Week(daysMap, day) {
    return daysMap[day] ? daysMap[day] : "error";
}
console.log(
    Week(daysMap, "Monday"),
    Week(daysMap, "Tuesday"),
    Week(daysMap, "Invalid")
);