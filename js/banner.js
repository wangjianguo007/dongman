//1����ʵ����ʾ���ص��Զ��л�
//    1��дһ����ʱ����ÿ��3��ִ��һ������
//    2���˺������������л�ͼƬ��ÿһ�ζ��л���һ��
//    3����������Ҫ�жϵ�ǰͼƬ�ǲ������һ�ţ���������һ�ţ����л�Ϊ��һ�š�
//
//2��ʵ�����Ҽ�ͷ���л�
//3��ʵ��ָʾ�����л�
//4������ʾ���ر�Ϊ���뵭��

if(!$.fn.banner){
    $.fn.banner=function(t){
        if(!t){
            t=3000;
        }
        var number=$(this).find('ul>li').size()-1;//ͼƬ������
        var cur=0;//��ǰ��ʾ��ͼƬ
        var timer=0;//��ʱ��
        var liList=$(this).find('ul>li');
        var aList=$(".indicator a");
        var np=1;
        timer=setInterval(slideNP,t);
//���Զ��л��Ļ����ϣ�����СԲ��ָʾ���ı仯
//��д��һ������һ������
        function slideNP(np){
            if(!np){
                np=1;
            }
            if(np===1){
                if(cur<number){
                    liList.eq(cur).fadeOut();
                    liList.eq(cur+1).fadeIn();
                    aList.removeClass().eq(cur+1).addClass("active");
                    cur+=1;
                }else{
                    liList.eq(cur).fadeOut();
                    liList.eq(0).fadeIn();
                    aList.removeClass().eq(0).addClass("active");
                    cur=0;
                }
            }else if(np===-1){
                if(cur>0){
                    liList.eq(cur).fadeOut();
                    liList.eq(cur-1).fadeIn();
                    aList.removeClass().eq(cur-1).addClass("active");
                    cur-=1;
                }else{
                    liList.eq(cur).fadeOut();
                    liList.eq(number).fadeIn();
                    aList.removeClass().eq(number).addClass("active");
                    cur=number;
                }
            }

        }
        $(this).mouseover(function(){
            clearInterval(timer);
            timer=null;
        })
        $(this).mouseout(function(){
            timer=setInterval(slideNP,t);
        })
        $('.banner .prev').click(function(){
            np=-1;
            slideNP(np);

        })
        $('.banner .next').click(function(){
            np=1;
            slideNP(np);
        })
        $('.indicator>a').click(function(e){
            e.preventDefault();
        })
        $('.indicator>a').mouseover(function(){

            var i=$(this).index();
            var n=$('.indicator a.active').index();
            aList.removeClass().eq(i).addClass("active");
            liList.stop().fadeOut();
            liList.eq(i).stop().fadeIn();
            cur=i;
        })
        return this;
    }
}
$('.banner').banner();








