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









var $41e8da52a2d9e3a9$exports = {};

$parcel$export($41e8da52a2d9e3a9$exports, "text", () => $41e8da52a2d9e3a9$export$6f093cfa640b7166, (v) => $41e8da52a2d9e3a9$export$6f093cfa640b7166 = v);
var $41e8da52a2d9e3a9$export$6f093cfa640b7166;
$41e8da52a2d9e3a9$export$6f093cfa640b7166 = "style__text__2IeXLv";


var $6b1bd0c54623bfc1$export$2e2bcd8739ae039 = ({ children: children , className: className , style: style  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
        style: style,
        className: ($parcel$interopDefault($klFNZ$classnames))(className, (/*@__PURE__*/$parcel$interopDefault($41e8da52a2d9e3a9$exports)).text),
        children: children
    })
;


var $89f0140ed85a3e0d$exports = {};

$parcel$export($89f0140ed85a3e0d$exports, "hint", () => $89f0140ed85a3e0d$export$464c821cd4347539, (v) => $89f0140ed85a3e0d$export$464c821cd4347539 = v);
var $89f0140ed85a3e0d$export$464c821cd4347539;
$89f0140ed85a3e0d$export$464c821cd4347539 = "style__hint__2TMc8d";


var $536534c05231b4ee$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups , selectedCircleParts: selectedCircleParts  })=>{
    const lengthToHint = {
        1: '(select another group to continue)',
        2: '(click on area to select what goes to new group)'
    };
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($89f0140ed85a3e0d$exports)).hint,
        children: selectedCircleParts.length === 1 ? '(click on selected area again to deselect)' : lengthToHint[selectedGroups.length]
    }));
};


var $2c539cb681d7e0e2$exports = {};

$parcel$export($2c539cb681d7e0e2$exports, "circlesContainer", () => $2c539cb681d7e0e2$export$293c75fa7ed5ee8d, (v) => $2c539cb681d7e0e2$export$293c75fa7ed5ee8d = v);
$parcel$export($2c539cb681d7e0e2$exports, "circles", () => $2c539cb681d7e0e2$export$c958aa0cc90a067, (v) => $2c539cb681d7e0e2$export$c958aa0cc90a067 = v);
var $2c539cb681d7e0e2$export$293c75fa7ed5ee8d;
var $2c539cb681d7e0e2$export$c958aa0cc90a067;
$2c539cb681d7e0e2$export$293c75fa7ed5ee8d = "style__circlesContainer__32f6hF";
$2c539cb681d7e0e2$export$c958aa0cc90a067 = "style__circles__12ajfU";




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
        className: (/*@__PURE__*/$parcel$interopDefault($2c539cb681d7e0e2$exports)).circles,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
                className: (/*@__PURE__*/$parcel$interopDefault($2c539cb681d7e0e2$exports)).circlesContainer,
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







var $baf545cd24be6d91$exports = {};

$parcel$export($baf545cd24be6d91$exports, "input", () => $baf545cd24be6d91$export$b7e3ae3d7c15e42e, (v) => $baf545cd24be6d91$export$b7e3ae3d7c15e42e = v);
$parcel$export($baf545cd24be6d91$exports, "text", () => $baf545cd24be6d91$export$6f093cfa640b7166, (v) => $baf545cd24be6d91$export$6f093cfa640b7166 = v);
var $baf545cd24be6d91$export$b7e3ae3d7c15e42e;
var $baf545cd24be6d91$export$6f093cfa640b7166;
$baf545cd24be6d91$export$b7e3ae3d7c15e42e = "style__input__3BRxhk";
$baf545cd24be6d91$export$6f093cfa640b7166 = "style__text__1UuF-L";


var $e2521c60f876a428$export$2e2bcd8739ae039 = ({ onTitleInput: onTitleInput , value: value  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($baf545cd24be6d91$exports)).text,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("input", {
            className: (/*@__PURE__*/$parcel$interopDefault($baf545cd24be6d91$exports)).input,
            onChange: (e)=>onTitleInput(e.target.value)
            ,
            value: value
        })
    })
;











var $822b80487ac8f90a$exports = {};

$parcel$export($822b80487ac8f90a$exports, "button", () => $822b80487ac8f90a$export$2ba01fb71ed41cb6, (v) => $822b80487ac8f90a$export$2ba01fb71ed41cb6 = v);
var $822b80487ac8f90a$export$2ba01fb71ed41cb6;
$822b80487ac8f90a$export$2ba01fb71ed41cb6 = "style__button__1slKNm";


var $bbeeee79c4874bd1$export$2e2bcd8739ae039 = ({ children: children , className: className , onClick: onClick , disabled: disabled , loading: loading  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("button", {
        disabled: Boolean(disabled),
        className: ($parcel$interopDefault($klFNZ$classnames))(className, (/*@__PURE__*/$parcel$interopDefault($822b80487ac8f90a$exports)).button),
        onClick: onClick,
        children: loading ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx(($parcel$interopDefault($klFNZ$reactspinnersBeatLoader)), {
            color: "#969696"
        }) : children
    }));
};



