/**
 * 정민교 마케터 포트폴리오 - 정돈된 키치 & 인터랙티브 플레이존 스크립트
 */

// ==========================================
// 1. 프로젝트 상세 데이터 (모달용)
// ==========================================
const projectData = {
  jellycat: {
    title: "젤리캣 (Jellycat) 한국 공식 런칭 기념 '12지 키링' 및 신당동 팝업 전략 제안",
    meta: "2025 · 브랜드 런칭 기획서 (1인 단독 기획, 제작시간 20시간, 30장 분량)",
    badges: ["기여도 100%", "사주·12지신 문화 접목", "신당동 팝업", "CRM 복원 서비스"],
    contentHtml: `
      <div class="modal-detail-wrap">
        <div class="modal-section-block">
          <h4>💡 기획 배경 및 문제 도출</h4>
          <p>
            영국 명품 봉제인형 '젤리캣'은 국내에서 유아 애착인형으로 큰 사랑을 받았으나, 최근 블랙핑크 지수 등 셀럽들의 가방 키링 착용으로 20대 여성들 사이에서 패션 아이템으로 급부상했습니다.<br>
            하지만 타사 대비 약 200% 비싼 프리미엄 가격(평균 6만 원 선)으로 인해 <strong>"외국 브랜드가 한국에 돈 벌러 왔다"</strong>는 한국 소비자의 거부감(팀홀튼 고가 논란 사례)을 해소할 강력한 현지화 스토리가 필요했습니다.
          </p>
        </div>

        <div class="modal-section-block">
          <h4>🎯 타깃 생애주기 분석과 문화적 결합</h4>
          <p>
            어릴 적 젤리캣을 애착인형으로 접했던 세대가 성장하여 20대 중후반(젠지·잘파)이 되었을 때, '키링'은 단순한 장식품이 아니라 <strong>'나를 드러내는 자기소개 언어'</strong>로 쓰인다는 점에 주목했습니다.<br>
            취업, 연애 등 불안 속에서 사주/타로/띠 문화에 열광하는 한국 2030의 심리를 포착하여, <strong>[타깃의 자기표현 니즈 × 가방 위 키링 트렌드 × 사주 12지신]</strong>을 결합한 <strong>‘한국 전용 12지 젤리캣 키링’</strong>을 도출했습니다.
          </p>
        </div>

        <div class="modal-section-block">
          <h4>🎪 신당동 팝업스토어 & CRM 복원 케어 전략</h4>
          <ul>
            <li><strong>신당동(新堂洞) 장소 브랜딩:</strong> 신(神)을 모시는 무속 신앙의 역사적 맥락을 사주·12지신 콘셉트와 자연스럽게 연결하여 브랜드의 한국 문화 이해도 각인</li>
            <li><strong>고객 데이터 획득(KPI):</strong> 카카오톡 플친 연동, 12지 가챠(뽑기) 머신 현장 판매로 자사몰 회원가입 및 초기 CRM 데이터베이스 구축</li>
            <li><strong>세탁 복원 특별 서비스:</strong> 고가 인형의 세탁 후 털 뭉침 불만을 해결해 주는 '젤리캣 복원 케어'를 팝업에서 제공하여 기존 고객을 재방문 및 재구매로 유도</li>
          </ul>
        </div>
      </div>
    `
  },

  snuggle: {
    title: "스너글 (Snuggle) AI 활용 광고 영상 제작 프로젝트",
    meta: "2026.07 · 6인 팀 프로젝트 (기여도 30% · 초기 기획, 프롬프트 엔지니어링, 제품/세탁 연출컷)",
    badges: ["AI 캐릭터 광고", "Higgsfield OMNI", "CapCut", "20대 여성 타깃"],
    contentHtml: `
      <div class="modal-detail-wrap">
        <div class="modal-section-block">
          <h4>🧸 시장 분석 및 차별화 포인트</h4>
          <p>
            다우니, 피죤, 아우라 등 주요 섬유유연제 경쟁사들은 모두 ‘향 지속력’과 ‘기능성’ 중심의 유사한 커뮤니케이션을 전개하고 있었습니다.<br>
            이에 반해 스너글은 유일하게 <strong>‘스너글 베어’라는 강력한 공식 캐릭터 자산</strong>을 보유하고 있음에 착안, 캐릭터 소비 빈도가 높은 20대 여성층을 타깃으로 캐릭터 중심 숏폼 영상을 기획했습니다.
          </p>
        </div>

        <div class="modal-section-block">
          <h4>🤖 AI 영상 제작의 기술적 난제 해결</h4>
          <p>
            생성형 AI 영상 제작 시 가장 큰 문제였던 <strong>‘장면마다 캐릭터 외형과 질감이 달라지는 현상’</strong>을 극복하기 위해:
          </p>
          <ul>
            <li><strong>ChatGPT 턴어라운드 시트 설계:</strong> 정면, 측면, 후면 다방향 캐릭터 시트를 먼저 생성하여 3D 일관성 확보</li>
            <li><strong>프레임 단위 움직임 설계:</strong> 시작 → 착지 → 바운스 → 안착 등 핵심 키프레임 이미지를 선제작한 후 Higgsfield OMNI 툴로 자연스럽게 인터폴레이션 연결</li>
            <li><strong>후반작업:</strong> GPT 기반 폰트 자막과 CapCut 효과음/사운드 편집을 더해 완성도 높은 60초 광고 영상 제작</li>
          </ul>
        </div>
      </div>
    `
  },

  kitox: {
    title: "뷰티 브랜드 KITOX 마스크팩 홍보 영상 제작",
    meta: "2024.07 · 3인 팀 프로젝트 (기여도 30% · 기획, 촬영, 현장 조연출)",
    badges: ["3040 홈케어", "네이버 쇼핑 리뷰 400개 목표", "포지셔닝 메시지", "현장 촬영"],
    contentHtml: `
      <div class="modal-detail-wrap">
        <div class="modal-section-block">
          <h4>💆 문제 진단: 높은 고객 만족도, 그러나 부족한 인지도</h4>
          <p>
            키톡스 하이드로파이버 마스크팩은 와디즈 4차 펀딩 1등, 스마트스토어 평점 4.9를 기록할 정도로 제품력 검증이 끝난 상태였으나, 네이버 검색량 분석 결과 경쟁사 대비 인지도가 매우 낮고 주름 개선 마스크팩 카테고리 포지셔닝이 취약했습니다.
          </p>
        </div>

        <div class="modal-section-block">
          <h4>🔍 소비자 장벽과 솔루션 도출</h4>
          <p>
            소비자 데이터 분석 결과, 3040 세대는 피부과 시술의 부작용(59.8%)과 고비용에 부담을 느끼면서도 일반 화장품의 효과(만족도 2.6점)에는 아쉬움을 느끼고 있었습니다.<br>
            이 틈새를 공략하여 <strong>"시술은 망설여지고 화장품은 아쉬울 때, 주름을 지우는 열쇠 KITOX"</strong>라는 핵심 메시지를 도출하고, 버스정류장/출퇴근길 직장인을 배경으로 한 공감형 광고 영상을 기획 및 촬영했습니다.
          </p>
        </div>

        <div class="modal-section-block">
          <h4>📈 마케팅 목표</h4>
          <p>
            단순 브랜딩에 그치지 않고 ‘주름 마스크팩’ 검색량을 ‘주름 앰플’ 수준으로 견인하고, 네이버 쇼핑 실구매 리뷰를 40개에서 400개로 10배 확장하는 구조를 설계했습니다.
          </p>
        </div>
      </div>
    `
  },

  ktm: {
    title: "알뜰폰 요금제 KT M 모바일 2030 타깃 홍보 영상 제작",
    meta: "2022 · 1인 단독 프로젝트 (기여도 100% · 기획, 촬영, 편집, 연출 전 과정)",
    badges: ["1인 단독 디렉팅", "Sony A7M3", "F&B 프로모션 소구", "마케터의 핵심 깨달음"],
    contentHtml: `
      <div class="modal-detail-wrap">
        <div class="modal-section-block">
          <h4>📱 2030 알뜰폰 인식 전환 포착</h4>
          <p>
            ‘부모님 효도폰’으로만 여겨지던 알뜰폰 시장에 자급제 폰과 결합한 2030 세대 소비자가 급증하는 트렌드(만족도 65% vs 통신3사 36%)를 발견했습니다.<br>
            치열한 출혈경쟁 속에서 복잡한 통신 기술 용어 대신, 청년층이 매일 체감하는 <strong>F&B(커피, 배달의민족 쿠폰 등) 일상 혜택</strong>을 전면에 내세운 1분 광고 영상을 제작했습니다.
          </p>
        </div>

        <div class="modal-section-block">
          <h4>💡 마케터로서의 핵심 인사이트 (Turning Point)</h4>
          <div class="insight-highlight-box">
            "기획이 제대로 되지 않으면, 아무리 좋은 장비와 편집 기술이 있어도 좋은 결과를 낼 수 없다."
          </div>
          <p>
            초기 일정 관리와 기획의 완성도가 부족할 때 발생하는 제작의 한계를 몸소 겪으며, <strong>'콘텐츠에는 왜(Why)가 반드시 선행되어야 한다'</strong>는 마케팅의 본질적 철학을 정립하게 되었습니다. 이 경험은 이후 전경련 및 청년취업사관학교 퍼포먼스 마케팅 과정으로 도약하는 결정적 계기가 되었습니다.
          </p>
        </div>
      </div>
    `
  }
};

