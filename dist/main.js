// require("./main.css");
var $c5L0i$reactjsxruntime = require("react/jsx-runtime");
var $c5L0i$react = require("react");
var $c5L0i$lodash = require("lodash");
var $c5L0i$classnames = require("classnames");
var $c5L0i$reactspinnersBeatLoader = require("react-spinners/BeatLoader");
var $c5L0i$fortawesomereactfontawesome = require("@fortawesome/react-fontawesome");
var $c5L0i$fortawesomefreesolidsvgicons = require("@fortawesome/free-solid-svg-icons");
var $c5L0i$muiiconsmaterialOpenInNew = require("@mui/icons-material/OpenInNew");
var $c5L0i$muiiconsmaterialShare = require("@mui/icons-material/Share");
var $c5L0i$muiiconsmaterialImage = require("@mui/icons-material/Image");
var $c5L0i$datefns = require("date-fns");
var $c5L0i$reactmodal = require("react-modal");
var $c5L0i$muiiconsmaterialClose = require("@mui/icons-material/Close");
var $c5L0i$reactoauthgoogle = require("@react-oauth/google");
var $c5L0i$jwtdecode = require("jwt-decode");
var $c5L0i$muiiconsmaterialX = require("@mui/icons-material/X");
var $c5L0i$reactswipeable = require("react-swipeable");
var $c5L0i$reactdetectclickoutside = require("react-detect-click-outside");
var $c5L0i$muiiconsmaterialSettings = require("@mui/icons-material/Settings");
var $c5L0i$sumsubwebsdkreact = require("@sumsub/websdk-react");
var $c5L0i$axios = require("axios");
var $c5L0i$humannumber = require("human-number");
var $c5L0i$reactinfinitescrollcomponent = require("react-infinite-scroll-component");
var $c5L0i$reactflipmove = require("react-flip-move");
var $c5L0i$muiiconsmaterialArrowBack = require("@mui/icons-material/ArrowBack");
var $c5L0i$muiiconsmaterialExpandMore = require("@mui/icons-material/ExpandMore");
var $c5L0i$muiiconsmaterialSearch = require("@mui/icons-material/Search");
var $c5L0i$handlebars = require("handlebars");
var $c5L0i$reactrouterdom = require("react-router-dom");
var $c5L0i$reacthelmet = require("react-helmet");
var $c5L0i$muiiconsmaterialArrowForwardIos = require("@mui/icons-material/ArrowForwardIos");


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

$parcel$export(module.exports, "default", () => $43d7963e56408b24$export$2e2bcd8739ae039);
/* eslint-disable */ 







var $9de1d70601a77f40$exports = {};

$parcel$export($9de1d70601a77f40$exports, "text", () => $9de1d70601a77f40$export$6f093cfa640b7166, (v) => $9de1d70601a77f40$export$6f093cfa640b7166 = v);
var $9de1d70601a77f40$export$6f093cfa640b7166;
$9de1d70601a77f40$export$6f093cfa640b7166 = `Gy87eW_text`;


var $48846b284e41a4a2$export$2e2bcd8739ae039 = ({ children: children, className: className, style: style, id: id, onClick: onClick, h1: h1 = false })=>{
    if (h1) return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h1", {
        onClick: onClick,
        id: id,
        style: style,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($9de1d70601a77f40$exports))).text),
        children: children
    });
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        onClick: onClick,
        id: id,
        style: style,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($9de1d70601a77f40$exports))).text),
        children: children
    });
};


var $aefd75e8896fae09$exports = {};

$parcel$export($aefd75e8896fae09$exports, "hint", () => $aefd75e8896fae09$export$464c821cd4347539, (v) => $aefd75e8896fae09$export$464c821cd4347539 = v);
var $aefd75e8896fae09$export$464c821cd4347539;
$aefd75e8896fae09$export$464c821cd4347539 = `LwUTDG_hint`;


var $e9bc36b91c87c2a4$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups, selectedCircleParts: selectedCircleParts })=>{
    const lengthToHint = {
        1: '(select another group to continue)',
        2: '(click on area to select what goes to new group)'
    };
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($aefd75e8896fae09$exports))).hint,
        children: selectedCircleParts.length === 1 ? '(click on selected area again to deselect)' : lengthToHint[selectedGroups.length]
    });
};


var $1d23555c6124769a$exports = {};

$parcel$export($1d23555c6124769a$exports, "circles", () => $1d23555c6124769a$export$c958aa0cc90a067, (v) => $1d23555c6124769a$export$c958aa0cc90a067 = v);
$parcel$export($1d23555c6124769a$exports, "circlesContainer", () => $1d23555c6124769a$export$293c75fa7ed5ee8d, (v) => $1d23555c6124769a$export$293c75fa7ed5ee8d = v);
var $1d23555c6124769a$export$c958aa0cc90a067;
var $1d23555c6124769a$export$293c75fa7ed5ee8d;
$1d23555c6124769a$export$c958aa0cc90a067 = `_1m2oWq_circles`;
$1d23555c6124769a$export$293c75fa7ed5ee8d = `_1m2oWq_circlesContainer`;


/* eslint-disable */ 

var $975429ec27add272$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24b42",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#4db3e6",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#d24b42",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
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

var $a5ce285e563907a0$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#3eb5f1",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24a43",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#3eb5f1",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("path", {
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

var $5fc5222e4eb90daa$export$2e2bcd8739ae039 = ()=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("ellipse", {
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

var $3f03f2f51f594f55$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("ellipse", {
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


const $16c888d17a78a645$var$circlePartsToCompositionType = (circleParts)=>{
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
const $16c888d17a78a645$var$isAllowedToClick = (element, partName)=>{
    const isElementSelected = element.attr('fillOpacity') === '1';
    if (isElementSelected) return true;
    return $16c888d17a78a645$var$circlePartsToCompositionType([
        ...$16c888d17a78a645$var$selectedParts,
        partName
    ]);
};
const $16c888d17a78a645$var$setCursorStyle = (element, partName)=>{
    const allowedToClick = $16c888d17a78a645$var$isAllowedToClick(element, partName);
    const newStyle = allowedToClick ? 'pointer' : 'not-allowed';
    element.attr({
        cursor: newStyle
    });
};
let $16c888d17a78a645$var$selectedParts = [];
var $16c888d17a78a645$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups, handleCompositionTypeChange: handleCompositionTypeChange })=>{
    const changeOpacity = (element, partName, parts)=>{
        if (!$16c888d17a78a645$var$isAllowedToClick(element, partName)) return;
        const isElementSelected = element.attr('fillOpacity') === '1';
        element.attr({
            'fillOpacity': isElementSelected ? '0' : '1'
        });
        const newSelectedParts = isElementSelected ? $16c888d17a78a645$var$selectedParts.filter((i)=>i !== partName) : [
            ...$16c888d17a78a645$var$selectedParts,
            partName
        ];
        const newCompositionType = $16c888d17a78a645$var$circlePartsToCompositionType(newSelectedParts);
        $16c888d17a78a645$var$selectedParts = newSelectedParts;
        Object.entries(parts).forEach(([partName, element])=>$16c888d17a78a645$var$setCursorStyle(element, partName));
        handleCompositionTypeChange($16c888d17a78a645$var$selectedParts);
    };
    (0, $c5L0i$react.useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($1d23555c6124769a$exports))).circles,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($1d23555c6124769a$exports))).circlesContainer,
                children: selectedGroups.length === 1 ? selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $3f03f2f51f594f55$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $5fc5222e4eb90daa$export$2e2bcd8739ae039), {}) : selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $a5ce285e563907a0$export$2e2bcd8739ae039), {
                    style: {
                        cursor: 'pointer'
                    }
                }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $975429ec27add272$export$2e2bcd8739ae039), {
                    style: {
                        cursor: 'pointer'
                    }
                })
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $e9bc36b91c87c2a4$export$2e2bcd8739ae039), {
                selectedGroups: selectedGroups,
                selectedCircleParts: $16c888d17a78a645$var$selectedParts
            })
        ]
    });
};







var $77a617c816839749$exports = {};

$parcel$export($77a617c816839749$exports, "input", () => $77a617c816839749$export$b7e3ae3d7c15e42e, (v) => $77a617c816839749$export$b7e3ae3d7c15e42e = v);
$parcel$export($77a617c816839749$exports, "text", () => $77a617c816839749$export$6f093cfa640b7166, (v) => $77a617c816839749$export$6f093cfa640b7166 = v);
var $77a617c816839749$export$b7e3ae3d7c15e42e;
var $77a617c816839749$export$6f093cfa640b7166;
$77a617c816839749$export$b7e3ae3d7c15e42e = `tKcEXW_input`;
$77a617c816839749$export$6f093cfa640b7166 = `tKcEXW_text`;


var $fdb06f9430151147$export$2e2bcd8739ae039 = ({ onTitleInput: onTitleInput, value: value })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($77a617c816839749$exports))).text,
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("input", {
            className: (0, (/*@__PURE__*/$parcel$interopDefault($77a617c816839749$exports))).input,
            onChange: (e)=>onTitleInput(e.target.value),
            value: value
        })
    });











var $caa944b164855016$exports = {};

$parcel$export($caa944b164855016$exports, "button", () => $caa944b164855016$export$2ba01fb71ed41cb6, (v) => $caa944b164855016$export$2ba01fb71ed41cb6 = v);
$parcel$export($caa944b164855016$exports, "loader", () => $caa944b164855016$export$f4c5de44377d2946, (v) => $caa944b164855016$export$f4c5de44377d2946 = v);
var $caa944b164855016$export$2ba01fb71ed41cb6;
var $caa944b164855016$export$f4c5de44377d2946;
$caa944b164855016$export$2ba01fb71ed41cb6 = `tbRRgG_button`;
$caa944b164855016$export$f4c5de44377d2946 = `tbRRgG_loader`;


var $f6386e79966b60e2$export$2e2bcd8739ae039 = ({ children: children, className: className, onClick: onClick, disabled: disabled, loading: loading })=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
        disabled: Boolean(disabled),
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($caa944b164855016$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($caa944b164855016$exports))).loader]: loading
        }),
        onClick: onClick,
        children: loading ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactspinnersBeatLoader))), {
            color: "#ebedf2"
        }) : children
    });
};



var $f1cbc9f8eab75aad$exports = {};

$parcel$export($f1cbc9f8eab75aad$exports, "button", () => $f1cbc9f8eab75aad$export$2ba01fb71ed41cb6, (v) => $f1cbc9f8eab75aad$export$2ba01fb71ed41cb6 = v);
$parcel$export($f1cbc9f8eab75aad$exports, "nobold", () => $f1cbc9f8eab75aad$export$a9c364a443888bb7, (v) => $f1cbc9f8eab75aad$export$a9c364a443888bb7 = v);
$parcel$export($f1cbc9f8eab75aad$exports, "primary", () => $f1cbc9f8eab75aad$export$9ad721cf3b3debe0, (v) => $f1cbc9f8eab75aad$export$9ad721cf3b3debe0 = v);
$parcel$export($f1cbc9f8eab75aad$exports, "secondary", () => $f1cbc9f8eab75aad$export$745c6f71a1e0e6f7, (v) => $f1cbc9f8eab75aad$export$745c6f71a1e0e6f7 = v);
var $f1cbc9f8eab75aad$export$2ba01fb71ed41cb6;
var $f1cbc9f8eab75aad$export$a9c364a443888bb7;
var $f1cbc9f8eab75aad$export$9ad721cf3b3debe0;
var $f1cbc9f8eab75aad$export$745c6f71a1e0e6f7;
$f1cbc9f8eab75aad$export$2ba01fb71ed41cb6 = `GNms6q_button`;
$f1cbc9f8eab75aad$export$a9c364a443888bb7 = `GNms6q_nobold`;
$f1cbc9f8eab75aad$export$9ad721cf3b3debe0 = `GNms6q_primary`;
$f1cbc9f8eab75aad$export$745c6f71a1e0e6f7 = `GNms6q_secondary`;


var $0ccf9c474dfd3877$export$2e2bcd8739ae039 = ({ children: children, primary: primary, secondary: secondary, onClick: onClick, disabled: disabled, nobold: nobold })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $f6386e79966b60e2$export$2e2bcd8739ae039), {
        disabled: disabled,
        onClick: onClick,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($f1cbc9f8eab75aad$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($f1cbc9f8eab75aad$exports))).primary]: primary,
            [(0, (/*@__PURE__*/$parcel$interopDefault($f1cbc9f8eab75aad$exports))).secondary]: secondary,
            [(0, (/*@__PURE__*/$parcel$interopDefault($f1cbc9f8eab75aad$exports))).nobold]: nobold
        }),
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
            children: children
        })
    });


var $03d19b4ea4a6700f$exports = {};

$parcel$export($03d19b4ea4a6700f$exports, "buttons", () => $03d19b4ea4a6700f$export$bbea856fdb3e3c5f, (v) => $03d19b4ea4a6700f$export$bbea856fdb3e3c5f = v);
var $03d19b4ea4a6700f$export$bbea856fdb3e3c5f;
$03d19b4ea4a6700f$export$bbea856fdb3e3c5f = `DHSumq_buttons`;


var $54d79e7011b4fc31$export$2e2bcd8739ae039 = ({ select: select, combine: combine })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($03d19b4ea4a6700f$exports))).buttons,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $0ccf9c474dfd3877$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: select,
                children: "Select"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $0ccf9c474dfd3877$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: combine,
                children: "Combine"
            })
        ]
    });





var $8c4380dcf4c2ce94$exports = {};

$parcel$export($8c4380dcf4c2ce94$exports, "buttons", () => $8c4380dcf4c2ce94$export$bbea856fdb3e3c5f, (v) => $8c4380dcf4c2ce94$export$bbea856fdb3e3c5f = v);
var $8c4380dcf4c2ce94$export$bbea856fdb3e3c5f;
$8c4380dcf4c2ce94$export$bbea856fdb3e3c5f = `Ou9J5W_buttons`;


var $e9d51867d4acf951$export$2e2bcd8739ae039 = ({ readyToSave: readyToSave, save: save, cancel: cancel })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($8c4380dcf4c2ce94$exports))).buttons,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $0ccf9c474dfd3877$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                disabled: !readyToSave,
                primary: true,
                onClick: save,
                children: "Save"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $0ccf9c474dfd3877$export$2e2bcd8739ae039), {
                nobold: true,
                secondary: true,
                onClick: cancel,
                children: "Cancel"
            })
        ]
    });





var $7eb06ad4c8df7dbd$export$2e2bcd8739ae039 = ({ x: x })=>x.toLocaleString();


var $e56223ca18e39511$exports = {};

$parcel$export($e56223ca18e39511$exports, "userCount", () => $e56223ca18e39511$export$72bd514aa1799057, (v) => $e56223ca18e39511$export$72bd514aa1799057 = v);
var $e56223ca18e39511$export$72bd514aa1799057;
$e56223ca18e39511$export$72bd514aa1799057 = `WZcb5G_userCount`;


var $660b1902094182e2$export$2e2bcd8739ae039 = ({ userCount: userCount })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e56223ca18e39511$exports))).userCount,
        children: userCount === null ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
            children: "select new group parts"
        }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $7eb06ad4c8df7dbd$export$2e2bcd8739ae039), {
                    x: userCount
                }),
                " people"
            ]
        })
    });






var $f44c38bcab8183cc$exports = {};

$parcel$export($f44c38bcab8183cc$exports, "icon", () => $f44c38bcab8183cc$export$1ca1ec8b29a4ce27, (v) => $f44c38bcab8183cc$export$1ca1ec8b29a4ce27 = v);
var $f44c38bcab8183cc$export$1ca1ec8b29a4ce27;
$f44c38bcab8183cc$export$1ca1ec8b29a4ce27 = `wcFNia_icon`;


var $2b34424d3cce10f8$export$2e2bcd8739ae039 = ({ color: color = '#bebebe', deselect: deselect })=>{
    const [icon, setIcon] = (0, $c5L0i$react.useState)((0, $c5L0i$fortawesomefreesolidsvgicons.faCheckCircle));
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$fortawesomereactfontawesome.FontAwesomeIcon), {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($f44c38bcab8183cc$exports))).icon,
        size: "2x",
        color: color,
        icon: icon,
        onMouseEnter: ()=>setIcon((0, $c5L0i$fortawesomefreesolidsvgicons.faTimesCircle)),
        onMouseLeave: ()=>setIcon((0, $c5L0i$fortawesomefreesolidsvgicons.faCheckCircle)),
        onClick: deselect
    });
};





var $98b0d8317ccf47e7$exports = {};

$parcel$export($98b0d8317ccf47e7$exports, "title", () => $98b0d8317ccf47e7$export$fb184b623420d9be, (v) => $98b0d8317ccf47e7$export$fb184b623420d9be = v);
var $98b0d8317ccf47e7$export$fb184b623420d9be;
$98b0d8317ccf47e7$export$fb184b623420d9be = `_4XHpq_title`;


var $57011da2278f77c7$export$2e2bcd8739ae039 = ({ children: children, style: style })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($98b0d8317ccf47e7$exports))).title,
        children: children
    });


var $3b909940669176b5$exports = {};

