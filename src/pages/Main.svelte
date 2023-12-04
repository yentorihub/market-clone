<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import { getDatabase, ref, onValue } from "firebase/database";

  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  $: items = [];

  const calcTime = (timestamp) => {
    const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
    const time = new Date(curTime - timestamp);
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    if (hour > 0) return ` ${hour} 시간 전`;
    else if (min > 0) return ` ${min}분 전`;
    else if (sec > 0) return ` ${sec}초 전`;
    else "방금 전";
  };

  const db = getDatabase();
  const itemsRef = ref(db, "items/");
  onMount(() => {
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
    });
  });
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="chart-bar" />
      <img src="assets/wifi.svg" alt="wifi" />
      <img src="assets/battery.svg" alt="battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>역삼1동</div>
      <div class="menu-bar__location-icon">
        <img src="assets/arrow-down.svg" alt="arrow-down" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="assets/search.svg" alt="돋보기" />
      <img src="assets/bars-3.svg" alt="bar" />
      <img src="assets/alert.svg" alt="bell" />
    </div>
  </div>
</header>

<main>
  {#each items as item}
    <div class="item-list">
      <div class="item-list__img">
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">{item.title}</div>
        <div class="item-list__info-price">{item.price}</div>
        <div class="item-list__info-meta">
          {item.place}
          {calcTime(item.insertAt)}
        </div>
        <div>{item.description}</div>
      </div>
    </div>
  {/each}
  <!-- <div class="items-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="imgerror" />
      </div>

      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>

    <div class="items-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="imgerror" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="items-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="imgerror" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="items-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="imgerror" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="items-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="imgerror" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="items-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="imgerror" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div> -->
  <a class="write-btn" href="/#/write">+ 글쓰기</a>
</main>
<Footer location="home" />

<div class="media-info-msg">화면 사이즈를 줄여주세요.</div>
