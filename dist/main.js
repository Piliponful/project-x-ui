// require("./main.css");
var $ej8CT$reactjsxruntime = require("react/jsx-runtime");
var $ej8CT$react = require("react");
var $ej8CT$lodash = require("lodash");
var $ej8CT$classnames = require("classnames");
var $ej8CT$herouireact = require("@heroui/react");
var $ej8CT$reactspinnersBeatLoader = require("react-spinners/BeatLoader");
var $ej8CT$reactmodal = require("react-modal");
var $ej8CT$muiiconsmaterialClose = require("@mui/icons-material/Close");
var $ej8CT$reactoauthgoogle = require("@react-oauth/google");
var $ej8CT$jwtdecode = require("jwt-decode");
var $ej8CT$muiiconsmaterialX = require("@mui/icons-material/X");
var $ej8CT$reactswipeable = require("react-swipeable");
var $ej8CT$reactdetectclickoutside = require("react-detect-click-outside");
var $ej8CT$muiiconsmaterialSettings = require("@mui/icons-material/Settings");
var $ej8CT$sumsubwebsdkreact = require("@sumsub/websdk-react");
var $ej8CT$axios = require("axios");
var $ej8CT$fortawesomereactfontawesome = require("@fortawesome/react-fontawesome");
var $ej8CT$fortawesomefreesolidsvgicons = require("@fortawesome/free-solid-svg-icons");
var $ej8CT$muiiconsmaterialOpenInNew = require("@mui/icons-material/OpenInNew");
var $ej8CT$muiiconsmaterialShare = require("@mui/icons-material/Share");
var $ej8CT$datefns = require("date-fns");
var $ej8CT$muiiconsmaterialChatBubble = require("@mui/icons-material/ChatBubble");
var $ej8CT$herouitooltip = require("@heroui/tooltip");
var $ej8CT$reactresponsive = require("react-responsive");
var $ej8CT$muiiconsmaterialImage = require("@mui/icons-material/Image");
var $ej8CT$humannumber = require("human-number");
var $ej8CT$reactinfinitescrollcomponent = require("react-infinite-scroll-component");
var $ej8CT$reactflipmove = require("react-flip-move");
var $ej8CT$muiiconsmaterialLink = require("@mui/icons-material/Link");
var $ej8CT$muiiconsmaterialLogout = require("@mui/icons-material/Logout");
var $ej8CT$muiiconsmaterialArrowBack = require("@mui/icons-material/ArrowBack");
var $ej8CT$muiiconsmaterialExpandMore = require("@mui/icons-material/ExpandMore");
var $ej8CT$muiiconsmaterialSearch = require("@mui/icons-material/Search");
var $ej8CT$handlebars = require("handlebars");
var $ej8CT$reactrouterdom = require("react-router-dom");
var $ej8CT$reacthelmet = require("react-helmet");
var $ej8CT$muiiconsmaterialArrowForwardIos = require("@mui/icons-material/ArrowForwardIos");
var $ej8CT$muiiconsmaterialPerson = require("@mui/icons-material/Person");
var $ej8CT$muiiconsmaterialHome = require("@mui/icons-material/Home");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $f65af04dce098364$export$2e2bcd8739ae039; });
/* eslint-disable */ 







var $12f3239090c19ec6$exports = {};

$parcel$export($12f3239090c19ec6$exports, "text", function () { return $12f3239090c19ec6$export$6f093cfa640b7166; }, function (v) { return $12f3239090c19ec6$export$6f093cfa640b7166 = v; });
var $12f3239090c19ec6$export$6f093cfa640b7166;
$12f3239090c19ec6$export$6f093cfa640b7166 = `kxZqba_text`;


var $0c0daff811cd87d5$export$2e2bcd8739ae039 = ({ children: children, className: className, style: style, id: id, onClick: onClick, h1: h1 = false })=>{
    if (h1) return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h1", {
        onClick: onClick,
        id: id,
        style: style,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($12f3239090c19ec6$exports))).text),
        children: children
    });
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        onClick: onClick,
        id: id,
        style: style,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($12f3239090c19ec6$exports))).text),
        children: children
    });
};


var $9987bb84e3d38abc$exports = {};

$parcel$export($9987bb84e3d38abc$exports, "hint", function () { return $9987bb84e3d38abc$export$464c821cd4347539; }, function (v) { return $9987bb84e3d38abc$export$464c821cd4347539 = v; });
var $9987bb84e3d38abc$export$464c821cd4347539;
$9987bb84e3d38abc$export$464c821cd4347539 = `mnSnnG_hint`;


var $1425334f9c0c876e$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups, selectedCircleParts: selectedCircleParts })=>{
    const lengthToHint = {
        1: "(select another group to continue)",
        2: "(click on area to select what goes to new group)"
    };
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($9987bb84e3d38abc$exports))).hint,
        children: selectedCircleParts.length === 1 ? "(click on selected area again to deselect)" : lengthToHint[selectedGroups.length]
    });
};


var $f2578b2327f61a2e$exports = {};

$parcel$export($f2578b2327f61a2e$exports, "circles", function () { return $f2578b2327f61a2e$export$c958aa0cc90a067; }, function (v) { return $f2578b2327f61a2e$export$c958aa0cc90a067 = v; });
$parcel$export($f2578b2327f61a2e$exports, "circlesContainer", function () { return $f2578b2327f61a2e$export$293c75fa7ed5ee8d; }, function (v) { return $f2578b2327f61a2e$export$293c75fa7ed5ee8d = v; });
var $f2578b2327f61a2e$export$c958aa0cc90a067;
var $f2578b2327f61a2e$export$293c75fa7ed5ee8d;
$f2578b2327f61a2e$export$c958aa0cc90a067 = `Cr8UFq_circles`;
$f2578b2327f61a2e$export$293c75fa7ed5ee8d = `Cr8UFq_circlesContainer`;


/* eslint-disable */ 

var $5205bad6e0a20955$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24b42",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#4db3e6",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#d24b42",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                        d: "M190.6658,32.47128c-.37175.36271-.85272.83714-1.40785,1.39869-.66472.67242-1.82727,1.86578-3.19238,3.36852-2.10675,2.31915-3.71682,4.29731-4.56259,5.35769-1.7324,2.17192-3.19062,4.16961-4.38222,5.88845-1.09726,1.58273-1.98921,2.95895-2.65152,4.01055-1.21135,1.92334-2.20209,3.63014-2.97261,5.013-1.16558,2.09183-2.09546,3.92372-2.794,5.36058-.68783,1.415-1.25747,2.66535-1.70668,3.68542-1.16221,2.63925-2.03706,4.91519-2.64586,6.58951-1.15973,3.18944-2.00822,5.9948-2.61911,8.21607-.60385,2.1957-1.28251,4.937-1.89727,8.12168-.42264,2.18944-.95343,5.30529-1.35293,9.07485-.18527,1.74829-.41326,4.30673-.52893,7.41366-.06681,1.79461-.102,3.92909-.05217,6.3325.08822,4.25547.40905,7.72117.66085,9.95249.35223,3.12119.78294,5.71922,1.13109,7.59448.53709,2.893,1.12466,5.396,1.65081,7.41973.50183,1.93021,1.13117,4.12963,1.92232,6.5342.52483,1.59511,1.25249,3.68051,2.20737,6.08421.47668,1.19994,1.08528,2.66875,1.83017,4.32869.47792,1.065,1.07173,2.342,1.78247,3.77471.59508,1.19955,1.40385,2.77391,2.417,4.59173.53761.96459,1.2214,2.15676,2.04257,3.50853.54281.89359,1.235,2.004,2.0632,3.26424.87064,1.32484,1.95784,2.91612,3.25682,4.68408.69695.94858,1.57654,2.11363,2.62222,3.42517.68856.86362,1.58332,1.95908,2.65668,3.20525.62874.73,1.37628,1.57843,2.23135,2.51184.00007.00007,1.20453,1.31489,2.444,2.58275.21534.22029.43481.44229.43489.44236.30043.30393.54693.54982.70729.70914.20521.20389.43374.42935.68327.673",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#00aeef",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    })
                ]
            })
        ]
    });


/* eslint-disable */ 

var $595db74255ec0f4e$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#3eb5f1",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24a43",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#3eb5f1",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                        d: "M190.6658,32.47128c-.37175.36271-.85272.83714-1.40785,1.39869-.66472.67242-1.82727,1.86578-3.19238,3.36852-2.10675,2.31915-3.71682,4.29731-4.56259,5.35769-1.7324,2.17192-3.19062,4.16961-4.38222,5.88845-1.09726,1.58273-1.98921,2.95895-2.65152,4.01055-1.21135,1.92334-2.20209,3.63014-2.97261,5.013-1.16558,2.09183-2.09546,3.92372-2.794,5.36058-.68783,1.415-1.25747,2.66535-1.70668,3.68542-1.16221,2.63925-2.03706,4.91519-2.64586,6.58951-1.15973,3.18944-2.00822,5.9948-2.61911,8.21607-.60385,2.1957-1.28251,4.937-1.89727,8.12168-.42264,2.18944-.95343,5.30529-1.35293,9.07485-.18527,1.74829-.41326,4.30673-.52893,7.41366-.06681,1.79461-.102,3.92909-.05217,6.3325.08822,4.25547.40905,7.72117.66085,9.95249.35223,3.12119.78294,5.71922,1.13109,7.59448.53709,2.893,1.12466,5.396,1.65081,7.41973.50183,1.93021,1.13117,4.12963,1.92232,6.5342.52483,1.59511,1.25249,3.68051,2.20737,6.08421.47668,1.19994,1.08528,2.66875,1.83017,4.32869.47792,1.065,1.07173,2.342,1.78247,3.77471.59508,1.19955,1.40385,2.77391,2.417,4.59173.53761.96459,1.2214,2.15676,2.04257,3.50853.54281.89359,1.235,2.004,2.0632,3.26424.87064,1.32484,1.95784,2.91612,3.25682,4.68408.69695.94858,1.57654,2.11363,2.62222,3.42517.68856.86362,1.58332,1.95908,2.65668,3.20525.62874.73,1.37628,1.57843,2.23135,2.51184.00007.00007,1.20453,1.31489,2.444,2.58275.21534.22029.43481.44229.43489.44236.30043.30393.54693.54982.70729.70914.20521.20389.43374.42935.68327.673",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#d24a43",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    })
                ]
            })
        ]
    });


/* eslint-disable */ 

var $6439b601231faa7b$export$2e2bcd8739ae039 = ()=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("ellipse", {
            cx: "111",
            cy: "109.9059",
            rx: "110",
            ry: "108.9059",
            fill: "none",
            stroke: "#d24b42",
            strokeMiterlimit: "10",
            strokeWidth: "2"
        })
    });
};


/* eslint-disable */ 

var $c49e69881abb8781$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("ellipse", {
            cx: "111",
            cy: "109.9059",
            rx: "110",
            ry: "108.9059",
            fill: "none",
            stroke: "#3eb5f1",
            strokeMiterlimit: "10",
            strokeWidth: "2"
        })
    });


const $a70e90c8c76b75d0$var$circlePartsToCompositionType = (circleParts)=>{
    if (circleParts.includes("intersection") && circleParts.length === 1) return "intersection";
    if (circleParts.includes("leftWing") && circleParts.length === 1) return "difference";
    if (circleParts.includes("rightWing") && circleParts.length === 1) return "difference";
    if (circleParts.includes("rightWing") && circleParts.includes("leftWing") && circleParts.length === 2) return "symmetric-difference";
    if ([
        "leftWing",
        "intersection",
        "rightWing"
    ].every((i)=>circleParts.includes(i))) return "union";
    return null;
};
const $a70e90c8c76b75d0$var$isAllowedToClick = (element, partName)=>{
    const isElementSelected = element.attr("fillOpacity") === "1";
    if (isElementSelected) return true;
    return $a70e90c8c76b75d0$var$circlePartsToCompositionType([
        ...$a70e90c8c76b75d0$var$selectedParts,
        partName
    ]);
};
const $a70e90c8c76b75d0$var$setCursorStyle = (element, partName)=>{
    const allowedToClick = $a70e90c8c76b75d0$var$isAllowedToClick(element, partName);
    const newStyle = allowedToClick ? "pointer" : "not-allowed";
    element.attr({
        cursor: newStyle
    });
};
let $a70e90c8c76b75d0$var$selectedParts = [];
var $a70e90c8c76b75d0$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups, handleCompositionTypeChange: handleCompositionTypeChange })=>{
    const changeOpacity = (element, partName, parts)=>{
        if (!$a70e90c8c76b75d0$var$isAllowedToClick(element, partName)) return;
        const isElementSelected = element.attr("fillOpacity") === "1";
        element.attr({
            "fillOpacity": isElementSelected ? "0" : "1"
        });
        const newSelectedParts = isElementSelected ? $a70e90c8c76b75d0$var$selectedParts.filter((i)=>i !== partName) : [
            ...$a70e90c8c76b75d0$var$selectedParts,
            partName
        ];
        const newCompositionType = $a70e90c8c76b75d0$var$circlePartsToCompositionType(newSelectedParts);
        $a70e90c8c76b75d0$var$selectedParts = newSelectedParts;
        Object.entries(parts).forEach(([partName, element])=>$a70e90c8c76b75d0$var$setCursorStyle(element, partName));
        handleCompositionTypeChange($a70e90c8c76b75d0$var$selectedParts);
    };
    (0, $ej8CT$react.useEffect)(()=>{
        if (selectedGroups.length !== 2) return;
        const intersection = Snap("#intersection");
        const rightWing = Snap("#right-wing");
        const leftWing = Snap("#left-wing");
        const parts = {
            intersection: intersection,
            rightWing: rightWing,
            leftWing: leftWing
        };
        Object.entries(parts).forEach(([partName, element])=>element.click(()=>changeOpacity(element, partName, parts)));
    }, [
        selectedGroups.length
    ]);
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($f2578b2327f61a2e$exports))).circles,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($f2578b2327f61a2e$exports))).circlesContainer,
                children: selectedGroups.length === 1 ? selectedGroups[0].color === "#3eb5f1" ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $c49e69881abb8781$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $6439b601231faa7b$export$2e2bcd8739ae039), {}) : selectedGroups[0].color === "#3eb5f1" ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $595db74255ec0f4e$export$2e2bcd8739ae039), {
                    style: {
                        cursor: "pointer"
                    }
                }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $5205bad6e0a20955$export$2e2bcd8739ae039), {
                    style: {
                        cursor: "pointer"
                    }
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $1425334f9c0c876e$export$2e2bcd8739ae039), {
                selectedGroups: selectedGroups,
                selectedCircleParts: $a70e90c8c76b75d0$var$selectedParts
            })
        ]
    });
};







var $0f5819c1e6ebab2b$exports = {};

$parcel$export($0f5819c1e6ebab2b$exports, "input", function () { return $0f5819c1e6ebab2b$export$b7e3ae3d7c15e42e; }, function (v) { return $0f5819c1e6ebab2b$export$b7e3ae3d7c15e42e = v; });
$parcel$export($0f5819c1e6ebab2b$exports, "text", function () { return $0f5819c1e6ebab2b$export$6f093cfa640b7166; }, function (v) { return $0f5819c1e6ebab2b$export$6f093cfa640b7166 = v; });
var $0f5819c1e6ebab2b$export$b7e3ae3d7c15e42e;
var $0f5819c1e6ebab2b$export$6f093cfa640b7166;
$0f5819c1e6ebab2b$export$b7e3ae3d7c15e42e = `KU4pnW_input`;
$0f5819c1e6ebab2b$export$6f093cfa640b7166 = `KU4pnW_text`;


var $8cd8b46839e23c83$export$2e2bcd8739ae039 = ({ onTitleInput: onTitleInput, value: value })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($0f5819c1e6ebab2b$exports))).text,
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("input", {
            placeholder: "Group name...",
            className: (0, (/*@__PURE__*/$parcel$interopDefault($0f5819c1e6ebab2b$exports))).input,
            onChange: (e)=>onTitleInput(e.target.value),
            value: value
        })
    });












var $65d40aaa39ac884f$exports = {};

$parcel$export($65d40aaa39ac884f$exports, "button", function () { return $65d40aaa39ac884f$export$2ba01fb71ed41cb6; }, function (v) { return $65d40aaa39ac884f$export$2ba01fb71ed41cb6 = v; });
$parcel$export($65d40aaa39ac884f$exports, "loader", function () { return $65d40aaa39ac884f$export$f4c5de44377d2946; }, function (v) { return $65d40aaa39ac884f$export$f4c5de44377d2946 = v; });
var $65d40aaa39ac884f$export$2ba01fb71ed41cb6;
var $65d40aaa39ac884f$export$f4c5de44377d2946;
$65d40aaa39ac884f$export$2ba01fb71ed41cb6 = `YNj7fG_button`;
$65d40aaa39ac884f$export$f4c5de44377d2946 = `YNj7fG_loader`;


var $04a37c0ca54fa0c0$export$2e2bcd8739ae039 = ({ children: children, className: className, onClick: onClick, disabled: disabled, loading: loading })=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
        disabled: Boolean(disabled),
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($65d40aaa39ac884f$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($65d40aaa39ac884f$exports))).loader]: loading
        }),
        onClick: onClick,
        children: loading ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactspinnersBeatLoader))), {
            color: "#ebedf2"
        }) : children
    });
};



var $920970f3f51d3f17$exports = {};

$parcel$export($920970f3f51d3f17$exports, "button", function () { return $920970f3f51d3f17$export$2ba01fb71ed41cb6; }, function (v) { return $920970f3f51d3f17$export$2ba01fb71ed41cb6 = v; });
$parcel$export($920970f3f51d3f17$exports, "nobold", function () { return $920970f3f51d3f17$export$a9c364a443888bb7; }, function (v) { return $920970f3f51d3f17$export$a9c364a443888bb7 = v; });
$parcel$export($920970f3f51d3f17$exports, "primary", function () { return $920970f3f51d3f17$export$9ad721cf3b3debe0; }, function (v) { return $920970f3f51d3f17$export$9ad721cf3b3debe0 = v; });
$parcel$export($920970f3f51d3f17$exports, "secondary", function () { return $920970f3f51d3f17$export$745c6f71a1e0e6f7; }, function (v) { return $920970f3f51d3f17$export$745c6f71a1e0e6f7 = v; });
var $920970f3f51d3f17$export$2ba01fb71ed41cb6;
var $920970f3f51d3f17$export$a9c364a443888bb7;
var $920970f3f51d3f17$export$9ad721cf3b3debe0;
var $920970f3f51d3f17$export$745c6f71a1e0e6f7;
$920970f3f51d3f17$export$2ba01fb71ed41cb6 = `TFw-jG_button`;
$920970f3f51d3f17$export$a9c364a443888bb7 = `TFw-jG_nobold`;
$920970f3f51d3f17$export$9ad721cf3b3debe0 = `TFw-jG_primary`;
$920970f3f51d3f17$export$745c6f71a1e0e6f7 = `TFw-jG_secondary`;


var $9c87ec8fc8707caf$export$2e2bcd8739ae039 = ({ children: children, primary: primary, secondary: secondary, onClick: onClick, disabled: disabled, nobold: nobold })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $04a37c0ca54fa0c0$export$2e2bcd8739ae039), {
        disabled: disabled,
        onClick: onClick,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($920970f3f51d3f17$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($920970f3f51d3f17$exports))).primary]: primary,
            [(0, (/*@__PURE__*/$parcel$interopDefault($920970f3f51d3f17$exports))).secondary]: secondary,
            [(0, (/*@__PURE__*/$parcel$interopDefault($920970f3f51d3f17$exports))).nobold]: nobold
        }),
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
            children: children
        })
    });














var $0f2ff5e4d2d8dcf2$exports = {};

$parcel$export($0f2ff5e4d2d8dcf2$exports, "container", function () { return $0f2ff5e4d2d8dcf2$export$34e0f9847d4c02dd; }, function (v) { return $0f2ff5e4d2d8dcf2$export$34e0f9847d4c02dd = v; });
var $0f2ff5e4d2d8dcf2$export$34e0f9847d4c02dd;
$0f2ff5e4d2d8dcf2$export$34e0f9847d4c02dd = `cslm1q_container`;


// eslint-disable-next-line no-extend-native
Number.prototype.mod = function(n) {
    return (this % n + n) % n;
};
const $a35b2776be1cf248$var$screens = [
    {
        name: "groups",
        index: 0
    },
    {
        name: "groupContent",
        index: 1
    },
    {
        name: "questions",
        index: 2
    }
];
var $a35b2776be1cf248$export$2e2bcd8739ae039 = ({ children: children })=>{
    const value = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    const [swipeCount, setSwipeCount] = (0, $ej8CT$react.useState)(2);
    const screenBySwipeCount = Object.fromEntries(Object.entries($a35b2776be1cf248$var$screens.filter((i)=>value.skipScreen ? !value.skipScreen.includes(i.name) : true)));
    const handlers = (0, $ej8CT$reactswipeable.useSwipeable)({
        onSwiped: (eventData)=>{
            if (Object.keys(screenBySwipeCount).length === 0) return;
            // if (eventData.dir === 'Right' || eventData.dir === 'Left') {
            //   const plus = (eventData.dir === 'Left' ? 1 : (-1))
            //   const newSwipeCount = (swipeCount + plus).mod(Object.values(screenBySwipeCount).length)
            //   setSwipeCount(newSwipeCount)
            //   value.toggleScreen(screenBySwipeCount[newSwipeCount].name)
            // }
            if (eventData.dir === "Right") value.setShowSearch(true);
            if (eventData.dir === "Left") value.setShowSearch(false);
        },
        delta: 40,
        preventDefaultTouchmoveEvent: true
    });
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("main", {
        ...handlers,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($0f2ff5e4d2d8dcf2$exports))).container,
        children: children
    });
};
const $a35b2776be1cf248$export$97295e60e7f371e1 = ({ children: children })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("main", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($0f2ff5e4d2d8dcf2$exports))).container,
        children: children
    });











var $ce34f8eeeb61dd73$exports = {};
$ce34f8eeeb61dd73$exports = new URL("kyc.31754f12.svg", "file:" + __filename).toString();



