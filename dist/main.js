require("./main.css");
var $a3U2C$reactjsxruntime = require("react/jsx-runtime");
var $a3U2C$react = require("react");
var $a3U2C$lodash = require("lodash");
var $a3U2C$classnames = require("classnames");
var $a3U2C$herouireact = require("@heroui/react");
var $a3U2C$reactspinnersBeatLoader = require("react-spinners/BeatLoader");
var $a3U2C$reactmodal = require("react-modal");
var $a3U2C$muiiconsmaterialClose = require("@mui/icons-material/Close");
var $a3U2C$reactoauthgoogle = require("@react-oauth/google");
var $a3U2C$jwtdecode = require("jwt-decode");
var $a3U2C$muiiconsmaterialX = require("@mui/icons-material/X");
var $a3U2C$reactswipeable = require("react-swipeable");
var $a3U2C$reactdetectclickoutside = require("react-detect-click-outside");
var $a3U2C$muiiconsmaterialSettings = require("@mui/icons-material/Settings");
var $a3U2C$sumsubwebsdkreact = require("@sumsub/websdk-react");
var $a3U2C$axios = require("axios");
var $a3U2C$fortawesomereactfontawesome = require("@fortawesome/react-fontawesome");
var $a3U2C$fortawesomefreesolidsvgicons = require("@fortawesome/free-solid-svg-icons");
var $a3U2C$muiiconsmaterialOpenInNew = require("@mui/icons-material/OpenInNew");
var $a3U2C$muiiconsmaterialShare = require("@mui/icons-material/Share");
var $a3U2C$datefns = require("date-fns");
var $a3U2C$muiiconsmaterialChatBubble = require("@mui/icons-material/ChatBubble");
var $a3U2C$herouitooltip = require("@heroui/tooltip");
var $a3U2C$reactresponsive = require("react-responsive");
var $a3U2C$muiiconsmaterialImage = require("@mui/icons-material/Image");
var $a3U2C$humannumber = require("human-number");
var $a3U2C$reactinfinitescrollcomponent = require("react-infinite-scroll-component");
var $a3U2C$reactflipmove = require("react-flip-move");
var $a3U2C$muiiconsmaterialLink = require("@mui/icons-material/Link");
var $a3U2C$muiiconsmaterialLogout = require("@mui/icons-material/Logout");
var $a3U2C$muiiconsmaterialArrowBack = require("@mui/icons-material/ArrowBack");
var $a3U2C$muiiconsmaterialExpandMore = require("@mui/icons-material/ExpandMore");
var $a3U2C$muiiconsmaterialSearch = require("@mui/icons-material/Search");
var $a3U2C$handlebars = require("handlebars");
var $a3U2C$reactrouterdom = require("react-router-dom");
var $a3U2C$reacthelmet = require("react-helmet");
var $a3U2C$muiiconsmaterialArrowForwardIos = require("@mui/icons-material/ArrowForwardIos");
var $a3U2C$muiiconsmaterialPerson = require("@mui/icons-material/Person");
var $a3U2C$muiiconsmaterialHome = require("@mui/icons-material/Home");


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

$parcel$export(module.exports, "default", function () { return $0079a596950cb70e$export$2e2bcd8739ae039; });
/* eslint-disable */ 







var $be7a050cd57809d4$exports = {};

$parcel$export($be7a050cd57809d4$exports, "text", function () { return $be7a050cd57809d4$export$6f093cfa640b7166; }, function (v) { return $be7a050cd57809d4$export$6f093cfa640b7166 = v; });
var $be7a050cd57809d4$export$6f093cfa640b7166;
$be7a050cd57809d4$export$6f093cfa640b7166 = `cpUP9G_text`;


var $3faaf67f4ad0d2f4$export$2e2bcd8739ae039 = ({ children: children, className: className, style: style, id: id, onClick: onClick, h1: h1 = false })=>{
    if (h1) return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h1", {
        onClick: onClick,
        id: id,
        style: style,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($be7a050cd57809d4$exports))).text),
        children: children
    });
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        onClick: onClick,
        id: id,
        style: style,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($be7a050cd57809d4$exports))).text),
        children: children
    });
};


var $0f73b88baf90fdb5$exports = {};

$parcel$export($0f73b88baf90fdb5$exports, "hint", function () { return $0f73b88baf90fdb5$export$464c821cd4347539; }, function (v) { return $0f73b88baf90fdb5$export$464c821cd4347539 = v; });
var $0f73b88baf90fdb5$export$464c821cd4347539;
$0f73b88baf90fdb5$export$464c821cd4347539 = `cgk2sG_hint`;


var $21642cccaffabc36$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups, selectedCircleParts: selectedCircleParts })=>{
    const lengthToHint = {
        1: '(select another group to continue)',
        2: '(click on area to select what goes to new group)'
    };
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($0f73b88baf90fdb5$exports))).hint,
        children: selectedCircleParts.length === 1 ? '(click on selected area again to deselect)' : lengthToHint[selectedGroups.length]
    });
};


var $a391297389115cdc$exports = {};

$parcel$export($a391297389115cdc$exports, "circles", function () { return $a391297389115cdc$export$c958aa0cc90a067; }, function (v) { return $a391297389115cdc$export$c958aa0cc90a067 = v; });
$parcel$export($a391297389115cdc$exports, "circlesContainer", function () { return $a391297389115cdc$export$293c75fa7ed5ee8d; }, function (v) { return $a391297389115cdc$export$293c75fa7ed5ee8d = v; });
var $a391297389115cdc$export$c958aa0cc90a067;
var $a391297389115cdc$export$293c75fa7ed5ee8d;
$a391297389115cdc$export$c958aa0cc90a067 = `dH2kZq_circles`;
$a391297389115cdc$export$293c75fa7ed5ee8d = `dH2kZq_circlesContainer`;


/* eslint-disable */ 

var $d45ca7718f90e485$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24b42",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#4db3e6",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#d24b42",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
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

var $05c36e78bc0c5dcd$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#3eb5f1",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24a43",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#3eb5f1",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
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

var $b8c0008178e5493d$export$2e2bcd8739ae039 = ()=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("ellipse", {
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

var $c8c8482d82ee612b$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("ellipse", {
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


const $8bbdb784fd810985$var$circlePartsToCompositionType = (circleParts)=>{
    if (circleParts.includes('intersection') && circleParts.length === 1) return 'intersection';
    if (circleParts.includes('leftWing') && circleParts.length === 1) return 'difference';
    if (circleParts.includes('rightWing') && circleParts.length === 1) return 'difference';
    if (circleParts.includes('rightWing') && circleParts.includes('leftWing') && circleParts.length === 2) return 'symmetric-difference';
    if ([
        'leftWing',
        'intersection',
        'rightWing'
    ].every((i)=>circleParts.includes(i))) return 'union';
    return null;
};
const $8bbdb784fd810985$var$isAllowedToClick = (element, partName)=>{
    const isElementSelected = element.attr('fillOpacity') === '1';
    if (isElementSelected) return true;
    return $8bbdb784fd810985$var$circlePartsToCompositionType([
        ...$8bbdb784fd810985$var$selectedParts,
        partName
    ]);
};
const $8bbdb784fd810985$var$setCursorStyle = (element, partName)=>{
    const allowedToClick = $8bbdb784fd810985$var$isAllowedToClick(element, partName);
    const newStyle = allowedToClick ? 'pointer' : 'not-allowed';
    element.attr({
        cursor: newStyle
    });
};
let $8bbdb784fd810985$var$selectedParts = [];
var $8bbdb784fd810985$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups, handleCompositionTypeChange: handleCompositionTypeChange })=>{
    const changeOpacity = (element, partName, parts)=>{
        if (!$8bbdb784fd810985$var$isAllowedToClick(element, partName)) return;
        const isElementSelected = element.attr('fillOpacity') === '1';
        element.attr({
            'fillOpacity': isElementSelected ? '0' : '1'
        });
        const newSelectedParts = isElementSelected ? $8bbdb784fd810985$var$selectedParts.filter((i)=>i !== partName) : [
            ...$8bbdb784fd810985$var$selectedParts,
            partName
        ];
        const newCompositionType = $8bbdb784fd810985$var$circlePartsToCompositionType(newSelectedParts);
        $8bbdb784fd810985$var$selectedParts = newSelectedParts;
        Object.entries(parts).forEach(([partName, element])=>$8bbdb784fd810985$var$setCursorStyle(element, partName));
        handleCompositionTypeChange($8bbdb784fd810985$var$selectedParts);
    };
    (0, $a3U2C$react.useEffect)(()=>{
        if (selectedGroups.length !== 2) return;
        const intersection = Snap('#intersection');
        const rightWing = Snap('#right-wing');
        const leftWing = Snap('#left-wing');
        const parts = {
            intersection: intersection,
            rightWing: rightWing,
            leftWing: leftWing
        };
        Object.entries(parts).forEach(([partName, element])=>element.click(()=>changeOpacity(element, partName, parts)));
    }, [
        selectedGroups.length
    ]);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($a391297389115cdc$exports))).circles,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($a391297389115cdc$exports))).circlesContainer,
                children: selectedGroups.length === 1 ? selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $c8c8482d82ee612b$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $b8c0008178e5493d$export$2e2bcd8739ae039), {}) : selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $05c36e78bc0c5dcd$export$2e2bcd8739ae039), {
                    style: {
                        cursor: 'pointer'
                    }
                }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $d45ca7718f90e485$export$2e2bcd8739ae039), {
                    style: {
                        cursor: 'pointer'
                    }
                })
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $21642cccaffabc36$export$2e2bcd8739ae039), {
                selectedGroups: selectedGroups,
                selectedCircleParts: $8bbdb784fd810985$var$selectedParts
            })
        ]
    });
};







var $31c9cf25f1f7f700$exports = {};

$parcel$export($31c9cf25f1f7f700$exports, "input", function () { return $31c9cf25f1f7f700$export$b7e3ae3d7c15e42e; }, function (v) { return $31c9cf25f1f7f700$export$b7e3ae3d7c15e42e = v; });
$parcel$export($31c9cf25f1f7f700$exports, "text", function () { return $31c9cf25f1f7f700$export$6f093cfa640b7166; }, function (v) { return $31c9cf25f1f7f700$export$6f093cfa640b7166 = v; });
var $31c9cf25f1f7f700$export$b7e3ae3d7c15e42e;
var $31c9cf25f1f7f700$export$6f093cfa640b7166;
$31c9cf25f1f7f700$export$b7e3ae3d7c15e42e = `_37fBDa_input`;
$31c9cf25f1f7f700$export$6f093cfa640b7166 = `_37fBDa_text`;


var $95424766a65cfd34$export$2e2bcd8739ae039 = ({ onTitleInput: onTitleInput, value: value })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c9cf25f1f7f700$exports))).text,
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("input", {
            placeholder: "Group name...",
            className: (0, (/*@__PURE__*/$parcel$interopDefault($31c9cf25f1f7f700$exports))).input,
            onChange: (e)=>onTitleInput(e.target.value),
            value: value
        })
    });












var $fdb8b86eaab7dc12$exports = {};

$parcel$export($fdb8b86eaab7dc12$exports, "button", function () { return $fdb8b86eaab7dc12$export$2ba01fb71ed41cb6; }, function (v) { return $fdb8b86eaab7dc12$export$2ba01fb71ed41cb6 = v; });
$parcel$export($fdb8b86eaab7dc12$exports, "loader", function () { return $fdb8b86eaab7dc12$export$f4c5de44377d2946; }, function (v) { return $fdb8b86eaab7dc12$export$f4c5de44377d2946 = v; });
var $fdb8b86eaab7dc12$export$2ba01fb71ed41cb6;
var $fdb8b86eaab7dc12$export$f4c5de44377d2946;
$fdb8b86eaab7dc12$export$2ba01fb71ed41cb6 = `_4WP3Da_button`;
$fdb8b86eaab7dc12$export$f4c5de44377d2946 = `_4WP3Da_loader`;


var $93940fbade29e7bb$export$2e2bcd8739ae039 = ({ children: children, className: className, onClick: onClick, disabled: disabled, loading: loading })=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
        disabled: Boolean(disabled),
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($fdb8b86eaab7dc12$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($fdb8b86eaab7dc12$exports))).loader]: loading
        }),
        onClick: onClick,
        children: loading ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactspinnersBeatLoader))), {
            color: "#ebedf2"
        }) : children
    });
};



var $1f34391d91c81e28$exports = {};

$parcel$export($1f34391d91c81e28$exports, "button", function () { return $1f34391d91c81e28$export$2ba01fb71ed41cb6; }, function (v) { return $1f34391d91c81e28$export$2ba01fb71ed41cb6 = v; });
$parcel$export($1f34391d91c81e28$exports, "nobold", function () { return $1f34391d91c81e28$export$a9c364a443888bb7; }, function (v) { return $1f34391d91c81e28$export$a9c364a443888bb7 = v; });
$parcel$export($1f34391d91c81e28$exports, "primary", function () { return $1f34391d91c81e28$export$9ad721cf3b3debe0; }, function (v) { return $1f34391d91c81e28$export$9ad721cf3b3debe0 = v; });
$parcel$export($1f34391d91c81e28$exports, "secondary", function () { return $1f34391d91c81e28$export$745c6f71a1e0e6f7; }, function (v) { return $1f34391d91c81e28$export$745c6f71a1e0e6f7 = v; });
var $1f34391d91c81e28$export$2ba01fb71ed41cb6;
var $1f34391d91c81e28$export$a9c364a443888bb7;
var $1f34391d91c81e28$export$9ad721cf3b3debe0;
var $1f34391d91c81e28$export$745c6f71a1e0e6f7;
$1f34391d91c81e28$export$2ba01fb71ed41cb6 = `DA0-4q_button`;
$1f34391d91c81e28$export$a9c364a443888bb7 = `DA0-4q_nobold`;
$1f34391d91c81e28$export$9ad721cf3b3debe0 = `DA0-4q_primary`;
$1f34391d91c81e28$export$745c6f71a1e0e6f7 = `DA0-4q_secondary`;


var $c14cd15d61961192$export$2e2bcd8739ae039 = ({ children: children, primary: primary, secondary: secondary, onClick: onClick, disabled: disabled, nobold: nobold })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $93940fbade29e7bb$export$2e2bcd8739ae039), {
        disabled: disabled,
        onClick: onClick,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($1f34391d91c81e28$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($1f34391d91c81e28$exports))).primary]: primary,
            [(0, (/*@__PURE__*/$parcel$interopDefault($1f34391d91c81e28$exports))).secondary]: secondary,
            [(0, (/*@__PURE__*/$parcel$interopDefault($1f34391d91c81e28$exports))).nobold]: nobold
        }),
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
            children: children
        })
    });














var $d4088d76daf352a5$exports = {};

$parcel$export($d4088d76daf352a5$exports, "container", function () { return $d4088d76daf352a5$export$34e0f9847d4c02dd; }, function (v) { return $d4088d76daf352a5$export$34e0f9847d4c02dd = v; });
var $d4088d76daf352a5$export$34e0f9847d4c02dd;
$d4088d76daf352a5$export$34e0f9847d4c02dd = `on7ZoW_container`;


// eslint-disable-next-line no-extend-native
Number.prototype.mod = function(n) {
    return (this % n + n) % n;
};
const $45370652b5163d21$var$screens = [
    {
        name: 'groups',
        index: 0
    },
    {
        name: 'groupContent',
        index: 1
    },
    {
        name: 'questions',
        index: 2
    }
];
var $45370652b5163d21$export$2e2bcd8739ae039 = ({ children: children })=>{
    const value = (0, $a3U2C$react.useContext)((0, $d76f51c1c8726ad5$export$32c650b79baf5fee));
    const [swipeCount, setSwipeCount] = (0, $a3U2C$react.useState)(2);
    const screenBySwipeCount = Object.fromEntries(Object.entries($45370652b5163d21$var$screens.filter((i)=>value.skipScreen ? !value.skipScreen.includes(i.name) : true)));
    const handlers = (0, $a3U2C$reactswipeable.useSwipeable)({
        onSwiped: (eventData)=>{
            if (Object.keys(screenBySwipeCount).length === 0) return;
            // if (eventData.dir === 'Right' || eventData.dir === 'Left') {
            //   const plus = (eventData.dir === 'Left' ? 1 : (-1))
            //   const newSwipeCount = (swipeCount + plus).mod(Object.values(screenBySwipeCount).length)
            //   setSwipeCount(newSwipeCount)
            //   value.toggleScreen(screenBySwipeCount[newSwipeCount].name)
            // }
            if (eventData.dir === 'Right') value.setShowSearch(true);
            if (eventData.dir === 'Left') value.setShowSearch(false);
        },
        delta: 40,
        preventDefaultTouchmoveEvent: true
    });
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("main", {
        ...handlers,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($d4088d76daf352a5$exports))).container,
        children: children
    });
};
const $45370652b5163d21$export$97295e60e7f371e1 = ({ children: children })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("main", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($d4088d76daf352a5$exports))).container,
        children: children
    });













var $d08dad8214e4e59f$exports = {};

$parcel$export($d08dad8214e4e59f$exports, "container", function () { return $d08dad8214e4e59f$export$34e0f9847d4c02dd; }, function (v) { return $d08dad8214e4e59f$export$34e0f9847d4c02dd = v; });
$parcel$export($d08dad8214e4e59f$exports, "divider", function () { return $d08dad8214e4e59f$export$e8c9778bf415dd08; }, function (v) { return $d08dad8214e4e59f$export$e8c9778bf415dd08 = v; });
$parcel$export($d08dad8214e4e59f$exports, "dropdown", function () { return $d08dad8214e4e59f$export$81207e5cc4186890; }, function (v) { return $d08dad8214e4e59f$export$81207e5cc4186890 = v; });
$parcel$export($d08dad8214e4e59f$exports, "icon", function () { return $d08dad8214e4e59f$export$1ca1ec8b29a4ce27; }, function (v) { return $d08dad8214e4e59f$export$1ca1ec8b29a4ce27 = v; });
$parcel$export($d08dad8214e4e59f$exports, "twitterSignIn", function () { return $d08dad8214e4e59f$export$6c489d6abe11ec5c; }, function (v) { return $d08dad8214e4e59f$export$6c489d6abe11ec5c = v; });
$parcel$export($d08dad8214e4e59f$exports, "username", function () { return $d08dad8214e4e59f$export$5e1be761f603d585; }, function (v) { return $d08dad8214e4e59f$export$5e1be761f603d585 = v; });
var $d08dad8214e4e59f$export$34e0f9847d4c02dd;
var $d08dad8214e4e59f$export$e8c9778bf415dd08;
var $d08dad8214e4e59f$export$81207e5cc4186890;
var $d08dad8214e4e59f$export$1ca1ec8b29a4ce27;
var $d08dad8214e4e59f$export$6c489d6abe11ec5c;
var $d08dad8214e4e59f$export$5e1be761f603d585;
$d08dad8214e4e59f$export$34e0f9847d4c02dd = `Ys9_ya_container`;
$d08dad8214e4e59f$export$e8c9778bf415dd08 = `Ys9_ya_divider`;
$d08dad8214e4e59f$export$81207e5cc4186890 = `Ys9_ya_dropdown`;
$d08dad8214e4e59f$export$1ca1ec8b29a4ce27 = `Ys9_ya_icon`;
$d08dad8214e4e59f$export$6c489d6abe11ec5c = `Ys9_ya_twitterSignIn`;
$d08dad8214e4e59f$export$5e1be761f603d585 = `Ys9_ya_username`;


