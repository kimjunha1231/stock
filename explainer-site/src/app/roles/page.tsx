import { Reveal, Stagger } from '@/components/reveal';

const roles = [
  { title: '현대백화점 재고 담당자', label: 'Owner', body: '자사 재고의 상태·비용·물류 조건을 가장 잘 알고, 일반 전략을 승인하고 실행 결과에 책임집니다.', bullets: ['위험재고 확인', '전략 비교·시뮬레이션', '승인·실행 요청', '결과 회신'] },
  { title: '본사 재고전략', label: 'Governance', body: '모든 전략을 대신 승인하지 않습니다. 공통 지표와 예외 기준을 관리하고, 그룹 차원의 조정이 필요할 때 개입합니다.', bullets: ['현대백화점 점포/부서 성과 비교', '공동 비용·예산 조정', '브랜드·법규 예외 검토', '우수 사례 확산'] },
  { title: '협력 부서', label: 'Collaborate', body: '물류·마케팅·재무·정산 담당자는 실행 가능성과 비용 부담을 확인해야 하는 케이스에만 참여합니다.', bullets: ['배송·설치 용량 확인', '프로모션 조건 검토', '비용·정산 확정', '결과 데이터 연결'] },
];

export default function RolesPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">04 · Roles</span></Reveal><Reveal><h1>모두가 같은 화면을 보되,<br /><em>같은 책임</em>을 지지는 않습니다.</h1></Reveal><Reveal><p>권한과 정보의 범위를 분리해야 현대백화점 점포/부서가 주도권을 갖고, 본사는 그룹 차원의 예외를 조정할 수 있습니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Distributed responsibility</span><h2>주도권은 현대백화점 점포/부서에,<br />공통 언어는 그룹에.</h2></div><Stagger className="role-grid">{roles.map((role, index) => <article className={`role-card ${index === 0 ? 'featured' : ''}`} key={role.title}><span className="role-label">{role.label}</span><h3>{role.title}</h3><p>{role.body}</p><ul style={{paddingLeft: 17, marginTop: 18}}>{role.bullets.map((bullet) => <li key={bullet} style={{fontSize: 12, lineHeight: 1.8, color: index === 0 ? '#dce8ff' : undefined}}>{bullet}</li>)}</ul></article>)}</Stagger></div></section>
    <section className="section-tight band"><div className="container"><div className="section-heading"><span className="eyebrow">Escalation only when needed</span><h2>본사는 통제자가 아니라<br />조정자입니다.</h2><p>공동 프로모션, 추가 예산, 그룹 손실, 브랜드·법규 위험, 점포 간 합의 실패가 있을 때만 본사 검토가 시작됩니다.</p></div></div></section>
  </>;
}
