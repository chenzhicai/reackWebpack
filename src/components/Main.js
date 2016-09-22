require('normalize.css/normalize.css');
require('styles//App.css');

// 获取图片相关信息
let imageDatas = require('../data/imagedatas.json');

import React from 'react';
var ImgFigureObject = require('./ImgFigure');
var ImgFigure = ImgFigureObject.ImgFigure;

imageDatas = ImgFigureObject.genImageURL(imageDatas);


class AppComponent extends React.Component {

    render() {
        var controllerUnits = [],
            ifDatas = [];

        imageDatas.forEach(function(value, index) {
                ifDatas.push( < ImgFigure data = {
                        value
                    }
                    ref = { 'imgFigure' + index }
                    />);
                });
            return ( < section className = "state" >
                < section className = "img-sec" > {
                    ifDatas
                } < /section> < nav className = "controller-nav" > {
                controllerUnits
            } < /nav> < /section >
        );
    }
}

AppComponent.defaultProps = {};

// 图片点位信息
AppComponent.Constant = {
    conterPos: {
        left: 0,
        right: 0
    },
    hPosRange: { // 水平方向的取值范围
        leftSecx: [0, 0],
        rightSecx: [0, 0],
        y: [0, 0]
    },
    vPosRange: {
        x: [0, 0],
        topY: [0, 0]
    },

    /*
    *重新布局所有图片
    *@param centerIndex 指定居中排布哪个图片
     */
    rearrange: function  (centerIndex) {

    }
}

// 组件加载以后,为每张图片计算其位置的范围
AppComponent.componentDidMount = function() {
    // 首先拿到舞台的大小
    var stageDOM = React.findDOMNode(this.refs.stage),
        stageW = stageDOM.scrollWidth,
        stageH = stageDOM.ScrollHeight,
        halfStageW = Math.ceil(stageW / 2),
        halfStageH = Math.ceil(stageH / 2);

    // 拿到一个imageFigure的大小
    var imgFigureDOM = React.findDOMNode(this.refs.imgsFigure0),
        imgW = imgFigureDOM.scrollWidth,
        imgH = imgFigureDOM.scrollHeight,
        halfImgW = Math.ceil(imgW / 2),
        halfImgH = Math.ceil(imgH / 2);

    // 计算中心图片的位置点
    this.Constant.centerPos = {
        left: halfStageW - halfImgW,
        top: halfStageH - halfImgH
    }

    // 计算左侧,右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.leftSecx[0] = -halfImgW;
    this.Constant.hPosRange.leftSecx[1] =halfStageW - halfImgW*3;
    this.Constant.hPosRange.rightSecx[0] =halfStageW = halfImgW;
    this.Constant.hPosRange.rightSecx[1] =stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    // 计算上侧区域图片排布位置的取值范围
    this.Constant.vPosRange.toyY[0] = -halfImgH;
    this.constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfImgW - imgFigureDOM;
    this.constant.vPosRange.x[1] = halfImgW;

    this.rearrange(0);
}
export default AppComponent;
