//时间限购  
			var addTimer = function () {   
				var list = [],   
					interval;   
		  
				return function (id, time) {   
					if (!interval)   
						interval = setInterval(go, 1000);   
					list.push({ele: document.getElementById(id), time: time});   
				}   
		  
				function go() {   
					for (var i = 0; i < list.length; i++) {   
						list[i].ele.innerHTML = getTimerString(list[i].time ? list[i].time -= 1 : 0);   
						if (!list[i].time)   
							list.splice(i--, 1);   
					}   
				}   
		  
				function getTimerString(time) {   
               			 d = Math.floor(time / 86400), 
						h = Math.floor((time % 86400) / 3600),   
						m = Math.floor(((time % 86400) % 3600) / 60),   
						s = Math.floor(((time % 86400) % 3600) % 60);   
					
					if (time>0) {     
						return	'<font>'+d +'</font>天<font>'+h+'</font>时<font>'+m+'</font>分<font>'+s+'</font>秒';
					}else{ return "时间到";   
					}
				}   
			} ();   