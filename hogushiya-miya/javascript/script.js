// ===================== スライドショーの制御 ===================== //
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
    });
}

function nextSlide(event) {
    event.preventDefault();
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide(event) {
    event.preventDefault();
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// 自動スライドショー（10秒ごと）
function startSlideshow() {
    slideInterval = setInterval(() => {
        nextSlide(new Event("dummy"));
    }, 10000);
}

// スライドショーの初期化
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
    startSlideshow();
});

// ===================== LINE QRコードモーダル ===================== //
function openModal(event) {
    event.preventDefault();
    document.getElementById('qr-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('qr-modal').style.display = 'none';
}

// 外側クリックで閉じる
window.onclick = function(event) {
    const modal = document.getElementById('qr-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// ===================== ナビゲーションの動的制御 ===================== //
// ヘッダーの固定時のスタイル変更（スクロール時の影付け）
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    } else {
        header.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    }
});

// ===================== スマホナビゲーションの開閉（オプション） ===================== //
// ハンバーガーメニューの開閉処理
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript が読み込まれました！");

    setTimeout(() => { // 100ms 遅らせて確実に取得
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.querySelector(".nav-center");

        console.log("menuToggle:", menuToggle);
        console.log("navMenu:", navMenu);

        if (!menuToggle) {
            console.error("⚠️ menuToggle が見つかりません！（JavaScript が正しく読み込まれていない？）");
            return;
        }

        if (!navMenu) {
            console.error("⚠️ navMenu が見つかりません！（HTML に誤りがある？）");
            return;
        }

        console.log("✅ menuToggle にクリックイベントを設定します！");

        function toggleMenu(event) {
            event.preventDefault();
            const nav = document.querySelector('.nav-center');
            nav.classList.toggle('active');
            console.log("メニューが開閉されました！", nav.classList);
        }

        // `click` イベントを追加
        menuToggle.addEventListener("click", toggleMenu);
        menuToggle.addEventListener("touchstart", toggleMenu);

        console.log("✅ menuToggle にクリックイベントが設定されました！");
    }, 100); // 100ms 遅延させて DOM の準備を確実にする
});



// ===================== よくある質問（オプション） ===================== //
// よくある質問の折りたたみ機能（アコーディオン）
document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 現在のボタンの直後の「.faq-answer」を取得
            const answer = this.nextElementSibling;

            // 開閉処理
            if (answer.style.display === "block") {
                answer.style.display = "none";
                this.classList.remove("active");
            } else {
                answer.style.display = "block";
                this.classList.add("active");
            }
        });
    });
});
