// 1. 캐릭터 배열 (총 9명)
const characters = [
  "문동은", "주여정", "박연진", "강현남", "전재준",
  "하도영", "이사라", "최혜정", "손명오"
];


// 2. 점수판 초기화
let scores = Array(characters.length).fill(0);

// 3. 선택지에 따른 캐릭터 점수 분배표
const scoreTable = [
  [0, 1, 3, 5, 4], [0, 2, 6, 8, 3], [0, 1, 6, 3, 5], [0, 5, 2, 8, 6], [0, 1, 6, 3, 5],
  [3, 1, 0, 5, 8], [0, 1, 6, 3, 4], [0, 1, 6, 3, 5], [6, 1, 0, 3, 5], [0, 1, 6, 3, 2],
  [0, 1, 6, 3, 5], [0, 1, 6, 3, 5], [0, 1, 6, 3, 5], [0, 1, 6, 3, 5], [0, 1, 6, 3, 5],
  [0, 1, 6, 3, 5], [0, 1, 6, 3, 5], [0, 1, 6, 3, 5], [0, 1, 6, 3, 5], [0, 1, 6, 3, 5],
];

const characterImages = {
  "문동은": "images/moon.jpg",
  "주여정": "images/joo.jpg",
  "박연진": "images/park.jpg",
  "강현남": "images/kang.jpg",
  "전재준": "images/jeon.jpg",
  "하도영": "images/ha.png",
  "이사라": "images/lee.PNG",
  "최혜정": "images/choi.jpg",
  "손명오": "images/son.jpg"
};

const characterDescriptions = {
  "문동은": `🕊️ 문동은\n
“당신은, 조용한 불꽃 ‘문동은’ 타입입니다.”\n
겉은 차분하고 말이 없지만, 내면엔 누구보다 강한 의지를 품고 있어요.\n
참고, 인내하고, 절대 포기하지 않는 당신은 조용히 큰일을 해냅니다.\n
상처는 당신을 무너뜨리지 않고, 오히려 단단하게 만들었죠.`,

  "주여정": `🩺 주여정\n
“당신은, 따뜻한 칼날 ‘주여정’ 타입입니다.”\n
겉으론 다정하지만, 당신 안에는 정의에 대한 강한 신념이 있어요.\n
누군가를 위해 희생할 줄 알고, 사랑하는 사람을 위해선 위험도 감수하는 당신.\n
감정과 이성, 사랑과 분노가 공존하는 입체적인 사람입니다.`,

  "박연진": `💄 박연진\n
“당신은, 빛나는 독 ‘박연진’ 타입입니다.”\n
화려함과 자신감으로 무장한 당신은 주목받는 자리에 익숙한 사람이에요.\n
겉으론 완벽하지만 속엔 질투심과 경쟁심이 강한 편.\n
계획적이고 목표지향적인 성격으로, 어떤 상황에서도 중심에 서려는 에너지가 있어요.`,

  "강현남": `👒 강현남\n
“당신은, 현실의 진심 ‘강현남’ 타입입니다.”\n
삶의 무게를 알고, 아픔을 품은 만큼 사람을 진심으로 대하는 스타일이에요.\n
말보다 행동이 먼저이고, 누군가에게 진심으로 힘이 되어주는 사람.\n
강하면서도 따뜻하고, 현실을 직시할 줄 아는 의외의 조력자형입니다.`,

  "전재준": `💢 전재준\n
“당신은, 폭발하는 본능 ‘전재준’ 타입입니다.”\n
감정에 솔직하고, 감추지 않으며 원하는 건 반드시 손에 넣고 싶어 해요.\n
때론 충동적이고 공격적이지만, 자기만의 방식으로 세상과 맞서는 사람.\n
거침없고 직선적인 성격이 당신의 가장 큰 무기이자 위험입니다.`,

  "하도영": `🧊 하도영\n
“당신은, 고요한 계산가 ‘하도영’ 타입입니다.”\n
겉은 차분하고 예의 바르지만, 속은 철저히 계산되고 전략적인 사람이에요.\n
이성적이고 냉정하며, 언제나 상황을 주도하려는 타입.\n
겉모습보다 내면의 무게감이 훨씬 큰 사람입니다.`,

  "이사라": `🎨 이사라\n
“당신은, 불안한 예술혼 ‘이사라’ 타입입니다.”\n
감정이 풍부하고 예민한 만큼, 창조적이고 감각적인 당신.\n
때로는 충동적이고 불안정하지만, 그 안에는 누구보다 섬세한 감정이 있어요.\n
예술과 감성, 자유를 통해 자신을 표현하려는 독특한 스타일입니다.`,

  "최혜정": `👠 최혜정\n
“당신은, 생존형 승부사 ‘최혜정’ 타입입니다.”\n
치열한 경쟁과 비교 속에서 살아남는 법을 익힌 사람.\n
아래에서부터 올라온 만큼, 기회를 잡을 줄 알고 스스로를 포장할 줄도 아는 타입이에요.\n
겉으론 유쾌해 보이지만 속은 누구보다 예민하고 냉정하죠.`,

  "손명오": `🚬 손명오\n
“당신은, 위태로운 외톨이 ‘손명오’ 타입입니다.”\n
자신의 위치를 늘 의식하고, 누군가에게 인정받고 싶어 하는 마음이 큰 사람.\n
어디에도 속하지 못한 채 흔들리지만, 사실은 마음 한켠에 외로움이 깊어요.\n
허세와 장난 뒤에 감춰진 진심이 있는 사람입니다.`
};