var $2f0244e7a7dd8ee4$exports = {};

$parcel$export($2f0244e7a7dd8ee4$exports, "container", function () { return $2f0244e7a7dd8ee4$export$34e0f9847d4c02dd; }, function (v) { return $2f0244e7a7dd8ee4$export$34e0f9847d4c02dd = v; });
$parcel$export($2f0244e7a7dd8ee4$exports, "divider", function () { return $2f0244e7a7dd8ee4$export$e8c9778bf415dd08; }, function (v) { return $2f0244e7a7dd8ee4$export$e8c9778bf415dd08 = v; });
$parcel$export($2f0244e7a7dd8ee4$exports, "dropdown", function () { return $2f0244e7a7dd8ee4$export$81207e5cc4186890; }, function (v) { return $2f0244e7a7dd8ee4$export$81207e5cc4186890 = v; });
$parcel$export($2f0244e7a7dd8ee4$exports, "icon", function () { return $2f0244e7a7dd8ee4$export$1ca1ec8b29a4ce27; }, function (v) { return $2f0244e7a7dd8ee4$export$1ca1ec8b29a4ce27 = v; });
$parcel$export($2f0244e7a7dd8ee4$exports, "twitterSignIn", function () { return $2f0244e7a7dd8ee4$export$6c489d6abe11ec5c; }, function (v) { return $2f0244e7a7dd8ee4$export$6c489d6abe11ec5c = v; });
$parcel$export($2f0244e7a7dd8ee4$exports, "username", function () { return $2f0244e7a7dd8ee4$export$5e1be761f603d585; }, function (v) { return $2f0244e7a7dd8ee4$export$5e1be761f603d585 = v; });
var $2f0244e7a7dd8ee4$export$34e0f9847d4c02dd;
var $2f0244e7a7dd8ee4$export$e8c9778bf415dd08;
var $2f0244e7a7dd8ee4$export$81207e5cc4186890;
var $2f0244e7a7dd8ee4$export$1ca1ec8b29a4ce27;
var $2f0244e7a7dd8ee4$export$6c489d6abe11ec5c;
var $2f0244e7a7dd8ee4$export$5e1be761f603d585;
$2f0244e7a7dd8ee4$export$34e0f9847d4c02dd = `O1Vdva_container`;
$2f0244e7a7dd8ee4$export$e8c9778bf415dd08 = `O1Vdva_divider`;
$2f0244e7a7dd8ee4$export$81207e5cc4186890 = `O1Vdva_dropdown`;
$2f0244e7a7dd8ee4$export$1ca1ec8b29a4ce27 = `O1Vdva_icon`;
$2f0244e7a7dd8ee4$export$6c489d6abe11ec5c = `O1Vdva_twitterSignIn`;
$2f0244e7a7dd8ee4$export$5e1be761f603d585 = `O1Vdva_username`;


const $2f1a7af5ffd4a24b$export$b1977eae5cbd7a49 = ({ userId: userId, updateJwt: updateJwt, closeModal: closeModal })=>{
    const [accessToken, setAccessToken] = (0, $ej8CT$react.useState)("");
    (0, $ej8CT$react.useEffect)(()=>{
        const fetchAccessToken = async ()=>{
            try {
                const response = await (0, ($parcel$interopDefault($ej8CT$axios))).post("/api/kyc/access-token", {
                    userId: userId,
                    levelName: "all-data" // Replace with your level name
                });
                setAccessToken(response.data.token);
            } catch (error) {
                console.error("Error fetching access token:", error.response?.data || error.message);
            }
        };
        fetchAccessToken();
    }, [
        userId
    ]);
    const handleMessage = (type, payload)=>{
        console.log("Sumsub message:", type, payload);
        if (type === "idCheck.onApplicantStatusChanged" && payload.reviewStatus === "completed" && updateJwt) {
            console.log("success KYC");
            updateJwt();
        // Handle post-verification logic here
        // closeModal()
        }
    };
    const handleError = (error)=>{
        console.error("Sumsub error:", error);
    };
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        children: accessToken && userId && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$sumsubwebsdkreact))), {
            accessToken: accessToken,
            expirationHandler: ()=>(0, ($parcel$interopDefault($ej8CT$axios))).post("/api/kyc/access-token", {
                    userId: userId,
                    levelName: "basic-kyc-level"
                }).then((res)=>res.data.token),
            config: {
                lang: "en"
            },
            options: {
                addViewportTag: false,
                adaptIframeHeight: true
            },
            onMessage: handleMessage,
            onError: handleError
        })
    });
};
var $2f1a7af5ffd4a24b$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ logout: logout, username: username, showXLogin: showXLogin, showKYCLogin: showKYCLogin, showMyHistory: showMyHistory, changeUser: changeUser, testUsers: testUsers = [], handleTwitterLogin: handleTwitterLogin }, ref2)=>{
    const [showDropdown, setShowDropdown] = (0, $ej8CT$react.useState)(false);
    const ref = (0, $ej8CT$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowDropdown(false)
    });
    const { setIsModalOpen: setIsModalOpen, setShowKYCModal: setShowKYCModal, setIsLoginModalOpen: setIsLoginModalOpen } = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    const content = /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
        children: [
            username ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).username,
                    children: [
                        "Settings (",
                        username,
                        ")"
                    ]
                })
            }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).twitterSignIn,
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).username,
                    children: "Sign in"
                })
            }),
            username && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialSettings))), {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).icon,
                sx: {
                    color: "#2b2b2b"
                }
            })
        ]
    });
    if (!username) return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
            ref: (node)=>{
                if (ref2) ref2(node);
            },
            className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).container,
            style: {
                justifyContent: "center",
                border: "none",
                fontSize: 16
            },
            onClick: ()=>{
                setIsLoginModalOpen(true);
            },
            children: content
        })
    });
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        style: {
            display: "flex",
            gap: 12,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                // ref={node => {
                //   ref.current = node
                //   if (ref2) {
                //     ref2(node)
                //   }
                // }}
                className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).container,
                onClick: (e)=>{
                    e.stopPropagation();
                    setShowDropdown(!showDropdown);
                },
                style: {
                    width: showKYCLogin || showXLogin ? "40%" : "100%",
                    textAlign: "center"
                },
                children: content
            }),
            showXLogin && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).twitterSignIn, (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).container),
                style: {
                    width: "calc(60% - 12px)"
                },
                onClick: handleTwitterLogin,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).username,
                        children: "Verify yourself with"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialX))), {})
                ]
            }),
            showKYCLogin && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).twitterSignIn, (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).container),
                style: {
                    width: "calc(60% - 12px)"
                },
                onClick: ()=>{
                    window.mixpanel.track("Verify Identity");
                    setShowKYCModal(true);
                },
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).username,
                        children: "Verify yourself with"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($ce34f8eeeb61dd73$exports))),
                        style: {
                            height: 27,
                            marginBottom: 3
                        }
                    })
                ]
            }),
            username && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                style: {
                    display: showDropdown ? "flex" : "none"
                },
                className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).dropdown,
                ref: (node)=>{
                    ref.current = node;
                    if (ref2) ref2(node);
                },
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        onClick: logout,
                        children: "Log out"
                    }),
                    window.featureFlags.rewards && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        onClick: ()=>{
                            window.mixpanel.track("Rewards");
                            setIsModalOpen(true);
                        },
                        children: "Rewards"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        onClick: showMyHistory,
                        children: "My Questions/Answers"
                    }),
                    Boolean(testUsers.length) && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2f0244e7a7dd8ee4$exports))).divider,
                        children: "Test Users"
                    }),
                    testUsers.map((i)=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                            onClick: ()=>changeUser(i.fullName),
                            children: i.fullName
                        }, i.fullName)),
                    Boolean(testUsers.length) && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        onClick: ()=>changeUser(),
                        children: "me"
                    })
                ]
            })
        ]
    });
});



var $bab4c79dd1797f76$exports = {};

$parcel$export($bab4c79dd1797f76$exports, "address", function () { return $bab4c79dd1797f76$export$f7d3c097ceca6c15; }, function (v) { return $bab4c79dd1797f76$export$f7d3c097ceca6c15 = v; });
$parcel$export($bab4c79dd1797f76$exports, "amount", function () { return $bab4c79dd1797f76$export$802cfe72001a1ee; }, function (v) { return $bab4c79dd1797f76$export$802cfe72001a1ee = v; });
$parcel$export($bab4c79dd1797f76$exports, "body", function () { return $bab4c79dd1797f76$export$32180ef41b15b513; }, function (v) { return $bab4c79dd1797f76$export$32180ef41b15b513 = v; });
$parcel$export($bab4c79dd1797f76$exports, "close", function () { return $bab4c79dd1797f76$export$8360e631d277ea4d; }, function (v) { return $bab4c79dd1797f76$export$8360e631d277ea4d = v; });
$parcel$export($bab4c79dd1797f76$exports, "connectButton", function () { return $bab4c79dd1797f76$export$53a6eba4a816532e; }, function (v) { return $bab4c79dd1797f76$export$53a6eba4a816532e = v; });
$parcel$export($bab4c79dd1797f76$exports, "hide", function () { return $bab4c79dd1797f76$export$fe8985bb6374093c; }, function (v) { return $bab4c79dd1797f76$export$fe8985bb6374093c = v; });
$parcel$export($bab4c79dd1797f76$exports, "input", function () { return $bab4c79dd1797f76$export$b7e3ae3d7c15e42e; }, function (v) { return $bab4c79dd1797f76$export$b7e3ae3d7c15e42e = v; });
$parcel$export($bab4c79dd1797f76$exports, "modalContent", function () { return $bab4c79dd1797f76$export$add244bda2f9423c; }, function (v) { return $bab4c79dd1797f76$export$add244bda2f9423c = v; });
$parcel$export($bab4c79dd1797f76$exports, "row", function () { return $bab4c79dd1797f76$export$120ff0929b202a6d; }, function (v) { return $bab4c79dd1797f76$export$120ff0929b202a6d = v; });
$parcel$export($bab4c79dd1797f76$exports, "search", function () { return $bab4c79dd1797f76$export$d76128d007d19019; }, function (v) { return $bab4c79dd1797f76$export$d76128d007d19019 = v; });
$parcel$export($bab4c79dd1797f76$exports, "twitterSignIn", function () { return $bab4c79dd1797f76$export$6c489d6abe11ec5c; }, function (v) { return $bab4c79dd1797f76$export$6c489d6abe11ec5c = v; });
var $bab4c79dd1797f76$export$f7d3c097ceca6c15;
var $bab4c79dd1797f76$export$802cfe72001a1ee;
var $bab4c79dd1797f76$export$32180ef41b15b513;
var $bab4c79dd1797f76$export$8360e631d277ea4d;
var $bab4c79dd1797f76$export$53a6eba4a816532e;
var $bab4c79dd1797f76$export$fe8985bb6374093c;
var $bab4c79dd1797f76$export$b7e3ae3d7c15e42e;
var $bab4c79dd1797f76$export$add244bda2f9423c;
var $bab4c79dd1797f76$export$120ff0929b202a6d;
var $bab4c79dd1797f76$export$d76128d007d19019;
var $bab4c79dd1797f76$export$6c489d6abe11ec5c;
$bab4c79dd1797f76$export$f7d3c097ceca6c15 = `woAJlG_address`;
$bab4c79dd1797f76$export$802cfe72001a1ee = `woAJlG_amount`;
$bab4c79dd1797f76$export$32180ef41b15b513 = `woAJlG_body`;
$bab4c79dd1797f76$export$8360e631d277ea4d = `woAJlG_close`;
$bab4c79dd1797f76$export$53a6eba4a816532e = `woAJlG_connectButton`;
$bab4c79dd1797f76$export$fe8985bb6374093c = `woAJlG_hide`;
$bab4c79dd1797f76$export$b7e3ae3d7c15e42e = `woAJlG_input`;
$bab4c79dd1797f76$export$add244bda2f9423c = `woAJlG_modalContent`;
$bab4c79dd1797f76$export$120ff0929b202a6d = `woAJlG_row`;
$bab4c79dd1797f76$export$d76128d007d19019 = `woAJlG_search`;
$bab4c79dd1797f76$export$6c489d6abe11ec5c = `woAJlG_twitterSignIn`;


const $ce45b91ae0a799fc$export$2515d253ab459c32 = 450;
const $ce45b91ae0a799fc$export$310e42f8685040c9 = 1361;
const $ce45b91ae0a799fc$export$5d27a029e0b63495 = 914;
const $ce45b91ae0a799fc$export$120137d2fb34488f = 945;


