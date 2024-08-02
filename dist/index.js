'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".heading-module_headingOne__gOIMQ {\n  font-weight: 700;\n  color: #20283f;\n  line-height: 30px;\n  font-size: 26px;\n}\n\n.heading-module_headingTwo__Y-i2W {\n  font-weight: 600;\n  color: #20283f;\n  line-height: 24px;\n  font-size: 22px;\n}\n\n.heading-module_headingThree__Of688 {\n  font-weight: 500;\n  color: #20283f;\n  line-height: 24px;\n  font-size: 16px;\n}\n\n.heading-module_textAlign__Dm75T {\n  text-align: center;\n}\n";
var styles$2 = {"headingOne":"heading-module_headingOne__gOIMQ","headingTwo":"heading-module_headingTwo__Y-i2W","headingThree":"heading-module_headingThree__Of688","textAlign":"heading-module_textAlign__Dm75T"};
styleInject(css_248z$2);

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

var css_248z$1 = ".header-module_header__Tv17b {\n  border-bottom: 1px solid #e2e8f0;\n  min-height: 54px;\n  padding: 15px 26px;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 650px) {\n  .header-module_header__Tv17b {\n    padding: 12px;\n  }\n}\n";
var styles$1 = {"header":"header-module_header__Tv17b"};
styleInject(css_248z$1);

const Header = ({ children }) => {
    return (React.createElement("header", { className: styles$1.header },
        React.createElement(Heading, { order: 2 }, children)));
};

var css_248z = ".flex-container-module_containerStyles__ochhf {\n  background-color: #ffffff;\n  width: 590px;\n  border-radius: 2px;\n  box-shadow: 0px 8px 13px -3px rgba(0, 0, 0, 0.07);\n}\n\n.flex-container-module_children__YvOuW {\n  padding: 26px;\n}\n\n.flex-container-module_flexContainer__sjCC6 {\n  display: flex;\n}\n\n.flex-container-module_flexDirectionColumn__wD97f {\n  flex-direction: column;\n}\n\n.flex-container-module_justifySpaceBetween__TlWte {\n  justify-content: space-between;\n}\n\n.flex-container-module_justifyFlexEnd__2Wl6W {\n  justify-content: flex-end;\n}\n\n.flex-container-module_justifyCenter__9Miyp {\n  justify-content: center;\n}\n\n.flex-container-module_alignSpaceBetween__zaMWT {\n  align-items: space-between;\n}\n\n.flex-container-module_alignFlexEnd__Oj6iR {\n  align-items: flex-end;\n}\n\n.flex-container-module_alignCenter__01oXx {\n  align-items: center;\n}\n\n.flex-container-module_xsGap__R-otE {\n  gap: 6px;\n}\n\n.flex-container-module_smGap__5oYmU {\n  gap: 8px;\n}\n\n.flex-container-module_mdGap__3IIbh {\n  gap: 12px;\n}\n\n.flex-container-module_lgGap__IybLF {\n  gap: 18px;\n}\n\n.flex-container-module_xlGap__JdQP4 {\n  gap: 24px;\n}\n";
var styles = {"containerStyles":"flex-container-module_containerStyles__ochhf","children":"flex-container-module_children__YvOuW","flexContainer":"flex-container-module_flexContainer__sjCC6","flexDirectionColumn":"flex-container-module_flexDirectionColumn__wD97f","justifySpaceBetween":"flex-container-module_justifySpaceBetween__TlWte","justifyFlexEnd":"flex-container-module_justifyFlexEnd__2Wl6W","justifyCenter":"flex-container-module_justifyCenter__9Miyp","alignSpaceBetween":"flex-container-module_alignSpaceBetween__zaMWT","alignFlexEnd":"flex-container-module_alignFlexEnd__Oj6iR","alignCenter":"flex-container-module_alignCenter__01oXx","xsGap":"flex-container-module_xsGap__R-otE","smGap":"flex-container-module_smGap__5oYmU","mdGap":"flex-container-module_mdGap__3IIbh","lgGap":"flex-container-module_lgGap__IybLF","xlGap":"flex-container-module_xlGap__JdQP4"};
styleInject(css_248z);

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