// 4. 질문 데이터 (20개)
const questions = [
  { question: "Q1. 친구들과 있을 때 당신은?", choices: ["리더 역할을 한다", "분위기 메이커다", "조용히 따르는 편이다", "갈등을 조정한다", "주변을 관찰하며 판단한다"] },
  { question: "Q2. 화가 날 때 당신은?", choices: ["속으로 삭인다", "말로 따진다", "눈치 보며 참는다", "당장 화를 낸다", "계획적으로 복수한다"] },
  { question: "Q3. 갈등 상황에서 당신의 대처법은?", choices: ["정면 돌파", "분위기를 바꿔 웃긴다", "침묵으로 일관한다", "중재자로 나선다", "상대의 의도를 파악하려 한다"] },
  { question: "Q4. 어떤 사람이 가장 싫은가요?", choices: ["비겁한 사람", "무책임한 사람", "이중적인 사람", "폭력적인 사람", "이해심 없는 사람"] },
  { question: "Q5. 당신의 말투는?", choices: ["직설적이다", "유쾌하고 재밌다", "차분하다", "배려가 느껴진다", "분석적이고 논리적이다"] },
  { question: "Q6. 친구가 울고 있을 때 당신은?", choices: ["혼자 생각할 시간을 준다", "웃긴 이야기로 위로한다", "묵묵히 옆에 있어준다", "조심스럽게 물어본다", "문제의 원인을 분석한다"] },
  { question: "Q7. 나의 진짜 모습은?", choices: ["불의엔 맞서는 정의파", "장난스러워도 의리 있는 사람", "겉은 조용하지만 속은 단단함", "따뜻한 사람", "냉정하고 계산적인 사람"] },
  { question: "Q8. 나를 한 단어로 표현하면?", choices: ["의지", "재치", "인내", "공감", "분석"] },
  { question: "Q9. 슬픔을 느낄 때 나는?", choices: ["감정을 드러내지 않음", "억지로 웃는다", "속으로 삼킨다", "누군가와 이야기한다", "감정을 메모하거나 기록한다"] },
  { question: "Q10. 복수를 한다면?", choices: ["법적으로 정당하게", "유쾌하게 갚아준다", "마음속으로만 되새긴다", "사람들의 도움을 끌어모은다", "계획적으로 철저히 준비한다"] },
  { question: "Q11. 좋아하는 사람에게 어떻게 다가가나요?", choices: ["직접 고백", "장난처럼 떠본다", "먼저 다가가지 않는다", "은근히 배려한다", "상대방을 분석하며 접근한다"] },
  { question: "Q12. 나는 불의를 보면?", choices: ["참지 못하고 말한다", "분위기를 바꿔 대응한다", "보고만 있는다", "피해자가 괜찮은지 살핀다", "뒤에서 해결책을 모색한다"] },
  { question: "Q13. 내가 가장 중요하게 생각하는 가치?", choices: ["정의", "유쾌함", "인내", "따뜻함", "이성"] },
  { question: "Q14. 스트레스를 받을 때 나는?", choices: ["운동한다", "게임이나 유튜브를 본다", "가만히 눕는다", "친구와 수다", "계획을 다시 세운다"] },
  { question: "Q15. 나는 주로 어떤 결정을 하나요?", choices: ["직감대로 결정한다", "재밌어 보이는 걸 고른다", "조용히 남을 따른다", "의견을 듣고 조율한다", "모든 정보를 분석한 뒤 결정한다"] },
  { question: "Q16. 친구가 큰 실수를 했을 때 당신은?", choices: ["질책한다", "웃으며 넘어간다", "말없이 등을 두드린다", "상황을 이해하려 한다", "조용히 조언해준다"] },
  { question: "Q17. 당신의 대화 스타일은?", choices: ["직설적이고 솔직함", "재미있고 가벼움", "듣는 편이 많음", "공감이 많고 배려심 있음", "핵심만 짚는 편"] },
  { question: "Q18. 나에게 가장 가까운 감정은?", choices: ["분노", "즐거움", "외로움", "애정", "냉정"] },
  { question: "Q19. 내가 가진 장점은?", choices: ["강한 정의감", "긍정적인 에너지", "끈기", "따뜻한 배려심", "냉철한 판단력"] },
  { question: "Q20. 마지막 질문! 당신의 인생 좌우명은?", choices: ["끝까지 포기하지 말자", "인생은 즐기는 것", "묵묵히 나아가자", "함께 가는 게 중요하다", "모든 일엔 이유가 있다"] },
];

