let profileId = document.getElementById("ProfileId");
let profile = document.getElementById("profile");
let notificationId = document.getElementById("notificationId");
let notification = document.getElementById("notification");
profileId.addEventListener("mouseover", function () {
  profile.classList.toggle("hidden");
});

notificationId.addEventListener("mouseover", function () {
  notification.classList.toggle("hidden");
});