const $e606c58af7c24cea$export$b1977eae5cbd7a49 = ({ userId: userId, updateJwt: updateJwt, closeModal: closeModal })=>{
    const [accessToken, setAccessToken] = (0, $a3U2C$react.useState)('');
    (0, $a3U2C$react.useEffect)(()=>{
        const fetchAccessToken = async ()=>{
            try {
                const response = await (0, ($parcel$interopDefault($a3U2C$axios))).post('/api/kyc/access-token', {
                    userId: userId,
                    levelName: 'all-data' // Replace with your level name
                });
                setAccessToken(response.data.token);
            } catch (error) {
                console.error('Error fetching access token:', error.response?.data || error.message);
            }
        };
        fetchAccessToken();
    }, [
        userId
    ]);
    const handleMessage = (type, payload)=>{
        console.log('Sumsub message:', type, payload);
        if (type === 'idCheck.onApplicantStatusChanged' && payload.reviewStatus === 'completed' && updateJwt) {
            console.log('success KYC');
            updateJwt();
        // Handle post-verification logic here
        // closeModal()
        }
    };
    const handleError = (error)=>{
        console.error('Sumsub error:', error);
    };
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        children: accessToken && userId && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$sumsubwebsdkreact))), {
            accessToken: accessToken,
            expirationHandler: ()=>(0, ($parcel$interopDefault($a3U2C$axios))).post('/api/kyc/access-token', {
                    userId: userId,
                    levelName: 'basic-kyc-level'
                }).then((res)=>res.data.token),
            config: {
                lang: 'en'
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
var $e606c58af7c24cea$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ logout: logout, username: username, showXLogin: showXLogin, showKYCLogin: showKYCLogin, showMyHistory: showMyHistory, changeUser: changeUser, testUsers: testUsers = [], handleTwitterLogin: handleTwitterLogin }, ref2)=>{
    const [showDropdown, setShowDropdown] = (0, $a3U2C$react.useState)(false);
    const ref = (0, $a3U2C$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowDropdown(false)
    });
    const { setIsModalOpen: setIsModalOpen, setShowKYCModal: setShowKYCModal, setIsLoginModalOpen: setIsLoginModalOpen } = (0, $a3U2C$react.useContext)((0, $d76f51c1c8726ad5$export$32c650b79baf5fee));
    const content = /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
        children: [
            username ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).username,
                    children: [
                        "Settings (",
                        username,
                        ")"
                    ]
                })
            }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).twitterSignIn,
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).username,
                    children: "Sign in"
                })
            }),
            username && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialSettings))), {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).icon,
                sx: {
                    color: '#2b2b2b'
                }
            })
        ]
    });
    if (!username) return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
            ref: (node)=>{
                if (ref2) ref2(node);
            },
            className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).container,
            style: {
                justifyContent: 'center',
                border: 'none',
                fontSize: 16
            },
            onClick: ()=>{
                setIsLoginModalOpen(true);
            },
            children: content
        })
    });
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        style: {
            display: 'flex',
            gap: 12,
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                // ref={node => {
                //   ref.current = node
                //   if (ref2) {
                //     ref2(node)
                //   }
                // }}
                className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).container,
                onClick: (e)=>{
                    e.stopPropagation();
                    setShowDropdown(!showDropdown);
                },
                style: {
                    width: showKYCLogin || showXLogin ? '40%' : '100%',
                    textAlign: 'center'
                },
                children: content
            }),
            showXLogin && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).twitterSignIn, (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).container),
                style: {
                    width: 'calc(60% - 12px)'
                },
                onClick: handleTwitterLogin,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).username,
                        children: "Verify yourself with"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialX))), {})
                ]
            }),
            showKYCLogin && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).twitterSignIn, (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).container),
                style: {
                    width: 'calc(60% - 12px)'
                },
                onClick: ()=>{
                    window.mixpanel.track('Verify Identity');
                    setShowKYCModal(true);
                },
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).username,
                        children: "Verify yourself with"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                        src: (0, {}),
                        style: {
                            height: 27,
                            marginBottom: 3
                        }
                    })
                ]
            }),
            username && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                style: {
                    display: showDropdown ? 'flex' : 'none'
                },
                className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).dropdown,
                ref: (node)=>{
                    ref.current = node;
                    if (ref2) ref2(node);
                },
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        onClick: logout,
                        children: "Log out"
                    }),
                    window.featureFlags.rewards && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        onClick: ()=>{
                            window.mixpanel.track('Rewards');
                            setIsModalOpen(true);
                        },
                        children: "Rewards"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        onClick: showMyHistory,
                        children: "My Questions/Answers"
                    }),
                    Boolean(testUsers.length) && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($d08dad8214e4e59f$exports))).divider,
                        children: "Test Users"
                    }),
                    testUsers.map((i)=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                            onClick: ()=>changeUser(i.fullName),
                            children: i.fullName
                        }, i.fullName)),
                    Boolean(testUsers.length) && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        onClick: ()=>changeUser(),
                        children: "me"
                    })
                ]
            })
        ]
    });
});



var $44e2cdb07e2fff35$exports = {};

$parcel$export($44e2cdb07e2fff35$exports, "address", function () { return $44e2cdb07e2fff35$export$f7d3c097ceca6c15; }, function (v) { return $44e2cdb07e2fff35$export$f7d3c097ceca6c15 = v; });
$parcel$export($44e2cdb07e2fff35$exports, "amount", function () { return $44e2cdb07e2fff35$export$802cfe72001a1ee; }, function (v) { return $44e2cdb07e2fff35$export$802cfe72001a1ee = v; });
$parcel$export($44e2cdb07e2fff35$exports, "body", function () { return $44e2cdb07e2fff35$export$32180ef41b15b513; }, function (v) { return $44e2cdb07e2fff35$export$32180ef41b15b513 = v; });
$parcel$export($44e2cdb07e2fff35$exports, "close", function () { return $44e2cdb07e2fff35$export$8360e631d277ea4d; }, function (v) { return $44e2cdb07e2fff35$export$8360e631d277ea4d = v; });
$parcel$export($44e2cdb07e2fff35$exports, "connectButton", function () { return $44e2cdb07e2fff35$export$53a6eba4a816532e; }, function (v) { return $44e2cdb07e2fff35$export$53a6eba4a816532e = v; });
$parcel$export($44e2cdb07e2fff35$exports, "hide", function () { return $44e2cdb07e2fff35$export$fe8985bb6374093c; }, function (v) { return $44e2cdb07e2fff35$export$fe8985bb6374093c = v; });
$parcel$export($44e2cdb07e2fff35$exports, "input", function () { return $44e2cdb07e2fff35$export$b7e3ae3d7c15e42e; }, function (v) { return $44e2cdb07e2fff35$export$b7e3ae3d7c15e42e = v; });
$parcel$export($44e2cdb07e2fff35$exports, "modalContent", function () { return $44e2cdb07e2fff35$export$add244bda2f9423c; }, function (v) { return $44e2cdb07e2fff35$export$add244bda2f9423c = v; });
$parcel$export($44e2cdb07e2fff35$exports, "row", function () { return $44e2cdb07e2fff35$export$120ff0929b202a6d; }, function (v) { return $44e2cdb07e2fff35$export$120ff0929b202a6d = v; });
$parcel$export($44e2cdb07e2fff35$exports, "search", function () { return $44e2cdb07e2fff35$export$d76128d007d19019; }, function (v) { return $44e2cdb07e2fff35$export$d76128d007d19019 = v; });
$parcel$export($44e2cdb07e2fff35$exports, "twitterSignIn", function () { return $44e2cdb07e2fff35$export$6c489d6abe11ec5c; }, function (v) { return $44e2cdb07e2fff35$export$6c489d6abe11ec5c = v; });
var $44e2cdb07e2fff35$export$f7d3c097ceca6c15;
var $44e2cdb07e2fff35$export$802cfe72001a1ee;
var $44e2cdb07e2fff35$export$32180ef41b15b513;
var $44e2cdb07e2fff35$export$8360e631d277ea4d;
var $44e2cdb07e2fff35$export$53a6eba4a816532e;
var $44e2cdb07e2fff35$export$fe8985bb6374093c;
var $44e2cdb07e2fff35$export$b7e3ae3d7c15e42e;
var $44e2cdb07e2fff35$export$add244bda2f9423c;
var $44e2cdb07e2fff35$export$120ff0929b202a6d;
var $44e2cdb07e2fff35$export$d76128d007d19019;
var $44e2cdb07e2fff35$export$6c489d6abe11ec5c;
$44e2cdb07e2fff35$export$f7d3c097ceca6c15 = `MLyVHW_address`;
$44e2cdb07e2fff35$export$802cfe72001a1ee = `MLyVHW_amount`;
$44e2cdb07e2fff35$export$32180ef41b15b513 = `MLyVHW_body`;
$44e2cdb07e2fff35$export$8360e631d277ea4d = `MLyVHW_close`;
$44e2cdb07e2fff35$export$53a6eba4a816532e = `MLyVHW_connectButton`;
$44e2cdb07e2fff35$export$fe8985bb6374093c = `MLyVHW_hide`;
$44e2cdb07e2fff35$export$b7e3ae3d7c15e42e = `MLyVHW_input`;
$44e2cdb07e2fff35$export$add244bda2f9423c = `MLyVHW_modalContent`;
$44e2cdb07e2fff35$export$120ff0929b202a6d = `MLyVHW_row`;
$44e2cdb07e2fff35$export$d76128d007d19019 = `MLyVHW_search`;
$44e2cdb07e2fff35$export$6c489d6abe11ec5c = `MLyVHW_twitterSignIn`;


const $2e10efe306716bc4$export$2515d253ab459c32 = 450;
const $2e10efe306716bc4$export$310e42f8685040c9 = 1361;
const $2e10efe306716bc4$export$5d27a029e0b63495 = 914;
const $2e10efe306716bc4$export$120137d2fb34488f = 945;