const $dc2bc6bb05cca233$export$32c650b79baf5fee = /*#__PURE__*/ (0, ($parcel$interopDefault($ej8CT$react))).createContext({
    setIsLoginModalOpen: ()=>{},
    toggleScreen: null,
    setSkipScreen: null,
    setIsModalOpen: false,
    setShowSearch: null,
    addImgModal: false,
    showSearch: false,
    setAnswer: ()=>{},
    setShowKYCModal: ()=>{},
    setSelectedMessage: ()=>{},
    setAddImgModal: ()=>{},
    setShowGroups: ()=>{},
    showGroups: false,
    setShowSearchMenu: ()=>{},
    showSearchMenu: false,
    imgUrl: null,
    screenName: null
});
const $dc2bc6bb05cca233$var$customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column"
    }
};
const $dc2bc6bb05cca233$var$clientId = "693824624560-f3596tslik0htj03c2p4cqnevievv8ej.apps.googleusercontent.com" // Replace with your actual Client ID
;
(0, ($parcel$interopDefault($ej8CT$reactmodal))).setAppElement("#app");
var $dc2bc6bb05cca233$export$2e2bcd8739ae039 = ({ children: children, includeSwipes: includeSwipes, address: address, payout: payout, userId: userId, connectToWallet: connectToWalletR, addImage: addImage, updateJwt: updateJwt, hide: hideR, connected: connected, handleTwitterLogin: handleTwitterLogin, isWalletModalOpenInitial: isWalletModalOpenInitial = true, createUser: createUser, showKYC: showKYC })=>{
    const [screenName, toggleScreen] = (0, $ej8CT$react.useState)("uninitialized");
    const [skipScreen, setSkipScreen] = (0, $ej8CT$react.useState)();
    const [isModalOpen, setIsModalOpen] = (0, $ej8CT$react.useState)(false);
    const [isWalletModalOpen, setIsWalletModalOpen] = (0, $ej8CT$react.useState)(isWalletModalOpenInitial);
    const [showSearch, setShowSearch] = (0, $ej8CT$react.useState)(false);
    const [showLoginModal, setIsLoginModalOpen] = (0, $ej8CT$react.useState)(false);
    const [showKYCModal, setShowKYCModal] = (0, $ej8CT$react.useState)(false);
    const [answer, setAnswer] = (0, $ej8CT$react.useState)(null);
    const [addImgModal, setAddImgModal] = (0, $ej8CT$react.useState)(false);
    const [selectedMessage, setSelectedMessage] = (0, $ej8CT$react.useState)(false);
    const [imgUrl, setImgUrl] = (0, $ej8CT$react.useState)("");
    const [sendEmails, setSendEmails] = (0, $ej8CT$react.useState)(true);
    const [showSearchMenu, setShowSearchMenu] = (0, $ej8CT$react.useState)(false);
    const [showGroups, setShowGroups] = (0, $ej8CT$react.useState)(false);
    const ref = (0, $ej8CT$react.useRef)(null);
    (0, $ej8CT$react.useEffect)(()=>{
        const handler = ()=>{
            const { innerWidth: width } = window;
            if (width > (0, $ce45b91ae0a799fc$export$120137d2fb34488f)) toggleScreen();
            if (screenName === "uninitialized" && width < (0, $ce45b91ae0a799fc$export$120137d2fb34488f)) toggleScreen("questions");
        };
        handler();
        window.addEventListener("resize", handler);
        return ()=>window.removeEventListener("resize", handler);
    }, []);
    (0, $ej8CT$react.useEffect)(()=>{
        if (skipScreen && skipScreen.includes(screenName)) toggleScreen("questions");
    }, [
        skipScreen
    ]);
    const connectToWallet = ()=>{
        window.mixpanel.track("Rewards Modal -> Connect Wallet Click");
        connectToWalletR();
        setIsWalletModalOpen(false);
        setIsModalOpen(false);
    };
    const hide = ()=>{
        hideR();
        setIsWalletModalOpen(false);
    };
    const handleLoginSuccess = async (credentialResponse)=>{
        const userInfo = credentialResponse.credential;
        const decoded = (0, $ej8CT$jwtdecode.jwtDecode)(userInfo);
        await createUser({
            ...answer,
            ...decoded,
            sendEmails: sendEmails
        });
        window.gtag_report_conversion();
        setIsLoginModalOpen(false);
    };
    const handleLoginFailure = (error)=>{
        console.error("Login Failed: ", error);
        window.mixpanel.track("Login Failed", {
            error: error
        });
    };
    const closeRewardsConnectWalletModal = ()=>{
        setIsModalOpen(false);
        window.mixpanel.track("Rewards Modal(Connect Wallet) -> Close Click");
    };
    if (includeSwipes) return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactoauthgoogle.GoogleOAuthProvider), {
        clientId: $dc2bc6bb05cca233$var$clientId,
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)($dc2bc6bb05cca233$export$32c650b79baf5fee.Provider, {
            value: {
                screenName: screenName,
                skipScreen: skipScreen,
                showSearch: showSearch,
                toggleScreen: toggleScreen,
                setShowSearch: setShowSearch,
                setSkipScreen: setSkipScreen,
                setIsModalOpen: setIsModalOpen,
                setIsWalletModalOpen: setIsWalletModalOpen,
                setIsLoginModalOpen: setIsLoginModalOpen,
                setAnswer: setAnswer,
                setShowKYCModal: setShowKYCModal,
                setAddImgModal: setAddImgModal,
                setSelectedMessage: setSelectedMessage,
                setShowSearchMenu: setShowSearchMenu,
                showSearchMenu: showSearchMenu,
                setShowGroups: setShowGroups,
                showGroups: showGroups,
                imgUrl: imgUrl,
                ref: ref
            },
            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$herouireact.HeroUIProvider), {
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouireact.ToastProvider), {}),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        style: {
                            height: screenName ? "100%" : "auto"
                        },
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).body,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($ej8CT$reactmodal))), {
                                isOpen: isWalletModalOpen,
                                onRequestClose: ()=>setIsWalletModalOpen(false),
                                style: $dc2bc6bb05cca233$var$customStyles,
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        onClick: ()=>setIsWalletModalOpen(false),
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h2", {
                                                children: "Connect Wallet"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).modalContent,
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                                                children: "Do you have a wallet(metamask, trust, etc)?"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("p", {
                                                children: "In this app you can get crypto rewards for asking and answering questions. But to get them you need crypto wallet."
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    "If you don't have one, click ",
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).hide,
                                                        onClick: hide,
                                                        children: "hide to stop seeing this popup"
                                                    }),
                                                    ". Later you can always find it in ",
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                                                        children: "settings > rewards"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).connectButton,
                                                onClick: connectToWallet,
                                                children: "Connect"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactmodal))), {
                                isOpen: isModalOpen,
                                onRequestClose: closeRewardsConnectWalletModal,
                                style: $dc2bc6bb05cca233$var$customStyles,
                                children: connected ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).close,
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h2", {
                                                    children: "Rewards"
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).row,
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                                                    children: "your address: "
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).address,
                                                    children: address
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).row,
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                                                    children: "your payout: "
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("span", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).amount,
                                                    children: [
                                                        payout,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                                                    children: "ASK"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                            onClick: closeRewardsConnectWalletModal,
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).close,
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h2", {
                                                    children: "Rewards"
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("p", {
                                            children: "To get rewards for asking questions and answering them you need to connect crypto wallet"
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                                            style: {
                                                width: "100%",
                                                marginTop: 20
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).connectButton,
                                            onClick: connectToWallet,
                                            children: "Connect"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($ej8CT$reactmodal))), {
                                isOpen: showLoginModal,
                                onRequestClose: ()=>setIsLoginModalOpen(false),
                                style: $dc2bc6bb05cca233$var$customStyles,
                                shouldCloseOnOverlayClick: false,
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h2", {
                                                children: "Login or Sign up"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {
                                                onClick: ()=>setIsLoginModalOpen(false)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("p", {
                                                style: {
                                                    marginBottom: 4
                                                },
                                                children: "To count your answer we need you to finish registration."
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("p", {
                                                children: "Otherwise votes wouldn't mean a thing."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).modalContent,
                                        id: "model-content",
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactoauthgoogle.GoogleLogin), {
                                                onSuccess: handleLoginSuccess,
                                                onFailure: handleLoginFailure,
                                                cookiePolicy: "single_host_origin",
                                                prompt_parent_id: "tester-tester"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("button", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).twitterSignIn,
                                                onClick: ()=>{
                                                    setAnswer(null);
                                                    handleTwitterLogin(`?sendEmails=${sendEmails}
                        ${answer ? `&answer=${answer.answer}&parentMessageId=${answer.parentMessageId}&href=/questions/${answer.shortId}` : ""}`);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialX))), {}),
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                                                        style: {
                                                            flexGrow: 1
                                                        },
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).username,
                                                        children: "Sign in with X"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).checkboxes__row,
                                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).checkboxes__item,
                                                    children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("label", {
                                                        style: {
                                                            display: "flex",
                                                            gap: 4
                                                        },
                                                        className: `${(0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports)))["style-c"]}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("input", {
                                                                style: {
                                                                    height: 13,
                                                                    marginTop: 4
                                                                },
                                                                checked: sendEmails,
                                                                type: "checkbox",
                                                                onChange: (e)=>setSendEmails(e.target.checked)
                                                            }),
                                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).checkbox__checkmark
                                                            }),
                                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).checkbox__body,
                                                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                                    children: "We will send you one email a week about most answered polls of that week."
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($ej8CT$reactmodal))), {
                                isOpen: showKYCModal,
                                onRequestClose: ()=>setShowKYCModal(false),
                                style: $dc2bc6bb05cca233$var$customStyles,
                                shouldCloseOnOverlayClick: false,
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        onClick: ()=>setShowKYCModal(false),
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h2", {
                                                children: "Verify your Identity"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("p", {
                                                style: {
                                                    marginBottom: 4
                                                },
                                                children: "We need to verify your identity, as you can understand, to ensure to the maximum possible extent, that you are a real person. That way all the answers to polls become so much more valuable to you and everyone else."
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                                                children: "*Your first and last name, as well as country of origin and age will be public, if it's not clear yet"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $2f1a7af5ffd4a24b$export$b1977eae5cbd7a49), {
                                        userId: userId,
                                        updateJwt: updateJwt,
                                        closeModal: ()=>setShowKYCModal(false)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($ej8CT$reactmodal))), {
                                isOpen: addImgModal,
                                onRequestClose: ()=>setAddImgModal(false),
                                style: $dc2bc6bb05cca233$var$customStyles,
                                shouldCloseOnOverlayClick: false,
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        onClick: ()=>setAddImgModal(false),
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h2", {
                                                children: "Add Art to the Question"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        style: {
                                            marginBottom: 20,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("input", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).input,
                                                placeholder: "Place img url here...",
                                                onChange: (e)=>setImgUrl(e.target.value),
                                                value: imgUrl
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).search,
                                                onClick: ()=>{
                                                    addImage(selectedMessage, imgUrl);
                                                },
                                                children: "add"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $a35b2776be1cf248$export$97295e60e7f371e1), {
                                children: children
                            })
                        ]
                    })
                ]
            })
        })
    });
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        style: {
            height: screenName ? "100%" : "auto"
        },
        className: (0, (/*@__PURE__*/$parcel$interopDefault($bab4c79dd1797f76$exports))).body,
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $a35b2776be1cf248$export$97295e60e7f371e1), {
            children: children
        })
    });
};


var $c1b294f649836971$exports = {};

$parcel$export($c1b294f649836971$exports, "buttons", function () { return $c1b294f649836971$export$bbea856fdb3e3c5f; }, function (v) { return $c1b294f649836971$export$bbea856fdb3e3c5f = v; });
var $c1b294f649836971$export$bbea856fdb3e3c5f;
$c1b294f649836971$export$bbea856fdb3e3c5f = `VjrALq_buttons`;


var $e893dd1485a83a98$export$2e2bcd8739ae039 = ({ disableButtons: disableButtons, select: select, combine: combine })=>{
    const { setIsLoginModalOpen: setIsLoginModalOpen } = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($c1b294f649836971$exports))).buttons,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9c87ec8fc8707caf$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: ()=>{
                    if (disableButtons) return (0, $ej8CT$herouireact.addToast)({
                        title: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: 8
                            },
                            children: [
                                "Please login to combine groups",
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9c87ec8fc8707caf$export$2e2bcd8739ae039), {
                                    nobold: true,
                                    secondary: true,
                                    onClick: ()=>setIsLoginModalOpen(true),
                                    children: "Login"
                                })
                            ]
                        })
                    });
                    select();
                },
                children: "Select"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9c87ec8fc8707caf$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: ()=>{
                    if (disableButtons) return (0, $ej8CT$herouireact.addToast)({
                        title: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: 8
                            },
                            children: [
                                "Please login to combine groups",
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9c87ec8fc8707caf$export$2e2bcd8739ae039), {
                                    nobold: true,
                                    secondary: true,
                                    onClick: ()=>setIsLoginModalOpen(true),
                                    children: "Login"
                                })
                            ]
                        })
                    });
                    combine();
                },
                children: "Combine"
            })
        ]
    });
};





var $e4972465afbfd5fd$exports = {};

$parcel$export($e4972465afbfd5fd$exports, "buttons", function () { return $e4972465afbfd5fd$export$bbea856fdb3e3c5f; }, function (v) { return $e4972465afbfd5fd$export$bbea856fdb3e3c5f = v; });
var $e4972465afbfd5fd$export$bbea856fdb3e3c5f;
$e4972465afbfd5fd$export$bbea856fdb3e3c5f = `Z5UYwW_buttons`;


var $9f6f3fcec345a08d$export$2e2bcd8739ae039 = ({ readyToSave: readyToSave, save: save, cancel: cancel })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e4972465afbfd5fd$exports))).buttons,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9c87ec8fc8707caf$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                disabled: !readyToSave,
                primary: true,
                onClick: save,
                children: "Save"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9c87ec8fc8707caf$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: cancel,
                children: "Cancel"
            })
        ]
    });





var $bd15c6a8cc4c521c$export$2e2bcd8739ae039 = ({ x: x })=>x.toLocaleString();


var $449be4d8e36a45fc$exports = {};

$parcel$export($449be4d8e36a45fc$exports, "userCount", function () { return $449be4d8e36a45fc$export$72bd514aa1799057; }, function (v) { return $449be4d8e36a45fc$export$72bd514aa1799057 = v; });
var $449be4d8e36a45fc$export$72bd514aa1799057;
$449be4d8e36a45fc$export$72bd514aa1799057 = `lDmasW_userCount`;


var $028322093b504a65$export$2e2bcd8739ae039 = ({ userCount: userCount, style: style })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($449be4d8e36a45fc$exports))).userCount,
        children: userCount === null ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactjsxruntime.Fragment), {
            children: "select new group parts"
        }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $bd15c6a8cc4c521c$export$2e2bcd8739ae039), {
                    x: userCount
                }),
                " people"
            ]
        })
    });






var $97ffd3be51901e35$exports = {};

$parcel$export($97ffd3be51901e35$exports, "icon", function () { return $97ffd3be51901e35$export$1ca1ec8b29a4ce27; }, function (v) { return $97ffd3be51901e35$export$1ca1ec8b29a4ce27 = v; });
var $97ffd3be51901e35$export$1ca1ec8b29a4ce27;
$97ffd3be51901e35$export$1ca1ec8b29a4ce27 = `xgmUuq_icon`;


var $9729164741160eac$export$2e2bcd8739ae039 = ({ color: color = "#bebebe", deselect: deselect })=>{
    const [icon, setIcon] = (0, $ej8CT$react.useState)((0, $ej8CT$fortawesomefreesolidsvgicons.faCheckCircle));
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$fortawesomereactfontawesome.FontAwesomeIcon), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($97ffd3be51901e35$exports))).icon,
        size: "2x",
        color: color,
        icon: icon,
        onMouseEnter: ()=>setIcon((0, $ej8CT$fortawesomefreesolidsvgicons.faTimesCircle)),
        onMouseLeave: ()=>setIcon((0, $ej8CT$fortawesomefreesolidsvgicons.faCheckCircle)),
        onClick: deselect
    });
};





var $7199e03ff0c9f6fd$exports = {};

$parcel$export($7199e03ff0c9f6fd$exports, "title", function () { return $7199e03ff0c9f6fd$export$fb184b623420d9be; }, function (v) { return $7199e03ff0c9f6fd$export$fb184b623420d9be = v; });
var $7199e03ff0c9f6fd$export$fb184b623420d9be;
$7199e03ff0c9f6fd$export$fb184b623420d9be = `p6a3OW_title`;


var $8699ff1d707d4fac$export$2e2bcd8739ae039 = ({ children: children, style: style })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($7199e03ff0c9f6fd$exports))).title,
        children: children
    });


var $4117b8fb6d482621$exports = {};

$parcel$export($4117b8fb6d482621$exports, "card", function () { return $4117b8fb6d482621$export$aa3e815946b80764; }, function (v) { return $4117b8fb6d482621$export$aa3e815946b80764 = v; });
$parcel$export($4117b8fb6d482621$exports, "leftSideContainer", function () { return $4117b8fb6d482621$export$59b1d651044d302; }, function (v) { return $4117b8fb6d482621$export$59b1d651044d302 = v; });
var $4117b8fb6d482621$export$aa3e815946b80764;
var $4117b8fb6d482621$export$59b1d651044d302;
$4117b8fb6d482621$export$aa3e815946b80764 = `eH6oKa_card`;
$4117b8fb6d482621$export$59b1d651044d302 = `eH6oKa_leftSideContainer`;


var $bb473358400637b0$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ disableButtons: disableButtons, name: name, userCount: userCount, selected: selected, color: color, save: save, toggleSelection: toggleSelection, combine: combine, readyToSave: readyToSave, cancel: cancel }, ref)=>{
    const [newGroupTitle, setNewGroupTitle] = (0, $ej8CT$react.useState)("");
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("article", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($4117b8fb6d482621$exports))).card,
        ref: ref,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($4117b8fb6d482621$exports))).leftSideContainer,
                children: [
                    name ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $8699ff1d707d4fac$export$2e2bcd8739ae039), {
                        style: {
                            color: "#121212",
                            fontWeight: 500
                        },
                        children: name
                    }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $8cd8b46839e23c83$export$2e2bcd8739ae039), {
                        onTitleInput: setNewGroupTitle
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $028322093b504a65$export$2e2bcd8739ae039), {
                        style: {
                            fontSize: 15
                        },
                        userCount: userCount
                    })
                ]
            }),
            color && !newGroupTitle || color && selected && name ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9729164741160eac$export$2e2bcd8739ae039), {
                color: color,
                deselect: toggleSelection
            }) : name ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $e893dd1485a83a98$export$2e2bcd8739ae039), {
                disableButtons: disableButtons,
                select: toggleSelection,
                combine: combine
            }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $9f6f3fcec345a08d$export$2e2bcd8739ae039), {
                save: ()=>save(newGroupTitle),
                cancel: cancel,
                readyToSave: color ? readyToSave : newGroupTitle
            })
        ]
    });
});














var $c5607b38f237d82e$exports = {};

$parcel$export($c5607b38f237d82e$exports, "title", function () { return $c5607b38f237d82e$export$fb184b623420d9be; }, function (v) { return $c5607b38f237d82e$export$fb184b623420d9be = v; });
var $c5607b38f237d82e$export$fb184b623420d9be;
$c5607b38f237d82e$export$fb184b623420d9be = `iS9MAa_title`;


var $6ef826fb93f43275$export$2e2bcd8739ae039 = ({ children: children, style: style, id: id, h1: h1 = false })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
        h1: h1,
        id: id,
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($c5607b38f237d82e$exports))).title,
        children: children
    });











var $a498e4ee3f335104$exports = {};

$parcel$export($a498e4ee3f335104$exports, "text", function () { return $a498e4ee3f335104$export$6f093cfa640b7166; }, function (v) { return $a498e4ee3f335104$export$6f093cfa640b7166 = v; });
var $a498e4ee3f335104$export$6f093cfa640b7166;
$a498e4ee3f335104$export$6f093cfa640b7166 = `DtNqIq_text`;


var $3ef9fc4ca8ca4fce$export$2e2bcd8739ae039 = ({ children: children, style: style, className: className, onClick: onClick })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
        onClick: onClick,
        style: style,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($a498e4ee3f335104$exports))).text),
        children: children
    });





var $aeff1700acb8462e$exports = {};

$parcel$export($aeff1700acb8462e$exports, "bar", function () { return $aeff1700acb8462e$export$d927737047eb3867; }, function (v) { return $aeff1700acb8462e$export$d927737047eb3867 = v; });
$parcel$export($aeff1700acb8462e$exports, "bars", function () { return $aeff1700acb8462e$export$60912654947077e3; }, function (v) { return $aeff1700acb8462e$export$60912654947077e3 = v; });
$parcel$export($aeff1700acb8462e$exports, "noBar", function () { return $aeff1700acb8462e$export$e2b71f7b582462e; }, function (v) { return $aeff1700acb8462e$export$e2b71f7b582462e = v; });
$parcel$export($aeff1700acb8462e$exports, "yesBar", function () { return $aeff1700acb8462e$export$6a31b2d83bf3b7ff; }, function (v) { return $aeff1700acb8462e$export$6a31b2d83bf3b7ff = v; });
var $aeff1700acb8462e$export$d927737047eb3867;
var $aeff1700acb8462e$export$60912654947077e3;
var $aeff1700acb8462e$export$e2b71f7b582462e;
var $aeff1700acb8462e$export$6a31b2d83bf3b7ff;
$aeff1700acb8462e$export$d927737047eb3867 = `zND1GG_bar`;
$aeff1700acb8462e$export$60912654947077e3 = `zND1GG_bars`;
$aeff1700acb8462e$export$e2b71f7b582462e = `zND1GG_noBar`;
$aeff1700acb8462e$export$6a31b2d83bf3b7ff = `zND1GG_yesBar`;


var $8582c2f99012abb8$export$2e2bcd8739ae039 = ({ yes: yes, no: no, onHover: onHover, createNewGroup: createNewGroup, style: style, className: className })=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($aeff1700acb8462e$exports))).bars, className),
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                style: {
                    width: `${yes}%`
                },
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($aeff1700acb8462e$exports))).bar, (0, (/*@__PURE__*/$parcel$interopDefault($aeff1700acb8462e$exports))).yesBar),
                onMouseEnter: ()=>onHover("yes"),
                onMouseLeave: ()=>onHover(),
                onClick: ()=>createNewGroup("yes")
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                style: {
                    width: `${no}%`
                },
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($aeff1700acb8462e$exports))).bar, (0, (/*@__PURE__*/$parcel$interopDefault($aeff1700acb8462e$exports))).noBar),
                onMouseEnter: ()=>onHover("no"),
                onMouseLeave: ()=>onHover(),
                onClick: ()=>createNewGroup("no")
            })
        ]
    });
};


var $2644c36625167618$exports = {};

$parcel$export($2644c36625167618$exports, "arrowDown", function () { return $2644c36625167618$export$f61feb65ec56823b; }, function (v) { return $2644c36625167618$export$f61feb65ec56823b = v; });
$parcel$export($2644c36625167618$exports, "img", function () { return $2644c36625167618$export$463b44d9bf3628be; }, function (v) { return $2644c36625167618$export$463b44d9bf3628be = v; });
$parcel$export($2644c36625167618$exports, "imgWithArrow", function () { return $2644c36625167618$export$e4e79e5008270fc7; }, function (v) { return $2644c36625167618$export$e4e79e5008270fc7 = v; });
$parcel$export($2644c36625167618$exports, "stats", function () { return $2644c36625167618$export$7804429c45dff272; }, function (v) { return $2644c36625167618$export$7804429c45dff272 = v; });
$parcel$export($2644c36625167618$exports, "tester", function () { return $2644c36625167618$export$6b5c497e0b5239d7; }, function (v) { return $2644c36625167618$export$6b5c497e0b5239d7 = v; });
$parcel$export($2644c36625167618$exports, "text", function () { return $2644c36625167618$export$6f093cfa640b7166; }, function (v) { return $2644c36625167618$export$6f093cfa640b7166 = v; });
$parcel$export($2644c36625167618$exports, "textContainer", function () { return $2644c36625167618$export$2cedfd664bb3bd01; }, function (v) { return $2644c36625167618$export$2cedfd664bb3bd01 = v; });
var $2644c36625167618$export$f61feb65ec56823b;
var $2644c36625167618$export$463b44d9bf3628be;
var $2644c36625167618$export$e4e79e5008270fc7;
var $2644c36625167618$export$7804429c45dff272;
var $2644c36625167618$export$6b5c497e0b5239d7;
var $2644c36625167618$export$6f093cfa640b7166;
var $2644c36625167618$export$2cedfd664bb3bd01;
$2644c36625167618$export$f61feb65ec56823b = `_6Ko8iW_arrowDown`;
$2644c36625167618$export$463b44d9bf3628be = `_6Ko8iW_img`;
$2644c36625167618$export$e4e79e5008270fc7 = `_6Ko8iW_imgWithArrow`;
$2644c36625167618$export$7804429c45dff272 = `_6Ko8iW_stats`;
$2644c36625167618$export$6b5c497e0b5239d7 = `_6Ko8iW_tester`;
$2644c36625167618$export$6f093cfa640b7166 = `_6Ko8iW_text`;
$2644c36625167618$export$2cedfd664bb3bd01 = `_6Ko8iW_textContainer`;


const $93800872027043d2$var$calcPercent = (x, sum)=>Math.round(x / sum * 100);
var $93800872027043d2$export$2e2bcd8739ae039 = ({ yes: yes, no: no, he: he, me: me, createNewGroup: createNewGroup, className: className })=>{
    const [state, setState] = (0, $ej8CT$react.useState)(null);
    const answers = {
        yes: yes,
        no: no
    };
    const userReplyCount = state ? answers[state] : yes + no;
    const yesPercentage = $93800872027043d2$var$calcPercent(yes, yes + no);
    const noPercentage = $93800872027043d2$var$calcPercent(no, yes + no);
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        style: me?.answer || he?.answer ? {
            marginTop: 50
        } : {
            marginTop: 20
        },
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).stats, className),
        children: [
            userReplyCount !== 0 && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).textContainer,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $3ef9fc4ca8ca4fce$export$2e2bcd8739ae039), {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).text,
                                style: {
                                    width: `${yesPercentage}%`,
                                    position: "relative",
                                    display: "flex",
                                    gap: 12,
                                    bottom: 0
                                },
                                children: [
                                    me?.answer?.toLowerCase() === "yes" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).imgWithArrow,
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).img,
                                                src: me.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).tester,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).arrowDown
                                            })
                                        ]
                                    }),
                                    he?.answer?.toLowerCase() === "yes" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).imgWithArrow,
                                        style: me?.answer ? {
                                            left: "50%"
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).img,
                                                src: he.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).tester,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).arrowDown
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $3ef9fc4ca8ca4fce$export$2e2bcd8739ae039), {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).text,
                                style: {
                                    width: `${noPercentage}%`,
                                    position: "relative",
                                    display: "flex",
                                    gap: 12,
                                    bottom: 0
                                },
                                children: [
                                    me?.answer?.toLowerCase() === "no" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).imgWithArrow,
                                        style: he?.answer ? {
                                            right: "50%"
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).img,
                                                src: me.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).tester,
                                                children: "No"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).arrowDown
                                            })
                                        ]
                                    }),
                                    he?.answer?.toLowerCase() === "no" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).imgWithArrow,
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).img,
                                                src: he.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).tester,
                                                children: "No"
                                            }),
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).arrowDown
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $8582c2f99012abb8$export$2e2bcd8739ae039), {
                        yes: yesPercentage,
                        no: noPercentage,
                        onHover: setState,
                        createNewGroup: createNewGroup
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).textContainer,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $3ef9fc4ca8ca4fce$export$2e2bcd8739ae039), {
                                onClick: ()=>createNewGroup("yes"),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).text,
                                style: {
                                    cursor: "pointer",
                                    width: `${yesPercentage}%`,
                                    whiteSpace: "nowrap"
                                },
                                children: [
                                    yesPercentage,
                                    "%(yes)"
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $3ef9fc4ca8ca4fce$export$2e2bcd8739ae039), {
                                onClick: ()=>createNewGroup("no"),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($2644c36625167618$exports))).text,
                                style: {
                                    cursor: "pointer",
                                    width: `${noPercentage}%`,
                                    whiteSpace: "nowrap"
                                },
                                children: [
                                    noPercentage,
                                    "%(no)"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $3ef9fc4ca8ca4fce$export$2e2bcd8739ae039), {
                secondary: true,
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $bd15c6a8cc4c521c$export$2e2bcd8739ae039), {
                        x: userReplyCount
                    }),
                    " people answered"
                ]
            })
        ]
    });
};








var $7d621c73d335b6e3$exports = {};

$parcel$export($7d621c73d335b6e3$exports, "button", function () { return $7d621c73d335b6e3$export$2ba01fb71ed41cb6; }, function (v) { return $7d621c73d335b6e3$export$2ba01fb71ed41cb6 = v; });
$parcel$export($7d621c73d335b6e3$exports, "no", function () { return $7d621c73d335b6e3$export$401451a107dc42ce; }, function (v) { return $7d621c73d335b6e3$export$401451a107dc42ce = v; });
$parcel$export($7d621c73d335b6e3$exports, "noHover", function () { return $7d621c73d335b6e3$export$628d97df3a6f96e7; }, function (v) { return $7d621c73d335b6e3$export$628d97df3a6f96e7 = v; });
$parcel$export($7d621c73d335b6e3$exports, "yes", function () { return $7d621c73d335b6e3$export$7a668e70ea2210d9; }, function (v) { return $7d621c73d335b6e3$export$7a668e70ea2210d9 = v; });
var $7d621c73d335b6e3$export$2ba01fb71ed41cb6;
var $7d621c73d335b6e3$export$401451a107dc42ce;
var $7d621c73d335b6e3$export$628d97df3a6f96e7;
var $7d621c73d335b6e3$export$7a668e70ea2210d9;
$7d621c73d335b6e3$export$2ba01fb71ed41cb6 = `kTLJjW_button`;
$7d621c73d335b6e3$export$401451a107dc42ce = `kTLJjW_no`;
$7d621c73d335b6e3$export$628d97df3a6f96e7 = `kTLJjW_noHover`;
$7d621c73d335b6e3$export$7a668e70ea2210d9 = `kTLJjW_yes`;


var $21b5c7a57215a8e1$export$2e2bcd8739ae039 = ({ answer: answer, respond: respond, disabled: disabled, style: style, noHover: noHover })=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
        disabled: disabled,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($7d621c73d335b6e3$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($7d621c73d335b6e3$exports))).yes]: answer.toLowerCase() === "yes",
            [(0, (/*@__PURE__*/$parcel$interopDefault($7d621c73d335b6e3$exports))).no]: answer.toLowerCase() === "no",
            [(0, (/*@__PURE__*/$parcel$interopDefault($7d621c73d335b6e3$exports))).noHover]: noHover
        }),
        onClick: respond,
        style: style,
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
            children: answer
        })
    });
};


var $97fa2cb6337dd8f2$exports = {};

$parcel$export($97fa2cb6337dd8f2$exports, "answerButtons", function () { return $97fa2cb6337dd8f2$export$33b0e16035b753e; }, function (v) { return $97fa2cb6337dd8f2$export$33b0e16035b753e = v; });
var $97fa2cb6337dd8f2$export$33b0e16035b753e;
$97fa2cb6337dd8f2$export$33b0e16035b753e = `rEygXq_answerButtons`;


var $f1e47e6b26821a24$export$2e2bcd8739ae039 = ({ respond: respond, style: style, loading: loading })=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($97fa2cb6337dd8f2$exports))).answerButtons,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $21b5c7a57215a8e1$export$2e2bcd8739ae039), {
                disabled: loading || !respond,
                answer: "Yes",
                respond: ()=>respond("yes")
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $21b5c7a57215a8e1$export$2e2bcd8739ae039), {
                disabled: loading || !respond,
                answer: "No",
                respond: ()=>respond("no")
            })
        ]
    });
};



/* eslint-disable react/self-closing-comp */ /* eslint-disable jsx-quotes */ 


var $df2d8bc1ba7bf54d$exports = {};

$parcel$export($df2d8bc1ba7bf54d$exports, "badge", function () { return $df2d8bc1ba7bf54d$export$4aebd143f31d0c0d; }, function (v) { return $df2d8bc1ba7bf54d$export$4aebd143f31d0c0d = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "button", function () { return $df2d8bc1ba7bf54d$export$2ba01fb71ed41cb6; }, function (v) { return $df2d8bc1ba7bf54d$export$2ba01fb71ed41cb6 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "card", function () { return $df2d8bc1ba7bf54d$export$aa3e815946b80764; }, function (v) { return $df2d8bc1ba7bf54d$export$aa3e815946b80764 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "commentText", function () { return $df2d8bc1ba7bf54d$export$6b087f52b8619213; }, function (v) { return $df2d8bc1ba7bf54d$export$6b087f52b8619213 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "expand", function () { return $df2d8bc1ba7bf54d$export$9f77e0932fb78f72; }, function (v) { return $df2d8bc1ba7bf54d$export$9f77e0932fb78f72 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "hint", function () { return $df2d8bc1ba7bf54d$export$464c821cd4347539; }, function (v) { return $df2d8bc1ba7bf54d$export$464c821cd4347539 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "icon", function () { return $df2d8bc1ba7bf54d$export$1ca1ec8b29a4ce27; }, function (v) { return $df2d8bc1ba7bf54d$export$1ca1ec8b29a4ce27 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "iconButton", function () { return $df2d8bc1ba7bf54d$export$60bb6c1f29b8a8cc; }, function (v) { return $df2d8bc1ba7bf54d$export$60bb6c1f29b8a8cc = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "innerCard", function () { return $df2d8bc1ba7bf54d$export$40f3ad8fcd4c93c2; }, function (v) { return $df2d8bc1ba7bf54d$export$40f3ad8fcd4c93c2 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "innerCardWithImage", function () { return $df2d8bc1ba7bf54d$export$275ee2193c25f37a; }, function (v) { return $df2d8bc1ba7bf54d$export$275ee2193c25f37a = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "previewImg", function () { return $df2d8bc1ba7bf54d$export$fd824239f75849bd; }, function (v) { return $df2d8bc1ba7bf54d$export$fd824239f75849bd = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "selectedQuestion", function () { return $df2d8bc1ba7bf54d$export$f7f968f67303d06e; }, function (v) { return $df2d8bc1ba7bf54d$export$f7f968f67303d06e = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "text", function () { return $df2d8bc1ba7bf54d$export$6f093cfa640b7166; }, function (v) { return $df2d8bc1ba7bf54d$export$6f093cfa640b7166 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "textarea", function () { return $df2d8bc1ba7bf54d$export$a3574df893ffa88d; }, function (v) { return $df2d8bc1ba7bf54d$export$a3574df893ffa88d = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "username", function () { return $df2d8bc1ba7bf54d$export$5e1be761f603d585; }, function (v) { return $df2d8bc1ba7bf54d$export$5e1be761f603d585 = v; });
$parcel$export($df2d8bc1ba7bf54d$exports, "vennDiagramIcon", function () { return $df2d8bc1ba7bf54d$export$21d313c8dd377057; }, function (v) { return $df2d8bc1ba7bf54d$export$21d313c8dd377057 = v; });
var $df2d8bc1ba7bf54d$export$4aebd143f31d0c0d;
var $df2d8bc1ba7bf54d$export$2ba01fb71ed41cb6;
var $df2d8bc1ba7bf54d$export$aa3e815946b80764;
var $df2d8bc1ba7bf54d$export$6b087f52b8619213;
var $df2d8bc1ba7bf54d$export$9f77e0932fb78f72;
var $df2d8bc1ba7bf54d$export$464c821cd4347539;
var $df2d8bc1ba7bf54d$export$1ca1ec8b29a4ce27;
var $df2d8bc1ba7bf54d$export$60bb6c1f29b8a8cc;
var $df2d8bc1ba7bf54d$export$40f3ad8fcd4c93c2;
var $df2d8bc1ba7bf54d$export$275ee2193c25f37a;
var $df2d8bc1ba7bf54d$export$fd824239f75849bd;
var $df2d8bc1ba7bf54d$export$f7f968f67303d06e;
var $df2d8bc1ba7bf54d$export$6f093cfa640b7166;
var $df2d8bc1ba7bf54d$export$a3574df893ffa88d;
var $df2d8bc1ba7bf54d$export$5e1be761f603d585;
var $df2d8bc1ba7bf54d$export$21d313c8dd377057;
$df2d8bc1ba7bf54d$export$4aebd143f31d0c0d = `wLf4MW_badge`;
$df2d8bc1ba7bf54d$export$2ba01fb71ed41cb6 = `wLf4MW_button`;
$df2d8bc1ba7bf54d$export$aa3e815946b80764 = `wLf4MW_card`;
$df2d8bc1ba7bf54d$export$6b087f52b8619213 = `wLf4MW_commentText`;
$df2d8bc1ba7bf54d$export$9f77e0932fb78f72 = `wLf4MW_expand`;
$df2d8bc1ba7bf54d$export$464c821cd4347539 = `wLf4MW_hint`;
$df2d8bc1ba7bf54d$export$1ca1ec8b29a4ce27 = `wLf4MW_icon`;
$df2d8bc1ba7bf54d$export$60bb6c1f29b8a8cc = `wLf4MW_iconButton`;
$df2d8bc1ba7bf54d$export$40f3ad8fcd4c93c2 = `wLf4MW_innerCard`;
$df2d8bc1ba7bf54d$export$275ee2193c25f37a = `wLf4MW_innerCardWithImage`;
$df2d8bc1ba7bf54d$export$fd824239f75849bd = `wLf4MW_previewImg`;
$df2d8bc1ba7bf54d$export$f7f968f67303d06e = `wLf4MW_selectedQuestion`;
$df2d8bc1ba7bf54d$export$6f093cfa640b7166 = `wLf4MW_text`;
$df2d8bc1ba7bf54d$export$a3574df893ffa88d = `wLf4MW_textarea`;
$df2d8bc1ba7bf54d$export$5e1be761f603d585 = `wLf4MW_username`;
$df2d8bc1ba7bf54d$export$21d313c8dd377057 = `wLf4MW_vennDiagramIcon`;


var $2d58bef5b89e680e$export$2e2bcd8739ae039 = ({ onClick: onClick, groupMode: groupMode, myHover: myHover, fill: fill, style: style })=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        onClick: onClick,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).vennDiagramIcon, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).active]: groupMode
        }),
        style: {
            cursor: "pointer",
            width: 28,
            height: "auto",
            fill: fill,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("defs", {
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("linearGradient", {
                    id: "gradient-fill",
                    gradientUnits: "userSpaceOnUse",
                    x1: "2.044",
                    x2: "62",
                    y1: "32",
                    y2: "32",
                    children: [
                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#0fdcdd"
                        }),
                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#46a1e8"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("g", {
                id: "_39_Diagram_Venn",
                "data-name": "39 Diagram Venn",
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("path", {
                    d: "m44 14a17.723 17.723 0 0 0 -12 4.2 17.762 17.762 0 0 0 -12-4.2c-23.91 0-23.971 36 0 36a17.864 17.864 0 0 0 12.028-4.16 17.756 17.756 0 0 0 11.972 4.16c24.12 0 23.881-36 0-36zm-12 28.958a17.159 17.159 0 0 1 .026-21.958c5.318 5.982 5.283 15.952-.026 21.958zm-12-26.958a15.913 15.913 0 0 1 10.569 3.6c-6.014 6.749-6.035 18.026-.037 24.785a15.821 15.821 0 0 1 -10.532 3.615c-21.254 0-21.307-32 0-32zm24 32a15.8 15.8 0 0 1 -10.5-3.593c6.026-6.749 5.982-18.031-.044-24.792a15.809 15.809 0 0 1 10.544-3.615c21.44 0 21.227 32 0 32z",
                    fill: myHover ? "url(#gradient-fill)" : fill || "#121212"
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("animate", {
                attributeName: "fill",
                from: "#00000063",
                to: "url(#gradient-fill)",
                dur: "0.5s",
                begin: "mouseover",
                fill: "freeze"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("animate", {
                attributeName: "fill",
                from: "url(#gradient-fill)",
                to: "#00000063",
                dur: "0.5s",
                begin: "mouseout",
                fill: "freeze"
            })
        ]
    });
};




function $526fe0560e42c3bb$var$timeSince(createdAt) {
    const createdAtDate = new Date(createdAt).getTime();
    const now = Date.now();
    const diffInMs = now - createdAtDate;
    const diffInMinutes = Math.floor(diffInMs / 60000);
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d`;
}
var $526fe0560e42c3bb$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ toggleGroupMode: toggleGroupMode, yourOwnQuestion: yourOwnQuestion, shortId: shortId, onUserClick: onUserClick, img: img, createdAt: createdAt, username: username, name: name, answersCount: answersCount, he: he, me: me, respond: respond, createNewGroup: createNewGroup, htmlName: htmlName, onClick: onClick, handleTwitterLogin: handleTwitterLogin, parentMessageId: parentMessageId, createUser: createUser, trackConversion: trackConversion, addImageAvailable: addImageAvailable, loading: loading, selected: selected, groupMode: groupMode, comments: comments, fetchComments: fetchComments, saveComment: saveComment, showCommentsForQuestion: showCommentsForQuestion, user: user }, ref)=>{
    const [showComments, setShowComments] = (0, $ej8CT$react.useState)(false);
    const [text, setText] = (0, $ej8CT$react.useState)("");
    const share = ()=>{
        if (navigator.share) {
            window.mixpanel.track("Share", {
                questionId: shortId
            });
            navigator.share({
                title: "Question",
                text: name,
                url: `https://poll.cc/questions/${shortId}`
            });
        }
    };
    const { setIsLoginModalOpen: setIsLoginModalOpen, setAddImgModal: setAddImgModal, setSelectedMessage: setSelectedMessage, setAnswer: setAnswer } = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    const [isHovered, setIsHovered] = (0, $ej8CT$react.useState)(groupMode);
    const redirectToLogin = (answer)=>{
        // eslint-disable-next-line no-undef
        setIsLoginModalOpen(true);
        setAnswer({
            answer: answer,
            parentMessageId: parentMessageId,
            shortId: shortId
        });
        window.mixpanel.track("Anonymous Question Answer", {
            questionId: shortId,
            answer: answer
        });
    };
    const isMobile = (0, $ej8CT$reactresponsive.useMediaQuery)({
        query: "(max-width: 925px)"
    });
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("article", {
        ref: ref,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).card, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).selectedQuestion]: selected
        }),
        children: [
            selected && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).badge,
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                    children: "Selected"
                })
            }),
            img && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).previewImg,
                src: img,
                alt: "preview image"
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).innerCard, {
                    [(0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).innerCardWithImage]: img
                }),
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $6ef826fb93f43275$export$2e2bcd8739ae039), {
                        children: groupMode ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                            children: "Create group"
                        }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).username,
                                    onClick: onUserClick,
                                    children: [
                                        username,
                                        ":"
                                    ]
                                }),
                                " ",
                                htmlName ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: htmlName
                                    }
                                }) : name
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $93800872027043d2$export$2e2bcd8739ae039), {
                        ...answersCount,
                        he: he,
                        me: me,
                        createNewGroup: createNewGroup
                    }),
                    !yourOwnQuestion && !me?.answer && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $f1e47e6b26821a24$export$2e2bcd8739ae039), {
                        loading: loading,
                        respond: respond || redirectToLogin
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).expand,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                style: {
                                    color: "#00000063"
                                },
                                children: isMobile ? $526fe0560e42c3bb$var$timeSince(createdAt) : `${(0, $ej8CT$datefns.formatDistanceToNow)(new Date(createdAt))} ago`
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).iconButton,
                                        onClick: ()=>{
                                            fetchComments();
                                            setShowComments(!showComments);
                                        },
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialChatBubble))), {
                                            sx: {
                                                fill: "#121212"
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).icon
                                        })
                                    }),
                                    window.featureFlags?.groups && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                                        content: "Create new group",
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).iconButton,
                                            style: {
                                                position: "relative",
                                                height: 37,
                                                width: 54,
                                                cursor: "pointer"
                                            },
                                            onMouseEnter: ()=>setIsHovered(true),
                                            onMouseLeave: ()=>!groupMode && setIsHovered(false),
                                            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                style: {
                                                    height: "auto",
                                                    width: 42,
                                                    position: "absolute",
                                                    left: "calc(50% + 7px)",
                                                    top: "50%",
                                                    transform: "translate(-50%, -50%)"
                                                },
                                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $2d58bef5b89e680e$export$2e2bcd8739ae039), {
                                                    myHover: groupMode || isHovered,
                                                    fill: "#121212",
                                                    groupMode: groupMode,
                                                    onClick: toggleGroupMode
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("a", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).iconButton,
                                        style: {
                                            marginTop: "-1.88px"
                                        },
                                        href: `/questions/${shortId}`,
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialOpenInNew))), {
                                            sx: {
                                                fill: "#121212"
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).icon,
                                            onClick: onClick
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).iconButton,
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialShare))), {
                                            sx: {
                                                fill: "#121212"
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).icon,
                                            onClick: share
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    showComments && showCommentsForQuestion && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).expand,
                        style: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingTop: 15
                        },
                        children: [
                            comments.map((i)=>{
                                const isOpComment = !i.answer;
                                return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).comments,
                                    style: {
                                        alignSelf: isOpComment ? "center" : i.answer === "yes" ? "flex-start" : "flex-end"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                gap: 6,
                                                flexDirection: i.answer === "no" && !isOpComment ? "row-reverse" : "row",
                                                alignItems: "center",
                                                justifyContent: isOpComment ? "center" : "unset",
                                                marginBottom: 5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                    src: i.user?.pictureUrl,
                                                    style: {
                                                        height: 32,
                                                        width: "auto",
                                                        borderRadius: "50%",
                                                        cursor: "pointer"
                                                    }
                                                }),
                                                isOpComment ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("small", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).commentText,
                                                    style: {
                                                        color: "gray",
                                                        cursor: "pointer"
                                                    },
                                                    children: "OP"
                                                }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $21b5c7a57215a8e1$export$2e2bcd8739ae039), {
                                                    style: {
                                                        height: 26,
                                                        width: 46,
                                                        fontSize: 14
                                                    },
                                                    noHover: true,
                                                    answer: i.answer,
                                                    respond: ()=>{}
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                    style: {
                                                        color: "gray"
                                                    },
                                                    children: "•"
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("small", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).commentText,
                                                    style: {
                                                        color: "gray",
                                                        cursor: "pointer"
                                                    },
                                                    children: i.user.username
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                    style: {
                                                        color: "gray"
                                                    },
                                                    children: "•"
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("small", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).commentText,
                                                    style: {
                                                        color: "gray",
                                                        cursor: "pointer"
                                                    },
                                                    children: $526fe0560e42c3bb$var$timeSince(i.createdAt)
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                    style: {
                                                        color: "gray"
                                                    },
                                                    children: "•"
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                                                    content: !i.user?.difference && !user ? "Login to see similarity to you" : "Similarity to you",
                                                    children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("small", {
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).commentText,
                                                        style: {
                                                            color: "gray",
                                                            cursor: "pointer",
                                                            position: "relative"
                                                        },
                                                        children: i.user?.difference !== undefined ? `${i.user?.difference}%` : user ? "it's you" : "?%"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("p", {
                                            style: {
                                                marginLeft: i.answer === "yes" && !isOpComment ? 34 : 0,
                                                marginRight: isOpComment ? 0 : i.answer === "no" ? 34 : 0,
                                                background: "rgb(43 43 43 / 9%)",
                                                padding: 8,
                                                borderTopRightRadius: i.answer === "yes" || isOpComment ? 5 : 0,
                                                borderTopLeftRadius: i.answer === "no" || isOpComment ? 5 : 0,
                                                borderBottomRightRadius: 5,
                                                borderBottomLeftRadius: 5,
                                                fontSize: 15
                                            },
                                            children: i.text
                                        })
                                    ]
                                }, i.text);
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).addComment,
                                style: {
                                    width: "100%",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("textarea", {
                                        disabled: !(me?.answer || yourOwnQuestion),
                                        placeholder: me?.answer || yourOwnQuestion ? "Comment..." : "Answer to comment...",
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).textarea,
                                        value: text,
                                        onChange: (e)=>setText(e.target.value)
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                                        disabled: !text,
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df2d8bc1ba7bf54d$exports))).button,
                                        onClick: ()=>{
                                            saveComment(text);
                                            setText("");
                                        },
                                        children: "send"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
});









