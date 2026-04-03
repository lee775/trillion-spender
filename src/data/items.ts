export interface ShopItem {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  emoji: string;
  luxuryLevel: number;
}

export type Category =
  | "부동산"
  | "탈것"
  | "우주"
  | "스포츠"
  | "명품"
  | "황당한것"
  | "음식"
  | "엔터"
  | "기술"
  | "자연";

export const CATEGORIES: Category[] = [
  "부동산", "탈것", "우주", "스포츠", "명품",
  "황당한것", "음식", "엔터", "기술", "자연",
];

export const CATEGORY_EMOJI: Record<Category, string> = {
  부동산: "🏠",
  탈것: "🚗",
  우주: "🚀",
  스포츠: "⚽",
  명품: "💎",
  황당한것: "🤪",
  음식: "🍽️",
  엔터: "🎬",
  기술: "🔬",
  자연: "🌿",
};

export const SHOP_ITEMS: ShopItem[] = [
  // ===================== 부동산 (15개) =====================
  { id: "r01", name: "강남 펜트하우스", price: 50_000_000_000, category: "부동산", description: "한강뷰? 당연하지. 옥상에 수영장도 있음", emoji: "🏙️", luxuryLevel: 0 },
  { id: "r02", name: "제주도 해안 별장", price: 30_000_000_000, category: "부동산", description: "감귤밭 포함. 귤은 알아서 따먹으세요", emoji: "🏖️", luxuryLevel: 0 },
  { id: "r03", name: "뉴욕 맨해튼 빌딩", price: 2_000_000_000_000, category: "부동산", description: "센트럴파크가 내 앞마당", emoji: "🗽", luxuryLevel: 1 },
  { id: "r04", name: "두바이 인공섬", price: 15_000_000_000_000, category: "부동산", description: "야자수 모양은 진부해서 내 얼굴 모양으로 만듦", emoji: "🏝️", luxuryLevel: 3 },
  { id: "r05", name: "모나코 해안가 통째로", price: 50_000_000_000_000, category: "부동산", description: "나라는 못 사니까 해안가 전체를", emoji: "🌊", luxuryLevel: 5 },
  { id: "r06", name: "남극 연구기지 리조트", price: 8_000_000_000_000, category: "부동산", description: "펭귄이 도어맨입니다", emoji: "🐧", luxuryLevel: 4 },
  { id: "r07", name: "해저 호텔", price: 25_000_000_000_000, category: "부동산", description: "상어가 룸서비스 벨 누른 줄 알고 옴", emoji: "🐠", luxuryLevel: 6 },
  { id: "r08", name: "하와이 화산섬 통째로", price: 80_000_000_000_000, category: "부동산", description: "온천은 천연. 가끔 용암이 나옴", emoji: "🌋", luxuryLevel: 7 },
  { id: "r09", name: "런던 타워브릿지 옆 성", price: 5_000_000_000_000, category: "부동산", description: "왕실보다 좋은 뷰", emoji: "🏰", luxuryLevel: 3 },
  { id: "r10", name: "몰디브 산호섬 전체", price: 12_000_000_000_000, category: "부동산", description: "물 위의 방갈로 100채 포함", emoji: "🐚", luxuryLevel: 4 },
  { id: "r11", name: "사하라 사막 오아시스", price: 3_000_000_000_000, category: "부동산", description: "사막 한가운데 워터파크. 왜? 할 수 있으니까", emoji: "🏜️", luxuryLevel: 2 },
  { id: "r12", name: "알프스 산꼭대기 별장", price: 7_000_000_000_000, category: "부동산", description: "헬기로만 출퇴근 가능", emoji: "⛰️", luxuryLevel: 4 },
  { id: "r13", name: "베네치아 운하가 전체", price: 20_000_000_000_000, category: "부동산", description: "곤돌라? 내 개인 택시임", emoji: "🛶", luxuryLevel: 5 },
  { id: "r14", name: "지하 50층 벙커 저택", price: 40_000_000_000_000, category: "부동산", description: "좀비 아포칼립스가 와도 넷플릭스 시청 가능", emoji: "🕳️", luxuryLevel: 6 },
  { id: "r15", name: "구름 위 플로팅 하우스", price: 150_000_000_000_000, category: "부동산", description: "비행석 기술로 떠 있음. 택배가 좀 힘듦", emoji: "☁️", luxuryLevel: 8 },

  // ===================== 탈것 (15개) =====================
  { id: "v01", name: "람보르기니 레벤톤", price: 5_000_000_000, category: "탈것", description: "주차장에서 문 여는 것부터가 쇼", emoji: "🏎️", luxuryLevel: 0 },
  { id: "v02", name: "골드 도금 벤틀리", price: 12_000_000_000, category: "탈것", description: "세차비가 월 500만원", emoji: "✨", luxuryLevel: 0 },
  { id: "v03", name: "프라이빗 제트기", price: 500_000_000_000, category: "탈것", description: "기내식이 미슐랭 3스타", emoji: "✈️", luxuryLevel: 1 },
  { id: "v04", name: "초호화 요트", price: 800_000_000_000, category: "탈것", description: "헬리패드, 수영장, 나이트클럽 포함", emoji: "🛥️", luxuryLevel: 2 },
  { id: "v05", name: "원자력 잠수함 (민간용)", price: 5_000_000_000_000, category: "탈것", description: "물 밑에서 넷플릭스 보는 맛", emoji: "🔱", luxuryLevel: 4 },
  { id: "v06", name: "에어버스 A380 개인용", price: 3_000_000_000_000, category: "탈것", description: "2층짜리 비행기에 혼자 탑승", emoji: "🛫", luxuryLevel: 3 },
  { id: "v07", name: "마하 5 초음속기", price: 20_000_000_000_000, category: "탈것", description: "서울→뉴욕 1시간. 시차적응이 더 오래 걸림", emoji: "💨", luxuryLevel: 6 },
  { id: "v08", name: "하늘을 나는 자동차", price: 35_000_000_000_000, category: "탈것", description: "드디어 출퇴근 안 막힘. 면허는 2개 필요", emoji: "🚁", luxuryLevel: 7 },
  { id: "v09", name: "다이아몬드 장갑차", price: 2_000_000_000_000, category: "탈것", description: "방탄인데 반짝반짝", emoji: "💠", luxuryLevel: 2 },
  { id: "v10", name: "증기 기관차 (골동품)", price: 800_000_000_000, category: "탈것", description: "해리포터 기분 내기용. 석탄 냄새는 보너스", emoji: "🚂", luxuryLevel: 2 },
  { id: "v11", name: "전기 호버크래프트", price: 1_500_000_000_000, category: "탈것", description: "물 위를 날듯이 달림. 물고기 겁먹음", emoji: "⛵", luxuryLevel: 2 },
  { id: "v12", name: "6륜 몬스터 리무진", price: 3_500_000_000_000, category: "탈것", description: "바퀴가 6개. 안에 사우나 있음", emoji: "🚐", luxuryLevel: 3 },
  { id: "v13", name: "달 표면 전용 로버", price: 15_000_000_000_000, category: "탈것", description: "달에서만 탈 수 있음. 달 먼저 사세요", emoji: "🌕", luxuryLevel: 5 },
  { id: "v14", name: "반중력 스케이트보드", price: 50_000_000_000_000, category: "탈것", description: "백투더퓨처가 현실이 됨", emoji: "🛹", luxuryLevel: 7 },
  { id: "v15", name: "텔레포트 장치 (베타)", price: 100_000_000_000_000, category: "탈것", description: "가끔 다리가 먼저 도착함. 베타라서 그럼", emoji: "⚡", luxuryLevel: 9 },

  // ===================== 우주 (12개) =====================
  { id: "s01", name: "ISS 1박 체험", price: 200_000_000_000, category: "우주", description: "무중력에서 라면 끓이기 체험 포함", emoji: "🛸", luxuryLevel: 1 },
  { id: "s02", name: "달 여행 왕복 티켓", price: 2_000_000_000_000, category: "우주", description: "달에 발자국 찍고 셀카 한 장", emoji: "🌙", luxuryLevel: 2 },
  { id: "s03", name: "화성 편도 티켓", price: 10_000_000_000_000, category: "우주", description: "돌아올 생각은 하지 마세요", emoji: "🔴", luxuryLevel: 4 },
  { id: "s04", name: "개인 우주 정거장", price: 50_000_000_000_000, category: "우주", description: "우주에 내 방이 생겼다", emoji: "🏗️", luxuryLevel: 5 },
  { id: "s05", name: "소행성 채굴권", price: 100_000_000_000_000, category: "우주", description: "우주 광부 CEO. 금이 쏟아져 나옴", emoji: "☄️", luxuryLevel: 7 },
  { id: "s06", name: "달 뒷면 토지 소유권", price: 30_000_000_000_000, category: "우주", description: "인정해주는 사람은 없지만 기분은 좋음", emoji: "🌑", luxuryLevel: 5 },
  { id: "s07", name: "궤도 엘리베이터 건설", price: 200_000_000_000_000, category: "우주", description: "지구에서 우주까지 엘리베이터. 30층 누르세요", emoji: "🗼", luxuryLevel: 8 },
  { id: "s08", name: "인공 태양 제작", price: 500_000_000_000_000, category: "우주", description: "밤이 싫어서 태양을 하나 더 만듦", emoji: "☀️", luxuryLevel: 10 },
  { id: "s09", name: "화성 테라포밍 프로젝트", price: 300_000_000_000_000, category: "우주", description: "화성에 나무 심기. 완성은 300년 후", emoji: "🌱", luxuryLevel: 9 },
  { id: "s10", name: "우주 쓰레기 수거선", price: 8_000_000_000_000, category: "우주", description: "우주 환경미화원. 의외로 보람참", emoji: "🧹", luxuryLevel: 4 },
  { id: "s11", name: "목성 대적점 관측소", price: 70_000_000_000_000, category: "우주", description: "태풍 구경하러 목성까지", emoji: "🪐", luxuryLevel: 7 },
  { id: "s12", name: "블랙홀 근접 관광", price: 150_000_000_000_000, category: "우주", description: "시간이 느리게 간다는데 체감은 모르겠음", emoji: "🕳️", luxuryLevel: 8 },

  // ===================== 스포츠 (12개) =====================
  { id: "p01", name: "프리미어리그 축구팀", price: 5_000_000_000_000, category: "스포츠", description: "선수 연봉이 내 월급의 몇 배인지 세지 마세요", emoji: "⚽", luxuryLevel: 2 },
  { id: "p02", name: "NBA 농구팀", price: 8_000_000_000_000, category: "스포츠", description: "코트사이드? 나는 코트 위에 앉음", emoji: "🏀", luxuryLevel: 3 },
  { id: "p03", name: "MLB 야구팀", price: 6_000_000_000_000, category: "스포츠", description: "시구는 매 경기 내가 함", emoji: "⚾", luxuryLevel: 3 },
  { id: "p04", name: "F1 레이싱팀", price: 4_000_000_000_000, category: "스포츠", description: "내 이름이 차체에 박힘", emoji: "🏁", luxuryLevel: 2 },
  { id: "p05", name: "올림픽 개최 (사비)", price: 100_000_000_000_000, category: "스포츠", description: "개인이 올림픽을 열어버림. 개막식은 내 생일파티", emoji: "🏅", luxuryLevel: 8 },
  { id: "p06", name: "개인 격투기 대회 창설", price: 2_000_000_000_000, category: "스포츠", description: "UFC보다 화려하게. 심판도 턱시도 착용", emoji: "🥊", luxuryLevel: 2 },
  { id: "p07", name: "전 세계 골프장 멤버십", price: 1_000_000_000_000, category: "스포츠", description: "지구 어디서든 티오프. 캐디만 50명", emoji: "⛳", luxuryLevel: 2 },
  { id: "p08", name: "LCK 리그 인수", price: 3_000_000_000_000, category: "스포츠", description: "e스포츠 황제. 선수들이 내 앞에서 겜함", emoji: "🎮", luxuryLevel: 3 },
  { id: "p09", name: "개인 수영장 올림픽 규격", price: 500_000_000_000, category: "스포츠", description: "50m 레인 8개. 혼자 수영함", emoji: "🏊", luxuryLevel: 1 },
  { id: "p10", name: "에베레스트 개인 등반로", price: 5_000_000_000_000, category: "스포츠", description: "전용 엘리베이터는 아직 건설 중", emoji: "🏔️", luxuryLevel: 4 },
  { id: "p11", name: "월드컵 개최 (사비)", price: 200_000_000_000_000, category: "스포츠", description: "FIFA 전화가 안 와서 직접 개최", emoji: "🏆", luxuryLevel: 9 },
  { id: "p12", name: "개인 스키 리조트", price: 10_000_000_000_000, category: "스포츠", description: "눈이 안 와도 인공눈 무한 생산", emoji: "⛷️", luxuryLevel: 4 },

  // ===================== 명품 (12개) =====================
  { id: "l01", name: "다이아몬드 시계", price: 50_000_000_000, category: "명품", description: "시간 보려다 눈이 부셔서 못 봄", emoji: "⌚", luxuryLevel: 0 },
  { id: "l02", name: "에르메스 매장 통째로", price: 300_000_000_000, category: "명품", description: "대기명단? 내가 주인인데?", emoji: "👜", luxuryLevel: 1 },
  { id: "l03", name: "모나리자 (비공식)", price: 10_000_000_000_000, category: "명품", description: "루브르에 '대여 중' 팻말 걸어둠", emoji: "🖼️", luxuryLevel: 4 },
  { id: "l04", name: "금으로 만든 화장실", price: 100_000_000_000, category: "명품", description: "변기부터 휴지걸이까지 24K", emoji: "🚽", luxuryLevel: 1 },
  { id: "l05", name: "세계 최대 다이아몬드", price: 30_000_000_000_000, category: "명품", description: "문진으로 씀", emoji: "💍", luxuryLevel: 5 },
  { id: "l06", name: "공룡 화석 컬렉션", price: 5_000_000_000_000, category: "명품", description: "거실에 티렉스 뼈가 있으면 대화 주제가 끊기지 않음", emoji: "🦕", luxuryLevel: 3 },
  { id: "l07", name: "빈티지 와인 저장고", price: 800_000_000_000, category: "명품", description: "1800년산 와인이 주스처럼 쌓여 있음", emoji: "🍷", luxuryLevel: 2 },
  { id: "l08", name: "루이비통 전 세계 매장 VIP", price: 200_000_000_000, category: "명품", description: "매장 들어가면 직원들이 박수침", emoji: "👔", luxuryLevel: 1 },
  { id: "l09", name: "파라오의 황금 마스크 복제품", price: 2_000_000_000_000, category: "명품", description: "진품은 못 사니까. 근데 금은 진짜임", emoji: "👑", luxuryLevel: 3 },
  { id: "l10", name: "달빛으로 만든 드레스", price: 15_000_000_000_000, category: "명품", description: "광섬유 직조. 밤에 빛남", emoji: "👗", luxuryLevel: 5 },
  { id: "l11", name: "세계 최초 인쇄 성경", price: 8_000_000_000_000, category: "명품", description: "구텐베르크 42행 성경. 읽지는 않음", emoji: "📖", luxuryLevel: 4 },
  { id: "l12", name: "타이타닉 인양 조각", price: 20_000_000_000_000, category: "명품", description: "거실 장식용. 손님들이 매번 울음", emoji: "🚢", luxuryLevel: 6 },

  // ===================== 황당한것 (15개) =====================
  { id: "w01", name: "달에 내 이름 새기기", price: 1_000_000_000_000, category: "황당한것", description: "레이저로 새김. 지구에서 보임", emoji: "🌕", luxuryLevel: 2 },
  { id: "w02", name: "세계 최대 생일파티", price: 500_000_000_000, category: "황당한것", description: "10만 명 초대. 케이크가 건물 높이", emoji: "🎂", luxuryLevel: 1 },
  { id: "w03", name: "개인 군대 (퍼레이드용)", price: 3_000_000_000_000, category: "황당한것", description: "전투력 0. 멋있기만 함", emoji: "🎖️", luxuryLevel: 3 },
  { id: "w04", name: "시간 여행 연구소", price: 80_000_000_000_000, category: "황당한것", description: "아직 성공 못 함. 근데 연구소가 멋있음", emoji: "⏰", luxuryLevel: 7 },
  { id: "w05", name: "전 세계 와이파이 무료화", price: 200_000_000_000_000, category: "황당한것", description: "인류 최대 공헌. 감사는 안 함", emoji: "📡", luxuryLevel: 8 },
  { id: "w06", name: "나만의 화폐 발행", price: 50_000_000_000_000, category: "황당한것", description: "내 얼굴이 지폐에. 환율은 의미 없음", emoji: "💵", luxuryLevel: 6 },
  { id: "w07", name: "지구 반대편까지 터널", price: 300_000_000_000_000, category: "황당한것", description: "서울에서 브라질까지 직통. 40분 소요", emoji: "🕳️", luxuryLevel: 9 },
  { id: "w08", name: "날씨 조종 위성", price: 400_000_000_000_000, category: "황당한것", description: "비 오는 날 싫으면 그냥 맑게 바꿈", emoji: "🌤️", luxuryLevel: 10 },
  { id: "w09", name: "세계 인구 전원에게 1만원", price: 80_000_000_000_000, category: "황당한것", description: "80억 명 × 1만원. 고마워하는 사람 0명", emoji: "🤝", luxuryLevel: 7 },
  { id: "w10", name: "유령의 집 (진짜 유령)", price: 5_000_000_000_000, category: "황당한것", description: "심령 연구소 겸용. 유령이 월세를 안 냄", emoji: "👻", luxuryLevel: 4 },
  { id: "w11", name: "세계에서 가장 큰 미끄럼틀", price: 2_000_000_000_000, category: "황당한것", description: "에베레스트 꼭대기에서 베이스캠프까지", emoji: "🛝", luxuryLevel: 3 },
  { id: "w12", name: "개인 위키피디아 서버", price: 1_000_000_000_000, category: "황당한것", description: "내 이름 문서가 가장 길어짐", emoji: "📚", luxuryLevel: 2 },
  { id: "w13", name: "세계 모든 자판기 무료화", price: 30_000_000_000_000, category: "황당한것", description: "음료수 혁명. 코카콜라 주가 폭락", emoji: "🥤", luxuryLevel: 6 },
  { id: "w14", name: "지구본 실물 크기 제작", price: 100_000_000_000_000, category: "황당한것", description: "지구 옆에 지구 하나 더. 혼란 유발", emoji: "🌍", luxuryLevel: 8 },
  { id: "w15", name: "모든 신호등 파란불 고정", price: 10_000_000_000_000, category: "황당한것", description: "교통사고 책임은 안 짐", emoji: "🚦", luxuryLevel: 5 },
  { id: "w16", name: "VVIP 동물병원 평생 진찰권", price: 7_000_000_000_000, category: "황당한것", description: "못 고치는 병이 없음. 공룡도 부활시켜 줌", emoji: "🏥", luxuryLevel: 5 },

  // ===================== 음식 (12개) =====================
  { id: "f01", name: "미슐랭 3스타 전속 셰프", price: 100_000_000_000, category: "음식", description: "라면 끓여달라고 해도 됨", emoji: "👨‍🍳", luxuryLevel: 0 },
  { id: "f02", name: "금가루 스테이크 평생 이용권", price: 50_000_000_000, category: "음식", description: "소화는 안 되지만 인스타는 됨", emoji: "🥩", luxuryLevel: 0 },
  { id: "f03", name: "세계 최대 초콜릿 공장", price: 500_000_000_000, category: "음식", description: "윌리 윙카가 울고 갈 스케일", emoji: "🍫", luxuryLevel: 1 },
  { id: "f04", name: "송로버섯 농장", price: 300_000_000_000, category: "음식", description: "돼지가 매일 출근해서 캐줌", emoji: "🍄", luxuryLevel: 1 },
  { id: "f05", name: "참치 한 마리 (경매 최고가)", price: 80_000_000_000, category: "음식", description: "스시 2000점 분량. 혼자 다 먹을 거임", emoji: "🐟", luxuryLevel: 0 },
  { id: "f06", name: "와규 목장", price: 2_000_000_000_000, category: "음식", description: "소에게 맥주 먹이고 마사지 해줌", emoji: "🐄", luxuryLevel: 2 },
  { id: "f07", name: "세계 최대 와인 셀러", price: 5_000_000_000_000, category: "음식", description: "10만 병 보유. 하루 1병씩 마시면 274년", emoji: "🍾", luxuryLevel: 3 },
  { id: "f08", name: "개인 라면 공장", price: 1_000_000_000_000, category: "음식", description: "내 취향대로 면발 굵기 조절 가능", emoji: "🍜", luxuryLevel: 2 },
  { id: "f09", name: "사프란 밭 100만 평", price: 3_000_000_000_000, category: "음식", description: "세계에서 가장 비싼 향신료를 뿌리듯 씀", emoji: "🌾", luxuryLevel: 3 },
  { id: "f10", name: "해저 레스토랑 체인", price: 8_000_000_000_000, category: "음식", description: "창밖에 고래가 지나감. 분위기 甲", emoji: "🐋", luxuryLevel: 4 },
  { id: "f11", name: "우주 음식 연구소", price: 15_000_000_000_000, category: "음식", description: "무중력에서도 맛있는 피자를 만드는 연구", emoji: "🍕", luxuryLevel: 5 },
  { id: "f12", name: "전 세계 치킨집 프랜차이즈", price: 30_000_000_000_000, category: "음식", description: "지구 어디서든 내 치킨. 배달비 무료", emoji: "🍗", luxuryLevel: 6 },

  // ===================== 엔터 (12개) =====================
  { id: "e01", name: "할리우드 영화 제작", price: 500_000_000_000, category: "엔터", description: "주연은 당연히 나. 연기력은 0", emoji: "🎬", luxuryLevel: 1 },
  { id: "e02", name: "전속 K-POP 아이돌 그룹", price: 300_000_000_000, category: "엔터", description: "생일마다 콘서트 열어줌", emoji: "🎤", luxuryLevel: 1 },
  { id: "e03", name: "넷플릭스 오리지널 시리즈", price: 2_000_000_000_000, category: "엔터", description: "내 인생 이야기. 시즌 12까지 확정", emoji: "📺", luxuryLevel: 2 },
  { id: "e04", name: "디즈니랜드 개인 소유", price: 30_000_000_000_000, category: "엔터", description: "줄 안 서도 됨. 매일이 패스트패스", emoji: "🏰", luxuryLevel: 5 },
  { id: "e05", name: "BTS 단독 콘서트 (관객 나만)", price: 1_000_000_000_000, category: "엔터", description: "아미가 울고 갈 럭셔리", emoji: "💜", luxuryLevel: 2 },
  { id: "e06", name: "게임회사 인수", price: 10_000_000_000_000, category: "엔터", description: "내가 원하는 게임만 만들게 함", emoji: "🕹️", luxuryLevel: 4 },
  { id: "e07", name: "개인 IMAX 영화관", price: 500_000_000_000, category: "엔터", description: "300인치 스크린에 혼자 팝콘", emoji: "🍿", luxuryLevel: 1 },
  { id: "e08", name: "세계 최대 놀이공원", price: 50_000_000_000_000, category: "엔터", description: "롤러코스터가 음속 돌파", emoji: "🎢", luxuryLevel: 6 },
  { id: "e09", name: "유튜브 채널 (1억 구독자 보장)", price: 5_000_000_000_000, category: "엔터", description: "구독자 샀다고? 아니 투자한 거야", emoji: "📱", luxuryLevel: 3 },
  { id: "e10", name: "K-드라마 방송국", price: 8_000_000_000_000, category: "엔터", description: "모든 드라마에 까메오 출연 가능", emoji: "📡", luxuryLevel: 4 },
  { id: "e11", name: "메타버스 세계 구축", price: 20_000_000_000_000, category: "엔터", description: "가상 세계에서 나는 신", emoji: "🥽", luxuryLevel: 5 },
  { id: "e12", name: "달에서 콘서트 개최", price: 80_000_000_000_000, category: "엔터", description: "소리가 안 들리지만 분위기는 최고", emoji: "🎵", luxuryLevel: 7 },

  // ===================== 기술 (12개) =====================
  { id: "t01", name: "AI 비서 (진짜 로봇)", price: 200_000_000_000, category: "기술", description: "시리보다 100배 똑똒. 농담도 함", emoji: "🤖", luxuryLevel: 1 },
  { id: "t02", name: "양자 컴퓨터", price: 5_000_000_000_000, category: "기술", description: "뭔지는 모르겠지만 빠르다고 함", emoji: "💻", luxuryLevel: 3 },
  { id: "t03", name: "뇌-컴퓨터 인터페이스", price: 10_000_000_000_000, category: "기술", description: "생각만으로 구글 검색 가능", emoji: "🧠", luxuryLevel: 4 },
  { id: "t04", name: "불로장생 연구소", price: 50_000_000_000_000, category: "기술", description: "아직 성공 못 함. 연구원들이 먼저 늙어감", emoji: "🧬", luxuryLevel: 6 },
  { id: "t05", name: "핵융합 발전소", price: 80_000_000_000_000, category: "기술", description: "무한 에너지. 전기세 걱정 끝", emoji: "⚛️", luxuryLevel: 7 },
  { id: "t06", name: "개인 데이터센터", price: 3_000_000_000_000, category: "기술", description: "클라우드? 나는 그냥 내 서버 씀", emoji: "🖥️", luxuryLevel: 3 },
  { id: "t07", name: "투명 망토 (프로토타입)", price: 15_000_000_000_000, category: "기술", description: "80% 투명. 발은 보임", emoji: "🧥", luxuryLevel: 5 },
  { id: "t08", name: "개인 GPS 위성 3기", price: 8_000_000_000_000, category: "기술", description: "내 위치만 초정밀 추적", emoji: "🛰️", luxuryLevel: 4 },
  { id: "t09", name: "로봇 강아지 (진짜 같은)", price: 500_000_000_000, category: "기술", description: "산책도 시키고 충전도 시킴", emoji: "🐕", luxuryLevel: 1 },
  { id: "t10", name: "홀로그램 회의 시스템", price: 2_000_000_000_000, category: "기술", description: "재택근무의 끝판왕", emoji: "📽️", luxuryLevel: 2 },
  { id: "t11", name: "클론 연구소", price: 100_000_000_000_000, category: "기술", description: "나를 복제... 윤리위원회가 뛰어옴", emoji: "🧪", luxuryLevel: 8 },
  { id: "t12", name: "차원 이동 게이트 (연구중)", price: 200_000_000_000_000, category: "기술", description: "다른 차원에 내 복사본이 산다는 가설 검증중", emoji: "🌀", luxuryLevel: 9 },

  // ===================== 자연 (10개) =====================
  { id: "n01", name: "아마존 열대우림 1%", price: 5_000_000_000_000, category: "자연", description: "내 숲에서 신종 동물이 발견됨", emoji: "🌳", luxuryLevel: 3 },
  { id: "n02", name: "개인 동물원 (멸종위기종)", price: 3_000_000_000_000, category: "자연", description: "판다가 나만 보면 꼬리 흔듦", emoji: "🐼", luxuryLevel: 3 },
  { id: "n03", name: "그레이트 배리어 리프 복원", price: 20_000_000_000_000, category: "자연", description: "산호를 되살림. 물고기들이 감사 편지 보냄", emoji: "🐠", luxuryLevel: 5 },
  { id: "n04", name: "개인 화산 (인공)", price: 10_000_000_000_000, category: "자연", description: "불꽃놀이 대신 용암 분출. 위험하지만 멋있음", emoji: "🌋", luxuryLevel: 4 },
  { id: "n05", name: "북극곰 보호구역", price: 8_000_000_000_000, category: "자연", description: "곰들이 에어컨 달린 빙하에서 삼", emoji: "🐻‍❄️", luxuryLevel: 4 },
  { id: "n06", name: "세계 최대 수족관", price: 5_000_000_000_000, category: "자연", description: "고래상어가 유턴을 못할 정도로 큼", emoji: "🦈", luxuryLevel: 3 },
  { id: "n07", name: "사막에 인공 오로라", price: 15_000_000_000_000, category: "자연", description: "두바이 하늘에 매일 밤 오로라 생성", emoji: "🌌", luxuryLevel: 5 },
  { id: "n08", name: "개인 국립공원", price: 30_000_000_000_000, category: "자연", description: "입장료? 내 땅인데 내가 왜 내", emoji: "🏞️", luxuryLevel: 6 },
  { id: "n09", name: "바다 한가운데 숲 섬", price: 50_000_000_000_000, category: "자연", description: "태평양에 인공섬 만들고 나무 10만 그루 심음", emoji: "🌲", luxuryLevel: 7 },
  { id: "n10", name: "지구 산소 1% 생산 시설", price: 100_000_000_000_000, category: "자연", description: "인류가 숨 쉬는 데 내가 기여 중", emoji: "💨", luxuryLevel: 8 },
];

