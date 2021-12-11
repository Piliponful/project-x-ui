import "./main.css";
import {jsxs as $cDsoM$jsxs, jsx as $cDsoM$jsx, Fragment as $cDsoM$Fragment} from "react/jsx-runtime";
import $cDsoM$react, {useEffect as $cDsoM$useEffect, useState as $cDsoM$useState, useContext as $cDsoM$useContext} from "react";
import $cDsoM$snapsvgcjs from "snapsvg-cjs";
import {isEqual as $cDsoM$isEqual, capitalize as $cDsoM$capitalize} from "lodash";
import $cDsoM$classnames from "classnames";
import $cDsoM$reactspinnersBeatLoader from "react-spinners/BeatLoader";
import {FontAwesomeIcon as $cDsoM$FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle as $cDsoM$faCheckCircle, faTimesCircle as $cDsoM$faTimesCircle, faSignOutAlt as $cDsoM$faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {useSwipeable as $cDsoM$useSwipeable} from "react-swipeable";
import {Scrollbars as $cDsoM$Scrollbars} from "react-custom-scrollbars";
import $cDsoM$reactmedia from "react-media";
import "react-phone-number-input/style.css";
import $cDsoM$reactphonenumberinput, {isValidPhoneNumber as $cDsoM$isValidPhoneNumber} from "react-phone-number-input";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}









var $4734d67109e58335$exports = {};

$parcel$export($4734d67109e58335$exports, "text", () => $4734d67109e58335$export$6f093cfa640b7166, (v) => $4734d67109e58335$export$6f093cfa640b7166 = v);
var $4734d67109e58335$export$6f093cfa640b7166;
$4734d67109e58335$export$6f093cfa640b7166 = "_text_3b2a0f";


var $f6c8598b6b40d0a7$export$2e2bcd8739ae039 = ({ children: children , className: className , style: style  })=>/*#__PURE__*/ $cDsoM$jsx("span", {
        style: style,
        className: $cDsoM$classnames(className, (/*@__PURE__*/$parcel$interopDefault($4734d67109e58335$exports)).text),
        children: children
    })
;


var $30f309873b7baecc$exports = {};

$parcel$export($30f309873b7baecc$exports, "hint", () => $30f309873b7baecc$export$464c821cd4347539, (v) => $30f309873b7baecc$export$464c821cd4347539 = v);
var $30f309873b7baecc$export$464c821cd4347539;
$30f309873b7baecc$export$464c821cd4347539 = "_hint_eb2471";


