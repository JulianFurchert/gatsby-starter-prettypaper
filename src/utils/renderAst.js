import React from "react";
import rehypeReact from "rehype-react";
import {Container, ColorCard, FontCard, Textstyle, Image, Lottie, Video, Glyphs} from "../components";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components:{
    "prettypaper-colors": ColorCard,
    "prettypaper-galleryimage": Image,
    "prettypaper-singleimage": Image,
    "prettypaper-font": FontCard,
    "prettypaper-textstyle": Textstyle,
    "prettypaper-lottie": Lottie,
    "prettypaper-container": Container,
    "prettypaper-singlevideo": Video,
    "prettypaper-glyphs": Glyphs,
  },
 }).Compiler;

 export default renderAst;