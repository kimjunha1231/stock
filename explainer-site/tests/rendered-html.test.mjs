import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Korean inventory explainer", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /InventoryOS/);
  assert.match(html, /재고를 없애는 게 아니라/);
  assert.match(html, /comic-flow\.png/);
});

test("serves the glossary and source register routes", async () => {
  const glossary = await render("/glossary");
  const sources = await render("/sources");
  assert.equal(glossary.status, 200);
  assert.equal(sources.status, 200);
  assert.match(await glossary.text(), /증분이익/);
  assert.match(await sources.text(), /모든 설명에는/);
});

test("serves one production AI guide across all compatible routes", async () => {
  for (const pathname of ["/ai-guide", "/ai-blueprint", "/formulas"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();

    assert.match(html, /실제 서비스 AI 처리 흐름/);
    assert.match(html, /머신러닝·수식·LLM·RAG의 역할/);
    assert.match(html, /총합적으로 필요한 데이터/);
    assert.match(html, /신규 상품/);
    assert.match(html, /계열사 동기화 실패/);
    assert.match(html, /머신러닝 학습·검증·운영/);
    assert.match(html, /최종 AI 결과 계약/);
    assert.doesNotMatch(html, /MVP 비용 프로필/);
  }
});