var $70cbb385688f2d52$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups , selectedCircleParts: selectedCircleParts  })=>{
    const lengthToHint = {
        1: '(select another group to continue)',
        2: '(click on area to select what goes to new group)'
    };
    return(/*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($30f309873b7baecc$exports)).hint,
        children: selectedCircleParts.length === 1 ? '(click on selected area again to deselect)' : lengthToHint[selectedGroups.length]
    }));
};


var $85525e85d6917841$exports = {};

$parcel$export($85525e85d6917841$exports, "circlesContainer", () => $85525e85d6917841$export$293c75fa7ed5ee8d, (v) => $85525e85d6917841$export$293c75fa7ed5ee8d = v);
$parcel$export($85525e85d6917841$exports, "circles", () => $85525e85d6917841$export$c958aa0cc90a067, (v) => $85525e85d6917841$export$c958aa0cc90a067 = v);
var $85525e85d6917841$export$293c75fa7ed5ee8d;
var $85525e85d6917841$export$c958aa0cc90a067;
$85525e85d6917841$export$293c75fa7ed5ee8d = "_circlesContainer_266008";
$85525e85d6917841$export$c958aa0cc90a067 = "_circles_266008";




var $e0360a83f4f71397$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ $cDsoM$jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ $cDsoM$jsx("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24b42",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $cDsoM$jsx("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#4db3e6",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $cDsoM$jsxs("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ $cDsoM$jsx("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#d24b42",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ $cDsoM$jsx("path", {
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




var $8b628673d6bb8108$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ $cDsoM$jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 377.85394 219.81177",
        width: "100%",
        height: "100%",
        children: [
            /*#__PURE__*/ $cDsoM$jsx("path", {
                id: "left-wing",
                d: "M157.8764,110.04071a108.01882,108.01882,0,0,1,32.07306-76.86078,110.209,110.209,0,0,0-77.927-32.0451c-60.75128,0-110,48.75885-110,108.90588,0,60.1471,49.24872,108.90588,110,108.90588a110.20871,110.20871,0,0,0,77.927-32.045A108.019,108.019,0,0,1,157.8764,110.04071Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#3eb5f1",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $cDsoM$jsx("path", {
                id: "right-wing",
                d: "M267.8764,1.13483a110.20887,110.20887,0,0,0-77.92694,32.0451,108.13241,108.13241,0,0,1,0,153.72162,110.20857,110.20857,0,0,0,77.92694,32.045c60.75135,0,110-48.75878,110-108.90588C377.8764,49.89368,328.62775,1.13483,267.8764,1.13483Z",
                transform: "translate(-1.02246 -0.13483)",
                fill: "#91288d",
                fillOpacity: "0",
                stroke: "#d24a43",
                strokeMiterlimit: "10",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ $cDsoM$jsxs("g", {
                id: "intersection",
                fill: "#91288d",
                fillOpacity: "0",
                children: [
                    /*#__PURE__*/ $cDsoM$jsx("path", {
                        d: "M189.96088,186.916c.29528-.30063.70727-.7223,1.19571-1.22967.63766-.6624,1.6694-1.7342,2.81723-2.99845.53405-.58822,1.85218-2.05408,3.472-4.02832,1.21063-1.47554,2.22522-2.79072,3.02739-3.863,1.38114-1.84625,2.51506-3.48369,3.39016-4.795,1.09148-1.6355,1.99727-3.08864,2.70647-4.26634,1.75426-2.91313,3.07616-5.42052,3.95532-7.16676,1.986-3.9448,3.39559-7.34818,4.32489-9.76352,1.10782-2.87935,1.95262-5.44486,2.59018-7.55928.78417-2.60068,1.62964-5.762,2.37618-9.39716a107.94877,107.94877,0,0,0,1.65948-10.88418c.16235-1.61169.37251-4.06178.47853-7.06206.12636-3.57594.06128-6.70283-.06428-9.24687-.17836-3.61352-.50557-6.59409-.77306-8.65116-.34532-2.65554-.736-4.886-1.05427-6.53432-.45026-2.33159-.92141-4.35606-1.33832-6.00218-.4146-1.637-.91707-3.45847-1.527-5.4258-.62886-2.02849-1.441-4.4349-2.48-7.10783-.8005-2.05941-1.90873-4.72232-3.37567-7.76437-1.05009-2.17765-2.5478-5.09663-4.53927-8.43518-.82932-1.39028-1.99625-3.27576-3.48015-5.45719-1.26551-1.86037-2.97829-4.2546-5.1375-6.94449-1.43652-1.7896-3.14374-3.80111-5.13371-5.94544L191.365,34.60941,190,33.22708",
                        transform: "translate(-1.02246 -0.13483)",
                        stroke: "#3eb5f1",
                        strokeMiterlimit: "10",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ $cDsoM$jsx("path", {
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




var $a2fa4cba8cbdacb4$export$2e2bcd8739ae039 = ()=>{
    return(/*#__PURE__*/ $cDsoM$jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ $cDsoM$jsx("ellipse", {
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




var $a980a69aef80c08b$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ $cDsoM$jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 222 219.8118",
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ $cDsoM$jsx("ellipse", {
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


const $e56b9acf7d4b32d6$var$circlePartsToCompositionType = (circleParts)=>{
    if ($cDsoM$isEqual(circleParts, [
        'intersection'
    ])) return 'intersection';
    if ($cDsoM$isEqual(circleParts, [
        'leftWing'
    ])) return 'difference';
    if ($cDsoM$isEqual(circleParts, [
        'rightWing'
    ])) return 'difference';
    if ($cDsoM$isEqual(circleParts, [
        'leftWing',
        'intersection',
        'rightWing'
    ])) return 'union';
    return null;
};
const $e56b9acf7d4b32d6$var$isAllowedToClick = (element, partName)=>{
    const isElementSelected = element.attr('fillOpacity') === '1';
    if (isElementSelected) return true;
    return $e56b9acf7d4b32d6$var$circlePartsToCompositionType([
        ...$e56b9acf7d4b32d6$var$selectedParts,
        partName
    ]);
};
const $e56b9acf7d4b32d6$var$setCursorStyle = (element, partName)=>{
    const allowedToClick = $e56b9acf7d4b32d6$var$isAllowedToClick(element, partName);
    const newStyle = allowedToClick ? 'pointer' : 'not-allowed';
    element.attr({
        cursor: newStyle
    });
};
let $e56b9acf7d4b32d6$var$selectedParts = [];
var $e56b9acf7d4b32d6$export$2e2bcd8739ae039 = ({ selectedGroups: selectedGroups , handleCompositionTypeChange: handleCompositionTypeChange  })=>{
    const changeOpacity = (element1, partName1, parts)=>{
        if (!$e56b9acf7d4b32d6$var$isAllowedToClick(element1, partName1)) return;
        const isElementSelected = element1.attr('fillOpacity') === '1';
        element1.attr({
            'fillOpacity': isElementSelected ? '0' : '1'
        });
        const newSelectedParts = isElementSelected ? $e56b9acf7d4b32d6$var$selectedParts.filter((i)=>i !== partName1
        ) : [
            ...$e56b9acf7d4b32d6$var$selectedParts,
            partName1
        ];
        const newCompositionType = $e56b9acf7d4b32d6$var$circlePartsToCompositionType(newSelectedParts);
        $e56b9acf7d4b32d6$var$selectedParts = newSelectedParts;
        Object.entries(parts).forEach(([partName, element])=>$e56b9acf7d4b32d6$var$setCursorStyle(element, partName)
        );
        handleCompositionTypeChange(newCompositionType);
    };
    $cDsoM$useEffect(()=>{
        if (selectedGroups.length !== 2) return;
        const intersection = $cDsoM$snapsvgcjs('#intersection');
        const rightWing = $cDsoM$snapsvgcjs('#right-wing');
        const leftWing = $cDsoM$snapsvgcjs('#left-wing');
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
    return(/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($85525e85d6917841$exports)).circles,
        children: [
            /*#__PURE__*/ $cDsoM$jsx("div", {
                className: (/*@__PURE__*/$parcel$interopDefault($85525e85d6917841$exports)).circlesContainer,
                children: selectedGroups.length === 1 ? selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ $cDsoM$jsx($a980a69aef80c08b$export$2e2bcd8739ae039, {
                }) : /*#__PURE__*/ $cDsoM$jsx($a2fa4cba8cbdacb4$export$2e2bcd8739ae039, {
                }) : selectedGroups[0].color === '#3eb5f1' ? /*#__PURE__*/ $cDsoM$jsx($8b628673d6bb8108$export$2e2bcd8739ae039, {
                    style: {
                        cursor: 'pointer'
                    }
                }) : /*#__PURE__*/ $cDsoM$jsx($e0360a83f4f71397$export$2e2bcd8739ae039, {
                    style: {
                        cursor: 'pointer'
                    }
                })
            }),
            /*#__PURE__*/ $cDsoM$jsx($70cbb385688f2d52$export$2e2bcd8739ae039, {
                selectedGroups: selectedGroups,
                selectedCircleParts: $e56b9acf7d4b32d6$var$selectedParts
            })
        ]
    }));
};







var $e051a142228c8465$exports = {};

$parcel$export($e051a142228c8465$exports, "input", () => $e051a142228c8465$export$b7e3ae3d7c15e42e, (v) => $e051a142228c8465$export$b7e3ae3d7c15e42e = v);
$parcel$export($e051a142228c8465$exports, "text", () => $e051a142228c8465$export$6f093cfa640b7166, (v) => $e051a142228c8465$export$6f093cfa640b7166 = v);
var $e051a142228c8465$export$b7e3ae3d7c15e42e;
var $e051a142228c8465$export$6f093cfa640b7166;
$e051a142228c8465$export$b7e3ae3d7c15e42e = "_input_bd52b2";
$e051a142228c8465$export$6f093cfa640b7166 = "_text_bd52b2";


var $200335818cdff514$export$2e2bcd8739ae039 = ({ onTitleInput: onTitleInput , value: value  })=>/*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($e051a142228c8465$exports)).text,
        children: /*#__PURE__*/ $cDsoM$jsx("input", {
            className: (/*@__PURE__*/$parcel$interopDefault($e051a142228c8465$exports)).input,
            onChange: (e)=>onTitleInput(e.target.value)
            ,
            value: value
        })
    })
;











var $9f79897e5e39f87f$exports = {};

$parcel$export($9f79897e5e39f87f$exports, "button", () => $9f79897e5e39f87f$export$2ba01fb71ed41cb6, (v) => $9f79897e5e39f87f$export$2ba01fb71ed41cb6 = v);
var $9f79897e5e39f87f$export$2ba01fb71ed41cb6;
$9f79897e5e39f87f$export$2ba01fb71ed41cb6 = "_button_ce85ea";


var $524d8b04c727df08$export$2e2bcd8739ae039 = ({ children: children , className: className , onClick: onClick , disabled: disabled , loading: loading  })=>{
    return(/*#__PURE__*/ $cDsoM$jsx("button", {
        disabled: Boolean(disabled),
        className: $cDsoM$classnames(className, (/*@__PURE__*/$parcel$interopDefault($9f79897e5e39f87f$exports)).button),
        onClick: onClick,
        children: loading ? /*#__PURE__*/ $cDsoM$jsx($cDsoM$reactspinnersBeatLoader, {
            color: "#969696"
        }) : children
    }));
};



var $cce51f2fa7a62a18$exports = {};

$parcel$export($cce51f2fa7a62a18$exports, "button", () => $cce51f2fa7a62a18$export$2ba01fb71ed41cb6, (v) => $cce51f2fa7a62a18$export$2ba01fb71ed41cb6 = v);
$parcel$export($cce51f2fa7a62a18$exports, "primary", () => $cce51f2fa7a62a18$export$9ad721cf3b3debe0, (v) => $cce51f2fa7a62a18$export$9ad721cf3b3debe0 = v);
$parcel$export($cce51f2fa7a62a18$exports, "secondary", () => $cce51f2fa7a62a18$export$745c6f71a1e0e6f7, (v) => $cce51f2fa7a62a18$export$745c6f71a1e0e6f7 = v);
var $cce51f2fa7a62a18$export$2ba01fb71ed41cb6;
var $cce51f2fa7a62a18$export$9ad721cf3b3debe0;
var $cce51f2fa7a62a18$export$745c6f71a1e0e6f7;
$cce51f2fa7a62a18$export$2ba01fb71ed41cb6 = "_button_ba9be0";
$cce51f2fa7a62a18$export$9ad721cf3b3debe0 = "_primary_ba9be0";
$cce51f2fa7a62a18$export$745c6f71a1e0e6f7 = "_secondary_ba9be0";


var $c3e7d993a06a32cb$export$2e2bcd8739ae039 = ({ children: children , primary: primary , secondary: secondary , onClick: onClick , disabled: disabled  })=>/*#__PURE__*/ $cDsoM$jsx($524d8b04c727df08$export$2e2bcd8739ae039, {
        disabled: disabled,
        onClick: onClick,
        className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($cce51f2fa7a62a18$exports)).button, {
            [(/*@__PURE__*/$parcel$interopDefault($cce51f2fa7a62a18$exports)).primary]: primary,
            [(/*@__PURE__*/$parcel$interopDefault($cce51f2fa7a62a18$exports)).secondary]: secondary
        }),
        children: /*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
            children: children
        })
    })
;


var $3ae5b899b885a2a2$exports = {};

$parcel$export($3ae5b899b885a2a2$exports, "buttons", () => $3ae5b899b885a2a2$export$bbea856fdb3e3c5f, (v) => $3ae5b899b885a2a2$export$bbea856fdb3e3c5f = v);
var $3ae5b899b885a2a2$export$bbea856fdb3e3c5f;
$3ae5b899b885a2a2$export$bbea856fdb3e3c5f = "_buttons_7bee74";


var $3ff1d60894ab583f$export$2e2bcd8739ae039 = ({ select: select , combine: combine  })=>/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($3ae5b899b885a2a2$exports)).buttons,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($c3e7d993a06a32cb$export$2e2bcd8739ae039, {
                primary: true,
                onClick: select,
                children: "Select"
            }),
            /*#__PURE__*/ $cDsoM$jsx($c3e7d993a06a32cb$export$2e2bcd8739ae039, {
                secondary: true,
                onClick: combine,
                children: "Combine"
            })
        ]
    })
;





var $58e6551c377d6312$exports = {};

$parcel$export($58e6551c377d6312$exports, "buttons", () => $58e6551c377d6312$export$bbea856fdb3e3c5f, (v) => $58e6551c377d6312$export$bbea856fdb3e3c5f = v);
var $58e6551c377d6312$export$bbea856fdb3e3c5f;
$58e6551c377d6312$export$bbea856fdb3e3c5f = "_buttons_d74f78";


var $d7c2f5e7323d0e78$export$2e2bcd8739ae039 = ({ readyToSave: readyToSave , save: save , cancel: cancel  })=>/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($58e6551c377d6312$exports)).buttons,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($c3e7d993a06a32cb$export$2e2bcd8739ae039, {
                disabled: !readyToSave,
                primary: true,
                onClick: save,
                children: "Save"
            }),
            /*#__PURE__*/ $cDsoM$jsx($c3e7d993a06a32cb$export$2e2bcd8739ae039, {
                secondary: true,
                onClick: cancel,
                children: "Cancel"
            })
        ]
    })
;





var $59c0414a0d182ac6$export$2e2bcd8739ae039 = ({ x: x  })=>x.toLocaleString()
;


var $81cdfce9ffcbdf48$exports = {};

$parcel$export($81cdfce9ffcbdf48$exports, "userCount", () => $81cdfce9ffcbdf48$export$72bd514aa1799057, (v) => $81cdfce9ffcbdf48$export$72bd514aa1799057 = v);
var $81cdfce9ffcbdf48$export$72bd514aa1799057;
$81cdfce9ffcbdf48$export$72bd514aa1799057 = "_userCount_5c96a9";


var $25ff4b608d52f540$export$2e2bcd8739ae039 = ({ userCount: userCount  })=>/*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($81cdfce9ffcbdf48$exports)).userCount,
        children: userCount === null ? /*#__PURE__*/ $cDsoM$jsx($cDsoM$Fragment, {
            children: "select new group parts"
        }) : /*#__PURE__*/ $cDsoM$jsxs($cDsoM$Fragment, {
            children: [
                /*#__PURE__*/ $cDsoM$jsx($59c0414a0d182ac6$export$2e2bcd8739ae039, {
                    x: userCount
                }),
                " people"
            ]
        })
    })
;






var $aea021df410f8f41$exports = {};

$parcel$export($aea021df410f8f41$exports, "icon", () => $aea021df410f8f41$export$1ca1ec8b29a4ce27, (v) => $aea021df410f8f41$export$1ca1ec8b29a4ce27 = v);
var $aea021df410f8f41$export$1ca1ec8b29a4ce27;
$aea021df410f8f41$export$1ca1ec8b29a4ce27 = "_icon_8d86af";


var $24f020c6d416b009$export$2e2bcd8739ae039 = ({ color: color = '#bebebe' , deselect: deselect  })=>{
    const [icon, setIcon] = $cDsoM$useState($cDsoM$faCheckCircle);
    return(/*#__PURE__*/ $cDsoM$jsx($cDsoM$FontAwesomeIcon, {
        className: (/*@__PURE__*/$parcel$interopDefault($aea021df410f8f41$exports)).icon,
        size: "2x",
        color: color,
        icon: icon,
        onMouseEnter: ()=>setIcon($cDsoM$faTimesCircle)
        ,
        onMouseLeave: ()=>setIcon($cDsoM$faCheckCircle)
        ,
        onClick: deselect
    }));
};





var $dcfd5b3b829eef0a$exports = {};

$parcel$export($dcfd5b3b829eef0a$exports, "title", () => $dcfd5b3b829eef0a$export$fb184b623420d9be, (v) => $dcfd5b3b829eef0a$export$fb184b623420d9be = v);
var $dcfd5b3b829eef0a$export$fb184b623420d9be;
$dcfd5b3b829eef0a$export$fb184b623420d9be = "_title_81adf0";


var $6793504b80177de8$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($dcfd5b3b829eef0a$exports)).title,
        children: children
    })
;


var $6374afa01d1e1b2b$exports = {};

$parcel$export($6374afa01d1e1b2b$exports, "card", () => $6374afa01d1e1b2b$export$aa3e815946b80764, (v) => $6374afa01d1e1b2b$export$aa3e815946b80764 = v);
$parcel$export($6374afa01d1e1b2b$exports, "leftSideContainer", () => $6374afa01d1e1b2b$export$59b1d651044d302, (v) => $6374afa01d1e1b2b$export$59b1d651044d302 = v);
var $6374afa01d1e1b2b$export$aa3e815946b80764;
var $6374afa01d1e1b2b$export$59b1d651044d302;
$6374afa01d1e1b2b$export$aa3e815946b80764 = "_card_f0e9fb";
$6374afa01d1e1b2b$export$59b1d651044d302 = "_leftSideContainer_f0e9fb";


var $26f3a8f41a44a259$export$2e2bcd8739ae039 = ({ name: name , userCount: userCount , selected: selected , color: color , save: save , toggleSelection: toggleSelection , combine: combine , readyToSave: readyToSave , cancel: cancel  })=>{
    const [newGroupTitle, setNewGroupTitle] = $cDsoM$useState('');
    return(/*#__PURE__*/ $cDsoM$jsxs("article", {
        className: (/*@__PURE__*/$parcel$interopDefault($6374afa01d1e1b2b$exports)).card,
        children: [
            /*#__PURE__*/ $cDsoM$jsxs("div", {
                className: (/*@__PURE__*/$parcel$interopDefault($6374afa01d1e1b2b$exports)).leftSideContainer,
                children: [
                    name ? /*#__PURE__*/ $cDsoM$jsx($6793504b80177de8$export$2e2bcd8739ae039, {
                        children: name
                    }) : /*#__PURE__*/ $cDsoM$jsx($200335818cdff514$export$2e2bcd8739ae039, {
                        onTitleInput: setNewGroupTitle
                    }),
                    /*#__PURE__*/ $cDsoM$jsx($25ff4b608d52f540$export$2e2bcd8739ae039, {
                        userCount: userCount
                    })
                ]
            }),
            color || selected ? /*#__PURE__*/ $cDsoM$jsx($24f020c6d416b009$export$2e2bcd8739ae039, {
                color: color,
                deselect: toggleSelection
            }) : name ? /*#__PURE__*/ $cDsoM$jsx($3ff1d60894ab583f$export$2e2bcd8739ae039, {
                select: toggleSelection,
                combine: combine
            }) : /*#__PURE__*/ $cDsoM$jsx($d7c2f5e7323d0e78$export$2e2bcd8739ae039, {
                save: ()=>save(newGroupTitle)
                ,
                cancel: cancel,
                readyToSave: newGroupTitle && readyToSave
            })
        ]
    }));
};







var $f50e7383b6707aea$exports = {};

$parcel$export($f50e7383b6707aea$exports, "title", () => $f50e7383b6707aea$export$fb184b623420d9be, (v) => $f50e7383b6707aea$export$fb184b623420d9be = v);
var $f50e7383b6707aea$export$fb184b623420d9be;
$f50e7383b6707aea$export$fb184b623420d9be = "_title_ffee34";


var $f1c62636b063fbaa$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($f50e7383b6707aea$exports)).title,
        children: children
    })
;









var $3f3730676b581767$exports = {};

$parcel$export($3f3730676b581767$exports, "text", () => $3f3730676b581767$export$6f093cfa640b7166, (v) => $3f3730676b581767$export$6f093cfa640b7166 = v);
var $3f3730676b581767$export$6f093cfa640b7166;
$3f3730676b581767$export$6f093cfa640b7166 = "_text_1f301a";


var $452f3185bc98d9f2$export$2e2bcd8739ae039 = ({ children: children , style: style , className: className  })=>/*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        style: style,
        className: $cDsoM$classnames(className, (/*@__PURE__*/$parcel$interopDefault($3f3730676b581767$exports)).text),
        children: children
    })
