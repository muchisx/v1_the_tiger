// These are strict versions of CSS types from csstypes
// https://github.com/frenic/csstype/blob/master/index.d.ts#L18457

// These types are manually done and I generate more as I need them

// GLOBALS
export type Global = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

// Units
export type Unit =
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt'
  | 'px'
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'lh'
  | 'rlh'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | 'vb'
  | 'vi'
  | 'svw'
  | 'svh'
  | 'lvw'
  | 'lvh'
  | 'dvw'
  | 'dvh'
  | '%';

// COLORS
export type NamedColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'transparent'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen';

export type CSSHexColor = `#${string}`;

export type CSSColorFunction =
  | `hsl(${number},${number}%,${number}%)`
  | `hsla(${number},${number}%,${number}%,${number})`
  | `hwb(${number},${number}%,${number}`
  | `hsl(${number},${number}%,${number}%)`
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`;

export type CSSColor = NamedColor | CSSHexColor | CSSColorFunction | 'currentColor' | Global;

// Functions
export type CSSFunctionName =
  | 'moz-image-rect'
  | 'abs'
  | 'acos'
  | 'asin'
  | 'atan'
  | 'atan2'
  | 'attr'
  | 'calc'
  | 'clamp'
  | 'cos'
  | 'counter'
  | 'cross-fade'
  | 'element'
  | 'env'
  | 'exp'
  | 'fit-content'
  | 'hypot'
  | 'log'
  | 'max'
  | 'min'
  | 'minmax'
  | 'mod'
  | 'path'
  | 'pow'
  | 'ray'
  | 'rem'
  | 'repeat'
  | 'round'
  | 'sign'
  | 'sin'
  | 'sqrt'
  | 'symbols'
  | 'tan'
  | 'url'
  | 'var';

export type CSSFunction = `${CSSFunctionName}(${string})`;

// Lenghts
export type GlobalLenght =
  | '-moz-fit-content'
  | '-moz-max-content'
  | '-moz-min-content'
  | '-webkit-fit-content'
  | '-webkit-max-content'
  | 'auto'
  | 'fit-content'
  | 'intrinsic'
  | 'max-content'
  | 'min-content'
  | 'min-intrinsic';

export type NumberWithUnit = `${number}${Unit}` | 0;
export type GeneralLenght = NumberWithUnit | GlobalLenght | CSSFunction | Global;

export type Height = GeneralLenght;
export type Width = GeneralLenght;

// Fonts
export type AbsoluteFontSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large';

export type RelativeFontSize = 'smaller' | 'larger';
export type FontSize = AbsoluteFontSize | RelativeFontSize | NumberWithUnit | CSSFunction | Global;

// @Property text-align

export type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent'
  | Global;

// @Property resize

export type Resize = 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline' | Global;
