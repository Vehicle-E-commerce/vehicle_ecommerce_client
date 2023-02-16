import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
#root {
    height: 100%;
    width: 100%;
}
:root {
    --brand1: #4529E6
    --brand2: #5126EA
    --brand3: #B0A6F0
    --brand4: #EDEAFD

    --grey0: #0B0D0D;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;

    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;
    --sucess1: #18794E;
    --sucess1: #CCEBD7ç
    --sucess1: #DDF3E4;


    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random3: #6100FF;
    --random4: #5700E3;
    --random5: #30007D;
    --random5: #7000FF;
    --random6: #6200E3;
    --random7: #36007D;
    --random8: #349974;
    --random9: #2A7D5F;
    --random10: #153D2E;
    --random11: #FFFFFF;
    --random12: #000000;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;