var $37c7596f4739d6d0$exports = {};

$parcel$export($37c7596f4739d6d0$exports, "button", () => $37c7596f4739d6d0$export$2ba01fb71ed41cb6, (v) => $37c7596f4739d6d0$export$2ba01fb71ed41cb6 = v);
$parcel$export($37c7596f4739d6d0$exports, "primary", () => $37c7596f4739d6d0$export$9ad721cf3b3debe0, (v) => $37c7596f4739d6d0$export$9ad721cf3b3debe0 = v);
$parcel$export($37c7596f4739d6d0$exports, "secondary", () => $37c7596f4739d6d0$export$745c6f71a1e0e6f7, (v) => $37c7596f4739d6d0$export$745c6f71a1e0e6f7 = v);
var $37c7596f4739d6d0$export$2ba01fb71ed41cb6;
var $37c7596f4739d6d0$export$9ad721cf3b3debe0;
var $37c7596f4739d6d0$export$745c6f71a1e0e6f7;
$37c7596f4739d6d0$export$2ba01fb71ed41cb6 = "style__button__1un5HO";
$37c7596f4739d6d0$export$9ad721cf3b3debe0 = "style__primary__FyvT7t";
$37c7596f4739d6d0$export$745c6f71a1e0e6f7 = "style__secondary__3Xqiz2";


var $0beb78ce768a9f0a$export$2e2bcd8739ae039 = ({ children: children , primary: primary , secondary: secondary , onClick: onClick , disabled: disabled  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($bbeeee79c4874bd1$export$2e2bcd8739ae039, {
        disabled: disabled,
        onClick: onClick,
        className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($37c7596f4739d6d0$exports)).button, {
            [(/*@__PURE__*/$parcel$interopDefault($37c7596f4739d6d0$exports)).primary]: primary,
            [(/*@__PURE__*/$parcel$interopDefault($37c7596f4739d6d0$exports)).secondary]: secondary
        }),
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
            children: children
        })
    })
;


var $0d8deccf7164b919$exports = {};

$parcel$export($0d8deccf7164b919$exports, "buttons", () => $0d8deccf7164b919$export$bbea856fdb3e3c5f, (v) => $0d8deccf7164b919$export$bbea856fdb3e3c5f = v);
var $0d8deccf7164b919$export$bbea856fdb3e3c5f;
$0d8deccf7164b919$export$bbea856fdb3e3c5f = "style__buttons__15GA3h";


