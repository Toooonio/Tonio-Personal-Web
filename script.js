const entries = [
  { kicker: 'A SMALL WIN', text: '今天广告跑好了。', detail: '不是每一次努力都会立刻有声音，但这一次，数据刚好给了回应。', mood: 'GOOD SIGNAL' },
  { kicker: 'NOT THE DAY', text: '今天广告跑坏了。', detail: '先关掉情绪，去看数据。问题还在，答案也大概在里面。', mood: 'RESET' },
  { kicker: 'AFTER READING', text: '今天看完一本书。', detail: '合上书的时候，脑子里多了一个还没完全想明白的问题。', mood: 'BOOK' , scene: 'book' },
  { kicker: 'A FAMILIAR FACE', text: '今天遇见前同事。', detail: '聊了几句近况，发现大家都在往自己的方向走。', mood: 'CONNECTION' },
  { kicker: 'MAKE SOMETHING', text: '今天做出一个 AI。', detail: '它还不完美，但从想到做到，永远值得记一笔。', mood: 'BUILD' },
  { kicker: 'JUST A DAY', text: '今天什么都没发生。', detail: '但也没有关系。日子有时候就是该留一点空白。', mood: 'PAUSE' },
  { kicker: 'RAIN CHECK', text: '今天下雨。', detail: '街道慢下来一点，我也允许自己发一会儿呆。', mood: 'RAIN', scene: 'rain' },
  { kicker: 'PICKUP GAME', text: '今天打球输了。', detail: '跑到最后还是会累，但下一次还是想上场。', mood: 'KEEP MOVING' },
  { kicker: 'LOW ELO', text: '今天游戏掉分。', detail: '有些局赢不了，有些事也一样。明天再开。', mood: 'TRY AGAIN' },
  { kicker: 'A LINE ARRIVED', text: '今天突然想到一句歌词。', detail: '赶紧记下来，怕它和很多好想法一样，转身就不见。', mood: 'RHYTHM' }
];

const card = document.querySelector('#journal-card');
const kicker = document.querySelector('#journal-kicker');
const text = document.querySelector('#journal-text');
const detail = document.querySelector('#journal-detail');
const mood = document.querySelector('#journal-mood');
const shuffle = document.querySelector('#shuffle-journal');
let previousIndex = -1;

function pickEntry() {
  let nextIndex = Math.floor(Math.random() * entries.length);
  if (entries.length > 1) while (nextIndex === previousIndex) nextIndex = Math.floor(Math.random() * entries.length);
  previousIndex = nextIndex;
  const entry = entries[nextIndex];
  document.body.classList.toggle('is-rain', entry.scene === 'rain');
  card.classList.toggle('is-book', entry.scene === 'book');
  card.style.transform = 'translateY(8px) rotate(-.35deg)';
  setTimeout(() => {
    kicker.textContent = entry.kicker;
    text.textContent = entry.text;
    detail.textContent = entry.detail;
    mood.textContent = entry.mood;
    card.style.transform = 'translateY(0) rotate(0)';
  }, 150);
}

shuffle.addEventListener('click', pickEntry);
pickEntry();

const hour = new Date().getHours();
if (hour >= 19 || hour < 6) document.body.classList.add('is-night');