$parcel$export($3b909940669176b5$exports, "card", () => $3b909940669176b5$export$aa3e815946b80764, (v) => $3b909940669176b5$export$aa3e815946b80764 = v);
$parcel$export($3b909940669176b5$exports, "leftSideContainer", () => $3b909940669176b5$export$59b1d651044d302, (v) => $3b909940669176b5$export$59b1d651044d302 = v);
var $3b909940669176b5$export$aa3e815946b80764;
var $3b909940669176b5$export$59b1d651044d302;
$3b909940669176b5$export$aa3e815946b80764 = `sslnla_card`;
$3b909940669176b5$export$59b1d651044d302 = `sslnla_leftSideContainer`;


var $74980d71b8ef2933$export$2e2bcd8739ae039 = ({ name: name, userCount: userCount, selected: selected, color: color, save: save, toggleSelection: toggleSelection, combine: combine, readyToSave: readyToSave, cancel: cancel })=>{
    const [newGroupTitle, setNewGroupTitle] = (0, $c5L0i$react.useState)('');
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("article", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($3b909940669176b5$exports))).card,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($3b909940669176b5$exports))).leftSideContainer,
                children: [
                    name ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $57011da2278f77c7$export$2e2bcd8739ae039), {
                        children: name
                    }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $fdb06f9430151147$export$2e2bcd8739ae039), {
                        onTitleInput: setNewGroupTitle
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $660b1902094182e2$export$2e2bcd8739ae039), {
                        userCount: userCount
                    })
                ]
            }),
            color && !newGroupTitle || color && selected && name ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $2b34424d3cce10f8$export$2e2bcd8739ae039), {
                color: color,
                deselect: toggleSelection
            }) : name ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $54d79e7011b4fc31$export$2e2bcd8739ae039), {
                select: toggleSelection,
                combine: combine
            }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $e9d51867d4acf951$export$2e2bcd8739ae039), {
                save: ()=>save(newGroupTitle),
                cancel: cancel,
                readyToSave: color ? readyToSave : newGroupTitle
            })
        ]
    });
};












var $6c2645ffd3415e4c$exports = {};

$parcel$export($6c2645ffd3415e4c$exports, "title", () => $6c2645ffd3415e4c$export$fb184b623420d9be, (v) => $6c2645ffd3415e4c$export$fb184b623420d9be = v);
var $6c2645ffd3415e4c$export$fb184b623420d9be;
$6c2645ffd3415e4c$export$fb184b623420d9be = `WM5FBW_title`;


var $c52b3c36a0937910$export$2e2bcd8739ae039 = ({ children: children, style: style, id: id, h1: h1 = false })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
        h1: h1,
        id: id,
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($6c2645ffd3415e4c$exports))).title,
        children: children
    });











var $261dc5824c408278$exports = {};

$parcel$export($261dc5824c408278$exports, "text", () => $261dc5824c408278$export$6f093cfa640b7166, (v) => $261dc5824c408278$export$6f093cfa640b7166 = v);
var $261dc5824c408278$export$6f093cfa640b7166;
$261dc5824c408278$export$6f093cfa640b7166 = `D2SXEW_text`;


var $af7a69f871974f3a$export$2e2bcd8739ae039 = ({ children: children, style: style, className: className, onClick: onClick })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
        onClick: onClick,
        style: style,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($261dc5824c408278$exports))).text),
        children: children
    });





var $3113bd7adef0dc04$exports = {};

$parcel$export($3113bd7adef0dc04$exports, "bar", () => $3113bd7adef0dc04$export$d927737047eb3867, (v) => $3113bd7adef0dc04$export$d927737047eb3867 = v);
$parcel$export($3113bd7adef0dc04$exports, "bars", () => $3113bd7adef0dc04$export$60912654947077e3, (v) => $3113bd7adef0dc04$export$60912654947077e3 = v);
$parcel$export($3113bd7adef0dc04$exports, "noBar", () => $3113bd7adef0dc04$export$e2b71f7b582462e, (v) => $3113bd7adef0dc04$export$e2b71f7b582462e = v);
$parcel$export($3113bd7adef0dc04$exports, "yesBar", () => $3113bd7adef0dc04$export$6a31b2d83bf3b7ff, (v) => $3113bd7adef0dc04$export$6a31b2d83bf3b7ff = v);
var $3113bd7adef0dc04$export$d927737047eb3867;
var $3113bd7adef0dc04$export$60912654947077e3;
var $3113bd7adef0dc04$export$e2b71f7b582462e;
var $3113bd7adef0dc04$export$6a31b2d83bf3b7ff;
$3113bd7adef0dc04$export$d927737047eb3867 = `pVQoxG_bar`;
$3113bd7adef0dc04$export$60912654947077e3 = `pVQoxG_bars`;
$3113bd7adef0dc04$export$e2b71f7b582462e = `pVQoxG_noBar`;
$3113bd7adef0dc04$export$6a31b2d83bf3b7ff = `pVQoxG_yesBar`;


var $93a91f764584dcb2$export$2e2bcd8739ae039 = ({ yes: yes, no: no, onHover: onHover, createNewGroup: createNewGroup, style: style, className: className })=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($3113bd7adef0dc04$exports))).bars, className),
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                style: {
                    width: `${yes}%`
                },
                className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($3113bd7adef0dc04$exports))).bar, (0, (/*@__PURE__*/$parcel$interopDefault($3113bd7adef0dc04$exports))).yesBar),
                onMouseEnter: ()=>onHover('yes'),
                onMouseLeave: ()=>onHover(),
                onClick: ()=>createNewGroup('yes')
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                style: {
                    width: `${no}%`
                },
                className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($3113bd7adef0dc04$exports))).bar, (0, (/*@__PURE__*/$parcel$interopDefault($3113bd7adef0dc04$exports))).noBar),
                onMouseEnter: ()=>onHover('no'),
                onMouseLeave: ()=>onHover(),
                onClick: ()=>createNewGroup('no')
            })
        ]
    });
};


var $060bced7ba3b76d4$exports = {};

$parcel$export($060bced7ba3b76d4$exports, "arrowDown", () => $060bced7ba3b76d4$export$f61feb65ec56823b, (v) => $060bced7ba3b76d4$export$f61feb65ec56823b = v);
$parcel$export($060bced7ba3b76d4$exports, "img", () => $060bced7ba3b76d4$export$463b44d9bf3628be, (v) => $060bced7ba3b76d4$export$463b44d9bf3628be = v);
$parcel$export($060bced7ba3b76d4$exports, "imgWithArrow", () => $060bced7ba3b76d4$export$e4e79e5008270fc7, (v) => $060bced7ba3b76d4$export$e4e79e5008270fc7 = v);
$parcel$export($060bced7ba3b76d4$exports, "stats", () => $060bced7ba3b76d4$export$7804429c45dff272, (v) => $060bced7ba3b76d4$export$7804429c45dff272 = v);
$parcel$export($060bced7ba3b76d4$exports, "tester", () => $060bced7ba3b76d4$export$6b5c497e0b5239d7, (v) => $060bced7ba3b76d4$export$6b5c497e0b5239d7 = v);
$parcel$export($060bced7ba3b76d4$exports, "text", () => $060bced7ba3b76d4$export$6f093cfa640b7166, (v) => $060bced7ba3b76d4$export$6f093cfa640b7166 = v);
$parcel$export($060bced7ba3b76d4$exports, "textContainer", () => $060bced7ba3b76d4$export$2cedfd664bb3bd01, (v) => $060bced7ba3b76d4$export$2cedfd664bb3bd01 = v);
var $060bced7ba3b76d4$export$f61feb65ec56823b;
var $060bced7ba3b76d4$export$463b44d9bf3628be;
var $060bced7ba3b76d4$export$e4e79e5008270fc7;
var $060bced7ba3b76d4$export$7804429c45dff272;
var $060bced7ba3b76d4$export$6b5c497e0b5239d7;
var $060bced7ba3b76d4$export$6f093cfa640b7166;
var $060bced7ba3b76d4$export$2cedfd664bb3bd01;
$060bced7ba3b76d4$export$f61feb65ec56823b = `hWz-3G_arrowDown`;
$060bced7ba3b76d4$export$463b44d9bf3628be = `hWz-3G_img`;
$060bced7ba3b76d4$export$e4e79e5008270fc7 = `hWz-3G_imgWithArrow`;
$060bced7ba3b76d4$export$7804429c45dff272 = `hWz-3G_stats`;
$060bced7ba3b76d4$export$6b5c497e0b5239d7 = `hWz-3G_tester`;
$060bced7ba3b76d4$export$6f093cfa640b7166 = `hWz-3G_text`;
$060bced7ba3b76d4$export$2cedfd664bb3bd01 = `hWz-3G_textContainer`;


const $b43f368b8ea6feca$var$calcPercent = (x, sum)=>Math.round(x / sum * 100);
var $b43f368b8ea6feca$export$2e2bcd8739ae039 = ({ yes: yes, no: no, he: he, me: me, createNewGroup: createNewGroup, className: className })=>{
    const [state, setState] = (0, $c5L0i$react.useState)(null);
    const answers = {
        yes: yes,
        no: no
    };
    const userReplyCount = state ? answers[state] : yes + no;
    const yesPercentage = $b43f368b8ea6feca$var$calcPercent(yes, yes + no);
    const noPercentage = $b43f368b8ea6feca$var$calcPercent(no, yes + no);
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        style: me?.answer || he?.answer ? {
            marginTop: 50
        } : {
            marginTop: 20
        },
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).stats, className),
        children: [
            userReplyCount !== 0 && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).textContainer,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $af7a69f871974f3a$export$2e2bcd8739ae039), {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).text,
                                style: {
                                    width: `${yesPercentage}%`,
                                    position: 'relative',
                                    display: 'flex',
                                    gap: 12,
                                    bottom: 0
                                },
                                children: [
                                    me?.answer?.toLowerCase() === 'yes' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).imgWithArrow,
                                        children: [
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).img,
                                                src: me.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).tester,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).arrowDown
                                            })
                                        ]
                                    }),
                                    he?.answer?.toLowerCase() === 'yes' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).imgWithArrow,
                                        style: me?.answer ? {
                                            left: '50%'
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).img,
                                                src: he.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).tester,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).arrowDown
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $af7a69f871974f3a$export$2e2bcd8739ae039), {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).text,
                                style: {
                                    width: `${noPercentage}%`,
                                    position: 'relative',
                                    display: 'flex',
                                    gap: 12,
                                    bottom: 0
                                },
                                children: [
                                    me?.answer?.toLowerCase() === 'no' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).imgWithArrow,
                                        style: he?.answer ? {
                                            right: '50%'
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).img,
                                                src: me.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).tester,
                                                children: "No"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).arrowDown
                                            })
                                        ]
                                    }),
                                    he?.answer?.toLowerCase() === 'no' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).imgWithArrow,
                                        children: [
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).img,
                                                src: he.pictureUrl,
                                                alt: "profile picture"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).tester,
                                                children: "No"
                                            }),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).arrowDown
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $93a91f764584dcb2$export$2e2bcd8739ae039), {
                        yes: yesPercentage,
                        no: noPercentage,
                        onHover: setState,
                        createNewGroup: createNewGroup
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).textContainer,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $af7a69f871974f3a$export$2e2bcd8739ae039), {
                                onClick: ()=>createNewGroup('yes'),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).text,
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
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $af7a69f871974f3a$export$2e2bcd8739ae039), {
                                onClick: ()=>createNewGroup('no'),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($060bced7ba3b76d4$exports))).text,
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
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $af7a69f871974f3a$export$2e2bcd8739ae039), {
                secondary: true,
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $7eb06ad4c8df7dbd$export$2e2bcd8739ae039), {
                        x: userReplyCount
                    }),
                    " people answered"
                ]
            })
        ]
    });
};








var $5f67be5e02d37987$exports = {};

$parcel$export($5f67be5e02d37987$exports, "button", () => $5f67be5e02d37987$export$2ba01fb71ed41cb6, (v) => $5f67be5e02d37987$export$2ba01fb71ed41cb6 = v);
$parcel$export($5f67be5e02d37987$exports, "no", () => $5f67be5e02d37987$export$401451a107dc42ce, (v) => $5f67be5e02d37987$export$401451a107dc42ce = v);
$parcel$export($5f67be5e02d37987$exports, "yes", () => $5f67be5e02d37987$export$7a668e70ea2210d9, (v) => $5f67be5e02d37987$export$7a668e70ea2210d9 = v);
var $5f67be5e02d37987$export$2ba01fb71ed41cb6;
var $5f67be5e02d37987$export$401451a107dc42ce;
var $5f67be5e02d37987$export$7a668e70ea2210d9;
$5f67be5e02d37987$export$2ba01fb71ed41cb6 = `Orh0Eq_button`;
$5f67be5e02d37987$export$401451a107dc42ce = `Orh0Eq_no`;
$5f67be5e02d37987$export$7a668e70ea2210d9 = `Orh0Eq_yes`;


var $5e95937b5aebb876$export$2e2bcd8739ae039 = ({ answer: answer, respond: respond, disabled: disabled })=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
        disabled: disabled,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($5f67be5e02d37987$exports))).button, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($5f67be5e02d37987$exports))).yes]: answer.toLowerCase() === 'yes',
            [(0, (/*@__PURE__*/$parcel$interopDefault($5f67be5e02d37987$exports))).no]: answer.toLowerCase() === 'no'
        }),
        onClick: respond,
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
            children: answer
        })
    });
};


var $f5aef85d7fbd61f1$exports = {};

$parcel$export($f5aef85d7fbd61f1$exports, "answerButtons", () => $f5aef85d7fbd61f1$export$33b0e16035b753e, (v) => $f5aef85d7fbd61f1$export$33b0e16035b753e = v);
var $f5aef85d7fbd61f1$export$33b0e16035b753e;
$f5aef85d7fbd61f1$export$33b0e16035b753e = `b4MS9q_answerButtons`;


var $aea682282f3bff22$export$2e2bcd8739ae039 = ({ respond: respond, style: style, loading: loading })=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($f5aef85d7fbd61f1$exports))).answerButtons,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $5e95937b5aebb876$export$2e2bcd8739ae039), {
                disabled: loading || !respond,
                answer: "Yes",
                respond: ()=>respond('yes')
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $5e95937b5aebb876$export$2e2bcd8739ae039), {
                disabled: loading || !respond,
                answer: "No",
                respond: ()=>respond('no')
            })
        ]
    });
};













var $61bbaaf79dd60fe4$exports = {};

$parcel$export($61bbaaf79dd60fe4$exports, "container", () => $61bbaaf79dd60fe4$export$34e0f9847d4c02dd, (v) => $61bbaaf79dd60fe4$export$34e0f9847d4c02dd = v);
var $61bbaaf79dd60fe4$export$34e0f9847d4c02dd;
$61bbaaf79dd60fe4$export$34e0f9847d4c02dd = `mrTbNq_container`;


// eslint-disable-next-line no-extend-native
Number.prototype.mod = function(n) {
    return (this % n + n) % n;
};
const $1e3dbd7e69fec1c4$var$screens = [
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
var $1e3dbd7e69fec1c4$export$2e2bcd8739ae039 = ({ children: children })=>{
    const value = (0, $c5L0i$react.useContext)((0, $0c70feff32ca6a2b$export$32c650b79baf5fee));
    const [swipeCount, setSwipeCount] = (0, $c5L0i$react.useState)(2);
    const screenBySwipeCount = Object.fromEntries(Object.entries($1e3dbd7e69fec1c4$var$screens.filter((i)=>value.skipScreen ? !value.skipScreen.includes(i.name) : true)));
    const handlers = (0, $c5L0i$reactswipeable.useSwipeable)({
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
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("main", {
        ...handlers,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($61bbaaf79dd60fe4$exports))).container,
        children: children
    });
};
const $1e3dbd7e69fec1c4$export$97295e60e7f371e1 = ({ children: children })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("main", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($61bbaaf79dd60fe4$exports))).container,
        children: children
    });











var $80078e45b13c3759$exports = {};
$80078e45b13c3759$exports = new URL("kyc.31754f12.svg", "file:" + __filename).toString();



var $13058157b3244d01$exports = {};

$parcel$export($13058157b3244d01$exports, "container", () => $13058157b3244d01$export$34e0f9847d4c02dd, (v) => $13058157b3244d01$export$34e0f9847d4c02dd = v);
$parcel$export($13058157b3244d01$exports, "divider", () => $13058157b3244d01$export$e8c9778bf415dd08, (v) => $13058157b3244d01$export$e8c9778bf415dd08 = v);
$parcel$export($13058157b3244d01$exports, "dropdown", () => $13058157b3244d01$export$81207e5cc4186890, (v) => $13058157b3244d01$export$81207e5cc4186890 = v);
$parcel$export($13058157b3244d01$exports, "icon", () => $13058157b3244d01$export$1ca1ec8b29a4ce27, (v) => $13058157b3244d01$export$1ca1ec8b29a4ce27 = v);
$parcel$export($13058157b3244d01$exports, "twitterSignIn", () => $13058157b3244d01$export$6c489d6abe11ec5c, (v) => $13058157b3244d01$export$6c489d6abe11ec5c = v);
$parcel$export($13058157b3244d01$exports, "username", () => $13058157b3244d01$export$5e1be761f603d585, (v) => $13058157b3244d01$export$5e1be761f603d585 = v);
var $13058157b3244d01$export$34e0f9847d4c02dd;
var $13058157b3244d01$export$e8c9778bf415dd08;
var $13058157b3244d01$export$81207e5cc4186890;
var $13058157b3244d01$export$1ca1ec8b29a4ce27;
var $13058157b3244d01$export$6c489d6abe11ec5c;
var $13058157b3244d01$export$5e1be761f603d585;
$13058157b3244d01$export$34e0f9847d4c02dd = `rzmFQq_container`;
$13058157b3244d01$export$e8c9778bf415dd08 = `rzmFQq_divider`;
$13058157b3244d01$export$81207e5cc4186890 = `rzmFQq_dropdown`;
$13058157b3244d01$export$1ca1ec8b29a4ce27 = `rzmFQq_icon`;
$13058157b3244d01$export$6c489d6abe11ec5c = `rzmFQq_twitterSignIn`;
$13058157b3244d01$export$5e1be761f603d585 = `rzmFQq_username`;


