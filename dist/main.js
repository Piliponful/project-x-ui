require("./main.css");
var $klFNZ$reactjsxruntime = require("react/jsx-runtime");
var $klFNZ$react = require("react");
var $klFNZ$snapsvgcjs = require("snapsvg-cjs");
var $klFNZ$lodash = require("lodash");
var $klFNZ$classnames = require("classnames");
var $klFNZ$reactspinnersBeatLoader = require("react-spinners/BeatLoader");
var $klFNZ$fortawesomereactfontawesome = require("@fortawesome/react-fontawesome");
var $klFNZ$fortawesomefreesolidsvgicons = require("@fortawesome/free-solid-svg-icons");
var $klFNZ$reactswipeable = require("react-swipeable");
var $klFNZ$reactcustomscrollbars = require("react-custom-scrollbars");
var $klFNZ$reactmedia = require("react-media");
var $klFNZ$reactphonenumberinput = require("react-phone-number-input");
require("react-phone-number-input/style.css");

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

$parcel$export(module.exports, "default", () => $4fa0c73a46e81912$export$2e2bcd8739ae039);









var $5a3333a34cb1affd$exports = {};

$parcel$export($5a3333a34cb1affd$exports, "text", () => $5a3333a34cb1affd$export$6f093cfa640b7166, (v) => $5a3333a34cb1affd$export$6f093cfa640b7166 = v);
var $5a3333a34cb1affd$export$6f093cfa640b7166;
$5a3333a34cb1affd$export$6f093cfa640b7166 = "_text_3b2a0f";


var $6b1bd0c54623bfc1$export$2e2bcd8739ae039 = ({ children: children , className: className , style: style  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
        style: style,
        className: ($parcel$interopDefault($klFNZ$classnames))(className, (/*@__PURE__*/$parcel$interopDefault($5a3333a34cb1affd$exports)).text),
        children: children
    })
;


var $2ec1f5dd93f7e915$exports = {};

$parcel$export($2ec1f5dd93f7e915$exports, "hint", () => $2ec1f5dd93f7e915$export$464c821cd4347539, (v) => $2ec1f5dd93f7e915$export$464c821cd4347539 = v);
var $2ec1f5dd93f7e915$export$464c821cd4347539;
$2ec1f5dd93f7e915$export$464c821cd4347539 = "_hint_eb2471";


var $536534c05231b4ee$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups , selectedCircleParts: selectedCircleParts  })=>{
    const lengthToHint = {
        1: '(select another group to continue)',
        2: '(click on area to select what goes to new group)'
    };
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($2ec1f5dd93f7e915$exports)).hint,
        children: selectedCircleParts.length === 1 ? '(click on selected area again to deselect)' : lengthToHint[selectedGroups.length]
    }));
};


var $30e722a3c9f4a5a2$exports = {};

$parcel$export($30e722a3c9f4a5a2$exports, "circlesContainer", () => $30e722a3c9f4a5a2$export$293c75fa7ed5ee8d, (v) => $30e722a3c9f4a5a2$export$293c75fa7ed5ee8d = v);
$parcel$export($30e722a3c9f4a5a2$exports, "circles", () => $30e722a3c9f4a5a2$export$c958aa0cc90a067, (v) => $30e722a3c9f4a5a2$export$c958aa0cc90a067 = v);
var $30e722a3c9f4a5a2$export$293c75fa7ed5ee8d;
var $30e722a3c9f4a5a2$export$c958aa0cc90a067;
$30e722a3c9f4a5a2$export$293c75fa7ed5ee8d = "_circlesContainer_266008";
$30e722a3c9f4a5a2$export$c958aa0cc90a067 = "_circles_266008";




var $a5c5ed9352ae94d8$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("svg", {
        id: "circles",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24b42",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#4db3e6",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#d24b42",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                        d: "M190.6658,32.47128c-.37175.36271-.85272.83714-1.40785,1.39869-.66472.67242-1.82727,1.86578-3.19238,3.36852-2.10675,2.31915-3.71682,4.29731-4.56259,5.35769-1.7324,2.17192-3.19062,4.16961-4.38222,5.88845-1.09726,1.58273-1.98921,2.95895-2.65152,4.01055-1.21135,1.92334-2.20209,3.63014-2.97261,5.013-1.16558,2.09183-2.09546,3.92372-2.794,5.36058-.68783,1.415-1.25747,2.66535-1.70668,3.68542-1.16221,2.63925-2.03706,4.91519-2.64586,6.58951-1.15973,3.18944-2.00822,5.9948-2.61911,8.21607-.60385,2.1957-1.28251,4.937-1.89727,8.12168-.42264,2.18944-.95343,5.30529-1.35293,9.07485-.18527,1.74829-.41326,4.30673-.52893,7.41366-.06681,1.79461-.102,3.92909-.05217,6.3325.08822,4.25547.40905,7.72117.66085,9.95249.35223,3.12119.78294,5.71922,1.13109,7.59448.53709,2.893,1.12466,5.396,1.65081,7.41973.50183,1.93021,1.13117,4.12963,1.92232,6.5342.52483,1.59511,1.25249,3.68051,2.20737,6.08421.47668,1.19994,1.08528,2.66875,1.83017,4.32869.47792,1.065,1.07173,2.342,1.78247,3.77471.59508,1.19955,1.40385,2.77391,2.417,4.59173.53761.96459,1.2214,2.15676,2.04257,3.50853.54281.89359,1.235,2.004,2.0632,3.26424.87064,1.32484,1.95784,2.91612,3.25682,4.68408.69695.94858,1.57654,2.11363,2.62222,3.42517.68856.86362,1.58332,1.95908,2.65668,3.20525.62874.73,1.37628,1.57843,2.23135,2.51184.00007.00007,1.20453,1.31489,2.444,2.58275.21534.22029.43481.44229.43489.44236.30043.30393.54693.54982.70729.70914.20521.20389.43374.42935.68327.673",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#00aeef",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    })
                ]
            })
        ]
    })
;




var $9465b8194adbd11c$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("svg", {
        id: "circles-mirror",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#3eb5f1",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24a43",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#3eb5f1",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("path", {
                        d: "M190.6658,32.47128c-.37175.36271-.85272.83714-1.40785,1.39869-.66472.67242-1.82727,1.86578-3.19238,3.36852-2.10675,2.31915-3.71682,4.29731-4.56259,5.35769-1.7324,2.17192-3.19062,4.16961-4.38222,5.88845-1.09726,1.58273-1.98921,2.95895-2.65152,4.01055-1.21135,1.92334-2.20209,3.63014-2.97261,5.013-1.16558,2.09183-2.09546,3.92372-2.794,5.36058-.68783,1.415-1.25747,2.66535-1.70668,3.68542-1.16221,2.63925-2.03706,4.91519-2.64586,6.58951-1.15973,3.18944-2.00822,5.9948-2.61911,8.21607-.60385,2.1957-1.28251,4.937-1.89727,8.12168-.42264,2.18944-.95343,5.30529-1.35293,9.07485-.18527,1.74829-.41326,4.30673-.52893,7.41366-.06681,1.79461-.102,3.92909-.05217,6.3325.08822,4.25547.40905,7.72117.66085,9.95249.35223,3.12119.78294,5.71922,1.13109,7.59448.53709,2.893,1.12466,5.396,1.65081,7.41973.50183,1.93021,1.13117,4.12963,1.92232,6.5342.52483,1.59511,1.25249,3.68051,2.20737,6.08421.47668,1.19994,1.08528,2.66875,1.83017,4.32869.47792,1.065,1.07173,2.342,1.78247,3.77471.59508,1.19955,1.40385,2.77391,2.417,4.59173.53761.96459,1.2214,2.15676,2.04257,3.50853.54281.89359,1.235,2.004,2.0632,3.26424.87064,1.32484,1.95784,2.91612,3.25682,4.68408.69695.94858,1.57654,2.11363,2.62222,3.42517.68856.86362,1.58332,1.95908,2.65668,3.20525.62874.73,1.37628,1.57843,2.23135,2.51184.00007.00007,1.20453,1.31489,2.444,2.58275.21534.22029.43481.44229.43489.44236.30043.30393.54693.54982.70729.70914.20521.20389.43374.42935.68327.673",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#d24a43",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    })
                ]
            })
        ]
    })