const $d76f51c1c8726ad5$export$32c650b79baf5fee = /*#__PURE__*/ (0, ($parcel$interopDefault($a3U2C$react))).createContext({
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
const $d76f51c1c8726ad5$var$customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column'
    }
};
const $d76f51c1c8726ad5$var$clientId = '693824624560-f3596tslik0htj03c2p4cqnevievv8ej.apps.googleusercontent.com'; // Replace with your actual Client ID
(0, ($parcel$interopDefault($a3U2C$reactmodal))).setAppElement('#app');
var $d76f51c1c8726ad5$export$2e2bcd8739ae039 = ({ children: children, includeSwipes: includeSwipes, address: address, payout: payout, userId: userId, connectToWallet: connectToWalletR, addImage: addImage, updateJwt: updateJwt, hide: hideR, connected: connected, handleTwitterLogin: handleTwitterLogin, isWalletModalOpenInitial: isWalletModalOpenInitial = true, createUser: createUser, showKYC: showKYC })=>{
    const [screenName, toggleScreen] = (0, $a3U2C$react.useState)('uninitialized');
    const [skipScreen, setSkipScreen] = (0, $a3U2C$react.useState)();
    const [isModalOpen, setIsModalOpen] = (0, $a3U2C$react.useState)(false);
    const [isWalletModalOpen, setIsWalletModalOpen] = (0, $a3U2C$react.useState)(isWalletModalOpenInitial);
    const [showSearch, setShowSearch] = (0, $a3U2C$react.useState)(false);
    const [showLoginModal, setIsLoginModalOpen] = (0, $a3U2C$react.useState)(false);
    const [showKYCModal, setShowKYCModal] = (0, $a3U2C$react.useState)(false);
    const [answer, setAnswer] = (0, $a3U2C$react.useState)(null);
    const [addImgModal, setAddImgModal] = (0, $a3U2C$react.useState)(false);
    const [selectedMessage, setSelectedMessage] = (0, $a3U2C$react.useState)(false);
    const [imgUrl, setImgUrl] = (0, $a3U2C$react.useState)('');
    const [sendEmails, setSendEmails] = (0, $a3U2C$react.useState)(true);
    const [showSearchMenu, setShowSearchMenu] = (0, $a3U2C$react.useState)(false);
    const [showGroups, setShowGroups] = (0, $a3U2C$react.useState)(false);
    (0, $a3U2C$react.useEffect)(()=>{
        const handler = ()=>{
            const { innerWidth: width } = window;
            if (width > (0, $2e10efe306716bc4$export$120137d2fb34488f)) toggleScreen();
            if (screenName === 'uninitialized' && width < (0, $2e10efe306716bc4$export$120137d2fb34488f)) toggleScreen('questions');
        };
        handler();
        window.addEventListener('resize', handler);
        return ()=>window.removeEventListener('resize', handler);
    }, []);
    (0, $a3U2C$react.useEffect)(()=>{
        if (skipScreen && skipScreen.includes(screenName)) toggleScreen('questions');
    }, [
        skipScreen
    ]);
    const connectToWallet = ()=>{
        window.mixpanel.track('Rewards Modal -> Connect Wallet Click');
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
        const decoded = (0, $a3U2C$jwtdecode.jwtDecode)(userInfo);
        await createUser({
            ...answer,
            ...decoded,
            sendEmails: sendEmails
        });
        window.gtag_report_conversion();
        setIsLoginModalOpen(false);
    };
    const handleLoginFailure = (error)=>{
        console.error('Login Failed: ', error);
        window.mixpanel.track('Login Failed', {
            error: error
        });
    };
    const closeRewardsConnectWalletModal = ()=>{
        setIsModalOpen(false);
        window.mixpanel.track('Rewards Modal(Connect Wallet) -> Close Click');
    };
    if (includeSwipes) return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactoauthgoogle.GoogleOAuthProvider), {
        clientId: $d76f51c1c8726ad5$var$clientId,
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)($d76f51c1c8726ad5$export$32c650b79baf5fee.Provider, {
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
                imgUrl: imgUrl
            },
            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$herouireact.HeroUIProvider), {
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouireact.ToastProvider), {}),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        style: {
                            height: screenName ? '100%' : 'auto'
                        },
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).body,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($a3U2C$reactmodal))), {
                                isOpen: isWalletModalOpen,
                                onRequestClose: ()=>setIsWalletModalOpen(false),
                                style: $d76f51c1c8726ad5$var$customStyles,
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        onClick: ()=>setIsWalletModalOpen(false),
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h2", {
                                                children: "Connect Wallet"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).modalContent,
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                                                children: "Do you have a wallet(metamask, trust, etc)?"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("p", {
                                                children: "In this app you can get crypto rewards for asking and answering questions. But to get them you need crypto wallet."
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    "If you don't have one, click ",
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).hide,
                                                        onClick: hide,
                                                        children: "hide to stop seeing this popup"
                                                    }),
                                                    ". Later you can always find it in ",
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                                                        children: "settings > rewards"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).connectButton,
                                                onClick: connectToWallet,
                                                children: "Connect"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactmodal))), {
                                isOpen: isModalOpen,
                                onRequestClose: closeRewardsConnectWalletModal,
                                style: $d76f51c1c8726ad5$var$customStyles,
                                children: connected ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).close,
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h2", {
                                                    children: "Rewards"
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).row,
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                                                    children: "your address: "
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).address,
                                                    children: address
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).row,
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                                                    children: "your payout: "
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("span", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).amount,
                                                    children: [
                                                        payout,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                                                    children: "ASK"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                            onClick: closeRewardsConnectWalletModal,
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).close,
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h2", {
                                                    children: "Rewards"
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("p", {
                                            children: "To get rewards for asking questions and answering them you need to connect crypto wallet"
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                                            style: {
                                                width: '100%',
                                                marginTop: 20
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).connectButton,
                                            onClick: connectToWallet,
                                            children: "Connect"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($a3U2C$reactmodal))), {
                                isOpen: showLoginModal,
                                onRequestClose: ()=>setIsLoginModalOpen(false),
                                style: $d76f51c1c8726ad5$var$customStyles,
                                shouldCloseOnOverlayClick: false,
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h2", {
                                                children: "Login or Sign up"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {
                                                onClick: ()=>setIsLoginModalOpen(false)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("p", {
                                                style: {
                                                    marginBottom: 4
                                                },
                                                children: "To count your answer we need you to finish registration."
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("p", {
                                                children: "Otherwise votes wouldn't mean a thing."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).modalContent,
                                        id: "model-content",
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactoauthgoogle.GoogleLogin), {
                                                onSuccess: handleLoginSuccess,
                                                onFailure: handleLoginFailure,
                                                cookiePolicy: "single_host_origin",
                                                prompt_parent_id: "tester-tester"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("button", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).twitterSignIn,
                                                onClick: ()=>{
                                                    setAnswer(null);
                                                    handleTwitterLogin(`?sendEmails=${sendEmails}
                        ${answer ? `&answer=${answer.answer}&parentMessageId=${answer.parentMessageId}&href=/questions/${answer.shortId}` : ''}`);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialX))), {}),
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                                                        style: {
                                                            flexGrow: 1
                                                        },
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).username,
                                                        children: "Sign in with X"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).checkboxes__row,
                                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).checkboxes__item,
                                                    children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("label", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 4
                                                        },
                                                        className: `${(0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports)))['style-c']}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("input", {
                                                                style: {
                                                                    height: 13,
                                                                    marginTop: 4
                                                                },
                                                                checked: sendEmails,
                                                                type: "checkbox",
                                                                onChange: (e)=>setSendEmails(e.target.checked)
                                                            }),
                                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).checkbox__checkmark
                                                            }),
                                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).checkbox__body,
                                                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
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
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($a3U2C$reactmodal))), {
                                isOpen: showKYCModal,
                                onRequestClose: ()=>setShowKYCModal(false),
                                style: $d76f51c1c8726ad5$var$customStyles,
                                shouldCloseOnOverlayClick: false,
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        onClick: ()=>setShowKYCModal(false),
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h2", {
                                                children: "Verify your Identity"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("p", {
                                                style: {
                                                    marginBottom: 4
                                                },
                                                children: "We need to verify your identity, as you can understand, to ensure to the maximum possible extent, that you are a real person. That way all the answers to polls become so much more valuable to you and everyone else."
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                                                children: "*Your first and last name, as well as country of origin and age will be public, if it's not clear yet"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $e606c58af7c24cea$export$b1977eae5cbd7a49), {
                                        userId: userId,
                                        updateJwt: updateJwt,
                                        closeModal: ()=>setShowKYCModal(false)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($a3U2C$reactmodal))), {
                                isOpen: addImgModal,
                                onRequestClose: ()=>setAddImgModal(false),
                                style: $d76f51c1c8726ad5$var$customStyles,
                                shouldCloseOnOverlayClick: false,
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        onClick: ()=>setAddImgModal(false),
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).close,
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h2", {
                                                children: "Add Art to the Question"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        style: {
                                            marginBottom: 20,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("input", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).input,
                                                placeholder: "Place img url here...",
                                                onChange: (e)=>setImgUrl(e.target.value),
                                                value: imgUrl
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).search,
                                                onClick: ()=>{
                                                    addImage(selectedMessage, imgUrl);
                                                },
                                                children: "add"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $45370652b5163d21$export$97295e60e7f371e1), {
                                children: children
                            })
                        ]
                    })
                ]
            })
        })
    });
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        style: {
            height: screenName ? '100%' : 'auto'
        },
        className: (0, (/*@__PURE__*/$parcel$interopDefault($44e2cdb07e2fff35$exports))).body,
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $45370652b5163d21$export$97295e60e7f371e1), {
            children: children
        })
    });
};


var $10a5d21649ce6d17$exports = {};

$parcel$export($10a5d21649ce6d17$exports, "buttons", function () { return $10a5d21649ce6d17$export$bbea856fdb3e3c5f; }, function (v) { return $10a5d21649ce6d17$export$bbea856fdb3e3c5f = v; });
var $10a5d21649ce6d17$export$bbea856fdb3e3c5f;
$10a5d21649ce6d17$export$bbea856fdb3e3c5f = `_9jMaeW_buttons`;


var $88054dfbc457b15b$export$2e2bcd8739ae039 = ({ disableButtons: disableButtons, select: select, combine: combine })=>{
    const { setIsLoginModalOpen: setIsLoginModalOpen } = (0, $a3U2C$react.useContext)((0, $d76f51c1c8726ad5$export$32c650b79baf5fee));
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($10a5d21649ce6d17$exports))).buttons,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $c14cd15d61961192$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: ()=>{
                    if (disableButtons) return (0, $a3U2C$herouireact.addToast)({
                        title: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                            style: {
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                "Please login to combine groups",
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $c14cd15d61961192$export$2e2bcd8739ae039), {
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
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $c14cd15d61961192$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: ()=>{
                    if (disableButtons) return (0, $a3U2C$herouireact.addToast)({
                        title: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                            style: {
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                "Please login to combine groups",
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $c14cd15d61961192$export$2e2bcd8739ae039), {
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





var $ac6e68ab048b83d1$exports = {};

$parcel$export($ac6e68ab048b83d1$exports, "buttons", function () { return $ac6e68ab048b83d1$export$bbea856fdb3e3c5f; }, function (v) { return $ac6e68ab048b83d1$export$bbea856fdb3e3c5f = v; });
var $ac6e68ab048b83d1$export$bbea856fdb3e3c5f;
$ac6e68ab048b83d1$export$bbea856fdb3e3c5f = `N5rOjG_buttons`;


var $4377654e81925ec1$export$2e2bcd8739ae039 = ({ readyToSave: readyToSave, save: save, cancel: cancel })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($ac6e68ab048b83d1$exports))).buttons,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $c14cd15d61961192$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                disabled: !readyToSave,
                primary: true,
                onClick: save,
                children: "Save"
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $c14cd15d61961192$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: cancel,
                children: "Cancel"
            })
        ]
    });





var $503cd80abace9cc6$export$2e2bcd8739ae039 = ({ x: x })=>x.toLocaleString();


var $de214488df22128b$exports = {};

$parcel$export($de214488df22128b$exports, "userCount", function () { return $de214488df22128b$export$72bd514aa1799057; }, function (v) { return $de214488df22128b$export$72bd514aa1799057 = v; });
var $de214488df22128b$export$72bd514aa1799057;
$de214488df22128b$export$72bd514aa1799057 = `W-vEEq_userCount`;


var $6c8dc56c60aa6ae8$export$2e2bcd8739ae039 = ({ userCount: userCount, style: style })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($de214488df22128b$exports))).userCount,
        children: userCount === null ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactjsxruntime.Fragment), {
            children: "select new group parts"
        }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $503cd80abace9cc6$export$2e2bcd8739ae039), {
                    x: userCount
                }),
                " people"
            ]
        })
    });






var $86df86061c594ba8$exports = {};

$parcel$export($86df86061c594ba8$exports, "icon", function () { return $86df86061c594ba8$export$1ca1ec8b29a4ce27; }, function (v) { return $86df86061c594ba8$export$1ca1ec8b29a4ce27 = v; });
var $86df86061c594ba8$export$1ca1ec8b29a4ce27;
$86df86061c594ba8$export$1ca1ec8b29a4ce27 = `Qjmz_q_icon`;


var $06913f3ec322bc41$export$2e2bcd8739ae039 = ({ color: color = '#bebebe', deselect: deselect })=>{
    const [icon, setIcon] = (0, $a3U2C$react.useState)((0, $a3U2C$fortawesomefreesolidsvgicons.faCheckCircle));
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$fortawesomereactfontawesome.FontAwesomeIcon), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($86df86061c594ba8$exports))).icon,
        size: "2x",
        color: color,
        icon: icon,
        onMouseEnter: ()=>setIcon((0, $a3U2C$fortawesomefreesolidsvgicons.faTimesCircle)),
        onMouseLeave: ()=>setIcon((0, $a3U2C$fortawesomefreesolidsvgicons.faCheckCircle)),
        onClick: deselect
    });
};





var $44ab3e4f604925eb$exports = {};

$parcel$export($44ab3e4f604925eb$exports, "title", function () { return $44ab3e4f604925eb$export$fb184b623420d9be; }, function (v) { return $44ab3e4f604925eb$export$fb184b623420d9be = v; });
var $44ab3e4f604925eb$export$fb184b623420d9be;
$44ab3e4f604925eb$export$fb184b623420d9be = `C2iC6q_title`;


var $61e5751f6ef211ae$export$2e2bcd8739ae039 = ({ children: children, style: style })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($44ab3e4f604925eb$exports))).title,
        children: children
    });


var $c34a39ab68b030df$exports = {};

$parcel$export($c34a39ab68b030df$exports, "card", function () { return $c34a39ab68b030df$export$aa3e815946b80764; }, function (v) { return $c34a39ab68b030df$export$aa3e815946b80764 = v; });
$parcel$export($c34a39ab68b030df$exports, "leftSideContainer", function () { return $c34a39ab68b030df$export$59b1d651044d302; }, function (v) { return $c34a39ab68b030df$export$59b1d651044d302 = v; });
var $c34a39ab68b030df$export$aa3e815946b80764;
var $c34a39ab68b030df$export$59b1d651044d302;
$c34a39ab68b030df$export$aa3e815946b80764 = `FnrTLq_card`;
$c34a39ab68b030df$export$59b1d651044d302 = `FnrTLq_leftSideContainer`;


var $d390534abfbc024e$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ disableButtons: disableButtons, name: name, userCount: userCount, selected: selected, color: color, save: save, toggleSelection: toggleSelection, combine: combine, readyToSave: readyToSave, cancel: cancel }, ref)=>{
    const [newGroupTitle, setNewGroupTitle] = (0, $a3U2C$react.useState)('');
    console.log('disableButtons: ', disableButtons);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("article", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($c34a39ab68b030df$exports))).card,
        ref: ref,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($c34a39ab68b030df$exports))).leftSideContainer,
                children: [
                    name ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $61e5751f6ef211ae$export$2e2bcd8739ae039), {
                        style: {
                            color: '#121212',
                            fontWeight: 500
                        },
                        children: name
                    }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $95424766a65cfd34$export$2e2bcd8739ae039), {
                        onTitleInput: setNewGroupTitle
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $6c8dc56c60aa6ae8$export$2e2bcd8739ae039), {
                        style: {
                            fontSize: 15
                        },
                        userCount: userCount
                    })
                ]
            }),
            color && !newGroupTitle || color && selected && name ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $06913f3ec322bc41$export$2e2bcd8739ae039), {
                color: color,
                deselect: toggleSelection
            }) : name ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $88054dfbc457b15b$export$2e2bcd8739ae039), {
                disableButtons: disableButtons,
                select: toggleSelection,
                combine: combine
            }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $4377654e81925ec1$export$2e2bcd8739ae039), {
                save: ()=>save(newGroupTitle),
                cancel: cancel,
                readyToSave: color ? readyToSave : newGroupTitle
            })
        ]
    });
});














var $cbe853f9a020c18a$exports = {};

$parcel$export($cbe853f9a020c18a$exports, "title", function () { return $cbe853f9a020c18a$export$fb184b623420d9be; }, function (v) { return $cbe853f9a020c18a$export$fb184b623420d9be = v; });
var $cbe853f9a020c18a$export$fb184b623420d9be;
$cbe853f9a020c18a$export$fb184b623420d9be = `CNVIPq_title`;


var $5028331f39524b26$export$2e2bcd8739ae039 = ({ children: children, style: style, id: id, h1: h1 = false })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
        h1: h1,
        id: id,
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($cbe853f9a020c18a$exports))).title,
        children: children
    });











var $7c627babc9bebc87$exports = {};

$parcel$export($7c627babc9bebc87$exports, "text", function () { return $7c627babc9bebc87$export$6f093cfa640b7166; }, function (v) { return $7c627babc9bebc87$export$6f093cfa640b7166 = v; });
var $7c627babc9bebc87$export$6f093cfa640b7166;
$7c627babc9bebc87$export$6f093cfa640b7166 = `hhUNra_text`;


var $efdbd8db5bd34168$export$2e2bcd8739ae039 = ({ children: children, style: style, className: className, onClick: onClick })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
        onClick: onClick,
        style: style,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($7c627babc9bebc87$exports))).text),
        children: children
    });





var $db289e57682d109b$exports = {};

$parcel$export($db289e57682d109b$exports, "bar", function () { return $db289e57682d109b$export$d927737047eb3867; }, function (v) { return $db289e57682d109b$export$d927737047eb3867 = v; });
$parcel$export($db289e57682d109b$exports, "bars", function () { return $db289e57682d109b$export$60912654947077e3; }, function (v) { return $db289e57682d109b$export$60912654947077e3 = v; });
$parcel$export($db289e57682d109b$exports, "noBar", function () { return $db289e57682d109b$export$e2b71f7b582462e; }, function (v) { return $db289e57682d109b$export$e2b71f7b582462e = v; });
$parcel$export($db289e57682d109b$exports, "yesBar", function () { return $db289e57682d109b$export$6a31b2d83bf3b7ff; }, function (v) { return $db289e57682d109b$export$6a31b2d83bf3b7ff = v; });
var $db289e57682d109b$export$d927737047eb3867;
var $db289e57682d109b$export$60912654947077e3;
var $db289e57682d109b$export$e2b71f7b582462e;
var $db289e57682d109b$export$6a31b2d83bf3b7ff;
$db289e57682d109b$export$d927737047eb3867 = `jz4HOq_bar`;
$db289e57682d109b$export$60912654947077e3 = `jz4HOq_bars`;
$db289e57682d109b$export$e2b71f7b582462e = `jz4HOq_noBar`;
$db289e57682d109b$export$6a31b2d83bf3b7ff = `jz4HOq_yesBar`;


var $497ae48649beb625$export$2e2bcd8739ae039 = ({ yes: yes, no: no, onHover: onHover, createNewGroup: createNewGroup, style: style, className: className })=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($db289e57682d109b$exports))).bars, className),
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                style: {
                    width: `${yes}%`
                },
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($db289e57682d109b$exports))).bar, (0, (/*@__PURE__*/$parcel$interopDefault($db289e57682d109b$exports))).yesBar),
                onMouseEnter: ()=>onHover('yes'),
                onMouseLeave: ()=>onHover(),
                onClick: ()=>createNewGroup('yes')
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                style: {
                    width: `${no}%`
                },
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($db289e57682d109b$exports))).bar, (0, (/*@__PURE__*/$parcel$interopDefault($db289e57682d109b$exports))).noBar),
                onMouseEnter: ()=>onHover('no'),
                onMouseLeave: ()=>onHover(),
                onClick: ()=>createNewGroup('no')
            })
        ]
    });
};


var $24d7a93e00e1da5d$exports = {};

$parcel$export($24d7a93e00e1da5d$exports, "arrowDown", function () { return $24d7a93e00e1da5d$export$f61feb65ec56823b; }, function (v) { return $24d7a93e00e1da5d$export$f61feb65ec56823b = v; });
$parcel$export($24d7a93e00e1da5d$exports, "img", function () { return $24d7a93e00e1da5d$export$463b44d9bf3628be; }, function (v) { return $24d7a93e00e1da5d$export$463b44d9bf3628be = v; });
$parcel$export($24d7a93e00e1da5d$exports, "imgWithArrow", function () { return $24d7a93e00e1da5d$export$e4e79e5008270fc7; }, function (v) { return $24d7a93e00e1da5d$export$e4e79e5008270fc7 = v; });
$parcel$export($24d7a93e00e1da5d$exports, "stats", function () { return $24d7a93e00e1da5d$export$7804429c45dff272; }, function (v) { return $24d7a93e00e1da5d$export$7804429c45dff272 = v; });
$parcel$export($24d7a93e00e1da5d$exports, "tester", function () { return $24d7a93e00e1da5d$export$6b5c497e0b5239d7; }, function (v) { return $24d7a93e00e1da5d$export$6b5c497e0b5239d7 = v; });
$parcel$export($24d7a93e00e1da5d$exports, "text", function () { return $24d7a93e00e1da5d$export$6f093cfa640b7166; }, function (v) { return $24d7a93e00e1da5d$export$6f093cfa640b7166 = v; });
$parcel$export($24d7a93e00e1da5d$exports, "textContainer", function () { return $24d7a93e00e1da5d$export$2cedfd664bb3bd01; }, function (v) { return $24d7a93e00e1da5d$export$2cedfd664bb3bd01 = v; });
var $24d7a93e00e1da5d$export$f61feb65ec56823b;
var $24d7a93e00e1da5d$export$463b44d9bf3628be;
var $24d7a93e00e1da5d$export$e4e79e5008270fc7;
var $24d7a93e00e1da5d$export$7804429c45dff272;
var $24d7a93e00e1da5d$export$6b5c497e0b5239d7;
var $24d7a93e00e1da5d$export$6f093cfa640b7166;
var $24d7a93e00e1da5d$export$2cedfd664bb3bd01;
$24d7a93e00e1da5d$export$f61feb65ec56823b = `rXrVna_arrowDown`;
$24d7a93e00e1da5d$export$463b44d9bf3628be = `rXrVna_img`;
$24d7a93e00e1da5d$export$e4e79e5008270fc7 = `rXrVna_imgWithArrow`;
$24d7a93e00e1da5d$export$7804429c45dff272 = `rXrVna_stats`;
$24d7a93e00e1da5d$export$6b5c497e0b5239d7 = `rXrVna_tester`;
$24d7a93e00e1da5d$export$6f093cfa640b7166 = `rXrVna_text`;
$24d7a93e00e1da5d$export$2cedfd664bb3bd01 = `rXrVna_textContainer`;


const $8604c6d324487e92$var$calcPercent = (x, sum)=>Math.round(x / sum * 100);
var $8604c6d324487e92$export$2e2bcd8739ae039 = ({ yes: yes, no: no, he: he, me: me, createNewGroup: createNewGroup, className: className })=>{
    const [state, setState] = (0, $a3U2C$react.useState)(null);
    const answers = {
        yes: yes,
        no: no
    };
    const userReplyCount = state ? answers[state] : yes + no;
    const yesPercentage = $8604c6d324487e92$var$calcPercent(yes, yes + no);
    const noPercentage = $8604c6d324487e92$var$calcPercent(no, yes + no);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        style: me?.answer || he?.answer ? {
            marginTop: 50
        } : {
            marginTop: 20
        },
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).stats, className),
        children: [
            userReplyCount !== 0 && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).textContainer,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $efdbd8db5bd34168$export$2e2bcd8739ae039), {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).text,
                                style: {
                                    width: `${yesPercentage}%`,
                                    position: 'relative',
                                    display: 'flex',
                                    gap: 12,
                                    bottom: 0
                                },
                                children: [
                                    me?.answer?.toLowerCase() === 'yes' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).imgWithArrow,
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).img,
                                                src: me.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).tester,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).arrowDown
                                            })
                                        ]
                                    }),
                                    he?.answer?.toLowerCase() === 'yes' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).imgWithArrow,
                                        style: me?.answer ? {
                                            left: '50%'
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).img,
                                                src: he.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).tester,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).arrowDown
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $efdbd8db5bd34168$export$2e2bcd8739ae039), {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).text,
                                style: {
                                    width: `${noPercentage}%`,
                                    position: 'relative',
                                    display: 'flex',
                                    gap: 12,
                                    bottom: 0
                                },
                                children: [
                                    me?.answer?.toLowerCase() === 'no' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).imgWithArrow,
                                        style: he?.answer ? {
                                            right: '50%'
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).img,
                                                src: me.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).tester,
                                                children: "No"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).arrowDown
                                            })
                                        ]
                                    }),
                                    he?.answer?.toLowerCase() === 'no' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).imgWithArrow,
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).img,
                                                src: he.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).tester,
                                                children: "No"
                                            }),
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).arrowDown
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $497ae48649beb625$export$2e2bcd8739ae039), {
                        yes: yesPercentage,
                        no: noPercentage,
                        onHover: setState,
                        createNewGroup: createNewGroup
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).textContainer,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $efdbd8db5bd34168$export$2e2bcd8739ae039), {
                                onClick: ()=>createNewGroup('yes'),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).text,
                                style: {
                                    cursor: 'pointer',
                                    width: `${yesPercentage}%`,
                                    whiteSpace: 'nowrap'
                                },
                                children: [
                                    yesPercentage,
                                    "%(yes)"
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $efdbd8db5bd34168$export$2e2bcd8739ae039), {
                                onClick: ()=>createNewGroup('no'),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($24d7a93e00e1da5d$exports))).text,
                                style: {
                                    cursor: 'pointer',
                                    width: `${noPercentage}%`,
                                    whiteSpace: 'nowrap'
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
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $efdbd8db5bd34168$export$2e2bcd8739ae039), {
                secondary: true,
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $503cd80abace9cc6$export$2e2bcd8739ae039), {
                        x: userReplyCount
                    }),
                    " people answered"
                ]
            })
        ]
    });
};








var $637923ba8df4eba3$exports = {};

$parcel$export($637923ba8df4eba3$exports, "button", function () { return $637923ba8df4eba3$export$2ba01fb71ed41cb6; }, function (v) { return $637923ba8df4eba3$export$2ba01fb71ed41cb6 = v; });
$parcel$export($637923ba8df4eba3$exports, "no", function () { return $637923ba8df4eba3$export$401451a107dc42ce; }, function (v) { return $637923ba8df4eba3$export$401451a107dc42ce = v; });
$parcel$export($637923ba8df4eba3$exports, "noHover", function () { return $637923ba8df4eba3$export$628d97df3a6f96e7; }, function (v) { return $637923ba8df4eba3$export$628d97df3a6f96e7 = v; });
$parcel$export($637923ba8df4eba3$exports, "yes", function () { return $637923ba8df4eba3$export$7a668e70ea2210d9; }, function (v) { return $637923ba8df4eba3$export$7a668e70ea2210d9 = v; });
var $637923ba8df4eba3$export$2ba01fb71ed41cb6;
var $637923ba8df4eba3$export$401451a107dc42ce;
var $637923ba8df4eba3$export$628d97df3a6f96e7;
var $637923ba8df4eba3$export$7a668e70ea2210d9;
$637923ba8df4eba3$export$2ba01fb71ed41cb6 = `lNhtDW_button`;
$637923ba8df4eba3$export$401451a107dc42ce = `lNhtDW_no`;
$637923ba8df4eba3$export$628d97df3a6f96e7 = `lNhtDW_noHover`;
$637923ba8df4eba3$export$7a668e70ea2210d9 = `lNhtDW_yes`;


var $3ad0eff00f3cd0ef$export$2e2bcd8739ae039 = ({ answer: answer, respond: respond, disabled: disabled, style: style, noHover: noHover })=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
        disabled: disabled,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($637923ba8df4eba3$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($637923ba8df4eba3$exports))).yes]: answer.toLowerCase() === 'yes',
            [(0, (/*@__PURE__*/$parcel$interopDefault($637923ba8df4eba3$exports))).no]: answer.toLowerCase() === 'no',
            [(0, (/*@__PURE__*/$parcel$interopDefault($637923ba8df4eba3$exports))).noHover]: noHover
        }),
        onClick: respond,
        style: style,
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
            children: answer
        })
    });
};


var $73ca126f07658a15$exports = {};

$parcel$export($73ca126f07658a15$exports, "answerButtons", function () { return $73ca126f07658a15$export$33b0e16035b753e; }, function (v) { return $73ca126f07658a15$export$33b0e16035b753e = v; });
var $73ca126f07658a15$export$33b0e16035b753e;
$73ca126f07658a15$export$33b0e16035b753e = `bvGz5q_answerButtons`;


var $1ad5fe3037277d9b$export$2e2bcd8739ae039 = ({ respond: respond, style: style, loading: loading })=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($73ca126f07658a15$exports))).answerButtons,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3ad0eff00f3cd0ef$export$2e2bcd8739ae039), {
                disabled: loading || !respond,
                answer: "Yes",
                respond: ()=>respond('yes')
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3ad0eff00f3cd0ef$export$2e2bcd8739ae039), {
                disabled: loading || !respond,
                answer: "No",
                respond: ()=>respond('no')
            })
        ]
    });
};



/* eslint-disable react/self-closing-comp */ /* eslint-disable jsx-quotes */ 


var $3376c45f4891715c$exports = {};

$parcel$export($3376c45f4891715c$exports, "badge", function () { return $3376c45f4891715c$export$4aebd143f31d0c0d; }, function (v) { return $3376c45f4891715c$export$4aebd143f31d0c0d = v; });
$parcel$export($3376c45f4891715c$exports, "button", function () { return $3376c45f4891715c$export$2ba01fb71ed41cb6; }, function (v) { return $3376c45f4891715c$export$2ba01fb71ed41cb6 = v; });
$parcel$export($3376c45f4891715c$exports, "card", function () { return $3376c45f4891715c$export$aa3e815946b80764; }, function (v) { return $3376c45f4891715c$export$aa3e815946b80764 = v; });
$parcel$export($3376c45f4891715c$exports, "commentText", function () { return $3376c45f4891715c$export$6b087f52b8619213; }, function (v) { return $3376c45f4891715c$export$6b087f52b8619213 = v; });
$parcel$export($3376c45f4891715c$exports, "expand", function () { return $3376c45f4891715c$export$9f77e0932fb78f72; }, function (v) { return $3376c45f4891715c$export$9f77e0932fb78f72 = v; });
$parcel$export($3376c45f4891715c$exports, "hint", function () { return $3376c45f4891715c$export$464c821cd4347539; }, function (v) { return $3376c45f4891715c$export$464c821cd4347539 = v; });
$parcel$export($3376c45f4891715c$exports, "icon", function () { return $3376c45f4891715c$export$1ca1ec8b29a4ce27; }, function (v) { return $3376c45f4891715c$export$1ca1ec8b29a4ce27 = v; });
$parcel$export($3376c45f4891715c$exports, "iconButton", function () { return $3376c45f4891715c$export$60bb6c1f29b8a8cc; }, function (v) { return $3376c45f4891715c$export$60bb6c1f29b8a8cc = v; });
$parcel$export($3376c45f4891715c$exports, "innerCard", function () { return $3376c45f4891715c$export$40f3ad8fcd4c93c2; }, function (v) { return $3376c45f4891715c$export$40f3ad8fcd4c93c2 = v; });
$parcel$export($3376c45f4891715c$exports, "innerCardWithImage", function () { return $3376c45f4891715c$export$275ee2193c25f37a; }, function (v) { return $3376c45f4891715c$export$275ee2193c25f37a = v; });
$parcel$export($3376c45f4891715c$exports, "previewImg", function () { return $3376c45f4891715c$export$fd824239f75849bd; }, function (v) { return $3376c45f4891715c$export$fd824239f75849bd = v; });
$parcel$export($3376c45f4891715c$exports, "selectedQuestion", function () { return $3376c45f4891715c$export$f7f968f67303d06e; }, function (v) { return $3376c45f4891715c$export$f7f968f67303d06e = v; });
$parcel$export($3376c45f4891715c$exports, "text", function () { return $3376c45f4891715c$export$6f093cfa640b7166; }, function (v) { return $3376c45f4891715c$export$6f093cfa640b7166 = v; });
$parcel$export($3376c45f4891715c$exports, "textarea", function () { return $3376c45f4891715c$export$a3574df893ffa88d; }, function (v) { return $3376c45f4891715c$export$a3574df893ffa88d = v; });
$parcel$export($3376c45f4891715c$exports, "username", function () { return $3376c45f4891715c$export$5e1be761f603d585; }, function (v) { return $3376c45f4891715c$export$5e1be761f603d585 = v; });
$parcel$export($3376c45f4891715c$exports, "vennDiagramIcon", function () { return $3376c45f4891715c$export$21d313c8dd377057; }, function (v) { return $3376c45f4891715c$export$21d313c8dd377057 = v; });
var $3376c45f4891715c$export$4aebd143f31d0c0d;
var $3376c45f4891715c$export$2ba01fb71ed41cb6;
var $3376c45f4891715c$export$aa3e815946b80764;
var $3376c45f4891715c$export$6b087f52b8619213;
var $3376c45f4891715c$export$9f77e0932fb78f72;
var $3376c45f4891715c$export$464c821cd4347539;
var $3376c45f4891715c$export$1ca1ec8b29a4ce27;
var $3376c45f4891715c$export$60bb6c1f29b8a8cc;
var $3376c45f4891715c$export$40f3ad8fcd4c93c2;
var $3376c45f4891715c$export$275ee2193c25f37a;
var $3376c45f4891715c$export$fd824239f75849bd;
var $3376c45f4891715c$export$f7f968f67303d06e;
var $3376c45f4891715c$export$6f093cfa640b7166;
var $3376c45f4891715c$export$a3574df893ffa88d;
var $3376c45f4891715c$export$5e1be761f603d585;
var $3376c45f4891715c$export$21d313c8dd377057;
$3376c45f4891715c$export$4aebd143f31d0c0d = `hG2-PW_badge`;
$3376c45f4891715c$export$2ba01fb71ed41cb6 = `hG2-PW_button`;
$3376c45f4891715c$export$aa3e815946b80764 = `hG2-PW_card`;
$3376c45f4891715c$export$6b087f52b8619213 = `hG2-PW_commentText`;
$3376c45f4891715c$export$9f77e0932fb78f72 = `hG2-PW_expand`;
$3376c45f4891715c$export$464c821cd4347539 = `hG2-PW_hint`;
$3376c45f4891715c$export$1ca1ec8b29a4ce27 = `hG2-PW_icon`;
$3376c45f4891715c$export$60bb6c1f29b8a8cc = `hG2-PW_iconButton`;
$3376c45f4891715c$export$40f3ad8fcd4c93c2 = `hG2-PW_innerCard`;
$3376c45f4891715c$export$275ee2193c25f37a = `hG2-PW_innerCardWithImage`;
$3376c45f4891715c$export$fd824239f75849bd = `hG2-PW_previewImg`;
$3376c45f4891715c$export$f7f968f67303d06e = `hG2-PW_selectedQuestion`;
$3376c45f4891715c$export$6f093cfa640b7166 = `hG2-PW_text`;
$3376c45f4891715c$export$a3574df893ffa88d = `hG2-PW_textarea`;
$3376c45f4891715c$export$5e1be761f603d585 = `hG2-PW_username`;
$3376c45f4891715c$export$21d313c8dd377057 = `hG2-PW_vennDiagramIcon`;


var $92979c3fafe78436$export$2e2bcd8739ae039 = ({ onClick: onClick, groupMode: groupMode, myHover: myHover, fill: fill })=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        onClick: onClick,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).vennDiagramIcon, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).active]: groupMode
        }),
        style: {
            cursor: 'pointer',
            width: 28,
            height: 'auto',
            fill: fill
        },
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("defs", {
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("linearGradient", {
                    id: "gradient-fill",
                    gradientUnits: "userSpaceOnUse",
                    x1: "2.044",
                    x2: "62",
                    y1: "32",
                    y2: "32",
                    children: [
                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#0fdcdd"
                        }),
                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#46a1e8"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("g", {
                id: "_39_Diagram_Venn",
                "data-name": "39 Diagram Venn",
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("path", {
                    d: "m44 14a17.723 17.723 0 0 0 -12 4.2 17.762 17.762 0 0 0 -12-4.2c-23.91 0-23.971 36 0 36a17.864 17.864 0 0 0 12.028-4.16 17.756 17.756 0 0 0 11.972 4.16c24.12 0 23.881-36 0-36zm-12 28.958a17.159 17.159 0 0 1 .026-21.958c5.318 5.982 5.283 15.952-.026 21.958zm-12-26.958a15.913 15.913 0 0 1 10.569 3.6c-6.014 6.749-6.035 18.026-.037 24.785a15.821 15.821 0 0 1 -10.532 3.615c-21.254 0-21.307-32 0-32zm24 32a15.8 15.8 0 0 1 -10.5-3.593c6.026-6.749 5.982-18.031-.044-24.792a15.809 15.809 0 0 1 10.544-3.615c21.44 0 21.227 32 0 32z",
                    fill: myHover ? 'url(#gradient-fill)' : fill || '#121212'
                })
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("animate", {
                attributeName: "fill",
                from: "#00000063",
                to: "url(#gradient-fill)",
                dur: "0.5s",
                begin: "mouseover",
                fill: "freeze"
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("animate", {
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




function $5fc94b7b21b51ec3$var$timeSince(createdAt) {
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
var $5fc94b7b21b51ec3$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ toggleGroupMode: toggleGroupMode, yourOwnQuestion: yourOwnQuestion, shortId: shortId, onUserClick: onUserClick, img: img, createdAt: createdAt, username: username, name: name, answersCount: answersCount, he: he, me: me, respond: respond, createNewGroup: createNewGroup, htmlName: htmlName, onClick: onClick, handleTwitterLogin: handleTwitterLogin, parentMessageId: parentMessageId, createUser: createUser, trackConversion: trackConversion, addImageAvailable: addImageAvailable, loading: loading, selected: selected, groupMode: groupMode, comments: comments, fetchComments: fetchComments, saveComment: saveComment, showCommentsForQuestion: showCommentsForQuestion, user: user }, ref)=>{
    const [showComments, setShowComments] = (0, $a3U2C$react.useState)(false);
    const [text, setText] = (0, $a3U2C$react.useState)('');
    const share = ()=>{
        if (navigator.share) {
            window.mixpanel.track('Share', {
                questionId: shortId
            });
            navigator.share({
                title: 'Question',
                text: name,
                url: `https://poll.cc/questions/${shortId}`
            });
        }
    };
    const { setIsLoginModalOpen: setIsLoginModalOpen, setAddImgModal: setAddImgModal, setSelectedMessage: setSelectedMessage, setAnswer: setAnswer } = (0, $a3U2C$react.useContext)((0, $d76f51c1c8726ad5$export$32c650b79baf5fee));
    const [isHovered, setIsHovered] = (0, $a3U2C$react.useState)(groupMode);
    const redirectToLogin = (answer)=>{
        // eslint-disable-next-line no-undef
        setIsLoginModalOpen(true);
        setAnswer({
            answer: answer,
            parentMessageId: parentMessageId,
            shortId: shortId
        });
        window.mixpanel.track('Anonymous Question Answer', {
            questionId: shortId,
            answer: answer
        });
    };
    const isMobile = (0, $a3U2C$reactresponsive.useMediaQuery)({
        query: '(max-width: 925px)'
    });
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("article", {
        ref: ref,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).card, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).selectedQuestion]: selected
        }),
        children: [
            selected && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).badge,
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                    children: "Selected"
                })
            }),
            img && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).previewImg,
                src: img,
                alt: "preview image"
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).innerCard, {
                    [(0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).innerCardWithImage]: img
                }),
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $5028331f39524b26$export$2e2bcd8739ae039), {
                        children: groupMode ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                            children: "Create group"
                        }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).username,
                                    onClick: onUserClick,
                                    children: [
                                        username,
                                        ":"
                                    ]
                                }),
                                " ",
                                htmlName ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: htmlName
                                    }
                                }) : name
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $8604c6d324487e92$export$2e2bcd8739ae039), {
                        ...answersCount,
                        he: he,
                        me: me,
                        createNewGroup: createNewGroup
                    }),
                    !yourOwnQuestion && !me?.answer && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $1ad5fe3037277d9b$export$2e2bcd8739ae039), {
                        loading: loading,
                        respond: respond || redirectToLogin
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).expand,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                style: {
                                    color: '#00000063'
                                },
                                children: isMobile ? $5fc94b7b21b51ec3$var$timeSince(createdAt) : `${(0, $a3U2C$datefns.formatDistanceToNow)(new Date(createdAt))} ago`
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                style: {
                                    display: 'flex',
                                    gap: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).iconButton,
                                        onClick: ()=>{
                                            fetchComments();
                                            setShowComments(!showComments);
                                        },
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialChatBubble))), {
                                            sx: {
                                                fill: '#121212'
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).icon
                                        })
                                    }),
                                    window.featureFlags?.groups && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                                        content: "Create new group",
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).iconButton,
                                            style: {
                                                position: 'relative',
                                                height: 37,
                                                width: 54,
                                                cursor: 'pointer'
                                            },
                                            onMouseEnter: ()=>setIsHovered(true),
                                            onMouseLeave: ()=>!groupMode && setIsHovered(false),
                                            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                style: {
                                                    height: 'auto',
                                                    width: 42,
                                                    position: 'absolute',
                                                    left: 'calc(50% + 7px)',
                                                    top: '50%',
                                                    transform: 'translate(-50%, -50%)'
                                                },
                                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $92979c3fafe78436$export$2e2bcd8739ae039), {
                                                    myHover: groupMode || isHovered,
                                                    fill: "#121212",
                                                    groupMode: groupMode,
                                                    onClick: toggleGroupMode
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("a", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).iconButton,
                                        style: {
                                            marginTop: '-1.88px'
                                        },
                                        href: `/questions/${shortId}`,
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialOpenInNew))), {
                                            sx: {
                                                fill: '#121212'
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).icon,
                                            onClick: onClick
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).iconButton,
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialShare))), {
                                            sx: {
                                                fill: '#121212'
                                            },
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).icon,
                                            onClick: share
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    showComments && showCommentsForQuestion && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).expand,
                        style: {
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            paddingTop: 15
                        },
                        children: [
                            comments.map((i)=>{
                                const isOpComment = !i.answer;
                                return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).comments,
                                    style: {
                                        alignSelf: isOpComment ? 'center' : i.answer === 'yes' ? 'flex-start' : 'flex-end'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 6,
                                                flexDirection: i.answer === 'no' && !isOpComment ? 'row-reverse' : 'row',
                                                alignItems: 'center',
                                                justifyContent: isOpComment ? 'center' : 'unset',
                                                marginBottom: 5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                    src: i.user?.pictureUrl,
                                                    style: {
                                                        height: 32,
                                                        width: 'auto',
                                                        borderRadius: '50%',
                                                        cursor: 'pointer'
                                                    }
                                                }),
                                                isOpComment ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("small", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).commentText,
                                                    style: {
                                                        color: 'gray',
                                                        cursor: 'pointer'
                                                    },
                                                    children: "OP"
                                                }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $3ad0eff00f3cd0ef$export$2e2bcd8739ae039), {
                                                    style: {
                                                        height: 26,
                                                        width: 46,
                                                        fontSize: 14
                                                    },
                                                    noHover: true,
                                                    answer: i.answer,
                                                    respond: ()=>{}
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                    style: {
                                                        color: 'gray'
                                                    },
                                                    children: "\u2022"
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("small", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).commentText,
                                                    style: {
                                                        color: 'gray',
                                                        cursor: 'pointer'
                                                    },
                                                    children: i.user.username
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                    style: {
                                                        color: 'gray'
                                                    },
                                                    children: "\u2022"
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("small", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).commentText,
                                                    style: {
                                                        color: 'gray',
                                                        cursor: 'pointer'
                                                    },
                                                    children: $5fc94b7b21b51ec3$var$timeSince(i.createdAt)
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                    style: {
                                                        color: 'gray'
                                                    },
                                                    children: "\u2022"
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                                                    content: !i.user?.difference && !user ? 'Login to see similarity to you' : 'Similarity to you',
                                                    children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("small", {
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).commentText,
                                                        style: {
                                                            color: 'gray',
                                                            cursor: 'pointer',
                                                            position: 'relative'
                                                        },
                                                        children: i.user?.difference !== undefined ? `${i.user?.difference}%` : user ? 'it\'s you' : '?%'
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("p", {
                                            style: {
                                                marginLeft: i.answer === 'yes' && !isOpComment ? 34 : 0,
                                                marginRight: isOpComment ? 0 : i.answer === 'no' ? 34 : 0,
                                                background: 'rgb(43 43 43 / 9%)',
                                                padding: 8,
                                                borderTopRightRadius: i.answer === 'yes' || isOpComment ? 5 : 0,
                                                borderTopLeftRadius: i.answer === 'no' || isOpComment ? 5 : 0,
                                                borderBottomRightRadius: 5,
                                                borderBottomLeftRadius: 5,
                                                fontSize: 15
                                            },
                                            children: i.text
                                        })
                                    ]
                                }, i.text);
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).addComment,
                                style: {
                                    width: '100%',
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("textarea", {
                                        disabled: !(me?.answer || yourOwnQuestion),
                                        placeholder: me?.answer || yourOwnQuestion ? 'Comment...' : 'Answer to comment...',
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).textarea,
                                        value: text,
                                        onChange: (e)=>setText(e.target.value)
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                                        disabled: !text,
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($3376c45f4891715c$exports))).button,
                                        onClick: ()=>{
                                            saveComment(text);
                                            setText('');
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









var $0096f7110eafe5f9$exports = {};

$parcel$export($0096f7110eafe5f9$exports, "text", function () { return $0096f7110eafe5f9$export$6f093cfa640b7166; }, function (v) { return $0096f7110eafe5f9$export$6f093cfa640b7166 = v; });
$parcel$export($0096f7110eafe5f9$exports, "textarea", function () { return $0096f7110eafe5f9$export$a3574df893ffa88d; }, function (v) { return $0096f7110eafe5f9$export$a3574df893ffa88d = v; });
var $0096f7110eafe5f9$export$6f093cfa640b7166;
var $0096f7110eafe5f9$export$a3574df893ffa88d;
$0096f7110eafe5f9$export$6f093cfa640b7166 = `FVOu6W_text`;
$0096f7110eafe5f9$export$a3574df893ffa88d = `FVOu6W_textarea`;


var $881a8f08e4aa6054$export$2e2bcd8739ae039 = ({ disabled: disabled, onChange: onChange, value: value })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("textarea", {
        disabled: disabled,
        placeholder: `Type your question here ${disabled ? '(disabled if you\'re not signed in)' : ''}...`,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($0096f7110eafe5f9$exports))).textarea, (0, (/*@__PURE__*/$parcel$interopDefault($0096f7110eafe5f9$exports))).text),
        onChange: onChange,
        value: value
    });



