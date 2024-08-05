'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

var styles$j = {"defaultStyles":"action-button-module_defaultStyles__sgj2s","fullWidth":"action-button-module_fullWidth__-NZJ5","loadingStyles":"action-button-module_loadingStyles__TYgl4","buttonText":"action-button-module_buttonText__2HqDk","button-loading-spinner":"action-button-module_button-loading-spinner__XpyOV"};

const ActionButton = ({ onClick, fullWidth, loading = false, children, }) => {
    const defaultStyles = styles$j.defaultStyles;
    const fullWidthStyles = fullWidth ? styles$j.fullWidth : '';
    const loadingStyles = loading ? styles$j.loadingStyles : '';
    return (jsxRuntime.jsx("button", { onClick: onClick, className: `${defaultStyles} ${fullWidthStyles} ${loadingStyles}`, disabled: loading, children: jsxRuntime.jsx("span", { className: styles$j.buttonText, children: children }) }));
};

var styles$i = {"checkboxRadio":"checkbox-input-module_checkboxRadio__NwEvn"};

const CheckboxInput = ({ id, children }) => {
    return (jsxRuntime.jsxs("label", { htmlFor: id, className: styles$i.checkboxRadio, children: [jsxRuntime.jsx("input", { type: 'checkbox', id: id, name: id }), children] }));
};

var styles$h = {"headingOne":"heading-module_headingOne__gOIMQ","headingTwo":"heading-module_headingTwo__Y-i2W","headingThree":"heading-module_headingThree__Of688","textAlign":"heading-module_textAlign__Dm75T"};

const Heading = ({ order = 1, textAlign, children }) => {
    const textAlignStyles = textAlign === 'center' ? styles$h.textAlign : undefined;
    let headingElement = jsxRuntime.jsx("h1", { className: `${styles$h.headingOne} ${textAlignStyles}`, children: children });
    switch (order) {
        case 2:
            headingElement = jsxRuntime.jsx("h2", { className: `${styles$h.headingTwo} ${textAlignStyles}`, children: children });
            break;
        case 3:
            headingElement = jsxRuntime.jsx("h3", { className: `${styles$h.headingThree} ${textAlignStyles}`, children: children });
            break;
    }
    return headingElement;
};

var styles$g = {"header":"header-module_header__Tv17b"};

const Header = ({ children }) => {
    return (jsxRuntime.jsx("header", { className: styles$g.header, children: jsxRuntime.jsx(Heading, { order: 2, children: children }) }));
};

var styles$f = {"containerStyles":"flex-container-module_containerStyles__ochhf","children":"flex-container-module_children__YvOuW","flexContainer":"flex-container-module_flexContainer__sjCC6","flexDirectionColumn":"flex-container-module_flexDirectionColumn__wD97f","justifySpaceBetween":"flex-container-module_justifySpaceBetween__TlWte","justifyFlexEnd":"flex-container-module_justifyFlexEnd__2Wl6W","justifyCenter":"flex-container-module_justifyCenter__9Miyp","alignSpaceBetween":"flex-container-module_alignSpaceBetween__zaMWT","alignFlexEnd":"flex-container-module_alignFlexEnd__Oj6iR","alignCenter":"flex-container-module_alignCenter__01oXx","xsGap":"flex-container-module_xsGap__R-otE","smGap":"flex-container-module_smGap__5oYmU","mdGap":"flex-container-module_mdGap__3IIbh","lgGap":"flex-container-module_lgGap__IybLF","xlGap":"flex-container-module_xlGap__JdQP4"};

