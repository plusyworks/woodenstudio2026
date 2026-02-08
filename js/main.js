console.log("JavaScriptの動作確認");

// 処理に必要な要素の取得=================

// ハンバーガーメニューの要素をJavaScriptでHTMLから取得
// モバイルナビゲーションの要素をJavaScriptでHTMLから取得

// ここまで=============================




// 実行の処理===========================

// ハンバーガーメニューがクリックされた時の処理を設定
// モバイルナビゲーションにactiveクラスをつける

// ===================================

const hamburger = document.getElementById("hamburger")
console.log(hamburger);

const mobileNav = document.getElementById("mobile-nav")
console.log(mobileNav);

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    mobileNav.classList.toggle('active')
})

document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});


// gsap amnimation
// ヒーローエリア
const tl = gsap.timeline();
tl
  .to(".hero-container", {
    opacity: 1,
    duration: 0.8
  })
  .to(".hero__title", {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, "-=0.3");

// 商品ラインナップ
gsap.from(".product-link", {
  scrollTrigger: {
    trigger: ".product",
    start: "top 20%",
    markers: true
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out"
});


// 私たちの家具
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.about-contents').forEach((section) => {

  const image = section.querySelector('.about__img');
  const headline = section.querySelector('.about__headline');
  const texts = section.querySelectorAll('.about__text span');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });

  // 画像
  tl.fromTo(image,
    {
      scale: 1.05,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.6,
      ease: 'power3.out'
    }
  );

  // 見出し
  tl.fromTo(headline,
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    },
    '-=1.0'
  );

  // テキスト（行ごと）
  tl.fromTo(texts,
    {
      y: 20,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power2.out'
    },
    '-=0.6'
  );

});