var $83dc75768a20f7c9$exports = {};

$parcel$export($83dc75768a20f7c9$exports, "button", function () { return $83dc75768a20f7c9$export$2ba01fb71ed41cb6; }, function (v) { return $83dc75768a20f7c9$export$2ba01fb71ed41cb6 = v; });
$parcel$export($83dc75768a20f7c9$exports, "newQuestion", function () { return $83dc75768a20f7c9$export$9ad540bb5fc131aa; }, function (v) { return $83dc75768a20f7c9$export$9ad540bb5fc131aa = v; });
var $83dc75768a20f7c9$export$2ba01fb71ed41cb6;
var $83dc75768a20f7c9$export$9ad540bb5fc131aa;
$83dc75768a20f7c9$export$2ba01fb71ed41cb6 = `grImvG_button`;
$83dc75768a20f7c9$export$9ad540bb5fc131aa = `grImvG_newQuestion`;


var $5cab5fb040b98b0d$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ saveQuestion: saveQuestion }, ref)=>{
    const [question, setQuestion] = (0, $a3U2C$react.useState)('');
    const { setAddImgModal: setAddImgModal, setSelectedMessage: setSelectedMessage } = (0, $a3U2C$react.useContext)((0, $d76f51c1c8726ad5$export$32c650b79baf5fee));
    const onChange = (e)=>{
        const newQuestion = e.target.value;
        setQuestion(newQuestion);
    };
    const save = async (e)=>{
        e.target.blur();
        const { _id: _id } = await saveQuestion(question);
        setQuestion('');
        setSelectedMessage(_id);
    };
    const disabled = !saveQuestion;
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($83dc75768a20f7c9$exports))).newQuestion,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $881a8f08e4aa6054$export$2e2bcd8739ae039), {
                disabled: disabled,
                value: question,
                onChange: onChange
            }),
            question && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                style: {
                    position: 'absolute',
                    right: 87,
                    bottom: 5,
                    transform: 'translateY(-50%)'
                },
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                    content: "Add image to question",
                    children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialImage))), {
                        sx: {
                            fill: '#121212'
                        },
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($83dc75768a20f7c9$exports))).icon,
                        onClick: ()=>{
                            setAddImgModal(true);
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                disabled: !question || !saveQuestion,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($83dc75768a20f7c9$exports))).button,
                onClick: save,
                children: "Ask"
            })
        ]
    });
});






var $19cc85519bf0114e$exports = {};

$parcel$export($19cc85519bf0114e$exports, "groupContainer", function () { return $19cc85519bf0114e$export$f36792cb9bd81925; }, function (v) { return $19cc85519bf0114e$export$f36792cb9bd81925 = v; });
var $19cc85519bf0114e$export$f36792cb9bd81925;
$19cc85519bf0114e$export$f36792cb9bd81925 = `PHOqhG_groupContainer`;


var $65104aed486e2493$export$2e2bcd8739ae039 = ({ children: children, id: id, style: style, className: className })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        style: style,
        id: id,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($19cc85519bf0114e$exports))).groupContainer, className),
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
            style: {
                width: '100%',
                height: '100%'
            },
            children: children
        })
    });








var $552c5bbcb773d266$exports = {};

$parcel$export($552c5bbcb773d266$exports, "container", function () { return $552c5bbcb773d266$export$34e0f9847d4c02dd; }, function (v) { return $552c5bbcb773d266$export$34e0f9847d4c02dd = v; });
var $552c5bbcb773d266$export$34e0f9847d4c02dd;
$552c5bbcb773d266$export$34e0f9847d4c02dd = `GU1x_a_container`;


var $9619045c197bdfb0$export$2e2bcd8739ae039 = ({ children: children, className: className })=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($552c5bbcb773d266$exports))).container, className),
        children: children
    });


var $2e3915628b611118$exports = {};

$parcel$export($2e3915628b611118$exports, "mainScreen", function () { return $2e3915628b611118$export$e962ae2959462fd2; }, function (v) { return $2e3915628b611118$export$e962ae2959462fd2 = v; });
$parcel$export($2e3915628b611118$exports, "mainScreenContainer", function () { return $2e3915628b611118$export$65cfe9c2ce1b1faf; }, function (v) { return $2e3915628b611118$export$65cfe9c2ce1b1faf = v; });
var $2e3915628b611118$export$e962ae2959462fd2;
var $2e3915628b611118$export$65cfe9c2ce1b1faf;
$2e3915628b611118$export$e962ae2959462fd2 = `-yL40G_mainScreen`;
$2e3915628b611118$export$65cfe9c2ce1b1faf = `-yL40G_mainScreenContainer`;


var $377ffdae47705f05$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ children: children, className: className, style: style, id: id, scrollId: scrollId }, ref)=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("section", {
        id: id,
        ref: ref,
        style: style,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($2e3915628b611118$exports))).mainScreen, className),
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $9619045c197bdfb0$export$2e2bcd8739ae039), {
            scrollId: scrollId,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($2e3915628b611118$exports))).mainScreenContainer,
            children: children
        })
    }));




var $2aa614e364357cc5$exports = {};

