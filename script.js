const tweetForm = document.querySelector('.new-tweet form');
const feed = document.querySelector('.feed');
const notificationsIcon = document.querySelector('.fa-bell');
const notificationsDropdown = document.querySelector('.notifications-dropdown');

// Replace placeholders with actual data retrieval logic

// User data for profile page
const userTweets = []; // Array of tweet objects
const userFollowing = []; // Array of user objects
const userFollowers = []; // Array of user objects

// Friends data
const friends = []; // Array of user objects

// Messages data
const conversations = []; // Array of conversation objects

// Update profile page elements
const tweetCount = document.getElementById('tweetCount');
const followingCount = document.getElementById('followingCount');
const followerCount = document.getElementById('followerCount');

tweetCount.textContent = userTweets.length;
followingCount.textContent = userFollowing.length;
followerCount.textContent = userFollowers.length;

// Populate friends list
const friendsList = document.querySelector('.friends-list');
friendsList.innerHTML = friends.map(friend => `
  <div class="friend">
    <img src="friend1.png" alt="Friend 1">
    <p>@${friend.username}</p>
  </div>
`).join('');

// Populate conversations list
const conversationsList = document.querySelector('.conversations');
conversationsList.innerHTML = conversations.map(conversation => `
  <div class="conversation">
    <img src="friend1.png" alt="Friend 1">
    <p>${conversation.lastMessage.sender}: ${conversation.lastMessage.content}</p>
  </div>
`).join('');

// Tweet posting functionality (replace with actual tweet creation logic)
tweetForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const tweetContent = tweetForm.elements.tweet.value;

  // Create a new tweet object
  const newTweet = {
    content: tweetContent,
    // Add other tweet properties like timestamp, author, etc.
  };

  // Add the new tweet to the user's tweets array
  userTweets.push(newTweet);

  // Update the feed with the new tweet
  feed.innerHTML = `
    <div class="tweet">
      <img src="profile.png" alt="Profile Picture">
      <p>${tweetContent}</p>
    </div>
    ${feed.innerHTML}
  `;

  tweetForm.elements.tweet.value = '';
});

// Notifications dropdown functionality
notificationsIcon.addEventListener('click', () => {
  notificationsDropdown.classList.toggle('active');
});

// Replace placeholders in notifications with actual data (icons, messages, timestamps)
notificationsDropdown.innerHTML = `
  <p>New follower: @newfollowerusername</p>
  <p>Liked your tweet: @likerusername</p>
