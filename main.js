window.onload = function () {
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  if (loggedInUser) {
    document.getElementById("username-display").textContent = loggedInUser;
  } else {
    window.location.href = "index.html"; // 로그인하지 않은 경우 index.html로 리디렉션
  }

  document.getElementById("logout-btn").addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser"); // 세션 제거
    window.location.href = "index.html"; // 초기 화면으로 리디렉션
  });
};
