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

        imageDatas.forEach(function(value,index) {
                ifDatas.push( < ImgFigure data = {
                        value
                    } ref = {'imgFigure' + index}
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

    //
}
export default AppComponent;
