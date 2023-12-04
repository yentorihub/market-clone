<script>
  export let location;

  const moveToHome = () => {
    window.location.hash = "/";
  };
  //   function moveToHome{
  //     window.location.hash = "/";
  //   };

  const moveToMyPage = () => {
    window.location.hash = "/my";
  };
</script>

<footer>
  <div class="footer-block">
    <div class="footer-icons">
      <button class="footer-icons__img" on:click={moveToHome}>
        {#if location === "home"}
          <img src="assets/home.svg" alt="homeicon" />
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        {/if}
      </button>
      <div>홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/doc.svg" alt="docicon" />
      </div>
      <div>동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/location.svg" alt="location" />
      </div>
      <div>내 근처</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/chat.svg" alt="chaticon" />
      </div>
      <div>채팅</div>
    </div>
    <button class="footer-icons" on:click={moveToMyPage}>
      <div class="footer-icons__img">
        <img src="assets/user.svg" alt="usericon" />
      </div>
      <div>나의 당근</div>
    </button>
  </div>
</footer>