const $b29d4b4923c0cd00$export$b1977eae5cbd7a49 = ({ userId: userId, updateJwt: updateJwt, closeModal: closeModal })=>{
    const [accessToken, setAccessToken] = (0, $c5L0i$react.useState)('');
    (0, $c5L0i$react.useEffect)(()=>{
        const fetchAccessToken = async ()=>{
            try {
                const response = await (0, ($parcel$interopDefault($c5L0i$axios))).post('/api/kyc/access-token', {
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
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        children: accessToken && userId && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$sumsubwebsdkreact))), {
            accessToken: accessToken,
            expirationHandler: ()=>(0, ($parcel$interopDefault($c5L0i$axios))).post('/api/kyc/access-token', {
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
var $b29d4b4923c0cd00$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ logout: logout, username: username, showXLogin: showXLogin, showKYCLogin: showKYCLogin, showMyHistory: showMyHistory, changeUser: changeUser, testUsers: testUsers = [], handleTwitterLogin: handleTwitterLogin, createUser: createUser }, ref2)=>{
    const [showDropdown, setShowDropdown] = (0, $c5L0i$react.useState)(false);
    const ref = (0, $c5L0i$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>console.log('on trigger') || setShowDropdown(false)
    });
    const { setIsModalOpen: setIsModalOpen, setShowKYCModal: setShowKYCModal, setIsLoginModalOpen: setIsLoginModalOpen } = (0, $c5L0i$react.useContext)((0, $0c70feff32ca6a2b$export$32c650b79baf5fee));
    const content = /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: [
            username ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).username,
                    children: [
                        "Settings (",
                        username,
                        ")"
                    ]
                })
            }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).twitterSignIn,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).username,
                    children: "Sign in"
                })
            }),
            username && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialSettings))), {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).icon,
                sx: {
                    color: '#2b2b2b'
                }
            })
        ]
    });
    if (!username) return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
            ref: (node)=>{
                if (ref2) ref2(node);
            },
            className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).container,
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
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        style: {
            display: 'flex',
            gap: 12,
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                // ref={node => {
                //   ref.current = node
                //   if (ref2) {
                //     ref2(node)
                //   }
                // }}
                className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).container,
                onClick: (e)=>{
                    console.log('test dropdown true');
                    e.stopPropagation();
                    setShowDropdown(!showDropdown);
                },
                style: {
                    width: showKYCLogin || showXLogin ? '40%' : '100%',
                    textAlign: 'center'
                },
                children: content
            }),
            showXLogin && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).twitterSignIn, (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).container),
                style: {
                    width: 'calc(60% - 12px)'
                },
                onClick: handleTwitterLogin,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).username,
                        children: "Verify yourself with"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialX))), {})
                ]
            }),
            showKYCLogin && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).twitterSignIn, (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).container),
                style: {
                    width: 'calc(60% - 12px)'
                },
                onClick: ()=>{
                    window.mixpanel.track('Verify Identity');
                    setShowKYCModal(true);
                },
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).username,
                        children: "Verify yourself with"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($80078e45b13c3759$exports))),
                        style: {
                            height: 27,
                            marginBottom: 3
                        }
                    })
                ]
            }),
            username && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                style: {
                    display: showDropdown ? 'flex' : 'none'
                },
                className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).dropdown,
                ref: (node)=>{
                    ref.current = node;
                    if (ref2) ref2(node);
                },
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        onClick: logout,
                        children: "Log out"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        onClick: ()=>{
                            window.mixpanel.track('Rewards');
                            setIsModalOpen(true);
                        },
                        children: "Rewards"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        onClick: showMyHistory,
                        children: "My Questions/Answers"
                    }),
                    Boolean(testUsers.length) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($13058157b3244d01$exports))).divider,
                        children: "Test Users"
                    }),
                    testUsers.map((i)=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                            onClick: ()=>changeUser(i.fullName),
                            children: i.fullName
                        }, i.fullName)),
                    Boolean(testUsers.length) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        onClick: ()=>changeUser(),
                        children: "me"
                    })
                ]
            })
        ]
    });
});



var $941289f31472d1d3$exports = {};

$parcel$export($941289f31472d1d3$exports, "address", () => $941289f31472d1d3$export$f7d3c097ceca6c15, (v) => $941289f31472d1d3$export$f7d3c097ceca6c15 = v);
$parcel$export($941289f31472d1d3$exports, "amount", () => $941289f31472d1d3$export$802cfe72001a1ee, (v) => $941289f31472d1d3$export$802cfe72001a1ee = v);
$parcel$export($941289f31472d1d3$exports, "body", () => $941289f31472d1d3$export$32180ef41b15b513, (v) => $941289f31472d1d3$export$32180ef41b15b513 = v);
$parcel$export($941289f31472d1d3$exports, "close", () => $941289f31472d1d3$export$8360e631d277ea4d, (v) => $941289f31472d1d3$export$8360e631d277ea4d = v);
$parcel$export($941289f31472d1d3$exports, "connectButton", () => $941289f31472d1d3$export$53a6eba4a816532e, (v) => $941289f31472d1d3$export$53a6eba4a816532e = v);
$parcel$export($941289f31472d1d3$exports, "hide", () => $941289f31472d1d3$export$fe8985bb6374093c, (v) => $941289f31472d1d3$export$fe8985bb6374093c = v);
$parcel$export($941289f31472d1d3$exports, "input", () => $941289f31472d1d3$export$b7e3ae3d7c15e42e, (v) => $941289f31472d1d3$export$b7e3ae3d7c15e42e = v);
$parcel$export($941289f31472d1d3$exports, "modalContent", () => $941289f31472d1d3$export$add244bda2f9423c, (v) => $941289f31472d1d3$export$add244bda2f9423c = v);
$parcel$export($941289f31472d1d3$exports, "row", () => $941289f31472d1d3$export$120ff0929b202a6d, (v) => $941289f31472d1d3$export$120ff0929b202a6d = v);
$parcel$export($941289f31472d1d3$exports, "search", () => $941289f31472d1d3$export$d76128d007d19019, (v) => $941289f31472d1d3$export$d76128d007d19019 = v);
$parcel$export($941289f31472d1d3$exports, "twitterSignIn", () => $941289f31472d1d3$export$6c489d6abe11ec5c, (v) => $941289f31472d1d3$export$6c489d6abe11ec5c = v);
var $941289f31472d1d3$export$f7d3c097ceca6c15;
var $941289f31472d1d3$export$802cfe72001a1ee;
var $941289f31472d1d3$export$32180ef41b15b513;
var $941289f31472d1d3$export$8360e631d277ea4d;
var $941289f31472d1d3$export$53a6eba4a816532e;
var $941289f31472d1d3$export$fe8985bb6374093c;
var $941289f31472d1d3$export$b7e3ae3d7c15e42e;
var $941289f31472d1d3$export$add244bda2f9423c;
var $941289f31472d1d3$export$120ff0929b202a6d;
var $941289f31472d1d3$export$d76128d007d19019;
var $941289f31472d1d3$export$6c489d6abe11ec5c;
$941289f31472d1d3$export$f7d3c097ceca6c15 = `sLin6a_address`;
$941289f31472d1d3$export$802cfe72001a1ee = `sLin6a_amount`;
$941289f31472d1d3$export$32180ef41b15b513 = `sLin6a_body`;
$941289f31472d1d3$export$8360e631d277ea4d = `sLin6a_close`;
$941289f31472d1d3$export$53a6eba4a816532e = `sLin6a_connectButton`;
$941289f31472d1d3$export$fe8985bb6374093c = `sLin6a_hide`;
$941289f31472d1d3$export$b7e3ae3d7c15e42e = `sLin6a_input`;
$941289f31472d1d3$export$add244bda2f9423c = `sLin6a_modalContent`;
$941289f31472d1d3$export$120ff0929b202a6d = `sLin6a_row`;
$941289f31472d1d3$export$d76128d007d19019 = `sLin6a_search`;
$941289f31472d1d3$export$6c489d6abe11ec5c = `sLin6a_twitterSignIn`;


const $be6f0e84320366a7$export$2515d253ab459c32 = 450;
const $be6f0e84320366a7$export$310e42f8685040c9 = 1361;
const $be6f0e84320366a7$export$5d27a029e0b63495 = 914;
const $be6f0e84320366a7$export$120137d2fb34488f = 945;


const $0c70feff32ca6a2b$export$32c650b79baf5fee = /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createContext({
    setIsLoginModalOpen: ()=>{},
    toggleScreen: null,
    setSkipScreen: null,
    setIsModalOpen: null,
    setShowSearch: null,
    showSearch: false,
    setAnswer: ()=>{},
    setShowKYCModal: ()=>{},
    setSelectedMessage: ()=>{},
    setAddImgModal: ()=>{}
});
const $0c70feff32ca6a2b$var$customStyles = {
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
const $0c70feff32ca6a2b$var$clientId = '693824624560-f3596tslik0htj03c2p4cqnevievv8ej.apps.googleusercontent.com'; // Replace with your actual Client ID
(0, ($parcel$interopDefault($c5L0i$reactmodal))).setAppElement('#app');
var $0c70feff32ca6a2b$export$2e2bcd8739ae039 = ({ children: children, includeSwipes: includeSwipes, address: address, payout: payout, userId: userId, connectToWallet: connectToWalletR, addImage: addImage, updateJwt: updateJwt, hide: hideR, connected: connected, handleTwitterLogin: handleTwitterLogin, isWalletModalOpenInitial: isWalletModalOpenInitial = true, createUser: createUser, showKYC: showKYC })=>{
    const [screenName, toggleScreen] = (0, $c5L0i$react.useState)('uninitialized');
    const [skipScreen, setSkipScreen] = (0, $c5L0i$react.useState)();
    const [isModalOpen, setIsModalOpen] = (0, $c5L0i$react.useState)(false);
    const [isWalletModalOpen, setIsWalletModalOpen] = (0, $c5L0i$react.useState)(isWalletModalOpenInitial);
    const [showSearch, setShowSearch] = (0, $c5L0i$react.useState)(false);
    const [showLoginModal, setIsLoginModalOpen] = (0, $c5L0i$react.useState)(false);
    const [showKYCModal, setShowKYCModal] = (0, $c5L0i$react.useState)(false);
    const [answer, setAnswer] = (0, $c5L0i$react.useState)(null);
    const [addImgModal, setAddImgModal] = (0, $c5L0i$react.useState)(null);
    const [selectedMessage, setSelectedMessage] = (0, $c5L0i$react.useState)(false);
    const [imgUrl, setImgUrl] = (0, $c5L0i$react.useState)('');
    const [sendEmails, setSendEmails] = (0, $c5L0i$react.useState)(true);
    (0, $c5L0i$react.useEffect)(()=>{
        const handler = ()=>{
            const { innerWidth: width } = window;
            if (width > (0, $be6f0e84320366a7$export$120137d2fb34488f)) toggleScreen();
            if (screenName === 'uninitialized' && width < (0, $be6f0e84320366a7$export$120137d2fb34488f)) toggleScreen('questions');
        };
        handler();
        window.addEventListener('resize', handler);
        return ()=>window.removeEventListener('resize', handler);
    }, []);
    (0, $c5L0i$react.useEffect)(()=>{
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
        const decoded = (0, $c5L0i$jwtdecode.jwtDecode)(userInfo);
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
    if (includeSwipes) return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactoauthgoogle.GoogleOAuthProvider), {
        clientId: $0c70feff32ca6a2b$var$clientId,
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)($0c70feff32ca6a2b$export$32c650b79baf5fee.Provider, {
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
                setSelectedMessage: setSelectedMessage
            },
            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                style: {
                    height: screenName ? '100%' : 'auto'
                },
                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).body,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($c5L0i$reactmodal))), {
                        isOpen: isWalletModalOpen,
                        onRequestClose: ()=>setIsWalletModalOpen(false),
                        style: $0c70feff32ca6a2b$var$customStyles,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                onClick: ()=>setIsWalletModalOpen(false),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).close,
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h2", {
                                        children: "Connect Wallet"
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {})
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).modalContent,
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                                        children: "Do you have a wallet(metamask, trust, etc)?"
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                                        children: "In this app you can get crypto rewards for asking and answering questions. But to get them you need crypto wallet."
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("p", {
                                        children: [
                                            "If you don't have one, click ",
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).hide,
                                                onClick: hide,
                                                children: "hide to stop seeing this popup"
                                            }),
                                            ". Later you can always find it in ",
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                                                children: "settings > rewards"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).connectButton,
                                        onClick: connectToWallet,
                                        children: "Connect"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactmodal))), {
                        isOpen: isModalOpen,
                        onRequestClose: closeRewardsConnectWalletModal,
                        style: $0c70feff32ca6a2b$var$customStyles,
                        children: connected ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).close,
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h2", {
                                            children: "Rewards"
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {})
                                    ]
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).row,
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                                            children: "your address: "
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).address,
                                            children: address
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).row,
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                                            children: "your payout: "
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).amount,
                                            children: [
                                                payout,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                                            children: "ASK"
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                    onClick: closeRewardsConnectWalletModal,
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).close,
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h2", {
                                            children: "Rewards"
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {})
                                    ]
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                                    children: "To get rewards for asking questions and answering them you need to connect crypto wallet"
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
                                    style: {
                                        width: '100%',
                                        marginTop: 20
                                    },
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).connectButton,
                                    onClick: connectToWallet,
                                    children: "Connect"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($c5L0i$reactmodal))), {
                        isOpen: showLoginModal,
                        onRequestClose: ()=>setIsLoginModalOpen(false),
                        style: $0c70feff32ca6a2b$var$customStyles,
                        shouldCloseOnOverlayClick: false,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).close,
                                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h2", {
                                    children: "Login or Sign up"
                                })
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                style: {
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                                        style: {
                                            marginBottom: 4
                                        },
                                        children: "To count your answer we need you to finish registration."
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                                        children: "Otherwise votes wouldn't mean a thing."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).modalContent,
                                id: "model-content",
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactoauthgoogle.GoogleLogin), {
                                        onSuccess: handleLoginSuccess,
                                        onFailure: handleLoginFailure,
                                        cookiePolicy: "single_host_origin",
                                        prompt_parent_id: "tester-tester"
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("button", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).twitterSignIn,
                                        onClick: ()=>{
                                            setAnswer(null);
                                            handleTwitterLogin(`?sendEmails=${sendEmails}
                      ${answer ? `&answer=${answer.answer}&parentMessageId=${answer.parentMessageId}&href=/questions/${answer.shortId}` : ''}`);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialX))), {}),
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                                                style: {
                                                    flexGrow: 1
                                                },
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).username,
                                                children: "Sign in with X"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).checkboxes__row,
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).checkboxes__item,
                                            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("label", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 4
                                                },
                                                className: `${(0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports)))['style-c']}`,
                                                children: [
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("input", {
                                                        style: {
                                                            height: 13,
                                                            marginTop: 4
                                                        },
                                                        checked: sendEmails,
                                                        type: "checkbox",
                                                        onChange: (e)=>setSendEmails(e.target.checked)
                                                    }),
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).checkbox__checkmark
                                                    }),
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).checkbox__body,
                                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
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
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($c5L0i$reactmodal))), {
                        isOpen: showKYCModal,
                        onRequestClose: ()=>setShowKYCModal(false),
                        style: $0c70feff32ca6a2b$var$customStyles,
                        shouldCloseOnOverlayClick: false,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                onClick: ()=>setShowKYCModal(false),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).close,
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h2", {
                                        children: "Verify your Identity"
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {})
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                style: {
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                                        style: {
                                            marginBottom: 4
                                        },
                                        children: "We need to verify your identity, as you can understand, to ensure to the maximum possible extent, that you are a real person. That way all the answers to polls become so much more valuable to you and everyone else."
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                                        children: "*Your first and last name, as well as country of origin and age will be public, if it's not clear yet"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $b29d4b4923c0cd00$export$b1977eae5cbd7a49), {
                                userId: userId,
                                updateJwt: updateJwt,
                                closeModal: ()=>setShowKYCModal(false)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($c5L0i$reactmodal))), {
                        isOpen: addImgModal,
                        onRequestClose: ()=>setAddImgModal(false),
                        style: $0c70feff32ca6a2b$var$customStyles,
                        shouldCloseOnOverlayClick: false,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                onClick: ()=>setAddImgModal(false),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).close,
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h2", {
                                        children: "Add Art to the Question"
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {})
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                style: {
                                    marginBottom: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("input", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).input,
                                        placeholder: "Place img url here...",
                                        onChange: (e)=>setImgUrl(e.target.value),
                                        value: imgUrl
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).search,
                                        onClick: ()=>{
                                            addImage(selectedMessage, imgUrl);
                                        },
                                        children: "send"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $1e3dbd7e69fec1c4$export$97295e60e7f371e1), {
                        children: children
                    })
                ]
            })
        })
    });
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        style: {
            height: screenName ? '100%' : 'auto'
        },
        className: (0, (/*@__PURE__*/$parcel$interopDefault($941289f31472d1d3$exports))).body,
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $1e3dbd7e69fec1c4$export$97295e60e7f371e1), {
            children: children
        })
    });
};


