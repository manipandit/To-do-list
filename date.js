
module.exports = getDate;
function getDate(){
    let today=new Date();
let currday=today.getDay();
var day="";

let options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day=today.toLocaleDateString("en-US",options);

return day;
}