import type { AiStage } from '@/lib/ai-guide-content';

export function AiStageCard({ stage, open = false }: { stage: AiStage; open?: boolean }) {
  return <details className="ai-stage-card" open={open}>
    <summary>
      <span>{stage.id}</span>
      <strong>{stage.title}</strong>
      <em>{stage.owner}</em>
    </summary>
    <div className="ai-stage-card-body">
      <p className="ai-stage-summary">{stage.summary}</p>
      <div className="ai-stage-contract-grid">
        <section><h4>반드시 필요한 값</h4><ul>{stage.required.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h4>있으면 더 정확한 값</h4><ul>{stage.optional.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h4>이 단계가 만드는 값</h4><ul>{stage.outputs.map((item) => <li key={item}>{item}</li>)}</ul></section>
      </div>
      <div className="ai-stage-handoff">
        <p><b>문제가 생기면</b>{stage.fallback}</p>
        <p><b>다음 단계로</b>{stage.next}</p>
      </div>
    </div>
  </details>;
}