var $34a1d4be4ab80325$exports = {};

$parcel$export($34a1d4be4ab80325$exports, "card", () => $34a1d4be4ab80325$export$aa3e815946b80764, (v) => $34a1d4be4ab80325$export$aa3e815946b80764 = v);
$parcel$export($34a1d4be4ab80325$exports, "expand", () => $34a1d4be4ab80325$export$9f77e0932fb78f72, (v) => $34a1d4be4ab80325$export$9f77e0932fb78f72 = v);
$parcel$export($34a1d4be4ab80325$exports, "hint", () => $34a1d4be4ab80325$export$464c821cd4347539, (v) => $34a1d4be4ab80325$export$464c821cd4347539 = v);
$parcel$export($34a1d4be4ab80325$exports, "icon", () => $34a1d4be4ab80325$export$1ca1ec8b29a4ce27, (v) => $34a1d4be4ab80325$export$1ca1ec8b29a4ce27 = v);
$parcel$export($34a1d4be4ab80325$exports, "innerCard", () => $34a1d4be4ab80325$export$40f3ad8fcd4c93c2, (v) => $34a1d4be4ab80325$export$40f3ad8fcd4c93c2 = v);
$parcel$export($34a1d4be4ab80325$exports, "innerCardWithImage", () => $34a1d4be4ab80325$export$275ee2193c25f37a, (v) => $34a1d4be4ab80325$export$275ee2193c25f37a = v);
$parcel$export($34a1d4be4ab80325$exports, "previewImg", () => $34a1d4be4ab80325$export$fd824239f75849bd, (v) => $34a1d4be4ab80325$export$fd824239f75849bd = v);
$parcel$export($34a1d4be4ab80325$exports, "username", () => $34a1d4be4ab80325$export$5e1be761f603d585, (v) => $34a1d4be4ab80325$export$5e1be761f603d585 = v);
var $34a1d4be4ab80325$export$aa3e815946b80764;
var $34a1d4be4ab80325$export$9f77e0932fb78f72;
var $34a1d4be4ab80325$export$464c821cd4347539;
var $34a1d4be4ab80325$export$1ca1ec8b29a4ce27;
var $34a1d4be4ab80325$export$40f3ad8fcd4c93c2;
var $34a1d4be4ab80325$export$275ee2193c25f37a;
var $34a1d4be4ab80325$export$fd824239f75849bd;
var $34a1d4be4ab80325$export$5e1be761f603d585;
$34a1d4be4ab80325$export$aa3e815946b80764 = `GN153G_card`;
$34a1d4be4ab80325$export$9f77e0932fb78f72 = `GN153G_expand`;
$34a1d4be4ab80325$export$464c821cd4347539 = `GN153G_hint`;
$34a1d4be4ab80325$export$1ca1ec8b29a4ce27 = `GN153G_icon`;
$34a1d4be4ab80325$export$40f3ad8fcd4c93c2 = `GN153G_innerCard`;
$34a1d4be4ab80325$export$275ee2193c25f37a = `GN153G_innerCardWithImage`;
$34a1d4be4ab80325$export$fd824239f75849bd = `GN153G_previewImg`;
$34a1d4be4ab80325$export$5e1be761f603d585 = `GN153G_username`;


var $fde06a1540536d1e$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ yourOwnQuestion: yourOwnQuestion, shortId: shortId, onUserClick: onUserClick, img: img, createdAt: createdAt, username: username, name: name, answersCount: answersCount, he: he, me: me, respond: respond, createNewGroup: createNewGroup, htmlName: htmlName, onClick: onClick, handleTwitterLogin: handleTwitterLogin, parentMessageId: parentMessageId, createUser: createUser, trackConversion: trackConversion, addImageAvailable: addImageAvailable, loading: loading }, ref)=>{
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
    const { setIsLoginModalOpen: setIsLoginModalOpen, setAddImgModal: setAddImgModal, setSelectedMessage: setSelectedMessage, setAnswer: setAnswer } = (0, $c5L0i$react.useContext)((0, $0c70feff32ca6a2b$export$32c650b79baf5fee));
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
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("article", {
            ref: ref,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).card,
            children: [
                img && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).previewImg,
                    src: img,
                    alt: "preview image"
                }),
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                    className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).innerCard, {
                        [(0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).innerCardWithImage]: img
                    }),
                    children: [
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c52b3c36a0937910$export$2e2bcd8739ae039), {
                            children: [
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).username,
                                    onClick: onUserClick,
                                    children: [
                                        username,
                                        ":"
                                    ]
                                }),
                                " ",
                                htmlName ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: htmlName
                                    }
                                }) : name
                            ]
                        }),
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $b43f368b8ea6feca$export$2e2bcd8739ae039), {
                            ...answersCount,
                            he: he,
                            me: me,
                            createNewGroup: createNewGroup
                        }),
                        !yourOwnQuestion && !me?.answer && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $aea682282f3bff22$export$2e2bcd8739ae039), {
                            loading: loading,
                            respond: respond || redirectToLogin
                        }),
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).expand,
                            children: [
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
                                    style: {
                                        color: '#00000063'
                                    },
                                    children: [
                                        (0, $c5L0i$datefns.formatDistanceToNow)(new Date(createdAt)),
                                        " ago"
                                    ]
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("a", {
                                            href: `/questions/${shortId}`,
                                            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialOpenInNew))), {
                                                className: (0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).icon,
                                                onClick: onClick
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialShare))), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).icon,
                                            onClick: share
                                        }),
                                        addImageAvailable && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialImage))), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($34a1d4be4ab80325$exports))).icon,
                                            onClick: ()=>{
                                                setAddImgModal(true);
                                                setSelectedMessage(parentMessageId);
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});







var $6ab302fcbc9538e6$exports = {};

$parcel$export($6ab302fcbc9538e6$exports, "text", () => $6ab302fcbc9538e6$export$6f093cfa640b7166, (v) => $6ab302fcbc9538e6$export$6f093cfa640b7166 = v);
$parcel$export($6ab302fcbc9538e6$exports, "textarea", () => $6ab302fcbc9538e6$export$a3574df893ffa88d, (v) => $6ab302fcbc9538e6$export$a3574df893ffa88d = v);
var $6ab302fcbc9538e6$export$6f093cfa640b7166;
var $6ab302fcbc9538e6$export$a3574df893ffa88d;
$6ab302fcbc9538e6$export$6f093cfa640b7166 = `OxsVWq_text`;
$6ab302fcbc9538e6$export$a3574df893ffa88d = `OxsVWq_textarea`;


var $9b90ff53938d564a$export$2e2bcd8739ae039 = ({ disabled: disabled, onChange: onChange, value: value })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("textarea", {
        disabled: disabled,
        placeholder: `Type your question here ${disabled ? '(disabled if you\'re not signed in)' : ''}...`,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($6ab302fcbc9538e6$exports))).textarea, (0, (/*@__PURE__*/$parcel$interopDefault($6ab302fcbc9538e6$exports))).text),
        onChange: onChange,
        value: value
    });


var $6db7aebbd1711895$exports = {};

$parcel$export($6db7aebbd1711895$exports, "button", () => $6db7aebbd1711895$export$2ba01fb71ed41cb6, (v) => $6db7aebbd1711895$export$2ba01fb71ed41cb6 = v);
$parcel$export($6db7aebbd1711895$exports, "newQuestion", () => $6db7aebbd1711895$export$9ad540bb5fc131aa, (v) => $6db7aebbd1711895$export$9ad540bb5fc131aa = v);
var $6db7aebbd1711895$export$2ba01fb71ed41cb6;
var $6db7aebbd1711895$export$9ad540bb5fc131aa;
$6db7aebbd1711895$export$2ba01fb71ed41cb6 = `OGOopW_button`;
$6db7aebbd1711895$export$9ad540bb5fc131aa = `OGOopW_newQuestion`;


var $2d4c76ea0fc231a4$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ saveQuestion: saveQuestion }, ref)=>{
    const [question, setQuestion] = (0, $c5L0i$react.useState)('');
    const onChange = (e)=>{
        const newQuestion = e.target.value;
        setQuestion(newQuestion);
    };
    const save = (e)=>{
        e.target.blur();
        saveQuestion(question);
        setQuestion('');
    };
    const disabled = !saveQuestion;
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($6db7aebbd1711895$exports))).newQuestion,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $9b90ff53938d564a$export$2e2bcd8739ae039), {
                disabled: disabled,
                value: question,
                onChange: onChange
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
                disabled: !question || !saveQuestion,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($6db7aebbd1711895$exports))).button,
                onClick: save,
                children: "Ask"
            })
        ]
    });
});






var $6be3d19ca593c163$exports = {};

$parcel$export($6be3d19ca593c163$exports, "groupContainer", () => $6be3d19ca593c163$export$f36792cb9bd81925, (v) => $6be3d19ca593c163$export$f36792cb9bd81925 = v);
var $6be3d19ca593c163$export$f36792cb9bd81925;
$6be3d19ca593c163$export$f36792cb9bd81925 = `E0-4eG_groupContainer`;


var $cf7fa14b6ace065a$export$2e2bcd8739ae039 = ({ children: children, id: id, style: style, className: className })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        style: style,
        id: id,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($6be3d19ca593c163$exports))).groupContainer, className),
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
            style: {
                width: '100%',
                height: '100%'
            },
            children: children
        })
    });








var $25f6686bebec2027$exports = {};

$parcel$export($25f6686bebec2027$exports, "container", () => $25f6686bebec2027$export$34e0f9847d4c02dd, (v) => $25f6686bebec2027$export$34e0f9847d4c02dd = v);
var $25f6686bebec2027$export$34e0f9847d4c02dd;
$25f6686bebec2027$export$34e0f9847d4c02dd = `iW3V3q_container`;


var $4fca24e0a7aa9c5a$export$2e2bcd8739ae039 = ({ children: children, className: className })=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($25f6686bebec2027$exports))).container, className),
        children: children
    });


var $0dca14a056f81668$exports = {};

$parcel$export($0dca14a056f81668$exports, "mainScreen", () => $0dca14a056f81668$export$e962ae2959462fd2, (v) => $0dca14a056f81668$export$e962ae2959462fd2 = v);
$parcel$export($0dca14a056f81668$exports, "mainScreenContainer", () => $0dca14a056f81668$export$65cfe9c2ce1b1faf, (v) => $0dca14a056f81668$export$65cfe9c2ce1b1faf = v);
var $0dca14a056f81668$export$e962ae2959462fd2;
var $0dca14a056f81668$export$65cfe9c2ce1b1faf;
$0dca14a056f81668$export$e962ae2959462fd2 = `zfn2bW_mainScreen`;
$0dca14a056f81668$export$65cfe9c2ce1b1faf = `zfn2bW_mainScreenContainer`;


var $1476c8c916741db2$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ children: children, className: className, style: style, id: id, scrollId: scrollId }, ref)=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("section", {
        id: id,
        ref: ref,
        style: style,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($0dca14a056f81668$exports))).mainScreen, className),
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $4fca24e0a7aa9c5a$export$2e2bcd8739ae039), {
            scrollId: scrollId,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($0dca14a056f81668$exports))).mainScreenContainer,
            children: children
        })
    }));




var $f28eb578a4c1e5c1$exports = {};

$parcel$export($f28eb578a4c1e5c1$exports, "sidebar", () => $f28eb578a4c1e5c1$export$6fbb9cd2843e91b2, (v) => $f28eb578a4c1e5c1$export$6fbb9cd2843e91b2 = v);
$parcel$export($f28eb578a4c1e5c1$exports, "title", () => $f28eb578a4c1e5c1$export$fb184b623420d9be, (v) => $f28eb578a4c1e5c1$export$fb184b623420d9be = v);
var $f28eb578a4c1e5c1$export$6fbb9cd2843e91b2;
var $f28eb578a4c1e5c1$export$fb184b623420d9be;
$f28eb578a4c1e5c1$export$6fbb9cd2843e91b2 = `HFaEpW_sidebar`;
$f28eb578a4c1e5c1$export$fb184b623420d9be = `HFaEpW_title`;


var $caa6e61676dd60dd$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ children: children, style: style }, ref)=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        ref: ref,
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($f28eb578a4c1e5c1$exports))).sidebar,
        children: children
    }));





var $5a9d2af86b1e1e16$exports = {};

$parcel$export($5a9d2af86b1e1e16$exports, "cardsRow", () => $5a9d2af86b1e1e16$export$3ffd594349b5aa88, (v) => $5a9d2af86b1e1e16$export$3ffd594349b5aa88 = v);
$parcel$export($5a9d2af86b1e1e16$exports, "scrollContainer", () => $5a9d2af86b1e1e16$export$fad3c8302a7540c6, (v) => $5a9d2af86b1e1e16$export$fad3c8302a7540c6 = v);
var $5a9d2af86b1e1e16$export$3ffd594349b5aa88;
var $5a9d2af86b1e1e16$export$fad3c8302a7540c6;
$5a9d2af86b1e1e16$export$3ffd594349b5aa88 = `_7kO5aG_cardsRow`;
$5a9d2af86b1e1e16$export$fad3c8302a7540c6 = `_7kO5aG_scrollContainer`;


var $f6827b11255bd55d$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ style: style, children: children, id: id, className: className }, ref)=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        style: style,
        ref: ref,
        id: id,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($5a9d2af86b1e1e16$exports))).scrollContainer, className),
        children: children
    });
});











var $fc6e17f49e58291a$exports = {};

$parcel$export($fc6e17f49e58291a$exports, "back", () => $fc6e17f49e58291a$export$7c341cb16fc91138, (v) => $fc6e17f49e58291a$export$7c341cb16fc91138 = v);
$parcel$export($fc6e17f49e58291a$exports, "checkbox", () => $fc6e17f49e58291a$export$b07e517d22efa1ca, (v) => $fc6e17f49e58291a$export$b07e517d22efa1ca = v);
$parcel$export($fc6e17f49e58291a$exports, "checkbox__body", () => $fc6e17f49e58291a$export$d3da3a95ea50034e, (v) => $fc6e17f49e58291a$export$d3da3a95ea50034e = v);
$parcel$export($fc6e17f49e58291a$exports, "checkbox__checkmark", () => $fc6e17f49e58291a$export$340dac494ade0321, (v) => $fc6e17f49e58291a$export$340dac494ade0321 = v);
$parcel$export($fc6e17f49e58291a$exports, "checkboxes__item", () => $fc6e17f49e58291a$export$760569eb394a6344, (v) => $fc6e17f49e58291a$export$760569eb394a6344 = v);
$parcel$export($fc6e17f49e58291a$exports, "checkboxes__row", () => $fc6e17f49e58291a$export$6c3b9b20e13900f2, (v) => $fc6e17f49e58291a$export$6c3b9b20e13900f2 = v);
$parcel$export($fc6e17f49e58291a$exports, "close", () => $fc6e17f49e58291a$export$8360e631d277ea4d, (v) => $fc6e17f49e58291a$export$8360e631d277ea4d = v);
$parcel$export($fc6e17f49e58291a$exports, "column", () => $fc6e17f49e58291a$export$4e0c71f277ca26b3, (v) => $fc6e17f49e58291a$export$4e0c71f277ca26b3 = v);
$parcel$export($fc6e17f49e58291a$exports, "imgFallback", () => $fc6e17f49e58291a$export$e94d20c87215d48b, (v) => $fc6e17f49e58291a$export$e94d20c87215d48b = v);
$parcel$export($fc6e17f49e58291a$exports, "row", () => $fc6e17f49e58291a$export$120ff0929b202a6d, (v) => $fc6e17f49e58291a$export$120ff0929b202a6d = v);
$parcel$export($fc6e17f49e58291a$exports, "screenWithGroupContent", () => $fc6e17f49e58291a$export$de3da254965f2f43, (v) => $fc6e17f49e58291a$export$de3da254965f2f43 = v);
$parcel$export($fc6e17f49e58291a$exports, "style-c", () => $fc6e17f49e58291a$export$d8e3ffb8a71e7871, (v) => $fc6e17f49e58291a$export$d8e3ffb8a71e7871 = v);
$parcel$export($fc6e17f49e58291a$exports, "userItem", () => $fc6e17f49e58291a$export$f6bda04bc7d10a12, (v) => $fc6e17f49e58291a$export$f6bda04bc7d10a12 = v);
$parcel$export($fc6e17f49e58291a$exports, "usersContainer", () => $fc6e17f49e58291a$export$771ca420b1b6ed17, (v) => $fc6e17f49e58291a$export$771ca420b1b6ed17 = v);
var $fc6e17f49e58291a$export$7c341cb16fc91138;
var $fc6e17f49e58291a$export$b07e517d22efa1ca;
var $fc6e17f49e58291a$export$d3da3a95ea50034e;
var $fc6e17f49e58291a$export$340dac494ade0321;
var $fc6e17f49e58291a$export$760569eb394a6344;
var $fc6e17f49e58291a$export$6c3b9b20e13900f2;
var $fc6e17f49e58291a$export$8360e631d277ea4d;
var $fc6e17f49e58291a$export$4e0c71f277ca26b3;
var $fc6e17f49e58291a$export$e94d20c87215d48b;
var $fc6e17f49e58291a$export$120ff0929b202a6d;
var $fc6e17f49e58291a$export$de3da254965f2f43;
var $fc6e17f49e58291a$export$d8e3ffb8a71e7871;
var $fc6e17f49e58291a$export$f6bda04bc7d10a12;
var $fc6e17f49e58291a$export$771ca420b1b6ed17;
$fc6e17f49e58291a$export$7c341cb16fc91138 = `zDJPrW_back`;
$fc6e17f49e58291a$export$b07e517d22efa1ca = `zDJPrW_checkbox`;
$fc6e17f49e58291a$export$d3da3a95ea50034e = `zDJPrW_checkbox__body`;
$fc6e17f49e58291a$export$340dac494ade0321 = `zDJPrW_checkbox__checkmark`;
$fc6e17f49e58291a$export$760569eb394a6344 = `zDJPrW_checkboxes__item`;
$fc6e17f49e58291a$export$6c3b9b20e13900f2 = `zDJPrW_checkboxes__row`;
$fc6e17f49e58291a$export$8360e631d277ea4d = `zDJPrW_close`;
$fc6e17f49e58291a$export$4e0c71f277ca26b3 = `zDJPrW_column`;
$fc6e17f49e58291a$export$e94d20c87215d48b = `zDJPrW_imgFallback`;
$fc6e17f49e58291a$export$120ff0929b202a6d = `zDJPrW_row`;
$fc6e17f49e58291a$export$de3da254965f2f43 = `zDJPrW_screenWithGroupContent`;
$fc6e17f49e58291a$export$d8e3ffb8a71e7871 = `zDJPrW_style-c`;
$fc6e17f49e58291a$export$f6bda04bc7d10a12 = `zDJPrW_userItem`;
$fc6e17f49e58291a$export$771ca420b1b6ed17 = `zDJPrW_usersContainer`;


