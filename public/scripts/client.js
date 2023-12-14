/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function (tweets) {
  for (let tweet of tweets) { 
    let $renderedTweet = createTweetElement(tweet);
    $('#all-tweets').prepend($renderedTweet);
  };
};

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
                  <p>${tweet["created_at"]}</p>
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

renderTweets(tweetData);

const $form = $('#create-new-tweet');

$form.on('submit' , (event) => {
  event.preventDefault();

  const formData = $form.serialize();
  console.log(formData);
});