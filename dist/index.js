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

var css_248z$2 = ".heading-module_headingOne__MTjx8 {\n  font-weight: 700;\n  color: #20283f;\n  line-height: 30px;\n  font-size: 26px;\n}\n\n.heading-module_headingTwo__PVZQ8 {\n  font-weight: 600;\n  color: #20283f;\n  line-height: 24px;\n  font-size: 22px;\n}\n\n.heading-module_headingThree__miRIS {\n  font-weight: 500;\n  color: #20283f;\n  line-height: 24px;\n  font-size: 16px;\n}\n\n.heading-module_textAlign__HphyQ {\n  text-align: center;\n}\n";
var styles$2 = {"headingOne":"heading-module_headingOne__MTjx8","headingTwo":"heading-module_headingTwo__PVZQ8","headingThree":"heading-module_headingThree__miRIS","textAlign":"heading-module_textAlign__HphyQ"};
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

var css_248z$1 = ".header-module_header__-VpOI {\n  border-bottom: 1px solid #e2e8f0;\n  min-height: 54px;\n  padding: 15px 26px;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 650px) {\n  .header-module_header__-VpOI {\n    padding: 12px;\n  }\n}\n";
var styles$1 = {"header":"header-module_header__-VpOI"};
styleInject(css_248z$1);

const Header = ({ children }) => {
    return (React.createElement("header", { className: styles$1.header },
        React.createElement(Heading, { order: 2 }, children)));
};

var css_248z = ".flex-container-module_containerStyles__a9iFw {\n  background-color: #ffffff;\n  width: 590px;\n  border-radius: 2px;\n  box-shadow: 0px 8px 13px -3px rgba(0, 0, 0, 0.07);\n}\n\n.flex-container-module_children__JrbrP {\n  padding: 26px;\n}\n\n.flex-container-module_flexContainer__33S0Z {\n  display: flex;\n}\n\n.flex-container-module_flexDirectionColumn__2EFjN {\n  flex-direction: column;\n}\n\n.flex-container-module_justifySpaceBetween__4xCgx {\n  justify-content: space-between;\n}\n\n.flex-container-module_justifyFlexEnd__IeVBd {\n  justify-content: flex-end;\n}\n\n.flex-container-module_justifyCenter__8u9pZ {\n  justify-content: center;\n}\n\n.flex-container-module_alignSpaceBetween__eu8oJ {\n  align-items: space-between;\n}\n\n.flex-container-module_alignFlexEnd__Mp-xB {\n  align-items: flex-end;\n}\n\n.flex-container-module_alignCenter__kMVg3 {\n  align-items: center;\n}\n\n.flex-container-module_xsGap__BUcUC {\n  gap: 6px;\n}\n\n.flex-container-module_smGap__BJnHl {\n  gap: 8px;\n}\n\n.flex-container-module_mdGap__A7gGN {\n  gap: 12px;\n}\n\n.flex-container-module_lgGap__iBX1V {\n  gap: 18px;\n}\n\n.flex-container-module_xlGap__fh6f6 {\n  gap: 24px;\n}\n";
var styles = {"containerStyles":"flex-container-module_containerStyles__a9iFw","children":"flex-container-module_children__JrbrP","flexContainer":"flex-container-module_flexContainer__33S0Z","flexDirectionColumn":"flex-container-module_flexDirectionColumn__2EFjN","justifySpaceBetween":"flex-container-module_justifySpaceBetween__4xCgx","justifyFlexEnd":"flex-container-module_justifyFlexEnd__IeVBd","justifyCenter":"flex-container-module_justifyCenter__8u9pZ","alignSpaceBetween":"flex-container-module_alignSpaceBetween__eu8oJ","alignFlexEnd":"flex-container-module_alignFlexEnd__Mp-xB","alignCenter":"flex-container-module_alignCenter__kMVg3","xsGap":"flex-container-module_xsGap__BUcUC","smGap":"flex-container-module_smGap__BJnHl","mdGap":"flex-container-module_mdGap__A7gGN","lgGap":"flex-container-module_lgGap__iBX1V","xlGap":"flex-container-module_xlGap__fh6f6"};
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
