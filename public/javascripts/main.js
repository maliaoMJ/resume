
    $(document).ready(function(){
    	  
    	 // 初始化fullpage.js
    	$('#IM').fullpage();
  
		// 首页点击按钮事件
		$('#nextDown').on('click',()=>{
			$.fn.fullpage.moveSectionDown();
		});
		// skills echarts 初始化
		let frontChart = echarts.init($('#front')[0]);
		// 指定图表的配置项和数据
        let option = {
			    title : {
			        text: '前端技术汇总图',
			        subtext: '做过项目的技术',
			        x:'center',
			        textStyle:{
			        	color:'white',
			        },
			        subtextStyle:{
			        	color:'white'
			        }
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        x : 'center',
			        y : 'bottom',
			        textStyle:{
			        	color:'white'
			        },
			        data:['HTML5','CSS','JS','jQuery','Ajax','BS','Vue','ReactNative']
			    },
			   
			    calculable : true,
			    series : [
			        
			        {
			            name:'detail',
			            type:'pie',
			            radius : [30, 110],
			            center : ['50%', '50%'],
			            roseType : 'area',
			            data:[
			                {value:60, name:'HTML5'},
			                {value:50, name:'CSS'},
			                {value:50, name:'JS'},
			                {value:35, name:'jQuery'},
			                {value:40, name:'Ajax'},
			                {value:35, name:'BS'},
			                {value:30, name:'Vue'},
			                {value:25, name:'ReactNative'}
			            ]
			        }
			    ]
			};
        // 使用刚指定的配置项和数据显示图表。
        frontChart.setOption(option);
        // 加载图片进度
        let imgs = $('img');
        for(let i=0;i<imgs.length;i++){
        	imgs[i].onerror=function(){
        	
        		alert('图片加载失败！');

        	}
        	imgs[i].onload=function(){
        		if(i==imgs.length-1){
                   //隐藏loadding动画
    	           $('.loadding').eq(0).hide();
        		}
        	}
        }
        // 提交数据
        let subBtn = $('#subBtn');
        subBtn.on('click',()=>{
        	// 获取表单数据
        	let emailContent= $('#emailContent').val().toString();
        	let message = $('#message').val().toString();
        	if(emailContent==''||message==''||message==null||emailContent==null){
              alert('提交内容不能为空！');
        	}else{
        	 	//ajax 提交到后台
        	 	$.ajax({
        	 		url:'http://127.0.0.1:3000/apis/message',
        	 		method:'POST',
        	 		data:{
                     emailAddress:emailContent,
                     messageContent:message
        	 		},
        	 		dataType:'json',
        	 		success(response){
                      if(response.status==1){
                        alert('发送成功');
                        // 置空
                        $('#emailContent').val()='';
                        $('#message').val() = '';
                      }else{
                      	alert('数据不合法！');
                      }
        	 		},
        	 		error(error){
                      console.log(error);
        	 		}

        	 	});
        	 	 
        	}
        	



        });
		
    });
