
function some_Time(Time, d) {

    if (d === "Saturday" || d === "Sunday")  {

        if (Time > 8 && Time < 18) 
{
    return "shop is open"

} else {

    return "shop is closed"
};

} else if ( d !== "Saturday", "Sunday" && (Time > 6 && Time < 20)) {

    return "shop is open"

} else {

    return "shop is closed"
}
};

console.log(some_Time(14, "Sunday"));