var $d3ef3eeeaa1c69bf$exports = {};

$parcel$export($d3ef3eeeaa1c69bf$exports, "text", function () { return $d3ef3eeeaa1c69bf$export$6f093cfa640b7166; }, function (v) { return $d3ef3eeeaa1c69bf$export$6f093cfa640b7166 = v; });
$parcel$export($d3ef3eeeaa1c69bf$exports, "textarea", function () { return $d3ef3eeeaa1c69bf$export$a3574df893ffa88d; }, function (v) { return $d3ef3eeeaa1c69bf$export$a3574df893ffa88d = v; });
var $d3ef3eeeaa1c69bf$export$6f093cfa640b7166;
var $d3ef3eeeaa1c69bf$export$a3574df893ffa88d;
$d3ef3eeeaa1c69bf$export$6f093cfa640b7166 = `r56-Eq_text`;
$d3ef3eeeaa1c69bf$export$a3574df893ffa88d = `r56-Eq_textarea`;


var $0c23dd9aed5b78d0$export$2e2bcd8739ae039 = ({ disabled: disabled, onChange: onChange, value: value })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("textarea", {
        disabled: disabled,
        placeholder: `Type your question here ${disabled ? "(disabled if you're not signed in)" : ""}...`,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($d3ef3eeeaa1c69bf$exports))).textarea, (0, (/*@__PURE__*/$parcel$interopDefault($d3ef3eeeaa1c69bf$exports))).text),
        onChange: onChange,
        value: value
    });



var $cc82ddae3ff5c753$exports = {};

$parcel$export($cc82ddae3ff5c753$exports, "button", function () { return $cc82ddae3ff5c753$export$2ba01fb71ed41cb6; }, function (v) { return $cc82ddae3ff5c753$export$2ba01fb71ed41cb6 = v; });
$parcel$export($cc82ddae3ff5c753$exports, "newQuestion", function () { return $cc82ddae3ff5c753$export$9ad540bb5fc131aa; }, function (v) { return $cc82ddae3ff5c753$export$9ad540bb5fc131aa = v; });
var $cc82ddae3ff5c753$export$2ba01fb71ed41cb6;
var $cc82ddae3ff5c753$export$9ad540bb5fc131aa;
$cc82ddae3ff5c753$export$2ba01fb71ed41cb6 = `_84V7Lq_button`;
$cc82ddae3ff5c753$export$9ad540bb5fc131aa = `_84V7Lq_newQuestion`;


var $dfd63da8863e7b92$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ saveQuestion: saveQuestion }, ref)=>{
    const [question, setQuestion] = (0, $ej8CT$react.useState)("");
    const { setAddImgModal: setAddImgModal, setSelectedMessage: setSelectedMessage } = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    const onChange = (e)=>{
        const newQuestion = e.target.value;
        setQuestion(newQuestion);
    };
    const save = async (e)=>{
        e.target.blur();
        const { _id: _id } = await saveQuestion(question);
        setQuestion("");
        setSelectedMessage(_id);
    };
    const disabled = !saveQuestion;
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($cc82ddae3ff5c753$exports))).newQuestion,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $0c23dd9aed5b78d0$export$2e2bcd8739ae039), {
                disabled: disabled,
                value: question,
                onChange: onChange
            }),
            question && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                style: {
                    position: "absolute",
                    right: 87,
                    bottom: 5,
                    transform: "translateY(-50%)"
                },
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                    content: "Add image to question",
                    children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialImage))), {
                        sx: {
                            fill: "#121212"
                        },
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($cc82ddae3ff5c753$exports))).icon,
                        onClick: ()=>{
                            setAddImgModal(true);
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                disabled: !question || !saveQuestion,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($cc82ddae3ff5c753$exports))).button,
                onClick: save,
                children: "Ask"
            })
        ]
    });
});






var $e612183b557e27db$exports = {};

$parcel$export($e612183b557e27db$exports, "groupContainer", function () { return $e612183b557e27db$export$f36792cb9bd81925; }, function (v) { return $e612183b557e27db$export$f36792cb9bd81925 = v; });
var $e612183b557e27db$export$f36792cb9bd81925;
$e612183b557e27db$export$f36792cb9bd81925 = `qpgnKq_groupContainer`;


var $87c4b9b19c7baeb7$export$2e2bcd8739ae039 = ({ children: children, id: id, style: style, className: className })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        style: style,
        id: id,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($e612183b557e27db$exports))).groupContainer, className),
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            children: children
        })
    });








var $495aed401e3d130d$exports = {};

$parcel$export($495aed401e3d130d$exports, "container", function () { return $495aed401e3d130d$export$34e0f9847d4c02dd; }, function (v) { return $495aed401e3d130d$export$34e0f9847d4c02dd = v; });
var $495aed401e3d130d$export$34e0f9847d4c02dd;
$495aed401e3d130d$export$34e0f9847d4c02dd = `PTna1q_container`;


var $2fa2a6cb8bfefc02$export$2e2bcd8739ae039 = ({ children: children, className: className })=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($495aed401e3d130d$exports))).container, className),
        children: children
    });


var $d27e41924c3ec6ad$exports = {};

