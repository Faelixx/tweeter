const maxChars = 140;

// Counts remaining characters available in tweet box
function countChar(val) {
  const len = val.value.length;
    $('#maxChars').text(maxChars - len);
    if (len >= maxChars) {
      $('#maxChars').css("color", "red");
    } else {
      $('#maxChars').css("color", "wheat");
    }
} 