;




var $8d91577ed9eb46fc$export$2e2bcd8739ae039 = ()=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("svg", {
        id: "circle",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("ellipse", {
            id: "second-circle",
            cx: "111",
            cy: "109.9059",
            rx: "110",
            ry: "108.9059",
            fill: "none",
            stroke: "#d24b42",
            strokeMiterlimit: "10",
            strokeWidth: "2"
        })
    }));
};




var $f4bf248e2e15f9a7$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("svg", {
        id: "circles-blue",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("ellipse", {
            id: "second-circle",
            cx: "111",
            cy: "109.9059",
            rx: "110",
            ry: "108.9059",
            fill: "none",
            stroke: "#3eb5f1",
            strokeMiterlimit: "10",
            strokeWidth: "2"
        })
    })
;


const $61ea7430f12deac2$var$circlePartsToCompositionType = (circleParts)=>{
    if ($klFNZ$lodash.isEqual(circleParts, [
        'intersection'
    ])) return 'intersection';
    if ($klFNZ$lodash.isEqual(circleParts, [
        'leftWing'
    ])) return 'difference';
    if ($klFNZ$lodash.isEqual(circleParts, [
        'rightWing'
    ])) return 'difference';
    if ($klFNZ$lodash.isEqual(circleParts, [
        'leftWing',
        'intersection',
        'rightWing'
    ])) return 'union';
    return null;
};
const $61ea7430f12deac2$var$isAllowedToClick = (element, partName)=>{
    const isElementSelected = element.attr('fillOpacity') === '1';
    if (isElementSelected) return true;
    return $61ea7430f12deac2$var$circlePartsToCompositionType([
        ...$61ea7430f12deac2$var$selectedParts,
        partName
    ]);
};
const $61ea7430f12deac2$var$setCursorStyle = (element, partName)=>{
    const allowedToClick = $61ea7430f12deac2$var$isAllowedToClick(element, partName);
    const newStyle = allowedToClick ? 'pointer' : 'not-allowed';
    element.attr({
        cursor: newStyle
    });
};
let $61ea7430f12deac2$var$selectedParts = [];
var $61ea7430f12deac2$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups , handleCompositionTypeChange: handleCompositionTypeChange  })=>{
    const changeOpacity = (element1, partName1, parts)=>{
        if (!$61ea7430f12deac2$var$isAllowedToClick(element1, partName1)) return;
        const isElementSelected = element1.attr('fillOpacity') === '1';
        element1.attr({
            'fillOpacity': isElementSelected ? '0' : '1'
        });
        const newSelectedParts = isElementSelected ? $61ea7430f12deac2$var$selectedParts.filter((i)=>i !== partName1
        ) : [
            ...$61ea7430f12deac2$var$selectedParts,
            partName1
        ];
        const newCompositionType = $61ea7430f12deac2$var$circlePartsToCompositionType(newSelectedParts);
        $61ea7430f12deac2$var$selectedParts = newSelectedParts;
        Object.entries(parts).forEach(([partName, element])=>$61ea7430f12deac2$var$setCursorStyle(element, partName)
        );
        handleCompositionTypeChange(newCompositionType);
    };
    $klFNZ$react.useEffect(()=>{
        if (selectedGroups.length !== 2) return;
        const intersection = ($parcel$interopDefault($klFNZ$snapsvgcjs))('#intersection');
        const rightWing = ($parcel$interopDefault($klFNZ$snapsvgcjs))('#right-wing');
        const leftWing = ($parcel$interopDefault($klFNZ$snapsvgcjs))('#left-wing');
        const parts = {
            intersection: intersection,
            rightWing: rightWing,
            leftWing: leftWing
        };
        Object.entries(parts).forEach(([partName, element])=>element.click(()=>changeOpacity(element, partName, parts)
            )
        );
    }, [
        selectedGroups.length
    ]);
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($30e722a3c9f4a5a2$exports)).circles,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
                className: (/*@__PURE__*/$parcel$interopDefault($30e722a3c9f4a5a2$exports)).circlesContainer,
                children: selectedGroups.length === 1 ? selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($f4bf248e2e15f9a7$export$2e2bcd8739ae039, {
                }) : /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($8d91577ed9eb46fc$export$2e2bcd8739ae039, {
                }) : selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($9465b8194adbd11c$export$2e2bcd8739ae039, {
                    style: {
                        cursor: 'pointer'
                    }
                }) : /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($a5c5ed9352ae94d8$export$2e2bcd8739ae039, {
                    style: {
                        cursor: 'pointer'
                    }
                })
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($536534c05231b4ee$export$2e2bcd8739ae039, {
                selectedGroups: selectedGroups,
                selectedCircleParts: $61ea7430f12deac2$var$selectedParts
            })
        ]
    }));
};







var $11612f69b4053603$exports = {};

$parcel$export($11612f69b4053603$exports, "input", () => $11612f69b4053603$export$b7e3ae3d7c15e42e, (v) => $11612f69b4053603$export$b7e3ae3d7c15e42e = v);
$parcel$export($11612f69b4053603$exports, "text", () => $11612f69b4053603$export$6f093cfa640b7166, (v) => $11612f69b4053603$export$6f093cfa640b7166 = v);
var $11612f69b4053603$export$b7e3ae3d7c15e42e;
var $11612f69b4053603$export$6f093cfa640b7166;
$11612f69b4053603$export$b7e3ae3d7c15e42e = "_input_bd52b2";
$11612f69b4053603$export$6f093cfa640b7166 = "_text_bd52b2";


var $e2521c60f876a428$export$2e2bcd8739ae039 = ({ onTitleInput: onTitleInput , value: value  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($11612f69b4053603$exports)).text,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("input", {
            className: (/*@__PURE__*/$parcel$interopDefault($11612f69b4053603$exports)).input,
            onChange: (e)=>onTitleInput(e.target.value)
            ,
            value: value
        })
    })
;











var $596aa2f89d1ce74c$exports = {};

$parcel$export($596aa2f89d1ce74c$exports, "button", () => $596aa2f89d1ce74c$export$2ba01fb71ed41cb6, (v) => $596aa2f89d1ce74c$export$2ba01fb71ed41cb6 = v);
var $596aa2f89d1ce74c$export$2ba01fb71ed41cb6;
$596aa2f89d1ce74c$export$2ba01fb71ed41cb6 = "_button_ce85ea";


var $bbeeee79c4874bd1$export$2e2bcd8739ae039 = ({ children: children , className: className , onClick: onClick , disabled: disabled , loading: loading  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("button", {
        disabled: Boolean(disabled),
        className: ($parcel$interopDefault($klFNZ$classnames))(className, (/*@__PURE__*/$parcel$interopDefault($596aa2f89d1ce74c$exports)).button),
        onClick: onClick,
        children: loading ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx(($parcel$interopDefault($klFNZ$reactspinnersBeatLoader)), {
            color: "#969696"
        }) : children
    }));
};



var $f7179316101b3542$exports = {};