// ==========================================
// 2. 마케팅 플레이존 게임 탭 전환
// ==========================================
function switchGame(gameId) {
  const tabs = document.querySelectorAll('.game-tab-btn');
  const panels = document.querySelectorAll('.game-panel');

  tabs.forEach(tab => tab.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));

  const activePanel = document.getElementById(`game-${gameId}`);
  if (activePanel) {
    activePanel.classList.add('active');
  }

  // 탭 active 처리
  const clickedTab = Array.from(tabs).find(t => t.getAttribute('onclick').includes(gameId));
  if (clickedTab) {
    clickedTab.classList.add('active');
  }
}

// ==========================================
// 3. 게임 1: 젤리캣 12지신 운세 뽑기
// ==========================================
const fortunes = [
  { emoji: "🐰", name: "지혜로운 토끼 키링", quote: "작은 디테일 하나가 고객의 마음을 사로잡고 엄청난 전환율을 만듭니다!", tip: "💡 추천 액션: A/B 테스트에서 CTA 버튼의 카피를 친근하게 바꿔보세요." },
  { emoji: "🐯", name: "당당한 호랑이 키링", quote: "과감한 헤드카피가 스크롤을 멈추게 합니다. 첫 3초의 임팩트를 잡으세요!", tip: "💡 추천 액션: 숏폼 영상의 도입부 후킹 장면을 더 파격적으로 재편집해보세요." },
  { emoji: "🐲", name: "상상력 풍부한 용 키링", quote: "AI 툴은 상상력을 현실로 만드는 날개입니다. 새로운 툴 조합을 두려워 마세요!", tip: "💡 추천 액션: 이미지와 비디오 생성 AI를 결합해 가상 모델 컷을 만들어보세요." },
  { emoji: "🐭", name: "기민한 쥐 키링", quote: "데이터 뒤에 숨은 소비자의 진짜 결핍(Pain Point)을 찾는 순간 답이 열립니다.", tip: "💡 추천 액션: GA4 이탈 페이지를 분석해 왜 사용자가 떠났는지 질문해보세요." },
  { emoji: "🐮", name: "우직한 소 키링", quote: "기획의 뼈대가 튼튼해야 결과물이 흔들리지 않습니다. Why를 먼저 세우세요!", tip: "💡 추천 액션: 프로젝트 기획서의 핵심 타깃 정의를 한 줄로 다시 요약해보세요." },
  { emoji: "🐍", name: "지혜로운 뱀 키링", quote: "경쟁사가 보지 못한 틈새 시장의 문화적 맥락이 최고의 차별점이 됩니다.", tip: "💡 추천 액션: 타깃 세대가 최근 몰입하는 서브컬처와 유행어를 리서치해보세요." },
  { emoji: "🐴", name: "자유로운 말 키링", quote: "빠른 실행과 피드백 루프가 완벽한 계획보다 시장에서 더 강합니다.", tip: "💡 추천 액션: 가벼운 소재로 광고를 먼저 집행하고 효율을 테스트해보세요." },
  { emoji: "🐑", name: "포근한 양 키링", quote: "진심 어린 고객 케어는 1명의 고객을 10명의 팬으로 만드는 강력한 무기입니다.", tip: "💡 추천 액션: 구매 후 안내 메시지나 CRM 복원 서비스를 기획해보세요." },
  { emoji: "🐵", name: "위트 넘치는 원숭이 키링", quote: "재미와 공감이 결합될 때 바이럴은 자연스럽게 폭발합니다.", tip: "💡 추천 액션: 브랜드 캐릭터를 활용한 밈(Meme) 콘텐츠를 제작해보세요." },
  { emoji: "🐔", name: "감각적인 닭 키링", quote: "트렌드는 누구보다 빠르게, 메시지는 누구보다 명확하게 전달하세요.", tip: "💡 추천 액션: 최신 SNS 릴스 트렌드 오디오를 광고 BGM에 활용해보세요." },
  { emoji: "🐶", name: "충직한 강아지 키링", quote: "고객과의 신뢰는 정직한 가치 제안에서 출발합니다.", tip: "💡 추천 액션: 실제 사용자들의 솔직한 리뷰를 강조하는 카드뉴스를 만드세요." },
  { emoji: "🐷", name: "풍요로운 돼지 키링", quote: "전환 퍼널이 유기적으로 연결될 때 매출의 풍요가 따라옵니다.", tip: "💡 추천 액션: 랜딩페이지의 결제/문의 버튼 위치를 상단과 하단에 최적화하세요." }
];

