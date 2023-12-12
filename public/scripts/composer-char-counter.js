const maxChars = 140;

function countChar(val) {
  const len = val.value.length;
    $('#maxChars').text(maxChars - len);
    if (len >= maxChars) {
      $('#maxChars').attr("color", "red");
    } else {
      $('#maxChars').attr("color", "rgb(55, 237, 191)");
    }
} 

  $(document).ready(function() {
    
  });