$parcel$export($f7179316101b3542$exports, "button", () => $f7179316101b3542$export$2ba01fb71ed41cb6, (v) => $f7179316101b3542$export$2ba01fb71ed41cb6 = v);
$parcel$export($f7179316101b3542$exports, "primary", () => $f7179316101b3542$export$9ad721cf3b3debe0, (v) => $f7179316101b3542$export$9ad721cf3b3debe0 = v);
$parcel$export($f7179316101b3542$exports, "secondary", () => $f7179316101b3542$export$745c6f71a1e0e6f7, (v) => $f7179316101b3542$export$745c6f71a1e0e6f7 = v);
var $f7179316101b3542$export$2ba01fb71ed41cb6;
var $f7179316101b3542$export$9ad721cf3b3debe0;
var $f7179316101b3542$export$745c6f71a1e0e6f7;
$f7179316101b3542$export$2ba01fb71ed41cb6 = "_button_ba9be0";
$f7179316101b3542$export$9ad721cf3b3debe0 = "_primary_ba9be0";
$f7179316101b3542$export$745c6f71a1e0e6f7 = "_secondary_ba9be0";


var $0beb78ce768a9f0a$export$2e2bcd8739ae039 = ({ children: children , primary: primary , secondary: secondary , onClick: onClick , disabled: disabled  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($bbeeee79c4874bd1$export$2e2bcd8739ae039, {
        disabled: disabled,
        onClick: onClick,
        className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($f7179316101b3542$exports)).button, {
            [(/*@__PURE__*/$parcel$interopDefault($f7179316101b3542$exports)).primary]: primary,
            [(/*@__PURE__*/$parcel$interopDefault($f7179316101b3542$exports)).secondary]: secondary
        }),
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
            children: children
        })
    })
;


var $6500b11622e2b337$exports = {};

$parcel$export($6500b11622e2b337$exports, "buttons", () => $6500b11622e2b337$export$bbea856fdb3e3c5f, (v) => $6500b11622e2b337$export$bbea856fdb3e3c5f = v);
var $6500b11622e2b337$export$bbea856fdb3e3c5f;
$6500b11622e2b337$export$bbea856fdb3e3c5f = "_buttons_7bee74";


var $124b528c224b1f7a$export$2e2bcd8739ae039 = ({ select: select , combine: combine  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($6500b11622e2b337$exports)).buttons,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($0beb78ce768a9f0a$export$2e2bcd8739ae039, {
                primary: true,
                onClick: select,
                children: "Select"
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($0beb78ce768a9f0a$export$2e2bcd8739ae039, {
                secondary: true,
                onClick: combine,
                children: "Combine"
            })
        ]
    })
;





var $b61974cc8e4b4154$exports = {};

$parcel$export($b61974cc8e4b4154$exports, "buttons", () => $b61974cc8e4b4154$export$bbea856fdb3e3c5f, (v) => $b61974cc8e4b4154$export$bbea856fdb3e3c5f = v);
var $b61974cc8e4b4154$export$bbea856fdb3e3c5f;
$b61974cc8e4b4154$export$bbea856fdb3e3c5f = "_buttons_d74f78";


var $ccf0ed2c8ac3a87d$export$2e2bcd8739ae039 = ({ readyToSave: readyToSave , save: save , cancel: cancel  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($b61974cc8e4b4154$exports)).buttons,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($0beb78ce768a9f0a$export$2e2bcd8739ae039, {
                disabled: !readyToSave,
                primary: true,
                onClick: save,
                children: "Save"
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($0beb78ce768a9f0a$export$2e2bcd8739ae039, {
                secondary: true,
                onClick: cancel,
                children: "Cancel"
            })
        ]
    })
;





var $4ac0c9b29ef51951$export$2e2bcd8739ae039 = ({ x: x  })=>x.toLocaleString()
;


var $123425e113694acd$exports = {};

$parcel$export($123425e113694acd$exports, "userCount", () => $123425e113694acd$export$72bd514aa1799057, (v) => $123425e113694acd$export$72bd514aa1799057 = v);
var $123425e113694acd$export$72bd514aa1799057;
$123425e113694acd$export$72bd514aa1799057 = "_userCount_5c96a9";


var $1cfb7e9345b761a0$export$2e2bcd8739ae039 = ({ userCount: userCount  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($123425e113694acd$exports)).userCount,
        children: userCount === null ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$reactjsxruntime.Fragment, {
            children: "select new group parts"
        }) : /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($klFNZ$reactjsxruntime.Fragment, {
            children: [
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($4ac0c9b29ef51951$export$2e2bcd8739ae039, {
                    x: userCount
                }),
                " people"
            ]
        })
    })
;






var $b5fd55387ed81591$exports = {};

$parcel$export($b5fd55387ed81591$exports, "icon", () => $b5fd55387ed81591$export$1ca1ec8b29a4ce27, (v) => $b5fd55387ed81591$export$1ca1ec8b29a4ce27 = v);
var $b5fd55387ed81591$export$1ca1ec8b29a4ce27;
$b5fd55387ed81591$export$1ca1ec8b29a4ce27 = "_icon_8d86af";


var $3ac2dbca350b9e6f$export$2e2bcd8739ae039 = ({ color: color = '#bebebe' , deselect: deselect  })=>{
    const [icon, setIcon] = $klFNZ$react.useState($klFNZ$fortawesomefreesolidsvgicons.faCheckCircle);
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$fortawesomereactfontawesome.FontAwesomeIcon, {
        className: (/*@__PURE__*/$parcel$interopDefault($b5fd55387ed81591$exports)).icon,
        size: "2x",
        color: color,
        icon: icon,
        onMouseEnter: ()=>setIcon($klFNZ$fortawesomefreesolidsvgicons.faTimesCircle)
        ,
        onMouseLeave: ()=>setIcon($klFNZ$fortawesomefreesolidsvgicons.faCheckCircle)
        ,
        onClick: deselect
    }));
};





var $b6a98c6939b80947$exports = {};

$parcel$export($b6a98c6939b80947$exports, "title", () => $b6a98c6939b80947$export$fb184b623420d9be, (v) => $b6a98c6939b80947$export$fb184b623420d9be = v);
var $b6a98c6939b80947$export$fb184b623420d9be;
$b6a98c6939b80947$export$fb184b623420d9be = "_title_81adf0";


var $ef0f4ddb49513b7b$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($b6a98c6939b80947$exports)).title,
        children: children
    })
;


var $29df6b5c8f1d244a$exports = {};

$parcel$export($29df6b5c8f1d244a$exports, "card", () => $29df6b5c8f1d244a$export$aa3e815946b80764, (v) => $29df6b5c8f1d244a$export$aa3e815946b80764 = v);
$parcel$export($29df6b5c8f1d244a$exports, "leftSideContainer", () => $29df6b5c8f1d244a$export$59b1d651044d302, (v) => $29df6b5c8f1d244a$export$59b1d651044d302 = v);
var $29df6b5c8f1d244a$export$aa3e815946b80764;
var $29df6b5c8f1d244a$export$59b1d651044d302;
$29df6b5c8f1d244a$export$aa3e815946b80764 = "_card_f0e9fb";
$29df6b5c8f1d244a$export$59b1d651044d302 = "_leftSideContainer_f0e9fb";