function drawFortune() {
  const emojiEl = document.getElementById("fortuneEmoji");
  const nameEl = document.getElementById("fortuneName");
  const quoteEl = document.getElementById("fortuneQuote");
  const tipEl = document.getElementById("fortuneTip");

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const selected = fortunes[randomIndex];

  emojiEl.style.transform = 'scale(0.8) rotate(-10deg)';
  setTimeout(() => {
    emojiEl.textContent = selected.emoji;
    nameEl.textContent = selected.name;
    quoteEl.textContent = selected.quote;
    tipEl.textContent = selected.tip;
    emojiEl.style.transform = 'scale(1) rotate(0deg)';
    showToast(`✨ ${selected.name}을(를) 뽑으셨습니다!`);
  }, 150);
}

// ==========================================
// 4. 게임 2: 마케팅 A/B 테스트 퀴즈 LAB
// ==========================================
const quizData = [
  {
    brand: "뷰티 브랜드 KITOX 마스크팩",
    question: "3040 직장인을 타깃으로 한 마스크팩 광고, 더 높은 반응과 전환을 이끈 카피는?",
    optA: "A안: 고기능성 하이드로파이버 특허 성분 마스크팩",
    optB: "B안: 시술은 망설여지고 화장품은 아쉬울 때, 주름을 지우는 열쇠",
    answer: "B",
    explanation: "정답은 B안! 소비자는 기술 명칭보다 '시술 부작용과 고비용 부담'이라는 본인의 구체적 결핍(Pain Point)을 짚어주는 카피에 4배 이상 강하게 반응했습니다."
  },
  {
    brand: "영화 <프레디의 피자가게1> 사전 마케팅",
    question: "수능 다음날 개봉하는 1020 타깃 공포영화, 서울 시내 CGV 주변에서 바이럴 대박을 터뜨린 오프라인 홍보는?",
    optA: "A안: 영화 포스터와 상영시간표가 적힌 대형 포스터 부착",
    optB: "B안: 섬뜩한 피자가게 아르바이트 구인공고로 위장한 벽보 + QR코드 연동",
    answer: "B",
    explanation: "정답은 B안! 1020세대는 일방적인 광고 포스터를 지나치지만, '괴기스러운 알바 공고' 형태의 게이미피케이션에 반응하여 자발적으로 SNS에 촬영 인증샷을 확산시켰습니다."
  },
  {
    brand: "섬유유연제 스너글 (Snuggle) AI 광고",
    question: "향 지속력 경쟁이 치열한 섬유유연제 시장에서 20대 여성의 시선을 단숨에 사로잡은 크리에이티브는?",
    optA: "A안: 7일간 지속되는 잔향과 미세먼지 차단 효과를 강조한 세탁 영상",
    optB: "B안: 공식 마스코트 '스너글 베어'를 3D 일관성 시트로 제작한 AI 숏폼 애니메이션",
    answer: "B",
    explanation: "정답은 B안! 경쟁사들이 모두 향기와 기능만 외칠 때, 스너글만의 독점적 캐릭터 자산인 '스너글 베어'를 귀여운 모션으로 구현하여 캐릭터 소비가 활발한 20대 여성의 브랜드 친밀도를 극대화했습니다."
  }
];

