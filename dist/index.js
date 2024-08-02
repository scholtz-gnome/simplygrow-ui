'use strict';

var React = require('react');

var styles$3 = {"headingOne":"heading-module_headingOne__gOIMQ","headingTwo":"heading-module_headingTwo__Y-i2W","headingThree":"heading-module_headingThree__Of688","textAlign":"heading-module_textAlign__Dm75T"};

const Heading = ({ order = 1, textAlign, children }) => {
    const textAlignStyles = textAlign === 'center' ? styles$3.textAlign : undefined;
    let headingElement = React.createElement("h1", { className: `${styles$3.headingOne} ${textAlignStyles}` }, children);
    switch (order) {
        case 2:
            headingElement = React.createElement("h2", { className: `${styles$3.headingTwo} ${textAlignStyles}` }, children);
            break;
        case 3:
            headingElement = React.createElement("h3", { className: `${styles$3.headingThree} ${textAlignStyles}` }, children);
            break;
    }
    return headingElement;
};

var styles$2 = {"header":"header-module_header__Tv17b"};

const Header = ({ children }) => {
    return (React.createElement("header", { className: styles$2.header },
        React.createElement(Heading, { order: 2 }, children)));
};

var styles$1 = {"containerStyles":"flex-container-module_containerStyles__ochhf","children":"flex-container-module_children__YvOuW","flexContainer":"flex-container-module_flexContainer__sjCC6","flexDirectionColumn":"flex-container-module_flexDirectionColumn__wD97f","justifySpaceBetween":"flex-container-module_justifySpaceBetween__TlWte","justifyFlexEnd":"flex-container-module_justifyFlexEnd__2Wl6W","justifyCenter":"flex-container-module_justifyCenter__9Miyp","alignSpaceBetween":"flex-container-module_alignSpaceBetween__zaMWT","alignFlexEnd":"flex-container-module_alignFlexEnd__Oj6iR","alignCenter":"flex-container-module_alignCenter__01oXx","xsGap":"flex-container-module_xsGap__R-otE","smGap":"flex-container-module_smGap__5oYmU","mdGap":"flex-container-module_mdGap__3IIbh","lgGap":"flex-container-module_lgGap__IybLF","xlGap":"flex-container-module_xlGap__JdQP4"};

/**
 * gap | default `xs`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
const FlexContainer = ({ flexDirection, justify, align, gap, children, headerText, styledContainer, className, }) => {
    const containerStyles = styledContainer ? styles$1.containerStyles : undefined;
    const flexDirectionStyles = flexDirection === 'column' ? styles$1.flexDirectionColumn : undefined;
    let justifyStyles;
    let alignStyles;
    let gapStyles;
    switch (gap) {
        case 'xs':
            gapStyles = styles$1.xsGap;
            break;
        case 'sm':
            gapStyles = styles$1.smGap;
            break;
        case 'md':
            gapStyles = styles$1.mdGap;
            break;
        case 'lg':
            gapStyles = styles$1.lgGap;
            break;
        case 'xl':
            gapStyles = styles$1.xlGap;
            break;
    }
    switch (justify) {
        case 'space-between':
            justifyStyles = styles$1.justifySpaceBetween;
            break;
        case 'flex-end':
            justifyStyles = styles$1.justifyFlexEnd;
            break;
        case 'center':
            justifyStyles = styles$1.justifyCenter;
            break;
    }
    switch (align) {
        case 'space-between':
            alignStyles = styles$1.alignSpaceBetween;
            break;
        case 'flex-end':
            alignStyles = styles$1.alignFlexEnd;
            break;
        case 'center':
            alignStyles = styles$1.alignCenter;
            break;
    }
    return (React.createElement("div", { className: `${styles$1.flexContainer} ${flexDirectionStyles} ${justifyStyles} ${alignStyles} ${gapStyles} ${containerStyles} ${className}` },
        !!headerText && React.createElement(Header, null, headerText),
        styledContainer && React.createElement("div", { className: styles$1.children }, children),
        !styledContainer && children));
};

var styles = {"defaultStyles":"paragraph-module_defaultStyles__Q0Vby","paragraph":"paragraph-module_paragraph__Xd2qS","action":"paragraph-module_action__UEXq5","centerAlign":"paragraph-module_centerAlign__IglEk","subtle":"paragraph-module_subtle__QCITN","weightLight":"paragraph-module_weightLight__b25t-","weightMedium":"paragraph-module_weightMedium__yU5Pc","weightHeavy":"paragraph-module_weightHeavy__F-anG","xsSize":"paragraph-module_xsSize__8jOt4","smSize":"paragraph-module_smSize__yPpcK","mdSize":"paragraph-module_mdSize__ex-Op","lgSize":"paragraph-module_lgSize__oEZ6u","xlSize":"paragraph-module_xlSize__MOXhl"};

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
    const textAlign = alignText === 'center' ? styles.centerAlign : undefined;
    const variantStyles = variant === 'subtle' ? styles.subtle : styles.defaultStyles;
    const actionStyles = onClick ? styles.action : undefined;
    let weightStyles;
    let sizeStyles;
    switch (weight) {
        case 'light':
            weightStyles = styles.weightLight;
            break;
        case 'medium':
            weightStyles = styles.weightMedium;
            break;
        case 'heavy':
            weightStyles = styles.weightHeavy;
            break;
    }
    switch (size) {
        case 'xs':
            sizeStyles = styles.xsSize;
            break;
        case 'sm':
            sizeStyles = styles.smSize;
            break;
        case 'md':
            sizeStyles = styles.mdSize;
            break;
        case 'lg':
            sizeStyles = styles.lgSize;
            break;
        case 'xl':
            sizeStyles = styles.xlSize;
            break;
    }
    return (React.createElement("p", { className: `${styles.paragraph} ${textAlign} ${variantStyles} ${weightStyles} ${sizeStyles} ${actionStyles}`, onClick: onClick }, children));
};

exports.FlexContainer = FlexContainer;
exports.Header = Header;
exports.Heading = Heading;
exports.Paragraph = Paragraph;
//# sourceMappingURL=index.js.map
