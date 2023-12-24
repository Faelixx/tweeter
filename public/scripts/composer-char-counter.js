const maxChars = 140;

const createCharCounter = function() {
  const charCounter = document.createElement('output');
  charCounter.setAttribute('name', 'counter');
  charCounter.setAttribute('class', 'counter');
  charCounter.setAttribute('for', 'tweet-text');
  charCounter.setAttribute('id', 'maxChars');

  charCounter.textContent = maxChars;

  const tweetCharCountDiv = document.querySelector('.tweet-charCount');
  tweetCharCountDiv.appendChild(charCounter);
};

createCharCounter();

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