$parcel$export($d27e41924c3ec6ad$exports, "mainScreen", function () { return $d27e41924c3ec6ad$export$e962ae2959462fd2; }, function (v) { return $d27e41924c3ec6ad$export$e962ae2959462fd2 = v; });
$parcel$export($d27e41924c3ec6ad$exports, "mainScreenContainer", function () { return $d27e41924c3ec6ad$export$65cfe9c2ce1b1faf; }, function (v) { return $d27e41924c3ec6ad$export$65cfe9c2ce1b1faf = v; });
var $d27e41924c3ec6ad$export$e962ae2959462fd2;
var $d27e41924c3ec6ad$export$65cfe9c2ce1b1faf;
$d27e41924c3ec6ad$export$e962ae2959462fd2 = `ntmV-a_mainScreen`;
$d27e41924c3ec6ad$export$65cfe9c2ce1b1faf = `ntmV-a_mainScreenContainer`;


var $5919f0ec1fc4795e$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ children: children, className: className, style: style, id: id, scrollId: scrollId }, ref)=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("section", {
        id: id,
        ref: ref,
        style: style,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($d27e41924c3ec6ad$exports))).mainScreen, className),
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $2fa2a6cb8bfefc02$export$2e2bcd8739ae039), {
            scrollId: scrollId,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($d27e41924c3ec6ad$exports))).mainScreenContainer,
            children: children
        })
    }));




var $39dc90432d6ef55e$exports = {};

$parcel$export($39dc90432d6ef55e$exports, "sidebar", function () { return $39dc90432d6ef55e$export$6fbb9cd2843e91b2; }, function (v) { return $39dc90432d6ef55e$export$6fbb9cd2843e91b2 = v; });
$parcel$export($39dc90432d6ef55e$exports, "title", function () { return $39dc90432d6ef55e$export$fb184b623420d9be; }, function (v) { return $39dc90432d6ef55e$export$fb184b623420d9be = v; });
var $39dc90432d6ef55e$export$6fbb9cd2843e91b2;
var $39dc90432d6ef55e$export$fb184b623420d9be;
$39dc90432d6ef55e$export$6fbb9cd2843e91b2 = `_5_71Va_sidebar`;
$39dc90432d6ef55e$export$fb184b623420d9be = `_5_71Va_title`;


var $62ea05920fed7969$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ children: children, style: style }, ref)=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        ref: ref,
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($39dc90432d6ef55e$exports))).sidebar,
        children: children
    }));





var $2c8f1b26846f7483$exports = {};

$parcel$export($2c8f1b26846f7483$exports, "cardsRow", function () { return $2c8f1b26846f7483$export$3ffd594349b5aa88; }, function (v) { return $2c8f1b26846f7483$export$3ffd594349b5aa88 = v; });
$parcel$export($2c8f1b26846f7483$exports, "scrollContainer", function () { return $2c8f1b26846f7483$export$fad3c8302a7540c6; }, function (v) { return $2c8f1b26846f7483$export$fad3c8302a7540c6 = v; });
var $2c8f1b26846f7483$export$3ffd594349b5aa88;
var $2c8f1b26846f7483$export$fad3c8302a7540c6;
$2c8f1b26846f7483$export$3ffd594349b5aa88 = `r0fyZq_cardsRow`;
$2c8f1b26846f7483$export$fad3c8302a7540c6 = `r0fyZq_scrollContainer`;


var $6d1d718d25303e4e$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ style: style, children: children, id: id, className: className }, ref)=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        style: style,
        ref: ref,
        id: id,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2c8f1b26846f7483$exports))).scrollContainer, className),
        children: children
    });
});














var $d5b7354d400d93d3$exports = {};

$parcel$export($d5b7354d400d93d3$exports, "back", function () { return $d5b7354d400d93d3$export$7c341cb16fc91138; }, function (v) { return $d5b7354d400d93d3$export$7c341cb16fc91138 = v; });
$parcel$export($d5b7354d400d93d3$exports, "checkbox", function () { return $d5b7354d400d93d3$export$b07e517d22efa1ca; }, function (v) { return $d5b7354d400d93d3$export$b07e517d22efa1ca = v; });
$parcel$export($d5b7354d400d93d3$exports, "checkbox__body", function () { return $d5b7354d400d93d3$export$d3da3a95ea50034e; }, function (v) { return $d5b7354d400d93d3$export$d3da3a95ea50034e = v; });
$parcel$export($d5b7354d400d93d3$exports, "checkbox__checkmark", function () { return $d5b7354d400d93d3$export$340dac494ade0321; }, function (v) { return $d5b7354d400d93d3$export$340dac494ade0321 = v; });
$parcel$export($d5b7354d400d93d3$exports, "checkboxes__item", function () { return $d5b7354d400d93d3$export$760569eb394a6344; }, function (v) { return $d5b7354d400d93d3$export$760569eb394a6344 = v; });
$parcel$export($d5b7354d400d93d3$exports, "checkboxes__row", function () { return $d5b7354d400d93d3$export$6c3b9b20e13900f2; }, function (v) { return $d5b7354d400d93d3$export$6c3b9b20e13900f2 = v; });
$parcel$export($d5b7354d400d93d3$exports, "close", function () { return $d5b7354d400d93d3$export$8360e631d277ea4d; }, function (v) { return $d5b7354d400d93d3$export$8360e631d277ea4d = v; });
$parcel$export($d5b7354d400d93d3$exports, "column", function () { return $d5b7354d400d93d3$export$4e0c71f277ca26b3; }, function (v) { return $d5b7354d400d93d3$export$4e0c71f277ca26b3 = v; });
$parcel$export($d5b7354d400d93d3$exports, "imgFallback", function () { return $d5b7354d400d93d3$export$e94d20c87215d48b; }, function (v) { return $d5b7354d400d93d3$export$e94d20c87215d48b = v; });
$parcel$export($d5b7354d400d93d3$exports, "row", function () { return $d5b7354d400d93d3$export$120ff0929b202a6d; }, function (v) { return $d5b7354d400d93d3$export$120ff0929b202a6d = v; });
$parcel$export($d5b7354d400d93d3$exports, "screenWithGroupContent", function () { return $d5b7354d400d93d3$export$de3da254965f2f43; }, function (v) { return $d5b7354d400d93d3$export$de3da254965f2f43 = v; });
$parcel$export($d5b7354d400d93d3$exports, "style-c", function () { return $d5b7354d400d93d3$export$d8e3ffb8a71e7871; }, function (v) { return $d5b7354d400d93d3$export$d8e3ffb8a71e7871 = v; });
$parcel$export($d5b7354d400d93d3$exports, "userItem", function () { return $d5b7354d400d93d3$export$f6bda04bc7d10a12; }, function (v) { return $d5b7354d400d93d3$export$f6bda04bc7d10a12 = v; });
$parcel$export($d5b7354d400d93d3$exports, "usersContainer", function () { return $d5b7354d400d93d3$export$771ca420b1b6ed17; }, function (v) { return $d5b7354d400d93d3$export$771ca420b1b6ed17 = v; });
$parcel$export($d5b7354d400d93d3$exports, "x-icon", function () { return $d5b7354d400d93d3$export$43405cb8d90657d0; }, function (v) { return $d5b7354d400d93d3$export$43405cb8d90657d0 = v; });
var $d5b7354d400d93d3$export$7c341cb16fc91138;
var $d5b7354d400d93d3$export$b07e517d22efa1ca;
var $d5b7354d400d93d3$export$d3da3a95ea50034e;
var $d5b7354d400d93d3$export$340dac494ade0321;
var $d5b7354d400d93d3$export$760569eb394a6344;
var $d5b7354d400d93d3$export$6c3b9b20e13900f2;
var $d5b7354d400d93d3$export$8360e631d277ea4d;
var $d5b7354d400d93d3$export$4e0c71f277ca26b3;
var $d5b7354d400d93d3$export$e94d20c87215d48b;
var $d5b7354d400d93d3$export$120ff0929b202a6d;
var $d5b7354d400d93d3$export$de3da254965f2f43;
var $d5b7354d400d93d3$export$d8e3ffb8a71e7871;
var $d5b7354d400d93d3$export$f6bda04bc7d10a12;
var $d5b7354d400d93d3$export$771ca420b1b6ed17;
var $d5b7354d400d93d3$export$43405cb8d90657d0;
$d5b7354d400d93d3$export$7c341cb16fc91138 = `dqFlAW_back`;
$d5b7354d400d93d3$export$b07e517d22efa1ca = `dqFlAW_checkbox`;
$d5b7354d400d93d3$export$d3da3a95ea50034e = `dqFlAW_checkbox__body`;
$d5b7354d400d93d3$export$340dac494ade0321 = `dqFlAW_checkbox__checkmark`;
$d5b7354d400d93d3$export$760569eb394a6344 = `dqFlAW_checkboxes__item`;
$d5b7354d400d93d3$export$6c3b9b20e13900f2 = `dqFlAW_checkboxes__row`;
$d5b7354d400d93d3$export$8360e631d277ea4d = `dqFlAW_close`;
$d5b7354d400d93d3$export$4e0c71f277ca26b3 = `dqFlAW_column`;
$d5b7354d400d93d3$export$e94d20c87215d48b = `dqFlAW_imgFallback`;
$d5b7354d400d93d3$export$120ff0929b202a6d = `dqFlAW_row`;
$d5b7354d400d93d3$export$de3da254965f2f43 = `dqFlAW_screenWithGroupContent`;
$d5b7354d400d93d3$export$d8e3ffb8a71e7871 = `dqFlAW_style-c`;
$d5b7354d400d93d3$export$f6bda04bc7d10a12 = `dqFlAW_userItem`;
$d5b7354d400d93d3$export$771ca420b1b6ed17 = `dqFlAW_usersContainer`;
$d5b7354d400d93d3$export$43405cb8d90657d0 = `dqFlAW_x-icon`;


var $85d3077abd1af750$exports = {};
$85d3077abd1af750$exports = new URL("x-check.fcf77d4b.svg", "file:" + __filename).toString();





