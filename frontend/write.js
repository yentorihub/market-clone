const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    // TRY해보고 오류나면 CATCH로 넘어가는 것
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") {
      window.location.pathname = "/"; // 성공하면 메인으로 돌아가기
    }
  } catch (error) {
    console.error("게시물 등록에 실패했습니다");
  }
};
const form = document.getElementById("write-form");

form.addEventListener("submit", handleSubmitForm);
