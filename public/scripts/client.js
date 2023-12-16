/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const createTweetElement = function (tweet) {
    let $tweet = $(`
    <article class ="tweet">
            <div class="tweet-box">
              <header>
                <div class="tweet-profile">
                  <img id="tweet-profile-pic"  src="${tweet["user"]["avatars"]}">
                  <p id="tweet-display-name">${tweet["user"]["name"]}</p>
                  <div class="tweet-username">
                    <p>${tweet["user"]["handle"]}</p>
                  </div>
                </div>
              </header>
                <p id="tweet-body">${tweet["content"]["text"]}</p>
                <hr>
                <footer>
                  <div class="tweet-age-share">
                    <p>${timeago.format(tweet["created_at"])}</p>
                    <div class="rep-share-like">
                      <p><i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i> </p>
                    </div>
                  </div>
                </footer>
            </div>
          </article>
    `)
    return $tweet;
  };
  
  const $section = $('#all-tweets');

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
    });
  };
  
  loadTweets();

  const $form = $('#create-new-tweet');
  
  $form.on('submit', function(event) {
  event.preventDefault();
  const textAreaValue = document.getElementById('tweet-text').value;
  const charLimit = 140;

  if (textAreaValue.trim() == '' || textAreaValue.trim == null) {
    alert("Cannot create empty tweets");
  } else if (textAreaValue.length > charLimit) {
    alert("Cannot tweet more than 140 characters.")
  } else {
      event.preventDefault();
      console.log('the form has submitted!');
      const formData = $form.serialize();
      $.ajax({
        method:'POST',
        url:'/tweets',
        data: formData
      }).then(() => {$form[0].reset()}).then(() => {loadTweets()});
  }
});
});