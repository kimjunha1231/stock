import { Reveal, Stagger } from '@/components/reveal';

const roles = [
  { title: '계열사 책임 담당자', label: 'OWNER', body: '자사 상품·재고·배송·설치 비용 조건을 가장 잘 알고, 전략을 검토·승인하며 외부 결과를 확인합니다.', bullets: ['위험 항목 확인', '전략 비교·시뮬레이션', '승인·외부 전달 요청', '결과 회신'] },
  { title: '통합 운영·관리자', label: 'GOVERNANCE', body: '모든 전략을 대신 승인하지 않습니다. 공통 지표와 예외 기준을 관리하고 계열사 간 조정이 필요할 때 개입합니다.', bullets: ['계열사 성과 비교', '공통 비용·예산 기준 관리', '브랜드·법규 예외 검토', '우수 사례 확산'] },
  { title: '협력 부서', label: 'COLLABORATE', body: '물류·마케팅·재무·정산·법무 담당자는 전략 비용과 정책을 확인해야 하는 케이스에만 참여합니다.', bullets: ['배송·설치·콜드체인 비용 확인', '프로모션 조건 검토', '비용·정산 확정', '외부 결과 데이터 연결'] },
];

export default function RolesPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">04 · Roles</span></Reveal><Reveal><h1>모두가 같은 화면을 보되,<br /><em>같은 책임</em>을 지지는 않습니다.</h1></Reveal><Reveal><p>계열사·역할·채널별 정보 범위를 분리해야 담당자는 주도권을 갖고, 통합 운영은 공통 기준과 예외만 조정할 수 있습니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Distributed responsibility</span><h2>주도권은 계열사에,<br />공통 언어는 통합 서비스에.</h2></div><Stagger className="role-grid">{roles.map((role, index) => <article className={`role-card ${index === 0 ? 'featured' : ''}`} key={role.title}><span className="role-label">{role.label}</span><h3>{role.title}</h3><p>{role.body}</p><ul style={{paddingLeft: 17, marginTop: 18}}>{role.bullets.map((bullet) => <li key={bullet} style={{fontSize: 12, lineHeight: 1.8, color: index === 0 ? '#dce8ff' : undefined}}>{bullet}</li>)}</ul></article>)}</Stagger></div></section>
    <section className="section-tight band"><div className="container"><div className="section-heading"><span className="eyebrow">Escalation only when needed</span><h2>통합 운영은 통제자가 아니라<br />조정자입니다.</h2><p>공동 프로모션, 추가 예산, 계열사 간 정산·소유권 충돌, 법규·브랜드 위험, 합의 실패가 있을 때만 통합 검토가 시작됩니다.</p></div></div></section>
  </>;
}