/**
 * gap | default `xs`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
const FlexContainer = ({ flexDirection, justify, align, gap, children, headerText, styledContainer, className, }) => {
    const containerStyles = styledContainer ? styles$f.containerStyles : undefined;
    const flexDirectionStyles = flexDirection === 'column' ? styles$f.flexDirectionColumn : undefined;
    let justifyStyles;
    let alignStyles;
    let gapStyles;
    switch (gap) {
        case 'xs':
            gapStyles = styles$f.xsGap;
            break;
        case 'sm':
            gapStyles = styles$f.smGap;
            break;
        case 'md':
            gapStyles = styles$f.mdGap;
            break;
        case 'lg':
            gapStyles = styles$f.lgGap;
            break;
        case 'xl':
            gapStyles = styles$f.xlGap;
            break;
    }
    switch (justify) {
        case 'space-between':
            justifyStyles = styles$f.justifySpaceBetween;
            break;
        case 'flex-end':
            justifyStyles = styles$f.justifyFlexEnd;
            break;
        case 'center':
            justifyStyles = styles$f.justifyCenter;
            break;
    }
    switch (align) {
        case 'space-between':
            alignStyles = styles$f.alignSpaceBetween;
            break;
        case 'flex-end':
            alignStyles = styles$f.alignFlexEnd;
            break;
        case 'center':
            alignStyles = styles$f.alignCenter;
            break;
    }
    return (jsxRuntime.jsxs("div", { className: `${styles$f.flexContainer} ${flexDirectionStyles} ${justifyStyles} ${alignStyles} ${gapStyles} ${containerStyles} ${className}`, children: [!!headerText && jsxRuntime.jsx(Header, { children: headerText }), styledContainer && jsxRuntime.jsx("div", { className: styles$f.children, children: children }), !styledContainer && children] }));
};

var styles$e = {"gridContainer":"grid-container-module_gridContainer__5D5ts","xsGap":"grid-container-module_xsGap__3ZVWI","smGap":"grid-container-module_smGap__qR1ET","mdGap":"grid-container-module_mdGap__zusgI","lgGap":"grid-container-module_lgGap__bIzoR","xlGap":"grid-container-module_xlGap__ih9PD","gridContainerTwoColumns":"grid-container-module_gridContainerTwoColumns__z9ppB","gridContainerThreeColumns":"grid-container-module_gridContainerThreeColumns__E-qaZ","gridContainerFourColumns":"grid-container-module_gridContainerFourColumns__UXIN2"};

/**
 * gap | default `md`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
const GridContainer = ({ children, gap = 'md', columns = 2, className }) => {
    let gridContainerColumnStyles;
    let gapStyles;
    switch (columns) {
        case 2:
            gridContainerColumnStyles = styles$e.gridContainerTwoColumns;
            break;
        case 3:
            gridContainerColumnStyles = styles$e.gridContainerThreeColumns;
            break;
        case 4:
            gridContainerColumnStyles = styles$e.gridContainerFourColumns;
            break;
    }
    switch (gap) {
        case 'xs':
            gapStyles = styles$e.xsGap;
            break;
        case 'sm':
            gapStyles = styles$e.smGap;
            break;
        case 'md':
            gapStyles = styles$e.mdGap;
            break;
        case 'lg':
            gapStyles = styles$e.lgGap;
            break;
        case 'xl':
            gapStyles = styles$e.xlGap;
            break;
    }
    return (jsxRuntime.jsx("div", { className: `${styles$e.gridContainer} ${gridContainerColumnStyles} ${gapStyles} ${className}`, children: children }));
};

function e(e,r,t){return e.length+1===r.length&&r.endsWith(t)}function r(r,t){if(!t)return t;var n=String(t).replace(/[^\da-zA-Z\n|]/g,""),l=r.split(/[^\da-zA-Z\n|]/g).filter(Boolean).map((function(e){return e.length})),a=r.split(/[\da-zA-Z\n|]/g).filter(Boolean),u=a[0],c=a[a.length-1];if(r.startsWith(u)){var i=a.reduce((function(e,r,t){var n=l[t],a=e.value.slice(0,n),u=e.value.slice(n);return {result:a?e.result.concat(r,a):e.result,value:u}}),{result:"",value:n}).result.slice(0,r.length);return e(i,r,c)?i.concat(c):i}var v=l.reduce((function(e,r,t){var n=a[t]||"",l="$1"+n+"$2",u=r+e.prevSlice+e.prevSeparator.length,c=new RegExp("(.{"+u+"})(.)");return {prevSeparator:n,prevSlice:u,value:e.value.replace(c,l)}}),{prevSeparator:"",prevSlice:0,value:n}).value.slice(0,r.length);return e(v,r,c)?v.concat(c):v}function formatStringByPattern(e,t){return void 0===t?function(t){return r(e,t)}:r(e,t)}

const formatIDNumber = (idNumber) => {
    return formatStringByPattern('999999 9999 999', idNumber);
};

const formatMobile = (cellNumber) => {
    return formatStringByPattern('999 999 9999', cellNumber);
};

var styles$d = {"container":"input-module_container__alv2w","input":"input-module_input__-ipHD","label":"input-module_label__1B3Is"};

const Input = ({ value, setValue, id, placeholder, type = 'text', label }) => {
    const handleInput = (e) => {
        const providedValue = e.target.value;
        let formattedValue = providedValue.trim();
        if (type === 'id') {
            formattedValue = formatIDNumber(providedValue);
        }
        else if (type === 'mobile') {
            formattedValue = formatMobile(providedValue);
        }
        else {
            formattedValue = providedValue;
        }
        setValue(formattedValue);
    };
    return (jsxRuntime.jsxs("div", { className: styles$d.container, children: [label && (jsxRuntime.jsx("label", { className: styles$d.label, htmlFor: id, children: label })), jsxRuntime.jsx("input", { className: styles$d.input, id: id, type: type, name: id, placeholder: placeholder, onChange: handleInput, value: value })] }));
};

var styles$c = {"defaultVariant":"link-button-module_defaultVariant__tyxtG","defaultWidth":"link-button-module_defaultWidth__Nm6WT","bigWidth":"link-button-module_bigWidth__OAeXp","fullWidth":"link-button-module_fullWidth__2ckdE","secondaryVariant":"link-button-module_secondaryVariant__z4DkW","link":"link-button-module_link__K6URp"};

const LinkButton = ({ href, variant, buttonWidth = 'default', children }) => {
    const defaultVariantStyles = variant === 'secondary' ? styles$c.secondaryVariant : styles$c.defaultVariant;
    let buttonWidthStyles;
    switch (buttonWidth) {
        case 'default':
            buttonWidthStyles = styles$c.defaultWidth;
            break;
        case 'big':
            buttonWidthStyles = styles$c.bigWidth;
            break;
        case 'full-width':
            buttonWidthStyles = styles$c.fullWidth;
            break;
    }
    return (jsxRuntime.jsx("button", { className: `${defaultVariantStyles} ${buttonWidthStyles}`, children: jsxRuntime.jsx("a", { className: styles$c.link, href: href, children: children }) }));
};

var styles$b = {"linkText":"link-text-module_linkText__qYwqc","defaultStyles":"link-text-module_defaultStyles__kZQew","inheritColor":"link-text-module_inheritColor__yQSnN"};

const LinkText = ({ href, color, children }) => {
    const colorStyles = color === 'inherit' ? styles$b.inheritColor : styles$b.defaultStyles;
    return (jsxRuntime.jsx("a", { href: href, className: `${styles$b.linkText} ${colorStyles}`, children: children }));
};

var styles$a = {"loading":"loading-spinner-module_loading__nXARf","loadingSpinner":"loading-spinner-module_loadingSpinner__f9JUw","mulShdSpin":"loading-spinner-module_mulShdSpin__igvx-"};

const LoadingSpinner = () => {
    return (jsxRuntime.jsx("div", { className: styles$a.loading, children: jsxRuntime.jsx("div", { className: styles$a.loadingSpinner }) }));
};

var styles$9 = {"modalHeader":"modal-header-module_modalHeader__SVDKQ"};

const ModalHeader = ({ headerText }) => {
    return jsxRuntime.jsx("header", { className: styles$9.modalHeader, children: !!headerText && jsxRuntime.jsx(Heading, { order: 2, children: headerText }) });
};

var styles$8 = {"modal":"modal-module_modal__Mao59","content":"modal-module_content__inhrw","children":"modal-module_children__2QL6Q"};

const Modal = ({ headerText, header = false, open = false, children }) => {
    return (jsxRuntime.jsx("dialog", { open: open, className: styles$8.modal, children: jsxRuntime.jsxs("div", { className: styles$8.content, children: [(header || headerText) && jsxRuntime.jsx(ModalHeader, { headerText: headerText }), jsxRuntime.jsx("div", { className: styles$8.children, children: children })] }) }));
};

var isStyleObject = function (obj) { return typeof obj === 'object' && obj !== null; };
var OTPInput$1 = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, _c = _a.numInputs, numInputs = _c === void 0 ? 4 : _c, onChange = _a.onChange, onPaste = _a.onPaste, renderInput = _a.renderInput, _d = _a.shouldAutoFocus, shouldAutoFocus = _d === void 0 ? false : _d, _e = _a.inputType, inputType = _e === void 0 ? 'text' : _e, renderSeparator = _a.renderSeparator, placeholder = _a.placeholder, containerStyle = _a.containerStyle, inputStyle = _a.inputStyle, _f = _a.skipDefaultStyles, skipDefaultStyles = _f === void 0 ? false : _f;
    var _g = React.useState(0), activeInput = _g[0], setActiveInput = _g[1];
    var inputRefs = React.useRef([]);
    var getOTPValue = function () { return (value ? value.toString().split('') : []); };
    var isInputNum = inputType === 'number' || inputType === 'tel';
    React.useEffect(function () {
        inputRefs.current = inputRefs.current.slice(0, numInputs);
    }, [numInputs]);
    React.useEffect(function () {
        var _a;
        if (shouldAutoFocus) {
            (_a = inputRefs.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [shouldAutoFocus]);
    var getPlaceholderValue = function () {
        if (typeof placeholder === 'string') {
            if (placeholder.length === numInputs) {
                return placeholder;
            }
            if (placeholder.length > 0) {
                console.error('Length of the placeholder should be equal to the number of inputs.');
            }
        }
        return undefined;
    };
    var isInputValueValid = function (value) {
        var isTypeValid = isInputNum ? !isNaN(Number(value)) : typeof value === 'string';
        return isTypeValid && value.trim().length === 1;
    };
    var handleChange = function (event) {
        var value = event.target.value;
        if (isInputValueValid(value)) {
            changeCodeAtFocus(value);
            focusInput(activeInput + 1);
        }
    };
    var handleInputChange = function (event) {
        var nativeEvent = event.nativeEvent;
        var value = event.target.value;
        if (!isInputValueValid(value)) {
            // Pasting from the native autofill suggestion on a mobile device can pass
            // the pasted string as one long input to one of the cells. This ensures
            // that we handle the full input and not just the first character.
            if (value.length === numInputs) {
                var hasInvalidInput = value.split('').some(function (cellInput) { return !isInputValueValid(cellInput); });
                if (!hasInvalidInput) {
                    handleOTPChange(value.split(''));
                    focusInput(numInputs - 1);
                }
            }
            // @ts-expect-error - This was added previously to handle and edge case
            // for dealing with keyCode "229 Unidentified" on Android. Check if this is
            // still needed.
            if (nativeEvent.data === null && nativeEvent.inputType === 'deleteContentBackward') {
                event.preventDefault();
                changeCodeAtFocus('');
                focusInput(activeInput - 1);
            }
            // Clear the input if it's not valid value because firefox allows
            // pasting non-numeric characters in a number type input
            event.target.value = '';
        }
    };
    var handleFocus = function (event) { return function (index) {
        setActiveInput(index);
        event.target.select();
    }; };
    var handleBlur = function () {
        setActiveInput(activeInput - 1);
    };
    var handleKeyDown = function (event) {
        var otp = getOTPValue();
        if ([event.code, event.key].includes('Backspace')) {
            event.preventDefault();
            changeCodeAtFocus('');
            focusInput(activeInput - 1);
        }
        else if (event.code === 'Delete') {
            event.preventDefault();
            changeCodeAtFocus('');
        }
        else if (event.code === 'ArrowLeft') {
            event.preventDefault();
            focusInput(activeInput - 1);
        }
        else if (event.code === 'ArrowRight') {
            event.preventDefault();
            focusInput(activeInput + 1);
        }
        // React does not trigger onChange when the same value is entered
        // again. So we need to focus the next input manually in this case.
        else if (event.key === otp[activeInput]) {
            event.preventDefault();
            focusInput(activeInput + 1);
        }
        else if (event.code === 'Spacebar' ||
            event.code === 'Space' ||
            event.code === 'ArrowUp' ||
            event.code === 'ArrowDown') {
            event.preventDefault();
        }
    };
    var focusInput = function (index) {
        var _a, _b;
        var activeInput = Math.max(Math.min(numInputs - 1, index), 0);
        if (inputRefs.current[activeInput]) {
            (_a = inputRefs.current[activeInput]) === null || _a === void 0 ? void 0 : _a.focus();
            (_b = inputRefs.current[activeInput]) === null || _b === void 0 ? void 0 : _b.select();
            setActiveInput(activeInput);
        }
    };
    var changeCodeAtFocus = function (value) {
        var otp = getOTPValue();
        otp[activeInput] = value[0];
        handleOTPChange(otp);
    };
    var handleOTPChange = function (otp) {
        var otpValue = otp.join('');
        onChange(otpValue);
    };
    var handlePaste = function (event) {
        var _a;
        event.preventDefault();
        var otp = getOTPValue();
        var nextActiveInput = activeInput;
        // Get pastedData in an array of max size (num of inputs - current position)
        var pastedData = event.clipboardData
            .getData('text/plain')
            .slice(0, numInputs - activeInput)
            .split('');
        // Prevent pasting if the clipboard data contains non-numeric values for number inputs
        if (isInputNum && pastedData.some(function (value) { return isNaN(Number(value)); })) {
            return;
        }
        // Paste data from focused input onwards
        for (var pos = 0; pos < numInputs; ++pos) {
            if (pos >= activeInput && pastedData.length > 0) {
                otp[pos] = (_a = pastedData.shift()) !== null && _a !== void 0 ? _a : '';
                nextActiveInput++;
            }
        }
        focusInput(nextActiveInput);
        handleOTPChange(otp);
    };
    return (React.createElement("div", { style: Object.assign({ display: 'flex', alignItems: 'center' }, isStyleObject(containerStyle) && containerStyle), className: typeof containerStyle === 'string' ? containerStyle : undefined, onPaste: onPaste }, Array.from({ length: numInputs }, function (_, index) { return index; }).map(function (index) {
        var _a, _b, _c;
        return (React.createElement(React.Fragment, { key: index },
            renderInput({
                value: (_a = getOTPValue()[index]) !== null && _a !== void 0 ? _a : '',
                placeholder: (_c = (_b = getPlaceholderValue()) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : undefined,
                ref: function (element) { return (inputRefs.current[index] = element); },
                onChange: handleChange,
                onFocus: function (event) { return handleFocus(event)(index); },
                onBlur: handleBlur,
                onKeyDown: handleKeyDown,
                onPaste: handlePaste,
                autoComplete: 'off',
                'aria-label': "Please enter OTP character ".concat(index + 1),
                style: Object.assign(!skipDefaultStyles ? { width: '1em', textAlign: 'center' } : {}, isStyleObject(inputStyle) ? inputStyle : {}),
                className: typeof inputStyle === 'string' ? inputStyle : undefined,
                type: inputType,
                inputMode: isInputNum ? 'numeric' : 'text',
                onInput: handleInputChange,
            }, index),
            index < numInputs - 1 && (typeof renderSeparator === 'function' ? renderSeparator(index) : renderSeparator)));
    })));
};

var styles$7 = {"container":"otp-input-module_container__xKjdX","input":"otp-input-module_input__RPBdZ"};

const OTPInput = ({ value, setValue }) => {
    return (jsxRuntime.jsx(OTPInput$1, { value: value, onChange: setValue, numInputs: 6, containerStyle: styles$7.container, inputStyle: styles$7.input, renderInput: (props) => jsxRuntime.jsx("input", Object.assign({}, props)) }));
};

var styles$6 = {"defaultStyles":"paragraph-module_defaultStyles__Q0Vby","paragraph":"paragraph-module_paragraph__Xd2qS","action":"paragraph-module_action__UEXq5","centerAlign":"paragraph-module_centerAlign__IglEk","subtle":"paragraph-module_subtle__QCITN","weightLight":"paragraph-module_weightLight__b25t-","weightMedium":"paragraph-module_weightMedium__yU5Pc","weightHeavy":"paragraph-module_weightHeavy__F-anG","xsSize":"paragraph-module_xsSize__8jOt4","smSize":"paragraph-module_smSize__yPpcK","mdSize":"paragraph-module_mdSize__ex-Op","lgSize":"paragraph-module_lgSize__oEZ6u","xlSize":"paragraph-module_xlSize__MOXhl"};

/**
 * `weight` | `'medium'` | Represent `font-weight`
 *  - `'light'` = `400`
 *  - `'medium'` = `500`
 *  - `'heavy'` = `700`
 *
 * `size` | `'md'` | Represents `font-size`
 *  - `'xs'` = `12px`
 *  - `'sm'` = `14px`
 *  - `'md'` = `16px`
 *  - `'lg'` = `18px`
 *  - `'xl'` = `20px`
 */
