import React from 'react';

// 将图片信息转换为图片url路径
function genImageURL(imageDatasArr) {
  for (let i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = require('../images/'+imageDatasArr[i].fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
}


var ImgFigure = React.createClass({
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title} />
        <figcaption>
        <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
});

module.exports = {
  ImgFigure: ImgFigure,
  genImageURL: genImageURL
}