var $124b528c224b1f7a$export$2e2bcd8739ae039 = ({ select: select , combine: combine  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($0d8deccf7164b919$exports)).buttons,
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





var $904537df03669edd$exports = {};

$parcel$export($904537df03669edd$exports, "buttons", () => $904537df03669edd$export$bbea856fdb3e3c5f, (v) => $904537df03669edd$export$bbea856fdb3e3c5f = v);
var $904537df03669edd$export$bbea856fdb3e3c5f;
$904537df03669edd$export$bbea856fdb3e3c5f = "style__buttons__rT6de3";


var $ccf0ed2c8ac3a87d$export$2e2bcd8739ae039 = ({ readyToSave: readyToSave , save: save , cancel: cancel  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($904537df03669edd$exports)).buttons,
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


var $ad68109725054118$exports = {};

$parcel$export($ad68109725054118$exports, "userCount", () => $ad68109725054118$export$72bd514aa1799057, (v) => $ad68109725054118$export$72bd514aa1799057 = v);
var $ad68109725054118$export$72bd514aa1799057;
$ad68109725054118$export$72bd514aa1799057 = "style__userCount__R5_PS0";


var $1cfb7e9345b761a0$export$2e2bcd8739ae039 = ({ userCount: userCount  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($ad68109725054118$exports)).userCount,
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






var $88e441429d918842$exports = {};

$parcel$export($88e441429d918842$exports, "icon", () => $88e441429d918842$export$1ca1ec8b29a4ce27, (v) => $88e441429d918842$export$1ca1ec8b29a4ce27 = v);
var $88e441429d918842$export$1ca1ec8b29a4ce27;
$88e441429d918842$export$1ca1ec8b29a4ce27 = "style__icon__3Pq7pu";


var $3ac2dbca350b9e6f$export$2e2bcd8739ae039 = ({ color: color = '#bebebe' , deselect: deselect  })=>{
    const [icon, setIcon] = $klFNZ$react.useState($klFNZ$fortawesomefreesolidsvgicons.faCheckCircle);
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$fortawesomereactfontawesome.FontAwesomeIcon, {
        className: (/*@__PURE__*/$parcel$interopDefault($88e441429d918842$exports)).icon,
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





var $46946f6e0ce51c2e$exports = {};

$parcel$export($46946f6e0ce51c2e$exports, "title", () => $46946f6e0ce51c2e$export$fb184b623420d9be, (v) => $46946f6e0ce51c2e$export$fb184b623420d9be = v);
var $46946f6e0ce51c2e$export$fb184b623420d9be;
$46946f6e0ce51c2e$export$fb184b623420d9be = "style__title__3f9Nav";


var $ef0f4ddb49513b7b$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($46946f6e0ce51c2e$exports)).title,
        children: children
    })
;


var $2fc6dad47a55a697$exports = {};

$parcel$export($2fc6dad47a55a697$exports, "card", () => $2fc6dad47a55a697$export$aa3e815946b80764, (v) => $2fc6dad47a55a697$export$aa3e815946b80764 = v);
$parcel$export($2fc6dad47a55a697$exports, "leftSideContainer", () => $2fc6dad47a55a697$export$59b1d651044d302, (v) => $2fc6dad47a55a697$export$59b1d651044d302 = v);
var $2fc6dad47a55a697$export$aa3e815946b80764;
var $2fc6dad47a55a697$export$59b1d651044d302;
$2fc6dad47a55a697$export$aa3e815946b80764 = "style__card__3GICcq";
$2fc6dad47a55a697$export$59b1d651044d302 = "style__leftSideContainer__8mtpJy";


var $61e75dde1af98c77$export$2e2bcd8739ae039 = ({ name: name , userCount: userCount , selected: selected , color: color , save: save , toggleSelection: toggleSelection , combine: combine , readyToSave: readyToSave , cancel: cancel  })=>{
    const [newGroupTitle, setNewGroupTitle] = $klFNZ$react.useState('');
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("article", {
        className: (/*@__PURE__*/$parcel$interopDefault($2fc6dad47a55a697$exports)).card,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
                className: (/*@__PURE__*/$parcel$interopDefault($2fc6dad47a55a697$exports)).leftSideContainer,
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







var $a56e326dd4b6d89c$exports = {};

$parcel$export($a56e326dd4b6d89c$exports, "title", () => $a56e326dd4b6d89c$export$fb184b623420d9be, (v) => $a56e326dd4b6d89c$export$fb184b623420d9be = v);
var $a56e326dd4b6d89c$export$fb184b623420d9be;
$a56e326dd4b6d89c$export$fb184b623420d9be = "style__title__8SpOOk";


var $194a15bef69f42d6$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($a56e326dd4b6d89c$exports)).title,
        children: children
    })
;









var $340241a6f20fa029$exports = {};

$parcel$export($340241a6f20fa029$exports, "text", () => $340241a6f20fa029$export$6f093cfa640b7166, (v) => $340241a6f20fa029$export$6f093cfa640b7166 = v);
var $340241a6f20fa029$export$6f093cfa640b7166;
$340241a6f20fa029$export$6f093cfa640b7166 = "style__text__2k8gu1";


var $c08901f0816a98d4$export$2e2bcd8739ae039 = ({ children: children , style: style , className: className  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        style: style,
        className: ($parcel$interopDefault($klFNZ$classnames))(className, (/*@__PURE__*/$parcel$interopDefault($340241a6f20fa029$exports)).text),
        children: children
    })
;





var $389639f2a8480dce$exports = {};

$parcel$export($389639f2a8480dce$exports, "bars", () => $389639f2a8480dce$export$60912654947077e3, (v) => $389639f2a8480dce$export$60912654947077e3 = v);
$parcel$export($389639f2a8480dce$exports, "bar", () => $389639f2a8480dce$export$d927737047eb3867, (v) => $389639f2a8480dce$export$d927737047eb3867 = v);
$parcel$export($389639f2a8480dce$exports, "yesBar", () => $389639f2a8480dce$export$6a31b2d83bf3b7ff, (v) => $389639f2a8480dce$export$6a31b2d83bf3b7ff = v);
$parcel$export($389639f2a8480dce$exports, "noBar", () => $389639f2a8480dce$export$e2b71f7b582462e, (v) => $389639f2a8480dce$export$e2b71f7b582462e = v);
var $389639f2a8480dce$export$60912654947077e3;
var $389639f2a8480dce$export$d927737047eb3867;
var $389639f2a8480dce$export$6a31b2d83bf3b7ff;
var $389639f2a8480dce$export$e2b71f7b582462e;
$389639f2a8480dce$export$60912654947077e3 = "style__bars__LlyQwv";
$389639f2a8480dce$export$d927737047eb3867 = "style__bar__3zgX4d";
$389639f2a8480dce$export$6a31b2d83bf3b7ff = "style__yesBar__2ziebD";
$389639f2a8480dce$export$e2b71f7b582462e = "style__noBar__23uV5H";


var $ea0aac0946cf69ac$export$2e2bcd8739ae039 = ({ yes: yes , no: no , onHover: onHover , createNewGroup: createNewGroup  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($389639f2a8480dce$exports)).bars,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
                style: {
                    width: `${yes}%`
                },
                className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($389639f2a8480dce$exports)).bar, (/*@__PURE__*/$parcel$interopDefault($389639f2a8480dce$exports)).yesBar),
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
                className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($389639f2a8480dce$exports)).bar, (/*@__PURE__*/$parcel$interopDefault($389639f2a8480dce$exports)).noBar),
                onMouseEnter: ()=>onHover('no')
                ,
                onMouseLeave: ()=>onHover()
                ,
                onClick: ()=>createNewGroup('no')
            })
        ]
    }));
};


