const maxChars = 140;

const characterCounter = document.getElementById('#maxChars');

function countChar(val) {
  const len = val.value.length;
    $('#maxChars').text(maxChars - len);
    if (len >= maxChars) {
      $('#maxChars').css("color", "red");
    } else {
      $('#maxChars').css("color", "wheat");
    }
} 