;





var $8cecd9a7a46f8ac7$exports = {};

$parcel$export($8cecd9a7a46f8ac7$exports, "bars", () => $8cecd9a7a46f8ac7$export$60912654947077e3, (v) => $8cecd9a7a46f8ac7$export$60912654947077e3 = v);
$parcel$export($8cecd9a7a46f8ac7$exports, "bar", () => $8cecd9a7a46f8ac7$export$d927737047eb3867, (v) => $8cecd9a7a46f8ac7$export$d927737047eb3867 = v);
$parcel$export($8cecd9a7a46f8ac7$exports, "yesBar", () => $8cecd9a7a46f8ac7$export$6a31b2d83bf3b7ff, (v) => $8cecd9a7a46f8ac7$export$6a31b2d83bf3b7ff = v);
$parcel$export($8cecd9a7a46f8ac7$exports, "noBar", () => $8cecd9a7a46f8ac7$export$e2b71f7b582462e, (v) => $8cecd9a7a46f8ac7$export$e2b71f7b582462e = v);
var $8cecd9a7a46f8ac7$export$60912654947077e3;
var $8cecd9a7a46f8ac7$export$d927737047eb3867;
var $8cecd9a7a46f8ac7$export$6a31b2d83bf3b7ff;
var $8cecd9a7a46f8ac7$export$e2b71f7b582462e;
$8cecd9a7a46f8ac7$export$60912654947077e3 = "_bars_413fe9";
$8cecd9a7a46f8ac7$export$d927737047eb3867 = "_bar_413fe9";
$8cecd9a7a46f8ac7$export$6a31b2d83bf3b7ff = "_yesBar_413fe9";
$8cecd9a7a46f8ac7$export$e2b71f7b582462e = "_noBar_413fe9";