const Paragraph = ({ variant, weight = 'medium', size = 'md', alignText, children, onClick }) => {
    const textAlign = alignText === 'center' ? styles$6.centerAlign : undefined;
    const variantStyles = variant === 'subtle' ? styles$6.subtle : styles$6.defaultStyles;
    const actionStyles = onClick ? styles$6.action : undefined;
    let weightStyles;
    let sizeStyles;
    switch (weight) {
        case 'light':
            weightStyles = styles$6.weightLight;
            break;
        case 'medium':
            weightStyles = styles$6.weightMedium;
            break;
        case 'heavy':
            weightStyles = styles$6.weightHeavy;
            break;
    }
    switch (size) {
        case 'xs':
            sizeStyles = styles$6.xsSize;
            break;
        case 'sm':
            sizeStyles = styles$6.smSize;
            break;
        case 'md':
            sizeStyles = styles$6.mdSize;
            break;
        case 'lg':
            sizeStyles = styles$6.lgSize;
            break;
        case 'xl':
            sizeStyles = styles$6.xlSize;
            break;
    }
    return (jsxRuntime.jsx("p", { className: `${styles$6.paragraph} ${textAlign} ${variantStyles} ${weightStyles} ${sizeStyles} ${actionStyles}`, onClick: onClick, children: children }));
};

