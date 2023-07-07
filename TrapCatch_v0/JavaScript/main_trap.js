'use strict'

// HTML要素の取得
const textBox = document.getElementById('textBox');
const goalButton = document.getElementById('goal');
const trapcount = document.getElementById('trapcount');
const catchButton = document.getElementById('catch');
const msg = document.getElementById('msg');

let count = 0; // 初期回数
let goalValue = 0; // 目標の初期値

// 目標と回数を表示する関数
function updateDisplay() {
  msg.textContent = `${count} / ${goalValue}`;
}

// 初期表示を行う
updateDisplay();

// 「目標」ボタンがクリックされたときの処理
goalButton.addEventListener('click', function() {
  goalValue = textBox.value; // 入力された目標値の取得
  // 目標と回数を表示
  updateDisplay();
});

// 「回数」ボタンがクリックされたときの処理
catchButton.addEventListener('click', function() {
  const trapcountValue = parseInt(trapcount.value); // 入力された回数の取得（数値に変換）
  count += trapcountValue; // 回数の加算
  // 目標と回数を表示
  updateDisplay();
});

// テキストボックスでEnterキーが押されたときの処理
textBox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのEnterキーの挙動を無効化
    goalValue = textBox.value; // 入力された目標値の取得
    // 目標と回数を表示
    updateDisplay();
  }
});

// 数値入力欄でEnterキーが押されたときの処理
trapcount.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのEnterキーの挙動を無効化
    const trapcountValue = parseInt(trapcount.value); // 入力された回数の取得（数値に変換）
    count += trapcountValue; // 回数の加算
    // 目標と回数を表示
    updateDisplay();
  }
});
