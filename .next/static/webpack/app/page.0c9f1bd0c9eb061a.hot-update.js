"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Apps/ToDoApp/ToDoApp.tsx":
/*!******************************************!*\
  !*** ./src/app/Apps/ToDoApp/ToDoApp.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoItemEntryForm */ \"(app-pages-browser)/./src/app/Apps/ToDoApp/ToDoItemEntryForm.tsx\");\n/* harmony import */ var _ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDoListDisplay */ \"(app-pages-browser)/./src/app/Apps/ToDoApp/ToDoListDisplay.tsx\");\n// illustrates forms, lists, etc.\n// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { ToDoListDisplay } from './ToDoListDisplayBad';\nfunction ToDoApp() {\n    _s();\n    const [todoList, setTodolist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [itemKey, setItemKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0) // first unused key\n    ;\n    function handleAdd(title, priority) {\n        if (title === \"\") {\n            return;\n        } // ignore blank button presses\n        setTodolist(todoList.concat({\n            title: title,\n            priority: priority,\n            key: itemKey\n        }));\n        setItemKey(itemKey + 1);\n    }\n    function handleDelete(targetKey) {\n        const newList = todoList.filter((item)=>item.key != targetKey);\n        setTodolist(newList);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                children: \"TODO List\"\n            }, void 0, false, {\n                fileName: \"/Users/saideepsamineni/Neu/CS4530-FSE/module08/module08-react-activity/src/app/Apps/ToDoApp/ToDoApp.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__.ToDoItemEntryForm, {\n                onAdd: handleAdd\n            }, void 0, false, {\n                fileName: \"/Users/saideepsamineni/Neu/CS4530-FSE/module08/module08-react-activity/src/app/Apps/ToDoApp/ToDoApp.tsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__.ToDoListDisplay, {\n                items: todoList,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/saideepsamineni/Neu/CS4530-FSE/module08/module08-react-activity/src/app/Apps/ToDoApp/ToDoApp.tsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saideepsamineni/Neu/CS4530-FSE/module08/module08-react-activity/src/app/Apps/ToDoApp/ToDoApp.tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, this);\n}\n_s(ToDoApp, \"1mk73C0n8eIbIk6ms7W4PuUVVpo=\");\n_c = ToDoApp;\nvar _c;\n$RefreshReg$(_c, \"ToDoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQXBwcy9Ub0RvQXBwL1RvRG9BcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBQ2pDLHlEQUF5RDs7O0FBRTFCO0FBQ2E7QUFLbEI7QUFHNkI7QUFDSjtBQUNuRCwwREFBMEQ7QUFFM0MsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBYSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ1EsU0FBUUMsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBUyxHQUFLLG1CQUFtQjs7SUFFdEUsU0FBU1UsVUFBV0MsS0FBWSxFQUFFQyxRQUFlO1FBQy9DLElBQUlELFVBQVUsSUFBSTtZQUFDO1FBQU0sRUFBSSw4QkFBOEI7UUFDM0RKLFlBQVlELFNBQVNPLE1BQU0sQ0FBQztZQUFDRixPQUFPQTtZQUFPQyxVQUFVQTtZQUFVRSxLQUFLTjtRQUFPO1FBQzNFQyxXQUFXRCxVQUFVO0lBQ3ZCO0lBRUEsU0FBU08sYUFBYUMsU0FBZ0I7UUFDcEMsTUFBTUMsVUFBVVgsU0FBU1ksTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLTCxHQUFHLElBQUlFO1FBQ3BEVCxZQUFZVTtJQUNkO0lBRUEscUJBQ0EsOERBQUNmLG9EQUFNQTs7MEJBQ0wsOERBQUNELHFEQUFPQTswQkFBQzs7Ozs7OzBCQUNULDhEQUFDRSxpRUFBaUJBO2dCQUFDaUIsT0FBT1Y7Ozs7OzswQkFDMUIsOERBQUNOLDZEQUFlQTtnQkFBQ2lCLE9BQU9mO2dCQUFVZ0IsVUFBVVA7Ozs7Ozs7Ozs7OztBQUdoRDtHQXRCd0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQXBwcy9Ub0RvQXBwL1RvRG9BcHAudHN4Pzc0YTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaWxsdXN0cmF0ZXMgZm9ybXMsIGxpc3RzLCBldGMuXG4vLyBUSEUgV0hPTEUgUE9JTlQgT0YgVEhJUyBJUyBUSEUgQVRUUklCVVRFICdrZXknIE9OIExJTkVcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEhlYWRpbmcsIFRhYmxlLCBUaCwgVGJvZHksIFRyLFxuICBUZCxcbiAgVlN0YWNrLCBcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IFRvRG9JdGVtRW50cnlGb3JtIH0gZnJvbSAnLi9Ub0RvSXRlbUVudHJ5Rm9ybSdcbmltcG9ydCB7IFRvRG9MaXN0RGlzcGxheSB9IGZyb20gJy4vVG9Eb0xpc3REaXNwbGF5J1xuLy8gaW1wb3J0IHsgVG9Eb0xpc3REaXNwbGF5IH0gZnJvbSAnLi9Ub0RvTGlzdERpc3BsYXlCYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvQXBwICgpIHtcbiAgY29uc3QgW3RvZG9MaXN0LHNldFRvZG9saXN0XSA9IHVzZVN0YXRlPFRvRG9JdGVtW10+KFtdKVxuICBjb25zdCBbaXRlbUtleSxzZXRJdGVtS2V5XSA9IHVzZVN0YXRlPG51bWJlcj4oMCkgICAvLyBmaXJzdCB1bnVzZWQga2V5XG5cbiAgZnVuY3Rpb24gaGFuZGxlQWRkICh0aXRsZTpzdHJpbmcsIHByaW9yaXR5Om51bWJlcikge1xuICAgIGlmICh0aXRsZSA9PT0gJycpIHtyZXR1cm59ICAgLy8gaWdub3JlIGJsYW5rIGJ1dHRvbiBwcmVzc2VzXG4gICAgc2V0VG9kb2xpc3QodG9kb0xpc3QuY29uY2F0KHt0aXRsZTogdGl0bGUsIHByaW9yaXR5OiBwcmlvcml0eSwga2V5OiBpdGVtS2V5fSkpXG4gICAgc2V0SXRlbUtleShpdGVtS2V5ICsgMSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZSh0YXJnZXRLZXk6bnVtYmVyKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IHRvZG9MaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ua2V5ICE9IHRhcmdldEtleSlcbiAgICBzZXRUb2RvbGlzdChuZXdMaXN0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgPFZTdGFjaz5cbiAgICA8SGVhZGluZz5UT0RPIExpc3Q8L0hlYWRpbmc+XG4gICAgPFRvRG9JdGVtRW50cnlGb3JtIG9uQWRkPXtoYW5kbGVBZGR9Lz5cbiAgICA8VG9Eb0xpc3REaXNwbGF5IGl0ZW1zPXt0b2RvTGlzdH0gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0vPlxuICA8L1ZTdGFjaz5cbiAgKVxufVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZGluZyIsIlZTdGFjayIsIlRvRG9JdGVtRW50cnlGb3JtIiwiVG9Eb0xpc3REaXNwbGF5IiwiVG9Eb0FwcCIsInRvZG9MaXN0Iiwic2V0VG9kb2xpc3QiLCJpdGVtS2V5Iiwic2V0SXRlbUtleSIsImhhbmRsZUFkZCIsInRpdGxlIiwicHJpb3JpdHkiLCJjb25jYXQiLCJrZXkiLCJoYW5kbGVEZWxldGUiLCJ0YXJnZXRLZXkiLCJuZXdMaXN0IiwiZmlsdGVyIiwiaXRlbSIsIm9uQWRkIiwiaXRlbXMiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Apps/ToDoApp/ToDoApp.tsx\n"));

/***/ })

});