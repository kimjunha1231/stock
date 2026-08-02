import pathlib

# Update generate_docs.py
gen_path = pathlib.Path('generate_docs.py')
gen_code = gen_path.read_text(encoding='utf-8')

old_be = """    add_h2("2.2 백엔드 (Backend)")
    headers_be = ["기술 스택", "필요성 & 개발 기능", "비교 대안 및 선택 이유", "트레이드오프 (Trade-off)"]
    widths_be = [1.2, 2.3, 1.8, 1.2]
    data_be = [
        ["Java 21 + Spring Boot 3.3", "RESTful API, 가상 스레드(Virtual Threads) 기반 동시 요청 고성능 처리", "vs Node.js / Python\\n대기업 엔터프라이즈 환경에서의 안정성, 멀티스레드 동시성, 풍부한 생태계", "Node.js 대비 초기 메모리 점유율 존재"],
        ["MyBatis 3.5+ (단독 채택, JPA 미사용)", "[단독 데이터 접근 계층] 재고 CRUD, 다중 조건 동적 필터링, 대용량 손실 집계 리포트, Window Function/CTE SQL 등 전체 DB 처리 전담", "vs JPA + QueryDSL / JPA 단독\\nJPA와 SQL 매퍼 동시 도입에 따른 복잡도를 배제하고, 개발자가 SQL을 100% 직접 작성 및 제어·튜닝 가능. 동적 쿼리는 MyBatis <if>, <choose>, <where> 태그 활용", "XML 매핑 파일 작성 및 쿼리 관리 필요 (자바 오타 컴파일 체크 미지원)"],
        ["Spring State Machine", "위험탐지➔검토➔본사승인➔실행➔완료 상태 전이 규칙 엄격 제어", "vs Enum + If/Else\\n상태 점프나 오작동을 차단하고 상태 변경 이벤트를 체계적으로 후킹함", "초기 트랜지션 구조 복잡도"],
        ["Spring Security + JWT", "더현대 서울 담당자 vs 본사 담당자 역할 기반 권한 제어 (RBAC)", "vs Session Auth\\n무상태(Stateless) API로 캐시 및 확장성이 우수함", "토큰 탈취 대비 무효화 레디스 연동 필요"],
        ["Spring Batch 5 + Quartz", "매일 새벽 02시 전 점포 직매입 재고 일일 손실액 및 위험도 자동 갱신", "vs Spring @Scheduled\\nQuartz DB 락(Clustering)을 통해 서버 이중화 시 중복 배치 실행 사고 완벽 방지", "Quartz DB 테이블 생성 및 설정 필요"],
        ["JUnit 5 + Mockito + Testcontainers", "서비스 로직 및 Docker 기반 실 PostgreSQL/Redis 실전 통합 테스트", "vs H2 메모리 DB\\nH2와 PostgreSQL 간 JSONB/SQL 차이 오류를 방지하고 실전 환경과 동일 검증", "Docker 기반 테스트 실행 시간 증가"]
    ]
    t_be = doc.add_table(rows=len(data_be) + 1, cols=4)
    style_table(t_be, widths_be, headers_be, data_be)"""

new_be = """    add_h2("2.2 백엔드 (Backend) 기술 스택 역할 & 핵심 장점")
    headers_be = ["기술 스택", "무엇을 하는가? (주요 역할 & 기능)", "핵심 장점 (Key Benefits)", "비교 대안 & 트레이드오프"]
    widths_be = [1.3, 2.0, 1.8, 1.4]
    data_be = [
        ["Java 21 + Spring Boot 3.4", "엔터프라이즈 REST API 서비스, 멀티스레드 동시 요청 처리 및 트랜잭션 보장", "• Virtual Threads로 I/O 처리량 극대화\\n• 안정적인 대기업 엔터프라이즈 생태계\\n• 강력한 멀티스레드 트랜잭션 처리", "vs Node.js / Python\\nSAP ERP/WMS 사내 인프라 연동 시 최고의 안정성과 트랜잭션 보장"],
        ["Spring Data JPA + QueryDSL 5.x", "재고 도메인 CRUD 및 다중 조건 동적 필터링 검색 (층, 카테고리, D-Day 등)", "• Q-Class 자바 코드 기반 컴파일 타임 쿼리 검증\\n• 오타 및 리팩터링 오류 사전 차단\\n• 복잡한 동적 필터 조건 선언적 구현", "vs Native SQL / MyBatis\\n문자열 SQL 오류 위험 없이 안전한 자바 코드로 복잡한 검색 쿼리 작성"],
        ["Explicit Transition Service", "위험탐지➔검토➔승인➔실행➔완료 전이 통제, @Version 낙관적 잠금 및 감사 이력 기록", "• 동일 재고 이중 승인 동시성 문제 완벽 방지\\n• 모든 승인 주체·시각의 불변 감사 로그 확보\\n• 1달 구축에 특화된 직관적 전이 제어", "vs Spring State Machine\\n무거운 프레임워크 오버헤드 없이 Enum + DB 낙관적 잠금으로 확실한 방어"],
        ["Spring Batch 5 + Spring @Scheduled", "매일 새벽 02시 전체 점포 직매입 재고 일일 손실액 및 위험도 자동 스냅샷 집계", "• 실패 시 장애 지점부터 재시작(Restart) 보장\\n• 청크(Chunk) 기반 대용량 트랜잭션 분할\\n• 새벽 시간대 시스템 자원 효율적 활용", "vs Quartz 복합 구성\\n단일 배치 책임으로 복잡성을 낮추고 대용량 스냅샷 집계 안정성 확보"],
        ["Spring Security OAuth2 / OIDC", "사내 SSO/IdP 연동, 점포 담당자 vs 본사 예외 승인자 역할 기반 접근 권한(RBAC) 통제", "• 사내 계정 SSO 원클릭 인증 연동\\n• 역할별 최소 권한(RBAC) 엄격 적용\\n• 승인 권한 없는 사용자의 조작 차단", "vs 커스텀 JWT 자체 발급\\n엔터프라이즈 사내 IdP 표준을 사용하여 토큰 탈취 및 보안 리스크 차단"]
    ]
    t_be = doc.add_table(rows=len(data_be) + 1, cols=4)
    style_table(t_be, widths_be, headers_be, data_be)"""

if "add_h2(\"2.2 백엔드 (Backend)\")" in gen_code:
    gen_code = gen_code.replace(old_be, new_be)
    gen_path.write_text(gen_code, encoding='utf-8')
    print("Updated generate_docs.py")
else:
    print("Could not find old_be pattern in generate_docs.py")

