import { t as require_jsx_runtime } from "../index.js";
//#region src/components/reveal.tsx
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `reveal ${className}`,
		children
	});
}
function Stagger({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `stagger ${className}`,
		children
	});
}
//#endregion
export { Stagger as n, Reveal as t };