var $2869377cb1e5210a$exports = {};
$2869377cb1e5210a$exports = new URL("x-check.fcf77d4b.svg", "file:" + __filename).toString();



const $42498b7876d29f2b$export$1f44aaf2ec115b54 = ({ user: user, onUserClick: onUserClick, children: children, style: style })=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        style: style,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).userItem,
        onClick: ()=>onUserClick(user),
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).row,
                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($c5L0i$reactflipmove))), {
                            typeName: null,
                            appearAnimation: "fade",
                            enterAnimation: "fade",
                            leaveAnimation: "fade",
                            children: [
                                user ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                    src: user.pictureUrl,
                                    alt: `${user.name} profile picture`
                                }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).imgFallback,
                                    style: {
                                        background: '#E7E4E2'
                                    }
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).column,
                                    children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($c5L0i$reactflipmove))), {
                                        typeName: null,
                                        appearAnimation: "fade",
                                        enterAnimation: "fade",
                                        leaveAnimation: "fade",
                                        children: [
                                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                children: user?.fullName || 'loading'
                                            }),
                                            Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
                                                children: [
                                                    (0, ($parcel$interopDefault($c5L0i$humannumber)))(user.followerCount),
                                                    " followers"
                                                ]
                                            }),
                                            user?.twitterVerified && user?.twitterVerified !== 'none' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                        children: "twitter verified"
                                                    }),
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($2869377cb1e5210a$exports))),
                                                        style: {
                                                            height: 16,
                                                            width: 16,
                                                            paddingLeft: 3,
                                                            border: 'none'
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.verifiedKYC && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                        children: "verified by passport"
                                                    }),
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($80078e45b13c3759$exports))),
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
                    Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("a", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            window.mixpanel.track('X Profile Click', {
                                url: `https://twitter.com/${user?.username}`
                            });
                        },
                        href: `https://twitter.com/${user?.username}`,
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialX))), {})
                    })
                ]
            }),
            children
        ]
    }, user?._id);
};
var $42498b7876d29f2b$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ users: users, fetchUsers: fetchUsers, hasMore: hasMore, show: show, onUserClick: onUserClick, close: close, style: style, className: className, toggleVerifiedByX: toggleVerifiedByX, toggleVerifiedByKYC: toggleVerifiedByKYC }, ref)=>{
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        id: "group-content-search-scroll-target",
        ref: ref,
        style: {
            ...show && {
                display: 'flex'
            },
            ...style
        },
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).screenWithGroupContent, className),
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).close,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).back,
                    onClick: close
                })
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                style: {
                    marginBottom: 32,
                    display: 'flex',
                    gap: 8
                },
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 14,
                        fontWeight: 300,
                        color: 'gray'
                    },
                    children: [
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkboxes__row,
                            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkboxes__item,
                                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("label", {
                                    className: `${(0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports)))['style-c']}`,
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("input", {
                                            type: "checkbox",
                                            onChange: (e)=>toggleVerifiedByX(e.target.checked)
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkbox__checkmark
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkbox__body,
                                            children: [
                                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                    children: "twitter verified"
                                                }),
                                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($2869377cb1e5210a$exports))),
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
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkboxes__row,
                            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkboxes__item,
                                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("label", {
                                    className: `${(0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkbox} ${(0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports)))['style-c']}`,
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("input", {
                                            type: "checkbox",
                                            onChange: (e)=>toggleVerifiedByKYC(e.target.checked)
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkbox__checkmark
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).checkbox__body,
                                            children: [
                                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                    children: "verified by passport"
                                                }),
                                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($80078e45b13c3759$exports))),
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
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactinfinitescrollcomponent))), {
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
                className: (0, (/*@__PURE__*/$parcel$interopDefault($fc6e17f49e58291a$exports))).usersContainer,
                children: users.map((user)=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)($42498b7876d29f2b$export$1f44aaf2ec115b54, {
                        user: user,
                        onUserClick: onUserClick
                    }, user._id))
            })
        ]
    });
});












var $d96dc328a9b2259c$exports = {};

$parcel$export($d96dc328a9b2259c$exports, "back", () => $d96dc328a9b2259c$export$7c341cb16fc91138, (v) => $d96dc328a9b2259c$export$7c341cb16fc91138 = v);
$parcel$export($d96dc328a9b2259c$exports, "backContainer", () => $d96dc328a9b2259c$export$4effee6a14a93095, (v) => $d96dc328a9b2259c$export$4effee6a14a93095 = v);
$parcel$export($d96dc328a9b2259c$exports, "button", () => $d96dc328a9b2259c$export$2ba01fb71ed41cb6, (v) => $d96dc328a9b2259c$export$2ba01fb71ed41cb6 = v);
$parcel$export($d96dc328a9b2259c$exports, "differentTabs", () => $d96dc328a9b2259c$export$b70bd1b6fa2267e5, (v) => $d96dc328a9b2259c$export$b70bd1b6fa2267e5 = v);
$parcel$export($d96dc328a9b2259c$exports, "differentTabs2", () => $d96dc328a9b2259c$export$11056a9a5a9dfdf9, (v) => $d96dc328a9b2259c$export$11056a9a5a9dfdf9 = v);
$parcel$export($d96dc328a9b2259c$exports, "screenWithGroupContent", () => $d96dc328a9b2259c$export$de3da254965f2f43, (v) => $d96dc328a9b2259c$export$de3da254965f2f43 = v);
$parcel$export($d96dc328a9b2259c$exports, "selected", () => $d96dc328a9b2259c$export$d90250155de6d7e7, (v) => $d96dc328a9b2259c$export$d90250155de6d7e7 = v);
$parcel$export($d96dc328a9b2259c$exports, "similarity", () => $d96dc328a9b2259c$export$16a4d76eabe7aabb, (v) => $d96dc328a9b2259c$export$16a4d76eabe7aabb = v);
$parcel$export($d96dc328a9b2259c$exports, "tabs", () => $d96dc328a9b2259c$export$39f5674517ec0000, (v) => $d96dc328a9b2259c$export$39f5674517ec0000 = v);
var $d96dc328a9b2259c$export$7c341cb16fc91138;
var $d96dc328a9b2259c$export$4effee6a14a93095;
var $d96dc328a9b2259c$export$2ba01fb71ed41cb6;
var $d96dc328a9b2259c$export$b70bd1b6fa2267e5;
var $d96dc328a9b2259c$export$11056a9a5a9dfdf9;
var $d96dc328a9b2259c$export$de3da254965f2f43;
var $d96dc328a9b2259c$export$d90250155de6d7e7;
var $d96dc328a9b2259c$export$16a4d76eabe7aabb;
var $d96dc328a9b2259c$export$39f5674517ec0000;
$d96dc328a9b2259c$export$7c341cb16fc91138 = `_31v-EG_back`;
$d96dc328a9b2259c$export$4effee6a14a93095 = `_31v-EG_backContainer`;
$d96dc328a9b2259c$export$2ba01fb71ed41cb6 = `_31v-EG_button`;
$d96dc328a9b2259c$export$b70bd1b6fa2267e5 = `_31v-EG_differentTabs`;
$d96dc328a9b2259c$export$11056a9a5a9dfdf9 = `_31v-EG_differentTabs2`;
$d96dc328a9b2259c$export$de3da254965f2f43 = `_31v-EG_screenWithGroupContent`;
$d96dc328a9b2259c$export$d90250155de6d7e7 = `_31v-EG_selected`;
$d96dc328a9b2259c$export$16a4d76eabe7aabb = `_31v-EG_similarity`;
$d96dc328a9b2259c$export$39f5674517ec0000 = `_31v-EG_tabs`;


const $4c6bd8db1d735d14$export$522e89d0fa1200f4 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ selectedTab: selectedTab, setSelectedTab: setSelectedTab, showDifference: showDifference, setShowDifference: setShowDifference, back: back, children: children, similarity: similarity, user: user }, ref)=>{
    (0, $c5L0i$react.useEffect)(()=>{
        if (showDifference && selectedTab !== 'answers') setSelectedTab('answers');
    }, [
        showDifference
    ]);
    (0, $c5L0i$react.useEffect)(()=>{
        if (showDifference && selectedTab !== 'answers') setShowDifference(false);
    }, [
        selectedTab
    ]);
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        id: "user-content-scroll-target",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).screenWithGroupContent,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).backContainer,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).back,
                    onClick: back
                })
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $42498b7876d29f2b$export$1f44aaf2ec115b54), {
                style: {
                    cursor: 'auto',
                    border: 'none'
                },
                user: user,
                onUserClick: ()=>{},
                children: !(0, ($parcel$interopDefault($c5L0i$lodash))).isNull(similarity) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("p", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).similarity,
                    children: [
                        "Similarity to you: ",
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).similarityMeter,
                            children: [
                                similarity,
                                "%"
                            ]
                        })
                    ]
                })
            }),
            !(0, ($parcel$interopDefault($c5L0i$lodash))).isNull(similarity) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).button,
                    onClick: ()=>{
                        const newShowDifference = !showDifference;
                        setShowDifference(newShowDifference);
                        window.mixpanel.track(newShowDifference ? 'Show Users Difference' : 'Go Back to User Q/A');
                    },
                    children: showDifference ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialArrowBack))), {
                                sx: {
                                    fontSize: 14,
                                    marginRight: '5px'
                                }
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                children: "Back"
                            })
                        ]
                    }) : 'Show Differences'
                })
            }),
            !showDifference && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        style: {
                            width: 'calc(100% - 30px)',
                            height: 1,
                            borderTop: '1px solid rgb(179, 179, 179)',
                            boxSizing: 'border-box',
                            margin: '15px auto'
                        }
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).tabs,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, ($parcel$interopDefault($c5L0i$classnames)))({
                                    [(0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).selected]: selectedTab === 'questions'
                                }),
                                onClick: ()=>{
                                    window.mixpanel.track('Select User Questions Tab');
                                    setSelectedTab('questions');
                                },
                                children: "His/Her Questions"
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, ($parcel$interopDefault($c5L0i$classnames)))({
                                    [(0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).selected]: selectedTab === 'answers'
                                }),
                                onClick: ()=>{
                                    setSelectedTab('answers');
                                    window.mixpanel.track('Select User Answers Tab');
                                },
                                children: "His/Her Answers"
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
});
const $4c6bd8db1d735d14$export$1f74963c34e8bfec = ()=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
            style: {
                color: '#3b3b3b',
                fontSize: 36,
                fontWeight: 300
            },
            children: "empty"
        })
    });
$4c6bd8db1d735d14$export$1f74963c34e8bfec.prototype = {};
const $4c6bd8db1d735d14$export$6241fe9ea73c6c74 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ questions: questions, hasMore: hasMore, fetchQuestions: fetchQuestions, respond: respond, createNewGroup: createNewGroup, onUserClick: onUserClick, onQuestionClick: onQuestionClick }, ref)=>{
    if (questions && questions.length === 0) return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)($4c6bd8db1d735d14$export$1f74963c34e8bfec, {});
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactinfinitescrollcomponent))), {
            scrollableTarget: "user-content-scroll-target",
            dataLength: questions?.length || 0,
            next: fetchQuestions,
            hasMore: hasMore,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).usersItems,
            children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactflipmove))), {
                appearAnimation: "elevator",
                typeName: null,
                maintainContainerHeight: true,
                children: questions && questions.map((i)=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $fde06a1540536d1e$export$2e2bcd8739ae039), {
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
const $4c6bd8db1d735d14$export$a6816b34ad549b0 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ respond: // hasMore,
// fetchAnswers,
respond, createNewGroup: createNewGroup, onUserClick: onUserClick, answers: answers, onQuestionClick: onQuestionClick }, ref)=>{
    const [selectedTab, setSelectedTab] = (0, $c5L0i$react.useState)('different');
    const [selectedNestedTab, setSelectedNestedTab] = (0, $c5L0i$react.useState)('byMe');
    // const [answers, setAnswers] = useState({
    //   different: [],
    //   same: [],
    //   notAnswered: []
    // })
    // useEffect(() => {
    //   compareWithMe().then(answers => setAnswers(answers))
    // }, [])
    const questionsToShow = answers && (selectedTab === 'notAnswered' ? answers[selectedTab].filter((i)=>selectedNestedTab === 'byMe' ? i.byMe : !i.byMe) : answers[selectedTab]).map((i)=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $fde06a1540536d1e$export$2e2bcd8739ae039), {
            respond: respond && ((content)=>respond(i._id, content)),
            createNewGroup: (content)=>createNewGroup(i.shortId, content),
            ...i,
            onUserClick: ()=>onUserClick(i.userId),
            onClick: ()=>onQuestionClick(i.shortId)
        }, i.id || i._id));
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                style: {
                    width: 'calc(100% - 30px)',
                    height: 1,
                    borderTop: '1px solid rgb(179, 179, 179)',
                    boxSizing: 'border-box',
                    margin: '15px auto'
                }
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).tabs, (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).differentTabs),
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($c5L0i$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).selected]: selectedTab === 'different'
                        }),
                        onClick: ()=>{
                            window.mixpanel.track('Select Different Tab');
                            setSelectedTab('different');
                        },
                        children: "Different Answer"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($c5L0i$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).selected]: selectedTab === 'same'
                        }),
                        onClick: ()=>{
                            window.mixpanel.track('Select Same Tab');
                            setSelectedTab('same');
                        },
                        children: "Same Answer"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($c5L0i$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).selected]: selectedTab === 'notAnswered'
                        }),
                        onClick: ()=>{
                            window.mixpanel.track('Select Not Answered Tab');
                            setSelectedTab('notAnswered');
                        },
                        children: "Not Answered"
                    })
                ]
            }),
            selectedTab === 'notAnswered' ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).tabs, (0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).differentTabs2),
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($c5L0i$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).selected]: selectedNestedTab === 'byMe'
                        }),
                        onClick: ()=>setSelectedNestedTab('byMe'),
                        children: "By Me"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($c5L0i$classnames)))({
                            [(0, (/*@__PURE__*/$parcel$interopDefault($d96dc328a9b2259c$exports))).selected]: selectedNestedTab === 'byHim'
                        }),
                        onClick: ()=>setSelectedNestedTab('byHim'),
                        children: "By Him/Her"
                    })
                ]
            }) : null,
            questionsToShow && questionsToShow.length === 0 && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)($4c6bd8db1d735d14$export$1f74963c34e8bfec, {}),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactflipmove))), {
                appearAnimation: "elevator",
                maintainContainerHeight: true,
                children: questionsToShow
            })
        ]
    });
});








var $a9ddd490efc245bf$exports = {};