var styles$5 = {"dropdown":"dropdown-module_dropdown__KFhAz","focused":"dropdown-module_focused__1yVdQ"};

const Dropdown = ({ focused, children }) => {
    return jsxRuntime.jsx("div", { className: `${styles$5.dropdown} ${focused ? styles$5.focused : ''}`, children: children });
};

var styles$4 = {"options":"options-module_options__pCxHH","scrollHidden":"options-module_scrollHidden__Lmz3-","scrollOptions":"options-module_scrollOptions__vcOll","selectedOption":"options-module_selectedOption__RE3uV","notSelected":"options-module_notSelected__7FQut","option":"options-module_option__Vdg-X"};

const Options = ({ options, selectOption, selectedValue }) => {
    const scrollStyles = options.length > 4 ? styles$4.scrollOptions : '';
    return (jsxRuntime.jsx("div", { className: `${styles$4.options} ${scrollStyles}`, children: options.map((data, i) => (jsxRuntime.jsx("p", { className: `${selectedValue === data ? styles$4.selectedOption : styles$4.notSelected} ${styles$4.option}`, onClick: () => selectOption(data), children: data }, i))) }));
};

const useClickOutsideElement = (inputRef, onPress) => {
    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                onPress();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onPress, inputRef]);
};

function useKeydown(keyCodes, callback) {
    const handler = ({ code }) => {
        if (keyCodes.includes(code)) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener('keydown', handler);
        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, []);
}

