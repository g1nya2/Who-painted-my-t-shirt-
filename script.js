document.getElementById("signup-btn").addEventListener("click", function () {
  document.getElementById("form-title").textContent = "회원가입";
  document.getElementById("submit-btn").textContent = "가입하기";
  document.getElementById("form-container").style.display = "block";
  document.getElementById("gender").style.display = "block";
  document.getElementById("region").style.display = "block";
  document.getElementById("message").textContent = "";
});

document.getElementById("login-btn").addEventListener("click", function () {
  document.getElementById("form-title").textContent = "로그인";
  document.getElementById("submit-btn").textContent = "로그인";
  document.getElementById("form-container").style.display = "block";
  document.getElementById("gender").style.display = "none";
  document.getElementById("region").style.display = "none";
  document.getElementById("message").textContent = "";
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (document.getElementById("form-title").textContent === "회원가입") {
    const gender = document.getElementById("gender").value;
    const region = document.getElementById("region").value;

    // 중복된 사용자 확인
    if (localStorage.getItem(username)) {
      document.getElementById("message").textContent =
        "이미 존재하는 사용자 이름입니다.";
      return;
    }

    // 비밀번호 중복 확인
    for (let i = 0; i < localStorage.length; i++) {
      const storedUser = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (storedUser.password === password) {
        document.getElementById("message").textContent =
          "비밀번호가 중복되었습니다.";
        return;
      }
    }

    // 사용자 데이터 저장
    const userData = {
      password: password,
      gender: gender,
      region: region,
    };
    localStorage.setItem(username, JSON.stringify(userData));
    alert("회원가입 되었습니다.");
    resetForm();
  } else if (document.getElementById("form-title").textContent === "로그인") {
    // 사용자 데이터 확인
    const storedData = JSON.parse(localStorage.getItem(username));
    if (storedData && storedData.password === password) {
      alert("로그인 되었습니다.");
      // 세션 저장
      sessionStorage.setItem("loggedInUser", username);
      window.location.href = "1.html";
    } else {
      document.getElementById("message").textContent =
        "로그인 실패: 사용자 이름 또는 비밀번호가 잘못되었습니다.";
    }
  }
});

function resetForm() {
  document.getElementById("form-container").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("region").value = "";
}