const $5b79cef2b514f9cb$export$1f44aaf2ec115b54 = ({ user: user, onUserClick: onUserClick, children: children, style: style, handleTwitterLogin: handleTwitterLogin, logout: logout, myHistory: myHistory })=>{
    const isXConnected = Number.isInteger(user?.followerCount);
    console.log("isXConnected: ", isXConnected);
    console.log("myHistory: ", myHistory);
    const { setShowKYCModal: setShowKYCModal } = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).userItem,
        onClick: ()=>onUserClick(user),
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).row,
                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($ej8CT$reactflipmove))), {
                            typeName: null,
                            appearAnimation: "fade",
                            enterAnimation: "fade",
                            leaveAnimation: "fade",
                            children: [
                                user ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                    src: user.pictureUrl,
                                    alt: `${user.name} profile picture`
                                }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).imgFallback,
                                    style: {
                                        background: "#E7E4E2"
                                    }
                                }),
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).column,
                                    children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($ej8CT$reactflipmove))), {
                                        typeName: null,
                                        appearAnimation: "fade",
                                        enterAnimation: "fade",
                                        leaveAnimation: "fade",
                                        children: [
                                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                children: user?.fullName || "loading"
                                            }),
                                            isXConnected && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("small", {
                                                style: {
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: "gray"
                                                },
                                                children: [
                                                    (0, ($parcel$interopDefault($ej8CT$humannumber)))(user.followerCount),
                                                    " X followers"
                                                ]
                                            }),
                                            isXConnected && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: "gray"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                        children: "X account connected"
                                                    }),
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialLink))), {
                                                        sx: {
                                                            height: 20,
                                                            width: 20,
                                                            fill: "gray",
                                                            marginLeft: "3px",
                                                            marginTop: "2px"
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.twitterVerified && user?.twitterVerified !== "none" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: "gray"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                        children: "connected X account verified"
                                                    }),
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($85d3077abd1af750$exports))),
                                                        style: {
                                                            height: 16,
                                                            width: 16,
                                                            paddingLeft: 3,
                                                            border: "none"
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.verifiedKYC && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: "gray"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                        children: "verified by passport"
                                                    }),
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($ce34f8eeeb61dd73$exports))),
                                                        style: {
                                                            height: 20,
                                                            width: 20,
                                                            paddingLeft: 3,
                                                            border: "none"
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                            alignItems: "center"
                        },
                        children: [
                            isXConnected ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                                content: "Open connected X account",
                                placement: "left",
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("a", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        window.mixpanel.track("X Profile Click", {
                                            url: `https://twitter.com/${user?.username}`
                                        });
                                    },
                                    href: `https://twitter.com/${user?.username}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "data-tooltip-id": "my-tooltip-1",
                                    children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialX))), {})
                                })
                            }) : myHistory ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                                content: "Connect your X account",
                                placement: "left",
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialX))), {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports)))["x-icon"],
                                    "data-tooltip-id": "my-tooltip-2",
                                    onClick: ()=>handleTwitterLogin()
                                })
                            }) : null,
                            !user?.verifiedKYC && myHistory && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                                content: "Verify yourself with passport",
                                placement: "left",
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports)))["x-icon"],
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($ce34f8eeeb61dd73$exports))),
                                    style: {
                                        height: 28,
                                        width: 28
                                    },
                                    onClick: ()=>setShowKYCModal(true)
                                })
                            }),
                            logout && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                                content: "Logout",
                                placement: "left",
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialLogout))), {
                                    sx: {
                                        cursor: "pointer"
                                    },
                                    onClick: logout
                                })
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    }, user?._id);
};
var $5b79cef2b514f9cb$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ users: users, fetchUsers: fetchUsers, hasMore: hasMore, show: show, onUserClick: onUserClick, close: close, style: style, className: className, toggleVerifiedByX: toggleVerifiedByX, toggleVerifiedByKYC: toggleVerifiedByKYC }, ref)=>{
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        id: "group-content-search-scroll-target",
        ref: ref,
        style: {
            ...show && {
                display: "flex"
            },
            ...style
        },
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).screenWithGroupContent, className),
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).close,
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).back,
                    onClick: close
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                style: {
                    marginBottom: 32,
                    display: "flex",
                    gap: 8
                },
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: 14,
                        fontWeight: 300,
                        color: "gray"
                    },
                    children: [
                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkboxes__row,
                            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkboxes__item,
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("label", {
                                    className: `${(0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports)))["style-c"]}`,
                                    children: [
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("input", {
                                            type: "checkbox",
                                            onChange: (e)=>toggleVerifiedByX(e.target.checked)
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkbox__checkmark
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkbox__body,
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                    children: "twitter verified"
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($85d3077abd1af750$exports))),
                                                    style: {
                                                        height: 16,
                                                        width: 16,
                                                        paddingLeft: 3,
                                                        border: "none"
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkboxes__row,
                            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkboxes__item,
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("label", {
                                    className: `${(0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports)))["style-c"]}`,
                                    children: [
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("input", {
                                            type: "checkbox",
                                            onChange: (e)=>toggleVerifiedByKYC(e.target.checked)
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkbox__checkmark
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).checkbox__body,
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                    children: "verified by passport"
                                                }),
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($ce34f8eeeb61dd73$exports))),
                                                    style: {
                                                        height: 16,
                                                        width: 16,
                                                        paddingLeft: 3,
                                                        border: "none"
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactinfinitescrollcomponent))), {
                scrollableTarget: "group-content-search-scroll-target",
                dataLength: users.length,
                next: fetchUsers,
                hasMore: hasMore,
                // loader={<h4>Loading...</h4>}
                // endMessage={
                //   <p style={{ textAlign: 'center' }}>
                //     <b>Yay! You have seen it all</b>
                //   </p>
                // }
                className: (0, (/*@__PURE__*/$parcel$interopDefault($d5b7354d400d93d3$exports))).usersContainer,
                children: users.map((user)=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)($5b79cef2b514f9cb$export$1f44aaf2ec115b54, {
                        user: user,
                        onUserClick: onUserClick
                    }, user._id))
            })
        ]
    });
});












var $87d5f40b1e731b0f$exports = {};

$parcel$export($87d5f40b1e731b0f$exports, "back", function () { return $87d5f40b1e731b0f$export$7c341cb16fc91138; }, function (v) { return $87d5f40b1e731b0f$export$7c341cb16fc91138 = v; });
$parcel$export($87d5f40b1e731b0f$exports, "backContainer", function () { return $87d5f40b1e731b0f$export$4effee6a14a93095; }, function (v) { return $87d5f40b1e731b0f$export$4effee6a14a93095 = v; });
$parcel$export($87d5f40b1e731b0f$exports, "button", function () { return $87d5f40b1e731b0f$export$2ba01fb71ed41cb6; }, function (v) { return $87d5f40b1e731b0f$export$2ba01fb71ed41cb6 = v; });
$parcel$export($87d5f40b1e731b0f$exports, "differentTabs", function () { return $87d5f40b1e731b0f$export$b70bd1b6fa2267e5; }, function (v) { return $87d5f40b1e731b0f$export$b70bd1b6fa2267e5 = v; });
$parcel$export($87d5f40b1e731b0f$exports, "differentTabs2", function () { return $87d5f40b1e731b0f$export$11056a9a5a9dfdf9; }, function (v) { return $87d5f40b1e731b0f$export$11056a9a5a9dfdf9 = v; });
$parcel$export($87d5f40b1e731b0f$exports, "screenWithGroupContent", function () { return $87d5f40b1e731b0f$export$de3da254965f2f43; }, function (v) { return $87d5f40b1e731b0f$export$de3da254965f2f43 = v; });
$parcel$export($87d5f40b1e731b0f$exports, "selected", function () { return $87d5f40b1e731b0f$export$d90250155de6d7e7; }, function (v) { return $87d5f40b1e731b0f$export$d90250155de6d7e7 = v; });
$parcel$export($87d5f40b1e731b0f$exports, "similarity", function () { return $87d5f40b1e731b0f$export$16a4d76eabe7aabb; }, function (v) { return $87d5f40b1e731b0f$export$16a4d76eabe7aabb = v; });
$parcel$export($87d5f40b1e731b0f$exports, "tabs", function () { return $87d5f40b1e731b0f$export$39f5674517ec0000; }, function (v) { return $87d5f40b1e731b0f$export$39f5674517ec0000 = v; });
var $87d5f40b1e731b0f$export$7c341cb16fc91138;
var $87d5f40b1e731b0f$export$4effee6a14a93095;
var $87d5f40b1e731b0f$export$2ba01fb71ed41cb6;
var $87d5f40b1e731b0f$export$b70bd1b6fa2267e5;
var $87d5f40b1e731b0f$export$11056a9a5a9dfdf9;
var $87d5f40b1e731b0f$export$de3da254965f2f43;
var $87d5f40b1e731b0f$export$d90250155de6d7e7;
var $87d5f40b1e731b0f$export$16a4d76eabe7aabb;
var $87d5f40b1e731b0f$export$39f5674517ec0000;
$87d5f40b1e731b0f$export$7c341cb16fc91138 = `eGpACq_back`;
$87d5f40b1e731b0f$export$4effee6a14a93095 = `eGpACq_backContainer`;
$87d5f40b1e731b0f$export$2ba01fb71ed41cb6 = `eGpACq_button`;
$87d5f40b1e731b0f$export$b70bd1b6fa2267e5 = `eGpACq_differentTabs`;
$87d5f40b1e731b0f$export$11056a9a5a9dfdf9 = `eGpACq_differentTabs2`;
$87d5f40b1e731b0f$export$de3da254965f2f43 = `eGpACq_screenWithGroupContent`;
$87d5f40b1e731b0f$export$d90250155de6d7e7 = `eGpACq_selected`;
$87d5f40b1e731b0f$export$16a4d76eabe7aabb = `eGpACq_similarity`;
$87d5f40b1e731b0f$export$39f5674517ec0000 = `eGpACq_tabs`;


const $ce9e9d8a0ac00354$export$522e89d0fa1200f4 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ selectedTab: selectedTab, setSelectedTab: setSelectedTab, showDifference: showDifference, setShowDifference: setShowDifference, back: back, children: children, similarity: similarity, user: user, handleTwitterLogin: handleTwitterLogin, logout: logout, myHistory: myHistory }, ref)=>{
    (0, $ej8CT$react.useEffect)(()=>{
        if (showDifference && selectedTab !== "answers") setSelectedTab("answers");
    }, [
        showDifference
    ]);
    (0, $ej8CT$react.useEffect)(()=>{
        if (showDifference && selectedTab !== "answers") setShowDifference(false);
    }, [
        selectedTab
    ]);
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        id: "user-content-scroll-target",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).screenWithGroupContent,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).backContainer,
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).back,
                    onClick: back
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $5b79cef2b514f9cb$export$1f44aaf2ec115b54), {
                handleTwitterLogin: handleTwitterLogin,
                style: {
                    cursor: "auto",
                    border: "none"
                },
                user: user,
                onUserClick: ()=>{},
                logout: logout,
                myHistory: myHistory,
                children: !(0, ($parcel$interopDefault($ej8CT$lodash))).isNull(similarity) && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("p", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).similarity,
                    children: [
                        "Similarity to you: ",
                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("span", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).similarityMeter,
                            children: [
                                similarity,
                                "%"
                            ]
                        })
                    ]
                })
            }),
            !(0, ($parcel$interopDefault($ej8CT$lodash))).isNull(similarity) && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).button,
                    onClick: ()=>{
                        const newShowDifference = !showDifference;
                        setShowDifference(newShowDifference);
                        window.mixpanel.track(newShowDifference ? "Show Users Difference" : "Go Back to User Q/A");
                    },
                    children: showDifference ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialArrowBack))), {
                                sx: {
                                    fontSize: 14,
                                    marginRight: "5px"
                                }
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                children: "Back"
                            })
                        ]
                    }) : "Show Differences"
                })
            }),
            !showDifference && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        style: {
                            width: "calc(100% - 30px)",
                            height: 1,
                            borderTop: "1px solid rgb(179, 179, 179)",
                            boxSizing: "border-box",
                            margin: "15px auto"
                        }
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).tabs,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, ($parcel$interopDefault($ej8CT$classnames)))({
                                    [(0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).selected]: selectedTab === "answers"
                                }),
                                onClick: ()=>{
                                    setSelectedTab("answers");
                                    window.mixpanel.track("Select User Answers Tab");
                                },
                                children: "His/Her Answers"
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, ($parcel$interopDefault($ej8CT$classnames)))({
                                    [(0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).selected]: selectedTab === "questions"
                                }),
                                onClick: ()=>{
                                    window.mixpanel.track("Select User Questions Tab");
                                    setSelectedTab("questions");
                                },
                                children: "His/Her Questions"
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
});
const $ce9e9d8a0ac00354$export$1f74963c34e8bfec = ()=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
            style: {
                color: "#3b3b3b",
                fontSize: 36,
                fontWeight: 300
            },
            children: "empty"
        })
    });
$ce9e9d8a0ac00354$export$1f74963c34e8bfec.prototype = {};
const $ce9e9d8a0ac00354$export$6241fe9ea73c6c74 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ questions: questions, hasMore: hasMore, fetchQuestions: fetchQuestions, respond: respond, createNewGroup: createNewGroup, onUserClick: onUserClick, onQuestionClick: onQuestionClick }, ref)=>{
    if (questions && questions.length === 0) return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)($ce9e9d8a0ac00354$export$1f74963c34e8bfec, {});
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactinfinitescrollcomponent))), {
            scrollableTarget: "user-content-scroll-target",
            dataLength: questions?.length || 0,
            next: fetchQuestions,
            hasMore: hasMore,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).usersItems,
            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactflipmove))), {
                appearAnimation: "elevator",
                typeName: null,
                maintainContainerHeight: true,
                children: questions && questions.map((i)=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $526fe0560e42c3bb$export$2e2bcd8739ae039), {
                        respond: respond && ((content)=>respond(i._id, content)),
                        createNewGroup: (content)=>createNewGroup(i.shortId, content),
                        ...i,
                        onUserClick: ()=>onUserClick(i.userId),
                        onClick: ()=>onQuestionClick(i.shortId)
                    }, i.id || i._id))
            })
        })
    });
});
const $ce9e9d8a0ac00354$export$a6816b34ad549b0 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ respond: // hasMore,
// fetchAnswers,
respond, createNewGroup: createNewGroup, onUserClick: onUserClick, answers: answers, onQuestionClick: onQuestionClick }, ref)=>{
    const [selectedTab, setSelectedTab] = (0, $ej8CT$react.useState)("different");
    const [selectedNestedTab, setSelectedNestedTab] = (0, $ej8CT$react.useState)("byMe");
    // const [answers, setAnswers] = useState({
    //   different: [],
    //   same: [],
    //   notAnswered: []
    // })
    // useEffect(() => {
    //   compareWithMe().then(answers => setAnswers(answers))
    // }, [])
    const questionsToShow = answers && (selectedTab === "notAnswered" ? answers[selectedTab].filter((i)=>selectedNestedTab === "byMe" ? i.byMe : !i.byMe) : answers[selectedTab]).map((i)=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $526fe0560e42c3bb$export$2e2bcd8739ae039), {
            respond: respond && ((content)=>respond(i._id, content)),
            createNewGroup: (content)=>createNewGroup(i.shortId, content),
            ...i,
            onUserClick: ()=>onUserClick(i.userId),
            onClick: ()=>onQuestionClick(i.shortId)
        }, i.id || i._id));
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                style: {
                    width: "calc(100% - 30px)",
                    height: 1,
                    borderTop: "1px solid rgb(179, 179, 179)",
                    boxSizing: "border-box",
                    margin: "15px auto"
                }
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).tabs, (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).differentTabs),
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($ej8CT$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).selected]: selectedTab === "different"
                        }),
                        onClick: ()=>{
                            window.mixpanel.track("Select Different Tab");
                            setSelectedTab("different");
                        },
                        children: "Different Answer"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($ej8CT$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).selected]: selectedTab === "same"
                        }),
                        onClick: ()=>{
                            window.mixpanel.track("Select Same Tab");
                            setSelectedTab("same");
                        },
                        children: "Same Answer"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($ej8CT$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).selected]: selectedTab === "notAnswered"
                        }),
                        onClick: ()=>{
                            window.mixpanel.track("Select Not Answered Tab");
                            setSelectedTab("notAnswered");
                        },
                        children: "Not Answered"
                    })
                ]
            }),
            selectedTab === "notAnswered" ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).tabs, (0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).differentTabs2),
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($ej8CT$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).selected]: selectedNestedTab === "byMe"
                        }),
                        onClick: ()=>setSelectedNestedTab("byMe"),
                        children: "By Me"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($ej8CT$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($87d5f40b1e731b0f$exports))).selected]: selectedNestedTab === "byHim"
                        }),
                        onClick: ()=>setSelectedNestedTab("byHim"),
                        children: "By Him/Her"
                    })
                ]
            }) : null,
            questionsToShow && questionsToShow.length === 0 && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)($ce9e9d8a0ac00354$export$1f74963c34e8bfec, {}),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactflipmove))), {
                appearAnimation: "elevator",
                maintainContainerHeight: true,
                children: questionsToShow
            })
        ]
    });
});








var $a17f0fd3678689b7$exports = {};

$parcel$export($a17f0fd3678689b7$exports, "buttonsOutside", function () { return $a17f0fd3678689b7$export$eb4f292bdd97cb15; }, function (v) { return $a17f0fd3678689b7$export$eb4f292bdd97cb15 = v; });
$parcel$export($a17f0fd3678689b7$exports, "dropdownContainer", function () { return $a17f0fd3678689b7$export$a3681dba3470c8c4; }, function (v) { return $a17f0fd3678689b7$export$a3681dba3470c8c4 = v; });
$parcel$export($a17f0fd3678689b7$exports, "dropdownItemsContainer", function () { return $a17f0fd3678689b7$export$960d6a7eb8ce632b; }, function (v) { return $a17f0fd3678689b7$export$960d6a7eb8ce632b = v; });
$parcel$export($a17f0fd3678689b7$exports, "dropdownValue", function () { return $a17f0fd3678689b7$export$2ff2bc1709095d00; }, function (v) { return $a17f0fd3678689b7$export$2ff2bc1709095d00 = v; });
$parcel$export($a17f0fd3678689b7$exports, "input", function () { return $a17f0fd3678689b7$export$b7e3ae3d7c15e42e; }, function (v) { return $a17f0fd3678689b7$export$b7e3ae3d7c15e42e = v; });
$parcel$export($a17f0fd3678689b7$exports, "search", function () { return $a17f0fd3678689b7$export$d76128d007d19019; }, function (v) { return $a17f0fd3678689b7$export$d76128d007d19019 = v; });
$parcel$export($a17f0fd3678689b7$exports, "text", function () { return $a17f0fd3678689b7$export$6f093cfa640b7166; }, function (v) { return $a17f0fd3678689b7$export$6f093cfa640b7166 = v; });
var $a17f0fd3678689b7$export$eb4f292bdd97cb15;
var $a17f0fd3678689b7$export$a3681dba3470c8c4;
var $a17f0fd3678689b7$export$960d6a7eb8ce632b;
var $a17f0fd3678689b7$export$2ff2bc1709095d00;
var $a17f0fd3678689b7$export$b7e3ae3d7c15e42e;
var $a17f0fd3678689b7$export$d76128d007d19019;
var $a17f0fd3678689b7$export$6f093cfa640b7166;
$a17f0fd3678689b7$export$eb4f292bdd97cb15 = `rrbiRW_buttonsOutside`;
$a17f0fd3678689b7$export$a3681dba3470c8c4 = `rrbiRW_dropdownContainer`;
$a17f0fd3678689b7$export$960d6a7eb8ce632b = `rrbiRW_dropdownItemsContainer`;
$a17f0fd3678689b7$export$2ff2bc1709095d00 = `rrbiRW_dropdownValue`;
$a17f0fd3678689b7$export$b7e3ae3d7c15e42e = `rrbiRW_input`;
$a17f0fd3678689b7$export$d76128d007d19019 = `rrbiRW_search`;
$a17f0fd3678689b7$export$6f093cfa640b7166 = `rrbiRW_text`;


var $013477f3d88ad868$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ search: search, buttonsOutside: buttonsOutside = false, className: className, style: style }, ref2)=>{
    const [text, setText] = (0, $ej8CT$react.useState)("");
    const [dropdownValue, setDropdownValue] = (0, $ej8CT$react.useState)("Questions");
    const [showDropdown, setShowDropdown] = (0, $ej8CT$react.useState)(false);
    const ref = (0, $ej8CT$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowDropdown(false)
    });
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        ref: (node)=>{
            ref.current = node;
            if (ref2) ref2(node);
        },
        style: style,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).text, className, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).buttonsOutside]: buttonsOutside
        }),
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("input", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).input,
                placeholder: "Search here...",
                onChange: (e)=>setText(e.target.value),
                value: text
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).dropdownContainer,
                ref: ref,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).dropdownValue,
                        onClick: ()=>setShowDropdown(true),
                        children: dropdownValue
                    }),
                    showDropdown && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).dropdownItemsContainer,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).dropdownItem,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDropdownValue("Questions");
                                    setShowDropdown(false);
                                },
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                    children: "Questions"
                                })
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).dropdownItem,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDropdownValue("Users");
                                    setShowDropdown(false);
                                },
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                    children: "Users"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialExpandMore))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).expandIcon,
                        onClick: ()=>setShowDropdown(true)
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("button", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($a17f0fd3678689b7$exports))).search,
                onClick: ()=>search(dropdownValue, text),
                children: [
                    "Find",
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialSearch))), {
                        sx: {
                            fontSize: 16
                        }
                    })
                ]
            })
        ]
    });
});










var $df38434b91e81e35$exports = {};

$parcel$export($df38434b91e81e35$exports, "back", function () { return $df38434b91e81e35$export$7c341cb16fc91138; }, function (v) { return $df38434b91e81e35$export$7c341cb16fc91138 = v; });
$parcel$export($df38434b91e81e35$exports, "screenWithGroupContent", function () { return $df38434b91e81e35$export$de3da254965f2f43; }, function (v) { return $df38434b91e81e35$export$de3da254965f2f43 = v; });
$parcel$export($df38434b91e81e35$exports, "total", function () { return $df38434b91e81e35$export$9086bb9c16b2b5b; }, function (v) { return $df38434b91e81e35$export$9086bb9c16b2b5b = v; });
$parcel$export($df38434b91e81e35$exports, "totalAndBack", function () { return $df38434b91e81e35$export$ef9502a2481467bc; }, function (v) { return $df38434b91e81e35$export$ef9502a2481467bc = v; });
var $df38434b91e81e35$export$7c341cb16fc91138;
var $df38434b91e81e35$export$de3da254965f2f43;
var $df38434b91e81e35$export$9086bb9c16b2b5b;
var $df38434b91e81e35$export$ef9502a2481467bc;
$df38434b91e81e35$export$7c341cb16fc91138 = `_25x40a_back`;
$df38434b91e81e35$export$de3da254965f2f43 = `_25x40a_screenWithGroupContent`;
$df38434b91e81e35$export$9086bb9c16b2b5b = `_25x40a_total`;
$df38434b91e81e35$export$ef9502a2481467bc = `_25x40a_totalAndBack`;


(0, ($parcel$interopDefault($ej8CT$handlebars))).registerHelper("bold", function(options) {
    const targetText = options.hash.text;
    const replacement = `<strong>${targetText}</strong>`;
    return new (0, ($parcel$interopDefault($ej8CT$handlebars))).SafeString(this.text.replace(new RegExp(targetText, "gi"), replacement));
});
var $9d276b6dc1806f5d$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ questions: questions, hasMore: hasMore, fetchQuestions: fetchQuestions, total: total, respond: respond, createNewGroup: createNewGroup, back: back, search: search, style: style, className: className, onUserClick: onUserClick, onQuestionClick: onQuestionClick }, ref)=>{
    const templateString = `{{bold text="${search}"}}`;
    const template = (0, ($parcel$interopDefault($ej8CT$handlebars))).compile(templateString);
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $6d1d718d25303e4e$export$2e2bcd8739ae039), {
        id: "questions-search-scroll-target",
        ref: ref,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($df38434b91e81e35$exports))).screenWithGroupContent),
        style: style,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($df38434b91e81e35$exports))).totalAndBack,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df38434b91e81e35$exports))).total,
                        children: [
                            total,
                            " questions found"
                        ]
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($df38434b91e81e35$exports))).back,
                        onClick: back
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactinfinitescrollcomponent))), {
                scrollableTarget: "questions-search-scroll-target",
                dataLength: questions.length,
                next: fetchQuestions,
                hasMore: hasMore,
                children: questions.map((i)=>{
                    let htmlOutput;
                    if (search) htmlOutput = template({
                        text: i.name
                    });
                    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $526fe0560e42c3bb$export$2e2bcd8739ae039), {
                        respond: respond && ((content)=>respond(i._id, content)),
                        createNewGroup: (content)=>createNewGroup(i.shortId, content),
                        ...i,
                        htmlName: htmlOutput,
                        onUserClick: ()=>onUserClick(i.userId),
                        onClick: ()=>onQuestionClick(i.shortId)
                    }, i.id || i._id);
                })
            })
        ]
    });
});












var $87a6b3fdd281dfaf$exports = {};

$parcel$export($87a6b3fdd281dfaf$exports, "back", function () { return $87a6b3fdd281dfaf$export$7c341cb16fc91138; }, function (v) { return $87a6b3fdd281dfaf$export$7c341cb16fc91138 = v; });
$parcel$export($87a6b3fdd281dfaf$exports, "column", function () { return $87a6b3fdd281dfaf$export$4e0c71f277ca26b3; }, function (v) { return $87a6b3fdd281dfaf$export$4e0c71f277ca26b3 = v; });
$parcel$export($87a6b3fdd281dfaf$exports, "row", function () { return $87a6b3fdd281dfaf$export$120ff0929b202a6d; }, function (v) { return $87a6b3fdd281dfaf$export$120ff0929b202a6d = v; });
$parcel$export($87a6b3fdd281dfaf$exports, "total", function () { return $87a6b3fdd281dfaf$export$9086bb9c16b2b5b; }, function (v) { return $87a6b3fdd281dfaf$export$9086bb9c16b2b5b = v; });
$parcel$export($87a6b3fdd281dfaf$exports, "totalAndBack", function () { return $87a6b3fdd281dfaf$export$ef9502a2481467bc; }, function (v) { return $87a6b3fdd281dfaf$export$ef9502a2481467bc = v; });
$parcel$export($87a6b3fdd281dfaf$exports, "userItem", function () { return $87a6b3fdd281dfaf$export$f6bda04bc7d10a12; }, function (v) { return $87a6b3fdd281dfaf$export$f6bda04bc7d10a12 = v; });
$parcel$export($87a6b3fdd281dfaf$exports, "usersContainer", function () { return $87a6b3fdd281dfaf$export$771ca420b1b6ed17; }, function (v) { return $87a6b3fdd281dfaf$export$771ca420b1b6ed17 = v; });
$parcel$export($87a6b3fdd281dfaf$exports, "usersItems", function () { return $87a6b3fdd281dfaf$export$2778a17561d67130; }, function (v) { return $87a6b3fdd281dfaf$export$2778a17561d67130 = v; });
var $87a6b3fdd281dfaf$export$7c341cb16fc91138;
var $87a6b3fdd281dfaf$export$4e0c71f277ca26b3;
var $87a6b3fdd281dfaf$export$120ff0929b202a6d;
var $87a6b3fdd281dfaf$export$9086bb9c16b2b5b;
var $87a6b3fdd281dfaf$export$ef9502a2481467bc;
var $87a6b3fdd281dfaf$export$f6bda04bc7d10a12;
var $87a6b3fdd281dfaf$export$771ca420b1b6ed17;
var $87a6b3fdd281dfaf$export$2778a17561d67130;
$87a6b3fdd281dfaf$export$7c341cb16fc91138 = `zrOIxW_back`;
$87a6b3fdd281dfaf$export$4e0c71f277ca26b3 = `zrOIxW_column`;
$87a6b3fdd281dfaf$export$120ff0929b202a6d = `zrOIxW_row`;
$87a6b3fdd281dfaf$export$9086bb9c16b2b5b = `zrOIxW_total`;
$87a6b3fdd281dfaf$export$ef9502a2481467bc = `zrOIxW_totalAndBack`;
$87a6b3fdd281dfaf$export$f6bda04bc7d10a12 = `zrOIxW_userItem`;
$87a6b3fdd281dfaf$export$771ca420b1b6ed17 = `zrOIxW_usersContainer`;
$87a6b3fdd281dfaf$export$2778a17561d67130 = `zrOIxW_usersItems`;


(0, ($parcel$interopDefault($ej8CT$handlebars))).registerHelper("bold", function(options) {
    const targetText = options.hash.text;
    const replacement = `<strong>${targetText}</strong>`;
    return new (0, ($parcel$interopDefault($ej8CT$handlebars))).SafeString(this.text.replace(new RegExp(targetText, "gi"), replacement));
});
var $bd942b430f1fa126$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ style: style, users: users, fetchUsers: fetchUsers, hasMore: hasMore, total: total, back: back, search: search, onUserClick: onUserClick }, ref)=>{
    const templateString = `{{bold text="${search}"}}`;
    const template = (0, ($parcel$interopDefault($ej8CT$handlebars))).compile(templateString);
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $6d1d718d25303e4e$export$2e2bcd8739ae039), {
        style: style,
        id: "users-search-scroll-target",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).usersContainer,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).totalAndBack,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).total,
                        children: [
                            total,
                            " users found"
                        ]
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).back,
                        onClick: back
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$reactinfinitescrollcomponent))), {
                scrollableTarget: "users-search-scroll-target",
                dataLength: users.length,
                next: fetchUsers,
                hasMore: hasMore,
                // loader={<h4>Loading...</h4>}
                // endMessage={
                //   <p style={{ textAlign: 'center' }}>
                //     <b>Yay! You have seen it all</b>
                //   </p>
                // }
                className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).usersItems,
                children: users.map((user)=>{
                    let htmlOutput;
                    if (search) htmlOutput = template({
                        text: user.username
                    });
                    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).userItem,
                        onClick: ()=>onUserClick(user),
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).row,
                                children: [
                                    user.pictureUrl && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                        src: user.pictureUrl,
                                        alt: `${user.name} profile picture`
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($87a6b3fdd281dfaf$exports))).column,
                                        children: [
                                            htmlOutput ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: htmlOutput
                                                }
                                            }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                children: user.username
                                            }),
                                            Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("span", {
                                                children: [
                                                    (0, ($parcel$interopDefault($ej8CT$humannumber)))(user.followerCount),
                                                    " followers"
                                                ]
                                            }),
                                            user?.twitterVerified && user?.twitterVerified !== "none" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: "gray"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                        children: "twitter verified"
                                                    }),
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($85d3077abd1af750$exports))),
                                                        style: {
                                                            height: 16,
                                                            width: 16,
                                                            paddingLeft: 3,
                                                            border: "none"
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.verifiedKYC && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: "gray"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                                        children: "verified by passport"
                                                    }),
                                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($ce34f8eeeb61dd73$exports))),
                                                        style: {
                                                            height: 20,
                                                            width: 20,
                                                            paddingLeft: 3,
                                                            border: "none"
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("a", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    window.mixpanel.track("X Profile Click", {
                                        url: `https://twitter.com/${user?.username}`
                                    });
                                },
                                href: `https://twitter.com/${user?.username}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialX))), {})
                            })
                        ]
                    }, user._id);
                })
            })
        ]
    });
});








var $483d053df3195859$exports = {};

$parcel$export($483d053df3195859$exports, "dropdownContainer", function () { return $483d053df3195859$export$a3681dba3470c8c4; }, function (v) { return $483d053df3195859$export$a3681dba3470c8c4 = v; });
$parcel$export($483d053df3195859$exports, "dropdownItemsContainer", function () { return $483d053df3195859$export$960d6a7eb8ce632b; }, function (v) { return $483d053df3195859$export$960d6a7eb8ce632b = v; });
$parcel$export($483d053df3195859$exports, "dropdownValue", function () { return $483d053df3195859$export$2ff2bc1709095d00; }, function (v) { return $483d053df3195859$export$2ff2bc1709095d00 = v; });
$parcel$export($483d053df3195859$exports, "dropdownWithLabel", function () { return $483d053df3195859$export$4c1173217024b6d6; }, function (v) { return $483d053df3195859$export$4c1173217024b6d6 = v; });
$parcel$export($483d053df3195859$exports, "search", function () { return $483d053df3195859$export$d76128d007d19019; }, function (v) { return $483d053df3195859$export$d76128d007d19019 = v; });
$parcel$export($483d053df3195859$exports, "text", function () { return $483d053df3195859$export$6f093cfa640b7166; }, function (v) { return $483d053df3195859$export$6f093cfa640b7166 = v; });
var $483d053df3195859$export$a3681dba3470c8c4;
var $483d053df3195859$export$960d6a7eb8ce632b;
var $483d053df3195859$export$2ff2bc1709095d00;
var $483d053df3195859$export$4c1173217024b6d6;
var $483d053df3195859$export$d76128d007d19019;
var $483d053df3195859$export$6f093cfa640b7166;
$483d053df3195859$export$a3681dba3470c8c4 = `rUSHRq_dropdownContainer`;
$483d053df3195859$export$960d6a7eb8ce632b = `rUSHRq_dropdownItemsContainer`;
$483d053df3195859$export$2ff2bc1709095d00 = `rUSHRq_dropdownValue`;
$483d053df3195859$export$4c1173217024b6d6 = `rUSHRq_dropdownWithLabel`;
$483d053df3195859$export$d76128d007d19019 = `rUSHRq_search`;
$483d053df3195859$export$6f093cfa640b7166 = `rUSHRq_text`;


const $a67a79ca44016109$export$f8fcd3a81add9e17 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ sort: sort = "Most Answered", duration: duration = "Week", setSort: setSort, setDuration: setDuration, className: className, style: style }, ref3)=>{
    const [showSortDropdown, setShowSortDropdown] = (0, $ej8CT$react.useState)(false);
    const [showDurationDropdown, setShowDurationDropdown] = (0, $ej8CT$react.useState)(false);
    const ref = (0, $ej8CT$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowSortDropdown(false)
    });
    const ref2 = (0, $ej8CT$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowDurationDropdown(false)
    });
    const setDurationAndClose = (value)=>{
        window.mixpanel.track("Update Filter", {
            filter: value
        });
        setDuration(value);
        setShowDurationDropdown(false);
    };
    const setSortAndClose = (value)=>{
        window.mixpanel.track("Update Sort", {
            sort: value
        });
        setSort(value);
        setShowSortDropdown(false);
    };
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        ref: ref3,
        style: style,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).text, className),
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownWithLabel,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $8699ff1d707d4fac$export$2e2bcd8739ae039), {
                        style: {
                            fontWeight: 300,
                            color: "#3b3b3b"
                        },
                        children: "Showing"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownContainer,
                        ref: ref,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownValue,
                                onClick: ()=>setShowSortDropdown(true),
                                children: sort
                            }),
                            showSortDropdown && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItemsContainer,
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose("Most Answered"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Most Answered"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose("Latest"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Latest"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose("Most Controversial"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Most Controversial"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose("Most Unanimous"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Most Unanimous"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose("Most Followed Authors"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Most Followed Authors"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialExpandMore))), {
                                onClick: ()=>setShowSortDropdown(true)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownWithLabel,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $8699ff1d707d4fac$export$2e2bcd8739ae039), {
                        style: {
                            fontWeight: 300,
                            color: "#3b3b3b"
                        },
                        children: [
                            "Questions ",
                            duration === "All Time" ? "of" : "for last"
                        ]
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownContainer,
                        ref: ref2,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownValue,
                                onClick: ()=>setShowDurationDropdown(true),
                                children: duration
                            }),
                            showDurationDropdown && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItemsContainer,
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose("Day"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Day"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose("Week"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Week"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose("Month"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Month"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose("Year"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "Year"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($483d053df3195859$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose("All Time"),
                                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            children: "All time"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialExpandMore))), {
                                onClick: ()=>setShowDurationDropdown(true)
                            })
                        ]
                    })
                ]
            })
        ]
    });
});














var $c2fbc8df9c377569$exports = {};

$parcel$export($c2fbc8df9c377569$exports, "arrowDown", function () { return $c2fbc8df9c377569$export$f61feb65ec56823b; }, function (v) { return $c2fbc8df9c377569$export$f61feb65ec56823b = v; });
$parcel$export($c2fbc8df9c377569$exports, "bars", function () { return $c2fbc8df9c377569$export$60912654947077e3; }, function (v) { return $c2fbc8df9c377569$export$60912654947077e3 = v; });
$parcel$export($c2fbc8df9c377569$exports, "barsMinWidth", function () { return $c2fbc8df9c377569$export$2e07f93cbaeb0394; }, function (v) { return $c2fbc8df9c377569$export$2e07f93cbaeb0394 = v; });
$parcel$export($c2fbc8df9c377569$exports, "card", function () { return $c2fbc8df9c377569$export$aa3e815946b80764; }, function (v) { return $c2fbc8df9c377569$export$aa3e815946b80764 = v; });
$parcel$export($c2fbc8df9c377569$exports, "close", function () { return $c2fbc8df9c377569$export$8360e631d277ea4d; }, function (v) { return $c2fbc8df9c377569$export$8360e631d277ea4d = v; });
$parcel$export($c2fbc8df9c377569$exports, "hint", function () { return $c2fbc8df9c377569$export$464c821cd4347539; }, function (v) { return $c2fbc8df9c377569$export$464c821cd4347539 = v; });
$parcel$export($c2fbc8df9c377569$exports, "img", function () { return $c2fbc8df9c377569$export$463b44d9bf3628be; }, function (v) { return $c2fbc8df9c377569$export$463b44d9bf3628be = v; });
$parcel$export($c2fbc8df9c377569$exports, "imgWithArrow", function () { return $c2fbc8df9c377569$export$e4e79e5008270fc7; }, function (v) { return $c2fbc8df9c377569$export$e4e79e5008270fc7 = v; });
$parcel$export($c2fbc8df9c377569$exports, "questionText", function () { return $c2fbc8df9c377569$export$500776a67ad9cd26; }, function (v) { return $c2fbc8df9c377569$export$500776a67ad9cd26 = v; });
$parcel$export($c2fbc8df9c377569$exports, "respondButton", function () { return $c2fbc8df9c377569$export$6ea0e660ad045afa; }, function (v) { return $c2fbc8df9c377569$export$6ea0e660ad045afa = v; });
$parcel$export($c2fbc8df9c377569$exports, "stats", function () { return $c2fbc8df9c377569$export$7804429c45dff272; }, function (v) { return $c2fbc8df9c377569$export$7804429c45dff272 = v; });
$parcel$export($c2fbc8df9c377569$exports, "text", function () { return $c2fbc8df9c377569$export$6f093cfa640b7166; }, function (v) { return $c2fbc8df9c377569$export$6f093cfa640b7166 = v; });
$parcel$export($c2fbc8df9c377569$exports, "textContainer", function () { return $c2fbc8df9c377569$export$2cedfd664bb3bd01; }, function (v) { return $c2fbc8df9c377569$export$2cedfd664bb3bd01 = v; });
$parcel$export($c2fbc8df9c377569$exports, "username", function () { return $c2fbc8df9c377569$export$5e1be761f603d585; }, function (v) { return $c2fbc8df9c377569$export$5e1be761f603d585 = v; });
$parcel$export($c2fbc8df9c377569$exports, "usernameActual", function () { return $c2fbc8df9c377569$export$9a369e4b55725081; }, function (v) { return $c2fbc8df9c377569$export$9a369e4b55725081 = v; });
var $c2fbc8df9c377569$export$f61feb65ec56823b;
var $c2fbc8df9c377569$export$60912654947077e3;
var $c2fbc8df9c377569$export$2e07f93cbaeb0394;
var $c2fbc8df9c377569$export$aa3e815946b80764;
var $c2fbc8df9c377569$export$8360e631d277ea4d;
var $c2fbc8df9c377569$export$464c821cd4347539;
var $c2fbc8df9c377569$export$463b44d9bf3628be;
var $c2fbc8df9c377569$export$e4e79e5008270fc7;
var $c2fbc8df9c377569$export$500776a67ad9cd26;
var $c2fbc8df9c377569$export$6ea0e660ad045afa;
var $c2fbc8df9c377569$export$7804429c45dff272;
var $c2fbc8df9c377569$export$6f093cfa640b7166;
var $c2fbc8df9c377569$export$2cedfd664bb3bd01;
var $c2fbc8df9c377569$export$5e1be761f603d585;
var $c2fbc8df9c377569$export$9a369e4b55725081;
$c2fbc8df9c377569$export$f61feb65ec56823b = `lN8-WW_arrowDown`;
$c2fbc8df9c377569$export$60912654947077e3 = `lN8-WW_bars`;
$c2fbc8df9c377569$export$2e07f93cbaeb0394 = `lN8-WW_barsMinWidth`;
$c2fbc8df9c377569$export$aa3e815946b80764 = `lN8-WW_card`;
$c2fbc8df9c377569$export$8360e631d277ea4d = `lN8-WW_close`;
$c2fbc8df9c377569$export$464c821cd4347539 = `lN8-WW_hint`;
$c2fbc8df9c377569$export$463b44d9bf3628be = `lN8-WW_img`;
$c2fbc8df9c377569$export$e4e79e5008270fc7 = `lN8-WW_imgWithArrow`;
$c2fbc8df9c377569$export$500776a67ad9cd26 = `lN8-WW_questionText`;
$c2fbc8df9c377569$export$6ea0e660ad045afa = `lN8-WW_respondButton`;
$c2fbc8df9c377569$export$7804429c45dff272 = `lN8-WW_stats`;
$c2fbc8df9c377569$export$6f093cfa640b7166 = `lN8-WW_text`;
$c2fbc8df9c377569$export$2cedfd664bb3bd01 = `lN8-WW_textContainer`;
$c2fbc8df9c377569$export$5e1be761f603d585 = `lN8-WW_username`;
$c2fbc8df9c377569$export$9a369e4b55725081 = `lN8-WW_usernameActual`;


const $098837977bfcd70d$var$calcPercent = (x, sum)=>Math.round(x / sum * 100);
const $098837977bfcd70d$export$38435c7d2fecd2f = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ yourOwnQuestion: yourOwnQuestion, onUserClick: onUserClick, userPictureUrl: userPictureUrl, shortId: shortId, username: username, name: name, answersCount: answersCount, me: { answer: answer } = {}, respond: respond, createNewGroup: createNewGroup, close: close, _id: _id, handleTwitterLogin: handleTwitterLogin, selected: selected = false }, ref)=>{
    const [state, setState] = (0, $ej8CT$react.useState)(null);
    const totalAnswerCount = answersCount.yes + answersCount.no;
    const userReplyCount = state ? answersCount[state] : totalAnswerCount;
    const yesPercentage = $098837977bfcd70d$var$calcPercent(answersCount.yes, totalAnswerCount);
    const noPercentage = $098837977bfcd70d$var$calcPercent(answersCount.no, totalAnswerCount);
    const { setIsLoginModalOpen: setIsLoginModalOpen, setAnswer: setAnswer } = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    const share = ()=>{
        if (navigator.share) {
            window.mixpanel.track("Share", {
                questionId: shortId
            });
            navigator.share({
                title: "Question",
                text: name,
                url: `https://poll.cc/questions/${shortId}`
            });
        }
    };
    const redirectToLogin = (answer)=>{
        setIsLoginModalOpen(true);
        setAnswer({
            answer: answer,
            parentMessageId: _id,
            shortId: shortId
        });
        window.mixpanel.track("Anonymous Question Answer", {
            questionId: shortId,
            answer: answer
        });
    };
    (0, $ej8CT$react.useEffect)(()=>{
        const resizeObserver = new ResizeObserver(()=>{
            const a = document.querySelector("#question-card");
            const b = document.querySelector("#question-text");
            const c = document.querySelector("#question-text-size");
            const containerHeight = a.clientHeight;
            const questionHeight = b.clientHeight;
            const containerWidth = a.clientWidth;
            const questionWidth = b.clientWidth;
            if (questionHeight + 178 < containerHeight && questionWidth <= containerWidth) return resizeObserver.disconnect();
            const currentFontSize = parseInt(window.getComputedStyle(c).fontSize.replace("px", ""));
            if (currentFontSize === 0) {
                c.style["font-size"] = "32px";
                b.style.overflow = "auto";
                b.style.height = "calc(100dvh - 126px)";
                return resizeObserver.disconnect();
            }
            c.style["font-size"] = `${currentFontSize - 1}px`;
        });
        resizeObserver.observe(document.querySelector("#question-text"));
        window.addEventListener("resize", (0, ($parcel$interopDefault($ej8CT$lodash))).debounce(()=>{
            document.querySelector("#question-text-size").style["font-size"] = "200px";
            resizeObserver.observe(document.querySelector("#question-text"));
        }, 1000));
        return ()=>resizeObserver.disconnect();
    }, []);
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("article", {
        id: "question-card",
        ref: ref,
        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).card, {
            "selected-question": selected
        }),
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).close,
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).back,
                    onClick: close
                })
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                id: "question-text",
                style: {
                    padding: "0 26px"
                },
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $6ef826fb93f43275$export$2e2bcd8739ae039), {
                        h1: true,
                        style: {
                            fontSize: 200,
                            fontWeight: 200
                        },
                        id: "question-text-size",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).username,
                        children: [
                            " ",
                            "by ",
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).usernameActual,
                                onClick: onUserClick,
                                children: username
                            }),
                            ",",
                            " ",
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                                style: {
                                    display: "inline",
                                    textAlign: "center"
                                },
                                secondary: true,
                                children: [
                                    "answered by ",
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $bd15c6a8cc4c521c$export$2e2bcd8739ae039), {
                                        x: userReplyCount
                                    }),
                                    " people"
                                ]
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialShare))), {
                                sx: {
                                    marginLeft: "10px",
                                    cursor: "pointer"
                                },
                                onClick: share
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                style: {
                    position: "absolute",
                    bottom: totalAnswerCount === 0 ? 16 : 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    !yourOwnQuestion && !answer && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $f1e47e6b26821a24$export$2e2bcd8739ae039), {
                        style: {
                            maxWidth: 400,
                            width: "90%"
                        },
                        respond: respond || redirectToLogin
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).stats,
                        children: userReplyCount !== 0 && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).textContainer,
                                    children: [
                                        yesPercentage !== 0 && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).text,
                                            style: {
                                                width: `${yesPercentage}%`,
                                                position: "relative",
                                                display: "flex",
                                                gap: 12,
                                                bottom: 0,
                                                minWidth: 102
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("span", {
                                                    onClick: ()=>createNewGroup("yes"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "end"
                                                    },
                                                    children: [
                                                        yesPercentage,
                                                        "%"
                                                    ]
                                                }),
                                                answer?.toLowerCase() === "yes" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).imgWithArrow,
                                                    children: [
                                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).img,
                                                            src: userPictureUrl,
                                                            alt: "profile picture"
                                                        }),
                                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).arrowDown
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        noPercentage !== 0 && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $0c0daff811cd87d5$export$2e2bcd8739ae039), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).text,
                                            style: {
                                                width: `${noPercentage}%`,
                                                position: "relative",
                                                display: "flex",
                                                gap: 12,
                                                bottom: 0,
                                                minWidth: 102
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("span", {
                                                    onClick: ()=>createNewGroup("no"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "end"
                                                    },
                                                    children: [
                                                        noPercentage,
                                                        "%"
                                                    ]
                                                }),
                                                answer?.toLowerCase() === "no" && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).imgWithArrow,
                                                    children: [
                                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).img,
                                                            src: userPictureUrl,
                                                            alt: "profile picture"
                                                        }),
                                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).arrowDown
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $8582c2f99012abb8$export$2e2bcd8739ae039), {
                                    className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).bars, {
                                        [(0, (/*@__PURE__*/$parcel$interopDefault($c2fbc8df9c377569$exports))).barsMinWidth]: yesPercentage !== 0 && noPercentage !== 0
                                    }),
                                    yes: yesPercentage,
                                    no: noPercentage,
                                    onHover: setState,
                                    createNewGroup: createNewGroup
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
});





