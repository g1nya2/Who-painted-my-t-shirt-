// 모집글 등록 버튼 클릭 시 로컬스토리지에 저장하고 목록 페이지로 이동
document
  .getElementById("register-button")
  .addEventListener("click", function () {
    const title = document.getElementById("title").value;
    const maxPeople = document.getElementById("max-people").value;
    const content = document.getElementById("content").value;

    if (title === "" || maxPeople === "" || content === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 기존 저장된 목록을 불러오고, 새로운 글을 추가
    let recruitItems = JSON.parse(localStorage.getItem("recruitItems")) || [];
    recruitItems.push({ title, maxPeople, content, currentPeople: 0 });

    // 로컬스토리지에 다시 저장
    localStorage.setItem("recruitItems", JSON.stringify(recruitItems));

    // 등록 후 모집글 목록 페이지로 이동
    window.location.href = "recruit-list.html";
  });
