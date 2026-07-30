import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import Link from "./link-BjpPdlMN.js";
import { t as getTerm } from "./content-CP3VqNSw.js";
//#region src/components/term-hint.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function TermHint({ id }) {
	const term = getTerm(id);
	const [open, setOpen] = (0, import_react.useState)(false);
	if (!term) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "term-wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "term-button",
			type: "button",
			"aria-expanded": open,
			onClick: () => setOpen((value) => !value),
			children: [term.term, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: "ⓘ"
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "term-popover",
			role: "dialog",
			"aria-label": `${term.term} 설명`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: term.term }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: term.short }),
				term.formula && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: term.formula }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					href: `/glossary#${term.id}`,
					onClick: () => setOpen(false),
					children: "사전에서 자세히 보기 →"
				})
			]
		})]
	});
}
//#endregion
export { TermHint };
