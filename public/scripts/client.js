/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  // Used to disable any XSS in create new tweet field.
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Create new tweet
  const createTweetElement = function (tweet) {
    let $tweet = $(`
    <article class ="tweet">
            <div class="tweet-box">
              <header>
                <div class="tweet-profile">
                  <img class="tweet-profile-pic"  src="${escape(tweet["user"]["avatars"])}">
                  <p class="tweet-display-name">${escape(tweet["user"]["name"])}</p>
                  <div class="tweet-username">
                    <p>${escape(tweet["user"]["handle"])}</p>
                  </div>
                </div>
              </header>
                <p class="tweet-body">${escape(tweet["content"]["text"])}</p>
                <hr class="tweet-box-line">
                <footer>
                  <div class="tweet-age-share">
                    <p>${escape(timeago.format(tweet["created_at"]))}</p>
                    <div class="rep-share-like">
                      <p><i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i> </p>
                    </div>
                  </div>
                </footer>
            </div>
          </article>
    `);
    return $tweet;
  };
  
  const $section = $('#all-tweets');

  // Show all tweets
  const renderTweets = function (tweets) {
    $section.empty();
    for (let tweet of tweets) { 
      let $renderedTweet = createTweetElement(tweet);
      $('#all-tweets').prepend($renderedTweet);
    };
  };

  const loadTweets = function () {
    $.ajax({
      method: 'GET',
      url:'/tweets',
    }).then(function (renderedTweets) {
      console.log('Success: ', renderedTweets);
      renderTweets(renderedTweets);
    })
    .catch((err) => { console.log(err); alert(err)} ); 
  };
  
  loadTweets();

  const $form = $('.create-new-tweet');

  const showError = function(errorElement, errorMessage) {
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
  };
  
  const clearError = () => {
    let errors = document.querySelectorAll(".error");
    for (let error of errors) {
      error.classList.remove("display-error");
    };
  }; 

  $form.on('submit', function(event) {
  
  event.preventDefault();
  clearError();
  const textAreaValue = document.getElementById('tweet-text').value;
  const charLimit = 140;

  if (textAreaValue.trim() == '' || textAreaValue.trim() == null) {
    showError("tweet-empty", "⚠️Cannot create empty tweets!" );
  } else if (textAreaValue.length > charLimit) {
    showError("tweet-tooLong", "🚫Tweets cannot exceed 140 characters.");
  } else {
      event.preventDefault();
      console.log('the form has submitted!');
      const formData = $form.serialize();
      $.ajax({
        method:'POST',
        url:'/tweets',
        data: formData
      }).then(() => {$form[0].reset()}).then(() => {loadTweets()}).catch((err) => { console.log(err); alert(err) });
  }
});
});