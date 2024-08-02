'use strict';

var React = require('react');

var styles$2 = {"headingOne":"heading-module_headingOne__gOIMQ","headingTwo":"heading-module_headingTwo__Y-i2W","headingThree":"heading-module_headingThree__Of688","textAlign":"heading-module_textAlign__Dm75T"};

const Heading = ({ order = 1, textAlign, children }) => {
    const textAlignStyles = textAlign === 'center' ? styles$2.textAlign : undefined;
    let headingElement = React.createElement("h1", { className: `${styles$2.headingOne} ${textAlignStyles}` }, children);
    switch (order) {
        case 2:
            headingElement = React.createElement("h2", { className: `${styles$2.headingTwo} ${textAlignStyles}` }, children);
            break;
        case 3:
            headingElement = React.createElement("h3", { className: `${styles$2.headingThree} ${textAlignStyles}` }, children);
            break;
    }
    return headingElement;
};

var styles$1 = {"header":"header-module_header__Tv17b"};

const Header = ({ children }) => {
    return (React.createElement("header", { className: styles$1.header },
        React.createElement(Heading, { order: 2 }, children)));
};

var styles = {"containerStyles":"flex-container-module_containerStyles__ochhf","children":"flex-container-module_children__YvOuW","flexContainer":"flex-container-module_flexContainer__sjCC6","flexDirectionColumn":"flex-container-module_flexDirectionColumn__wD97f","justifySpaceBetween":"flex-container-module_justifySpaceBetween__TlWte","justifyFlexEnd":"flex-container-module_justifyFlexEnd__2Wl6W","justifyCenter":"flex-container-module_justifyCenter__9Miyp","alignSpaceBetween":"flex-container-module_alignSpaceBetween__zaMWT","alignFlexEnd":"flex-container-module_alignFlexEnd__Oj6iR","alignCenter":"flex-container-module_alignCenter__01oXx","xsGap":"flex-container-module_xsGap__R-otE","smGap":"flex-container-module_smGap__5oYmU","mdGap":"flex-container-module_mdGap__3IIbh","lgGap":"flex-container-module_lgGap__IybLF","xlGap":"flex-container-module_xlGap__JdQP4"};

/**
 * gap | default `xs`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
const FlexContainer = ({ flexDirection, justify, align, gap, children, headerText, styledContainer, className, }) => {
    const containerStyles = styledContainer ? styles.containerStyles : undefined;
    const flexDirectionStyles = flexDirection === 'column' ? styles.flexDirectionColumn : undefined;
    let justifyStyles;
    let alignStyles;
    let gapStyles;
    switch (gap) {
        case 'xs':
            gapStyles = styles.xsGap;
            break;
        case 'sm':
            gapStyles = styles.smGap;
            break;
        case 'md':
            gapStyles = styles.mdGap;
            break;
        case 'lg':
            gapStyles = styles.lgGap;
            break;
        case 'xl':
            gapStyles = styles.xlGap;
            break;
    }
    switch (justify) {
        case 'space-between':
            justifyStyles = styles.justifySpaceBetween;
            break;
        case 'flex-end':
            justifyStyles = styles.justifyFlexEnd;
            break;
        case 'center':
            justifyStyles = styles.justifyCenter;
            break;
    }
    switch (align) {
        case 'space-between':
            alignStyles = styles.alignSpaceBetween;
            break;
        case 'flex-end':
            alignStyles = styles.alignFlexEnd;
            break;
        case 'center':
            alignStyles = styles.alignCenter;
            break;
    }
    return (React.createElement("div", { className: `${styles.flexContainer} ${flexDirectionStyles} ${justifyStyles} ${alignStyles} ${gapStyles} ${containerStyles} ${className}` },
        !!headerText && React.createElement(Header, null, headerText),
        styledContainer && React.createElement("div", { className: styles.children }, children),
        !styledContainer && children));
};

exports.FlexContainer = FlexContainer;
exports.Header = Header;
exports.Heading = Heading;
//# sourceMappingURL=index.js.map
