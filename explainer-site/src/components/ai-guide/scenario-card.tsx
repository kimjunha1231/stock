import type { SituationPlaybook } from '@/lib/ai-guide-content';

export function ScenarioCard({ scenario }: { scenario: SituationPlaybook }) {
  return <details className="ai-scenario-card">
    <summary>
      <span>상황별 처리</span>
      <strong>{scenario.title}</strong>
      <em>{scenario.signal}</em>
    </summary>
    <div className="ai-scenario-card-body">
      <p className="ai-scenario-decision"><b>판단 기준</b>{scenario.decision}</p>
      <ol>{scenario.flow.map((step) => <li key={step}>{step}</li>)}</ol>
      <div className="ai-scenario-result">
        <p><b>화면 표시</b>{scenario.screen}</p>
        <p><b>다음 행동</b>{scenario.nextAction}</p>
      </div>
    </div>
  </details>;
}
