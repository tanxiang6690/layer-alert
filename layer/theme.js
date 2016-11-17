'use strict';

/**消息弹窗
 *param
 *@hasIcon:是否有图标    默认false
 *@title:标题 必传
 *@content:描述   默认空
 *@btn:按钮   默认'我知道了'
 */
function LayerAlert(param) {
    if (!param.title) {
        console.error('标题必传');
        return;
    }
    if (param.hasIcon) {
        param.title = '<img src="./layer/images/title-icon.png"><h4>' + param.title + '</h4>'
    }
    if (param.content) {
        param.content = '<p>' + param.content + '</p>';
    } else {
        param.content = false;
    }
    layer.open({
        title: param.title,
        content: param.content,
        area: ['370px'],
        btn: param.btn ? param.btn : '我知道了',
        shadeClose: true,
        skin: 'layer-alert',
        yes: function(index) {
            if (param.callback) {
                param.callback();
            }
            layer.close(index);
        }
    });
}


/**确认弹窗
 *param
 *@hasIcon:是否有图标    默认false
 *@title:标题 必传
 *@content:描述   默认空
 *@btns:按钮组  数组形式,string，必传
 *@callbacks:回调函数组  数组形式，function，必传
 */
function LayerConfirm(param) {
    if (!param.title && !param.btns && !param.callbacks) {
        console.error('标题、按钮组、回调函数组必传');
        return;
    }
    if (param.hasIcon) {
        param.title = '<img src="./layer/images/title-icon.png"><h4>' + param.title + '</h4>'
    }
    if (param.content) {
        param.content = '<p>' + param.content + '</p>';
    } else {
        param.content = false;
    }
    layer.open({
        title: param.title,
        content: param.content,
        area: ['370px'],
        btn: param.btns,
        shadeClose: true,
        skin: 'layer-alert',
        yes: function(index) {
            param.callbacks[0]();
            layer.close(index);
        },
        btn2: function(index) {
            param.callbacks[1]();
            layer.close(index);
        }
    });
}

/**登录弹窗
 *param
 *@title:标题 必传
 *@content:描述  必传
 *@callback:回调函数  必传
 */
function LayerForm(param) {
    layer.open({
        title: '<h4>' + param.title + '</h4>',
        content: param.content,
        area: ['350px'],
        skin: 'layer-login',
        btn: false,
        shadeClose: true,
        success: param.callback
    })
}

function Dom2Str(fn) {
    return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').
    replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><')
}
