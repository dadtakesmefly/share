/**
 * Created by cnaisin06 on 2017/6/22.
 */
//΢�ŷ�����Ƭ
$.ajax({
    url:weixinUrl,
    data:{"appId":"wx5c2a0cf831ae3610","url":window.location.href},
    type:"post",
    success: function (result) {
        //console.log(result.data);
        //console.log(result.data.jsapi_ticket);
        wx.config({
            debug: false, // ��������ģʽ,���õ�����api�ķ���ֵ���ڿͻ���alert��������Ҫ�鿴����Ĳ�����������pc�˴򿪣�������Ϣ��ͨ��log���������pc��ʱ�Ż��ӡ��
            appId: 'wx5c2a0cf831ae3610', // ������ںŵ�Ψһ��ʶ
            timestamp: result.data.timestamp, // �������ǩ����ʱ���
            nonceStr: result.data.nonceStr, // �������ǩ���������
            signature: result.data.signature,// ���ǩ��������¼1
            jsApiList: [
                "onMenuShareTimeline",
                "onMenuShareAppMessage",
                "onMenuShareQQ",
                "onMenuShareWeibo",
                "onMenuShareQZone",
            ] // �����Ҫʹ�õ�JS�ӿ��б�����JS�ӿ��б����¼2
        });
        window.share_config = {
            "share": {
                "imgUrl":"../images/����.png",//����ͼ��Ĭ�ϵ����·����������ʹ�þ���·���ĵĻ�����http://��Э��ǰ׺�����ڡ�
                "desc" : "����ר��App,��ʱ���������",//ժҪ,�����������Ȧ�Ļ�������ʾժҪ��
                "title" : document.title,//����Ƭ����
//                   "link": window.location.href,//�����ȥ������ӣ�������Խ���������Ϊ��һ��ҳ�档
                "success":function(){//����ɹ���Ļص�����
                },
                'cancel': function () {
                    // �û�ȡ�������ִ�еĻص�����
                }
            }
        };
        wx.ready(function () {
            wx.onMenuShareAppMessage(share_config.share);//���������
            wx.onMenuShareTimeline(share_config.share);//��������Ȧ
            wx.onMenuShareQQ(share_config.share);//������ֻ�QQ
            wx.onMenuShareWeibo(share_config.share);//�����΢��
            wx.onMenuShareQZone(share_config.share)//QQ�ռ�
        });
    }
})