var $0d609a8d9427bfc2$exports = {};

$parcel$export($0d609a8d9427bfc2$exports, "btn", function () { return $0d609a8d9427bfc2$export$534219b709288da9; }, function (v) { return $0d609a8d9427bfc2$export$534219b709288da9 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "changeGroupBtn", function () { return $0d609a8d9427bfc2$export$e05a52e99661808; }, function (v) { return $0d609a8d9427bfc2$export$e05a52e99661808 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "chat", function () { return $0d609a8d9427bfc2$export$530dccc8e24f4e99; }, function (v) { return $0d609a8d9427bfc2$export$530dccc8e24f4e99 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "currentGroup", function () { return $0d609a8d9427bfc2$export$d066cbb5a8cab704; }, function (v) { return $0d609a8d9427bfc2$export$d066cbb5a8cab704 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "input", function () { return $0d609a8d9427bfc2$export$b7e3ae3d7c15e42e; }, function (v) { return $0d609a8d9427bfc2$export$b7e3ae3d7c15e42e = v; });
$parcel$export($0d609a8d9427bfc2$exports, "inputGroup", function () { return $0d609a8d9427bfc2$export$995e14ef61d916e6; }, function (v) { return $0d609a8d9427bfc2$export$995e14ef61d916e6 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "message", function () { return $0d609a8d9427bfc2$export$a8ecead220dd38a6; }, function (v) { return $0d609a8d9427bfc2$export$a8ecead220dd38a6 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "messageBoard", function () { return $0d609a8d9427bfc2$export$af8c1666bc2bbdc3; }, function (v) { return $0d609a8d9427bfc2$export$af8c1666bc2bbdc3 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "mine", function () { return $0d609a8d9427bfc2$export$25c810edd2c6953a; }, function (v) { return $0d609a8d9427bfc2$export$25c810edd2c6953a = v; });
$parcel$export($0d609a8d9427bfc2$exports, "notMine", function () { return $0d609a8d9427bfc2$export$16cf7ecddabb39f4; }, function (v) { return $0d609a8d9427bfc2$export$16cf7ecddabb39f4 = v; });
$parcel$export($0d609a8d9427bfc2$exports, "picture", function () { return $0d609a8d9427bfc2$export$1188214e9d38144e; }, function (v) { return $0d609a8d9427bfc2$export$1188214e9d38144e = v; });
$parcel$export($0d609a8d9427bfc2$exports, "top", function () { return $0d609a8d9427bfc2$export$1e95b668f3b82d; }, function (v) { return $0d609a8d9427bfc2$export$1e95b668f3b82d = v; });
var $0d609a8d9427bfc2$export$534219b709288da9;
var $0d609a8d9427bfc2$export$e05a52e99661808;
var $0d609a8d9427bfc2$export$530dccc8e24f4e99;
var $0d609a8d9427bfc2$export$d066cbb5a8cab704;
var $0d609a8d9427bfc2$export$b7e3ae3d7c15e42e;
var $0d609a8d9427bfc2$export$995e14ef61d916e6;
var $0d609a8d9427bfc2$export$a8ecead220dd38a6;
var $0d609a8d9427bfc2$export$af8c1666bc2bbdc3;
var $0d609a8d9427bfc2$export$25c810edd2c6953a;
var $0d609a8d9427bfc2$export$16cf7ecddabb39f4;
var $0d609a8d9427bfc2$export$1188214e9d38144e;
var $0d609a8d9427bfc2$export$1e95b668f3b82d;
$0d609a8d9427bfc2$export$534219b709288da9 = `svA8qW_btn`;
$0d609a8d9427bfc2$export$e05a52e99661808 = `svA8qW_changeGroupBtn`;
$0d609a8d9427bfc2$export$530dccc8e24f4e99 = `svA8qW_chat`;
$0d609a8d9427bfc2$export$d066cbb5a8cab704 = `svA8qW_currentGroup`;
$0d609a8d9427bfc2$export$b7e3ae3d7c15e42e = `svA8qW_input`;
$0d609a8d9427bfc2$export$995e14ef61d916e6 = `svA8qW_inputGroup`;
$0d609a8d9427bfc2$export$a8ecead220dd38a6 = `svA8qW_message`;
$0d609a8d9427bfc2$export$af8c1666bc2bbdc3 = `svA8qW_messageBoard`;
$0d609a8d9427bfc2$export$25c810edd2c6953a = `svA8qW_mine`;
$0d609a8d9427bfc2$export$16cf7ecddabb39f4 = `svA8qW_notMine`;
$0d609a8d9427bfc2$export$1188214e9d38144e = `svA8qW_picture`;
$0d609a8d9427bfc2$export$1e95b668f3b82d = `svA8qW_top`;


const $3b6481aeb3d94781$var$defaultGroup = {
    name: "You",
    peopleCount: 10,
    id: 1
};
const $3b6481aeb3d94781$export$125e71c614a0b114 = ({ messages: messages, sendMessage: sendMessage, onUserClick: onUserClick, currentGroup: currentGroup = $3b6481aeb3d94781$var$defaultGroup, changeGroup: changeGroup })=>{
    const [value, setValue] = (0, $ej8CT$react.useState)("");
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).chat,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).top,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).currentGroup,
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("b", {
                                children: currentGroup.name
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                        children: "people count: "
                                    }),
                                    currentGroup.peopleCount
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).changeGroupBtn,
                        onClick: changeGroup,
                        children: "change group"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).messageBoard,
                children: messages.map((msg, index)=>/*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                        className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).message, {
                            [(0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).mine]: msg.mine,
                            [(0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).notMine]: !msg.mine
                        }),
                        children: [
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                                onClick: ()=>onUserClick(msg.username),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).picture,
                                src: msg.pictureUrl
                            }),
                            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                children: msg.text
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).inputGroup,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("textarea", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).input,
                        value: value,
                        onChange: ({ target: { value: value } })=>setValue(value)
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($0d609a8d9427bfc2$exports))).btn,
                        onClick: sendMessage,
                        children: "Send"
                    })
                ]
            })
        ]
    });
};







var $57428859b88ac53d$exports = {};
$57428859b88ac53d$exports = "<svg width=\"252\" height=\"252\" viewBox=\"0 0 252 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<mask id=\"mask0_4864_1939\" style=\"mask-type: luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"252\" height=\"252\">\r\n<path d=\"M125.999 251.394C195.253 251.394 251.393 195.253 251.393 126C251.393 56.7468 195.253 0.606079 125.999 0.606079C56.7462 0.606079 0.605469 56.7468 0.605469 126C0.605469 195.253 56.7462 251.394 125.999 251.394Z\" fill=\"white\"></path>\r\n</mask>\r\n<g mask=\"url('#mask0_4864_1939')\">\r\n<path d=\"M263.267 -11.2672H-11.2676V263.267H263.267V-11.2672Z\" fill=\"url('#paint0_linear_4864_1939')\"></path>\r\n</g>\r\n<path d=\"M162.264 153.059L197.741 132.574C199.62 131.489 200.782 129.471 200.782 127.301V86.3354C200.782 84.1696 199.615 82.1472 197.741 81.0618L162.264 60.5767C160.385 59.4912 158.056 59.4964 156.177 60.5767L120.7 81.0618C118.821 82.1472 117.659 84.1696 117.659 86.3354V159.546L92.781 173.908L67.9029 159.546V130.818L92.781 116.456L109.191 125.928V106.657L95.8222 98.9408C94.9006 98.4084 93.8459 98.1268 92.7758 98.1268C91.7058 98.1268 90.651 98.4084 89.7346 98.9408L54.2581 119.426C52.379 120.511 51.2168 122.529 51.2168 124.7V165.665C51.2168 167.83 52.3842 169.853 54.2581 170.938L89.7346 191.423C91.6085 192.504 93.9432 192.504 95.8222 191.423L131.299 170.943C133.178 169.858 134.34 167.836 134.34 165.67V92.4589L134.791 92.2029L159.218 78.0973L184.096 92.4589V121.187L159.218 135.549L142.834 126.087V145.359L156.177 153.064C158.056 154.145 160.385 154.145 162.264 153.064V153.059Z\" fill=\"white\"></path>\r\n<defs>\r\n<linearGradient id=\"paint0_linear_4864_1939\" x1=\"-61.4385\" y1=\"11.2966\" x2=\"221.974\" y2=\"184.732\" gradientUnits=\"userSpaceOnUse\">\r\n<stop stop-color=\"#A229C5\"></stop>\r\n<stop offset=\"1\" stop-color=\"#7B3FE4\"></stop>\r\n</linearGradient>\r\n</defs>\r\n</svg>\r\n";


var $772986cf73e5b79d$exports = {};

$parcel$export($772986cf73e5b79d$exports, "additional-text", function () { return $772986cf73e5b79d$export$202e93cb7fe09fc8; }, function (v) { return $772986cf73e5b79d$export$202e93cb7fe09fc8 = v; });
$parcel$export($772986cf73e5b79d$exports, "coin", function () { return $772986cf73e5b79d$export$3c9d1e4131afeeb8; }, function (v) { return $772986cf73e5b79d$export$3c9d1e4131afeeb8 = v; });
$parcel$export($772986cf73e5b79d$exports, "coin--animated", function () { return $772986cf73e5b79d$export$9fb4f45ed9e347e0; }, function (v) { return $772986cf73e5b79d$export$9fb4f45ed9e347e0 = v; });
$parcel$export($772986cf73e5b79d$exports, "coin-x-axis", function () { return $772986cf73e5b79d$export$a729607373715201; }, function (v) { return $772986cf73e5b79d$export$a729607373715201 = v; });
$parcel$export($772986cf73e5b79d$exports, "coin-y-axis-and-flip", function () { return $772986cf73e5b79d$export$4079574a46612420; }, function (v) { return $772986cf73e5b79d$export$4079574a46612420 = v; });
$parcel$export($772986cf73e5b79d$exports, "icon", function () { return $772986cf73e5b79d$export$1ca1ec8b29a4ce27; }, function (v) { return $772986cf73e5b79d$export$1ca1ec8b29a4ce27 = v; });
$parcel$export($772986cf73e5b79d$exports, "icons", function () { return $772986cf73e5b79d$export$df03f54e09e486fa; }, function (v) { return $772986cf73e5b79d$export$df03f54e09e486fa = v; });
$parcel$export($772986cf73e5b79d$exports, "landing", function () { return $772986cf73e5b79d$export$a9ae88069d8ac14e; }, function (v) { return $772986cf73e5b79d$export$a9ae88069d8ac14e = v; });
$parcel$export($772986cf73e5b79d$exports, "landing-button", function () { return $772986cf73e5b79d$export$f282e5191b337f50; }, function (v) { return $772986cf73e5b79d$export$f282e5191b337f50 = v; });
$parcel$export($772986cf73e5b79d$exports, "made-by", function () { return $772986cf73e5b79d$export$101a475b15c86041; }, function (v) { return $772986cf73e5b79d$export$101a475b15c86041 = v; });
$parcel$export($772986cf73e5b79d$exports, "mobile-second-text", function () { return $772986cf73e5b79d$export$9b4a162e4d9f672; }, function (v) { return $772986cf73e5b79d$export$9b4a162e4d9f672 = v; });
$parcel$export($772986cf73e5b79d$exports, "name", function () { return $772986cf73e5b79d$export$a8ff84c12d48cfa6; }, function (v) { return $772986cf73e5b79d$export$a8ff84c12d48cfa6 = v; });
$parcel$export($772986cf73e5b79d$exports, "open-app-button", function () { return $772986cf73e5b79d$export$ae608c4430a9e9fc; }, function (v) { return $772986cf73e5b79d$export$ae608c4430a9e9fc = v; });
$parcel$export($772986cf73e5b79d$exports, "privacy", function () { return $772986cf73e5b79d$export$116a08ee153e3bde; }, function (v) { return $772986cf73e5b79d$export$116a08ee153e3bde = v; });
$parcel$export($772986cf73e5b79d$exports, "scroll", function () { return $772986cf73e5b79d$export$209876d7b1ac8f3; }, function (v) { return $772986cf73e5b79d$export$209876d7b1ac8f3 = v; });
$parcel$export($772986cf73e5b79d$exports, "scrollIcon", function () { return $772986cf73e5b79d$export$efb197c1da01f76f; }, function (v) { return $772986cf73e5b79d$export$efb197c1da01f76f = v; });
$parcel$export($772986cf73e5b79d$exports, "scrollText", function () { return $772986cf73e5b79d$export$b21f6e6a6b9fbbc5; }, function (v) { return $772986cf73e5b79d$export$b21f6e6a6b9fbbc5 = v; });
$parcel$export($772986cf73e5b79d$exports, "scrollWheel", function () { return $772986cf73e5b79d$export$594daf8f7b4e7e32; }, function (v) { return $772986cf73e5b79d$export$594daf8f7b4e7e32 = v; });
$parcel$export($772986cf73e5b79d$exports, "search-modal", function () { return $772986cf73e5b79d$export$2fd0fffb18ebb0c0; }, function (v) { return $772986cf73e5b79d$export$2fd0fffb18ebb0c0 = v; });
$parcel$export($772986cf73e5b79d$exports, "second-text-container", function () { return $772986cf73e5b79d$export$891c99f874761757; }, function (v) { return $772986cf73e5b79d$export$891c99f874761757 = v; });
$parcel$export($772986cf73e5b79d$exports, "slides", function () { return $772986cf73e5b79d$export$59de61ccd1a8a2d9; }, function (v) { return $772986cf73e5b79d$export$59de61ccd1a8a2d9 = v; });
$parcel$export($772986cf73e5b79d$exports, "smaller", function () { return $772986cf73e5b79d$export$3f732695c1493aec; }, function (v) { return $772986cf73e5b79d$export$3f732695c1493aec = v; });
$parcel$export($772986cf73e5b79d$exports, "subtitle", function () { return $772986cf73e5b79d$export$c96745152eb2740f; }, function (v) { return $772986cf73e5b79d$export$c96745152eb2740f = v; });
$parcel$export($772986cf73e5b79d$exports, "svgWrapper", function () { return $772986cf73e5b79d$export$e5459a6f92d1eda8; }, function (v) { return $772986cf73e5b79d$export$e5459a6f92d1eda8 = v; });
$parcel$export($772986cf73e5b79d$exports, "text", function () { return $772986cf73e5b79d$export$6f093cfa640b7166; }, function (v) { return $772986cf73e5b79d$export$6f093cfa640b7166 = v; });
var $772986cf73e5b79d$export$202e93cb7fe09fc8;
var $772986cf73e5b79d$export$3c9d1e4131afeeb8;
var $772986cf73e5b79d$export$9fb4f45ed9e347e0;
var $772986cf73e5b79d$export$a729607373715201;
var $772986cf73e5b79d$export$4079574a46612420;
var $772986cf73e5b79d$export$1ca1ec8b29a4ce27;
var $772986cf73e5b79d$export$df03f54e09e486fa;
var $772986cf73e5b79d$export$a9ae88069d8ac14e;
var $772986cf73e5b79d$export$f282e5191b337f50;
var $772986cf73e5b79d$export$101a475b15c86041;
var $772986cf73e5b79d$export$9b4a162e4d9f672;
var $772986cf73e5b79d$export$a8ff84c12d48cfa6;
var $772986cf73e5b79d$export$ae608c4430a9e9fc;
var $772986cf73e5b79d$export$116a08ee153e3bde;
var $772986cf73e5b79d$export$209876d7b1ac8f3;
var $772986cf73e5b79d$export$efb197c1da01f76f;
var $772986cf73e5b79d$export$b21f6e6a6b9fbbc5;
var $772986cf73e5b79d$export$594daf8f7b4e7e32;
var $772986cf73e5b79d$export$2fd0fffb18ebb0c0;
var $772986cf73e5b79d$export$891c99f874761757;
var $772986cf73e5b79d$export$59de61ccd1a8a2d9;
var $772986cf73e5b79d$export$3f732695c1493aec;
var $772986cf73e5b79d$export$c96745152eb2740f;
var $772986cf73e5b79d$export$e5459a6f92d1eda8;
var $772986cf73e5b79d$export$6f093cfa640b7166;
$772986cf73e5b79d$export$202e93cb7fe09fc8 = `YjWlYa_additional-text`;
$772986cf73e5b79d$export$3c9d1e4131afeeb8 = `YjWlYa_coin`;
$772986cf73e5b79d$export$9fb4f45ed9e347e0 = `YjWlYa_coin--animated`;
$772986cf73e5b79d$export$a729607373715201 = `YjWlYa_coin-x-axis`;
$772986cf73e5b79d$export$a729607373715201;
$772986cf73e5b79d$export$4079574a46612420 = `YjWlYa_coin-y-axis-and-flip`;
$772986cf73e5b79d$export$4079574a46612420;
$772986cf73e5b79d$export$1ca1ec8b29a4ce27 = `YjWlYa_icon`;
$772986cf73e5b79d$export$df03f54e09e486fa = `YjWlYa_icons`;
$772986cf73e5b79d$export$a9ae88069d8ac14e = `YjWlYa_landing`;
$772986cf73e5b79d$export$f282e5191b337f50 = `YjWlYa_landing-button`;
$772986cf73e5b79d$export$101a475b15c86041 = `YjWlYa_made-by`;
$772986cf73e5b79d$export$9b4a162e4d9f672 = `YjWlYa_mobile-second-text`;
$772986cf73e5b79d$export$a8ff84c12d48cfa6 = `YjWlYa_name`;
$772986cf73e5b79d$export$ae608c4430a9e9fc = `YjWlYa_open-app-button`;
$772986cf73e5b79d$export$116a08ee153e3bde = `YjWlYa_privacy`;
$772986cf73e5b79d$export$209876d7b1ac8f3 = `YjWlYa_scroll`;
$772986cf73e5b79d$export$efb197c1da01f76f = `YjWlYa_scrollIcon`;
$772986cf73e5b79d$export$b21f6e6a6b9fbbc5 = `YjWlYa_scrollText`;
$772986cf73e5b79d$export$b21f6e6a6b9fbbc5;
$772986cf73e5b79d$export$594daf8f7b4e7e32 = `YjWlYa_scrollWheel`;
$772986cf73e5b79d$export$594daf8f7b4e7e32;
$772986cf73e5b79d$export$2fd0fffb18ebb0c0 = `YjWlYa_search-modal`;
$772986cf73e5b79d$export$891c99f874761757 = `YjWlYa_second-text-container`;
$772986cf73e5b79d$export$59de61ccd1a8a2d9 = `YjWlYa_slides`;
$772986cf73e5b79d$export$3f732695c1493aec = `YjWlYa_smaller`;
$772986cf73e5b79d$export$c96745152eb2740f = `YjWlYa_subtitle`;
$772986cf73e5b79d$export$e5459a6f92d1eda8 = `YjWlYa_svgWrapper`;
$772986cf73e5b79d$export$6f093cfa640b7166 = `YjWlYa_text`;


const $2d698786ec22a21a$export$12449a31c6671d53 = /*#__PURE__*/ (0, $ej8CT$react.forwardRef)(({ jwt: jwt, isBot: isBot, description: description, title: title }, ref)=>{
    // useEffect(() => {
    //   document.querySelector('body > div > div').style['max-height'] = 'unset'
    //   document.querySelector('body > div > div').style['min-height'] = 'unset'
    //   return () => {
    //     document.querySelector('body > div > div').style['max-height'] = '100svh'
    //     document.querySelector('body > div > div').style['min-height'] = '100svh'
    //   }
    // }, [])
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactjsxruntime.Fragment), {
        children: [
            title && isBot ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reacthelmet.Helmet), {
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("meta", {
                        name: "keywords",
                        content: title + ", create polls, online surveys, interactive voting"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("title", {
                        children: title
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("script", {
                        type: "application/ld+json",
                        children: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: title,
                            description: description,
                            url: `https://poll.cc/${title.replace(/\s+/g, "-").toLowerCase()}`
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reacthelmet.Helmet), {
                encodeSpecialCharacters: false,
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("title", {
                        children: "poll.cc | online polls"
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("meta", {
                        name: "description",
                        content: "Online polls on social and political issues. Online voting app."
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("script", {
                        type: "application/ld+json",
                        children: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "poll.cc | online polls",
                            description: "Online polls on social and political issues. Online voting app.",
                            url: "https://poll.cc/"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).slides,
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                    ref: ref,
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).landing,
                    children: [
                        isBot ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("section", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).text,
                            style: {
                                fontSize: 39,
                                padding: "0 41px"
                            },
                            children: [
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h1", {
                                    children: title
                                }),
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("p", {
                                    children: description
                                })
                            ]
                        }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).text,
                            children: [
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h1", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).name,
                                    children: "Non-anonymous online voting"
                                }),
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("h2", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).subtitle,
                                    children: "on social and political issues."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)((0, $ej8CT$reactrouterdom.Link), {
                            replace: true,
                            to: jwt ? "/" : "/app",
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports)))["open-app-button"],
                            children: [
                                "Open App ",
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialArrowForwardIos))), {
                                    sx: {
                                        marginLeft: "15px",
                                        fontSize: 20
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).icons,
                            children: [
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports)))["made-by"],
                                    children: [
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                            style: {
                                                fontSize: 15
                                            },
                                            children: "made by"
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("a", {
                                            href: "mailto:piliponful@gmail.com",
                                            children: "piliponful"
                                        })
                                    ]
                                }),
                                window.featureFlags?.rewards && /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).svgWrapper,
                                            dangerouslySetInnerHTML: {
                                                __html: (0, (/*@__PURE__*/$parcel$interopDefault($57428859b88ac53d$exports)))
                                            }
                                        }),
                                        /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("a", {
                                            style: {
                                                fontSize: 15,
                                                letterSpacing: "0px",
                                                textDecoration: "none",
                                                color: "gray",
                                                fontWeight: 200,
                                                whiteSpace: "nowrap"
                                            },
                                            target: "_blank",
                                            href: "https://polygonscan.com/token/0x080376D131E2036feF1D321490cF178A3bEEA805",
                                            rel: "noreferrer",
                                            children: "token on polyscan"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($772986cf73e5b79d$exports))).privacy,
                                    children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("a", {
                                        href: "/privacy-policy",
                                        target: "_blank",
                                        children: "privacy policy"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
});













var $2c5e116eee7a3268$exports = {};

$parcel$export($2c5e116eee7a3268$exports, "active", function () { return $2c5e116eee7a3268$export$89da14300d534261; }, function (v) { return $2c5e116eee7a3268$export$89da14300d534261 = v; });
$parcel$export($2c5e116eee7a3268$exports, "avatar", function () { return $2c5e116eee7a3268$export$345c5736c8054f22; }, function (v) { return $2c5e116eee7a3268$export$345c5736c8054f22 = v; });
$parcel$export($2c5e116eee7a3268$exports, "leftbar", function () { return $2c5e116eee7a3268$export$c8f087dc1b8e16ac; }, function (v) { return $2c5e116eee7a3268$export$c8f087dc1b8e16ac = v; });
$parcel$export($2c5e116eee7a3268$exports, "nav-icons", function () { return $2c5e116eee7a3268$export$2eded710494fe2d7; }, function (v) { return $2c5e116eee7a3268$export$2eded710494fe2d7 = v; });
$parcel$export($2c5e116eee7a3268$exports, "nav-item", function () { return $2c5e116eee7a3268$export$f0e24ade441c6754; }, function (v) { return $2c5e116eee7a3268$export$f0e24ade441c6754 = v; });
var $2c5e116eee7a3268$export$89da14300d534261;
var $2c5e116eee7a3268$export$345c5736c8054f22;
var $2c5e116eee7a3268$export$c8f087dc1b8e16ac;
var $2c5e116eee7a3268$export$2eded710494fe2d7;
var $2c5e116eee7a3268$export$f0e24ade441c6754;
$2c5e116eee7a3268$export$89da14300d534261 = `canA9G_active`;
$2c5e116eee7a3268$export$345c5736c8054f22 = `canA9G_avatar`;
$2c5e116eee7a3268$export$c8f087dc1b8e16ac = `canA9G_leftbar`;
$2c5e116eee7a3268$export$2eded710494fe2d7 = `canA9G_nav-icons`;
$2c5e116eee7a3268$export$f0e24ade441c6754 = `canA9G_nav-item`;


const $190faa6448d3114c$export$750f17c514384ccf = ({ user: user, showMyHistory: showMyHistory })=>{
    const { setShowGroups: setShowGroups, showGroups: showGroups, setShowSearchMenu: setShowSearchMenu, showSearchMenu: showSearchMenu, setIsLoginModalOpen: setIsLoginModalOpen, screenName: screenName } = (0, $ej8CT$react.useContext)((0, $dc2bc6bb05cca233$export$32c650b79baf5fee));
    const [isHovered, setIsHovered] = (0, $ej8CT$react.useState)(false);
    const isMobile = (0, $ej8CT$reactresponsive.useMediaQuery)({
        query: "(max-width: 925px)"
    });
    const navigate = (0, $ej8CT$reactrouterdom.useNavigate)();
    return /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports))).leftbar,
        children: [
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsxs)("nav", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports)))["nav-icons"],
                children: [
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$reactrouterdom.Link), {
                        to: user ? "/" : "/app",
                        style: {
                            lineHeight: 1
                        },
                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                            onClick: ()=>{
                                if (screenName && showGroups) setShowGroups(false);
                            },
                            className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports)))["nav-item"], {
                                [(0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports))).active]: screenName && showGroups ? false : location?.pathname === "/" || location?.pathname === "/app"
                            }),
                            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialHome))), {
                                sx: {
                                    fill: "#aaa"
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                        content: "Groups",
                        placement: "right",
                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                            onMouseEnter: ()=>setIsHovered(true),
                            onMouseLeave: ()=>setIsHovered(false),
                            className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports)))["nav-item"], {
                                [(0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports))).active]: showGroups
                            }),
                            style: {
                                padding: 6
                            },
                            onClick: ()=>{
                                if (location.pathname !== "/") navigate(user ? "/" : "/app");
                                setShowGroups((state)=>!state);
                                setShowSearchMenu(false);
                            },
                            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $2d58bef5b89e680e$export$2e2bcd8739ae039), {
                                myHover: showGroups || isHovered,
                                groupMode: showGroups,
                                fill: "#aaa"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                        content: "Search",
                        placement: "right",
                        children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("button", {
                            className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports)))["nav-item"], {
                                [(0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports))).active]: showSearchMenu
                            }),
                            onClick: (e)=>{
                                e.stopPropagation();
                                if (location.pathname !== "/") navigate(user ? "/" : "/app");
                                setShowSearchMenu((state)=>!state);
                                setShowGroups(false);
                            },
                            children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialSearch))), {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("div", {
                className: (0, ($parcel$interopDefault($ej8CT$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports)))["nav-item"], (0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports))).avatar, (0, (/*@__PURE__*/$parcel$interopDefault($2c5e116eee7a3268$exports)))["bottom-avatar"]),
                style: {
                    marginLeft: isMobile ? 15 : 0
                },
                children: /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, $ej8CT$herouitooltip.Tooltip), {
                    content: user?.pictureUrl ? "Your profile" : "Login",
                    placement: "right",
                    children: user?.pictureUrl ? /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)("img", {
                        src: user?.pictureUrl,
                        alt: "User",
                        onClick: showMyHistory,
                        style: {
                            borderRadius: "50%",
                            padding: 5
                        }
                    }) : /*#__PURE__*/ (0, $ej8CT$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ej8CT$muiiconsmaterialPerson))), {
                        sx: {
                            fontSize: 32
                        },
                        onClick: ()=>{
                            setIsLoginModalOpen(true);
                        }
                    })
                })
            })
        ]
    });
};