var $61e75dde1af98c77$export$2e2bcd8739ae039 = ({ name: name , userCount: userCount , selected: selected , color: color , save: save , toggleSelection: toggleSelection , combine: combine , readyToSave: readyToSave , cancel: cancel  })=>{
    const [newGroupTitle, setNewGroupTitle] = $klFNZ$react.useState('');
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("article", {
        className: (/*@__PURE__*/$parcel$interopDefault($29df6b5c8f1d244a$exports)).card,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
                className: (/*@__PURE__*/$parcel$interopDefault($29df6b5c8f1d244a$exports)).leftSideContainer,
                children: [
                    name ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($ef0f4ddb49513b7b$export$2e2bcd8739ae039, {
                        children: name
                    }) : /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($e2521c60f876a428$export$2e2bcd8739ae039, {
                        onTitleInput: setNewGroupTitle
                    }),
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($1cfb7e9345b761a0$export$2e2bcd8739ae039, {
                        userCount: userCount
                    })
                ]
            }),
            color || selected ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($3ac2dbca350b9e6f$export$2e2bcd8739ae039, {
                color: color,
                deselect: toggleSelection
            }) : name ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($124b528c224b1f7a$export$2e2bcd8739ae039, {
                select: toggleSelection,
                combine: combine
            }) : /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($ccf0ed2c8ac3a87d$export$2e2bcd8739ae039, {
                save: ()=>save(newGroupTitle)
                ,
                cancel: cancel,
                readyToSave: newGroupTitle && readyToSave
            })
        ]
    }));
};







var $a5cef5765909aa3c$exports = {};

$parcel$export($a5cef5765909aa3c$exports, "title", () => $a5cef5765909aa3c$export$fb184b623420d9be, (v) => $a5cef5765909aa3c$export$fb184b623420d9be = v);
var $a5cef5765909aa3c$export$fb184b623420d9be;
$a5cef5765909aa3c$export$fb184b623420d9be = "_title_ffee34";


var $194a15bef69f42d6$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($a5cef5765909aa3c$exports)).title,
        children: children
    })
;









var $d5b447f71be6a19d$exports = {};

$parcel$export($d5b447f71be6a19d$exports, "text", () => $d5b447f71be6a19d$export$6f093cfa640b7166, (v) => $d5b447f71be6a19d$export$6f093cfa640b7166 = v);
var $d5b447f71be6a19d$export$6f093cfa640b7166;
$d5b447f71be6a19d$export$6f093cfa640b7166 = "_text_1f301a";


var $c08901f0816a98d4$export$2e2bcd8739ae039 = ({ children: children , style: style , className: className  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        style: style,
        className: ($parcel$interopDefault($klFNZ$classnames))(className, (/*@__PURE__*/$parcel$interopDefault($d5b447f71be6a19d$exports)).text),
        children: children
    })
;





var $3ca0ad569aed56c0$exports = {};

$parcel$export($3ca0ad569aed56c0$exports, "bars", () => $3ca0ad569aed56c0$export$60912654947077e3, (v) => $3ca0ad569aed56c0$export$60912654947077e3 = v);
$parcel$export($3ca0ad569aed56c0$exports, "bar", () => $3ca0ad569aed56c0$export$d927737047eb3867, (v) => $3ca0ad569aed56c0$export$d927737047eb3867 = v);
$parcel$export($3ca0ad569aed56c0$exports, "yesBar", () => $3ca0ad569aed56c0$export$6a31b2d83bf3b7ff, (v) => $3ca0ad569aed56c0$export$6a31b2d83bf3b7ff = v);
$parcel$export($3ca0ad569aed56c0$exports, "noBar", () => $3ca0ad569aed56c0$export$e2b71f7b582462e, (v) => $3ca0ad569aed56c0$export$e2b71f7b582462e = v);
var $3ca0ad569aed56c0$export$60912654947077e3;
var $3ca0ad569aed56c0$export$d927737047eb3867;
var $3ca0ad569aed56c0$export$6a31b2d83bf3b7ff;
var $3ca0ad569aed56c0$export$e2b71f7b582462e;
$3ca0ad569aed56c0$export$60912654947077e3 = "_bars_413fe9";
$3ca0ad569aed56c0$export$d927737047eb3867 = "_bar_413fe9";
$3ca0ad569aed56c0$export$6a31b2d83bf3b7ff = "_yesBar_413fe9";
$3ca0ad569aed56c0$export$e2b71f7b582462e = "_noBar_413fe9";


var $ea0aac0946cf69ac$export$2e2bcd8739ae039 = ({ yes: yes , no: no , onHover: onHover , createNewGroup: createNewGroup  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($3ca0ad569aed56c0$exports)).bars,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
                style: {
                    width: `${yes}%`
                },
                className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($3ca0ad569aed56c0$exports)).bar, (/*@__PURE__*/$parcel$interopDefault($3ca0ad569aed56c0$exports)).yesBar),
                onMouseEnter: ()=>onHover('yes')
                ,
                onMouseLeave: ()=>onHover()
                ,
                onClick: ()=>createNewGroup('yes')
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
                style: {
                    width: `${no}%`
                },
                className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($3ca0ad569aed56c0$exports)).bar, (/*@__PURE__*/$parcel$interopDefault($3ca0ad569aed56c0$exports)).noBar),
                onMouseEnter: ()=>onHover('no')
                ,
                onMouseLeave: ()=>onHover()
                ,
                onClick: ()=>createNewGroup('no')
            })
        ]
    }));
};


var $d6d91ce42cf9d02e$exports = {};

$parcel$export($d6d91ce42cf9d02e$exports, "stats", () => $d6d91ce42cf9d02e$export$7804429c45dff272, (v) => $d6d91ce42cf9d02e$export$7804429c45dff272 = v);
$parcel$export($d6d91ce42cf9d02e$exports, "textContainer", () => $d6d91ce42cf9d02e$export$2cedfd664bb3bd01, (v) => $d6d91ce42cf9d02e$export$2cedfd664bb3bd01 = v);
$parcel$export($d6d91ce42cf9d02e$exports, "text", () => $d6d91ce42cf9d02e$export$6f093cfa640b7166, (v) => $d6d91ce42cf9d02e$export$6f093cfa640b7166 = v);
var $d6d91ce42cf9d02e$export$7804429c45dff272;
var $d6d91ce42cf9d02e$export$2cedfd664bb3bd01;
var $d6d91ce42cf9d02e$export$6f093cfa640b7166;
$d6d91ce42cf9d02e$export$7804429c45dff272 = "_stats_8d605a";
$d6d91ce42cf9d02e$export$2cedfd664bb3bd01 = "_textContainer_8d605a";
$d6d91ce42cf9d02e$export$6f093cfa640b7166 = "_text_8d605a";


const $57a54752ed551bc0$var$calcPercent = (x, sum)=>Math.floor(x / sum * 100)
;
var $57a54752ed551bc0$export$2e2bcd8739ae039 = ({ yes: yes , no: no , createNewGroup: createNewGroup  })=>{
    const [state, setState] = $klFNZ$react.useState(null);
    const answers = {
        yes: yes,
        no: no
    };
    const userReplyCount = state ? answers[state] : yes + no;
    const yesPercentage = $57a54752ed551bc0$var$calcPercent(yes, yes + no);
    const noPercentage = $57a54752ed551bc0$var$calcPercent(no, yes + no);
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($d6d91ce42cf9d02e$exports)).stats,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($c08901f0816a98d4$export$2e2bcd8739ae039, {
                secondary: true,
                children: [
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($4ac0c9b29ef51951$export$2e2bcd8739ae039, {
                        x: userReplyCount
                    }),
                    " people answered"
                ]
            }),
            userReplyCount ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($klFNZ$reactjsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($ea0aac0946cf69ac$export$2e2bcd8739ae039, {
                        yes: yesPercentage,
                        no: noPercentage,
                        onHover: setState,
                        createNewGroup: createNewGroup
                    }),
                    /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
                        className: (/*@__PURE__*/$parcel$interopDefault($d6d91ce42cf9d02e$exports)).textContainer,
                        children: [
                            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($c08901f0816a98d4$export$2e2bcd8739ae039, {
                                className: (/*@__PURE__*/$parcel$interopDefault($d6d91ce42cf9d02e$exports)).text,
                                style: {
                                    width: `${yesPercentage}%`
                                },
                                children: [
                                    yesPercentage,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($c08901f0816a98d4$export$2e2bcd8739ae039, {
                                className: (/*@__PURE__*/$parcel$interopDefault($d6d91ce42cf9d02e$exports)).text,
                                style: {
                                    width: `${noPercentage}%`
                                },
                                children: [
                                    noPercentage,
                                    "%"
                                ]
                            })
                        ]
                    })
                ]
            }) : null
        ]
    }));
};