let currentQuizIdx = 0;
let userScore = 0;

function checkQuizAnswer(selectedOption) {
  const currentQ = quizData[currentQuizIdx];
  const feedbackEl = document.getElementById('quizFeedback');
  const badgeEl = document.getElementById('feedbackBadge');
  const descEl = document.getElementById('feedbackDesc');
  const nextBtn = document.getElementById('quizNextBtn');

  // 버튼 비활성화
  document.getElementById('optionA').disabled = true;
  document.getElementById('optionB').disabled = true;

  if (selectedOption === currentQ.answer) {
    userScore += 33;
    if (currentQuizIdx === 2) userScore = 100;
    badgeEl.textContent = "🎉 대박! 정확한 마케팅 인사이트입니다!";
    badgeEl.style.color = "#0CA678";
  } else {
    badgeEl.textContent = "😅 아쉽네요! 데이터의 선택은 달랐습니다.";
    badgeEl.style.color = "#E03131";
  }

  descEl.textContent = currentQ.explanation;
  feedbackEl.style.display = 'block';

  document.getElementById('quizScoreText').textContent = `내 점수: ${userScore}점`;

  if (currentQuizIdx >= quizData.length - 1) {
    nextBtn.textContent = "🏆 퀴즈 결과 확인하기";
  } else {
    nextBtn.textContent = "다음 문제 풀기 ➡️";
  }
}

