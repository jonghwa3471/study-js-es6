// Object Destructuring
const settings = {
  color: {
    theme: "dark",
  },
};

// 예전에 follow가 true인지 체크해야 할 때 사용한 방법

/* if (settings.notifications.follow) {
  // send email
} */

// 일단 보기에 좋지 않고, follow가 없든지, notifications가 통채로 없을 수도 있다.
// Destructuring을 사용한다.

const { notifications, notifications: { follow = false } = {} } = settings;
// notifications가 존재하지 않을 시 default로 {}를 주었다.

console.log(follow);
console.log(notifications);
console.log(settings);

// Array Destructuring
const days = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const [mon, tue, wed] = days();

console.log(mon, tue, wed);

// Rename
const settings2 = {
  color: {
    chosen_color: "dark",
  },
};

let chosenColor = "blue";

({
  color: { chosen_color: chosenColor = "light" },
} = settings2);

// Function Destructuting
// function saveSettings(followAlert, unfollowAlert, mrkAlert, themeColor) {}

function saveSettings({ notifications, color: { theme } }) {
  console.log(notifications, theme);
}

saveSettings({
  notifications: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: "green",
  },
});

// Value Shorthands

const follow2 = checkFollow();
const alert2 = checkAlert();

const settings3 = {
  notifications: {
    follow2,
    alert2,
  },
};
