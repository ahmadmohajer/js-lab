let res = prompt("what is your temperature now!");
function temperature(res) {

    return (res - 32) * 5 / 9;

}
console.log(temperature(res));