var $70c940dbd4d6083f$export$2e2bcd8739ae039 = ({ yes: yes , no: no , onHover: onHover , createNewGroup: createNewGroup  })=>{
    return(/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($8cecd9a7a46f8ac7$exports)).bars,
        children: [
            /*#__PURE__*/ $cDsoM$jsx("div", {
                style: {
                    width: `${yes}%`
                },
                className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($8cecd9a7a46f8ac7$exports)).bar, (/*@__PURE__*/$parcel$interopDefault($8cecd9a7a46f8ac7$exports)).yesBar),
                onMouseEnter: ()=>onHover('yes')
                ,
                onMouseLeave: ()=>onHover()
                ,
                onClick: ()=>createNewGroup('yes')
            }),
            /*#__PURE__*/ $cDsoM$jsx("div", {
                style: {
                    width: `${no}%`
                },
                className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($8cecd9a7a46f8ac7$exports)).bar, (/*@__PURE__*/$parcel$interopDefault($8cecd9a7a46f8ac7$exports)).noBar),
                onMouseEnter: ()=>onHover('no')
                ,
                onMouseLeave: ()=>onHover()
                ,
                onClick: ()=>createNewGroup('no')
            })
        ]
    }));
};


var $1c4d297da1a873b0$exports = {};

$parcel$export($1c4d297da1a873b0$exports, "stats", () => $1c4d297da1a873b0$export$7804429c45dff272, (v) => $1c4d297da1a873b0$export$7804429c45dff272 = v);
$parcel$export($1c4d297da1a873b0$exports, "textContainer", () => $1c4d297da1a873b0$export$2cedfd664bb3bd01, (v) => $1c4d297da1a873b0$export$2cedfd664bb3bd01 = v);
$parcel$export($1c4d297da1a873b0$exports, "text", () => $1c4d297da1a873b0$export$6f093cfa640b7166, (v) => $1c4d297da1a873b0$export$6f093cfa640b7166 = v);
var $1c4d297da1a873b0$export$7804429c45dff272;
var $1c4d297da1a873b0$export$2cedfd664bb3bd01;
var $1c4d297da1a873b0$export$6f093cfa640b7166;
$1c4d297da1a873b0$export$7804429c45dff272 = "_stats_8d605a";
$1c4d297da1a873b0$export$2cedfd664bb3bd01 = "_textContainer_8d605a";
$1c4d297da1a873b0$export$6f093cfa640b7166 = "_text_8d605a";


const $54da894a39034150$var$calcPercent = (x, sum)=>Math.floor(x / sum * 100)
;
var $54da894a39034150$export$2e2bcd8739ae039 = ({ yes: yes , no: no , createNewGroup: createNewGroup  })=>{
    const [state, setState] = $cDsoM$useState(null);
    const answers = {
        yes: yes,
        no: no
    };
    const userReplyCount = state ? answers[state] : yes + no;
    const yesPercentage = $54da894a39034150$var$calcPercent(yes, yes + no);
    const noPercentage = $54da894a39034150$var$calcPercent(no, yes + no);
    return(/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($1c4d297da1a873b0$exports)).stats,
        children: [
            /*#__PURE__*/ $cDsoM$jsxs($452f3185bc98d9f2$export$2e2bcd8739ae039, {
                secondary: true,
                children: [
                    /*#__PURE__*/ $cDsoM$jsx($59c0414a0d182ac6$export$2e2bcd8739ae039, {
                        x: userReplyCount
                    }),
                    " people answered"
                ]
            }),
            userReplyCount ? /*#__PURE__*/ $cDsoM$jsxs($cDsoM$Fragment, {
                children: [
                    /*#__PURE__*/ $cDsoM$jsx($70c940dbd4d6083f$export$2e2bcd8739ae039, {
                        yes: yesPercentage,
                        no: noPercentage,
                        onHover: setState,
                        createNewGroup: createNewGroup
                    }),
                    /*#__PURE__*/ $cDsoM$jsxs("div", {
                        className: (/*@__PURE__*/$parcel$interopDefault($1c4d297da1a873b0$exports)).textContainer,
                        children: [
                            /*#__PURE__*/ $cDsoM$jsxs($452f3185bc98d9f2$export$2e2bcd8739ae039, {
                                className: (/*@__PURE__*/$parcel$interopDefault($1c4d297da1a873b0$exports)).text,
                                style: {
                                    width: `${yesPercentage}%`
                                },
                                children: [
                                    yesPercentage,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ $cDsoM$jsxs($452f3185bc98d9f2$export$2e2bcd8739ae039, {
                                className: (/*@__PURE__*/$parcel$interopDefault($1c4d297da1a873b0$exports)).text,
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







var $9338584cbb54c66c$exports = {};

$parcel$export($9338584cbb54c66c$exports, "text", () => $9338584cbb54c66c$export$6f093cfa640b7166, (v) => $9338584cbb54c66c$export$6f093cfa640b7166 = v);
$parcel$export($9338584cbb54c66c$exports, "yes", () => $9338584cbb54c66c$export$7a668e70ea2210d9, (v) => $9338584cbb54c66c$export$7a668e70ea2210d9 = v);
$parcel$export($9338584cbb54c66c$exports, "no", () => $9338584cbb54c66c$export$401451a107dc42ce, (v) => $9338584cbb54c66c$export$401451a107dc42ce = v);
var $9338584cbb54c66c$export$6f093cfa640b7166;
var $9338584cbb54c66c$export$7a668e70ea2210d9;
var $9338584cbb54c66c$export$401451a107dc42ce;
$9338584cbb54c66c$export$6f093cfa640b7166 = "_text_096ef8";
$9338584cbb54c66c$export$7a668e70ea2210d9 = "_yes_096ef8";
$9338584cbb54c66c$export$401451a107dc42ce = "_no_096ef8";


var $c47b29c0a916df34$export$2e2bcd8739ae039 = ({ answer: answer  })=>/*#__PURE__*/ $cDsoM$jsxs($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($9338584cbb54c66c$exports)).text,
        children: [
            "Your answer:",
            /*#__PURE__*/ $cDsoM$jsx("span", {
                children: ' '
            }),
            /*#__PURE__*/ $cDsoM$jsx("span", {
                className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($9338584cbb54c66c$exports)).text, {
                    [(/*@__PURE__*/$parcel$interopDefault($9338584cbb54c66c$exports)).yes]: answer.toLowerCase() === 'yes',
                    [(/*@__PURE__*/$parcel$interopDefault($9338584cbb54c66c$exports)).no]: answer.toLowerCase() === 'no'
                }),
                children: $cDsoM$capitalize(answer)
            })
        ]
    })
;








var $305cd5e865b99bc7$exports = {};

$parcel$export($305cd5e865b99bc7$exports, "button", () => $305cd5e865b99bc7$export$2ba01fb71ed41cb6, (v) => $305cd5e865b99bc7$export$2ba01fb71ed41cb6 = v);
$parcel$export($305cd5e865b99bc7$exports, "yes", () => $305cd5e865b99bc7$export$7a668e70ea2210d9, (v) => $305cd5e865b99bc7$export$7a668e70ea2210d9 = v);
$parcel$export($305cd5e865b99bc7$exports, "no", () => $305cd5e865b99bc7$export$401451a107dc42ce, (v) => $305cd5e865b99bc7$export$401451a107dc42ce = v);
var $305cd5e865b99bc7$export$2ba01fb71ed41cb6;
var $305cd5e865b99bc7$export$7a668e70ea2210d9;
var $305cd5e865b99bc7$export$401451a107dc42ce;
$305cd5e865b99bc7$export$2ba01fb71ed41cb6 = "_button_0dae0a";
$305cd5e865b99bc7$export$7a668e70ea2210d9 = "_yes_0dae0a";
$305cd5e865b99bc7$export$401451a107dc42ce = "_no_0dae0a";


var $41b580ddc9e08ce9$export$2e2bcd8739ae039 = ({ answer: answer , respond: respond  })=>{
    return(/*#__PURE__*/ $cDsoM$jsx("button", {
        className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($305cd5e865b99bc7$exports)).button, {
            [(/*@__PURE__*/$parcel$interopDefault($305cd5e865b99bc7$exports)).yes]: answer.toLowerCase() === 'yes',
            [(/*@__PURE__*/$parcel$interopDefault($305cd5e865b99bc7$exports)).no]: answer.toLowerCase() === 'no'
        }),
        onClick: respond,
        children: /*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
            children: answer
        })
    }));
};


var $bcd2c67150e98376$exports = {};

$parcel$export($bcd2c67150e98376$exports, "answerButtons", () => $bcd2c67150e98376$export$33b0e16035b753e, (v) => $bcd2c67150e98376$export$33b0e16035b753e = v);
var $bcd2c67150e98376$export$33b0e16035b753e;
$bcd2c67150e98376$export$33b0e16035b753e = "_answerButtons_f0c862";


var $cd044710632098bb$export$2e2bcd8739ae039 = ({ respond: respond  })=>{
    return(/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($bcd2c67150e98376$exports)).answerButtons,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($41b580ddc9e08ce9$export$2e2bcd8739ae039, {
                answer: "Yes",
                respond: ()=>respond('yes')
            }),
            /*#__PURE__*/ $cDsoM$jsx($41b580ddc9e08ce9$export$2e2bcd8739ae039, {
                answer: "No",
                respond: ()=>respond('no')
            })
        ]
    }));
};



var $a0e1a442ef372643$exports = {};

$parcel$export($a0e1a442ef372643$exports, "card", () => $a0e1a442ef372643$export$aa3e815946b80764, (v) => $a0e1a442ef372643$export$aa3e815946b80764 = v);
$parcel$export($a0e1a442ef372643$exports, "hint", () => $a0e1a442ef372643$export$464c821cd4347539, (v) => $a0e1a442ef372643$export$464c821cd4347539 = v);
var $a0e1a442ef372643$export$aa3e815946b80764;
var $a0e1a442ef372643$export$464c821cd4347539;
$a0e1a442ef372643$export$aa3e815946b80764 = "_card_3d0cdf";
$a0e1a442ef372643$export$464c821cd4347539 = "_hint_3d0cdf";


var $0abbb239c0ff3331$export$2e2bcd8739ae039 = ({ yourOwnQuestion: yourOwnQuestion , name: name , answersCount: answersCount , currentUserAnswer: answer , respond: respond , createNewGroup: createNewGroup  })=>{
    return(/*#__PURE__*/ $cDsoM$jsxs("article", {
        className: (/*@__PURE__*/$parcel$interopDefault($a0e1a442ef372643$exports)).card,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($f1c62636b063fbaa$export$2e2bcd8739ae039, {
                children: name
            }),
            /*#__PURE__*/ $cDsoM$jsx($54da894a39034150$export$2e2bcd8739ae039, {
                ...answersCount,
                createNewGroup: createNewGroup
            }),
            yourOwnQuestion ? /*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($a0e1a442ef372643$exports)).hint,
                children: "You cannot answer your own question"
            }) : answer ? /*#__PURE__*/ $cDsoM$jsx($c47b29c0a916df34$export$2e2bcd8739ae039, {
                answer: answer
            }) : /*#__PURE__*/ $cDsoM$jsx($cd044710632098bb$export$2e2bcd8739ae039, {
                respond: respond
            })
        ]
    }));
};







var $811129bbb9b8a1a7$exports = {};

$parcel$export($811129bbb9b8a1a7$exports, "textarea", () => $811129bbb9b8a1a7$export$a3574df893ffa88d, (v) => $811129bbb9b8a1a7$export$a3574df893ffa88d = v);
$parcel$export($811129bbb9b8a1a7$exports, "text", () => $811129bbb9b8a1a7$export$6f093cfa640b7166, (v) => $811129bbb9b8a1a7$export$6f093cfa640b7166 = v);
var $811129bbb9b8a1a7$export$a3574df893ffa88d;
var $811129bbb9b8a1a7$export$6f093cfa640b7166;
$811129bbb9b8a1a7$export$a3574df893ffa88d = "_textarea_36b97b";
$811129bbb9b8a1a7$export$6f093cfa640b7166 = "_text_36b97b";


var $4d814ab8d547755e$export$2e2bcd8739ae039 = ({ onChange: onChange , value: value  })=>/*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
        className: (/*@__PURE__*/$parcel$interopDefault($811129bbb9b8a1a7$exports)).text,
        children: /*#__PURE__*/ $cDsoM$jsx("textarea", {
            placeholder: "Type your question here...",
            className: (/*@__PURE__*/$parcel$interopDefault($811129bbb9b8a1a7$exports)).textarea,
            onChange: onChange,
            value: value
        })
    })
;


var $c76490e02a0d0889$exports = {};

$parcel$export($c76490e02a0d0889$exports, "newQuestion", () => $c76490e02a0d0889$export$9ad540bb5fc131aa, (v) => $c76490e02a0d0889$export$9ad540bb5fc131aa = v);
var $c76490e02a0d0889$export$9ad540bb5fc131aa;
$c76490e02a0d0889$export$9ad540bb5fc131aa = "_newQuestion_4a75b1";


var $eb7f9113f210ffb5$export$2e2bcd8739ae039 = ({ saveQuestion: saveQuestion  })=>{
    const [question, setQuestion] = $cDsoM$useState('');
    const onChange = (e)=>{
        const newQuestion = e.target.value;
        if (newQuestion[newQuestion.length - 1] === '?') {
            saveQuestion(newQuestion);
            setQuestion('');
        } else setQuestion(newQuestion);
    };
    return(/*#__PURE__*/ $cDsoM$jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($c76490e02a0d0889$exports)).newQuestion,
        children: /*#__PURE__*/ $cDsoM$jsx($4d814ab8d547755e$export$2e2bcd8739ae039, {
            value: question,
            onChange: onChange
        })
    }));
};








