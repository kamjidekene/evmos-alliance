"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/projects/constants.ts":
/*!***************************************!*\
  !*** ./modules/projects/constants.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": function() { return /* binding */ categories; },\n/* harmony export */   \"allProjects\": function() { return /* binding */ allProjects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar categories = {\n    NFT: \"nft\",\n    INFRASTRUCTURE: \"infrastructure\",\n    DEFI: \"defi\",\n    MARKETPLACE: \"marketplace\",\n    BRIDGE: \"bridge\",\n    DEX: \"dex\",\n    CEX: \"cex\"\n};\nvar allProjects = [\n    {\n        title: \"Diffusion Finance\",\n        url: \"hhttps://diffusion.fi/\",\n        description: \"Diffusion is an Automated Market Maker (AMM) protocol and liquidity pool designed for efficient trading between crypto-assets. The trading activity on Diffusion captures fees as revenue for liquidity providers, resulting in a decentralized market and trading experience. \",\n        image: \"/diffusion.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Connext\",\n        url: \"https://bridge.connext.network/\",\n        description: \"Connext is an interoperability protocol that empowers developers to build fully expressive cross domain apps (xApps) with a strong focus on security.\",\n        image: \"/connext.png\",\n        categories: [\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"Evmoswap\",\n        url: \"https://app.evmoswap.org/\",\n        description: \"EvmoSwap is a Decentralized Autonomous Organization (DAO) that offers a full suite of tools to explore and engage with decentralized finance opportunities.\",\n        image: \"/evmoswap.png\",\n        categories: [\n            categories.DEFI,\n            categories.BRIDGE,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"Earnmos \",\n        url: \"https://app.earnmos.fi/\",\n        description: \"Earnmos is the ALL IN ONE yield optimizer and booster on Evmos blockchain, which is dedicated to facilitating the investment experience and earning the best yield for users across all the blockchains.\",\n        image: \"/earnmos.jpeg\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Kinesis Lab \",\n        url: \"https://app.kinesislabs.co/\",\n        description: \"Kinesis Labs is the native stableswap on Evmos that is designed to become the stablecoin hub for all of Cosmos through low slippage and a unique multi-bridge base pool system.\",\n        image: \"/kinesis.jpeg\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"SpaceFi\",\n        url: \"https://spacefi.io/\",\n        description: \"SpaceFi is a cross-chain web3.0 platform, with DEX+Farm+NFT+Starter+Spacebase.\",\n        image: \"/spacefi.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.NFT\n        ]\n    },\n    {\n        title: \"Saddle Finance\",\n        url: \"https://saddle.finance/\",\n        description: \"Saddle is a decentralized automated market maker on the Ethereum blockchain, optimized for pegged value crypto assets such as stablecoins and wrapped BTC. \",\n        image: \"/Saddle finance.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"AutoFarm(AUTO)\",\n        url: \"https://autofarm.network/\",\n        description: \"The Autofarm ecosystem is a one-stop DeFi suite for all users. Autofarm aggregate yield opportunities using vaults and best swap rates using a DEX aggregator (AutoSwap). In addition, other products such as AutoAnalytics, AutoTrade & AutoPortfolio are set to go live later in 2021. The platform is currently live on BSC, HECO, Polygon, Avalanche, Fantom & Moonriver, with more chains to be introduced soon. \",\n        image: \"/AutoFarm.jpeg\",\n        categories: [\n            categories.DEFI,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"PhotonSwap Finance\",\n        url: \"https://photonswap.finance/\",\n        description: \"AMM styled decentralized exchange (DEX) on Cronos \",\n        image: \"PhotonSwap Finance.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"Aave\",\n        url: \"https://aave.com/\",\n        description: \"Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets. Evmos will also enable cross-chain applications to leverage AAVE’s liquidity while being deployed to other Cosmos chains such as Terra. \",\n        image: \"Aave.png\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"Dex Screener\",\n        url: \"https://dexscreener.com/evmos\",\n        description: \"Tracking and charting Evmos \",\n        image: \"Dex Screener.jpeg\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"Restake App\",\n        url: \"https://restake.app/evmos\",\n        description: \"REStake allows validators to auto-compound your staking rewards. \",\n        image: \"Restake App.jpeg\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"FRAX\",\n        url: \"https://evmos.blog/frax-is-coming-to-evmos-61837abb2fa9\",\n        description: \"FRAX provide users with greater accessibility to the DeFi ecosystem as stablecoins are pegged to fiat currencies but exist natively as cryptocurrency allowing for easy interaction with decentralized protocols. Evmos DeFi protocols will be able to integrate the FRAX stablecoin, offering users stability, reliability, and liquidity. \",\n        image: \"FRAX.png\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"DefiLlama\",\n        url: \"https://defillama.com/chain/Evmos\",\n        description: \"Open and transparent DeFi TVL and analytics. \",\n        image: \"DefiLlama.png\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"NovaDAO\",\n        url: \"https://medium.com/@Nova_DAO\",\n        description: \"NovaDAO is a reserve currency protocol and community built on the Cosmos Ecosystem. NovaDAO recognizes the early success of OlympusDAO in creating a decentralized reserve currency, and we have decided to bring this concept to Cosmos. \",\n        image: \"NovaDAO.jpeg\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"Commonwealth\",\n        url: \"https://commonwealth.im/evmos\",\n        description: \"Platform to discuss, organize, and grow the Evmos decentralized community \",\n        image: \"Commonwealth.png\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"Fireblocks\",\n        url: \"https://www.fireblocks.com/\",\n        description: \"Fireblocks is a digital asset custody, transfer and settlement platform. MPC-CMP wallet technology. 24/7 access. \",\n        image: \"Fireblocks.png\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"Osmosis\",\n        url: \"https://app.osmosis.zone/\",\n        description: \"Osmosis is a fair-launched, customizable automated market maker for interchain assets that allows the creation and management of non-custodial, self-balancing, interchain token index similar to one of Balancer.\",\n        image: \"Osmosis.jpeg\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"Huobi Global\",\n        url: \"https://www.huobi.com/support/en-us/detail/34912377216980\",\n        description: \"Huobi Global is scheduled to list EVMOS (Evmos) on July 19, 2022. \",\n        image: \"Huobi Global.jpeg\",\n        categories: [\n            categories.CEX, \n        ]\n    },\n    {\n        title: \"Demex\",\n        url: \"https://app.dem.exchange/trade/EVMOS_SWTH\",\n        description: \"The Order Book DEX for the Cosmos and Ethereum Ecosystem. \",\n        image: \"Demex.jpeg\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"Digifinex\",\n        url: \"https://www.digifinex.com/\",\n        description: \"First CEX to list Evmos with the following trading pairs: EVMOS/USDT, EVMOS/ETH and EVMOS/BTC \",\n        image: \"Digifinex.jpeg\",\n        categories: [\n            categories.CEX, \n        ]\n    },\n    {\n        title: \"MEXC\",\n        url: \"https://www.mexc.com/exchange/EVMOS_USDT\",\n        description: \"Centralized exchange for Evmos. \",\n        image: \"MEXC.jpeg\",\n        categories: [\n            categories.CEX, \n        ]\n    },\n    {\n        title: \"Gnosis Safe\",\n        url: \"https://gnosis-safe.io/\",\n        description: \"A fully customizable trusted multisig. \",\n        image: \"Gnosis Safe.jpeg\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"Cronus Finance\",\n        url: \"https://medium.com/@cronusfinance/announcing-cronus-finance-aa5579889060\",\n        description: \"Cronus Finance is a fully permissionless and composable AMM built on Evmos. \",\n        image: \"Cronus Finance.jpeg\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"Exswap\",\n        url: \"https://defillama.com/chain/Evmos\",\n        description: \"Exswap is a community-focused Uniswap v2 fork launching on Evmos. Our goal is to be the #1 AMM and the go-to protocol for the Evmos ecosystem. \",\n        image: \"Exswap.png\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"DefiLlama\",\n        url: \"https://defillama.com/chain/Evmos\",\n        description: \"Open and transparent DeFi TVL and analytics. \",\n        image: \"DefiLlama.png\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"DefiLlama\",\n        url: \"https://defillama.com/chain/Evmos\",\n        description: \"Open and transparent DeFi TVL and analytics. \",\n        image: \"DefiLlama.png\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"DefiLlama\",\n        url: \"https://defillama.com/chain/Evmos\",\n        description: \"Open and transparent DeFi TVL and analytics. \",\n        image: \"DefiLlama.png\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7UUFDQ00sS0FBSyxFQUFFLENBQVE7UUFDZkMsR0FBRyxFQUFFLENBQW1DO1FBQ3hDQyxXQUFXLEVBQUUsQ0FBaUo7UUFDOUpDLEtBQUssRUFBRSxDQUFZO1FBQ25CWixVQUFVLEVBQUUsQ0FBQ0E7WUFBQUEsVUFBVSxDQUFDRyxJQUFJO1FBQUMsQ0FBQztJQUVoQyxDQUFDO0lBQ0QsQ0FBQztRQUNDTSxLQUFLLEVBQUUsQ0FBVztRQUNsQkMsR0FBRyxFQUFFLENBQW1DO1FBQ3hDQyxXQUFXLEVBQUUsQ0FBK0M7UUFDNURDLEtBQUssRUFBRSxDQUFlO1FBQ3RCWixVQUFVLEVBQUUsQ0FBQ0E7WUFBQUEsVUFBVSxDQUFDRSxjQUFjO1FBQUMsQ0FBQztJQUUxQyxDQUFDO0lBQ0QsQ0FBQztRQUNDTyxLQUFLLEVBQUUsQ0FBVztRQUNsQkMsR0FBRyxFQUFFLENBQW1DO1FBQ3hDQyxXQUFXLEVBQUUsQ0FBK0M7UUFDNURDLEtBQUssRUFBRSxDQUFlO1FBQ3RCWixVQUFVLEVBQUUsQ0FBQ0E7WUFBQUEsVUFBVSxDQUFDRSxjQUFjO1FBQUMsQ0FBQztJQUUxQyxDQUFDO0lBQ0QsQ0FBQztRQUNDTyxLQUFLLEVBQUUsQ0FBVztRQUNsQkMsR0FBRyxFQUFFLENBQW1DO1FBQ3hDQyxXQUFXLEVBQUUsQ0FBK0M7UUFDNURDLEtBQUssRUFBRSxDQUFlO1FBQ3RCWixVQUFVLEVBQUUsQ0FBQ0E7WUFBQUEsVUFBVSxDQUFDRSxjQUFjO1FBQUMsQ0FBQztJQUUxQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2R1bGVzL3Byb2plY3RzL2NvbnN0YW50cy50cz8xNjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0ge1xuICBORlQ6IFwibmZ0XCIsXG4gIElORlJBU1RSVUNUVVJFOiBcImluZnJhc3RydWN0dXJlXCIsXG4gIERFRkk6IFwiZGVmaVwiLFxuICBNQVJLRVRQTEFDRTogXCJtYXJrZXRwbGFjZVwiLFxuICBCUklER0U6IFwiYnJpZGdlXCIsXG4gIERFWCA6IFwiZGV4XCIsXG4gIENFWCA6IFwiY2V4XCJcbiBcbn07XG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHM6IFByb2plY3RbXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRpZmZ1c2lvbiBGaW5hbmNlXCIsXG4gICAgdXJsOiBcImhodHRwczovL2RpZmZ1c2lvbi5maS9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEaWZmdXNpb24gaXMgYW4gQXV0b21hdGVkIE1hcmtldCBNYWtlciAoQU1NKSBwcm90b2NvbCBhbmQgbGlxdWlkaXR5IHBvb2wgZGVzaWduZWQgZm9yIGVmZmljaWVudCB0cmFkaW5nIGJldHdlZW4gY3J5cHRvLWFzc2V0cy4gVGhlIHRyYWRpbmcgYWN0aXZpdHkgb24gRGlmZnVzaW9uIGNhcHR1cmVzIGZlZXMgYXMgcmV2ZW51ZSBmb3IgbGlxdWlkaXR5IHByb3ZpZGVycywgcmVzdWx0aW5nIGluIGEgZGVjZW50cmFsaXplZCBtYXJrZXQgYW5kIHRyYWRpbmcgZXhwZXJpZW5jZS4gXCIsXG4gICAgaW1hZ2U6IFwiL2RpZmZ1c2lvbi5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29ubmV4dFwiLFxuICAgIHVybDogXCJodHRwczovL2JyaWRnZS5jb25uZXh0Lm5ldHdvcmsvXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNvbm5leHQgaXMgYW4gaW50ZXJvcGVyYWJpbGl0eSBwcm90b2NvbCB0aGF0IGVtcG93ZXJzIGRldmVsb3BlcnMgdG8gYnVpbGQgZnVsbHkgZXhwcmVzc2l2ZSBjcm9zcyBkb21haW4gYXBwcyAoeEFwcHMpIHdpdGggYSBzdHJvbmcgZm9jdXMgb24gc2VjdXJpdHkuXCIsXG4gICAgaW1hZ2U6IFwiL2Nvbm5leHQucG5nXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuQlJJREdFXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkV2bW9zd2FwXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYXBwLmV2bW9zd2FwLm9yZy9cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRXZtb1N3YXAgaXMgYSBEZWNlbnRyYWxpemVkIEF1dG9ub21vdXMgT3JnYW5pemF0aW9uIChEQU8pIHRoYXQgb2ZmZXJzIGEgZnVsbCBzdWl0ZSBvZiB0b29scyB0byBleHBsb3JlIGFuZCBlbmdhZ2Ugd2l0aCBkZWNlbnRyYWxpemVkIGZpbmFuY2Ugb3Bwb3J0dW5pdGllcy5cIixcbiAgICBpbWFnZTogXCIvZXZtb3N3YXAucG5nXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSwgY2F0ZWdvcmllcy5CUklER0UsIGNhdGVnb3JpZXMuREVYLCBdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFYXJubW9zIFwiLFxuICAgIHVybDogXCJodHRwczovL2FwcC5lYXJubW9zLmZpL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVhcm5tb3MgaXMgdGhlIEFMTCBJTiBPTkUgeWllbGQgb3B0aW1pemVyIGFuZCBib29zdGVyIG9uIEV2bW9zIGJsb2NrY2hhaW4sIHdoaWNoIGlzIGRlZGljYXRlZCB0byBmYWNpbGl0YXRpbmcgdGhlIGludmVzdG1lbnQgZXhwZXJpZW5jZSBhbmQgZWFybmluZyB0aGUgYmVzdCB5aWVsZCBmb3IgdXNlcnMgYWNyb3NzIGFsbCB0aGUgYmxvY2tjaGFpbnMuXCIsXG4gICAgaW1hZ2U6IFwiL2Vhcm5tb3MuanBlZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkldLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJLaW5lc2lzIExhYiBcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9hcHAua2luZXNpc2xhYnMuY28vXCIsXG4gICAgZGVzY3JpcHRpb246IFwiS2luZXNpcyBMYWJzIGlzIHRoZSBuYXRpdmUgc3RhYmxlc3dhcCBvbiBFdm1vcyB0aGF0IGlzIGRlc2lnbmVkIHRvIGJlY29tZSB0aGUgc3RhYmxlY29pbiBodWIgZm9yIGFsbCBvZiBDb3Ntb3MgdGhyb3VnaCBsb3cgc2xpcHBhZ2UgYW5kIGEgdW5pcXVlIG11bHRpLWJyaWRnZSBiYXNlIHBvb2wgc3lzdGVtLlwiLFxuICAgIGltYWdlOiBcIi9raW5lc2lzLmpwZWdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkRFWCwgY2F0ZWdvcmllcy5CUklER0VdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTcGFjZUZpXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vc3BhY2VmaS5pby9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTcGFjZUZpIGlzIGEgY3Jvc3MtY2hhaW4gd2ViMy4wIHBsYXRmb3JtLCB3aXRoIERFWCtGYXJtK05GVCtTdGFydGVyK1NwYWNlYmFzZS5cIixcbiAgICBpbWFnZTogXCIvc3BhY2VmaS5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkRFWCwgY2F0ZWdvcmllcy5ORlRdLFxuXG4gIH0sXG4gIFxuICB7XG4gICAgdGl0bGU6IFwiU2FkZGxlIEZpbmFuY2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9zYWRkbGUuZmluYW5jZS9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYWRkbGUgaXMgYSBkZWNlbnRyYWxpemVkIGF1dG9tYXRlZCBtYXJrZXQgbWFrZXIgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4sIG9wdGltaXplZCBmb3IgcGVnZ2VkIHZhbHVlIGNyeXB0byBhc3NldHMgc3VjaCBhcyBzdGFibGVjb2lucyBhbmQgd3JhcHBlZCBCVEMuIFwiLFxuICAgIGltYWdlOiBcIi9TYWRkbGUgZmluYW5jZS5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkRFWCxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBdXRvRmFybShBVVRPKVwiLFxuICAgIHVybDogXCJodHRwczovL2F1dG9mYXJtLm5ldHdvcmsvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEF1dG9mYXJtIGVjb3N5c3RlbSBpcyBhIG9uZS1zdG9wIERlRmkgc3VpdGUgZm9yIGFsbCB1c2Vycy4gQXV0b2Zhcm0gYWdncmVnYXRlIHlpZWxkIG9wcG9ydHVuaXRpZXMgdXNpbmcgdmF1bHRzIGFuZCBiZXN0IHN3YXAgcmF0ZXMgdXNpbmcgYSBERVggYWdncmVnYXRvciAoQXV0b1N3YXApLiBJbiBhZGRpdGlvbiwgb3RoZXIgcHJvZHVjdHMgc3VjaCBhcyBBdXRvQW5hbHl0aWNzLCBBdXRvVHJhZGUgJiBBdXRvUG9ydGZvbGlvIGFyZSBzZXQgdG8gZ28gbGl2ZSBsYXRlciBpbiAyMDIxLiBUaGUgcGxhdGZvcm0gaXMgY3VycmVudGx5IGxpdmUgb24gQlNDLCBIRUNPLCBQb2x5Z29uLCBBdmFsYW5jaGUsIEZhbnRvbSAmIE1vb25yaXZlciwgd2l0aCBtb3JlIGNoYWlucyB0byBiZSBpbnRyb2R1Y2VkIHNvb24uIFwiLFxuICAgIGltYWdlOiBcIi9BdXRvRmFybS5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSwgY2F0ZWdvcmllcy5ERVgsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGhvdG9uU3dhcCBGaW5hbmNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vcGhvdG9uc3dhcC5maW5hbmNlL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFNTSBzdHlsZWQgZGVjZW50cmFsaXplZCBleGNoYW5nZSAoREVYKSBvbiBDcm9ub3MgXCIsXG4gICAgaW1hZ2U6IFwiUGhvdG9uU3dhcCBGaW5hbmNlLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksIGNhdGVnb3JpZXMuREVYLGNhdGVnb3JpZXMuQlJJREdFXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQWF2ZVwiLFxuICAgIHVybDogXCJodHRwczovL2FhdmUuY29tL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFhdmUgaXMgYW4gb3BlbiBzb3VyY2UgYW5kIG5vbi1jdXN0b2RpYWwgbGlxdWlkaXR5IHByb3RvY29sIGZvciBlYXJuaW5nIGludGVyZXN0IG9uIGRlcG9zaXRzIGFuZCBib3Jyb3dpbmcgYXNzZXRzLiBFdm1vcyB3aWxsIGFsc28gZW5hYmxlIGNyb3NzLWNoYWluIGFwcGxpY2F0aW9ucyB0byBsZXZlcmFnZSBBQVZF4oCZcyBsaXF1aWRpdHkgd2hpbGUgYmVpbmcgZGVwbG95ZWQgdG8gb3RoZXIgQ29zbW9zIGNoYWlucyBzdWNoIGFzIFRlcnJhLiBcIixcbiAgICBpbWFnZTogXCJBYXZlLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGV4IFNjcmVlbmVyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZGV4c2NyZWVuZXIuY29tL2V2bW9zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhY2tpbmcgYW5kIGNoYXJ0aW5nIEV2bW9zIFwiLFxuICAgIGltYWdlOiBcIkRleCBTY3JlZW5lci5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuSU5GUkFTVFJVQ1RVUkUsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUmVzdGFrZSBBcHBcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9yZXN0YWtlLmFwcC9ldm1vc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJFU3Rha2UgYWxsb3dzIHZhbGlkYXRvcnMgdG8gYXV0by1jb21wb3VuZCB5b3VyIHN0YWtpbmcgcmV3YXJkcy4gXCIsXG4gICAgaW1hZ2U6IFwiUmVzdGFrZSBBcHAuanBlZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLklORlJBU1RSVUNUVVJFLF0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZSQVhcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldm1vcy5ibG9nL2ZyYXgtaXMtY29taW5nLXRvLWV2bW9zLTYxODM3YWJiMmZhOVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZSQVggcHJvdmlkZSB1c2VycyB3aXRoIGdyZWF0ZXIgYWNjZXNzaWJpbGl0eSB0byB0aGUgRGVGaSBlY29zeXN0ZW0gYXMgc3RhYmxlY29pbnMgYXJlIHBlZ2dlZCB0byBmaWF0IGN1cnJlbmNpZXMgYnV0IGV4aXN0IG5hdGl2ZWx5IGFzIGNyeXB0b2N1cnJlbmN5IGFsbG93aW5nIGZvciBlYXN5IGludGVyYWN0aW9uIHdpdGggZGVjZW50cmFsaXplZCBwcm90b2NvbHMuIEV2bW9zIERlRmkgcHJvdG9jb2xzIHdpbGwgYmUgYWJsZSB0byBpbnRlZ3JhdGUgdGhlIEZSQVggc3RhYmxlY29pbiwgb2ZmZXJpbmcgdXNlcnMgc3RhYmlsaXR5LCByZWxpYWJpbGl0eSwgYW5kIGxpcXVpZGl0eS4gXCIsXG4gICAgaW1hZ2U6IFwiRlJBWC5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLF0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlZmlMbGFtYVwiLFxuICAgIHVybDogXCJodHRwczovL2RlZmlsbGFtYS5jb20vY2hhaW4vRXZtb3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPcGVuIGFuZCB0cmFuc3BhcmVudCBEZUZpIFRWTCBhbmQgYW5hbHl0aWNzLiBcIixcbiAgICBpbWFnZTogXCJEZWZpTGxhbWEucG5nXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuSU5GUkFTVFJVQ1RVUkUsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTm92YURBT1wiLFxuICAgIHVybDogXCJodHRwczovL21lZGl1bS5jb20vQE5vdmFfREFPXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm92YURBTyBpcyBhIHJlc2VydmUgY3VycmVuY3kgcHJvdG9jb2wgYW5kIGNvbW11bml0eSBidWlsdCBvbiB0aGUgQ29zbW9zIEVjb3N5c3RlbS4gTm92YURBTyByZWNvZ25pemVzIHRoZSBlYXJseSBzdWNjZXNzIG9mIE9seW1wdXNEQU8gaW4gY3JlYXRpbmcgYSBkZWNlbnRyYWxpemVkIHJlc2VydmUgY3VycmVuY3ksIGFuZCB3ZSBoYXZlIGRlY2lkZWQgdG8gYnJpbmcgdGhpcyBjb25jZXB0IHRvIENvc21vcy4gXCIsXG4gICAgaW1hZ2U6IFwiTm92YURBTy5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb21tb253ZWFsdGhcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb21tb253ZWFsdGguaW0vZXZtb3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQbGF0Zm9ybSB0byBkaXNjdXNzLCBvcmdhbml6ZSwgYW5kIGdyb3cgdGhlIEV2bW9zIGRlY2VudHJhbGl6ZWQgY29tbXVuaXR5IFwiLFxuICAgIGltYWdlOiBcIkNvbW1vbndlYWx0aC5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5JTkZSQVNUUlVDVFVSRSxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGaXJlYmxvY2tzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3LmZpcmVibG9ja3MuY29tL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpcmVibG9ja3MgaXMgYSBkaWdpdGFsIGFzc2V0IGN1c3RvZHksIHRyYW5zZmVyIGFuZCBzZXR0bGVtZW50IHBsYXRmb3JtLiBNUEMtQ01QIHdhbGxldCB0ZWNobm9sb2d5LiAyNC83IGFjY2Vzcy4gXCIsXG4gICAgaW1hZ2U6IFwiRmlyZWJsb2Nrcy5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5JTkZSQVNUUlVDVFVSRSxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPc21vc2lzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYXBwLm9zbW9zaXMuem9uZS9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJPc21vc2lzIGlzIGEgZmFpci1sYXVuY2hlZCwgY3VzdG9taXphYmxlIGF1dG9tYXRlZCBtYXJrZXQgbWFrZXIgZm9yIGludGVyY2hhaW4gYXNzZXRzIHRoYXQgYWxsb3dzIHRoZSBjcmVhdGlvbiBhbmQgbWFuYWdlbWVudCBvZiBub24tY3VzdG9kaWFsLCBzZWxmLWJhbGFuY2luZywgaW50ZXJjaGFpbiB0b2tlbiBpbmRleCBzaW1pbGFyIHRvIG9uZSBvZiBCYWxhbmNlci5cIixcbiAgICBpbWFnZTogXCJPc21vc2lzLmpwZWdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLF0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkh1b2JpIEdsb2JhbFwiLFxuICAgIHVybDogXCJodHRwczovL3d3dy5odW9iaS5jb20vc3VwcG9ydC9lbi11cy9kZXRhaWwvMzQ5MTIzNzcyMTY5ODBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIdW9iaSBHbG9iYWwgaXMgc2NoZWR1bGVkIHRvIGxpc3QgRVZNT1MgKEV2bW9zKSBvbiBKdWx5IDE5LCAyMDIyLiBcIixcbiAgICBpbWFnZTogXCJIdW9iaSBHbG9iYWwuanBlZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkNFWCxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEZW1leFwiLFxuICAgIHVybDogXCJodHRwczovL2FwcC5kZW0uZXhjaGFuZ2UvdHJhZGUvRVZNT1NfU1dUSFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBPcmRlciBCb29rIERFWCBmb3IgdGhlIENvc21vcyBhbmQgRXRoZXJldW0gRWNvc3lzdGVtLiBcIixcbiAgICBpbWFnZTogXCJEZW1leC5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEaWdpZmluZXhcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZGlnaWZpbmV4LmNvbS9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaXJzdCBDRVggdG8gbGlzdCBFdm1vcyB3aXRoIHRoZSBmb2xsb3dpbmcgdHJhZGluZyBwYWlyczogRVZNT1MvVVNEVCwgRVZNT1MvRVRIIGFuZCBFVk1PUy9CVEMgXCIsXG4gICAgaW1hZ2U6IFwiRGlnaWZpbmV4LmpwZWdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5DRVgsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTUVYQ1wiLFxuICAgIHVybDogXCJodHRwczovL3d3dy5tZXhjLmNvbS9leGNoYW5nZS9FVk1PU19VU0RUXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2VudHJhbGl6ZWQgZXhjaGFuZ2UgZm9yIEV2bW9zLiBcIixcbiAgICBpbWFnZTogXCJNRVhDLmpwZWdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5DRVgsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiR25vc2lzIFNhZmVcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9nbm9zaXMtc2FmZS5pby9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGZ1bGx5IGN1c3RvbWl6YWJsZSB0cnVzdGVkIG11bHRpc2lnLiBcIixcbiAgICBpbWFnZTogXCJHbm9zaXMgU2FmZS5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuSU5GUkFTVFJVQ1RVUkUsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ3JvbnVzIEZpbmFuY2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9tZWRpdW0uY29tL0Bjcm9udXNmaW5hbmNlL2Fubm91bmNpbmctY3JvbnVzLWZpbmFuY2UtYWE1NTc5ODg5MDYwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ3JvbnVzIEZpbmFuY2UgaXMgYSBmdWxseSBwZXJtaXNzaW9ubGVzcyBhbmQgY29tcG9zYWJsZSBBTU0gYnVpbHQgb24gRXZtb3MuIFwiLFxuICAgIGltYWdlOiBcIkNyb251cyBGaW5hbmNlLmpwZWdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLF0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkV4c3dhcFwiLFxuICAgIHVybDogXCJodHRwczovL2RlZmlsbGFtYS5jb20vY2hhaW4vRXZtb3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHN3YXAgaXMgYSBjb21tdW5pdHktZm9jdXNlZCBVbmlzd2FwIHYyIGZvcmsgbGF1bmNoaW5nIG9uIEV2bW9zLiBPdXIgZ29hbCBpcyB0byBiZSB0aGUgIzEgQU1NIGFuZCB0aGUgZ28tdG8gcHJvdG9jb2wgZm9yIHRoZSBFdm1vcyBlY29zeXN0ZW0uIFwiLFxuICAgIGltYWdlOiBcIkV4c3dhcC5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLF0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlZmlMbGFtYVwiLFxuICAgIHVybDogXCJodHRwczovL2RlZmlsbGFtYS5jb20vY2hhaW4vRXZtb3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPcGVuIGFuZCB0cmFuc3BhcmVudCBEZUZpIFRWTCBhbmQgYW5hbHl0aWNzLiBcIixcbiAgICBpbWFnZTogXCJEZWZpTGxhbWEucG5nXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuSU5GUkFTVFJVQ1RVUkUsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGVmaUxsYW1hXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZGVmaWxsYW1hLmNvbS9jaGFpbi9Fdm1vc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk9wZW4gYW5kIHRyYW5zcGFyZW50IERlRmkgVFZMIGFuZCBhbmFseXRpY3MuIFwiLFxuICAgIGltYWdlOiBcIkRlZmlMbGFtYS5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5JTkZSQVNUUlVDVFVSRSxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEZWZpTGxhbWFcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9kZWZpbGxhbWEuY29tL2NoYWluL0V2bW9zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3BlbiBhbmQgdHJhbnNwYXJlbnQgRGVGaSBUVkwgYW5kIGFuYWx5dGljcy4gXCIsXG4gICAgaW1hZ2U6IFwiRGVmaUxsYW1hLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLklORlJBU1RSVUNUVVJFLF0sXG5cbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsIk5GVCIsIklORlJBU1RSVUNUVVJFIiwiREVGSSIsIk1BUktFVFBMQUNFIiwiQlJJREdFIiwiREVYIiwiQ0VYIiwiYWxsUHJvamVjdHMiLCJ0aXRsZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/projects/constants.ts\n");

/***/ })

});