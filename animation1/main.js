// 要素の取得
let imagesItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

// 監視対象になった瞬間、activeを付加する関数
let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}

// オプションをつける
let options = {
  rootMargin: "0px",
  // 閾値
  threshold: 0.5,
};

// どこにいるのか監視＆特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

// 画像の表示（img-wrapは偶数と奇数で出現する場所が異なる）
imagesItems.map((item, index) => {
  console.log(item);
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
  index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
  // 監視する
  observer.observe(item);
});

// CrossScrollの表示
titles.map((title, index) => {
  index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
  // 監視する
  observer.observe(title);
})