var $378b420f84c8008e$exports = {};

$parcel$export($378b420f84c8008e$exports, "stats", () => $378b420f84c8008e$export$7804429c45dff272, (v) => $378b420f84c8008e$export$7804429c45dff272 = v);
$parcel$export($378b420f84c8008e$exports, "textContainer", () => $378b420f84c8008e$export$2cedfd664bb3bd01, (v) => $378b420f84c8008e$export$2cedfd664bb3bd01 = v);
$parcel$export($378b420f84c8008e$exports, "text", () => $378b420f84c8008e$export$6f093cfa640b7166, (v) => $378b420f84c8008e$export$6f093cfa640b7166 = v);
var $378b420f84c8008e$export$7804429c45dff272;
var $378b420f84c8008e$export$2cedfd664bb3bd01;
var $378b420f84c8008e$export$6f093cfa640b7166;
$378b420f84c8008e$export$7804429c45dff272 = "style__stats__3HtL2c";
$378b420f84c8008e$export$2cedfd664bb3bd01 = "style__textContainer__10azLR";
$378b420f84c8008e$export$6f093cfa640b7166 = "style__text__3r7kpQ";


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
        className: (/*@__PURE__*/$parcel$interopDefault($378b420f84c8008e$exports)).stats,
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
                        className: (/*@__PURE__*/$parcel$interopDefault($378b420f84c8008e$exports)).textContainer,
                        children: [
                            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($c08901f0816a98d4$export$2e2bcd8739ae039, {
                                className: (/*@__PURE__*/$parcel$interopDefault($378b420f84c8008e$exports)).text,
                                style: {
                                    width: `${yesPercentage}%`
                                },
                                children: [
                                    yesPercentage,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($c08901f0816a98d4$export$2e2bcd8739ae039, {
                                className: (/*@__PURE__*/$parcel$interopDefault($378b420f84c8008e$exports)).text,
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







var $8b3dfc43b771ba76$exports = {};

$parcel$export($8b3dfc43b771ba76$exports, "text", () => $8b3dfc43b771ba76$export$6f093cfa640b7166, (v) => $8b3dfc43b771ba76$export$6f093cfa640b7166 = v);
$parcel$export($8b3dfc43b771ba76$exports, "yes", () => $8b3dfc43b771ba76$export$7a668e70ea2210d9, (v) => $8b3dfc43b771ba76$export$7a668e70ea2210d9 = v);
$parcel$export($8b3dfc43b771ba76$exports, "no", () => $8b3dfc43b771ba76$export$401451a107dc42ce, (v) => $8b3dfc43b771ba76$export$401451a107dc42ce = v);
var $8b3dfc43b771ba76$export$6f093cfa640b7166;
var $8b3dfc43b771ba76$export$7a668e70ea2210d9;
var $8b3dfc43b771ba76$export$401451a107dc42ce;
$8b3dfc43b771ba76$export$6f093cfa640b7166 = "style__text__jBVfXn";
$8b3dfc43b771ba76$export$7a668e70ea2210d9 = "style__yes__1sM0pG";
$8b3dfc43b771ba76$export$401451a107dc42ce = "style__no__8WZwRt";


var $daeacf9d8b98618b$export$2e2bcd8739ae039 = ({ answer: answer  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($8b3dfc43b771ba76$exports)).text,
        children: [
            "Your answer:",
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                children: ' '
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($8b3dfc43b771ba76$exports)).text, {
                    [(/*@__PURE__*/$parcel$interopDefault($8b3dfc43b771ba76$exports)).yes]: answer.toLowerCase() === 'yes',
                    [(/*@__PURE__*/$parcel$interopDefault($8b3dfc43b771ba76$exports)).no]: answer.toLowerCase() === 'no'
                }),
                children: $klFNZ$lodash.capitalize(answer)
            })
        ]
    })
;








var $49ae03d4bf36f5da$exports = {};

$parcel$export($49ae03d4bf36f5da$exports, "button", () => $49ae03d4bf36f5da$export$2ba01fb71ed41cb6, (v) => $49ae03d4bf36f5da$export$2ba01fb71ed41cb6 = v);
$parcel$export($49ae03d4bf36f5da$exports, "yes", () => $49ae03d4bf36f5da$export$7a668e70ea2210d9, (v) => $49ae03d4bf36f5da$export$7a668e70ea2210d9 = v);
$parcel$export($49ae03d4bf36f5da$exports, "no", () => $49ae03d4bf36f5da$export$401451a107dc42ce, (v) => $49ae03d4bf36f5da$export$401451a107dc42ce = v);
var $49ae03d4bf36f5da$export$2ba01fb71ed41cb6;
var $49ae03d4bf36f5da$export$7a668e70ea2210d9;
var $49ae03d4bf36f5da$export$401451a107dc42ce;
$49ae03d4bf36f5da$export$2ba01fb71ed41cb6 = "style__button__1fN5w9";
$49ae03d4bf36f5da$export$7a668e70ea2210d9 = "style__yes__2fIEJv";
$49ae03d4bf36f5da$export$401451a107dc42ce = "style__no__5U6bkK";


var $3164c83b2ba22f63$export$2e2bcd8739ae039 = ({ answer: answer , respond: respond  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("button", {
        className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($49ae03d4bf36f5da$exports)).button, {
            [(/*@__PURE__*/$parcel$interopDefault($49ae03d4bf36f5da$exports)).yes]: answer.toLowerCase() === 'yes',
            [(/*@__PURE__*/$parcel$interopDefault($49ae03d4bf36f5da$exports)).no]: answer.toLowerCase() === 'no'
        }),
        onClick: respond,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
            children: answer
        })
    }));
};