var $16310c8139967d94$exports = {};

$parcel$export($16310c8139967d94$exports, "container", () => $16310c8139967d94$export$34e0f9847d4c02dd, (v) => $16310c8139967d94$export$34e0f9847d4c02dd = v);
var $16310c8139967d94$export$34e0f9847d4c02dd;
$16310c8139967d94$export$34e0f9847d4c02dd = "_container_9612d8";


var $3edf7827f81a0301$export$2e2bcd8739ae039 = ({ children: children  })=>{
    const value = $cDsoM$useContext($6817ae4c1a49aae8$export$32c650b79baf5fee);
    const handlers = $cDsoM$useSwipeable({
        onSwiped: (eventData)=>{
            if (eventData.dir === 'Right' || eventData.dir === 'Left') value.toggleMainScreen();
        },
        delta: 40,
        preventDefaultTouchmoveEvent: true
    });
    return(/*#__PURE__*/ $cDsoM$jsx("main", {
        ...handlers,
        className: (/*@__PURE__*/$parcel$interopDefault($16310c8139967d94$exports)).container,
        children: children
    }));
};
const $3edf7827f81a0301$export$97295e60e7f371e1 = ({ children: children  })=>/*#__PURE__*/ $cDsoM$jsx("main", {
        className: (/*@__PURE__*/$parcel$interopDefault($16310c8139967d94$exports)).container,
        children: children
    })
;


var $34a3f3889987ca7c$exports = {};

$parcel$export($34a3f3889987ca7c$exports, "body", () => $34a3f3889987ca7c$export$32180ef41b15b513, (v) => $34a3f3889987ca7c$export$32180ef41b15b513 = v);
var $34a3f3889987ca7c$export$32180ef41b15b513;
$34a3f3889987ca7c$export$32180ef41b15b513 = "_body_30bc21";


const $cf5ffcfdbecec3db$export$2515d253ab459c32 = 450;
const $cf5ffcfdbecec3db$export$310e42f8685040c9 = 1361;
const $cf5ffcfdbecec3db$export$5d27a029e0b63495 = 914;
const $cf5ffcfdbecec3db$export$120137d2fb34488f = 467;


const $6817ae4c1a49aae8$export$32c650b79baf5fee = /*#__PURE__*/ $cDsoM$react.createContext({
    mainScreen: true,
    toggleMainScreen: null
});
var $6817ae4c1a49aae8$export$2e2bcd8739ae039 = ({ children: children , includeSwipes: includeSwipes  })=>{
    const [mainScreen, toggleMainScreen] = $cDsoM$useState(true);
    $cDsoM$useEffect(()=>{
        const handler = ()=>{
            const { innerWidth: width  } = window;
            if (mainScreen && width > $cf5ffcfdbecec3db$export$2515d253ab459c32 + $cf5ffcfdbecec3db$export$120137d2fb34488f) toggleMainScreen(width);
        };
        window.addEventListener('resize', handler);
        return ()=>window.removeEventListener('resize', handler)
        ;
    }, []);
    if (includeSwipes) return(/*#__PURE__*/ $cDsoM$jsx($6817ae4c1a49aae8$export$32c650b79baf5fee.Provider, {
        value: {
            mainScreen: mainScreen,
            toggleMainScreen: ()=>toggleMainScreen(!mainScreen)
        },
        children: /*#__PURE__*/ $cDsoM$jsx("div", {
            style: {
                height: mainScreen ? '100%' : 'auto'
            },
            className: (/*@__PURE__*/$parcel$interopDefault($34a3f3889987ca7c$exports)).body,
            children: /*#__PURE__*/ $cDsoM$jsx($3edf7827f81a0301$export$2e2bcd8739ae039, {
                children: children
            })
        })
    }));
    return(/*#__PURE__*/ $cDsoM$jsx("div", {
        style: {
            height: mainScreen ? '100%' : 'auto'
        },
        className: (/*@__PURE__*/$parcel$interopDefault($34a3f3889987ca7c$exports)).body,
        children: /*#__PURE__*/ $cDsoM$jsx($3edf7827f81a0301$export$97295e60e7f371e1, {
            children: children
        })
    }));
};





