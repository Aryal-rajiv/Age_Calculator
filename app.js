//challenge 1
function ageIndays()
{
var bYear = prompt('What is your birth year?');
var ageDays = (2022-bYear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageDays + ' days old.');
h1.setAttribute('id', 'ageDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageDays').remove();
}