var $c483756bbc24227b$exports = {};

$parcel$export($c483756bbc24227b$exports, "answerButtons", () => $c483756bbc24227b$export$33b0e16035b753e, (v) => $c483756bbc24227b$export$33b0e16035b753e = v);
var $c483756bbc24227b$export$33b0e16035b753e;
$c483756bbc24227b$export$33b0e16035b753e = "style__answerButtons__25_AeN";


var $9ad36611c1075068$export$2e2bcd8739ae039 = ({ respond: respond  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($c483756bbc24227b$exports)).answerButtons,
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



var $9eb4ade9f8f1fe3d$exports = {};

$parcel$export($9eb4ade9f8f1fe3d$exports, "card", () => $9eb4ade9f8f1fe3d$export$aa3e815946b80764, (v) => $9eb4ade9f8f1fe3d$export$aa3e815946b80764 = v);
$parcel$export($9eb4ade9f8f1fe3d$exports, "hint", () => $9eb4ade9f8f1fe3d$export$464c821cd4347539, (v) => $9eb4ade9f8f1fe3d$export$464c821cd4347539 = v);
var $9eb4ade9f8f1fe3d$export$aa3e815946b80764;
var $9eb4ade9f8f1fe3d$export$464c821cd4347539;
$9eb4ade9f8f1fe3d$export$aa3e815946b80764 = "style__card__2rKmvz";
$9eb4ade9f8f1fe3d$export$464c821cd4347539 = "style__hint__FjdNMS";


var $df71309407d515a9$export$2e2bcd8739ae039 = ({ yourOwnQuestion: yourOwnQuestion , name: name , answersCount: answersCount , currentUserAnswer: answer , respond: respond , createNewGroup: createNewGroup  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("article", {
        className: (/*@__PURE__*/$parcel$interopDefault($9eb4ade9f8f1fe3d$exports)).card,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($194a15bef69f42d6$export$2e2bcd8739ae039, {
                children: name
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($57a54752ed551bc0$export$2e2bcd8739ae039, {
                ...answersCount,
                createNewGroup: createNewGroup
            }),
            yourOwnQuestion ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($9eb4ade9f8f1fe3d$exports)).hint,
                children: "You cannot answer your own question"
            }) : answer ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($daeacf9d8b98618b$export$2e2bcd8739ae039, {
                answer: answer
            }) : /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($9ad36611c1075068$export$2e2bcd8739ae039, {
                respond: respond
            })
        ]
    }));
};







var $2e1240b63b3afdab$exports = {};

$parcel$export($2e1240b63b3afdab$exports, "textarea", () => $2e1240b63b3afdab$export$a3574df893ffa88d, (v) => $2e1240b63b3afdab$export$a3574df893ffa88d = v);
$parcel$export($2e1240b63b3afdab$exports, "text", () => $2e1240b63b3afdab$export$6f093cfa640b7166, (v) => $2e1240b63b3afdab$export$6f093cfa640b7166 = v);
var $2e1240b63b3afdab$export$a3574df893ffa88d;
var $2e1240b63b3afdab$export$6f093cfa640b7166;
$2e1240b63b3afdab$export$a3574df893ffa88d = "style__textarea__1T00ud";
$2e1240b63b3afdab$export$6f093cfa640b7166 = "style__text__348HQ6";


var $ea01694ccbc54f0e$export$2e2bcd8739ae039 = ({ onChange: onChange , value: value  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($2e1240b63b3afdab$exports)).text,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("textarea", {
            placeholder: "Type your question here...",
            className: (/*@__PURE__*/$parcel$interopDefault($2e1240b63b3afdab$exports)).textarea,
            onChange: onChange,
            value: value
        })
    })
;


var $d815052f679a24bd$exports = {};

$parcel$export($d815052f679a24bd$exports, "newQuestion", () => $d815052f679a24bd$export$9ad540bb5fc131aa, (v) => $d815052f679a24bd$export$9ad540bb5fc131aa = v);
var $d815052f679a24bd$export$9ad540bb5fc131aa;
$d815052f679a24bd$export$9ad540bb5fc131aa = "style__newQuestion__1XmxtO";


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
        className: (/*@__PURE__*/$parcel$interopDefault($d815052f679a24bd$exports)).newQuestion,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($ea01694ccbc54f0e$export$2e2bcd8739ae039, {
            value: question,
            onChange: onChange
        })
    }));
};