$parcel$export($a9ddd490efc245bf$exports, "buttonsOutside", () => $a9ddd490efc245bf$export$eb4f292bdd97cb15, (v) => $a9ddd490efc245bf$export$eb4f292bdd97cb15 = v);
$parcel$export($a9ddd490efc245bf$exports, "dropdownContainer", () => $a9ddd490efc245bf$export$a3681dba3470c8c4, (v) => $a9ddd490efc245bf$export$a3681dba3470c8c4 = v);
$parcel$export($a9ddd490efc245bf$exports, "dropdownItemsContainer", () => $a9ddd490efc245bf$export$960d6a7eb8ce632b, (v) => $a9ddd490efc245bf$export$960d6a7eb8ce632b = v);
$parcel$export($a9ddd490efc245bf$exports, "dropdownValue", () => $a9ddd490efc245bf$export$2ff2bc1709095d00, (v) => $a9ddd490efc245bf$export$2ff2bc1709095d00 = v);
$parcel$export($a9ddd490efc245bf$exports, "input", () => $a9ddd490efc245bf$export$b7e3ae3d7c15e42e, (v) => $a9ddd490efc245bf$export$b7e3ae3d7c15e42e = v);
$parcel$export($a9ddd490efc245bf$exports, "search", () => $a9ddd490efc245bf$export$d76128d007d19019, (v) => $a9ddd490efc245bf$export$d76128d007d19019 = v);
$parcel$export($a9ddd490efc245bf$exports, "text", () => $a9ddd490efc245bf$export$6f093cfa640b7166, (v) => $a9ddd490efc245bf$export$6f093cfa640b7166 = v);
var $a9ddd490efc245bf$export$eb4f292bdd97cb15;
var $a9ddd490efc245bf$export$a3681dba3470c8c4;
var $a9ddd490efc245bf$export$960d6a7eb8ce632b;
var $a9ddd490efc245bf$export$2ff2bc1709095d00;
var $a9ddd490efc245bf$export$b7e3ae3d7c15e42e;
var $a9ddd490efc245bf$export$d76128d007d19019;
var $a9ddd490efc245bf$export$6f093cfa640b7166;
$a9ddd490efc245bf$export$eb4f292bdd97cb15 = `_6W1esa_buttonsOutside`;
$a9ddd490efc245bf$export$a3681dba3470c8c4 = `_6W1esa_dropdownContainer`;
$a9ddd490efc245bf$export$960d6a7eb8ce632b = `_6W1esa_dropdownItemsContainer`;
$a9ddd490efc245bf$export$2ff2bc1709095d00 = `_6W1esa_dropdownValue`;
$a9ddd490efc245bf$export$b7e3ae3d7c15e42e = `_6W1esa_input`;
$a9ddd490efc245bf$export$d76128d007d19019 = `_6W1esa_search`;
$a9ddd490efc245bf$export$6f093cfa640b7166 = `_6W1esa_text`;


var $95c6e69ef8ee0198$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ search: search, buttonsOutside: buttonsOutside = false, className: className, style: style }, ref2)=>{
    const [text, setText] = (0, $c5L0i$react.useState)('');
    const [dropdownValue, setDropdownValue] = (0, $c5L0i$react.useState)('Questions');
    const [showDropdown, setShowDropdown] = (0, $c5L0i$react.useState)(false);
    const ref = (0, $c5L0i$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowDropdown(false)
    });
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        ref: (node)=>{
            ref.current = node;
            if (ref2) ref2(node);
        },
        style: style,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).text, className, {
            [(0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).buttonsOutside]: buttonsOutside
        }),
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("input", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).input,
                placeholder: "Search here...",
                onChange: (e)=>setText(e.target.value),
                value: text
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).dropdownContainer,
                ref: ref,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).dropdownValue,
                        onClick: ()=>setShowDropdown(true),
                        children: dropdownValue
                    }),
                    showDropdown && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).dropdownItemsContainer,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).dropdownItem,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDropdownValue('Questions');
                                    setShowDropdown(false);
                                },
                                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                    children: "Questions"
                                })
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).dropdownItem,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDropdownValue('Users');
                                    setShowDropdown(false);
                                },
                                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                    children: "Users"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialExpandMore))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).expandIcon,
                        onClick: ()=>setShowDropdown(true)
                    })
                ]
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("button", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($a9ddd490efc245bf$exports))).search,
                onClick: ()=>search(dropdownValue, text),
                children: [
                    "Find",
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialSearch))), {
                        sx: {
                            fontSize: 16
                        }
                    })
                ]
            })
        ]
    });
});










var $80a088ebd4973b81$exports = {};

$parcel$export($80a088ebd4973b81$exports, "back", () => $80a088ebd4973b81$export$7c341cb16fc91138, (v) => $80a088ebd4973b81$export$7c341cb16fc91138 = v);
$parcel$export($80a088ebd4973b81$exports, "screenWithGroupContent", () => $80a088ebd4973b81$export$de3da254965f2f43, (v) => $80a088ebd4973b81$export$de3da254965f2f43 = v);
$parcel$export($80a088ebd4973b81$exports, "total", () => $80a088ebd4973b81$export$9086bb9c16b2b5b, (v) => $80a088ebd4973b81$export$9086bb9c16b2b5b = v);
$parcel$export($80a088ebd4973b81$exports, "totalAndBack", () => $80a088ebd4973b81$export$ef9502a2481467bc, (v) => $80a088ebd4973b81$export$ef9502a2481467bc = v);
var $80a088ebd4973b81$export$7c341cb16fc91138;
var $80a088ebd4973b81$export$de3da254965f2f43;
var $80a088ebd4973b81$export$9086bb9c16b2b5b;
var $80a088ebd4973b81$export$ef9502a2481467bc;
$80a088ebd4973b81$export$7c341cb16fc91138 = `BbEWnq_back`;
$80a088ebd4973b81$export$de3da254965f2f43 = `BbEWnq_screenWithGroupContent`;
$80a088ebd4973b81$export$9086bb9c16b2b5b = `BbEWnq_total`;
$80a088ebd4973b81$export$ef9502a2481467bc = `BbEWnq_totalAndBack`;