var $9a4bcbc0e41cd76d$exports = {};

$parcel$export($9a4bcbc0e41cd76d$exports, "groupContainer", () => $9a4bcbc0e41cd76d$export$f36792cb9bd81925, (v) => $9a4bcbc0e41cd76d$export$f36792cb9bd81925 = v);
var $9a4bcbc0e41cd76d$export$f36792cb9bd81925;
$9a4bcbc0e41cd76d$export$f36792cb9bd81925 = "_groupContainer_335d37";


var $c316d89b7a4dfb85$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $cDsoM$jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($9a4bcbc0e41cd76d$exports)).groupContainer,
        children: /*#__PURE__*/ $cDsoM$jsx($cDsoM$Scrollbars, {
            style: {
                width: '100%',
                height: '100%'
            },
            autoHide: true,
            children: children
        })
    })
;








var $7182a79adfb3014d$exports = {};

$parcel$export($7182a79adfb3014d$exports, "title", () => $7182a79adfb3014d$export$fb184b623420d9be, (v) => $7182a79adfb3014d$export$fb184b623420d9be = v);
$parcel$export($7182a79adfb3014d$exports, "secondary", () => $7182a79adfb3014d$export$745c6f71a1e0e6f7, (v) => $7182a79adfb3014d$export$745c6f71a1e0e6f7 = v);
var $7182a79adfb3014d$export$fb184b623420d9be;
var $7182a79adfb3014d$export$745c6f71a1e0e6f7;
$7182a79adfb3014d$export$fb184b623420d9be = "_title_3bf580";
$7182a79adfb3014d$export$745c6f71a1e0e6f7 = "_secondary_3bf580";


var $2b4e1f842d7c0f7d$export$2e2bcd8739ae039 = ({ children: children , className: className , color: color  })=>/*#__PURE__*/ $cDsoM$jsx("h1", {
        style: {
            color: color
        },
        className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($7182a79adfb3014d$exports)).title, className),
        children: children
    })
;




var $68147dfdcae70753$exports = {};

$parcel$export($68147dfdcae70753$exports, "container", () => $68147dfdcae70753$export$34e0f9847d4c02dd, (v) => $68147dfdcae70753$export$34e0f9847d4c02dd = v);
var $68147dfdcae70753$export$34e0f9847d4c02dd;
$68147dfdcae70753$export$34e0f9847d4c02dd = "_container_0ef682";


var $53c91647a111b7ba$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $cDsoM$jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($68147dfdcae70753$exports)).container,
        children: children
    })
;


var $2985843ae9adf208$exports = {};

$parcel$export($2985843ae9adf208$exports, "mainScreen", () => $2985843ae9adf208$export$e962ae2959462fd2, (v) => $2985843ae9adf208$export$e962ae2959462fd2 = v);
var $2985843ae9adf208$export$e962ae2959462fd2;
$2985843ae9adf208$export$e962ae2959462fd2 = "_mainScreen_a47f27";



var $302e4c7cf8732369$export$2e2bcd8739ae039 = ({ children: children , style: style  })=>/*#__PURE__*/ $cDsoM$jsxs("section", {
        style: style,
        className: (/*@__PURE__*/$parcel$interopDefault($2985843ae9adf208$exports)).mainScreen,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($2b4e1f842d7c0f7d$export$2e2bcd8739ae039, {
                color: "#3d465e",
                children: "Questions"
            }),
            /*#__PURE__*/ $cDsoM$jsx($53c91647a111b7ba$export$2e2bcd8739ae039, {
                children: /*#__PURE__*/ $cDsoM$jsx($cDsoM$reactmedia, {
                    queries: {
                        small: {
                            minWidth: $cf5ffcfdbecec3db$export$2515d253ab459c32 + $cf5ffcfdbecec3db$export$120137d2fb34488f,
                            maxWidth: $cf5ffcfdbecec3db$export$2515d253ab459c32 + $cf5ffcfdbecec3db$export$5d27a029e0b63495
                        },
                        medium: {
                            minWidth: $cf5ffcfdbecec3db$export$2515d253ab459c32 + $cf5ffcfdbecec3db$export$5d27a029e0b63495,
                            maxWidth: $cf5ffcfdbecec3db$export$2515d253ab459c32 + $cf5ffcfdbecec3db$export$310e42f8685040c9
                        },
                        large: {
                            minWidth: $cf5ffcfdbecec3db$export$2515d253ab459c32 + $cf5ffcfdbecec3db$export$310e42f8685040c9
                        }
                    },
                    children: (matches)=>/*#__PURE__*/ $cDsoM$jsxs($cDsoM$Fragment, {
                            children: [
                                matches.small ? /*#__PURE__*/ $cDsoM$jsx($cDsoM$Fragment, {
                                    children: children.slice(0, 1)
                                }) : null,
                                matches.medium ? /*#__PURE__*/ $cDsoM$jsx($cDsoM$Fragment, {
                                    children: children.slice(0, 2)
                                }) : null,
                                matches.large ? /*#__PURE__*/ $cDsoM$jsx($cDsoM$Fragment, {
                                    children: children.slice(0, 3)
                                }) : null
                            ]
                        })
                })
            })
        ]
    })
;





var $80b787fb55b8d934$exports = {};

$parcel$export($80b787fb55b8d934$exports, "sidebar", () => $80b787fb55b8d934$export$6fbb9cd2843e91b2, (v) => $80b787fb55b8d934$export$6fbb9cd2843e91b2 = v);
$parcel$export($80b787fb55b8d934$exports, "title", () => $80b787fb55b8d934$export$fb184b623420d9be, (v) => $80b787fb55b8d934$export$fb184b623420d9be = v);
var $80b787fb55b8d934$export$6fbb9cd2843e91b2;
var $80b787fb55b8d934$export$fb184b623420d9be;
$80b787fb55b8d934$export$6fbb9cd2843e91b2 = "_sidebar_df38d0";
$80b787fb55b8d934$export$fb184b623420d9be = "_title_df38d0";


var $a696d26100e8357d$export$2e2bcd8739ae039 = ({ children: children , title: title , style: style  })=>/*#__PURE__*/ $cDsoM$jsxs("div", {
        style: style,
        className: (/*@__PURE__*/$parcel$interopDefault($80b787fb55b8d934$exports)).sidebar,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($2b4e1f842d7c0f7d$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($80b787fb55b8d934$exports)).title,
                color: "#b1b8c7",
                children: title
            }),
            children
        ]
    })
;







var $89d1abc95e4554aa$exports = {};

$parcel$export($89d1abc95e4554aa$exports, "title", () => $89d1abc95e4554aa$export$fb184b623420d9be, (v) => $89d1abc95e4554aa$export$fb184b623420d9be = v);
var $89d1abc95e4554aa$export$fb184b623420d9be;
$89d1abc95e4554aa$export$fb184b623420d9be = "_title_6e8dfe";


var $5f6dbe8527eb3441$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ $cDsoM$jsx("h2", {
        className: (/*@__PURE__*/$parcel$interopDefault($89d1abc95e4554aa$exports)).title,
        children: children
    })
;


var $d8803c40c7fd3570$exports = {};

$parcel$export($d8803c40c7fd3570$exports, "cardsRow", () => $d8803c40c7fd3570$export$3ffd594349b5aa88, (v) => $d8803c40c7fd3570$export$3ffd594349b5aa88 = v);
$parcel$export($d8803c40c7fd3570$exports, "scrollContainer", () => $d8803c40c7fd3570$export$fad3c8302a7540c6, (v) => $d8803c40c7fd3570$export$fad3c8302a7540c6 = v);
var $d8803c40c7fd3570$export$3ffd594349b5aa88;
var $d8803c40c7fd3570$export$fad3c8302a7540c6;
$d8803c40c7fd3570$export$3ffd594349b5aa88 = "_cardsRow_07bbce";
$d8803c40c7fd3570$export$fad3c8302a7540c6 = "_scrollContainer_07bbce";


var $fad5f341416586e4$export$2e2bcd8739ae039 = ({ title: title , children: children  })=>{
    return(/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($d8803c40c7fd3570$exports)).cardsRow,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($5f6dbe8527eb3441$export$2e2bcd8739ae039, {
                children: title
            }),
            /*#__PURE__*/ $cDsoM$jsx($cDsoM$Scrollbars, {
                autoHide: true,
                className: (/*@__PURE__*/$parcel$interopDefault($d8803c40c7fd3570$exports)).scrollContainer,
                children: children
            })
        ]
    }));
};













var $2699a27faf875e29$exports = {};