var $9fcb8f904d85e247$exports = {};

$parcel$export($9fcb8f904d85e247$exports, "container", () => $9fcb8f904d85e247$export$34e0f9847d4c02dd, (v) => $9fcb8f904d85e247$export$34e0f9847d4c02dd = v);
var $9fcb8f904d85e247$export$34e0f9847d4c02dd;
$9fcb8f904d85e247$export$34e0f9847d4c02dd = "style__container__1L8x_J";


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
        className: (/*@__PURE__*/$parcel$interopDefault($9fcb8f904d85e247$exports)).container,
        children: children
    }));
};
const $346d3c9e2eaf59bb$export$97295e60e7f371e1 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("main", {
        className: (/*@__PURE__*/$parcel$interopDefault($9fcb8f904d85e247$exports)).container,
        children: children
    })
;


var $719dc0cfcd05f2c6$exports = {};

$parcel$export($719dc0cfcd05f2c6$exports, "body", () => $719dc0cfcd05f2c6$export$32180ef41b15b513, (v) => $719dc0cfcd05f2c6$export$32180ef41b15b513 = v);
var $719dc0cfcd05f2c6$export$32180ef41b15b513;
$719dc0cfcd05f2c6$export$32180ef41b15b513 = "style__body__1gUc8D";


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
            className: (/*@__PURE__*/$parcel$interopDefault($719dc0cfcd05f2c6$exports)).body,
            children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($346d3c9e2eaf59bb$export$2e2bcd8739ae039, {
                children: children
            })
        })
    }));
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        style: {
            height: mainScreen ? '100%' : 'auto'
        },
        className: (/*@__PURE__*/$parcel$interopDefault($719dc0cfcd05f2c6$exports)).body,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($346d3c9e2eaf59bb$export$97295e60e7f371e1, {
            children: children
        })
    }));
};





var $6a4fad94e7edd529$exports = {};

$parcel$export($6a4fad94e7edd529$exports, "groupContainer", () => $6a4fad94e7edd529$export$f36792cb9bd81925, (v) => $6a4fad94e7edd529$export$f36792cb9bd81925 = v);
var $6a4fad94e7edd529$export$f36792cb9bd81925;
$6a4fad94e7edd529$export$f36792cb9bd81925 = "style__groupContainer__1CkDrB";


var $4df27299f125c82f$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($6a4fad94e7edd529$exports)).groupContainer,
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








var $c68ad62351c0323c$exports = {};

$parcel$export($c68ad62351c0323c$exports, "title", () => $c68ad62351c0323c$export$fb184b623420d9be, (v) => $c68ad62351c0323c$export$fb184b623420d9be = v);
$parcel$export($c68ad62351c0323c$exports, "secondary", () => $c68ad62351c0323c$export$745c6f71a1e0e6f7, (v) => $c68ad62351c0323c$export$745c6f71a1e0e6f7 = v);
var $c68ad62351c0323c$export$fb184b623420d9be;
var $c68ad62351c0323c$export$745c6f71a1e0e6f7;
$c68ad62351c0323c$export$fb184b623420d9be = "style__title__36TKr-";
$c68ad62351c0323c$export$745c6f71a1e0e6f7 = "style__secondary__2eIokH";


var $67920020b20febf4$export$2e2bcd8739ae039 = ({ children: children , className: className , color: color  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("h1", {
        style: {
            color: color
        },
        className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($c68ad62351c0323c$exports)).title, className),
        children: children
    })
;




var $66b6507a0fec1e4d$exports = {};

$parcel$export($66b6507a0fec1e4d$exports, "container", () => $66b6507a0fec1e4d$export$34e0f9847d4c02dd, (v) => $66b6507a0fec1e4d$export$34e0f9847d4c02dd = v);
var $66b6507a0fec1e4d$export$34e0f9847d4c02dd;
$66b6507a0fec1e4d$export$34e0f9847d4c02dd = "style__container__1d6MQu";


var $1ea2ee3bd8693617$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($66b6507a0fec1e4d$exports)).container,
        children: children
    })
;


var $e8cc94f29213afb4$exports = {};

$parcel$export($e8cc94f29213afb4$exports, "mainScreen", () => $e8cc94f29213afb4$export$e962ae2959462fd2, (v) => $e8cc94f29213afb4$export$e962ae2959462fd2 = v);
var $e8cc94f29213afb4$export$e962ae2959462fd2;
$e8cc94f29213afb4$export$e962ae2959462fd2 = "style__mainScreen__2CxoRS";