(0, ($parcel$interopDefault($c5L0i$handlebars))).registerHelper('bold', function(options) {
    const targetText = options.hash.text;
    const replacement = `<strong>${targetText}</strong>`;
    return new (0, ($parcel$interopDefault($c5L0i$handlebars))).SafeString(this.text.replace(new RegExp(targetText, 'gi'), replacement));
});
var $9330b1b20ef62cea$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ questions: questions, hasMore: hasMore, fetchQuestions: fetchQuestions, total: total, respond: respond, createNewGroup: createNewGroup, back: back, search: search, style: style, className: className, onUserClick: onUserClick, onQuestionClick: onQuestionClick }, ref)=>{
    const templateString = `{{bold text="${search}"}}`;
    const template = (0, ($parcel$interopDefault($c5L0i$handlebars))).compile(templateString);
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $f6827b11255bd55d$export$2e2bcd8739ae039), {
        id: "questions-search-scroll-target",
        ref: ref,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))(className, (0, (/*@__PURE__*/$parcel$interopDefault($80a088ebd4973b81$exports))).screenWithGroupContent),
        style: style,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($80a088ebd4973b81$exports))).totalAndBack,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($80a088ebd4973b81$exports))).total,
                        children: [
                            total,
                            " questions found"
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($80a088ebd4973b81$exports))).back,
                        onClick: back
                    })
                ]
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactinfinitescrollcomponent))), {
                scrollableTarget: "questions-search-scroll-target",
                dataLength: questions.length,
                next: fetchQuestions,
                hasMore: hasMore,
                children: questions.map((i)=>{
                    let htmlOutput;
                    if (search) htmlOutput = template({
                        text: i.name
                    });
                    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $fde06a1540536d1e$export$2e2bcd8739ae039), {
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












var $e7fcc7d3eba9496b$exports = {};

$parcel$export($e7fcc7d3eba9496b$exports, "back", () => $e7fcc7d3eba9496b$export$7c341cb16fc91138, (v) => $e7fcc7d3eba9496b$export$7c341cb16fc91138 = v);
$parcel$export($e7fcc7d3eba9496b$exports, "column", () => $e7fcc7d3eba9496b$export$4e0c71f277ca26b3, (v) => $e7fcc7d3eba9496b$export$4e0c71f277ca26b3 = v);
$parcel$export($e7fcc7d3eba9496b$exports, "row", () => $e7fcc7d3eba9496b$export$120ff0929b202a6d, (v) => $e7fcc7d3eba9496b$export$120ff0929b202a6d = v);
$parcel$export($e7fcc7d3eba9496b$exports, "total", () => $e7fcc7d3eba9496b$export$9086bb9c16b2b5b, (v) => $e7fcc7d3eba9496b$export$9086bb9c16b2b5b = v);
$parcel$export($e7fcc7d3eba9496b$exports, "totalAndBack", () => $e7fcc7d3eba9496b$export$ef9502a2481467bc, (v) => $e7fcc7d3eba9496b$export$ef9502a2481467bc = v);
$parcel$export($e7fcc7d3eba9496b$exports, "userItem", () => $e7fcc7d3eba9496b$export$f6bda04bc7d10a12, (v) => $e7fcc7d3eba9496b$export$f6bda04bc7d10a12 = v);
$parcel$export($e7fcc7d3eba9496b$exports, "usersContainer", () => $e7fcc7d3eba9496b$export$771ca420b1b6ed17, (v) => $e7fcc7d3eba9496b$export$771ca420b1b6ed17 = v);
$parcel$export($e7fcc7d3eba9496b$exports, "usersItems", () => $e7fcc7d3eba9496b$export$2778a17561d67130, (v) => $e7fcc7d3eba9496b$export$2778a17561d67130 = v);
var $e7fcc7d3eba9496b$export$7c341cb16fc91138;
var $e7fcc7d3eba9496b$export$4e0c71f277ca26b3;
var $e7fcc7d3eba9496b$export$120ff0929b202a6d;
var $e7fcc7d3eba9496b$export$9086bb9c16b2b5b;
var $e7fcc7d3eba9496b$export$ef9502a2481467bc;
var $e7fcc7d3eba9496b$export$f6bda04bc7d10a12;
var $e7fcc7d3eba9496b$export$771ca420b1b6ed17;
var $e7fcc7d3eba9496b$export$2778a17561d67130;
$e7fcc7d3eba9496b$export$7c341cb16fc91138 = `_9WjUxq_back`;
$e7fcc7d3eba9496b$export$4e0c71f277ca26b3 = `_9WjUxq_column`;
$e7fcc7d3eba9496b$export$120ff0929b202a6d = `_9WjUxq_row`;
$e7fcc7d3eba9496b$export$9086bb9c16b2b5b = `_9WjUxq_total`;
$e7fcc7d3eba9496b$export$ef9502a2481467bc = `_9WjUxq_totalAndBack`;
$e7fcc7d3eba9496b$export$f6bda04bc7d10a12 = `_9WjUxq_userItem`;
$e7fcc7d3eba9496b$export$771ca420b1b6ed17 = `_9WjUxq_usersContainer`;
$e7fcc7d3eba9496b$export$2778a17561d67130 = `_9WjUxq_usersItems`;


(0, ($parcel$interopDefault($c5L0i$handlebars))).registerHelper('bold', function(options) {
    const targetText = options.hash.text;
    const replacement = `<strong>${targetText}</strong>`;
    return new (0, ($parcel$interopDefault($c5L0i$handlebars))).SafeString(this.text.replace(new RegExp(targetText, 'gi'), replacement));
});
var $d99360e8c29d4994$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ style: style, users: users, fetchUsers: fetchUsers, hasMore: hasMore, total: total, back: back, search: search, onUserClick: onUserClick }, ref)=>{
    const templateString = `{{bold text="${search}"}}`;
    const template = (0, ($parcel$interopDefault($c5L0i$handlebars))).compile(templateString);
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $f6827b11255bd55d$export$2e2bcd8739ae039), {
        style: style,
        id: "users-search-scroll-target",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).usersContainer,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).totalAndBack,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).total,
                        children: [
                            total,
                            " users found"
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).back,
                        onClick: back
                    })
                ]
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$reactinfinitescrollcomponent))), {
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
                className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).usersItems,
                children: users.map((user)=>{
                    let htmlOutput;
                    if (search) htmlOutput = template({
                        text: user.username
                    });
                    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).userItem,
                        onClick: ()=>onUserClick(user),
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).row,
                                children: [
                                    user.pictureUrl && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                        src: user.pictureUrl,
                                        alt: `${user.name} profile picture`
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($e7fcc7d3eba9496b$exports))).column,
                                        children: [
                                            htmlOutput ? /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: htmlOutput
                                                }
                                            }) : /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                children: user.username
                                            }),
                                            Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
                                                children: [
                                                    (0, ($parcel$interopDefault($c5L0i$humannumber)))(user.followerCount),
                                                    " followers"
                                                ]
                                            }),
                                            user?.twitterVerified && user?.twitterVerified !== 'none' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                        children: "twitter verified"
                                                    }),
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($2869377cb1e5210a$exports))),
                                                        style: {
                                                            height: 16,
                                                            width: 16,
                                                            paddingLeft: 3,
                                                            border: 'none'
                                                        }
                                                    })
                                                ]
                                            }),
                                            user?.verifiedKYC && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 300,
                                                    color: 'gray'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                                        children: "verified by passport"
                                                    }),
                                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($80078e45b13c3759$exports))),
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
                            Number.isInteger(user?.followerCount) && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("a", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    window.mixpanel.track('X Profile Click', {
                                        url: `https://twitter.com/${user?.username}`
                                    });
                                },
                                href: `https://twitter.com/${user?.username}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialX))), {})
                            })
                        ]
                    }, user._id);
                })
            })
        ]
    });
});








var $31c024bdab3f9b58$exports = {};

$parcel$export($31c024bdab3f9b58$exports, "dropdownContainer", () => $31c024bdab3f9b58$export$a3681dba3470c8c4, (v) => $31c024bdab3f9b58$export$a3681dba3470c8c4 = v);
$parcel$export($31c024bdab3f9b58$exports, "dropdownItemsContainer", () => $31c024bdab3f9b58$export$960d6a7eb8ce632b, (v) => $31c024bdab3f9b58$export$960d6a7eb8ce632b = v);
$parcel$export($31c024bdab3f9b58$exports, "dropdownValue", () => $31c024bdab3f9b58$export$2ff2bc1709095d00, (v) => $31c024bdab3f9b58$export$2ff2bc1709095d00 = v);
$parcel$export($31c024bdab3f9b58$exports, "dropdownWithLabel", () => $31c024bdab3f9b58$export$4c1173217024b6d6, (v) => $31c024bdab3f9b58$export$4c1173217024b6d6 = v);
$parcel$export($31c024bdab3f9b58$exports, "search", () => $31c024bdab3f9b58$export$d76128d007d19019, (v) => $31c024bdab3f9b58$export$d76128d007d19019 = v);
$parcel$export($31c024bdab3f9b58$exports, "text", () => $31c024bdab3f9b58$export$6f093cfa640b7166, (v) => $31c024bdab3f9b58$export$6f093cfa640b7166 = v);
var $31c024bdab3f9b58$export$a3681dba3470c8c4;
var $31c024bdab3f9b58$export$960d6a7eb8ce632b;
var $31c024bdab3f9b58$export$2ff2bc1709095d00;
var $31c024bdab3f9b58$export$4c1173217024b6d6;
var $31c024bdab3f9b58$export$d76128d007d19019;
var $31c024bdab3f9b58$export$6f093cfa640b7166;
$31c024bdab3f9b58$export$a3681dba3470c8c4 = `ue_oWq_dropdownContainer`;
$31c024bdab3f9b58$export$960d6a7eb8ce632b = `ue_oWq_dropdownItemsContainer`;
$31c024bdab3f9b58$export$2ff2bc1709095d00 = `ue_oWq_dropdownValue`;
$31c024bdab3f9b58$export$4c1173217024b6d6 = `ue_oWq_dropdownWithLabel`;
$31c024bdab3f9b58$export$d76128d007d19019 = `ue_oWq_search`;
$31c024bdab3f9b58$export$6f093cfa640b7166 = `ue_oWq_text`;


const $b355bd374f45d8d9$export$f8fcd3a81add9e17 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ sort: sort = 'Most Answered', duration: duration = 'Week', setSort: setSort, setDuration: setDuration, className: className, style: style }, ref3)=>{
    const [showSortDropdown, setShowSortDropdown] = (0, $c5L0i$react.useState)(false);
    const [showDurationDropdown, setShowDurationDropdown] = (0, $c5L0i$react.useState)(false);
    const ref = (0, $c5L0i$reactdetectclickoutside.useDetectClickOutside)({
        onTriggered: ()=>setShowSortDropdown(false)
    });
    const ref2 = (0, $c5L0i$reactdetectclickoutside.useDetectClickOutside)({
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
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        ref: ref3,
        style: style,
        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).text, className),
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownWithLabel,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $57011da2278f77c7$export$2e2bcd8739ae039), {
                        style: {
                            fontWeight: 300,
                            color: '#3b3b3b'
                        },
                        children: "Showing"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownContainer,
                        ref: ref,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownValue,
                                onClick: ()=>setShowSortDropdown(true),
                                children: sort
                            }),
                            showSortDropdown && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItemsContainer,
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Answered'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Most Answered"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Latest'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Latest"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Controversial'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Most Controversial"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Unanimous'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Most Unanimous"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setSortAndClose('Most Followed Authors'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Most Followed Authors"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialExpandMore))), {
                                onClick: ()=>setShowSortDropdown(true)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownWithLabel,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $57011da2278f77c7$export$2e2bcd8739ae039), {
                        style: {
                            fontWeight: 300,
                            color: '#3b3b3b'
                        },
                        children: [
                            "Questions ",
                            duration === 'All Time' ? 'of' : 'for last'
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownContainer,
                        ref: ref2,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownValue,
                                onClick: ()=>setShowDurationDropdown(true),
                                children: duration
                            }),
                            showDurationDropdown && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItemsContainer,
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Day'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Day"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Week'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Week"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Month'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Month"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('Year'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "Year"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                        className: (0, (/*@__PURE__*/$parcel$interopDefault($31c024bdab3f9b58$exports))).dropdownItem,
                                        onClick: ()=>setDurationAndClose('All Time'),
                                        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            children: "All time"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialExpandMore))), {
                                onClick: ()=>setShowDurationDropdown(true)
                            })
                        ]
                    })
                ]
            })
        ]
    });
});














var $c9a1b197475086e8$exports = {};

$parcel$export($c9a1b197475086e8$exports, "arrowDown", () => $c9a1b197475086e8$export$f61feb65ec56823b, (v) => $c9a1b197475086e8$export$f61feb65ec56823b = v);
$parcel$export($c9a1b197475086e8$exports, "bars", () => $c9a1b197475086e8$export$60912654947077e3, (v) => $c9a1b197475086e8$export$60912654947077e3 = v);
$parcel$export($c9a1b197475086e8$exports, "barsMinWidth", () => $c9a1b197475086e8$export$2e07f93cbaeb0394, (v) => $c9a1b197475086e8$export$2e07f93cbaeb0394 = v);
$parcel$export($c9a1b197475086e8$exports, "card", () => $c9a1b197475086e8$export$aa3e815946b80764, (v) => $c9a1b197475086e8$export$aa3e815946b80764 = v);
$parcel$export($c9a1b197475086e8$exports, "close", () => $c9a1b197475086e8$export$8360e631d277ea4d, (v) => $c9a1b197475086e8$export$8360e631d277ea4d = v);
$parcel$export($c9a1b197475086e8$exports, "hint", () => $c9a1b197475086e8$export$464c821cd4347539, (v) => $c9a1b197475086e8$export$464c821cd4347539 = v);
$parcel$export($c9a1b197475086e8$exports, "img", () => $c9a1b197475086e8$export$463b44d9bf3628be, (v) => $c9a1b197475086e8$export$463b44d9bf3628be = v);
$parcel$export($c9a1b197475086e8$exports, "imgWithArrow", () => $c9a1b197475086e8$export$e4e79e5008270fc7, (v) => $c9a1b197475086e8$export$e4e79e5008270fc7 = v);
$parcel$export($c9a1b197475086e8$exports, "questionText", () => $c9a1b197475086e8$export$500776a67ad9cd26, (v) => $c9a1b197475086e8$export$500776a67ad9cd26 = v);
$parcel$export($c9a1b197475086e8$exports, "respondButton", () => $c9a1b197475086e8$export$6ea0e660ad045afa, (v) => $c9a1b197475086e8$export$6ea0e660ad045afa = v);
$parcel$export($c9a1b197475086e8$exports, "stats", () => $c9a1b197475086e8$export$7804429c45dff272, (v) => $c9a1b197475086e8$export$7804429c45dff272 = v);
$parcel$export($c9a1b197475086e8$exports, "text", () => $c9a1b197475086e8$export$6f093cfa640b7166, (v) => $c9a1b197475086e8$export$6f093cfa640b7166 = v);
$parcel$export($c9a1b197475086e8$exports, "textContainer", () => $c9a1b197475086e8$export$2cedfd664bb3bd01, (v) => $c9a1b197475086e8$export$2cedfd664bb3bd01 = v);
$parcel$export($c9a1b197475086e8$exports, "username", () => $c9a1b197475086e8$export$5e1be761f603d585, (v) => $c9a1b197475086e8$export$5e1be761f603d585 = v);
$parcel$export($c9a1b197475086e8$exports, "usernameActual", () => $c9a1b197475086e8$export$9a369e4b55725081, (v) => $c9a1b197475086e8$export$9a369e4b55725081 = v);
var $c9a1b197475086e8$export$f61feb65ec56823b;
var $c9a1b197475086e8$export$60912654947077e3;
var $c9a1b197475086e8$export$2e07f93cbaeb0394;
var $c9a1b197475086e8$export$aa3e815946b80764;
var $c9a1b197475086e8$export$8360e631d277ea4d;
var $c9a1b197475086e8$export$464c821cd4347539;
var $c9a1b197475086e8$export$463b44d9bf3628be;
var $c9a1b197475086e8$export$e4e79e5008270fc7;
var $c9a1b197475086e8$export$500776a67ad9cd26;
var $c9a1b197475086e8$export$6ea0e660ad045afa;
var $c9a1b197475086e8$export$7804429c45dff272;
var $c9a1b197475086e8$export$6f093cfa640b7166;
var $c9a1b197475086e8$export$2cedfd664bb3bd01;
var $c9a1b197475086e8$export$5e1be761f603d585;
var $c9a1b197475086e8$export$9a369e4b55725081;
$c9a1b197475086e8$export$f61feb65ec56823b = `WWPmHq_arrowDown`;
$c9a1b197475086e8$export$60912654947077e3 = `WWPmHq_bars`;
$c9a1b197475086e8$export$2e07f93cbaeb0394 = `WWPmHq_barsMinWidth`;
$c9a1b197475086e8$export$aa3e815946b80764 = `WWPmHq_card`;
$c9a1b197475086e8$export$8360e631d277ea4d = `WWPmHq_close`;
$c9a1b197475086e8$export$464c821cd4347539 = `WWPmHq_hint`;
$c9a1b197475086e8$export$463b44d9bf3628be = `WWPmHq_img`;
$c9a1b197475086e8$export$e4e79e5008270fc7 = `WWPmHq_imgWithArrow`;
$c9a1b197475086e8$export$500776a67ad9cd26 = `WWPmHq_questionText`;
$c9a1b197475086e8$export$6ea0e660ad045afa = `WWPmHq_respondButton`;
$c9a1b197475086e8$export$7804429c45dff272 = `WWPmHq_stats`;
$c9a1b197475086e8$export$6f093cfa640b7166 = `WWPmHq_text`;
$c9a1b197475086e8$export$2cedfd664bb3bd01 = `WWPmHq_textContainer`;
$c9a1b197475086e8$export$5e1be761f603d585 = `WWPmHq_username`;
$c9a1b197475086e8$export$9a369e4b55725081 = `WWPmHq_usernameActual`;


const $aa945d4ce4ddbaaa$var$calcPercent = (x, sum)=>Math.round(x / sum * 100);
const $aa945d4ce4ddbaaa$export$38435c7d2fecd2f = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ yourOwnQuestion: yourOwnQuestion, onUserClick: onUserClick, userPictureUrl: userPictureUrl, shortId: shortId, username: username, name: name, answersCount: answersCount, me: { answer: answer } = {}, respond: respond, createNewGroup: createNewGroup, close: close, _id: _id, handleTwitterLogin: handleTwitterLogin }, ref)=>{
    const [state, setState] = (0, $c5L0i$react.useState)(null);
    const totalAnswerCount = answersCount.yes + answersCount.no;
    const userReplyCount = state ? answersCount[state] : totalAnswerCount;
    const yesPercentage = $aa945d4ce4ddbaaa$var$calcPercent(answersCount.yes, totalAnswerCount);
    const noPercentage = $aa945d4ce4ddbaaa$var$calcPercent(answersCount.no, totalAnswerCount);
    const { setIsLoginModalOpen: setIsLoginModalOpen, setAnswer: setAnswer } = (0, $c5L0i$react.useContext)((0, $0c70feff32ca6a2b$export$32c650b79baf5fee));
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
    (0, $c5L0i$react.useEffect)(()=>{
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
        window.addEventListener('resize', (0, ($parcel$interopDefault($c5L0i$lodash))).debounce(()=>{
            document.querySelector('#question-text-size').style['font-size'] = '200px';
            resizeObserver.observe(document.querySelector('#question-text'));
        }, 1000));
        return ()=>resizeObserver.disconnect();
    }, []);
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("article", {
        id: "question-card",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).card,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).close,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialClose))), {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).back,
                    onClick: close
                })
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                id: "question-text",
                style: {
                    padding: '0 26px'
                },
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c52b3c36a0937910$export$2e2bcd8739ae039), {
                        h1: true,
                        style: {
                            fontSize: 200,
                            fontWeight: 200
                        },
                        id: "question-text-size",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).username,
                        children: [
                            ' ',
                            "by ",
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).usernameActual,
                                onClick: onUserClick,
                                children: username
                            }),
                            ",",
                            ' ',
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                                style: {
                                    display: 'inline',
                                    textAlign: 'center'
                                },
                                secondary: true,
                                children: [
                                    "answered by ",
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $7eb06ad4c8df7dbd$export$2e2bcd8739ae039), {
                                        x: userReplyCount
                                    }),
                                    " people"
                                ]
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialShare))), {
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
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                style: {
                    position: 'absolute',
                    bottom: totalAnswerCount === 0 ? 16 : 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: [
                    !yourOwnQuestion && !answer && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $aea682282f3bff22$export$2e2bcd8739ae039), {
                        style: {
                            maxWidth: 400,
                            width: '90%'
                        },
                        respond: respond || redirectToLogin
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).stats,
                        children: userReplyCount !== 0 && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).textContainer,
                                    children: [
                                        yesPercentage !== 0 && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).text,
                                            style: {
                                                width: `${yesPercentage}%`,
                                                position: 'relative',
                                                display: 'flex',
                                                gap: 12,
                                                bottom: 0,
                                                minWidth: 102
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
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
                                                answer?.toLowerCase() === 'yes' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).imgWithArrow,
                                                    children: [
                                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).img,
                                                            src: userPictureUrl,
                                                            alt: "profile picture"
                                                        }),
                                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).arrowDown
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        noPercentage !== 0 && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $48846b284e41a4a2$export$2e2bcd8739ae039), {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).text,
                                            style: {
                                                width: `${noPercentage}%`,
                                                position: 'relative',
                                                display: 'flex',
                                                gap: 12,
                                                bottom: 0,
                                                minWidth: 102
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
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
                                                answer?.toLowerCase() === 'no' && /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).imgWithArrow,
                                                    children: [
                                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).img,
                                                            src: userPictureUrl,
                                                            alt: "profile picture"
                                                        }),
                                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).arrowDown
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $93a91f764584dcb2$export$2e2bcd8739ae039), {
                                    className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).bars, {
                                        [(0, (/*@__PURE__*/$parcel$interopDefault($c9a1b197475086e8$exports))).barsMinWidth]: yesPercentage !== 0 && noPercentage !== 0
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





var $6c6fd8ca00de879c$exports = {};

$parcel$export($6c6fd8ca00de879c$exports, "btn", () => $6c6fd8ca00de879c$export$534219b709288da9, (v) => $6c6fd8ca00de879c$export$534219b709288da9 = v);
$parcel$export($6c6fd8ca00de879c$exports, "changeGroupBtn", () => $6c6fd8ca00de879c$export$e05a52e99661808, (v) => $6c6fd8ca00de879c$export$e05a52e99661808 = v);
$parcel$export($6c6fd8ca00de879c$exports, "chat", () => $6c6fd8ca00de879c$export$530dccc8e24f4e99, (v) => $6c6fd8ca00de879c$export$530dccc8e24f4e99 = v);
$parcel$export($6c6fd8ca00de879c$exports, "currentGroup", () => $6c6fd8ca00de879c$export$d066cbb5a8cab704, (v) => $6c6fd8ca00de879c$export$d066cbb5a8cab704 = v);
$parcel$export($6c6fd8ca00de879c$exports, "input", () => $6c6fd8ca00de879c$export$b7e3ae3d7c15e42e, (v) => $6c6fd8ca00de879c$export$b7e3ae3d7c15e42e = v);
$parcel$export($6c6fd8ca00de879c$exports, "inputGroup", () => $6c6fd8ca00de879c$export$995e14ef61d916e6, (v) => $6c6fd8ca00de879c$export$995e14ef61d916e6 = v);
$parcel$export($6c6fd8ca00de879c$exports, "message", () => $6c6fd8ca00de879c$export$a8ecead220dd38a6, (v) => $6c6fd8ca00de879c$export$a8ecead220dd38a6 = v);
$parcel$export($6c6fd8ca00de879c$exports, "messageBoard", () => $6c6fd8ca00de879c$export$af8c1666bc2bbdc3, (v) => $6c6fd8ca00de879c$export$af8c1666bc2bbdc3 = v);
$parcel$export($6c6fd8ca00de879c$exports, "mine", () => $6c6fd8ca00de879c$export$25c810edd2c6953a, (v) => $6c6fd8ca00de879c$export$25c810edd2c6953a = v);
$parcel$export($6c6fd8ca00de879c$exports, "notMine", () => $6c6fd8ca00de879c$export$16cf7ecddabb39f4, (v) => $6c6fd8ca00de879c$export$16cf7ecddabb39f4 = v);
$parcel$export($6c6fd8ca00de879c$exports, "picture", () => $6c6fd8ca00de879c$export$1188214e9d38144e, (v) => $6c6fd8ca00de879c$export$1188214e9d38144e = v);
$parcel$export($6c6fd8ca00de879c$exports, "top", () => $6c6fd8ca00de879c$export$1e95b668f3b82d, (v) => $6c6fd8ca00de879c$export$1e95b668f3b82d = v);
var $6c6fd8ca00de879c$export$534219b709288da9;
var $6c6fd8ca00de879c$export$e05a52e99661808;
var $6c6fd8ca00de879c$export$530dccc8e24f4e99;
var $6c6fd8ca00de879c$export$d066cbb5a8cab704;
var $6c6fd8ca00de879c$export$b7e3ae3d7c15e42e;
var $6c6fd8ca00de879c$export$995e14ef61d916e6;
var $6c6fd8ca00de879c$export$a8ecead220dd38a6;
var $6c6fd8ca00de879c$export$af8c1666bc2bbdc3;
var $6c6fd8ca00de879c$export$25c810edd2c6953a;
var $6c6fd8ca00de879c$export$16cf7ecddabb39f4;
var $6c6fd8ca00de879c$export$1188214e9d38144e;
var $6c6fd8ca00de879c$export$1e95b668f3b82d;
$6c6fd8ca00de879c$export$534219b709288da9 = `SmrJ8W_btn`;
$6c6fd8ca00de879c$export$e05a52e99661808 = `SmrJ8W_changeGroupBtn`;
$6c6fd8ca00de879c$export$530dccc8e24f4e99 = `SmrJ8W_chat`;
$6c6fd8ca00de879c$export$d066cbb5a8cab704 = `SmrJ8W_currentGroup`;
$6c6fd8ca00de879c$export$b7e3ae3d7c15e42e = `SmrJ8W_input`;
$6c6fd8ca00de879c$export$995e14ef61d916e6 = `SmrJ8W_inputGroup`;
$6c6fd8ca00de879c$export$a8ecead220dd38a6 = `SmrJ8W_message`;
$6c6fd8ca00de879c$export$af8c1666bc2bbdc3 = `SmrJ8W_messageBoard`;
$6c6fd8ca00de879c$export$25c810edd2c6953a = `SmrJ8W_mine`;
$6c6fd8ca00de879c$export$16cf7ecddabb39f4 = `SmrJ8W_notMine`;
$6c6fd8ca00de879c$export$1188214e9d38144e = `SmrJ8W_picture`;
$6c6fd8ca00de879c$export$1e95b668f3b82d = `SmrJ8W_top`;


const $e3031400c56218a8$var$defaultGroup = {
    name: 'You',
    peopleCount: 10,
    id: 1
};
const $e3031400c56218a8$export$125e71c614a0b114 = ({ messages: messages, sendMessage: sendMessage, onUserClick: onUserClick, currentGroup: currentGroup = $e3031400c56218a8$var$defaultGroup, changeGroup: changeGroup })=>{
    const [value, setValue] = (0, $c5L0i$react.useState)('');
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).chat,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).top,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).currentGroup,
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("b", {
                                children: currentGroup.name
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                        children: "people count: "
                                    }),
                                    currentGroup.peopleCount
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).changeGroupBtn,
                        onClick: changeGroup,
                        children: "change group"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).messageBoard,
                children: messages.map((msg, index)=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                        className: (0, ($parcel$interopDefault($c5L0i$classnames)))((0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).message, {
                            [(0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).mine]: msg.mine,
                            [(0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).notMine]: !msg.mine
                        }),
                        children: [
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                                onClick: ()=>onUserClick(msg.username),
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).picture,
                                src: msg.pictureUrl
                            }),
                            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                children: msg.text
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).inputGroup,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("textarea", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).input,
                        value: value,
                        onChange: ({ target: { value: value } })=>setValue(value)
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("button", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($6c6fd8ca00de879c$exports))).btn,
                        onClick: sendMessage,
                        children: "Send"
                    })
                ]
            })
        ]
    });
};






var $57c8671c6c0c78f4$exports = {};
$57c8671c6c0c78f4$exports = "<svg width=\"252\" height=\"252\" viewBox=\"0 0 252 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<mask id=\"mask0_4864_1939\" style=\"mask-type: luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"252\" height=\"252\">\r\n<path d=\"M125.999 251.394C195.253 251.394 251.393 195.253 251.393 126C251.393 56.7468 195.253 0.606079 125.999 0.606079C56.7462 0.606079 0.605469 56.7468 0.605469 126C0.605469 195.253 56.7462 251.394 125.999 251.394Z\" fill=\"white\"></path>\r\n</mask>\r\n<g mask=\"url('#mask0_4864_1939')\">\r\n<path d=\"M263.267 -11.2672H-11.2676V263.267H263.267V-11.2672Z\" fill=\"url('#paint0_linear_4864_1939')\"></path>\r\n</g>\r\n<path d=\"M162.264 153.059L197.741 132.574C199.62 131.489 200.782 129.471 200.782 127.301V86.3354C200.782 84.1696 199.615 82.1472 197.741 81.0618L162.264 60.5767C160.385 59.4912 158.056 59.4964 156.177 60.5767L120.7 81.0618C118.821 82.1472 117.659 84.1696 117.659 86.3354V159.546L92.781 173.908L67.9029 159.546V130.818L92.781 116.456L109.191 125.928V106.657L95.8222 98.9408C94.9006 98.4084 93.8459 98.1268 92.7758 98.1268C91.7058 98.1268 90.651 98.4084 89.7346 98.9408L54.2581 119.426C52.379 120.511 51.2168 122.529 51.2168 124.7V165.665C51.2168 167.83 52.3842 169.853 54.2581 170.938L89.7346 191.423C91.6085 192.504 93.9432 192.504 95.8222 191.423L131.299 170.943C133.178 169.858 134.34 167.836 134.34 165.67V92.4589L134.791 92.2029L159.218 78.0973L184.096 92.4589V121.187L159.218 135.549L142.834 126.087V145.359L156.177 153.064C158.056 154.145 160.385 154.145 162.264 153.064V153.059Z\" fill=\"white\"></path>\r\n<defs>\r\n<linearGradient id=\"paint0_linear_4864_1939\" x1=\"-61.4385\" y1=\"11.2966\" x2=\"221.974\" y2=\"184.732\" gradientUnits=\"userSpaceOnUse\">\r\n<stop stop-color=\"#A229C5\"></stop>\r\n<stop offset=\"1\" stop-color=\"#7B3FE4\"></stop>\r\n</linearGradient>\r\n</defs>\r\n</svg>\r\n";


var $af1ad4f19d8ab63f$exports = {};

$parcel$export($af1ad4f19d8ab63f$exports, "additional-text", () => $af1ad4f19d8ab63f$export$202e93cb7fe09fc8, (v) => $af1ad4f19d8ab63f$export$202e93cb7fe09fc8 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "coin", () => $af1ad4f19d8ab63f$export$3c9d1e4131afeeb8, (v) => $af1ad4f19d8ab63f$export$3c9d1e4131afeeb8 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "coin--animated", () => $af1ad4f19d8ab63f$export$9fb4f45ed9e347e0, (v) => $af1ad4f19d8ab63f$export$9fb4f45ed9e347e0 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "coin-x-axis", () => $af1ad4f19d8ab63f$export$a729607373715201, (v) => $af1ad4f19d8ab63f$export$a729607373715201 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "coin-y-axis-and-flip", () => $af1ad4f19d8ab63f$export$4079574a46612420, (v) => $af1ad4f19d8ab63f$export$4079574a46612420 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "icon", () => $af1ad4f19d8ab63f$export$1ca1ec8b29a4ce27, (v) => $af1ad4f19d8ab63f$export$1ca1ec8b29a4ce27 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "icons", () => $af1ad4f19d8ab63f$export$df03f54e09e486fa, (v) => $af1ad4f19d8ab63f$export$df03f54e09e486fa = v);
$parcel$export($af1ad4f19d8ab63f$exports, "landing", () => $af1ad4f19d8ab63f$export$a9ae88069d8ac14e, (v) => $af1ad4f19d8ab63f$export$a9ae88069d8ac14e = v);
$parcel$export($af1ad4f19d8ab63f$exports, "landing-button", () => $af1ad4f19d8ab63f$export$f282e5191b337f50, (v) => $af1ad4f19d8ab63f$export$f282e5191b337f50 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "made-by", () => $af1ad4f19d8ab63f$export$101a475b15c86041, (v) => $af1ad4f19d8ab63f$export$101a475b15c86041 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "mobile-second-text", () => $af1ad4f19d8ab63f$export$9b4a162e4d9f672, (v) => $af1ad4f19d8ab63f$export$9b4a162e4d9f672 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "name", () => $af1ad4f19d8ab63f$export$a8ff84c12d48cfa6, (v) => $af1ad4f19d8ab63f$export$a8ff84c12d48cfa6 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "open-app-button", () => $af1ad4f19d8ab63f$export$ae608c4430a9e9fc, (v) => $af1ad4f19d8ab63f$export$ae608c4430a9e9fc = v);
$parcel$export($af1ad4f19d8ab63f$exports, "privacy", () => $af1ad4f19d8ab63f$export$116a08ee153e3bde, (v) => $af1ad4f19d8ab63f$export$116a08ee153e3bde = v);
$parcel$export($af1ad4f19d8ab63f$exports, "scroll", () => $af1ad4f19d8ab63f$export$209876d7b1ac8f3, (v) => $af1ad4f19d8ab63f$export$209876d7b1ac8f3 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "scrollIcon", () => $af1ad4f19d8ab63f$export$efb197c1da01f76f, (v) => $af1ad4f19d8ab63f$export$efb197c1da01f76f = v);
$parcel$export($af1ad4f19d8ab63f$exports, "scrollText", () => $af1ad4f19d8ab63f$export$b21f6e6a6b9fbbc5, (v) => $af1ad4f19d8ab63f$export$b21f6e6a6b9fbbc5 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "scrollWheel", () => $af1ad4f19d8ab63f$export$594daf8f7b4e7e32, (v) => $af1ad4f19d8ab63f$export$594daf8f7b4e7e32 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "search-modal", () => $af1ad4f19d8ab63f$export$2fd0fffb18ebb0c0, (v) => $af1ad4f19d8ab63f$export$2fd0fffb18ebb0c0 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "second-text-container", () => $af1ad4f19d8ab63f$export$891c99f874761757, (v) => $af1ad4f19d8ab63f$export$891c99f874761757 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "slides", () => $af1ad4f19d8ab63f$export$59de61ccd1a8a2d9, (v) => $af1ad4f19d8ab63f$export$59de61ccd1a8a2d9 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "smaller", () => $af1ad4f19d8ab63f$export$3f732695c1493aec, (v) => $af1ad4f19d8ab63f$export$3f732695c1493aec = v);
$parcel$export($af1ad4f19d8ab63f$exports, "subtitle", () => $af1ad4f19d8ab63f$export$c96745152eb2740f, (v) => $af1ad4f19d8ab63f$export$c96745152eb2740f = v);
$parcel$export($af1ad4f19d8ab63f$exports, "svgWrapper", () => $af1ad4f19d8ab63f$export$e5459a6f92d1eda8, (v) => $af1ad4f19d8ab63f$export$e5459a6f92d1eda8 = v);
$parcel$export($af1ad4f19d8ab63f$exports, "text", () => $af1ad4f19d8ab63f$export$6f093cfa640b7166, (v) => $af1ad4f19d8ab63f$export$6f093cfa640b7166 = v);
var $af1ad4f19d8ab63f$export$202e93cb7fe09fc8;
var $af1ad4f19d8ab63f$export$3c9d1e4131afeeb8;
var $af1ad4f19d8ab63f$export$9fb4f45ed9e347e0;
var $af1ad4f19d8ab63f$export$a729607373715201;
var $af1ad4f19d8ab63f$export$4079574a46612420;
var $af1ad4f19d8ab63f$export$1ca1ec8b29a4ce27;
var $af1ad4f19d8ab63f$export$df03f54e09e486fa;
var $af1ad4f19d8ab63f$export$a9ae88069d8ac14e;
var $af1ad4f19d8ab63f$export$f282e5191b337f50;
var $af1ad4f19d8ab63f$export$101a475b15c86041;
var $af1ad4f19d8ab63f$export$9b4a162e4d9f672;
var $af1ad4f19d8ab63f$export$a8ff84c12d48cfa6;
var $af1ad4f19d8ab63f$export$ae608c4430a9e9fc;
var $af1ad4f19d8ab63f$export$116a08ee153e3bde;
var $af1ad4f19d8ab63f$export$209876d7b1ac8f3;
var $af1ad4f19d8ab63f$export$efb197c1da01f76f;
var $af1ad4f19d8ab63f$export$b21f6e6a6b9fbbc5;
var $af1ad4f19d8ab63f$export$594daf8f7b4e7e32;
var $af1ad4f19d8ab63f$export$2fd0fffb18ebb0c0;
var $af1ad4f19d8ab63f$export$891c99f874761757;
var $af1ad4f19d8ab63f$export$59de61ccd1a8a2d9;
var $af1ad4f19d8ab63f$export$3f732695c1493aec;
var $af1ad4f19d8ab63f$export$c96745152eb2740f;
var $af1ad4f19d8ab63f$export$e5459a6f92d1eda8;
var $af1ad4f19d8ab63f$export$6f093cfa640b7166;
$af1ad4f19d8ab63f$export$202e93cb7fe09fc8 = `aq6KZW_additional-text`;
$af1ad4f19d8ab63f$export$3c9d1e4131afeeb8 = `aq6KZW_coin`;
$af1ad4f19d8ab63f$export$9fb4f45ed9e347e0 = `aq6KZW_coin--animated`;
$af1ad4f19d8ab63f$export$a729607373715201 = `aq6KZW_coin-x-axis`;
$af1ad4f19d8ab63f$export$a729607373715201;
$af1ad4f19d8ab63f$export$4079574a46612420 = `aq6KZW_coin-y-axis-and-flip`;
$af1ad4f19d8ab63f$export$4079574a46612420;
$af1ad4f19d8ab63f$export$1ca1ec8b29a4ce27 = `aq6KZW_icon`;
$af1ad4f19d8ab63f$export$df03f54e09e486fa = `aq6KZW_icons`;
$af1ad4f19d8ab63f$export$a9ae88069d8ac14e = `aq6KZW_landing`;
$af1ad4f19d8ab63f$export$f282e5191b337f50 = `aq6KZW_landing-button`;
$af1ad4f19d8ab63f$export$101a475b15c86041 = `aq6KZW_made-by`;
$af1ad4f19d8ab63f$export$9b4a162e4d9f672 = `aq6KZW_mobile-second-text`;
$af1ad4f19d8ab63f$export$a8ff84c12d48cfa6 = `aq6KZW_name`;
$af1ad4f19d8ab63f$export$ae608c4430a9e9fc = `aq6KZW_open-app-button`;
$af1ad4f19d8ab63f$export$116a08ee153e3bde = `aq6KZW_privacy`;
$af1ad4f19d8ab63f$export$209876d7b1ac8f3 = `aq6KZW_scroll`;
$af1ad4f19d8ab63f$export$efb197c1da01f76f = `aq6KZW_scrollIcon`;
$af1ad4f19d8ab63f$export$b21f6e6a6b9fbbc5 = `aq6KZW_scrollText`;
$af1ad4f19d8ab63f$export$b21f6e6a6b9fbbc5;
$af1ad4f19d8ab63f$export$594daf8f7b4e7e32 = `aq6KZW_scrollWheel`;
$af1ad4f19d8ab63f$export$594daf8f7b4e7e32;
$af1ad4f19d8ab63f$export$2fd0fffb18ebb0c0 = `aq6KZW_search-modal`;
$af1ad4f19d8ab63f$export$891c99f874761757 = `aq6KZW_second-text-container`;
$af1ad4f19d8ab63f$export$59de61ccd1a8a2d9 = `aq6KZW_slides`;
$af1ad4f19d8ab63f$export$3f732695c1493aec = `aq6KZW_smaller`;
$af1ad4f19d8ab63f$export$c96745152eb2740f = `aq6KZW_subtitle`;
$af1ad4f19d8ab63f$export$e5459a6f92d1eda8 = `aq6KZW_svgWrapper`;
$af1ad4f19d8ab63f$export$6f093cfa640b7166 = `aq6KZW_text`;



console.log('url: ', (0, (/*@__PURE__*/$parcel$interopDefault($57c8671c6c0c78f4$exports))));
const $4f095db3a6856690$var$FirstText = ()=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).text,
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h1", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).name,
                children: "Non-anonymous online voting"
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("h2", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).subtitle,
                children: "on social and political issues."
            })
        ]
    });
const $4f095db3a6856690$var$SecondText = ()=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports)))['second-text-container'],
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                        children: "Find your similarities and your differences."
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).smaller,
                        children: "After you cast your votes you can compare your answers with anyone else on the site."
                    })
                ]
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports)))['mobile-second-text'],
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                        children: "Find your similarities"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                        children: "and your differences."
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).smaller,
                        children: "After you cast your votes you can compare your answers with anyone else on the site."
                    })
                ]
            })
        ]
    });
const $4f095db3a6856690$var$ThirdText = ()=>/*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                    children: "Get crypto for every question asked, every answer to that question and every question you answer"
                }),
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("p", {
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).smaller,
                    children: "You will get reward relative to your follower count on X(if you sign in with it)"
                }),
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("small", {
                    children: "(you have 1000 followers, you'll get 1000 for every question and answer)"
                }),
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                    children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("small", {
                        children: "It's a custom token. Its value is derived from the fact I will only sell ads(and paid polls) on this app using this token"
                    })
                }),
                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($57c8671c6c0c78f4$exports))),
                            style: {
                                height: 24,
                                paddingRight: 5
                            }
                        }),
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("a", {
                            style: {
                                fontSize: 14,
                                letterSpacing: '0px'
                            },
                            href: "https://polygonscan.com/token/0x080376D131E2036feF1D321490cF178A3bEEA805",
                            children: "token on polyscan"
                        })
                    ]
                })
            ]
        })
    });
const $4f095db3a6856690$var$textByPageNumber = {
    0: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)($4f095db3a6856690$var$FirstText, {})
};
const $4f095db3a6856690$export$12449a31c6671d53 = /*#__PURE__*/ (0, $c5L0i$react.forwardRef)(({ jwt: jwt }, ref)=>{
    (0, $c5L0i$react.useEffect)(()=>{
        document.querySelector('body > div > div').style['max-height'] = 'unset';
        document.querySelector('body > div > div').style['min-height'] = 'unset';
        return ()=>{
            document.querySelector('body > div > div').style['max-height'] = '100svh';
            document.querySelector('body > div > div').style['min-height'] = '100svh';
        };
    }, []);
    return /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reacthelmet.Helmet), {
                encodeSpecialCharacters: false,
                children: [
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("title", {
                        children: "poll.cc"
                    }),
                    /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("meta", {
                        name: "description",
                        content: "Public voting on social or political issues."
                    })
                ]
            }),
            /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).slides,
                children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                    ref: ref,
                    className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).landing,
                    children: [
                        $4f095db3a6856690$var$textByPageNumber[0],
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)((0, $c5L0i$reactrouterdom.Link), {
                            replace: true,
                            to: jwt ? '/' : '/app',
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports)))['open-app-button'],
                            children: [
                                "Open App ",
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)((0, ($parcel$interopDefault($c5L0i$muiiconsmaterialArrowForwardIos))), {
                                    sx: {
                                        marginLeft: '15px',
                                        fontSize: 20
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                            className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).icons,
                            children: [
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports)))['made-by'],
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                            style: {
                                                fontSize: 15
                                            },
                                            children: "made by"
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("a", {
                                            href: "mailto:piliponful@gmail.com",
                                            children: "piliponful"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsxs)("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("div", {
                                            className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).svgWrapper,
                                            dangerouslySetInnerHTML: {
                                                __html: (0, (/*@__PURE__*/$parcel$interopDefault($57c8671c6c0c78f4$exports)))
                                            }
                                        }),
                                        /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("a", {
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
                                /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("span", {
                                    className: (0, (/*@__PURE__*/$parcel$interopDefault($af1ad4f19d8ab63f$exports))).privacy,
                                    children: /*#__PURE__*/ (0, $c5L0i$reactjsxruntime.jsx)("a", {
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



var $43d7963e56408b24$export$2e2bcd8739ae039 = {
    shallow: {
        Body: $0c70feff32ca6a2b$export$2e2bcd8739ae039,
        GroupsContainer: $cf7fa14b6ace065a$export$2e2bcd8739ae039,
        MainScreen: $1476c8c916741db2$export$2e2bcd8739ae039,
        Sidebar: $caa6e61676dd60dd$export$2e2bcd8739ae039,
        QuestionCardsRow: $f6827b11255bd55d$export$2e2bcd8739ae039,
        Landing: $4f095db3a6856690$export$12449a31c6671d53
    },
    leafs: {
        Circles: $16c888d17a78a645$export$2e2bcd8739ae039,
        GroupCard: $74980d71b8ef2933$export$2e2bcd8739ae039,
        QuestionCard: $fde06a1540536d1e$export$2e2bcd8739ae039,
        NewQuestion: $2d4c76ea0fc231a4$export$2e2bcd8739ae039,
        ActionsPanel: $b29d4b4923c0cd00$export$2e2bcd8739ae039,
        GroupContentScreen: $42498b7876d29f2b$export$2e2bcd8739ae039,
        UserHistoryTabs: $4c6bd8db1d735d14$export$522e89d0fa1200f4,
        UserQuestionsHistory: $4c6bd8db1d735d14$export$6241fe9ea73c6c74,
        Search: $95c6e69ef8ee0198$export$2e2bcd8739ae039,
        QuestionsSearch: $9330b1b20ef62cea$export$2e2bcd8739ae039,
        UsersSearch: $d99360e8c29d4994$export$2e2bcd8739ae039,
        SortQuestions: $b355bd374f45d8d9$export$f8fcd3a81add9e17,
        UserAnswerDifferences: $4c6bd8db1d735d14$export$a6816b34ad549b0,
        Question: $aa945d4ce4ddbaaa$export$38435c7d2fecd2f,
        ChatBlock: $e3031400c56218a8$export$125e71c614a0b114
    },
    context: {
        MainScreenSwipeContext: $0c70feff32ca6a2b$export$32c650b79baf5fee
    }
};


//# sourceMappingURL=main.js.map
