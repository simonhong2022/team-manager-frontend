"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 1657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
var next_default = /*#__PURE__*/__webpack_require__.n(next_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts


const BASE_PATH = `${"https://team-manager-backend.up.railway.app"}/api/login`;
/* harmony default export */ const _nextauth_ = (next_default()({
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "username"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                const response = await fetch(BASE_PATH, {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const user = await response.json();
                if (response.ok) {
                    return user;
                }
                return null;
            }
        })
    ],
    secret: "dmdkefjekdewekjleufjhej124dejhf"
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1657));
module.exports = __webpack_exports__;

})();