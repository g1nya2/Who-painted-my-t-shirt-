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

    // 새로운 모집글을 HTML로 추가
    const recruitItem = document.createElement("div");
    recruitItem.className = "recruit-item";
    recruitItem.innerHTML = `
      <div>
        <h3>${title}</h3>
        <p>${content}</p>
        <p class="participants">0/${maxPeople} 명</p>
      </div>
      <button class="join-btn">참여하기</button>
    `;

    // "참여하기" 버튼에 이벤트 추가
    recruitItem
      .querySelector(".join-btn")
      .addEventListener("click", function () {
        const participants = recruitItem.querySelector(".participants");
        let [current, max] = participants.innerText
          .split("/")
          .map((num) => parseInt(num));

        if (current < max) {
          current += 1;
          participants.innerText = `${current}/${max} 명`;
        } else {
          alert("최대 인원이 이미 찼습니다.");
        }
      });

    // 모집글 리스트에 추가
    document.getElementById("recruit-items").appendChild(recruitItem);

    // 입력 필드 초기화
    document.getElementById("title").value = "";
    document.getElementById("max-people").value = "";
    document.getElementById("content").value = "";
  });