// 현재 질문 번호
let currentQuestion = 0;

// 시작 함수
function startTest() {
  document.getElementById("intro").style.display = "none"; // 시작 화면 숨김
  document.getElementById("app").style.display = "block";  // 질문 화면 보이게
  showQuestion();  // 첫 번째 질문 출력
}


// 질문 표시
function showQuestion() {
  const app = document.getElementById("app");
  const q = questions[currentQuestion];

  app.innerHTML = `
    <h2>${q.question}</h2>
    <div style="margin-top: 30px;">
      ${q.choices.map((choice, i) => `
        <button onclick="chooseAnswer(${i})" style="display:block; margin:10px auto; padding:12px 20px;">${choice}</button>
      `).join("")}
    </div>
    <p style="margin-top: 20px;">(${currentQuestion + 1} / ${questions.length})</p>
  `;
}

// 선택 시 점수 반영 + 다음 질문
function chooseAnswer(choiceIndex) {
  const charIndex = scoreTable[currentQuestion][choiceIndex];
  scores[charIndex]++;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const maxScore = Math.max(...scores);
  const bestIndexes = scores
    .map((score, idx) => (score === maxScore ? idx : -1))
    .filter(idx => idx !== -1);

  const resultIndex = bestIndexes[0];
  const resultName = characters[resultIndex];
  const resultImg = characterImages[resultName];
  const resultDescription = characterDescriptions[resultName];

  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="result-card">
      <h2>당신은 <span class="highlight">${resultName}</span> 유형입니다!</h2>
      <img src="${resultImg}" alt="${resultName}" class="result-image">

      <p class="result-description">${resultDescription}</p>
      <p class="result-caption">더글로리 캐릭터 중 당신과 가장 닮은 인물을 분석했어요.</p>

      <!-- ✅ 공유 버튼 -->
      <div class="share-container" style="display: flex; justify-content: center; gap: 12px; margin-top: 20px;">
        <button onclick="shareTwitter()" class="share-button">
          <svg width="18" height="18" viewBox="0 0 512 512"><path fill="black" d="M469.5 133.9L349.8 282.1 470.6 469.5H390.6L304.3 349.2 202.2 469.5H55.8L190.6 303.4 49.4 42.5H134.6L222.8 182.2 317.6 42.5H463.1L330.1 204.3 469.5 133.9z"/></svg>
          공유하기 (X)
        </button>

        <button onclick="copyLink()" class="share-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 6px;">
            <path d="M3.9 12a4 4 0 014-4h4v2h-4a2 2 0 100 4h4v2h-4a4 4 0 01-4-4zm16.2 0a4 4 0 01-4 4h-4v-2h4a2 2 0 100-4h-4V8h4a4 4 0 014 4z"/>
          </svg>
          링크 복사하기
        </button>
      </div>

      <p id="copyAlert" style="display:none; text-align:center; color:#28a745; font-size:14px; margin-top:5px;">📋 링크가 복사되었습니다!</p>

      <!-- 🔁 다시 테스트하기 버튼 -->
      <div class="retry-container" style="text-align:center; margin-top: 25px;">
        <button onclick="restartTest()" class="retry-button">다시 테스트하기</button>
      </div>
    </div>
  `;
}


function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const alert = document.getElementById("copyAlert");
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 2000);
  });
}





function restartTest() {
  // 화면 초기화
  document.getElementById("app").style.display = "none";
  document.getElementById("intro").style.display = "block";

  // 점수 초기화 (필요한 경우)
  currentQuestion = 0;
  scores = Array(characters.length).fill(0);
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("링크가 복사되었습니다!\n친구에게 붙여넣기(Ctrl+V) 해보세요 😊");
  }).catch(err => {
    alert("복사에 실패했어요 🥲\n직접 주소창을 복사해 주세요.");
  });
}

function shareTwitter() {
  const text = encodeURIComponent("🔍 나랑 닮은 더글로리 캐릭터는 누구일까?");
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
}




  