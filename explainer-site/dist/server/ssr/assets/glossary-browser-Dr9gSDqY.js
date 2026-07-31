import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import { a as sources, n as glossary } from "./content-Bb1C003s.js";
//#region src/components/glossary-browser.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"전체",
	"기본 개념",
	"재무 기준",
	"재고·물류",
	"마케팅·고객",
	"AI·운영"
];
function GlossaryBrowser() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("전체");
	const terms = (0, import_react.useMemo)(() => glossary.filter((term) => {
		const matchesCategory = category === "전체" || term.category === category;
		const haystack = `${term.term} ${term.short} ${term.definition}`.toLowerCase();
		return matchesCategory && haystack.includes(query.toLowerCase());
	}), [category, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glossary-browser",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "term-search",
				className: "sr-only",
				children: "용어 검색"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "term-search",
				className: "search-box",
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "예: 증분이익, 기준선, 회피비용, D-day"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "filter-row",
				children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `filter-button ${category === item ? "active" : ""}`,
					type: "button",
					onClick: () => setCategory(item),
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "term-list",
				children: terms.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "term-entry",
					id: term.id,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: term.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: term.term }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "term-short",
							children: term.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: term.definition }),
						term.formula && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: term.formula }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "예시" }),
							" · ",
							term.example
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "term-related",
							children: term.related.map((related) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: glossary.find((item) => item.id === related)?.term ?? related }, related))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-source-list",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "근거 위치" }), term.sourceIds.map((sourceId) => {
								const source = sources.find((item) => item.id === sourceId);
								return source ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: source.url?.startsWith("http") ? source.url : `/sources#${source.id}`,
									target: source.url?.startsWith("http") ? "_blank" : void 0,
									rel: source.url?.startsWith("http") ? "noreferrer" : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: source.title }),
										" · ",
										source.location,
										" ↗"
									]
								}, source.id) : null;
							})]
						})
					]
				}, term.id))
			}),
			terms.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "callout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "검색 결과가 없습니다." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "다른 키워드나 전체 카테고리를 선택해 보세요." })]
			})
		]
	});
}
//#endregion
export { GlossaryBrowser };