var $788b5cd68a8acaa5$exports = {};

$parcel$export($788b5cd68a8acaa5$exports, "text", () => $788b5cd68a8acaa5$export$6f093cfa640b7166, (v) => $788b5cd68a8acaa5$export$6f093cfa640b7166 = v);
$parcel$export($788b5cd68a8acaa5$exports, "yes", () => $788b5cd68a8acaa5$export$7a668e70ea2210d9, (v) => $788b5cd68a8acaa5$export$7a668e70ea2210d9 = v);
$parcel$export($788b5cd68a8acaa5$exports, "no", () => $788b5cd68a8acaa5$export$401451a107dc42ce, (v) => $788b5cd68a8acaa5$export$401451a107dc42ce = v);
var $788b5cd68a8acaa5$export$6f093cfa640b7166;
var $788b5cd68a8acaa5$export$7a668e70ea2210d9;
var $788b5cd68a8acaa5$export$401451a107dc42ce;
$788b5cd68a8acaa5$export$6f093cfa640b7166 = "_text_096ef8";
$788b5cd68a8acaa5$export$7a668e70ea2210d9 = "_yes_096ef8";
$788b5cd68a8acaa5$export$401451a107dc42ce = "_no_096ef8";


var $daeacf9d8b98618b$export$2e2bcd8739ae039 = ({ answer: answer  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($788b5cd68a8acaa5$exports)).text,
        children: [
            "Your answer:",
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                children: ' '
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($788b5cd68a8acaa5$exports)).text, {
                    [(/*@__PURE__*/$parcel$interopDefault($788b5cd68a8acaa5$exports)).yes]: answer.toLowerCase() === 'yes',
                    [(/*@__PURE__*/$parcel$interopDefault($788b5cd68a8acaa5$exports)).no]: answer.toLowerCase() === 'no'
                }),
                children: $klFNZ$lodash.capitalize(answer)
            })
        ]
    })
;








var $9d5e321cebdac1dc$exports = {};

$parcel$export($9d5e321cebdac1dc$exports, "button", () => $9d5e321cebdac1dc$export$2ba01fb71ed41cb6, (v) => $9d5e321cebdac1dc$export$2ba01fb71ed41cb6 = v);
$parcel$export($9d5e321cebdac1dc$exports, "yes", () => $9d5e321cebdac1dc$export$7a668e70ea2210d9, (v) => $9d5e321cebdac1dc$export$7a668e70ea2210d9 = v);
$parcel$export($9d5e321cebdac1dc$exports, "no", () => $9d5e321cebdac1dc$export$401451a107dc42ce, (v) => $9d5e321cebdac1dc$export$401451a107dc42ce = v);
var $9d5e321cebdac1dc$export$2ba01fb71ed41cb6;
var $9d5e321cebdac1dc$export$7a668e70ea2210d9;
var $9d5e321cebdac1dc$export$401451a107dc42ce;
$9d5e321cebdac1dc$export$2ba01fb71ed41cb6 = "_button_0dae0a";
$9d5e321cebdac1dc$export$7a668e70ea2210d9 = "_yes_0dae0a";
$9d5e321cebdac1dc$export$401451a107dc42ce = "_no_0dae0a";


var $3164c83b2ba22f63$export$2e2bcd8739ae039 = ({ answer: answer , respond: respond  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("button", {
        className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($9d5e321cebdac1dc$exports)).button, {
            [(/*@__PURE__*/$parcel$interopDefault($9d5e321cebdac1dc$exports)).yes]: answer.toLowerCase() === 'yes',
            [(/*@__PURE__*/$parcel$interopDefault($9d5e321cebdac1dc$exports)).no]: answer.toLowerCase() === 'no'
        }),
        onClick: respond,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
            children: answer
        })
    }));
};


var $35e5d7349ea6d680$exports = {};

$parcel$export($35e5d7349ea6d680$exports, "answerButtons", () => $35e5d7349ea6d680$export$33b0e16035b753e, (v) => $35e5d7349ea6d680$export$33b0e16035b753e = v);
var $35e5d7349ea6d680$export$33b0e16035b753e;
$35e5d7349ea6d680$export$33b0e16035b753e = "_answerButtons_f0c862";


var $9ad36611c1075068$export$2e2bcd8739ae039 = ({ respond: respond  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($35e5d7349ea6d680$exports)).answerButtons,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($3164c83b2ba22f63$export$2e2bcd8739ae039, {
                answer: "Yes",
                respond: ()=>respond('yes')
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($3164c83b2ba22f63$export$2e2bcd8739ae039, {
                answer: "No",
                respond: ()=>respond('no')
            })
        ]
    }));
};



var $6807b5120e7c7a46$exports = {};

$parcel$export($6807b5120e7c7a46$exports, "card", () => $6807b5120e7c7a46$export$aa3e815946b80764, (v) => $6807b5120e7c7a46$export$aa3e815946b80764 = v);
$parcel$export($6807b5120e7c7a46$exports, "hint", () => $6807b5120e7c7a46$export$464c821cd4347539, (v) => $6807b5120e7c7a46$export$464c821cd4347539 = v);
var $6807b5120e7c7a46$export$aa3e815946b80764;
var $6807b5120e7c7a46$export$464c821cd4347539;
$6807b5120e7c7a46$export$aa3e815946b80764 = "_card_3d0cdf";
$6807b5120e7c7a46$export$464c821cd4347539 = "_hint_3d0cdf";


var $df71309407d515a9$export$2e2bcd8739ae039 = ({ yourOwnQuestion: yourOwnQuestion , name: name , answersCount: answersCount , currentUserAnswer: answer , respond: respond , createNewGroup: createNewGroup  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("article", {
        className: (/*@__PURE__*/$parcel$interopDefault($6807b5120e7c7a46$exports)).card,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($194a15bef69f42d6$export$2e2bcd8739ae039, {
                children: name
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($57a54752ed551bc0$export$2e2bcd8739ae039, {
                ...answersCount,
                createNewGroup: createNewGroup
            }),
            yourOwnQuestion ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($6807b5120e7c7a46$exports)).hint,
                children: "You cannot answer your own question"
            }) : answer ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($daeacf9d8b98618b$export$2e2bcd8739ae039, {
                answer: answer
            }) : /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($9ad36611c1075068$export$2e2bcd8739ae039, {
                respond: respond
            })
        ]
    }));
};







var $01a57ec41b8a9247$exports = {};

$parcel$export($01a57ec41b8a9247$exports, "textarea", () => $01a57ec41b8a9247$export$a3574df893ffa88d, (v) => $01a57ec41b8a9247$export$a3574df893ffa88d = v);
$parcel$export($01a57ec41b8a9247$exports, "text", () => $01a57ec41b8a9247$export$6f093cfa640b7166, (v) => $01a57ec41b8a9247$export$6f093cfa640b7166 = v);
var $01a57ec41b8a9247$export$a3574df893ffa88d;
var $01a57ec41b8a9247$export$6f093cfa640b7166;
$01a57ec41b8a9247$export$a3574df893ffa88d = "_textarea_36b97b";
$01a57ec41b8a9247$export$6f093cfa640b7166 = "_text_36b97b";