var styles$3 = {"selectChevron":"select-chevron-icon-module_selectChevron__cUIlY","selectChevronFocused":"select-chevron-icon-module_selectChevronFocused__aokl-"};

const SelectChevronIcon = ({ focused, setFocused }) => {
    const handleClick = () => {
        setFocused(!focused);
    };
    return (jsxRuntime.jsx("svg", { onClick: handleClick, className: `${styles$3.selectChevron} ${focused ? styles$3.selectChevronFocused : ''}`, xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", children: jsxRuntime.jsx("path", { d: "M8.99995 12.8254C8.8312 12.8254 8.69058 12.7691 8.54995 12.6566L2.0812 6.30039C1.82808 6.04727 1.82808 5.65352 2.0812 5.40039C2.33433 5.14727 2.72808 5.14727 2.9812 5.40039L8.99995 11.2785L15.0187 5.34414C15.2718 5.09102 15.6656 5.09102 15.9187 5.34414C16.1718 5.59727 16.1718 5.99102 15.9187 6.24414L9.44995 12.6004C9.30933 12.741 9.1687 12.8254 8.99995 12.8254Z", fill: "#64748B" }) }));
};

var styles$2 = {"selectInput":"select-input-module_selectInput__xkT2h","focusedInput":"select-input-module_focusedInput__hqpwh"};

const SelectInput = ({ id, value, onChange, setFocused, focused, placeholder }) => {
    const focusInput = () => {
        setFocused(true);
    };
    const inputRef = React.useRef(null);
    useClickOutsideElement(inputRef, () => setFocused(false));
    useKeydown(['Escape', 'Tab'], () => setFocused(false));
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("input", { ref: inputRef, className: `${styles$2.selectInput} ${focused ? styles$2.focusedInput : ''}`, id: id, name: id, type: 'text', value: value, onChange: onChange, onFocus: focusInput, placeholder: placeholder }), jsxRuntime.jsx(SelectChevronIcon, { focused: focused, setFocused: setFocused })] }));
};

