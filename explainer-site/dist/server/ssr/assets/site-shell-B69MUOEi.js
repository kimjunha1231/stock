import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import Link from "./link-BjpPdlMN.js";
import { r as navItems } from "./content-Dulzx_4u.js";
//#region src/components/site-shell.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SiteShell({ children }) {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-frame",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "site-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						href: "/",
						className: "brand",
						onClick: () => setMenuOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-mark",
							children: "I"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "InventoryOS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Decision explainer" })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "menu-toggle",
						type: "button",
						"aria-expanded": menuOpen,
						"aria-label": menuOpen ? "메뉴 닫기" : "메뉴 열기",
						onClick: () => setMenuOpen((value) => !value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: `site-nav ${menuOpen ? "is-open" : ""}`,
						"aria-label": "사이트 메뉴",
						children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							href: item.href,
							onClick: () => setMenuOpen(false),
							children: item.label
						}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "nav-cta",
							href: "/prd",
							onClick: () => setMenuOpen(false),
							children: "서비스 구조 보기"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "site-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "brand-mark small",
						children: "I"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "InventoryOS" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "네 계열사의 담당자가 스스로 판단하고, 통합 서비스는 더 나은 결정을 확산합니다." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/glossary",
						children: "용어 사전 열기 →"
					})
				]
			})
		]
	});
}
//#endregion
export { SiteShell };