var $ea01694ccbc54f0e$export$2e2bcd8739ae039 = ({ onChange: onChange , value: value  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($01a57ec41b8a9247$exports)).text,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("textarea", {
            placeholder: "Type your question here...",
            className: (/*@__PURE__*/$parcel$interopDefault($01a57ec41b8a9247$exports)).textarea,
            onChange: onChange,
            value: value
        })
    })
;


var $caff8b7e83075118$exports = {};

$parcel$export($caff8b7e83075118$exports, "newQuestion", () => $caff8b7e83075118$export$9ad540bb5fc131aa, (v) => $caff8b7e83075118$export$9ad540bb5fc131aa = v);
var $caff8b7e83075118$export$9ad540bb5fc131aa;
$caff8b7e83075118$export$9ad540bb5fc131aa = "_newQuestion_4a75b1";


var $65d2e36683ed403b$export$2e2bcd8739ae039 = ({ saveQuestion: saveQuestion  })=>{
    const [question, setQuestion] = $klFNZ$react.useState('');
    const onChange = (e)=>{
        const newQuestion = e.target.value;
        if (newQuestion[newQuestion.length - 1] === '?') {
            saveQuestion(newQuestion);
            setQuestion('');
        } else setQuestion(newQuestion);
    };
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($caff8b7e83075118$exports)).newQuestion,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($ea01694ccbc54f0e$export$2e2bcd8739ae039, {
            value: question,
            onChange: onChange
        })
    }));
};








var $1fe39892076d0e58$exports = {};

$parcel$export($1fe39892076d0e58$exports, "container", () => $1fe39892076d0e58$export$34e0f9847d4c02dd, (v) => $1fe39892076d0e58$export$34e0f9847d4c02dd = v);
var $1fe39892076d0e58$export$34e0f9847d4c02dd;
$1fe39892076d0e58$export$34e0f9847d4c02dd = "_container_9612d8";


var $346d3c9e2eaf59bb$export$2e2bcd8739ae039 = ({ children: children  })=>{
    const value = $klFNZ$react.useContext($b892b0156e6f0d23$export$32c650b79baf5fee);
    const handlers = $klFNZ$reactswipeable.useSwipeable({
        onSwiped: (eventData)=>{
            if (eventData.dir === 'Right' || eventData.dir === 'Left') value.toggleMainScreen();
        },
        delta: 40,
        preventDefaultTouchmoveEvent: true
    });
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("main", {
        ...handlers,
        className: (/*@__PURE__*/$parcel$interopDefault($1fe39892076d0e58$exports)).container,
        children: children
    }));
};
const $346d3c9e2eaf59bb$export$97295e60e7f371e1 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("main", {
        className: (/*@__PURE__*/$parcel$interopDefault($1fe39892076d0e58$exports)).container,
        children: children
    })
;


var $5cf1d9bd19cbc1c0$exports = {};

$parcel$export($5cf1d9bd19cbc1c0$exports, "body", () => $5cf1d9bd19cbc1c0$export$32180ef41b15b513, (v) => $5cf1d9bd19cbc1c0$export$32180ef41b15b513 = v);
var $5cf1d9bd19cbc1c0$export$32180ef41b15b513;
$5cf1d9bd19cbc1c0$export$32180ef41b15b513 = "_body_30bc21";


const $13451d956f5eeda4$export$2515d253ab459c32 = 450;
const $13451d956f5eeda4$export$310e42f8685040c9 = 1361;
const $13451d956f5eeda4$export$5d27a029e0b63495 = 914;
const $13451d956f5eeda4$export$120137d2fb34488f = 467;


const $b892b0156e6f0d23$export$32c650b79baf5fee = /*#__PURE__*/ ($parcel$interopDefault($klFNZ$react)).createContext({
    mainScreen: true,
    toggleMainScreen: null
});
var $b892b0156e6f0d23$export$2e2bcd8739ae039 = ({ children: children , includeSwipes: includeSwipes  })=>{
    const [mainScreen, toggleMainScreen] = $klFNZ$react.useState(true);
    $klFNZ$react.useEffect(()=>{
        const handler = ()=>{
            const { innerWidth: width  } = window;
            if (mainScreen && width > $13451d956f5eeda4$export$2515d253ab459c32 + $13451d956f5eeda4$export$120137d2fb34488f) toggleMainScreen(width);
        };
        window.addEventListener('resize', handler);
        return ()=>window.removeEventListener('resize', handler)
        ;
    }, []);
    if (includeSwipes) return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($b892b0156e6f0d23$export$32c650b79baf5fee.Provider, {
        value: {
            mainScreen: mainScreen,
            toggleMainScreen: ()=>toggleMainScreen(!mainScreen)
        },
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
            style: {
                height: mainScreen ? '100%' : 'auto'
            },
            className: (/*@__PURE__*/$parcel$interopDefault($5cf1d9bd19cbc1c0$exports)).body,
            children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($346d3c9e2eaf59bb$export$2e2bcd8739ae039, {
                children: children
            })
        })
    }));
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        style: {
            height: mainScreen ? '100%' : 'auto'
        },
        className: (/*@__PURE__*/$parcel$interopDefault($5cf1d9bd19cbc1c0$exports)).body,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($346d3c9e2eaf59bb$export$97295e60e7f371e1, {
            children: children
        })
    }));
};





var $270ad0ca56a2a0ba$exports = {};

$parcel$export($270ad0ca56a2a0ba$exports, "groupContainer", () => $270ad0ca56a2a0ba$export$f36792cb9bd81925, (v) => $270ad0ca56a2a0ba$export$f36792cb9bd81925 = v);
var $270ad0ca56a2a0ba$export$f36792cb9bd81925;
$270ad0ca56a2a0ba$export$f36792cb9bd81925 = "_groupContainer_335d37";


var $4df27299f125c82f$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($270ad0ca56a2a0ba$exports)).groupContainer,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$reactcustomscrollbars.Scrollbars, {
            style: {
                width: '100%',
                height: '100%'
            },
            autoHide: true,
            children: children
        })
    })
;








var $4023315c3c408fbe$exports = {};

$parcel$export($4023315c3c408fbe$exports, "title", () => $4023315c3c408fbe$export$fb184b623420d9be, (v) => $4023315c3c408fbe$export$fb184b623420d9be = v);
$parcel$export($4023315c3c408fbe$exports, "secondary", () => $4023315c3c408fbe$export$745c6f71a1e0e6f7, (v) => $4023315c3c408fbe$export$745c6f71a1e0e6f7 = v);
var $4023315c3c408fbe$export$fb184b623420d9be;
var $4023315c3c408fbe$export$745c6f71a1e0e6f7;
$4023315c3c408fbe$export$fb184b623420d9be = "_title_3bf580";
$4023315c3c408fbe$export$745c6f71a1e0e6f7 = "_secondary_3bf580";


var $67920020b20febf4$export$2e2bcd8739ae039 = ({ children: children , className: className , color: color  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("h1", {
        style: {
            color: color
        },
        className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($4023315c3c408fbe$exports)).title, className),
        children: children
    })
;




var $bd60e00a3a745b29$exports = {};

$parcel$export($bd60e00a3a745b29$exports, "container", () => $bd60e00a3a745b29$export$34e0f9847d4c02dd, (v) => $bd60e00a3a745b29$export$34e0f9847d4c02dd = v);
var $bd60e00a3a745b29$export$34e0f9847d4c02dd;
$bd60e00a3a745b29$export$34e0f9847d4c02dd = "_container_0ef682";