var $518716977d13fe13$export$2e2bcd8739ae039 = ({ children: children , style: style  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("section", {
        style: style,
        className: (/*@__PURE__*/$parcel$interopDefault($e8cc94f29213afb4$exports)).mainScreen,
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





var $a591e7a9805c0de7$exports = {};

$parcel$export($a591e7a9805c0de7$exports, "sidebar", () => $a591e7a9805c0de7$export$6fbb9cd2843e91b2, (v) => $a591e7a9805c0de7$export$6fbb9cd2843e91b2 = v);
$parcel$export($a591e7a9805c0de7$exports, "title", () => $a591e7a9805c0de7$export$fb184b623420d9be, (v) => $a591e7a9805c0de7$export$fb184b623420d9be = v);
var $a591e7a9805c0de7$export$6fbb9cd2843e91b2;
var $a591e7a9805c0de7$export$fb184b623420d9be;
$a591e7a9805c0de7$export$6fbb9cd2843e91b2 = "style__sidebar__-TfDI3";
$a591e7a9805c0de7$export$fb184b623420d9be = "style__title__3HQRMO";


var $f7e695decee1351a$export$2e2bcd8739ae039 = ({ children: children , title: title , style: style  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        style: style,
        className: (/*@__PURE__*/$parcel$interopDefault($a591e7a9805c0de7$exports)).sidebar,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($67920020b20febf4$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($a591e7a9805c0de7$exports)).title,
                color: "#b1b8c7",
                children: title
            }),
            children
        ]
    })
;







var $64ab8800f570d34b$exports = {};

$parcel$export($64ab8800f570d34b$exports, "title", () => $64ab8800f570d34b$export$fb184b623420d9be, (v) => $64ab8800f570d34b$export$fb184b623420d9be = v);
var $64ab8800f570d34b$export$fb184b623420d9be;
$64ab8800f570d34b$export$fb184b623420d9be = "style__title__36gfBx";


var $87d20942e8dd7c23$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("h2", {
        className: (/*@__PURE__*/$parcel$interopDefault($64ab8800f570d34b$exports)).title,
        children: children
    })
;


var $59ab44be5b3f1f38$exports = {};

$parcel$export($59ab44be5b3f1f38$exports, "cardsRow", () => $59ab44be5b3f1f38$export$3ffd594349b5aa88, (v) => $59ab44be5b3f1f38$export$3ffd594349b5aa88 = v);
$parcel$export($59ab44be5b3f1f38$exports, "scrollContainer", () => $59ab44be5b3f1f38$export$fad3c8302a7540c6, (v) => $59ab44be5b3f1f38$export$fad3c8302a7540c6 = v);
var $59ab44be5b3f1f38$export$3ffd594349b5aa88;
var $59ab44be5b3f1f38$export$fad3c8302a7540c6;
$59ab44be5b3f1f38$export$3ffd594349b5aa88 = "style__cardsRow__3a_Evk";
$59ab44be5b3f1f38$export$fad3c8302a7540c6 = "style__scrollContainer__3FTwv4";


var $55eb28eb8f26523e$export$2e2bcd8739ae039 = ({ title: title , children: children  })=>{
    return(/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($59ab44be5b3f1f38$exports)).cardsRow,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($87d20942e8dd7c23$export$2e2bcd8739ae039, {
                children: title
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$reactcustomscrollbars.Scrollbars, {
                autoHide: true,
                className: (/*@__PURE__*/$parcel$interopDefault($59ab44be5b3f1f38$exports)).scrollContainer,
                children: children
            })
        ]
    }));
};







var $a6e8af150c8089d5$exports = {};

$parcel$export($a6e8af150c8089d5$exports, "containersContainer", () => $a6e8af150c8089d5$export$6eb0125b0ff89eda, (v) => $a6e8af150c8089d5$export$6eb0125b0ff89eda = v);
$parcel$export($a6e8af150c8089d5$exports, "container", () => $a6e8af150c8089d5$export$34e0f9847d4c02dd, (v) => $a6e8af150c8089d5$export$34e0f9847d4c02dd = v);
$parcel$export($a6e8af150c8089d5$exports, "header", () => $a6e8af150c8089d5$export$38e42c68cf43b5d4, (v) => $a6e8af150c8089d5$export$38e42c68cf43b5d4 = v);
$parcel$export($a6e8af150c8089d5$exports, "signUp", () => $a6e8af150c8089d5$export$cf64224bcd829024, (v) => $a6e8af150c8089d5$export$cf64224bcd829024 = v);
$parcel$export($a6e8af150c8089d5$exports, "signIn", () => $a6e8af150c8089d5$export$9670d83f11d4b64a, (v) => $a6e8af150c8089d5$export$9670d83f11d4b64a = v);
$parcel$export($a6e8af150c8089d5$exports, "active", () => $a6e8af150c8089d5$export$89da14300d534261, (v) => $a6e8af150c8089d5$export$89da14300d534261 = v);
$parcel$export($a6e8af150c8089d5$exports, "input", () => $a6e8af150c8089d5$export$b7e3ae3d7c15e42e, (v) => $a6e8af150c8089d5$export$b7e3ae3d7c15e42e = v);
$parcel$export($a6e8af150c8089d5$exports, "lastInput", () => $a6e8af150c8089d5$export$20b74936b6634d41, (v) => $a6e8af150c8089d5$export$20b74936b6634d41 = v);
$parcel$export($a6e8af150c8089d5$exports, "button", () => $a6e8af150c8089d5$export$2ba01fb71ed41cb6, (v) => $a6e8af150c8089d5$export$2ba01fb71ed41cb6 = v);
var $a6e8af150c8089d5$export$6eb0125b0ff89eda;
var $a6e8af150c8089d5$export$34e0f9847d4c02dd;
var $a6e8af150c8089d5$export$38e42c68cf43b5d4;
var $a6e8af150c8089d5$export$cf64224bcd829024;
var $a6e8af150c8089d5$export$9670d83f11d4b64a;
var $a6e8af150c8089d5$export$89da14300d534261;
var $a6e8af150c8089d5$export$b7e3ae3d7c15e42e;
var $a6e8af150c8089d5$export$20b74936b6634d41;
var $a6e8af150c8089d5$export$2ba01fb71ed41cb6;
$a6e8af150c8089d5$export$6eb0125b0ff89eda = "style__containersContainer__3BpyL9";
$a6e8af150c8089d5$export$34e0f9847d4c02dd = "style__container__3rHhE0";
$a6e8af150c8089d5$export$38e42c68cf43b5d4 = "style__header__2YVhBu";
$a6e8af150c8089d5$export$cf64224bcd829024 = "style__signUp__2k2SRB";
$a6e8af150c8089d5$export$9670d83f11d4b64a = "style__signIn__yt7DQT";
$a6e8af150c8089d5$export$89da14300d534261 = "style__active__2g0yi_";
$a6e8af150c8089d5$export$b7e3ae3d7c15e42e = "style__input__1N8coV";
$a6e8af150c8089d5$export$20b74936b6634d41 = "style__lastInput__3bZdx9";
$a6e8af150c8089d5$export$2ba01fb71ed41cb6 = "style__button__WAt39_";