$parcel$export($2699a27faf875e29$exports, "button", () => $2699a27faf875e29$export$2ba01fb71ed41cb6, (v) => $2699a27faf875e29$export$2ba01fb71ed41cb6 = v);
$parcel$export($2699a27faf875e29$exports, "verificationCodeContainer", () => $2699a27faf875e29$export$a55e320eda64329d, (v) => $2699a27faf875e29$export$a55e320eda64329d = v);
$parcel$export($2699a27faf875e29$exports, "input", () => $2699a27faf875e29$export$b7e3ae3d7c15e42e, (v) => $2699a27faf875e29$export$b7e3ae3d7c15e42e = v);
var $2699a27faf875e29$export$2ba01fb71ed41cb6;
var $2699a27faf875e29$export$a55e320eda64329d;
var $2699a27faf875e29$export$b7e3ae3d7c15e42e;
$2699a27faf875e29$export$2ba01fb71ed41cb6 = "_button_88fbaa";
$2699a27faf875e29$export$a55e320eda64329d = "_verificationCodeContainer_88fbaa";
$2699a27faf875e29$export$b7e3ae3d7c15e42e = "_input_88fbaa";


const $529787a0229557e2$export$2affb37eeb4d3983 = ({ resend: resend , verificationCode: verificationCode , onFieldChange: onFieldChange  })=>/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($2699a27faf875e29$exports)).verificationCodeContainer,
        children: [
            /*#__PURE__*/ $cDsoM$jsx("input", {
                value: verificationCode,
                onChange: onFieldChange,
                placeholder: "verification code",
                name: "verificationCode",
                className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($2699a27faf875e29$exports)).input)
            }),
            /*#__PURE__*/ $cDsoM$jsx($524d8b04c727df08$export$2e2bcd8739ae039, {
                className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($2699a27faf875e29$exports)).button),
                onClick: ()=>resend()
                ,
                children: "Resend"
            })
        ]
    })
;


var $46ef07c7033ae8f1$export$2e2bcd8739ae039 = $529787a0229557e2$export$2affb37eeb4d3983;


var $41fa4a951da2c775$exports = {};

$parcel$export($41fa4a951da2c775$exports, "input", () => $41fa4a951da2c775$export$b7e3ae3d7c15e42e, (v) => $41fa4a951da2c775$export$b7e3ae3d7c15e42e = v);
$parcel$export($41fa4a951da2c775$exports, "button", () => $41fa4a951da2c775$export$2ba01fb71ed41cb6, (v) => $41fa4a951da2c775$export$2ba01fb71ed41cb6 = v);
$parcel$export($41fa4a951da2c775$exports, "withoutMargin", () => $41fa4a951da2c775$export$8a433e5b2d459900, (v) => $41fa4a951da2c775$export$8a433e5b2d459900 = v);
var $41fa4a951da2c775$export$b7e3ae3d7c15e42e;
var $41fa4a951da2c775$export$2ba01fb71ed41cb6;
var $41fa4a951da2c775$export$8a433e5b2d459900;
$41fa4a951da2c775$export$b7e3ae3d7c15e42e = "_input_33e8f5";
$41fa4a951da2c775$export$2ba01fb71ed41cb6 = "_button_33e8f5";
$41fa4a951da2c775$export$8a433e5b2d459900 = "_withoutMargin_33e8f5";


var $7a29cf0ed35d3b93$export$2e2bcd8739ae039 = ({ getUserToken: f , verifyUser: f2 , resend: resend  })=>{
    const [{ username: username , password: password , verificationCode: verificationCode  }, setFields] = $cDsoM$useState({
        username: '',
        password: '',
        verificationCode: ''
    });
    const [showVerification, setShowVerification] = $cDsoM$useState(false);
    const [loading, setLoading] = $cDsoM$useState(null);
    const onFieldChange = (e)=>{
        e.preventDefault();
        setFields((state)=>({
                ...state,
                [e.target.name]: e.target.value
            })
        );
    };
    const getUserToken = async ()=>{
        setLoading(true);
        const user = await f({
            username: username,
            password: password
        });
        if (!user.verificationCompleted) setShowVerification(true);
        setLoading(false);
    };
    const verifyUser = async ()=>{
        setLoading(true);
        await f2({
            verificationCode: verificationCode
        });
        setLoading(false);
    };
    return(/*#__PURE__*/ $cDsoM$jsxs($cDsoM$Fragment, {
        children: [
            /*#__PURE__*/ $cDsoM$jsx("input", {
                value: username,
                onChange: onFieldChange,
                placeholder: "username",
                name: "username",
                className: (/*@__PURE__*/$parcel$interopDefault($41fa4a951da2c775$exports)).input
            }),
            /*#__PURE__*/ $cDsoM$jsx("input", {
                type: "password",
                value: password,
                onChange: onFieldChange,
                placeholder: "password",
                name: "password",
                className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($41fa4a951da2c775$exports)).input, {
                    [(/*@__PURE__*/$parcel$interopDefault($41fa4a951da2c775$exports)).withoutMargin]: !showVerification
                })
            }),
            showVerification ? /*#__PURE__*/ $cDsoM$jsx($46ef07c7033ae8f1$export$2e2bcd8739ae039, {
                verificationCode: verificationCode,
                onFieldChange: onFieldChange,
                resend: resend
            }) : null,
            /*#__PURE__*/ $cDsoM$jsx($524d8b04c727df08$export$2e2bcd8739ae039, {
                loading: loading,
                className: (/*@__PURE__*/$parcel$interopDefault($41fa4a951da2c775$exports)).button,
                onClick: ()=>showVerification ? verifyUser({
                        verificationCode: verificationCode
                    }) : getUserToken()
                ,
                children: "Sign In"
            })
        ]
    }));
};


var $68841d5e5354d0a2$export$2e2bcd8739ae039 = $7a29cf0ed35d3b93$export$2e2bcd8739ae039;








var $c3796a9068202221$exports = {};

$parcel$export($c3796a9068202221$exports, "input", () => $c3796a9068202221$export$b7e3ae3d7c15e42e, (v) => $c3796a9068202221$export$b7e3ae3d7c15e42e = v);
$parcel$export($c3796a9068202221$exports, "button", () => $c3796a9068202221$export$2ba01fb71ed41cb6, (v) => $c3796a9068202221$export$2ba01fb71ed41cb6 = v);
$parcel$export($c3796a9068202221$exports, "withoutMargin", () => $c3796a9068202221$export$8a433e5b2d459900, (v) => $c3796a9068202221$export$8a433e5b2d459900 = v);
var $c3796a9068202221$export$b7e3ae3d7c15e42e;
var $c3796a9068202221$export$2ba01fb71ed41cb6;
var $c3796a9068202221$export$8a433e5b2d459900;
$c3796a9068202221$export$b7e3ae3d7c15e42e = "_input_07e23d";
$c3796a9068202221$export$2ba01fb71ed41cb6 = "_button_07e23d";
$c3796a9068202221$export$8a433e5b2d459900 = "_withoutMargin_07e23d";