$parcel$export($2aa614e364357cc5$exports, "sidebar", function () { return $2aa614e364357cc5$export$6fbb9cd2843e91b2; }, function (v) { return $2aa614e364357cc5$export$6fbb9cd2843e91b2 = v; });
$parcel$export($2aa614e364357cc5$exports, "title", function () { return $2aa614e364357cc5$export$fb184b623420d9be; }, function (v) { return $2aa614e364357cc5$export$fb184b623420d9be = v; });
var $2aa614e364357cc5$export$6fbb9cd2843e91b2;
var $2aa614e364357cc5$export$fb184b623420d9be;
$2aa614e364357cc5$export$6fbb9cd2843e91b2 = `gFQYnG_sidebar`;
$2aa614e364357cc5$export$fb184b623420d9be = `gFQYnG_title`;


var $205a64be0ab22d12$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ children: children, style: style }, ref)=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        ref: ref,
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($2aa614e364357cc5$exports))).sidebar,
        children: children
    }));





var $9f541db8b1768924$exports = {};

$parcel$export($9f541db8b1768924$exports, "cardsRow", function () { return $9f541db8b1768924$export$3ffd594349b5aa88; }, function (v) { return $9f541db8b1768924$export$3ffd594349b5aa88 = v; });
$parcel$export($9f541db8b1768924$exports, "scrollContainer", function () { return $9f541db8b1768924$export$fad3c8302a7540c6; }, function (v) { return $9f541db8b1768924$export$fad3c8302a7540c6 = v; });
var $9f541db8b1768924$export$3ffd594349b5aa88;
var $9f541db8b1768924$export$fad3c8302a7540c6;
$9f541db8b1768924$export$3ffd594349b5aa88 = `oXN4tG_cardsRow`;
$9f541db8b1768924$export$fad3c8302a7540c6 = `oXN4tG_scrollContainer`;


var $69ab011e6185c3e2$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ style: style, children: children, id: id, className: className }, ref)=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        style: style,
        ref: ref,
        id: id,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($9f541db8b1768924$exports))).scrollContainer, className),
        children: children
    });
});














var $891f22c414156158$exports = {};

$parcel$export($891f22c414156158$exports, "back", function () { return $891f22c414156158$export$7c341cb16fc91138; }, function (v) { return $891f22c414156158$export$7c341cb16fc91138 = v; });
$parcel$export($891f22c414156158$exports, "checkbox", function () { return $891f22c414156158$export$b07e517d22efa1ca; }, function (v) { return $891f22c414156158$export$b07e517d22efa1ca = v; });
$parcel$export($891f22c414156158$exports, "checkbox__body", function () { return $891f22c414156158$export$d3da3a95ea50034e; }, function (v) { return $891f22c414156158$export$d3da3a95ea50034e = v; });
$parcel$export($891f22c414156158$exports, "checkbox__checkmark", function () { return $891f22c414156158$export$340dac494ade0321; }, function (v) { return $891f22c414156158$export$340dac494ade0321 = v; });
$parcel$export($891f22c414156158$exports, "checkboxes__item", function () { return $891f22c414156158$export$760569eb394a6344; }, function (v) { return $891f22c414156158$export$760569eb394a6344 = v; });
$parcel$export($891f22c414156158$exports, "checkboxes__row", function () { return $891f22c414156158$export$6c3b9b20e13900f2; }, function (v) { return $891f22c414156158$export$6c3b9b20e13900f2 = v; });
$parcel$export($891f22c414156158$exports, "close", function () { return $891f22c414156158$export$8360e631d277ea4d; }, function (v) { return $891f22c414156158$export$8360e631d277ea4d = v; });
$parcel$export($891f22c414156158$exports, "column", function () { return $891f22c414156158$export$4e0c71f277ca26b3; }, function (v) { return $891f22c414156158$export$4e0c71f277ca26b3 = v; });
$parcel$export($891f22c414156158$exports, "imgFallback", function () { return $891f22c414156158$export$e94d20c87215d48b; }, function (v) { return $891f22c414156158$export$e94d20c87215d48b = v; });
$parcel$export($891f22c414156158$exports, "row", function () { return $891f22c414156158$export$120ff0929b202a6d; }, function (v) { return $891f22c414156158$export$120ff0929b202a6d = v; });
$parcel$export($891f22c414156158$exports, "screenWithGroupContent", function () { return $891f22c414156158$export$de3da254965f2f43; }, function (v) { return $891f22c414156158$export$de3da254965f2f43 = v; });
$parcel$export($891f22c414156158$exports, "style-c", function () { return $891f22c414156158$export$d8e3ffb8a71e7871; }, function (v) { return $891f22c414156158$export$d8e3ffb8a71e7871 = v; });
$parcel$export($891f22c414156158$exports, "userItem", function () { return $891f22c414156158$export$f6bda04bc7d10a12; }, function (v) { return $891f22c414156158$export$f6bda04bc7d10a12 = v; });
$parcel$export($891f22c414156158$exports, "usersContainer", function () { return $891f22c414156158$export$771ca420b1b6ed17; }, function (v) { return $891f22c414156158$export$771ca420b1b6ed17 = v; });
$parcel$export($891f22c414156158$exports, "x-icon", function () { return $891f22c414156158$export$43405cb8d90657d0; }, function (v) { return $891f22c414156158$export$43405cb8d90657d0 = v; });
var $891f22c414156158$export$7c341cb16fc91138;
var $891f22c414156158$export$b07e517d22efa1ca;
var $891f22c414156158$export$d3da3a95ea50034e;
var $891f22c414156158$export$340dac494ade0321;
var $891f22c414156158$export$760569eb394a6344;
var $891f22c414156158$export$6c3b9b20e13900f2;
var $891f22c414156158$export$8360e631d277ea4d;
var $891f22c414156158$export$4e0c71f277ca26b3;
var $891f22c414156158$export$e94d20c87215d48b;
var $891f22c414156158$export$120ff0929b202a6d;
var $891f22c414156158$export$de3da254965f2f43;
var $891f22c414156158$export$d8e3ffb8a71e7871;
var $891f22c414156158$export$f6bda04bc7d10a12;
var $891f22c414156158$export$771ca420b1b6ed17;
var $891f22c414156158$export$43405cb8d90657d0;
$891f22c414156158$export$7c341cb16fc91138 = `JZcedq_back`;
$891f22c414156158$export$b07e517d22efa1ca = `JZcedq_checkbox`;
$891f22c414156158$export$d3da3a95ea50034e = `JZcedq_checkbox__body`;
$891f22c414156158$export$340dac494ade0321 = `JZcedq_checkbox__checkmark`;
$891f22c414156158$export$760569eb394a6344 = `JZcedq_checkboxes__item`;
$891f22c414156158$export$6c3b9b20e13900f2 = `JZcedq_checkboxes__row`;
$891f22c414156158$export$8360e631d277ea4d = `JZcedq_close`;
$891f22c414156158$export$4e0c71f277ca26b3 = `JZcedq_column`;
$891f22c414156158$export$e94d20c87215d48b = `JZcedq_imgFallback`;
$891f22c414156158$export$120ff0929b202a6d = `JZcedq_row`;
$891f22c414156158$export$de3da254965f2f43 = `JZcedq_screenWithGroupContent`;
$891f22c414156158$export$d8e3ffb8a71e7871 = `JZcedq_style-c`;
$891f22c414156158$export$f6bda04bc7d10a12 = `JZcedq_userItem`;
$891f22c414156158$export$771ca420b1b6ed17 = `JZcedq_usersContainer`;
$891f22c414156158$export$43405cb8d90657d0 = `JZcedq_x-icon`;





