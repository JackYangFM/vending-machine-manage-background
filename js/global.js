/* global jQuery:true */
$(function(){
	
	//IOS输入兼容
	var u = navigator.userAgent, app = navigator.appVersion;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isiOS){
		
		$('.In-text').focus(function(){
			
			$('.po-f').addClass('po-a')
			
		}).blur(function(){//输入框失焦后还原初始状态
		
			
			$('.po-f').removeClass('po-a')
	 	
		});
		
		}

	
	
	})	