// 숨겨진 칭호 (20개)
export interface HiddenTitle {
  id: string;
  name: string;
  description: string;
  requiredItems: string[];
}

export const HIDDEN_TITLES: HiddenTitle[] = [
  { id: "t01", name: "🏆 구단 재벌", description: "축구팀+농구팀+야구팀 보유", requiredItems: ["p01", "p02", "p03"] },
  { id: "t02", name: "🌌 우주 황제", description: "우주 아이템 5개 이상 보유", requiredItems: ["s01", "s02", "s03", "s04", "s05"] },
  { id: "t03", name: "🏠 부동산 킹", description: "부동산 5개 이상 보유", requiredItems: ["r01", "r02", "r03", "r04", "r05"] },
  { id: "t04", name: "🚗 차고지 왕", description: "탈것 5개 이상 보유", requiredItems: ["v01", "v02", "v03", "v04", "v05"] },
  { id: "t05", name: "🤯 완전 미친 사람", description: "황당한것 전부 구매", requiredItems: ["w01", "w02", "w03", "w04", "w05", "w06", "w07", "w08", "w09", "w10", "w11", "w12", "w13", "w14", "w15", "w16"] },
  { id: "t06", name: "💰 천조 마스터", description: "모든 아이템 구매", requiredItems: [] },
  { id: "t07", name: "🎨 예술혼", description: "모나리자 + 공룡 화석 + 빈티지 와인", requiredItems: ["l03", "l06", "l07"] },
  { id: "t08", name: "🌍 세계 정복자", description: "두바이 섬 + 모나코 해안 + 하와이 화산섬", requiredItems: ["r04", "r05", "r08"] },
  { id: "t09", name: "⚡ 스피드광", description: "람보르기니 + 초음속기 + 하늘을 나는 자동차", requiredItems: ["v01", "v07", "v08"] },
  { id: "t10", name: "🎪 파티 킹", description: "생일파티 + 올림픽 + 개인 군대", requiredItems: ["w02", "p05", "w03"] },
  { id: "t11", name: "🍽️ 미식 황제", description: "셰프 + 와규 + 와인 셀러 + 치킨 프랜차이즈", requiredItems: ["f01", "f06", "f07", "f12"] },
  { id: "t12", name: "🎬 엔터 재벌", description: "영화 + 넷플릭스 + 게임회사 + 유튜브", requiredItems: ["e01", "e03", "e06", "e09"] },
  { id: "t13", name: "🔬 매드 사이언티스트", description: "AI + 양자컴퓨터 + 클론 + 불로장생", requiredItems: ["t01", "t02", "t11", "t04"] },
  { id: "t14", name: "🐼 동물 수호자", description: "동물원 + 북극곰 보호 + 수족관 + 산호 복원", requiredItems: ["n02", "n05", "n06", "n03"] },
  { id: "t15", name: "🏝️ 섬 컬렉터", description: "두바이 섬 + 몰디브 + 하와이 + 바다 숲 섬", requiredItems: ["r04", "r10", "r08", "n09"] },
  { id: "t16", name: "🚀 일론 머스크 2세", description: "제트기 + 화성 + 테라포밍 + 핵융합", requiredItems: ["v03", "s03", "s09", "t05"] },
  { id: "t17", name: "🎮 게이머", description: "LCK + 게임회사 + 메타버스", requiredItems: ["p08", "e06", "e11"] },
  { id: "t18", name: "👑 진정한 왕", description: "화폐 발행 + 개인 군대 + 모나코 해안", requiredItems: ["w06", "w03", "r05"] },
  { id: "t19", name: "🍕 배달의 신", description: "라면 공장 + 치킨 프랜차이즈 + 자판기 무료화", requiredItems: ["f08", "f12", "w13"] },
  { id: "t20", name: "☁️ 하늘 위의 존재", description: "구름 하우스 + 비행 자동차 + 날씨 위성", requiredItems: ["r15", "v08", "w08"] },
];