var $1ea2ee3bd8693617$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($bd60e00a3a745b29$exports)).container,
        children: children
    })
;


var $8669e9038b613132$exports = {};

$parcel$export($8669e9038b613132$exports, "mainScreen", () => $8669e9038b613132$export$e962ae2959462fd2, (v) => $8669e9038b613132$export$e962ae2959462fd2 = v);
var $8669e9038b613132$export$e962ae2959462fd2;
$8669e9038b613132$export$e962ae2959462fd2 = "_mainScreen_a47f27";



var $518716977d13fe13$export$2e2bcd8739ae039 = ({ children: children , style: style  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("section", {
        style: style,
        className: (/*@__PURE__*/$parcel$interopDefault($8669e9038b613132$exports)).mainScreen,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($67920020b20febf4$export$2e2bcd8739ae039, {
                color: "#3d465e",
                children: "Questions"
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($1ea2ee3bd8693617$export$2e2bcd8739ae039, {
                children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx(($parcel$interopDefault($klFNZ$reactmedia)), {
                    queries: {
                        small: {
                            minWidth: $13451d956f5eeda4$export$2515d253ab459c32 + $13451d956f5eeda4$export$120137d2fb34488f,
                            maxWidth: $13451d956f5eeda4$export$2515d253ab459c32 + $13451d956f5eeda4$export$5d27a029e0b63495
                        },
                        medium: {
                            minWidth: $13451d956f5eeda4$export$2515d253ab459c32 + $13451d956f5eeda4$export$5d27a029e0b63495,
                            maxWidth: $13451d956f5eeda4$export$2515d253ab459c32 + $13451d956f5eeda4$export$310e42f8685040c9
                        },
                        large: {
                            minWidth: $13451d956f5eeda4$export$2515d253ab459c32 + $13451d956f5eeda4$export$310e42f8685040c9
                        }
                    },
                    children: (matches)=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($klFNZ$reactjsxruntime.Fragment, {
                            children: [
                                matches.small ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$reactjsxruntime.Fragment, {
                                    children: children.slice(0, 1)
                                }) : null,
                                matches.medium ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$reactjsxruntime.Fragment, {
                                    children: children.slice(0, 2)
                                }) : null,
                                matches.large ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$reactjsxruntime.Fragment, {
                                    children: children.slice(0, 3)
                                }) : null
                            ]
                        })
                })
            })
        ]
    })
;





var $8eb49d52494d8072$exports = {};

$parcel$export($8eb49d52494d8072$exports, "sidebar", () => $8eb49d52494d8072$export$6fbb9cd2843e91b2, (v) => $8eb49d52494d8072$export$6fbb9cd2843e91b2 = v);
$parcel$export($8eb49d52494d8072$exports, "title", () => $8eb49d52494d8072$export$fb184b623420d9be, (v) => $8eb49d52494d8072$export$fb184b623420d9be = v);
var $8eb49d52494d8072$export$6fbb9cd2843e91b2;
var $8eb49d52494d8072$export$fb184b623420d9be;
$8eb49d52494d8072$export$6fbb9cd2843e91b2 = "_sidebar_df38d0";
$8eb49d52494d8072$export$fb184b623420d9be = "_title_df38d0";


var $f7e695decee1351a$export$2e2bcd8739ae039 = ({ children: children , title: title , style: style  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        style: style,
        className: (/*@__PURE__*/$parcel$interopDefault($8eb49d52494d8072$exports)).sidebar,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($67920020b20febf4$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($8eb49d52494d8072$exports)).title,
                color: "#b1b8c7",
                children: title
            }),
            children
        ]
    })
;







var $ea65fa46f19245a8$exports = {};

$parcel$export($ea65fa46f19245a8$exports, "title", () => $ea65fa46f19245a8$export$fb184b623420d9be, (v) => $ea65fa46f19245a8$export$fb184b623420d9be = v);
var $ea65fa46f19245a8$export$fb184b623420d9be;
$ea65fa46f19245a8$export$fb184b623420d9be = "_title_6e8dfe";


var $87d20942e8dd7c23$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("h2", {
        className: (/*@__PURE__*/$parcel$interopDefault($ea65fa46f19245a8$exports)).title,
        children: children
    })
;


var $4b581a50150e8acf$exports = {};

$parcel$export($4b581a50150e8acf$exports, "cardsRow", () => $4b581a50150e8acf$export$3ffd594349b5aa88, (v) => $4b581a50150e8acf$export$3ffd594349b5aa88 = v);
$parcel$export($4b581a50150e8acf$exports, "scrollContainer", () => $4b581a50150e8acf$export$fad3c8302a7540c6, (v) => $4b581a50150e8acf$export$fad3c8302a7540c6 = v);
var $4b581a50150e8acf$export$3ffd594349b5aa88;
var $4b581a50150e8acf$export$fad3c8302a7540c6;
$4b581a50150e8acf$export$3ffd594349b5aa88 = "_cardsRow_07bbce";
$4b581a50150e8acf$export$fad3c8302a7540c6 = "_scrollContainer_07bbce";


var $55eb28eb8f26523e$export$2e2bcd8739ae039 = ({ title: title , children: children  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($4b581a50150e8acf$exports)).cardsRow,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($87d20942e8dd7c23$export$2e2bcd8739ae039, {
                children: title
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$reactcustomscrollbars.Scrollbars, {
                autoHide: true,
                className: (/*@__PURE__*/$parcel$interopDefault($4b581a50150e8acf$exports)).scrollContainer,
                children: children
            })
        ]
    }));
};







var $52e35097c3783023$exports = {};

$parcel$export($52e35097c3783023$exports, "containersContainer", () => $52e35097c3783023$export$6eb0125b0ff89eda, (v) => $52e35097c3783023$export$6eb0125b0ff89eda = v);
$parcel$export($52e35097c3783023$exports, "container", () => $52e35097c3783023$export$34e0f9847d4c02dd, (v) => $52e35097c3783023$export$34e0f9847d4c02dd = v);
$parcel$export($52e35097c3783023$exports, "header", () => $52e35097c3783023$export$38e42c68cf43b5d4, (v) => $52e35097c3783023$export$38e42c68cf43b5d4 = v);
$parcel$export($52e35097c3783023$exports, "signUp", () => $52e35097c3783023$export$cf64224bcd829024, (v) => $52e35097c3783023$export$cf64224bcd829024 = v);
$parcel$export($52e35097c3783023$exports, "signIn", () => $52e35097c3783023$export$9670d83f11d4b64a, (v) => $52e35097c3783023$export$9670d83f11d4b64a = v);
$parcel$export($52e35097c3783023$exports, "active", () => $52e35097c3783023$export$89da14300d534261, (v) => $52e35097c3783023$export$89da14300d534261 = v);
$parcel$export($52e35097c3783023$exports, "input", () => $52e35097c3783023$export$b7e3ae3d7c15e42e, (v) => $52e35097c3783023$export$b7e3ae3d7c15e42e = v);
$parcel$export($52e35097c3783023$exports, "lastInput", () => $52e35097c3783023$export$20b74936b6634d41, (v) => $52e35097c3783023$export$20b74936b6634d41 = v);
$parcel$export($52e35097c3783023$exports, "button", () => $52e35097c3783023$export$2ba01fb71ed41cb6, (v) => $52e35097c3783023$export$2ba01fb71ed41cb6 = v);
var $52e35097c3783023$export$6eb0125b0ff89eda;
var $52e35097c3783023$export$34e0f9847d4c02dd;
var $52e35097c3783023$export$38e42c68cf43b5d4;
var $52e35097c3783023$export$cf64224bcd829024;
var $52e35097c3783023$export$9670d83f11d4b64a;
var $52e35097c3783023$export$89da14300d534261;
var $52e35097c3783023$export$b7e3ae3d7c15e42e;
var $52e35097c3783023$export$20b74936b6634d41;
var $52e35097c3783023$export$2ba01fb71ed41cb6;
$52e35097c3783023$export$6eb0125b0ff89eda = "_containersContainer_7a3855";
$52e35097c3783023$export$34e0f9847d4c02dd = "_container_7a3855";
$52e35097c3783023$export$38e42c68cf43b5d4 = "_header_7a3855";
$52e35097c3783023$export$cf64224bcd829024 = "_signUp_7a3855";
$52e35097c3783023$export$9670d83f11d4b64a = "_signIn_7a3855";
$52e35097c3783023$export$89da14300d534261 = "_active_7a3855";
$52e35097c3783023$export$b7e3ae3d7c15e42e = "_input_7a3855";
$52e35097c3783023$export$20b74936b6634d41 = "_lastInput_7a3855";
$52e35097c3783023$export$2ba01fb71ed41cb6 = "_button_7a3855";