var $9704f6ac55d5def2$export$5279d79106c47224;
$9704f6ac55d5def2$export$5279d79106c47224 = "style__PhoneInputInput__wKyRu7";


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
        className: (/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).containersContainer,
        children: /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
            className: (/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).container,
            children: [
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
                    className: (/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).header,
                    children: [
                        /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                            className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).signUp, {
                                [(/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).active]: selectedTab === 'signUp'
                            }),
                            onClick: ()=>setSelectedTab('signUp')
                            ,
                            children: "Sign Up"
                        }),
                        /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("span", {
                            className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).signIn, {
                                [(/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).active]: selectedTab === 'signIn'
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
                    className: (/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).input
                }),
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("input", {
                    type: "password",
                    value: password,
                    onChange: onFieldChange,
                    placeholder: "password",
                    name: "password",
                    className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).input, {
                        [(/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).lastInput]: selectedTab === 'signIn'
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
                    className: ($parcel$interopDefault($klFNZ$classnames))((/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).input, {
                        [(/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).lastInput]: !showVerification
                    })
                }) : null,
                selectedTab === 'signUp' && showVerification ? /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx("input", {
                    value: verificationCode,
                    onChange: onFieldChange,
                    placeholder: "verification code",
                    name: "verificationCode",
                    className: (/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).input
                }) : null,
                /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($bbeeee79c4874bd1$export$2e2bcd8739ae039, {
                    loading: loading,
                    className: (/*@__PURE__*/$parcel$interopDefault($a6e8af150c8089d5$exports)).button,
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







var $64e6e765d4de7464$exports = {};

$parcel$export($64e6e765d4de7464$exports, "container", () => $64e6e765d4de7464$export$34e0f9847d4c02dd, (v) => $64e6e765d4de7464$export$34e0f9847d4c02dd = v);
$parcel$export($64e6e765d4de7464$exports, "icon", () => $64e6e765d4de7464$export$1ca1ec8b29a4ce27, (v) => $64e6e765d4de7464$export$1ca1ec8b29a4ce27 = v);
$parcel$export($64e6e765d4de7464$exports, "username", () => $64e6e765d4de7464$export$5e1be761f603d585, (v) => $64e6e765d4de7464$export$5e1be761f603d585 = v);
var $64e6e765d4de7464$export$34e0f9847d4c02dd;
var $64e6e765d4de7464$export$1ca1ec8b29a4ce27;
var $64e6e765d4de7464$export$5e1be761f603d585;
$64e6e765d4de7464$export$34e0f9847d4c02dd = "style__container__3rJXPi";
$64e6e765d4de7464$export$1ca1ec8b29a4ce27 = "style__icon__1wqq6p";
$64e6e765d4de7464$export$5e1be761f603d585 = "style__username__2Yp4VR";


var $8cf07228007ba6cc$export$2e2bcd8739ae039 = ({ logout: logout , username: username  })=>/*#__PURE__*/ $klFNZ$reactjsxruntime.jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($64e6e765d4de7464$exports)).container,
        children: [
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($6b1bd0c54623bfc1$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($64e6e765d4de7464$exports)).username,
                children: username
            }),
            /*#__PURE__*/ $klFNZ$reactjsxruntime.jsx($klFNZ$fortawesomereactfontawesome.FontAwesomeIcon, {
                className: (/*@__PURE__*/$parcel$interopDefault($64e6e765d4de7464$exports)).icon,
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
