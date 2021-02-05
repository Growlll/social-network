import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg" alt=""/>
      { props.message }
      <div>
        Like: {props.countsLikes}
      </div>
    </div>
  )
}

export default Post