var $1dd813e006a85247$export$2e2bcd8739ae039 = ({ createUser: a , verifyUser: verifyUser , getUserToken: getUserToken , onError: onError  })=>{
    const [loading, setLoading] = $klFNZ$react.useState(null);
    const [{ username: username , password: password , phoneNumber: phoneNumber , country: country1 , verificationCode: verificationCode  }, setFields] = $klFNZ$react.useState({
        username: '',
        password: '',
        phoneNumber: '',
        country: '',
        verificationCode: ''
    });
    const [selectedTab, setSelectedTab] = $klFNZ$react.useState('signIn');
    const [showVerification, setShowVerification] = $klFNZ$react.useState(false);
    const onFieldChange = (e)=>{
        e.preventDefault();
        setFields((state)=>({
                ...state,
                [e.target.name]: e.target.value
            })
        );
    };
    const createUser = async ()=>{
        if (!$klFNZ$reactphonenumberinput.isValidPhoneNumber(phoneNumber)) {
            onError('Phone number is invalid');
            return;
        }
        setLoading(true);
        try {
            await a({
                username: username,
                password: password,
                phoneNumber: phoneNumber,
                country: country1
            });
            setShowVerification(true);
        } catch (e) {
            onError(e.message);
        }
        setLoading(false);
    };
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).containersContainer,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
            className: (/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).container,
            children: [
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
                    className: (/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).header,
                    children: [
                        /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                            className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).signUp, {
                                [(/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).active]: selectedTab === 'signUp'
                            }),
                            onClick: ()=>setSelectedTab('signUp')
                            ,
                            children: "Sign Up"
                        }),
                        /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                            className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).signIn, {
                                [(/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).active]: selectedTab === 'signIn'
                            }),
                            onClick: ()=>setSelectedTab('signIn')
                            ,
                            children: "Sign In"
                        })
                    ]
                }),
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("input", {
                    value: username,
                    onChange: onFieldChange,
                    placeholder: "username",
                    name: "username",
                    className: (/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).input
                }),
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("input", {
                    type: "password",
                    value: password,
                    onChange: onFieldChange,
                    placeholder: "password",
                    name: "password",
                    className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).input, {
                        [(/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).lastInput]: selectedTab === 'signIn'
                    })
                }),
                selectedTab === 'signUp' ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx(($parcel$interopDefault($klFNZ$reactphonenumberinput)), {
                    placeholder: "phone number",
                    name: "phoneNumber",
                    value: phoneNumber,
                    onCountryChange: (country)=>setFields((state)=>({
                                ...state,
                                country: country
                            })
                        )
                    ,
                    onChange: (value)=>setFields((state)=>({
                                ...state,
                                phoneNumber: value
                            })
                        )
                    ,
                    className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).input, {
                        [(/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).lastInput]: !showVerification
                    })
                }) : null,
                selectedTab === 'signUp' && showVerification ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("input", {
                    value: verificationCode,
                    onChange: onFieldChange,
                    placeholder: "verification code",
                    name: "verificationCode",
                    className: (/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).input
                }) : null,
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($bbeeee79c4874bd1$export$2e2bcd8739ae039, {
                    loading: loading,
                    className: (/*@__PURE__*/$parcel$interopDefault($52e35097c3783023$exports)).button,
                    onClick: ()=>selectedTab === 'signUp' ? showVerification ? verifyUser({
                            verificationCode: verificationCode
                        }) : createUser({
                            username: username,
                            password: password,
                            phoneNumber: phoneNumber
                        }) : getUserToken({
                            username: username,
                            password: password
                        })
                    ,
                    children: selectedTab === 'signUp' ? showVerification ? 'Sign Up' : 'Get Code' : 'Sign In'
                })
            ]
        })
    }));
};







var $96415e088af69c4d$exports = {};

$parcel$export($96415e088af69c4d$exports, "container", () => $96415e088af69c4d$export$34e0f9847d4c02dd, (v) => $96415e088af69c4d$export$34e0f9847d4c02dd = v);
$parcel$export($96415e088af69c4d$exports, "icon", () => $96415e088af69c4d$export$1ca1ec8b29a4ce27, (v) => $96415e088af69c4d$export$1ca1ec8b29a4ce27 = v);
$parcel$export($96415e088af69c4d$exports, "username", () => $96415e088af69c4d$export$5e1be761f603d585, (v) => $96415e088af69c4d$export$5e1be761f603d585 = v);
var $96415e088af69c4d$export$34e0f9847d4c02dd;
var $96415e088af69c4d$export$1ca1ec8b29a4ce27;
var $96415e088af69c4d$export$5e1be761f603d585;
$96415e088af69c4d$export$34e0f9847d4c02dd = "_container_150dcb";
$96415e088af69c4d$export$1ca1ec8b29a4ce27 = "_icon_150dcb";
$96415e088af69c4d$export$5e1be761f603d585 = "_username_150dcb";


var $8cf07228007ba6cc$export$2e2bcd8739ae039 = ({ logout: logout , username: username  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($96415e088af69c4d$exports)).container,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($96415e088af69c4d$exports)).username,
                children: username
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$fortawesomereactfontawesome.FontAwesomeIcon, {
                className: (/*@__PURE__*/$parcel$interopDefault($96415e088af69c4d$exports)).icon,
                size: "1x",
                color: "#bebebe",
                icon: $klFNZ$fortawesomefreesolidsvgicons.faSignOutAlt,
                onClick: logout
            })
        ]
    })
;


var $4fa0c73a46e81912$export$2e2bcd8739ae039 = {
    shallow: {
        Body: $b892b0156e6f0d23$export$2e2bcd8739ae039,
        GroupsContainer: $4df27299f125c82f$export$2e2bcd8739ae039,
        MainScreen: $518716977d13fe13$export$2e2bcd8739ae039,
        Sidebar: $f7e695decee1351a$export$2e2bcd8739ae039,
        QuestionCardsRow: $55eb28eb8f26523e$export$2e2bcd8739ae039
    },
    leafs: {
        Circles: $61ea7430f12deac2$export$2e2bcd8739ae039,
        GroupCard: $61e75dde1af98c77$export$2e2bcd8739ae039,
        QuestionCard: $df71309407d515a9$export$2e2bcd8739ae039,
        NewQuestion: $65d2e36683ed403b$export$2e2bcd8739ae039,
        Authorization: $1dd813e006a85247$export$2e2bcd8739ae039,
        ActionsPanel: $8cf07228007ba6cc$export$2e2bcd8739ae039
    },
    context: {
        MainScreenSwipeContext: $b892b0156e6f0d23$export$32c650b79baf5fee
    }
};


//# sourceMappingURL=main.js.map
