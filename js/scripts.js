//Backend Logic

function withoutVowels(string) {
  var strWithoutVowels =  [];
  string = string.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) < 0) {

    strWithoutVowels.push(string[i])
    }
  }
  strWithoutVowels = strWithoutVowels.join('-');
  return strWithoutVowels;

}

console.log('Hola')

//FE logic
$(document).ready(function () {
  $("#enter form").submit(function (event) {
      var result = $("input#answer").val();

// console.log(result);

$("#result").show();
$("#result").text(withoutVowels(result));

event.preventDefault();
  });
});
