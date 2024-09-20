window.onload = function () {
  // 로컬스토리지에서 모집글 목록을 불러와 화면에 표시
  const recruitItems = JSON.parse(localStorage.getItem("recruitItems")) || [];

  const recruitList = document.getElementById("recruit-items");

  // 모집글이 존재하는지 확인
  if (recruitItems.length === 0) {
      recruitList.innerHTML = "<p>모집글이 없습니다. 새로운 모집글을 등록하세요.</p>";
  } else {
      recruitItems.forEach((item, index) => {
          const recruitItem = document.createElement("div");
          recruitItem.className = "recruit-item";
          recruitItem.innerHTML = `
              <div>
                  <h3>${item.title}</h3>
                  <p>${item.content}</p>
                  <p class="participants">${item.currentPeople}/${item.maxPeople} 명</p>
              </div>
              <button class="join-btn" data-index="${index}">참여하기</button>
          `;

          // "참여하기" 버튼 이벤트 추가
          recruitItem.querySelector(".join-btn").addEventListener("click", function () {
              let currentPeople = recruitItems[index].currentPeople;
              const maxPeople = recruitItems[index].maxPeople;

              if (currentPeople < maxPeople) {
                  recruitItems[index].currentPeople += 1;
                  localStorage.setItem("recruitItems", JSON.stringify(recruitItems));
                  this.parentElement.querySelector(
                      ".participants"
                  ).innerText = `${recruitItems[index].currentPeople}/${maxPeople} 명`;
              } else {
                  alert("최대 인원이 찼습니다.");
              }
          });

          recruitList.appendChild(recruitItem);
      });
  }
};