function nextQuiz() {
  if (currentQuizIdx >= quizData.length - 1) {
    // 최종 결과
    const box = document.getElementById('quizQuestionBox');
    const optionsGrid = document.querySelector('.quiz-options-grid');
    const feedback = document.getElementById('quizFeedback');

    optionsGrid.style.display = 'none';
    feedback.style.display = 'none';

    let rankTitle = "초보 탐험가";
    if (userScore >= 90) rankTitle = "🥇 타고난 데이터 퍼포먼스 마케터";
    else if (userScore >= 60) rankTitle = "🥈 감각적인 크리에이티브 기획자";
    else rankTitle = "🥉 잠재력 높은 마케팅 루키";

    box.innerHTML = `
      <div style="text-align:center; padding: 20px 0;">
        <span style="font-size:3.5rem;">🎯</span>
        <h3 style="font-size:1.6rem; margin: 12px 0 6px;">퀴즈 완료! 최종 점수: ${userScore}점</h3>
        <p style="font-size:1.1rem; color: #E64980; font-weight:800; margin-bottom:16px;">당신의 타이틀: [${rankTitle}]</p>
        <p style="color:#555; font-size:0.95rem; margin-bottom:20px;">
          정민교 마케터는 항상 직관에 의존하지 않고, 타깃의 결핍과 실제 데이터로 설득력 있는 솔루션을 도출합니다.
        </p>
        <button class="btn btn-primary" onclick="resetQuiz()">처음부터 다시 풀기 🔄</button>
      </div>
    `;
    return;
  }

  currentQuizIdx++;
  renderQuiz();
}

