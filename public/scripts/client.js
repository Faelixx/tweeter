/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData =  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

const createTweetElement = function () {
  const result = $(`
  <article class ="tweet">
          <div class="tweet-box">
            <header>
              <div class="tweet-profile">
                <img id="tweet-profile-pic"  src="${tweetData["user"]["avatars"]}">
                <p id="tweet-display-name">${tweetData["user"]["name"]}</p>
                <div class="tweet-username">
                  <p>${tweetData["user"]["handle"]}</p>
                </div>
              </div>
            </header>
              <p id="tweet-body">${tweetData["content"]["text"]}</p>
              <hr>
              <footer>
                <div class="tweet-age-share">
                  <p>${tweetData["created_at"]}</p>
                  <div class="rep-share-like">
                    <p><i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i> </p>
                  </div>
                </div>
              </footer>
          </div>
        </article>
  `)
  return result;
};

const $tweet = createTweetElement(tweetData);

console.log($tweet);

$('#all-tweets').append($tweet);