var $f65af04dce098364$export$2e2bcd8739ae039 = {
    shallow: {
        Body: $dc2bc6bb05cca233$export$2e2bcd8739ae039,
        GroupsContainer: $87c4b9b19c7baeb7$export$2e2bcd8739ae039,
        MainScreen: $5919f0ec1fc4795e$export$2e2bcd8739ae039,
        Sidebar: $62ea05920fed7969$export$2e2bcd8739ae039,
        QuestionCardsRow: $6d1d718d25303e4e$export$2e2bcd8739ae039,
        Landing: $2d698786ec22a21a$export$12449a31c6671d53
    },
    leafs: {
        Circles: $a70e90c8c76b75d0$export$2e2bcd8739ae039,
        GroupCard: $bb473358400637b0$export$2e2bcd8739ae039,
        QuestionCard: $526fe0560e42c3bb$export$2e2bcd8739ae039,
        NewQuestion: $dfd63da8863e7b92$export$2e2bcd8739ae039,
        ActionsPanel: $2f1a7af5ffd4a24b$export$2e2bcd8739ae039,
        GroupContentScreen: $5b79cef2b514f9cb$export$2e2bcd8739ae039,
        UserHistoryTabs: $ce9e9d8a0ac00354$export$522e89d0fa1200f4,
        UserQuestionsHistory: $ce9e9d8a0ac00354$export$6241fe9ea73c6c74,
        Search: $013477f3d88ad868$export$2e2bcd8739ae039,
        QuestionsSearch: $9d276b6dc1806f5d$export$2e2bcd8739ae039,
        UsersSearch: $bd942b430f1fa126$export$2e2bcd8739ae039,
        SortQuestions: $a67a79ca44016109$export$f8fcd3a81add9e17,
        UserAnswerDifferences: $ce9e9d8a0ac00354$export$a6816b34ad549b0,
        Question: $098837977bfcd70d$export$38435c7d2fecd2f,
        ChatBlock: $3b6481aeb3d94781$export$125e71c614a0b114,
        LeftMenuBar: $190faa6448d3114c$export$750f17c514384ccf,
        VennDiagram: $2d58bef5b89e680e$export$2e2bcd8739ae039
    },
    context: {
        MainScreenSwipeContext: $dc2bc6bb05cca233$export$32c650b79baf5fee
    }
};


//# sourceMappingURL=main.js.map