// 사치 레벨 정의
export const LUXURY_LEVELS = [
  { level: 0, name: "평민", threshold: 0, emoji: "👤" },
  { level: 1, name: "부자", threshold: 100_000_000_000, emoji: "💰" },
  { level: 2, name: "재벌", threshold: 1_000_000_000_000, emoji: "🤑" },
  { level: 3, name: "국가급 부자", threshold: 5_000_000_000_000, emoji: "👑" },
  { level: 4, name: "대륙의 지배자", threshold: 20_000_000_000_000, emoji: "🌍" },
  { level: 5, name: "세계 최고 부호", threshold: 50_000_000_000_000, emoji: "🏰" },
  { level: 6, name: "전설의 탕진왕", threshold: 100_000_000_000_000, emoji: "🔥" },
  { level: 7, name: "차원이 다른 소비", threshold: 200_000_000_000_000, emoji: "⚡" },
  { level: 8, name: "인류 역사급 낭비", threshold: 400_000_000_000_000, emoji: "💫" },
  { level: 9, name: "우주적 스케일", threshold: 700_000_000_000_000, emoji: "🌌" },
  { level: 10, name: "신의 경지", threshold: 999_000_000_000_000, emoji: "✨" },
];

// 구매 시 랜덤 코멘트 (30개)
export const PURCHASE_COMMENTS = [
  "이 돈이면 국가 부채를 갚을 수도 있었지만, 그냥 이걸 삼",
  "은행원이 울고 있습니다",
  "세금? 그게 뭐죠?",
  "이제 이 도시의 절반은 당신 것",
  "배달비는 별도입니다 (농담)",
  "환불은 안 됩니다 ㅎ",
  "통장이 비명을 지릅니다",
  "이걸 산다고? 진짜? 레전드",
  "당신의 할머니가 이걸 보면 기절할 거예요",
  "GDP 몇 개를 날리셨습니다",
  "축하합니다. 아무 의미 없는 소비였습니다",
  "이런 걸 살 수 있다는 게 부럽다",
  "지금 웃고 계시죠? 저도요",
  "쓸데없지만 기분은 좋잖아요",
  "이 돈으로 작은 나라를 살 수 있었음",
  "엄마한테 들키면 안 됩니다",
  "당신의 재무설계사가 퇴사했습니다",
  "이 영수증은 세계 기록에 등재됩니다",
  "돈이 울면서 떠났습니다",
  "이제 후회해도 늦었어요 ㅋㅋ",
  "당신은 진정한 소비의 예술가입니다",
  "이거 사면 뭐가 달라지냐고요? 아무것도요",
  "돈은 돌고 도는 거라더니 당신에겐 안 돌아옴",
  "방금 중소기업 하나가 사라졌습니다",
  "이 정도면 나라에서 연락 올 수도...",
  "지갑이 텅 비어가는 소리가 들리시나요?",
  "다음 생에는 좀 아껴 쓰세요",
  "부모님이 보면 감동의 눈물을 흘릴 겁니다 (분노의)",
  "이 소비, 역사에 남을 것입니다",
  "축하드립니다. 당신은 공식적으로 미쳤습니다",
];

// 통계 메시지
export const getStatMessage = (spent: number): string => {
  const billions = spent / 1_000_000_000;
  if (billions < 100) return "아직 워밍업 단계입니다";
  if (billions < 500) return `서울 아파트 ${Math.floor(billions / 20)}채를 살 수 있는 돈을 날렸습니다`;
  if (billions < 1000) return `중소기업 ${Math.floor(billions / 50)}개를 살 수 있는 돈을 태웠습니다`;
  if (billions < 5000) return `대기업 ${Math.floor(billions / 1000)}개 매수 가능했던 금액입니다`;
  if (billions < 10000) return `국가 예산 ${Math.floor(billions / 5000)}개를 태웠습니다`;
  if (billions < 50000) return `${Math.floor(billions / 10000)}개 나라의 GDP를 증발시켰습니다`;
  if (billions < 100000) return `전 세계 빈곤층을 ${Math.floor(billions / 50000)}번 구할 수 있는 돈이었습니다`;
  if (billions < 500000) return `달 기지를 ${Math.floor(billions / 100000)}개 지을 수 있었습니다`;
  return "인류 역사상 가장 무의미한 소비를 하셨습니다. 축하드립니다.";
};

export const INITIAL_MONEY = 1_000_000_000_000_000; // 천조
