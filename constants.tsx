
import { ProjectData } from './types';

export const PROJECTS: ProjectData[] = [
  {
    id: '01',
    title: 'Korea Shoe Design Award',
    subtitle: '한국신발디자인어워드',
    overview: '한국신발디자인협회가 주최하고 부산광역시가 후원한 국내 대표 신발 디자인 공모전으로, AI 기반 첨단 신발을 주제로 멀티 유즈 풋웨어를 디자인한 프로젝트 입니다.',
    role: '개인 출품',
    perspective: '기존 외형 중심 접근에서 벗어나 기능 분석 → 구조 설계 → 형태 결정 프로세스로 전환',
    deliverables: [
      '기능 분석 기반 러닝화 비주얼 콘셉트',
      '압력 분포 및 반사 시뮬레이션 시각화 자료',
      '구조 다이어그램 및 최종 콘셉트 보드'
    ],
    outcome: '후원기업상 수상. 시상 기업 대표로부터 "기능 접근이 명확하고, 데이터를 근거로 한 설계가 돋보인다"는 긍정적 평가 확보.',
    tags: ['Footwear', 'Function-First', 'Award Winning']
  },
  {
    id: '02',
    title: 'MODE Fashion Magazine',
    subtitle: 'Print Magazine & Digital Media',
    overview: 'MODE는 패션디자인학과 내에서 창립·운영한 패션 매거진으로, 실물 잡지에서 SNS 기반 디지털 매거진으로 확장하며 매체 변화에 따라 정보 구조와 전달 방식을 재설계한 프로젝트입니다.',
    role: '공동 창립 멤버, 비주얼 디자인 및 콘텐츠 구조 설계 담당',
    chapters: [
      {
        title: 'Chapter A. Print Magazine',
        subtitle: 'Physical Editorial Structure Design',
        perspective: '실물 매거진에서는 단순히 이미지를 배치하는 것이 아니라, 독자가 페이지를 넘기며 정보를 자연스럽게 이해하도록 만드는 ‘지면 정보 구조’에 집중했습니다. 콘텐츠의 중요도에 따라 시각적 위계를 설정하고, 헤드라인–비주얼–본문 간의 흐름이 명확히 읽히도록 설계했습니다.',
        deliverables: [
          '실물 매거진 지면 디자인',
          '콘텐츠 카테고리 구조 다이어그램',
          '지면 레이아웃 가이드'
        ],
        outcome: '콘텐츠 성격에 따라 명확히 구분되는 지면 구조 완성. 독자 피드백에서 "읽기 편하다", "구성이 명확하다"는 평가 확보.'
      },
      {
        title: 'Chapter B. SNS & Digital',
        subtitle: 'Data-driven Content Optimization',
        perspective: 'SNS로의 확대를 위해 Instagram Insights를 통한 주요 지표 수집, Google Sheets로 조회수·유지율·반응 데이터 구조화를 통해 성과가 높은 컨텐츠의 공통 요소를 도출하여 단기간 빠른 성장을 이루었습니다.',
        deliverables: [
          'SNS 콘텐츠 디자인 (이미지, 릴스)',
          '데이터 정리 시트 (Google Sheets)',
          '콘텐츠 구조 개선 전·후 비교 자료',
          '반복 활용 가능한 콘텐츠 템플릿'
        ],
        outcome: '릴스 최고 조회수 12만 회 기록 및 계정 개설 3개월 만에 팔로워 500명 달성. 콘텐츠 기획 기준이 감각 중심에서 데이터 기반 구조 설계 방식으로 전환되었습니다.'
      }
    ],
    tags: ['Editorial', 'SNS Strategy', 'Data Analysis']
  },
  {
    id: '03',
    title: 'Fashion Product Planning Contest',
    subtitle: '패션상품기획공모전',
    overview: '한국의류학회에서 개최한 패션상품기획공모전에 참여해, ‘출근할 때 입고 싶은 한복’이라는 주제로 브랜드 ‘CCOMAQUE(꼬마크)’의 상품을 기획하였습니다. 또한 기획한 상품에 대한 홍보 전략을 사용자 경험을 기반으로 확장하고, 모바일 앱 UX 흐름을 시각적으로 설계한 프로젝트입니다.',
    role: '팀 프로젝트 참여 (소비자 조사 분석 및 기획 전략 시각화, AI 맞춤 디자인 모바일 앱 UX 기획, UI 비주얼 디자인)',
    perspective: '기존 상품 기획이 제품 구성에 머무는 한계를 넘어, 사용자가 어떻게 브랜드를 경험하는가를 기획의 중심에 두었습니다. 특히 한복이라는 낯선 아이템을 더 쉽게 접할 수 있도록 AI 기반 맞춤 디자인을 제공하는 모바일 앱 경험을 핵심 솔루션으로 설정했습니다.',
    deliverables: [
      '브랜드·상품 전략 인포그래픽',
      '소비자 니즈 분석 시각 자료',
      '모바일 앱 UX Flow 다이어그램',
      'AI 맞춤 디자인 앱 UI 비주얼 디자인',
      '기획 발표용 PPT 자료'
    ],
    outcome: '공모전 입선. 브랜드 대표의 "기획 의도가 직관적으로 이해된다"는 긍정적 평가.',
    tags: ['UX/UI', 'Planning', 'Strategy']
  },
  {
    id: '04',
    title: 'T.DDO',
    subtitle: 'Multi-department Apparel Design & Production Project',
    overview: 'T.DDO는 패션디자인학과 학생들로 구성된 자체제작 단체복 프로젝트로, 4개 학과의 아이덴티티를 반영한 로고와 의류 비주얼을 직접 디자인하고, 과잠·바람막이·반팔 티셔츠 3종의 의류 아이템을 하나의 비주얼 시스템으로 설계한 프로젝트입니다.',
    role: '프로젝트 팀장 (업체 리서치, 비주얼 디자인 전반, 주문 및 일정 관리)',
    perspective: '단체복 디자인을 단순한 로고 배치가 아닌, 각 학과의 성격과 사용 환경을 시각 언어로 해석하는 브랜딩 작업으로 접근했습니다. 또한 디자인 결과물이 실제 착용과 제작으로 이어질 수 있도록 실물 구현을 전제로 한 비주얼 설계 기준을 함께 설정했습니다.',
    deliverables: [
      '학과별 로고 디자인 4종',
      '과잠·바람막이·반팔 티셔츠 의류 비주얼 디자인',
      '로고 크기·배치 가이드',
      '동대문 리서치 기반 소재·컬러 검토 자료',
      '주문 관리용 Google Form/Excel 시트'
    ],
    outcome: '과잠바 제작 후 높은 만족도로 이후 바람막이, 반팔까지 제작 확대. 착용자들로부터 "디자인이 깔끔하고 학과 정체성이 잘 드러난다"는 평가 확보.',
    tags: ['Branding', 'Production', 'Logistics']
  }
];
