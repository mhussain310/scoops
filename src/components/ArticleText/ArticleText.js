import React from "react";

const ArticleText = ({ text, bold }) => {
  return (
    <div className="article-text__wrapper">
      <div
        className={`article-text__container ${
          bold ? "article-text__container--bold" : ""
        }`}
      >
        <p className="article-text__content">
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          recusandae nisi aliquid facilis qui sint deleniti eaque necessitatibus
          quod repudiandae ipsam beatae obcaecati dolores magni hic, a in
          aperiam quidem quos maiores saepe exercitationem! Amet tempore
          doloribus velit adipisci at rerum est.
          <br />
          Provident laboriosam obcaecati harum quidem non? Accusantium ratione
          nobis error sit quod aliquid possimus quos, minima architecto nesciunt
          maiores consequatur, voluptatum a, illum ad corrupti non et. Natus
          omnis libero tenetur, vitae inventore itaque ab laboriosam ex?
          Provident quis quidem, illum consequuntur ea, labore cupiditate animi
          perspiciatis necessitatibus delectus similique magni et porro
          asperiores excepturi libero. Provident, asperiores. */}
          {text}
        </p>
      </div>
    </div>
  );
};

export default ArticleText;