function resetQuiz() {
  currentQuizIdx = 0;
  userScore = 0;
  document.querySelector('.quiz-options-grid').style.display = 'grid';
  document.getElementById('quizFeedback').style.display = 'none';
  renderQuiz();
}

function renderQuiz() {
  const currentQ = quizData[currentQuizIdx];
  document.getElementById('quizStepText').textContent = `문제 ${currentQuizIdx + 1} / 3`;
  document.getElementById('quizScoreText').textContent = `내 점수: ${userScore}점`;
  document.getElementById('quizBrandTag').textContent = currentQ.brand;
  document.getElementById('quizQuestion').textContent = currentQ.question;
  document.getElementById('textOptionA').textContent = currentQ.optA;
  document.getElementById('textOptionB').textContent = currentQ.optB;

  const btnA = document.getElementById('optionA');
  const btnB = document.getElementById('optionB');
  btnA.disabled = false;
  btnB.disabled = false;
  document.getElementById('quizFeedback').style.display = 'none';
}

// ==========================================
// 5. 게임 3: AI 프롬프트 자판기
// ==========================================
const promptDatabase = {
  "genz-character": {
    title: "20대 젠지 타깃: 3D 캐릭터 턴어라운드 시트 프롬프트 (ChatGPT)",
    prompt: `Act as a senior character concept artist for a trendy lifestyle brand.
Target Audience: Korean Gen-Z (trend-conscious, loves bag-keyrings and cute mascots).
Character Subject: Soft plush teddy bear wearing a stylish pastel hoodie with a miniature Korean traditional talisman accessory.
Requirements:
1. Provide a comprehensive multi-angle turnaround sheet (Front view, 45-degree angle, Side profile, Back view).
2. Consistent fluffy fur texture, ultra-high detail, soft studio lighting on pure white background.
3. Expressive emotional micro-gestures: cheeky wink, waving hand.
Negative Prompt: distorted limbs, inconsistent features, blurry textures.`,
    tip: "💡 실무 팁: 스너글 베어 광고 제작 시 사용된 기법으로, 여러 각도의 시트를 먼저 고정해야 비디오 생성 시 일관성이 깨지지 않습니다."
  },
  "genz-motion": {
    title: "20대 젠지 타깃: 60초 숏폼 모션 프롬프트 (Higgsfield OMNI)",
    prompt: `Camera Movement: Dynamic push-in and smooth tracking shot.
Scene Description: A cute plush teddy bear jumps gracefully from a laundry basket, bounces in slow-motion on freshly washed fluffy towels, and looks directly at the camera with a joyful smile.
Style: Cinematic commercial lighting, vibrant pastel colors, ultra-realistic cloth physics, 60fps fluid motion.
Duration: 5-second seamless loop.`,
    tip: "💡 실무 팁: AI 비디오 툴에서는 '착지(landing)'와 '바운스(bounce)' 등의 물리적 접촉 지점을 키프레임으로 지정해야 프레임 뭉개짐이 없습니다."
  },
  "genz-copy": {
    title: "20대 젠지 타깃: 인스타그램 스토리 전환 카피 (AIDA 구조)",
    prompt: `[Attention] "나만 없어... 내 가방에 달린 이 조그만 녀석의 정체는? 👀"
[Interest] 어릴 땐 품에 안고 자던 애착인형, 지금은 힙스터들의 필수 키링으로 컴백!
[Desire] 내 띠와 사주를 담아 세상에 단 하나뿐인 나만의 12지신 젤리캣.
[Action] 오늘 마감! 선착순 12지신 시크릿 에디션 보러가기 ➡️ [프로필 링크 클릭]`,
    tip: "💡 실무 팁: 20대 여성 타깃은 단순 제품 소개보다 '나를 드러내는 취향(자기소개)'으로 프레이밍할 때 저장 및 공유율이 300% 증가합니다."
  },
  "3040-copy": {
    title: "3040 직장인 타깃: 출퇴근길 문제 해결형 광고 카피",
    prompt: `[Hook] "피부과 갈 시간은 없고, 화장품으론 부족할 때"
[Pain Point] 늘어가는 눈가 주름에 시술을 고민하지만, 부작용과 비용 때문에 망설여지시나요?
[Solution] 와디즈 1등 평점 4.9가 증명한 KITOX 하이드로파이버 마스크팩.
[CTA] 퇴근 후 단 15분의 홈케어 솔루션, 지금 첫구매 40% 혜택으로 만나보세요.`,
    tip: "💡 실무 팁: 3040 세대는 막연한 효능보다 '시술 부작용 부담'이라는 현실적 대안으로 접근할 때 즉각적인 구매 전환이 일어납니다."
  }
};