var styles$1 = {"select":"select-module_select__RLsWH","selectLabel":"select-module_selectLabel__8wuKT","selectInput":"select-module_selectInput__3-Xxp"};

const Select = ({ id, onSelect, options, placeholder, label }) => {
    const [focused, setFocused] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');
    const handleInputChange = (e) => {
        setFocused(true);
        const value = e.target.value;
        console.log(value);
    };
    const selectOption = (data) => {
        setFocused(!focused);
        setSelectedValue(data);
        onSelect(data);
    };
    return (jsxRuntime.jsxs("div", { className: styles$1.select, children: [label && (jsxRuntime.jsx("label", { htmlFor: id, className: styles$1.selectLabel, children: label })), jsxRuntime.jsx("div", { className: styles$1.selectInput, children: jsxRuntime.jsxs(Dropdown, { focused: focused, children: [jsxRuntime.jsx(SelectInput, { id: id, value: selectedValue, focused: focused, onChange: handleInputChange, setFocused: setFocused, placeholder: placeholder || 'Select' }), focused && jsxRuntime.jsx(Options, { options: options, selectedValue: selectedValue, selectOption: selectOption })] }) })] }));
};

var styles = {"bulletList":"unordered-list-module_bulletList__AY0JD","noBullets":"unordered-list-module_noBullets__izzZi"};

const UnorderedList = ({ bullets = false, className, style, children }) => {
    const bulletStyles = bullets ? styles.bulletList : styles.noBullets;
    return (jsxRuntime.jsx("ul", { className: `${bulletStyles} ${className}`, style: style, children: children }));
};

exports.ActionButton = ActionButton;
exports.CheckboxInput = CheckboxInput;
exports.FlexContainer = FlexContainer;
exports.GridContainer = GridContainer;
exports.Header = Header;
exports.Heading = Heading;
exports.Input = Input;
exports.LinkButton = LinkButton;
exports.LinkText = LinkText;
exports.LoadingSpinner = LoadingSpinner;
exports.Modal = Modal;
exports.OTPInput = OTPInput;
exports.Paragraph = Paragraph;
exports.Select = Select;
exports.UnorderedList = UnorderedList;
exports.useClickOutsideElement = useClickOutsideElement;
exports.useKeydown = useKeydown;
//# sourceMappingURL=index.js.map
