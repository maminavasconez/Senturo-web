/* @ds-bundle: {"format":4,"namespace":"SenturoDesignSystem_139f60","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"0787c70b0ac5","components/display/Avatar.jsx":"4119cc22c671","components/display/Badge.jsx":"7f4818654656","components/display/Card.jsx":"a865dbf6ab7b","components/display/Tag.jsx":"fca538c278d5","components/forms/Checkbox.jsx":"946984dc0af0","components/forms/Input.jsx":"a7e090eda298","components/forms/Switch.jsx":"7db146c2f194"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SenturoDesignSystem_139f60 = window.SenturoDesignSystem_139f60 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
  type = 'button',
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizeMap = {
    xs: {
      fontSize: 'var(--text-xs)',
      padding: '0 10px',
      height: '28px',
      borderRadius: 'var(--radius-sm)',
      gap: '4px'
    },
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '0 14px',
      height: '34px',
      borderRadius: 'var(--radius-sm)',
      gap: '5px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '0 18px',
      height: '40px',
      borderRadius: 'var(--radius-md)',
      gap: '6px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '0 22px',
      height: '48px',
      borderRadius: 'var(--radius-md)',
      gap: '7px'
    },
    xl: {
      fontSize: 'var(--text-lg)',
      padding: '0 28px',
      height: '56px',
      borderRadius: 'var(--radius-lg)',
      gap: '8px'
    }
  };
  const variantStyles = {
    primary: {
      base: {
        background: 'var(--color-brand)',
        color: 'white',
        border: '1.5px solid transparent'
      },
      hover: {
        background: 'var(--color-brand-hover)'
      },
      active: {
        background: 'var(--color-brand-active)'
      },
      disabled: {
        background: 'var(--gray-200)',
        color: 'var(--text-disabled)'
      }
    },
    secondary: {
      base: {
        background: 'var(--purple-50)',
        color: 'var(--color-brand)',
        border: '1.5px solid transparent'
      },
      hover: {
        background: 'var(--purple-100)',
        color: 'var(--purple-700)'
      },
      active: {
        background: 'var(--purple-200)',
        color: 'var(--purple-800)'
      },
      disabled: {
        background: 'var(--gray-100)',
        color: 'var(--text-disabled)'
      }
    },
    outline: {
      base: {
        background: 'transparent',
        color: 'var(--color-brand)',
        border: '1.5px solid var(--color-brand)'
      },
      hover: {
        background: 'var(--purple-50)'
      },
      active: {
        background: 'var(--purple-100)'
      },
      disabled: {
        color: 'var(--text-disabled)',
        border: '1.5px solid var(--border-default)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1.5px solid transparent'
      },
      hover: {
        background: 'var(--gray-100)',
        color: 'var(--text-primary)'
      },
      active: {
        background: 'var(--gray-200)'
      },
      disabled: {
        color: 'var(--text-disabled)'
      }
    },
    neutral: {
      base: {
        background: 'var(--gray-100)',
        color: 'var(--text-primary)',
        border: '1.5px solid transparent'
      },
      hover: {
        background: 'var(--gray-200)'
      },
      active: {
        background: 'var(--gray-300)',
        color: 'var(--gray-900)'
      },
      disabled: {
        background: 'var(--gray-100)',
        color: 'var(--text-disabled)'
      }
    },
    danger: {
      base: {
        background: 'var(--color-error)',
        color: 'white',
        border: '1.5px solid transparent'
      },
      hover: {
        background: '#a82222'
      },
      active: {
        background: '#8c1b1b'
      },
      disabled: {
        background: 'var(--gray-200)',
        color: 'var(--text-disabled)'
      }
    }
  };
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeMap[size] || sizeMap.md;
  const style = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-semibold)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    height: s.height,
    fontSize: s.fontSize,
    borderRadius: s.borderRadius,
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 0.14s ease, color 0.14s ease, border-color 0.14s ease, box-shadow 0.14s ease',
    outline: 'none',
    whiteSpace: 'nowrap',
    letterSpacing: 'var(--tracking-snug)',
    lineHeight: 1,
    userSelect: 'none',
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
    boxSizing: 'border-box',
    ...(disabled ? v.disabled : {
      ...v.base,
      ...(hovered ? v.hover : {}),
      ...(active ? v.active : {})
    })
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: style,
    disabled: disabled,
    type: type,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setActive(false);
    },
    onMouseDown: () => !disabled && setActive(true),
    onMouseUp: () => setActive(false)
  }, props), leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 0,
      flexShrink: 0
    }
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 0,
      flexShrink: 0
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  name,
  size = 'md',
  status,
  shape = 'circle',
  ...props
}) {
  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    '2xl': 80
  };
  const px = sizeMap[size] || 40;
  const initials = name ? name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase() : '?';
  const palettes = [['var(--purple-100)', 'var(--purple-700)'], ['var(--color-info-subtle)', 'var(--color-info)'], ['var(--color-success-subtle)', 'var(--color-success)'], ['var(--color-warning-subtle)', 'var(--color-warning)'], ['var(--gray-200)', 'var(--gray-600)']];
  const hash = (name || '?').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const [bg, fg] = palettes[hash % palettes.length];
  const statusColors = {
    online: 'var(--color-success)',
    busy: 'var(--color-error)',
    away: 'var(--color-warning)',
    offline: 'var(--gray-300)'
  };
  const borderRadius = shape === 'square' ? 'var(--radius-md)' : shape === 'rounded' ? 'var(--radius-lg)' : '50%';
  const statusSize = Math.max(8, Math.round(px * 0.26));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      lineHeight: 0
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px + 'px',
      height: px + 'px',
      borderRadius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'transparent' : bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--font-semibold)',
      fontSize: px * 0.36 + 'px',
      flexShrink: 0,
      userSelect: 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '-1px',
      right: '-1px',
      width: statusSize + 'px',
      height: statusSize + 'px',
      borderRadius: '50%',
      background: statusColors[status] || 'var(--gray-300)',
      border: '2px solid white',
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  variant = 'brand',
  size = 'md',
  dot = false,
  ...props
}) {
  const variantMap = {
    brand: {
      bg: 'var(--purple-50)',
      color: 'var(--purple-700)',
      border: 'var(--purple-100)'
    },
    success: {
      bg: 'var(--color-success-subtle)',
      color: 'var(--color-success)',
      border: 'var(--color-success-border)'
    },
    warning: {
      bg: 'var(--color-warning-subtle)',
      color: 'var(--color-warning)',
      border: 'var(--color-warning-border)'
    },
    error: {
      bg: 'var(--color-error-subtle)',
      color: 'var(--color-error)',
      border: 'var(--color-error-border)'
    },
    info: {
      bg: 'var(--color-info-subtle)',
      color: 'var(--color-info)',
      border: 'var(--color-info-border)'
    },
    neutral: {
      bg: 'var(--gray-100)',
      color: 'var(--text-secondary)',
      border: 'var(--gray-200)'
    },
    dark: {
      bg: 'var(--gray-800)',
      color: 'var(--gray-50)',
      border: 'var(--gray-700)'
    }
  };
  const sizeMap = {
    sm: {
      fontSize: 'var(--text-2xs)',
      padding: '2px 6px',
      height: '18px',
      borderRadius: 'var(--radius-xs)',
      gap: '3px'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '2px 8px',
      height: '22px',
      borderRadius: 'var(--radius-sm)',
      gap: '4px'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '4px 10px',
      height: '26px',
      borderRadius: 'var(--radius-sm)',
      gap: '5px'
    }
  };
  const v = variantMap[variant] || variantMap.neutral;
  const s = sizeMap[size] || sizeMap.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--font-semibold)',
      fontSize: s.fontSize,
      padding: s.padding,
      height: s.height,
      borderRadius: s.borderRadius,
      background: v.bg,
      color: v.color,
      border: `1px solid ${v.border}`,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      userSelect: 'none'
    }
  }, props), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: v.color,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 'md',
  radius = 'md',
  shadow = 'sm',
  interactive = false,
  selected = false,
  as: Tag = 'div',
  onClick,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const paddingMap = {
    none: 0,
    xs: 'var(--space-3)',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
    xl: 'var(--space-10)'
  };
  const radiusMap = {
    none: 0,
    sm: 'var(--radius-sm)',
    md: 'var(--radius-lg)',
    lg: 'var(--radius-xl)',
    xl: 'var(--radius-2xl)'
  };
  const shadowMap = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const borderColor = selected ? 'var(--color-brand)' : hovered && interactive ? 'var(--border-strong)' : 'var(--border-default)';
  const boxShadow = hovered && interactive && !selected ? 'var(--shadow-md)' : shadowMap[shadow] || shadowMap.sm;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: 'var(--surface-base)',
      border: `${selected ? '1.5px' : '1px'} solid ${borderColor}`,
      borderRadius: radiusMap[radius] || radiusMap.md,
      padding: paddingMap[padding] !== undefined ? paddingMap[padding] : padding,
      boxShadow,
      transition: interactive ? 'box-shadow 0.15s ease, border-color 0.15s ease, transform 0.15s ease' : undefined,
      cursor: interactive ? 'pointer' : 'default',
      transform: hovered && interactive ? 'translateY(-1px)' : undefined,
      boxSizing: 'border-box'
    },
    onMouseEnter: () => interactive && setHovered(true),
    onMouseLeave: () => interactive && setHovered(false),
    onClick: onClick
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  color = 'default',
  size = 'md',
  ...props
}) {
  const [removeHover, setRemoveHover] = React.useState(false);
  const colorMap = {
    default: {
      bg: 'var(--gray-100)',
      color: 'var(--text-secondary)',
      border: 'var(--border-default)'
    },
    brand: {
      bg: 'var(--purple-50)',
      color: 'var(--purple-700)',
      border: 'var(--purple-100)'
    },
    success: {
      bg: 'var(--color-success-subtle)',
      color: 'var(--color-success)',
      border: 'var(--color-success-border)'
    },
    warning: {
      bg: 'var(--color-warning-subtle)',
      color: 'var(--color-warning)',
      border: 'var(--color-warning-border)'
    },
    error: {
      bg: 'var(--color-error-subtle)',
      color: 'var(--color-error)',
      border: 'var(--color-error-border)'
    },
    info: {
      bg: 'var(--color-info-subtle)',
      color: 'var(--color-info)',
      border: 'var(--color-info-border)'
    }
  };
  const sizeMap = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '2px 7px',
      borderRadius: 'var(--radius-sm)',
      gap: '4px',
      iconSz: 10
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      gap: '5px',
      iconSz: 12
    }
  };
  const c = colorMap[color] || colorMap.default;
  const s = sizeMap[size] || sizeMap.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--font-medium)',
      fontSize: s.fontSize,
      padding: onRemove ? `${s.padding.split(' ')[0]} 6px ${s.padding.split(' ')[0]} ${s.padding.split(' ')[1]}` : s.padding,
      borderRadius: s.borderRadius,
      background: c.bg,
      color: c.color,
      border: `1px solid ${c.border}`,
      lineHeight: 1.4,
      userSelect: 'none'
    }
  }, props), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    onMouseEnter: () => setRemoveHover(true),
    onMouseLeave: () => setRemoveHover(false),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      color: c.color,
      opacity: removeHover ? 1 : 0.55,
      transition: 'opacity 0.12s ease',
      lineHeight: 0,
      marginLeft: '2px'
    },
    "aria-label": "Remove"
  }, /*#__PURE__*/React.createElement("svg", {
    width: s.iconSz,
    height: s.iconSz,
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "2",
    x2: "10",
    y2: "10",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "2",
    x2: "2",
    y2: "10",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  label,
  description,
  size = 'md',
  ...props
}) {
  const sizeMap = {
    sm: 14,
    md: 18,
    lg: 22
  };
  const sz = sizeMap[size] || 18;
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none'
    },
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    role: "checkbox",
    "aria-checked": indeterminate ? 'mixed' : checked,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz + 'px',
      height: sz + 'px',
      minWidth: sz + 'px',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--color-brand)' : 'var(--border-strong)'}`,
      background: on ? 'var(--color-brand)' : 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 0.14s ease, border-color 0.14s ease',
      flexShrink: 0,
      marginTop: label ? '2px' : 0
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: sz * 0.6,
    height: sz * 0.6,
    viewBox: "0 0 10 10",
    fill: "none"
  }, indeterminate ? /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "5",
    x2: "8",
    y2: "5",
    stroke: "white",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }) : /*#__PURE__*/React.createElement("polyline", {
    points: "1.5,5 4,7.5 8.5,2.5",
    stroke: "white",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      lineHeight: 1.5
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  size = 'md',
  error,
  hint,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = true,
  required = false,
  id,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const sizeMap = {
    sm: {
      height: '34px',
      fontSize: 'var(--text-sm)',
      padding: '0 12px',
      borderRadius: 'var(--radius-sm)',
      iconOffset: '10px'
    },
    md: {
      height: '40px',
      fontSize: 'var(--text-sm)',
      padding: '0 14px',
      borderRadius: 'var(--radius-md)',
      iconOffset: '12px'
    },
    lg: {
      height: '48px',
      fontSize: 'var(--text-base)',
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      iconOffset: '14px'
    }
  };
  const s = sizeMap[size] || sizeMap.md;
  const hasLeft = !!leftIcon;
  const hasRight = !!rightIcon;
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  const boxShadow = focused ? error ? 'var(--shadow-focus-error)' : 'var(--shadow-focus)' : 'none';
  const inputPad = hasLeft && hasRight ? '0 36px' : hasLeft ? '0 14px 0 36px' : hasRight ? '0 36px 0 14px' : s.padding;
  const inputStyle = {
    width: fullWidth ? '100%' : 'auto',
    height: s.height,
    fontSize: s.fontSize,
    padding: inputPad,
    borderRadius: s.borderRadius,
    border: `1.5px solid ${borderColor}`,
    background: disabled ? 'var(--surface-muted)' : 'var(--surface-base)',
    color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.14s ease, box-shadow 0.14s ease',
    boxShadow,
    cursor: disabled ? 'not-allowed' : 'text',
    boxSizing: 'border-box'
  };
  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    lineHeight: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      width: fullWidth ? '100%' : 'auto'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--font-medium)',
      color: error ? 'var(--color-error)' : 'var(--text-secondary)',
      lineHeight: 1.4
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-error)',
      marginLeft: '3px'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: fullWidth ? '100%' : 'auto'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      ...iconStyle,
      left: s.iconOffset
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    style: inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, props)), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      ...iconStyle,
      right: s.iconOffset
    }
  }, rightIcon)), (error || hint) && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-error)' : 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.4
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  description,
  ...props
}) {
  const sizeMap = {
    sm: {
      trackW: 32,
      trackH: 18,
      thumbSz: 14,
      offset: 2
    },
    md: {
      trackW: 40,
      trackH: 22,
      thumbSz: 18,
      offset: 2
    },
    lg: {
      trackW: 48,
      trackH: 26,
      thumbSz: 22,
      offset: 2
    }
  };
  const s = sizeMap[size] || sizeMap.md;
  const thumbTranslate = checked ? s.trackW - s.thumbSz - s.offset : s.offset;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: label ? 'flex-start' : 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none'
    },
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: s.trackW + 'px',
      height: s.trackH + 'px',
      borderRadius: '9999px',
      background: checked ? 'var(--color-brand)' : 'var(--gray-300)',
      transition: 'background 0.18s ease',
      flexShrink: 0,
      marginTop: label ? '2px' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: thumbTranslate + 'px',
      width: s.thumbSz + 'px',
      height: s.thumbSz + 'px',
      borderRadius: '50%',
      background: 'white',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left 0.18s ease'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--font-medium)',
      color: 'var(--text-primary)',
      lineHeight: 1.4
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
