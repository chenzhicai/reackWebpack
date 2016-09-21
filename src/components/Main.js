require('normalize.css/normalize.css');
require('!css!sass!../styles/App.scss');
let yeomanImage = require('../images/yeoman.png');

let ctest = require('./ctest');
// 获取图片相关信息
let imageDatas = require('../data/imagedatas.json');


import React from 'react';
import TestComponent from './TestComponent';


imageDatas = genImageURL(imageDatas);

// 将图片信息转换为图片url路径
function genImageURL(imageDatasArr)  {
  for(let i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
}


class AppComponent extends React.Component {
  render() {
    return (
      <section className="state">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