function vendPrompt() {
  const target = document.getElementById('vendingTarget').value;
  const goal = document.getElementById('vendingGoal').value;
  const key = `${target}-${goal}`;

  const data = promptDatabase[key] || promptDatabase["genz-character"];

  document.getElementById('outTitle').textContent = `📌 ${data.title}`;
  document.getElementById('outPrompt').textContent = data.prompt;
  document.getElementById('outTip').textContent = data.tip;

  showToast("🥤 새로운 AI 프롬프트가 출력되었습니다!");
}

function copyVendPrompt() {
  const text = document.getElementById('outPrompt').textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 프롬프트가 클립보드에 복사되었습니다!");
  });
}

// ==========================================
// 6. 공통 유틸리티 (복사, 모달, 토스트)
// ==========================================
function copyContact(type) {
  let textToCopy = type === 'email' ? "apcde@naver.com" : "010-4785-3020";
  let message = type === 'email' ? "📧 이메일 주소(apcde@naver.com)가 복사되었습니다!" : "📞 전화번호(010-4785-3020)가 복사되었습니다!";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy).then(() => showToast(message));
  } else {
    const input = document.createElement("input");
    input.value = textToCopy;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(message);
  }
}

function showToast(msg) {
  const toast = document.getElementById("toastNotice");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalContent");
  const data = projectData[projectId];
  if (!data) return;

  const badgesHtml = data.badges.map(b => `<span class="badge badge-mint">${b}</span>`).join(" ");

  modalBody.innerHTML = `
    <div style="margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">${badgesHtml}</div>
    <h2 style="font-size:1.6rem; font-weight:900; margin-bottom:8px; line-height:1.35;">${data.title}</h2>
    <div style="font-size:0.9rem; color:#666; font-weight:600; margin-bottom:20px; padding-bottom:12px; border-bottom:2px dashed #ddd;">${data.meta}</div>
    ${data.contentHtml}
    <div style="margin-top:28px; text-align:right;">
      <button class="btn btn-primary" onclick="closeModal()">확인 완료 ✨</button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeModalOnBackdrop(e) {
  if (e.target.id === "projectModal") closeModal();
}

// 필터링 이벤트 등록
document.addEventListener("DOMContentLoaded", () => {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectItems = document.querySelectorAll(".project-item");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");
      projectItems.forEach(item => {
        const cat = item.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 초기 자판기 프롬프트 1회 셋업
  vendPrompt();
});