const $21d72efb2ee09a08$export$1f44aaf2ec115b54 = ({ user: user, onUserClick: onUserClick, children: children, style: style, handleTwitterLogin: handleTwitterLogin, logout: logout })=>{
    const isXConnected = Number.isInteger(user?.followerCount);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).userItem,
        onClick: ()=>onUserClick(user),
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).row,
                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($a3U2C$reactflipmove))), {
                            typeName: null,
                            appearAnimation: "fade",
                            enterAnimation: "fade",
                            leaveAnimation: "fade",
                            children: [
                                user ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                    src: user.pictureUrl,
                                    alt: `${user.name} profile picture`
                                }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).imgFallback,
                                    style: {
                                        background: '#E7E4E2'
                                    }
                                }),
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).column,
                                    children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($a3U2C$reactflipmove))), {
                                        typeName: null,
                                        appearAnimation: "fade",
                                        enterAnimation: "fade",
                                        leaveAnimation: "fade",
                                        children: [
                                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                children: user?.fullName || 'loading'
                                            }),
                                            isXConnected && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("small", {
                                                style: {
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    (0, ($parcel$interopDefault($a3U2C$humannumber)))(user.followerCount),
                                                    " X followers"
                                                ]
                                            }),
                                            isXConnected && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                        children: "X account connected"
                                                    }),
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialLink))), {
                                                        sx: {
                                                            height: 20,
                                                            width: 20,
                                                            fill: 'gray',
                                                            marginLeft: '3px',
                                                            marginTop: '2px'
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.twitterVerified && user?.twitterVerified !== 'none' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                        children: "connected X account verified"
                                                    }),
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                        src: (0, {}),
                                                        style: {
                                                            height: 16,
                                                            width: 16,
                                                            paddingLeft: 3,
                                                            border: 'none'
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.verifiedKYC && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                        children: "verified by passport"
                                                    }),
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                        src: (0, {}),
                                                        style: {
                                                            height: 20,
                                                            width: 20,
                                                            paddingLeft: 3,
                                                            border: 'none'
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
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            alignItems: 'center'
                        },
                        children: [
                            isXConnected ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                                content: "Open connected X account",
                                placement: "left",
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("a", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        window.mixpanel.track('X Profile Click', {
                                            url: `https://twitter.com/${user?.username}`
                                        });
                                    },
                                    href: `https://twitter.com/${user?.username}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "data-tooltip-id": "my-tooltip-1",
                                    children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialX))), {})
                                })
                            }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                                content: "Connect your X account",
                                placement: "left",
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialX))), {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports)))['x-icon'],
                                    "data-tooltip-id": "my-tooltip-2",
                                    onClick: ()=>handleTwitterLogin()
                                })
                            }),
                            logout && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                                content: "Logout",
                                placement: "left",
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialLogout))), {
                                    sx: {
                                        cursor: 'pointer'
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
var $21d72efb2ee09a08$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ users: users, fetchUsers: fetchUsers, hasMore: hasMore, show: show, onUserClick: onUserClick, close: close, style: style, className: className, toggleVerifiedByX: toggleVerifiedByX, toggleVerifiedByKYC: toggleVerifiedByKYC }, ref)=>{
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        id: "group-content-search-scroll-target",
        ref: ref,
        style: {
            ...show && {
                display: 'flex'
            },
            ...style
        },
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).screenWithGroupContent, className),
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).close,
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).back,
                    onClick: close
                })
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                style: {
                    marginBottom: 32,
                    display: 'flex',
                    gap: 8
                },
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 14,
                        fontWeight: 300,
                        color: 'gray'
                    },
                    children: [
                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkboxes__row,
                            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkboxes__item,
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("label", {
                                    className: `${(0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports)))['style-c']}`,
                                    children: [
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("input", {
                                            type: "checkbox",
                                            onChange: (e)=>toggleVerifiedByX(e.target.checked)
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkbox__checkmark
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkbox__body,
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                    children: "twitter verified"
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                    src: (0, {}),
                                                    style: {
                                                        height: 16,
                                                        width: 16,
                                                        paddingLeft: 3,
                                                        border: 'none'
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkboxes__row,
                            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkboxes__item,
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("label", {
                                    className: `${(0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports)))['style-c']}`,
                                    children: [
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("input", {
                                            type: "checkbox",
                                            onChange: (e)=>toggleVerifiedByKYC(e.target.checked)
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkbox__checkmark
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).checkbox__body,
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                    children: "verified by passport"
                                                }),
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                    src: (0, {}),
                                                    style: {
                                                        height: 16,
                                                        width: 16,
                                                        paddingLeft: 3,
                                                        border: 'none'
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
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactinfinitescrollcomponent))), {
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
                className: (0, (/*@__PURE__*/$parcel$interopDefault($891f22c414156158$exports))).usersContainer,
                children: users.map((user)=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)($21d72efb2ee09a08$export$1f44aaf2ec115b54, {
                        user: user,
                        onUserClick: onUserClick
                    }, user._id))
            })
        ]
    });
});












var $37f0d1662ade1d20$exports = {};

$parcel$export($37f0d1662ade1d20$exports, "back", function () { return $37f0d1662ade1d20$export$7c341cb16fc91138; }, function (v) { return $37f0d1662ade1d20$export$7c341cb16fc91138 = v; });
$parcel$export($37f0d1662ade1d20$exports, "backContainer", function () { return $37f0d1662ade1d20$export$4effee6a14a93095; }, function (v) { return $37f0d1662ade1d20$export$4effee6a14a93095 = v; });
$parcel$export($37f0d1662ade1d20$exports, "button", function () { return $37f0d1662ade1d20$export$2ba01fb71ed41cb6; }, function (v) { return $37f0d1662ade1d20$export$2ba01fb71ed41cb6 = v; });
$parcel$export($37f0d1662ade1d20$exports, "differentTabs", function () { return $37f0d1662ade1d20$export$b70bd1b6fa2267e5; }, function (v) { return $37f0d1662ade1d20$export$b70bd1b6fa2267e5 = v; });
$parcel$export($37f0d1662ade1d20$exports, "differentTabs2", function () { return $37f0d1662ade1d20$export$11056a9a5a9dfdf9; }, function (v) { return $37f0d1662ade1d20$export$11056a9a5a9dfdf9 = v; });
$parcel$export($37f0d1662ade1d20$exports, "screenWithGroupContent", function () { return $37f0d1662ade1d20$export$de3da254965f2f43; }, function (v) { return $37f0d1662ade1d20$export$de3da254965f2f43 = v; });
$parcel$export($37f0d1662ade1d20$exports, "selected", function () { return $37f0d1662ade1d20$export$d90250155de6d7e7; }, function (v) { return $37f0d1662ade1d20$export$d90250155de6d7e7 = v; });
$parcel$export($37f0d1662ade1d20$exports, "similarity", function () { return $37f0d1662ade1d20$export$16a4d76eabe7aabb; }, function (v) { return $37f0d1662ade1d20$export$16a4d76eabe7aabb = v; });
$parcel$export($37f0d1662ade1d20$exports, "tabs", function () { return $37f0d1662ade1d20$export$39f5674517ec0000; }, function (v) { return $37f0d1662ade1d20$export$39f5674517ec0000 = v; });
var $37f0d1662ade1d20$export$7c341cb16fc91138;
var $37f0d1662ade1d20$export$4effee6a14a93095;
var $37f0d1662ade1d20$export$2ba01fb71ed41cb6;
var $37f0d1662ade1d20$export$b70bd1b6fa2267e5;
var $37f0d1662ade1d20$export$11056a9a5a9dfdf9;
var $37f0d1662ade1d20$export$de3da254965f2f43;
var $37f0d1662ade1d20$export$d90250155de6d7e7;
var $37f0d1662ade1d20$export$16a4d76eabe7aabb;
var $37f0d1662ade1d20$export$39f5674517ec0000;
$37f0d1662ade1d20$export$7c341cb16fc91138 = `YPwnha_back`;
$37f0d1662ade1d20$export$4effee6a14a93095 = `YPwnha_backContainer`;
$37f0d1662ade1d20$export$2ba01fb71ed41cb6 = `YPwnha_button`;
$37f0d1662ade1d20$export$b70bd1b6fa2267e5 = `YPwnha_differentTabs`;
$37f0d1662ade1d20$export$11056a9a5a9dfdf9 = `YPwnha_differentTabs2`;
$37f0d1662ade1d20$export$de3da254965f2f43 = `YPwnha_screenWithGroupContent`;
$37f0d1662ade1d20$export$d90250155de6d7e7 = `YPwnha_selected`;
$37f0d1662ade1d20$export$16a4d76eabe7aabb = `YPwnha_similarity`;
$37f0d1662ade1d20$export$39f5674517ec0000 = `YPwnha_tabs`;


const $9282d3fa2c14f2a4$export$522e89d0fa1200f4 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ selectedTab: selectedTab, setSelectedTab: setSelectedTab, showDifference: showDifference, setShowDifference: setShowDifference, back: back, children: children, similarity: similarity, user: user, handleTwitterLogin: handleTwitterLogin, logout: logout }, ref)=>{
    (0, $a3U2C$react.useEffect)(()=>{
        if (showDifference && selectedTab !== 'answers') setSelectedTab('answers');
    }, [
        showDifference
    ]);
    (0, $a3U2C$react.useEffect)(()=>{
        if (showDifference && selectedTab !== 'answers') setShowDifference(false);
    }, [
        selectedTab
    ]);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        id: "user-content-scroll-target",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).screenWithGroupContent,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).backContainer,
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).back,
                    onClick: back
                })
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $21d72efb2ee09a08$export$1f44aaf2ec115b54), {
                handleTwitterLogin: handleTwitterLogin,
                style: {
                    cursor: 'auto',
                    border: 'none'
                },
                user: user,
                onUserClick: ()=>{},
                logout: logout,
                children: !(0, ($parcel$interopDefault($a3U2C$lodash))).isNull(similarity) && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("p", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).similarity,
                    children: [
                        "Similarity to you: ",
                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("span", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).similarityMeter,
                            children: [
                                similarity,
                                "%"
                            ]
                        })
                    ]
                })
            }),
            !(0, ($parcel$interopDefault($a3U2C$lodash))).isNull(similarity) && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).button,
                    onClick: ()=>{
                        const newShowDifference = !showDifference;
                        setShowDifference(newShowDifference);
                        window.mixpanel.track(newShowDifference ? 'Show Users Difference' : 'Go Back to User Q/A');
                    },
                    children: showDifference ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialArrowBack))), {
                                sx: {
                                    fontSize: 14,
                                    marginRight: '5px'
                                }
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                children: "Back"
                            })
                        ]
                    }) : 'Show Differences'
                })
            }),
            !showDifference && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        style: {
                            width: 'calc(100% - 30px)',
                            height: 1,
                            borderTop: '1px solid rgb(179, 179, 179)',
                            boxSizing: 'border-box',
                            margin: '15px auto'
                        }
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).tabs,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, ($parcel$interopDefault($a3U2C$classnames)))({
                                    [(0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).selected]: selectedTab === 'answers'
                                }),
                                onClick: ()=>{
                                    setSelectedTab('answers');
                                    window.mixpanel.track('Select User Answers Tab');
                                },
                                children: "His/Her Answers"
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, ($parcel$interopDefault($a3U2C$classnames)))({
                                    [(0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).selected]: selectedTab === 'questions'
                                }),
                                onClick: ()=>{
                                    window.mixpanel.track('Select User Questions Tab');
                                    setSelectedTab('questions');
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
const $9282d3fa2c14f2a4$export$1f74963c34e8bfec = ()=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
            style: {
                color: '#3b3b3b',
                fontSize: 36,
                fontWeight: 300
            },
            children: "empty"
        })
    });
$9282d3fa2c14f2a4$export$1f74963c34e8bfec.prototype = {};
const $9282d3fa2c14f2a4$export$6241fe9ea73c6c74 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ questions: questions, hasMore: hasMore, fetchQuestions: fetchQuestions, respond: respond, createNewGroup: createNewGroup, onUserClick: onUserClick, onQuestionClick: onQuestionClick }, ref)=>{
    if (questions && questions.length === 0) return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)($9282d3fa2c14f2a4$export$1f74963c34e8bfec, {});
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactinfinitescrollcomponent))), {
            scrollableTarget: "user-content-scroll-target",
            dataLength: questions?.length || 0,
            next: fetchQuestions,
            hasMore: hasMore,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).usersItems,
            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactflipmove))), {
                appearAnimation: "elevator",
                typeName: null,
                maintainContainerHeight: true,
                children: questions && questions.map((i)=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $5fc94b7b21b51ec3$export$2e2bcd8739ae039), {
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
const $9282d3fa2c14f2a4$export$a6816b34ad549b0 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ respond: // hasMore,
// fetchAnswers,
respond, createNewGroup: createNewGroup, onUserClick: onUserClick, answers: answers, onQuestionClick: onQuestionClick }, ref)=>{
    const [selectedTab, setSelectedTab] = (0, $a3U2C$react.useState)('different');
    const [selectedNestedTab, setSelectedNestedTab] = (0, $a3U2C$react.useState)('byMe');
    // const [answers, setAnswers] = useState({
    //   different: [],
    //   same: [],
    //   notAnswered: []
    // })
    // useEffect(() => {
    //   compareWithMe().then(answers => setAnswers(answers))
    // }, [])
    const questionsToShow = answers && (selectedTab === 'notAnswered' ? answers[selectedTab].filter((i)=>selectedNestedTab === 'byMe' ? i.byMe : !i.byMe) : answers[selectedTab]).map((i)=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $5fc94b7b21b51ec3$export$2e2bcd8739ae039), {
            respond: respond && ((content)=>respond(i._id, content)),
            createNewGroup: (content)=>createNewGroup(i.shortId, content),
            ...i,
            onUserClick: ()=>onUserClick(i.userId),
            onClick: ()=>onQuestionClick(i.shortId)
        }, i.id || i._id));
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                style: {
                    width: 'calc(100% - 30px)',
                    height: 1,
                    borderTop: '1px solid rgb(179, 179, 179)',
                    boxSizing: 'border-box',
                    margin: '15px auto'
                }
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).tabs, (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).differentTabs),
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($a3U2C$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).selected]: selectedTab === 'different'
                        }),
                        onClick: ()=>{
                            window.mixpanel.track('Select Different Tab');
                            setSelectedTab('different');
                        },
                        children: "Different Answer"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($a3U2C$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).selected]: selectedTab === 'same'
                        }),
                        onClick: ()=>{
                            window.mixpanel.track('Select Same Tab');
                            setSelectedTab('same');
                        },
                        children: "Same Answer"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($a3U2C$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).selected]: selectedTab === 'notAnswered'
                        }),
                        onClick: ()=>{
                            window.mixpanel.track('Select Not Answered Tab');
                            setSelectedTab('notAnswered');
                        },
                        children: "Not Answered"
                    })
                ]
            }),
            selectedTab === 'notAnswered' ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).tabs, (0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).differentTabs2),
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($a3U2C$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).selected]: selectedNestedTab === 'byMe'
                        }),
                        onClick: ()=>setSelectedNestedTab('byMe'),
                        children: "By Me"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($a3U2C$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($37f0d1662ade1d20$exports))).selected]: selectedNestedTab === 'byHim'
                        }),
                        onClick: ()=>setSelectedNestedTab('byHim'),
                        children: "By Him/Her"
                    })
                ]
            }) : null,
            questionsToShow && questionsToShow.length === 0 && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)($9282d3fa2c14f2a4$export$1f74963c34e8bfec, {}),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactflipmove))), {
                appearAnimation: "elevator",
                maintainContainerHeight: true,
                children: questionsToShow
            })
        ]
    });
});








var $573f3f4d4aeb06ed$exports = {};

$parcel$export($573f3f4d4aeb06ed$exports, "buttonsOutside", function () { return $573f3f4d4aeb06ed$export$eb4f292bdd97cb15; }, function (v) { return $573f3f4d4aeb06ed$export$eb4f292bdd97cb15 = v; });
$parcel$export($573f3f4d4aeb06ed$exports, "dropdownContainer", function () { return $573f3f4d4aeb06ed$export$a3681dba3470c8c4; }, function (v) { return $573f3f4d4aeb06ed$export$a3681dba3470c8c4 = v; });
$parcel$export($573f3f4d4aeb06ed$exports, "dropdownItemsContainer", function () { return $573f3f4d4aeb06ed$export$960d6a7eb8ce632b; }, function (v) { return $573f3f4d4aeb06ed$export$960d6a7eb8ce632b = v; });
$parcel$export($573f3f4d4aeb06ed$exports, "dropdownValue", function () { return $573f3f4d4aeb06ed$export$2ff2bc1709095d00; }, function (v) { return $573f3f4d4aeb06ed$export$2ff2bc1709095d00 = v; });
$parcel$export($573f3f4d4aeb06ed$exports, "input", function () { return $573f3f4d4aeb06ed$export$b7e3ae3d7c15e42e; }, function (v) { return $573f3f4d4aeb06ed$export$b7e3ae3d7c15e42e = v; });
$parcel$export($573f3f4d4aeb06ed$exports, "search", function () { return $573f3f4d4aeb06ed$export$d76128d007d19019; }, function (v) { return $573f3f4d4aeb06ed$export$d76128d007d19019 = v; });
$parcel$export($573f3f4d4aeb06ed$exports, "text", function () { return $573f3f4d4aeb06ed$export$6f093cfa640b7166; }, function (v) { return $573f3f4d4aeb06ed$export$6f093cfa640b7166 = v; });
var $573f3f4d4aeb06ed$export$eb4f292bdd97cb15;
var $573f3f4d4aeb06ed$export$a3681dba3470c8c4;
var $573f3f4d4aeb06ed$export$960d6a7eb8ce632b;
var $573f3f4d4aeb06ed$export$2ff2bc1709095d00;
var $573f3f4d4aeb06ed$export$b7e3ae3d7c15e42e;
var $573f3f4d4aeb06ed$export$d76128d007d19019;
var $573f3f4d4aeb06ed$export$6f093cfa640b7166;
$573f3f4d4aeb06ed$export$eb4f292bdd97cb15 = `vYFvXG_buttonsOutside`;
$573f3f4d4aeb06ed$export$a3681dba3470c8c4 = `vYFvXG_dropdownContainer`;
$573f3f4d4aeb06ed$export$960d6a7eb8ce632b = `vYFvXG_dropdownItemsContainer`;
$573f3f4d4aeb06ed$export$2ff2bc1709095d00 = `vYFvXG_dropdownValue`;
$573f3f4d4aeb06ed$export$b7e3ae3d7c15e42e = `vYFvXG_input`;
$573f3f4d4aeb06ed$export$d76128d007d19019 = `vYFvXG_search`;
$573f3f4d4aeb06ed$export$6f093cfa640b7166 = `vYFvXG_text`;


var $98465fae5e05657f$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ search: search, buttonsOutside: buttonsOutside = false, className: className, style: style }, ref2)=>{
    const [text, setText] = (0, $a3U2C$react.useState)('');
    const [dropdownValue, setDropdownValue] = (0, $a3U2C$react.useState)('Questions');
    const [showDropdown, setShowDropdown] = (0, $a3U2C$react.useState)(false);
    const ref = (0, $a3U2C$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowDropdown(false)
    });
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        ref: (node)=>{
            ref.current = node;
            if (ref2) ref2(node);
        },
        style: style,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).text, className, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).buttonsOutside]: buttonsOutside
        }),
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("input", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).input,
                placeholder: "Search here...",
                onChange: (e)=>setText(e.target.value),
                value: text
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).dropdownContainer,
                ref: ref,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).dropdownValue,
                        onClick: ()=>setShowDropdown(true),
                        children: dropdownValue
                    }),
                    showDropdown && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).dropdownItemsContainer,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).dropdownItem,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDropdownValue('Questions');
                                    setShowDropdown(false);
                                },
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                    children: "Questions"
                                })
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).dropdownItem,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDropdownValue('Users');
                                    setShowDropdown(false);
                                },
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                    children: "Users"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialExpandMore))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).expandIcon,
                        onClick: ()=>setShowDropdown(true)
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("button", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($573f3f4d4aeb06ed$exports))).search,
                onClick: ()=>search(dropdownValue, text),
                children: [
                    "Find",
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialSearch))), {
                        sx: {
                            fontSize: 16
                        }
                    })
                ]
            })
        ]
    });
});










var $1ded834500f65e9d$exports = {};

$parcel$export($1ded834500f65e9d$exports, "back", function () { return $1ded834500f65e9d$export$7c341cb16fc91138; }, function (v) { return $1ded834500f65e9d$export$7c341cb16fc91138 = v; });
$parcel$export($1ded834500f65e9d$exports, "screenWithGroupContent", function () { return $1ded834500f65e9d$export$de3da254965f2f43; }, function (v) { return $1ded834500f65e9d$export$de3da254965f2f43 = v; });
$parcel$export($1ded834500f65e9d$exports, "total", function () { return $1ded834500f65e9d$export$9086bb9c16b2b5b; }, function (v) { return $1ded834500f65e9d$export$9086bb9c16b2b5b = v; });
$parcel$export($1ded834500f65e9d$exports, "totalAndBack", function () { return $1ded834500f65e9d$export$ef9502a2481467bc; }, function (v) { return $1ded834500f65e9d$export$ef9502a2481467bc = v; });
var $1ded834500f65e9d$export$7c341cb16fc91138;
var $1ded834500f65e9d$export$de3da254965f2f43;
var $1ded834500f65e9d$export$9086bb9c16b2b5b;
var $1ded834500f65e9d$export$ef9502a2481467bc;
$1ded834500f65e9d$export$7c341cb16fc91138 = `-UEtmq_back`;
$1ded834500f65e9d$export$de3da254965f2f43 = `-UEtmq_screenWithGroupContent`;
$1ded834500f65e9d$export$9086bb9c16b2b5b = `-UEtmq_total`;
$1ded834500f65e9d$export$ef9502a2481467bc = `-UEtmq_totalAndBack`;


(0, ($parcel$interopDefault($a3U2C$handlebars))).registerHelper('bold', function(options) {
    const targetText = options.hash.text;
    const replacement = `<strong>${targetText}</strong>`;
    return new (0, ($parcel$interopDefault($a3U2C$handlebars))).SafeString(this.text.replace(new RegExp(targetText, 'gi'), replacement));
});
var $cbffa5f6c9e8ac6e$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ questions: questions, hasMore: hasMore, fetchQuestions: fetchQuestions, total: total, respond: respond, createNewGroup: createNewGroup, back: back, search: search, style: style, className: className, onUserClick: onUserClick, onQuestionClick: onQuestionClick }, ref)=>{
    const templateString = `{{bold text="${search}"}}`;
    const template = (0, ($parcel$interopDefault($a3U2C$handlebars))).compile(templateString);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $69ab011e6185c3e2$export$2e2bcd8739ae039), {
        id: "questions-search-scroll-target",
        ref: ref,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($1ded834500f65e9d$exports))).screenWithGroupContent),
        style: style,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($1ded834500f65e9d$exports))).totalAndBack,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($1ded834500f65e9d$exports))).total,
                        children: [
                            total,
                            " questions found"
                        ]
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($1ded834500f65e9d$exports))).back,
                        onClick: back
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactinfinitescrollcomponent))), {
                scrollableTarget: "questions-search-scroll-target",
                dataLength: questions.length,
                next: fetchQuestions,
                hasMore: hasMore,
                children: questions.map((i)=>{
                    let htmlOutput;
                    if (search) htmlOutput = template({
                        text: i.name
                    });
                    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $5fc94b7b21b51ec3$export$2e2bcd8739ae039), {
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












var $583561cd6d40e352$exports = {};

$parcel$export($583561cd6d40e352$exports, "back", function () { return $583561cd6d40e352$export$7c341cb16fc91138; }, function (v) { return $583561cd6d40e352$export$7c341cb16fc91138 = v; });
$parcel$export($583561cd6d40e352$exports, "column", function () { return $583561cd6d40e352$export$4e0c71f277ca26b3; }, function (v) { return $583561cd6d40e352$export$4e0c71f277ca26b3 = v; });
$parcel$export($583561cd6d40e352$exports, "row", function () { return $583561cd6d40e352$export$120ff0929b202a6d; }, function (v) { return $583561cd6d40e352$export$120ff0929b202a6d = v; });
$parcel$export($583561cd6d40e352$exports, "total", function () { return $583561cd6d40e352$export$9086bb9c16b2b5b; }, function (v) { return $583561cd6d40e352$export$9086bb9c16b2b5b = v; });
$parcel$export($583561cd6d40e352$exports, "totalAndBack", function () { return $583561cd6d40e352$export$ef9502a2481467bc; }, function (v) { return $583561cd6d40e352$export$ef9502a2481467bc = v; });
$parcel$export($583561cd6d40e352$exports, "userItem", function () { return $583561cd6d40e352$export$f6bda04bc7d10a12; }, function (v) { return $583561cd6d40e352$export$f6bda04bc7d10a12 = v; });
$parcel$export($583561cd6d40e352$exports, "usersContainer", function () { return $583561cd6d40e352$export$771ca420b1b6ed17; }, function (v) { return $583561cd6d40e352$export$771ca420b1b6ed17 = v; });
$parcel$export($583561cd6d40e352$exports, "usersItems", function () { return $583561cd6d40e352$export$2778a17561d67130; }, function (v) { return $583561cd6d40e352$export$2778a17561d67130 = v; });
var $583561cd6d40e352$export$7c341cb16fc91138;
var $583561cd6d40e352$export$4e0c71f277ca26b3;
var $583561cd6d40e352$export$120ff0929b202a6d;
var $583561cd6d40e352$export$9086bb9c16b2b5b;
var $583561cd6d40e352$export$ef9502a2481467bc;
var $583561cd6d40e352$export$f6bda04bc7d10a12;
var $583561cd6d40e352$export$771ca420b1b6ed17;
var $583561cd6d40e352$export$2778a17561d67130;
$583561cd6d40e352$export$7c341cb16fc91138 = `ZxHO7q_back`;
$583561cd6d40e352$export$4e0c71f277ca26b3 = `ZxHO7q_column`;
$583561cd6d40e352$export$120ff0929b202a6d = `ZxHO7q_row`;
$583561cd6d40e352$export$9086bb9c16b2b5b = `ZxHO7q_total`;
$583561cd6d40e352$export$ef9502a2481467bc = `ZxHO7q_totalAndBack`;
$583561cd6d40e352$export$f6bda04bc7d10a12 = `ZxHO7q_userItem`;
$583561cd6d40e352$export$771ca420b1b6ed17 = `ZxHO7q_usersContainer`;
$583561cd6d40e352$export$2778a17561d67130 = `ZxHO7q_usersItems`;


(0, ($parcel$interopDefault($a3U2C$handlebars))).registerHelper('bold', function(options) {
    const targetText = options.hash.text;
    const replacement = `<strong>${targetText}</strong>`;
    return new (0, ($parcel$interopDefault($a3U2C$handlebars))).SafeString(this.text.replace(new RegExp(targetText, 'gi'), replacement));
});
var $c72c751e836f4f45$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ style: style, users: users, fetchUsers: fetchUsers, hasMore: hasMore, total: total, back: back, search: search, onUserClick: onUserClick }, ref)=>{
    const templateString = `{{bold text="${search}"}}`;
    const template = (0, ($parcel$interopDefault($a3U2C$handlebars))).compile(templateString);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $69ab011e6185c3e2$export$2e2bcd8739ae039), {
        style: style,
        id: "users-search-scroll-target",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).usersContainer,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).totalAndBack,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).total,
                        children: [
                            total,
                            " users found"
                        ]
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).back,
                        onClick: back
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$reactinfinitescrollcomponent))), {
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
                className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).usersItems,
                children: users.map((user)=>{
                    let htmlOutput;
                    if (search) htmlOutput = template({
                        text: user.username
                    });
                    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).userItem,
                        onClick: ()=>onUserClick(user),
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).row,
                                children: [
                                    user.pictureUrl && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                        src: user.pictureUrl,
                                        alt: `${user.name} profile picture`
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($583561cd6d40e352$exports))).column,
                                        children: [
                                            htmlOutput ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: htmlOutput
                                                }
                                            }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                children: user.username
                                            }),
                                            Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("span", {
                                                children: [
                                                    (0, ($parcel$interopDefault($a3U2C$humannumber)))(user.followerCount),
                                                    " followers"
                                                ]
                                            }),
                                            user?.twitterVerified && user?.twitterVerified !== 'none' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                        children: "twitter verified"
                                                    }),
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                        src: (0, {}),
                                                        style: {
                                                            height: 16,
                                                            width: 16,
                                                            paddingLeft: 3,
                                                            border: 'none'
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.verifiedKYC && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                                        children: "verified by passport"
                                                    }),
                                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                        src: (0, {}),
                                                        style: {
                                                            height: 20,
                                                            width: 20,
                                                            paddingLeft: 3,
                                                            border: 'none'
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("a", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    window.mixpanel.track('X Profile Click', {
                                        url: `https://twitter.com/${user?.username}`
                                    });
                                },
                                href: `https://twitter.com/${user?.username}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialX))), {})
                            })
                        ]
                    }, user._id);
                })
            })
        ]
    });
});








var $ec1ad06292e66347$exports = {};

$parcel$export($ec1ad06292e66347$exports, "dropdownContainer", function () { return $ec1ad06292e66347$export$a3681dba3470c8c4; }, function (v) { return $ec1ad06292e66347$export$a3681dba3470c8c4 = v; });
$parcel$export($ec1ad06292e66347$exports, "dropdownItemsContainer", function () { return $ec1ad06292e66347$export$960d6a7eb8ce632b; }, function (v) { return $ec1ad06292e66347$export$960d6a7eb8ce632b = v; });
$parcel$export($ec1ad06292e66347$exports, "dropdownValue", function () { return $ec1ad06292e66347$export$2ff2bc1709095d00; }, function (v) { return $ec1ad06292e66347$export$2ff2bc1709095d00 = v; });
$parcel$export($ec1ad06292e66347$exports, "dropdownWithLabel", function () { return $ec1ad06292e66347$export$4c1173217024b6d6; }, function (v) { return $ec1ad06292e66347$export$4c1173217024b6d6 = v; });
$parcel$export($ec1ad06292e66347$exports, "search", function () { return $ec1ad06292e66347$export$d76128d007d19019; }, function (v) { return $ec1ad06292e66347$export$d76128d007d19019 = v; });
$parcel$export($ec1ad06292e66347$exports, "text", function () { return $ec1ad06292e66347$export$6f093cfa640b7166; }, function (v) { return $ec1ad06292e66347$export$6f093cfa640b7166 = v; });
var $ec1ad06292e66347$export$a3681dba3470c8c4;
var $ec1ad06292e66347$export$960d6a7eb8ce632b;
var $ec1ad06292e66347$export$2ff2bc1709095d00;
var $ec1ad06292e66347$export$4c1173217024b6d6;
var $ec1ad06292e66347$export$d76128d007d19019;
var $ec1ad06292e66347$export$6f093cfa640b7166;
$ec1ad06292e66347$export$a3681dba3470c8c4 = `WH9VhW_dropdownContainer`;
$ec1ad06292e66347$export$960d6a7eb8ce632b = `WH9VhW_dropdownItemsContainer`;
$ec1ad06292e66347$export$2ff2bc1709095d00 = `WH9VhW_dropdownValue`;
$ec1ad06292e66347$export$4c1173217024b6d6 = `WH9VhW_dropdownWithLabel`;
$ec1ad06292e66347$export$d76128d007d19019 = `WH9VhW_search`;
$ec1ad06292e66347$export$6f093cfa640b7166 = `WH9VhW_text`;


const $5cb6ccce4ae0dc89$export$f8fcd3a81add9e17 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ sort: sort = 'Most Answered', duration: duration = 'Week', setSort: setSort, setDuration: setDuration, className: className, style: style }, ref3)=>{
    const [showSortDropdown, setShowSortDropdown] = (0, $a3U2C$react.useState)(false);
    const [showDurationDropdown, setShowDurationDropdown] = (0, $a3U2C$react.useState)(false);
    const ref = (0, $a3U2C$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowSortDropdown(false)
    });
    const ref2 = (0, $a3U2C$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowDurationDropdown(false)
    });
    const setDurationAndClose = (value)=>{
        window.mixpanel.track('Update Filter', {
            filter: value
        });
        setDuration(value);
        setShowDurationDropdown(false);
    };
    const setSortAndClose = (value)=>{
        window.mixpanel.track('Update Sort', {
            sort: value
        });
        setSort(value);
        setShowSortDropdown(false);
    };
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        ref: ref3,
        style: style,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).text, className),
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownWithLabel,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $61e5751f6ef211ae$export$2e2bcd8739ae039), {
                        style: {
                            fontWeight: 300,
                            color: '#3b3b3b'
                        },
                        children: "Showing"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownContainer,
                        ref: ref,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownValue,
                                onClick: ()=>setShowSortDropdown(true),
                                children: sort
                            }),
                            showSortDropdown && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItemsContainer,
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Answered'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Most Answered"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Latest'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Latest"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Controversial'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Most Controversial"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Unanimous'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Most Unanimous"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Followed Authors'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Most Followed Authors"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialExpandMore))), {
                                onClick: ()=>setShowSortDropdown(true)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownWithLabel,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $61e5751f6ef211ae$export$2e2bcd8739ae039), {
                        style: {
                            fontWeight: 300,
                            color: '#3b3b3b'
                        },
                        children: [
                            "Questions ",
                            duration === 'All Time' ? 'of' : 'for last'
                        ]
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownContainer,
                        ref: ref2,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownValue,
                                onClick: ()=>setShowDurationDropdown(true),
                                children: duration
                            }),
                            showDurationDropdown && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItemsContainer,
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Day'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Day"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Week'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Week"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Month'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Month"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Year'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "Year"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($ec1ad06292e66347$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('All Time'),
                                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            children: "All time"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialExpandMore))), {
                                onClick: ()=>setShowDurationDropdown(true)
                            })
                        ]
                    })
                ]
            })
        ]
    });
});














var $6840313bf222f620$exports = {};

$parcel$export($6840313bf222f620$exports, "arrowDown", function () { return $6840313bf222f620$export$f61feb65ec56823b; }, function (v) { return $6840313bf222f620$export$f61feb65ec56823b = v; });
$parcel$export($6840313bf222f620$exports, "bars", function () { return $6840313bf222f620$export$60912654947077e3; }, function (v) { return $6840313bf222f620$export$60912654947077e3 = v; });
$parcel$export($6840313bf222f620$exports, "barsMinWidth", function () { return $6840313bf222f620$export$2e07f93cbaeb0394; }, function (v) { return $6840313bf222f620$export$2e07f93cbaeb0394 = v; });
$parcel$export($6840313bf222f620$exports, "card", function () { return $6840313bf222f620$export$aa3e815946b80764; }, function (v) { return $6840313bf222f620$export$aa3e815946b80764 = v; });
$parcel$export($6840313bf222f620$exports, "close", function () { return $6840313bf222f620$export$8360e631d277ea4d; }, function (v) { return $6840313bf222f620$export$8360e631d277ea4d = v; });
$parcel$export($6840313bf222f620$exports, "hint", function () { return $6840313bf222f620$export$464c821cd4347539; }, function (v) { return $6840313bf222f620$export$464c821cd4347539 = v; });
$parcel$export($6840313bf222f620$exports, "img", function () { return $6840313bf222f620$export$463b44d9bf3628be; }, function (v) { return $6840313bf222f620$export$463b44d9bf3628be = v; });
$parcel$export($6840313bf222f620$exports, "imgWithArrow", function () { return $6840313bf222f620$export$e4e79e5008270fc7; }, function (v) { return $6840313bf222f620$export$e4e79e5008270fc7 = v; });
$parcel$export($6840313bf222f620$exports, "questionText", function () { return $6840313bf222f620$export$500776a67ad9cd26; }, function (v) { return $6840313bf222f620$export$500776a67ad9cd26 = v; });
$parcel$export($6840313bf222f620$exports, "respondButton", function () { return $6840313bf222f620$export$6ea0e660ad045afa; }, function (v) { return $6840313bf222f620$export$6ea0e660ad045afa = v; });
$parcel$export($6840313bf222f620$exports, "stats", function () { return $6840313bf222f620$export$7804429c45dff272; }, function (v) { return $6840313bf222f620$export$7804429c45dff272 = v; });
$parcel$export($6840313bf222f620$exports, "text", function () { return $6840313bf222f620$export$6f093cfa640b7166; }, function (v) { return $6840313bf222f620$export$6f093cfa640b7166 = v; });
$parcel$export($6840313bf222f620$exports, "textContainer", function () { return $6840313bf222f620$export$2cedfd664bb3bd01; }, function (v) { return $6840313bf222f620$export$2cedfd664bb3bd01 = v; });
$parcel$export($6840313bf222f620$exports, "username", function () { return $6840313bf222f620$export$5e1be761f603d585; }, function (v) { return $6840313bf222f620$export$5e1be761f603d585 = v; });
$parcel$export($6840313bf222f620$exports, "usernameActual", function () { return $6840313bf222f620$export$9a369e4b55725081; }, function (v) { return $6840313bf222f620$export$9a369e4b55725081 = v; });
var $6840313bf222f620$export$f61feb65ec56823b;
var $6840313bf222f620$export$60912654947077e3;
var $6840313bf222f620$export$2e07f93cbaeb0394;
var $6840313bf222f620$export$aa3e815946b80764;
var $6840313bf222f620$export$8360e631d277ea4d;
var $6840313bf222f620$export$464c821cd4347539;
var $6840313bf222f620$export$463b44d9bf3628be;
var $6840313bf222f620$export$e4e79e5008270fc7;
var $6840313bf222f620$export$500776a67ad9cd26;
var $6840313bf222f620$export$6ea0e660ad045afa;
var $6840313bf222f620$export$7804429c45dff272;
var $6840313bf222f620$export$6f093cfa640b7166;
var $6840313bf222f620$export$2cedfd664bb3bd01;
var $6840313bf222f620$export$5e1be761f603d585;
var $6840313bf222f620$export$9a369e4b55725081;
$6840313bf222f620$export$f61feb65ec56823b = `_4qkH1G_arrowDown`;
$6840313bf222f620$export$60912654947077e3 = `_4qkH1G_bars`;
$6840313bf222f620$export$2e07f93cbaeb0394 = `_4qkH1G_barsMinWidth`;
$6840313bf222f620$export$aa3e815946b80764 = `_4qkH1G_card`;
$6840313bf222f620$export$8360e631d277ea4d = `_4qkH1G_close`;
$6840313bf222f620$export$464c821cd4347539 = `_4qkH1G_hint`;
$6840313bf222f620$export$463b44d9bf3628be = `_4qkH1G_img`;
$6840313bf222f620$export$e4e79e5008270fc7 = `_4qkH1G_imgWithArrow`;
$6840313bf222f620$export$500776a67ad9cd26 = `_4qkH1G_questionText`;
$6840313bf222f620$export$6ea0e660ad045afa = `_4qkH1G_respondButton`;
$6840313bf222f620$export$7804429c45dff272 = `_4qkH1G_stats`;
$6840313bf222f620$export$6f093cfa640b7166 = `_4qkH1G_text`;
$6840313bf222f620$export$2cedfd664bb3bd01 = `_4qkH1G_textContainer`;
$6840313bf222f620$export$5e1be761f603d585 = `_4qkH1G_username`;
$6840313bf222f620$export$9a369e4b55725081 = `_4qkH1G_usernameActual`;


const $eb2843dbfbee7bb8$var$calcPercent = (x, sum)=>Math.round(x / sum * 100);
const $eb2843dbfbee7bb8$export$38435c7d2fecd2f = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ yourOwnQuestion: yourOwnQuestion, onUserClick: onUserClick, userPictureUrl: userPictureUrl, shortId: shortId, username: username, name: name, answersCount: answersCount, me: { answer: answer } = {}, respond: respond, createNewGroup: createNewGroup, close: close, _id: _id, handleTwitterLogin: handleTwitterLogin, selected: selected = false }, ref)=>{
    const [state, setState] = (0, $a3U2C$react.useState)(null);
    const totalAnswerCount = answersCount.yes + answersCount.no;
    const userReplyCount = state ? answersCount[state] : totalAnswerCount;
    const yesPercentage = $eb2843dbfbee7bb8$var$calcPercent(answersCount.yes, totalAnswerCount);
    const noPercentage = $eb2843dbfbee7bb8$var$calcPercent(answersCount.no, totalAnswerCount);
    const { setIsLoginModalOpen: setIsLoginModalOpen, setAnswer: setAnswer } = (0, $a3U2C$react.useContext)((0, $d76f51c1c8726ad5$export$32c650b79baf5fee));
    const share = ()=>{
        if (navigator.share) {
            window.mixpanel.track('Share', {
                questionId: shortId
            });
            navigator.share({
                title: 'Question',
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
        window.mixpanel.track('Anonymous Question Answer', {
            questionId: shortId,
            answer: answer
        });
    };
    (0, $a3U2C$react.useEffect)(()=>{
        const resizeObserver = new ResizeObserver(()=>{
            const a = document.querySelector('#question-card');
            const b = document.querySelector('#question-text');
            const c = document.querySelector('#question-text-size');
            const containerHeight = a.clientHeight;
            const questionHeight = b.clientHeight;
            const containerWidth = a.clientWidth;
            const questionWidth = b.clientWidth;
            if (questionHeight + 178 < containerHeight && questionWidth <= containerWidth) return resizeObserver.disconnect();
            const currentFontSize = parseInt(window.getComputedStyle(c).fontSize.replace('px', ''));
            if (currentFontSize === 0) {
                c.style['font-size'] = '32px';
                b.style.overflow = 'auto';
                b.style.height = 'calc(100dvh - 126px)';
                return resizeObserver.disconnect();
            }
            c.style['font-size'] = `${currentFontSize - 1}px`;
        });
        resizeObserver.observe(document.querySelector('#question-text'));
        window.addEventListener('resize', (0, ($parcel$interopDefault($a3U2C$lodash))).debounce(()=>{
            document.querySelector('#question-text-size').style['font-size'] = '200px';
            resizeObserver.observe(document.querySelector('#question-text'));
        }, 1000));
        return ()=>resizeObserver.disconnect();
    }, []);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("article", {
        id: "question-card",
        ref: ref,
        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).card, {
            'selected-question': selected
        }),
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).close,
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).back,
                    onClick: close
                })
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                id: "question-text",
                style: {
                    padding: '0 26px'
                },
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $5028331f39524b26$export$2e2bcd8739ae039), {
                        h1: true,
                        style: {
                            fontSize: 200,
                            fontWeight: 200
                        },
                        id: "question-text-size",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).username,
                        children: [
                            ' ',
                            "by ",
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).usernameActual,
                                onClick: onUserClick,
                                children: username
                            }),
                            ",",
                            ' ',
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                                style: {
                                    display: 'inline',
                                    textAlign: 'center'
                                },
                                secondary: true,
                                children: [
                                    "answered by ",
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $503cd80abace9cc6$export$2e2bcd8739ae039), {
                                        x: userReplyCount
                                    }),
                                    " people"
                                ]
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialShare))), {
                                sx: {
                                    marginLeft: '10px',
                                    cursor: 'pointer'
                                },
                                onClick: share
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                style: {
                    position: 'absolute',
                    bottom: totalAnswerCount === 0 ? 16 : 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: [
                    !yourOwnQuestion && !answer && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $1ad5fe3037277d9b$export$2e2bcd8739ae039), {
                        style: {
                            maxWidth: 400,
                            width: '90%'
                        },
                        respond: respond || redirectToLogin
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).stats,
                        children: userReplyCount !== 0 && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).textContainer,
                                    children: [
                                        yesPercentage !== 0 && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).text,
                                            style: {
                                                width: `${yesPercentage}%`,
                                                position: 'relative',
                                                display: 'flex',
                                                gap: 12,
                                                bottom: 0,
                                                minWidth: 102
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("span", {
                                                    onClick: ()=>createNewGroup('yes'),
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'end'
                                                    },
                                                    children: [
                                                        yesPercentage,
                                                        "%"
                                                    ]
                                                }),
                                                answer?.toLowerCase() === 'yes' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).imgWithArrow,
                                                    children: [
                                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).img,
                                                            src: userPictureUrl,
                                                            alt: "profile picture"
                                                        }),
                                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).arrowDown
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        noPercentage !== 0 && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $3faaf67f4ad0d2f4$export$2e2bcd8739ae039), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).text,
                                            style: {
                                                width: `${noPercentage}%`,
                                                position: 'relative',
                                                display: 'flex',
                                                gap: 12,
                                                bottom: 0,
                                                minWidth: 102
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("span", {
                                                    onClick: ()=>createNewGroup('no'),
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'end'
                                                    },
                                                    children: [
                                                        noPercentage,
                                                        "%"
                                                    ]
                                                }),
                                                answer?.toLowerCase() === 'no' && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).imgWithArrow,
                                                    children: [
                                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).img,
                                                            src: userPictureUrl,
                                                            alt: "profile picture"
                                                        }),
                                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).arrowDown
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $497ae48649beb625$export$2e2bcd8739ae039), {
                                    className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).bars, {
                                        [(0, (/*@__PURE__*/$parcel$interopDefault($6840313bf222f620$exports))).barsMinWidth]: yesPercentage !== 0 && noPercentage !== 0
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





var $1498383f1f5424d2$exports = {};

$parcel$export($1498383f1f5424d2$exports, "btn", function () { return $1498383f1f5424d2$export$534219b709288da9; }, function (v) { return $1498383f1f5424d2$export$534219b709288da9 = v; });
$parcel$export($1498383f1f5424d2$exports, "changeGroupBtn", function () { return $1498383f1f5424d2$export$e05a52e99661808; }, function (v) { return $1498383f1f5424d2$export$e05a52e99661808 = v; });
$parcel$export($1498383f1f5424d2$exports, "chat", function () { return $1498383f1f5424d2$export$530dccc8e24f4e99; }, function (v) { return $1498383f1f5424d2$export$530dccc8e24f4e99 = v; });
$parcel$export($1498383f1f5424d2$exports, "currentGroup", function () { return $1498383f1f5424d2$export$d066cbb5a8cab704; }, function (v) { return $1498383f1f5424d2$export$d066cbb5a8cab704 = v; });
$parcel$export($1498383f1f5424d2$exports, "input", function () { return $1498383f1f5424d2$export$b7e3ae3d7c15e42e; }, function (v) { return $1498383f1f5424d2$export$b7e3ae3d7c15e42e = v; });
$parcel$export($1498383f1f5424d2$exports, "inputGroup", function () { return $1498383f1f5424d2$export$995e14ef61d916e6; }, function (v) { return $1498383f1f5424d2$export$995e14ef61d916e6 = v; });
$parcel$export($1498383f1f5424d2$exports, "message", function () { return $1498383f1f5424d2$export$a8ecead220dd38a6; }, function (v) { return $1498383f1f5424d2$export$a8ecead220dd38a6 = v; });
$parcel$export($1498383f1f5424d2$exports, "messageBoard", function () { return $1498383f1f5424d2$export$af8c1666bc2bbdc3; }, function (v) { return $1498383f1f5424d2$export$af8c1666bc2bbdc3 = v; });
$parcel$export($1498383f1f5424d2$exports, "mine", function () { return $1498383f1f5424d2$export$25c810edd2c6953a; }, function (v) { return $1498383f1f5424d2$export$25c810edd2c6953a = v; });
$parcel$export($1498383f1f5424d2$exports, "notMine", function () { return $1498383f1f5424d2$export$16cf7ecddabb39f4; }, function (v) { return $1498383f1f5424d2$export$16cf7ecddabb39f4 = v; });
$parcel$export($1498383f1f5424d2$exports, "picture", function () { return $1498383f1f5424d2$export$1188214e9d38144e; }, function (v) { return $1498383f1f5424d2$export$1188214e9d38144e = v; });
$parcel$export($1498383f1f5424d2$exports, "top", function () { return $1498383f1f5424d2$export$1e95b668f3b82d; }, function (v) { return $1498383f1f5424d2$export$1e95b668f3b82d = v; });
var $1498383f1f5424d2$export$534219b709288da9;
var $1498383f1f5424d2$export$e05a52e99661808;
var $1498383f1f5424d2$export$530dccc8e24f4e99;
var $1498383f1f5424d2$export$d066cbb5a8cab704;
var $1498383f1f5424d2$export$b7e3ae3d7c15e42e;
var $1498383f1f5424d2$export$995e14ef61d916e6;
var $1498383f1f5424d2$export$a8ecead220dd38a6;
var $1498383f1f5424d2$export$af8c1666bc2bbdc3;
var $1498383f1f5424d2$export$25c810edd2c6953a;
var $1498383f1f5424d2$export$16cf7ecddabb39f4;
var $1498383f1f5424d2$export$1188214e9d38144e;
var $1498383f1f5424d2$export$1e95b668f3b82d;
$1498383f1f5424d2$export$534219b709288da9 = `yon3wa_btn`;
$1498383f1f5424d2$export$e05a52e99661808 = `yon3wa_changeGroupBtn`;
$1498383f1f5424d2$export$530dccc8e24f4e99 = `yon3wa_chat`;
$1498383f1f5424d2$export$d066cbb5a8cab704 = `yon3wa_currentGroup`;
$1498383f1f5424d2$export$b7e3ae3d7c15e42e = `yon3wa_input`;
$1498383f1f5424d2$export$995e14ef61d916e6 = `yon3wa_inputGroup`;
$1498383f1f5424d2$export$a8ecead220dd38a6 = `yon3wa_message`;
$1498383f1f5424d2$export$af8c1666bc2bbdc3 = `yon3wa_messageBoard`;
$1498383f1f5424d2$export$25c810edd2c6953a = `yon3wa_mine`;
$1498383f1f5424d2$export$16cf7ecddabb39f4 = `yon3wa_notMine`;
$1498383f1f5424d2$export$1188214e9d38144e = `yon3wa_picture`;
$1498383f1f5424d2$export$1e95b668f3b82d = `yon3wa_top`;


const $36961d44900f066b$var$defaultGroup = {
    name: 'You',
    peopleCount: 10,
    id: 1
};
const $36961d44900f066b$export$125e71c614a0b114 = ({ messages: messages, sendMessage: sendMessage, onUserClick: onUserClick, currentGroup: currentGroup = $36961d44900f066b$var$defaultGroup, changeGroup: changeGroup })=>{
    const [value, setValue] = (0, $a3U2C$react.useState)('');
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).chat,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).top,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).currentGroup,
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("b", {
                                children: currentGroup.name
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                        children: "people count: "
                                    }),
                                    currentGroup.peopleCount
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).changeGroupBtn,
                        onClick: changeGroup,
                        children: "change group"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).messageBoard,
                children: messages.map((msg, index)=>/*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                        className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).message, {
                            [(0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).mine]: msg.mine,
                            [(0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).notMine]: !msg.mine
                        }),
                        children: [
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                                onClick: ()=>onUserClick(msg.username),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).picture,
                                src: msg.pictureUrl
                            }),
                            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                children: msg.text
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).inputGroup,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("textarea", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).input,
                        value: value,
                        onChange: ({ target: { value: value } })=>setValue(value)
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($1498383f1f5424d2$exports))).btn,
                        onClick: sendMessage,
                        children: "Send"
                    })
                ]
            })
        ]
    });
};







var $3442d7fdb951b5ed$exports = {};
$3442d7fdb951b5ed$exports = "<svg width=\"252\" height=\"252\" viewBox=\"0 0 252 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<mask id=\"mask0_4864_1939\" style=\"mask-type: luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"252\" height=\"252\">\r\n<path d=\"M125.999 251.394C195.253 251.394 251.393 195.253 251.393 126C251.393 56.7468 195.253 0.606079 125.999 0.606079C56.7462 0.606079 0.605469 56.7468 0.605469 126C0.605469 195.253 56.7462 251.394 125.999 251.394Z\" fill=\"white\"></path>\r\n</mask>\r\n<g mask=\"url('#mask0_4864_1939')\">\r\n<path d=\"M263.267 -11.2672H-11.2676V263.267H263.267V-11.2672Z\" fill=\"url('#paint0_linear_4864_1939')\"></path>\r\n</g>\r\n<path d=\"M162.264 153.059L197.741 132.574C199.62 131.489 200.782 129.471 200.782 127.301V86.3354C200.782 84.1696 199.615 82.1472 197.741 81.0618L162.264 60.5767C160.385 59.4912 158.056 59.4964 156.177 60.5767L120.7 81.0618C118.821 82.1472 117.659 84.1696 117.659 86.3354V159.546L92.781 173.908L67.9029 159.546V130.818L92.781 116.456L109.191 125.928V106.657L95.8222 98.9408C94.9006 98.4084 93.8459 98.1268 92.7758 98.1268C91.7058 98.1268 90.651 98.4084 89.7346 98.9408L54.2581 119.426C52.379 120.511 51.2168 122.529 51.2168 124.7V165.665C51.2168 167.83 52.3842 169.853 54.2581 170.938L89.7346 191.423C91.6085 192.504 93.9432 192.504 95.8222 191.423L131.299 170.943C133.178 169.858 134.34 167.836 134.34 165.67V92.4589L134.791 92.2029L159.218 78.0973L184.096 92.4589V121.187L159.218 135.549L142.834 126.087V145.359L156.177 153.064C158.056 154.145 160.385 154.145 162.264 153.064V153.059Z\" fill=\"white\"></path>\r\n<defs>\r\n<linearGradient id=\"paint0_linear_4864_1939\" x1=\"-61.4385\" y1=\"11.2966\" x2=\"221.974\" y2=\"184.732\" gradientUnits=\"userSpaceOnUse\">\r\n<stop stop-color=\"#A229C5\"></stop>\r\n<stop offset=\"1\" stop-color=\"#7B3FE4\"></stop>\r\n</linearGradient>\r\n</defs>\r\n</svg>\r\n";


var $2089f9fb34111e2b$exports = {};

$parcel$export($2089f9fb34111e2b$exports, "additional-text", function () { return $2089f9fb34111e2b$export$202e93cb7fe09fc8; }, function (v) { return $2089f9fb34111e2b$export$202e93cb7fe09fc8 = v; });
$parcel$export($2089f9fb34111e2b$exports, "coin", function () { return $2089f9fb34111e2b$export$3c9d1e4131afeeb8; }, function (v) { return $2089f9fb34111e2b$export$3c9d1e4131afeeb8 = v; });
$parcel$export($2089f9fb34111e2b$exports, "coin--animated", function () { return $2089f9fb34111e2b$export$9fb4f45ed9e347e0; }, function (v) { return $2089f9fb34111e2b$export$9fb4f45ed9e347e0 = v; });
$parcel$export($2089f9fb34111e2b$exports, "coin-x-axis", function () { return $2089f9fb34111e2b$export$a729607373715201; }, function (v) { return $2089f9fb34111e2b$export$a729607373715201 = v; });
$parcel$export($2089f9fb34111e2b$exports, "coin-y-axis-and-flip", function () { return $2089f9fb34111e2b$export$4079574a46612420; }, function (v) { return $2089f9fb34111e2b$export$4079574a46612420 = v; });
$parcel$export($2089f9fb34111e2b$exports, "icon", function () { return $2089f9fb34111e2b$export$1ca1ec8b29a4ce27; }, function (v) { return $2089f9fb34111e2b$export$1ca1ec8b29a4ce27 = v; });
$parcel$export($2089f9fb34111e2b$exports, "icons", function () { return $2089f9fb34111e2b$export$df03f54e09e486fa; }, function (v) { return $2089f9fb34111e2b$export$df03f54e09e486fa = v; });
$parcel$export($2089f9fb34111e2b$exports, "landing", function () { return $2089f9fb34111e2b$export$a9ae88069d8ac14e; }, function (v) { return $2089f9fb34111e2b$export$a9ae88069d8ac14e = v; });
$parcel$export($2089f9fb34111e2b$exports, "landing-button", function () { return $2089f9fb34111e2b$export$f282e5191b337f50; }, function (v) { return $2089f9fb34111e2b$export$f282e5191b337f50 = v; });
$parcel$export($2089f9fb34111e2b$exports, "made-by", function () { return $2089f9fb34111e2b$export$101a475b15c86041; }, function (v) { return $2089f9fb34111e2b$export$101a475b15c86041 = v; });
$parcel$export($2089f9fb34111e2b$exports, "mobile-second-text", function () { return $2089f9fb34111e2b$export$9b4a162e4d9f672; }, function (v) { return $2089f9fb34111e2b$export$9b4a162e4d9f672 = v; });
$parcel$export($2089f9fb34111e2b$exports, "name", function () { return $2089f9fb34111e2b$export$a8ff84c12d48cfa6; }, function (v) { return $2089f9fb34111e2b$export$a8ff84c12d48cfa6 = v; });
$parcel$export($2089f9fb34111e2b$exports, "open-app-button", function () { return $2089f9fb34111e2b$export$ae608c4430a9e9fc; }, function (v) { return $2089f9fb34111e2b$export$ae608c4430a9e9fc = v; });
$parcel$export($2089f9fb34111e2b$exports, "privacy", function () { return $2089f9fb34111e2b$export$116a08ee153e3bde; }, function (v) { return $2089f9fb34111e2b$export$116a08ee153e3bde = v; });
$parcel$export($2089f9fb34111e2b$exports, "scroll", function () { return $2089f9fb34111e2b$export$209876d7b1ac8f3; }, function (v) { return $2089f9fb34111e2b$export$209876d7b1ac8f3 = v; });
$parcel$export($2089f9fb34111e2b$exports, "scrollIcon", function () { return $2089f9fb34111e2b$export$efb197c1da01f76f; }, function (v) { return $2089f9fb34111e2b$export$efb197c1da01f76f = v; });
$parcel$export($2089f9fb34111e2b$exports, "scrollText", function () { return $2089f9fb34111e2b$export$b21f6e6a6b9fbbc5; }, function (v) { return $2089f9fb34111e2b$export$b21f6e6a6b9fbbc5 = v; });
$parcel$export($2089f9fb34111e2b$exports, "scrollWheel", function () { return $2089f9fb34111e2b$export$594daf8f7b4e7e32; }, function (v) { return $2089f9fb34111e2b$export$594daf8f7b4e7e32 = v; });
$parcel$export($2089f9fb34111e2b$exports, "search-modal", function () { return $2089f9fb34111e2b$export$2fd0fffb18ebb0c0; }, function (v) { return $2089f9fb34111e2b$export$2fd0fffb18ebb0c0 = v; });
$parcel$export($2089f9fb34111e2b$exports, "second-text-container", function () { return $2089f9fb34111e2b$export$891c99f874761757; }, function (v) { return $2089f9fb34111e2b$export$891c99f874761757 = v; });
$parcel$export($2089f9fb34111e2b$exports, "slides", function () { return $2089f9fb34111e2b$export$59de61ccd1a8a2d9; }, function (v) { return $2089f9fb34111e2b$export$59de61ccd1a8a2d9 = v; });
$parcel$export($2089f9fb34111e2b$exports, "smaller", function () { return $2089f9fb34111e2b$export$3f732695c1493aec; }, function (v) { return $2089f9fb34111e2b$export$3f732695c1493aec = v; });
$parcel$export($2089f9fb34111e2b$exports, "subtitle", function () { return $2089f9fb34111e2b$export$c96745152eb2740f; }, function (v) { return $2089f9fb34111e2b$export$c96745152eb2740f = v; });
$parcel$export($2089f9fb34111e2b$exports, "svgWrapper", function () { return $2089f9fb34111e2b$export$e5459a6f92d1eda8; }, function (v) { return $2089f9fb34111e2b$export$e5459a6f92d1eda8 = v; });
$parcel$export($2089f9fb34111e2b$exports, "text", function () { return $2089f9fb34111e2b$export$6f093cfa640b7166; }, function (v) { return $2089f9fb34111e2b$export$6f093cfa640b7166 = v; });
var $2089f9fb34111e2b$export$202e93cb7fe09fc8;
var $2089f9fb34111e2b$export$3c9d1e4131afeeb8;
var $2089f9fb34111e2b$export$9fb4f45ed9e347e0;
var $2089f9fb34111e2b$export$a729607373715201;
var $2089f9fb34111e2b$export$4079574a46612420;
var $2089f9fb34111e2b$export$1ca1ec8b29a4ce27;
var $2089f9fb34111e2b$export$df03f54e09e486fa;
var $2089f9fb34111e2b$export$a9ae88069d8ac14e;
var $2089f9fb34111e2b$export$f282e5191b337f50;
var $2089f9fb34111e2b$export$101a475b15c86041;
var $2089f9fb34111e2b$export$9b4a162e4d9f672;
var $2089f9fb34111e2b$export$a8ff84c12d48cfa6;
var $2089f9fb34111e2b$export$ae608c4430a9e9fc;
var $2089f9fb34111e2b$export$116a08ee153e3bde;
var $2089f9fb34111e2b$export$209876d7b1ac8f3;
var $2089f9fb34111e2b$export$efb197c1da01f76f;
var $2089f9fb34111e2b$export$b21f6e6a6b9fbbc5;
var $2089f9fb34111e2b$export$594daf8f7b4e7e32;
var $2089f9fb34111e2b$export$2fd0fffb18ebb0c0;
var $2089f9fb34111e2b$export$891c99f874761757;
var $2089f9fb34111e2b$export$59de61ccd1a8a2d9;
var $2089f9fb34111e2b$export$3f732695c1493aec;
var $2089f9fb34111e2b$export$c96745152eb2740f;
var $2089f9fb34111e2b$export$e5459a6f92d1eda8;
var $2089f9fb34111e2b$export$6f093cfa640b7166;
$2089f9fb34111e2b$export$202e93cb7fe09fc8 = `m38itG_additional-text`;
$2089f9fb34111e2b$export$3c9d1e4131afeeb8 = `m38itG_coin`;
$2089f9fb34111e2b$export$9fb4f45ed9e347e0 = `m38itG_coin--animated`;
$2089f9fb34111e2b$export$a729607373715201 = `m38itG_coin-x-axis`;
$2089f9fb34111e2b$export$a729607373715201;
$2089f9fb34111e2b$export$4079574a46612420 = `m38itG_coin-y-axis-and-flip`;
$2089f9fb34111e2b$export$4079574a46612420;
$2089f9fb34111e2b$export$1ca1ec8b29a4ce27 = `m38itG_icon`;
$2089f9fb34111e2b$export$df03f54e09e486fa = `m38itG_icons`;
$2089f9fb34111e2b$export$a9ae88069d8ac14e = `m38itG_landing`;
$2089f9fb34111e2b$export$f282e5191b337f50 = `m38itG_landing-button`;
$2089f9fb34111e2b$export$101a475b15c86041 = `m38itG_made-by`;
$2089f9fb34111e2b$export$9b4a162e4d9f672 = `m38itG_mobile-second-text`;
$2089f9fb34111e2b$export$a8ff84c12d48cfa6 = `m38itG_name`;
$2089f9fb34111e2b$export$ae608c4430a9e9fc = `m38itG_open-app-button`;
$2089f9fb34111e2b$export$116a08ee153e3bde = `m38itG_privacy`;
$2089f9fb34111e2b$export$209876d7b1ac8f3 = `m38itG_scroll`;
$2089f9fb34111e2b$export$efb197c1da01f76f = `m38itG_scrollIcon`;
$2089f9fb34111e2b$export$b21f6e6a6b9fbbc5 = `m38itG_scrollText`;
$2089f9fb34111e2b$export$b21f6e6a6b9fbbc5;
$2089f9fb34111e2b$export$594daf8f7b4e7e32 = `m38itG_scrollWheel`;
$2089f9fb34111e2b$export$594daf8f7b4e7e32;
$2089f9fb34111e2b$export$2fd0fffb18ebb0c0 = `m38itG_search-modal`;
$2089f9fb34111e2b$export$891c99f874761757 = `m38itG_second-text-container`;
$2089f9fb34111e2b$export$59de61ccd1a8a2d9 = `m38itG_slides`;
$2089f9fb34111e2b$export$3f732695c1493aec = `m38itG_smaller`;
$2089f9fb34111e2b$export$c96745152eb2740f = `m38itG_subtitle`;
$2089f9fb34111e2b$export$e5459a6f92d1eda8 = `m38itG_svgWrapper`;
$2089f9fb34111e2b$export$6f093cfa640b7166 = `m38itG_text`;


const $4fae5be371e65393$export$12449a31c6671d53 = /*#__PURE__*/ (0, $a3U2C$react.forwardRef)(({ jwt: jwt, isBot: isBot, description: description, title: title }, ref)=>{
    (0, $a3U2C$react.useEffect)(()=>{
        document.querySelector('body > div > div').style['max-height'] = 'unset';
        document.querySelector('body > div > div').style['min-height'] = 'unset';
        return ()=>{
            document.querySelector('body > div > div').style['max-height'] = '100svh';
            document.querySelector('body > div > div').style['min-height'] = '100svh';
        };
    }, []);
    console.log('title: ', title);
    console.log('isBot: ', isBot);
    console.log('description: ', description);
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactjsxruntime.Fragment), {
        children: [
            title && isBot ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reacthelmet.Helmet), {
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("meta", {
                        name: "keywords",
                        content: title + ', create polls, online surveys, interactive voting'
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("title", {
                        children: title
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("script", {
                        type: "application/ld+json",
                        children: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: title,
                            description: description,
                            url: `https://poll.cc/${title.replace(/\s+/g, '-').toLowerCase()}`
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reacthelmet.Helmet), {
                encodeSpecialCharacters: false,
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("title", {
                        children: "poll.cc | online polls"
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("meta", {
                        name: "description",
                        content: "Online polls on social and political issues. Online voting app."
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("script", {
                        type: "application/ld+json",
                        children: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: 'poll.cc | online polls',
                            description: 'Online polls on social and political issues. Online voting app.',
                            url: 'https://poll.cc/'
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).slides,
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                    ref: ref,
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).landing,
                    children: [
                        isBot ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("section", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).text,
                            style: {
                                fontSize: 39,
                                padding: '0 41px'
                            },
                            children: [
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h1", {
                                    children: title
                                }),
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("p", {
                                    children: description
                                })
                            ]
                        }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).text,
                            children: [
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h1", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).name,
                                    children: "Non-anonymous online voting"
                                }),
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("h2", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).subtitle,
                                    children: "on social and political issues."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)((0, $a3U2C$reactrouterdom.Link), {
                            replace: true,
                            to: jwt ? '/' : '/app',
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports)))['open-app-button'],
                            children: [
                                "Open App ",
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialArrowForwardIos))), {
                                    sx: {
                                        marginLeft: '15px',
                                        fontSize: 20
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).icons,
                            children: [
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports)))['made-by'],
                                    children: [
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                            style: {
                                                fontSize: 15
                                            },
                                            children: "made by"
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("a", {
                                            href: "mailto:piliponful@gmail.com",
                                            children: "piliponful"
                                        })
                                    ]
                                }),
                                window.featureFlags?.rewards && /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).svgWrapper,
                                            dangerouslySetInnerHTML: {
                                                __html: (0, (/*@__PURE__*/$parcel$interopDefault($3442d7fdb951b5ed$exports)))
                                            }
                                        }),
                                        /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("a", {
                                            style: {
                                                fontSize: 15,
                                                letterSpacing: '0px',
                                                textDecoration: 'none',
                                                color: 'gray',
                                                fontWeight: 200,
                                                whiteSpace: 'nowrap'
                                            },
                                            target: "_blank",
                                            href: "https://polygonscan.com/token/0x080376D131E2036feF1D321490cF178A3bEEA805",
                                            rel: "noreferrer",
                                            children: "token on polyscan"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($2089f9fb34111e2b$exports))).privacy,
                                    children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("a", {
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













var $dbb7a113fa107b93$exports = {};

$parcel$export($dbb7a113fa107b93$exports, "active", function () { return $dbb7a113fa107b93$export$89da14300d534261; }, function (v) { return $dbb7a113fa107b93$export$89da14300d534261 = v; });
$parcel$export($dbb7a113fa107b93$exports, "avatar", function () { return $dbb7a113fa107b93$export$345c5736c8054f22; }, function (v) { return $dbb7a113fa107b93$export$345c5736c8054f22 = v; });
$parcel$export($dbb7a113fa107b93$exports, "leftbar", function () { return $dbb7a113fa107b93$export$c8f087dc1b8e16ac; }, function (v) { return $dbb7a113fa107b93$export$c8f087dc1b8e16ac = v; });
$parcel$export($dbb7a113fa107b93$exports, "nav-icons", function () { return $dbb7a113fa107b93$export$2eded710494fe2d7; }, function (v) { return $dbb7a113fa107b93$export$2eded710494fe2d7 = v; });
$parcel$export($dbb7a113fa107b93$exports, "nav-item", function () { return $dbb7a113fa107b93$export$f0e24ade441c6754; }, function (v) { return $dbb7a113fa107b93$export$f0e24ade441c6754 = v; });
var $dbb7a113fa107b93$export$89da14300d534261;
var $dbb7a113fa107b93$export$345c5736c8054f22;
var $dbb7a113fa107b93$export$c8f087dc1b8e16ac;
var $dbb7a113fa107b93$export$2eded710494fe2d7;
var $dbb7a113fa107b93$export$f0e24ade441c6754;
$dbb7a113fa107b93$export$89da14300d534261 = `_0kX8DG_active`;
$dbb7a113fa107b93$export$345c5736c8054f22 = `_0kX8DG_avatar`;
$dbb7a113fa107b93$export$c8f087dc1b8e16ac = `_0kX8DG_leftbar`;
$dbb7a113fa107b93$export$2eded710494fe2d7 = `_0kX8DG_nav-icons`;
$dbb7a113fa107b93$export$f0e24ade441c6754 = `_0kX8DG_nav-item`;


const $4dd58b24b9ea8ec0$export$750f17c514384ccf = ({ user: user, showMyHistory: showMyHistory })=>{
    const { setShowGroups: setShowGroups, showGroups: showGroups, setShowSearchMenu: setShowSearchMenu, showSearchMenu: showSearchMenu, setIsLoginModalOpen: setIsLoginModalOpen, screenName: screenName } = (0, $a3U2C$react.useContext)((0, $d76f51c1c8726ad5$export$32c650b79baf5fee));
    const [isHovered, setIsHovered] = (0, $a3U2C$react.useState)(false);
    const isMobile = (0, $a3U2C$reactresponsive.useMediaQuery)({
        query: '(max-width: 925px)'
    });
    return /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports))).leftbar,
        children: [
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsxs)("nav", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports)))['nav-icons'],
                children: [
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$reactrouterdom.Link), {
                        to: user ? '/' : '/app',
                        style: {
                            lineHeight: 1
                        },
                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                            onClick: ()=>{
                                if (screenName && showGroups) setShowGroups(false);
                            },
                            className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports)))['nav-item'], {
                                [(0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports))).active]: screenName && showGroups ? false : location?.pathname === '/' || location?.pathname === '/app'
                            }),
                            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialHome))), {
                                sx: {
                                    fill: '#aaa'
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                        content: "Groups",
                        placement: "right",
                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                            onMouseEnter: ()=>setIsHovered(true),
                            onMouseLeave: ()=>setIsHovered(false),
                            className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports)))['nav-item'], {
                                [(0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports))).active]: showGroups
                            }),
                            style: {
                                padding: 6
                            },
                            onClick: ()=>{
                                setShowGroups((state)=>!state);
                                setShowSearchMenu(false);
                            },
                            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $92979c3fafe78436$export$2e2bcd8739ae039), {
                                myHover: showGroups || isHovered,
                                groupMode: showGroups,
                                fill: "#aaa"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                        content: "Search",
                        placement: "right",
                        children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("button", {
                            className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports)))['nav-item'], {
                                [(0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports))).active]: showSearchMenu
                            }),
                            onClick: (e)=>{
                                e.stopPropagation();
                                setShowSearchMenu((state)=>!state);
                                setShowGroups(false);
                            },
                            children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialSearch))), {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("div", {
                className: (0, ($parcel$interopDefault($a3U2C$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports)))['nav-item'], (0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports))).avatar, (0, (/*@__PURE__*/$parcel$interopDefault($dbb7a113fa107b93$exports)))['bottom-avatar']),
                style: {
                    marginLeft: isMobile ? 15 : 0
                },
                children: /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, $a3U2C$herouitooltip.Tooltip), {
                    content: user?.pictureUrl ? 'Your profile' : 'Login',
                    placement: "right",
                    children: user?.pictureUrl ? /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)("img", {
                        src: user?.pictureUrl,
                        alt: "User",
                        onClick: showMyHistory,
                        style: {
                            borderRadius: '50%',
                            padding: 5
                        }
                    }) : /*#__PURE__*/ (0, $a3U2C$reactjsxruntime.jsx)((0, ($parcel$interopDefault($a3U2C$muiiconsmaterialPerson))), {
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




var $0079a596950cb70e$export$2e2bcd8739ae039 = {
    shallow: {
        Body: $d76f51c1c8726ad5$export$2e2bcd8739ae039,
        GroupsContainer: $65104aed486e2493$export$2e2bcd8739ae039,
        MainScreen: $377ffdae47705f05$export$2e2bcd8739ae039,
        Sidebar: $205a64be0ab22d12$export$2e2bcd8739ae039,
        QuestionCardsRow: $69ab011e6185c3e2$export$2e2bcd8739ae039,
        Landing: $4fae5be371e65393$export$12449a31c6671d53
    },
    leafs: {
        Circles: $8bbdb784fd810985$export$2e2bcd8739ae039,
        GroupCard: $d390534abfbc024e$export$2e2bcd8739ae039,
        QuestionCard: $5fc94b7b21b51ec3$export$2e2bcd8739ae039,
        NewQuestion: $5cab5fb040b98b0d$export$2e2bcd8739ae039,
        ActionsPanel: $e606c58af7c24cea$export$2e2bcd8739ae039,
        GroupContentScreen: $21d72efb2ee09a08$export$2e2bcd8739ae039,
        UserHistoryTabs: $9282d3fa2c14f2a4$export$522e89d0fa1200f4,
        UserQuestionsHistory: $9282d3fa2c14f2a4$export$6241fe9ea73c6c74,
        Search: $98465fae5e05657f$export$2e2bcd8739ae039,
        QuestionsSearch: $cbffa5f6c9e8ac6e$export$2e2bcd8739ae039,
        UsersSearch: $c72c751e836f4f45$export$2e2bcd8739ae039,
        SortQuestions: $5cb6ccce4ae0dc89$export$f8fcd3a81add9e17,
        UserAnswerDifferences: $9282d3fa2c14f2a4$export$a6816b34ad549b0,
        Question: $eb2843dbfbee7bb8$export$38435c7d2fecd2f,
        ChatBlock: $36961d44900f066b$export$125e71c614a0b114,
        LeftMenuBar: $4dd58b24b9ea8ec0$export$750f17c514384ccf
    },
    context: {
        MainScreenSwipeContext: $d76f51c1c8726ad5$export$32c650b79baf5fee
    }
};


//# sourceMappingURL=main.js.map