var $8c25ad23d0e74291$export$2e2bcd8739ae039 = ({ createUser: f , verifyUser: f2 , onError: onError , resend: resend  })=>{
    const [loading, setLoading] = $cDsoM$useState(null);
    const [{ username: username , password: password , phoneNumber: phoneNumber , country: country1 , verificationCode: verificationCode  }, setFields] = $cDsoM$useState({
        username: '',
        password: '',
        phoneNumber: '',
        country: '',
        verificationCode: ''
    });
    const [showVerification, setShowVerification] = $cDsoM$useState(false);
    const onFieldChange = (e)=>{
        e.preventDefault();
        setFields((state)=>({
                ...state,
                [e.target.name]: e.target.value
            })
        );
    };
    const createUser = async ()=>{
        if (!country1) {
            onError('Country is not selected');
            return;
        }
        if (!$cDsoM$isValidPhoneNumber(phoneNumber)) {
            onError('Phone number is invalid');
            return;
        }
        setLoading(true);
        try {
            await f({
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
    const verifyUser = async ()=>{
        setLoading(true);
        await f2({
            verificationCode: verificationCode
        });
        setLoading(false);
    };
    return(/*#__PURE__*/ $cDsoM$jsxs($cDsoM$Fragment, {
        children: [
            /*#__PURE__*/ $cDsoM$jsx("input", {
                value: username,
                onChange: onFieldChange,
                placeholder: "username",
                name: "username",
                className: (/*@__PURE__*/$parcel$interopDefault($c3796a9068202221$exports)).input,
                autoComplete: "nope"
            }),
            /*#__PURE__*/ $cDsoM$jsx("input", {
                type: "password",
                value: password,
                onChange: onFieldChange,
                placeholder: "password",
                name: "password",
                className: (/*@__PURE__*/$parcel$interopDefault($c3796a9068202221$exports)).input,
                autoComplete: "new-password"
            }),
            /*#__PURE__*/ $cDsoM$jsx($cDsoM$reactphonenumberinput, {
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
                className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($c3796a9068202221$exports)).input, {
                    [(/*@__PURE__*/$parcel$interopDefault($c3796a9068202221$exports)).withoutMargin]: !showVerification
                })
            }),
            showVerification ? /*#__PURE__*/ $cDsoM$jsx($46ef07c7033ae8f1$export$2e2bcd8739ae039, {
                verificationCode: verificationCode,
                onFieldChange: onFieldChange,
                resend: resend
            }) : null,
            /*#__PURE__*/ $cDsoM$jsx($524d8b04c727df08$export$2e2bcd8739ae039, {
                loading: loading,
                className: (/*@__PURE__*/$parcel$interopDefault($c3796a9068202221$exports)).button,
                onClick: ()=>showVerification ? verifyUser({
                        verificationCode: verificationCode
                    }) : createUser({
                        username: username,
                        password: password,
                        phoneNumber: phoneNumber
                    })
                ,
                children: showVerification ? 'Sign Up' : 'Get Code'
            })
        ]
    }));
};


var $c700cb5c44efda05$export$2e2bcd8739ae039 = $8c25ad23d0e74291$export$2e2bcd8739ae039;


var $a97ed870d150ce32$exports = {};

$parcel$export($a97ed870d150ce32$exports, "containersContainer", () => $a97ed870d150ce32$export$6eb0125b0ff89eda, (v) => $a97ed870d150ce32$export$6eb0125b0ff89eda = v);
$parcel$export($a97ed870d150ce32$exports, "container", () => $a97ed870d150ce32$export$34e0f9847d4c02dd, (v) => $a97ed870d150ce32$export$34e0f9847d4c02dd = v);
$parcel$export($a97ed870d150ce32$exports, "header", () => $a97ed870d150ce32$export$38e42c68cf43b5d4, (v) => $a97ed870d150ce32$export$38e42c68cf43b5d4 = v);
$parcel$export($a97ed870d150ce32$exports, "signUp", () => $a97ed870d150ce32$export$cf64224bcd829024, (v) => $a97ed870d150ce32$export$cf64224bcd829024 = v);
$parcel$export($a97ed870d150ce32$exports, "signIn", () => $a97ed870d150ce32$export$9670d83f11d4b64a, (v) => $a97ed870d150ce32$export$9670d83f11d4b64a = v);
$parcel$export($a97ed870d150ce32$exports, "active", () => $a97ed870d150ce32$export$89da14300d534261, (v) => $a97ed870d150ce32$export$89da14300d534261 = v);
var $a97ed870d150ce32$export$6eb0125b0ff89eda;
var $a97ed870d150ce32$export$34e0f9847d4c02dd;
var $a97ed870d150ce32$export$38e42c68cf43b5d4;
var $a97ed870d150ce32$export$cf64224bcd829024;
var $a97ed870d150ce32$export$9670d83f11d4b64a;
var $a97ed870d150ce32$export$89da14300d534261;
$a97ed870d150ce32$export$6eb0125b0ff89eda = "_containersContainer_23b07c";
$a97ed870d150ce32$export$34e0f9847d4c02dd = "_container_23b07c";
$a97ed870d150ce32$export$38e42c68cf43b5d4 = "_header_23b07c";
$a97ed870d150ce32$export$cf64224bcd829024 = "_signUp_23b07c";
$a97ed870d150ce32$export$9670d83f11d4b64a = "_signIn_23b07c";
$a97ed870d150ce32$export$89da14300d534261 = "_active_23b07c";




var $23bf439265f65302$export$2e2bcd8739ae039 = ({ createUser: createUser , verifyUser: verifyUser , getUserToken: getUserToken , resend: resend , onError: onError  })=>{
    const [selectedTab, setSelectedTab] = $cDsoM$useState('signIn');
    return(/*#__PURE__*/ $cDsoM$jsx("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($a97ed870d150ce32$exports)).containersContainer,
        children: /*#__PURE__*/ $cDsoM$jsxs("div", {
            className: (/*@__PURE__*/$parcel$interopDefault($a97ed870d150ce32$exports)).container,
            children: [
                /*#__PURE__*/ $cDsoM$jsxs("div", {
                    className: (/*@__PURE__*/$parcel$interopDefault($a97ed870d150ce32$exports)).header,
                    children: [
                        /*#__PURE__*/ $cDsoM$jsx("span", {
                            className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($a97ed870d150ce32$exports)).signUp, {
                                [(/*@__PURE__*/$parcel$interopDefault($a97ed870d150ce32$exports)).active]: selectedTab === 'signUp'
                            }),
                            onClick: ()=>setSelectedTab('signUp')
                            ,
                            children: "Sign Up"
                        }),
                        /*#__PURE__*/ $cDsoM$jsx("span", {
                            className: $cDsoM$classnames((/*@__PURE__*/$parcel$interopDefault($a97ed870d150ce32$exports)).signIn, {
                                [(/*@__PURE__*/$parcel$interopDefault($a97ed870d150ce32$exports)).active]: selectedTab === 'signIn'
                            }),
                            onClick: ()=>setSelectedTab('signIn')
                            ,
                            children: "Sign In"
                        })
                    ]
                }),
                selectedTab === 'signIn' ? /*#__PURE__*/ $cDsoM$jsx($68841d5e5354d0a2$export$2e2bcd8739ae039, {
                    getUserToken: getUserToken,
                    verifyUser: verifyUser,
                    resend: resend
                }) : /*#__PURE__*/ $cDsoM$jsx($c700cb5c44efda05$export$2e2bcd8739ae039, {
                    createUser: createUser,
                    verifyUser: verifyUser,
                    onError: onError,
                    resend: resend
                })
            ]
        })
    }));
};







var $007b6c5577549515$exports = {};

$parcel$export($007b6c5577549515$exports, "container", () => $007b6c5577549515$export$34e0f9847d4c02dd, (v) => $007b6c5577549515$export$34e0f9847d4c02dd = v);
$parcel$export($007b6c5577549515$exports, "icon", () => $007b6c5577549515$export$1ca1ec8b29a4ce27, (v) => $007b6c5577549515$export$1ca1ec8b29a4ce27 = v);
$parcel$export($007b6c5577549515$exports, "username", () => $007b6c5577549515$export$5e1be761f603d585, (v) => $007b6c5577549515$export$5e1be761f603d585 = v);
var $007b6c5577549515$export$34e0f9847d4c02dd;
var $007b6c5577549515$export$1ca1ec8b29a4ce27;
var $007b6c5577549515$export$5e1be761f603d585;
$007b6c5577549515$export$34e0f9847d4c02dd = "_container_150dcb";
$007b6c5577549515$export$1ca1ec8b29a4ce27 = "_icon_150dcb";
$007b6c5577549515$export$5e1be761f603d585 = "_username_150dcb";


var $089835c2a4e498f7$export$2e2bcd8739ae039 = ({ logout: logout , username: username  })=>/*#__PURE__*/ $cDsoM$jsxs("div", {
        className: (/*@__PURE__*/$parcel$interopDefault($007b6c5577549515$exports)).container,
        children: [
            /*#__PURE__*/ $cDsoM$jsx($f6c8598b6b40d0a7$export$2e2bcd8739ae039, {
                className: (/*@__PURE__*/$parcel$interopDefault($007b6c5577549515$exports)).username,
                children: username
            }),
            /*#__PURE__*/ $cDsoM$jsx($cDsoM$FontAwesomeIcon, {
                className: (/*@__PURE__*/$parcel$interopDefault($007b6c5577549515$exports)).icon,
                size: "1x",
                color: "#bebebe",
                icon: $cDsoM$faSignOutAlt,
                onClick: logout
            })
        ]
    })
;


var $90d837742dadb587$export$2e2bcd8739ae039 = {
    shallow: {
        Body: $6817ae4c1a49aae8$export$2e2bcd8739ae039,
        GroupsContainer: $c316d89b7a4dfb85$export$2e2bcd8739ae039,
        MainScreen: $302e4c7cf8732369$export$2e2bcd8739ae039,
        Sidebar: $a696d26100e8357d$export$2e2bcd8739ae039,
        QuestionCardsRow: $fad5f341416586e4$export$2e2bcd8739ae039
    },
    leafs: {
        Circles: $e56b9acf7d4b32d6$export$2e2bcd8739ae039,
        GroupCard: $26f3a8f41a44a259$export$2e2bcd8739ae039,
        QuestionCard: $0abbb239c0ff3331$export$2e2bcd8739ae039,
        NewQuestion: $eb7f9113f210ffb5$export$2e2bcd8739ae039,
        Authentication: $23bf439265f65302$export$2e2bcd8739ae039,
        ActionsPanel: $089835c2a4e498f7$export$2e2bcd8739ae039
    },
    context: {
        MainScreenSwipeContext: $6817ae4c1a49aae8$export$32c650b79baf5fee
    }
};


export {$90d837742dadb587$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=main.js.map
