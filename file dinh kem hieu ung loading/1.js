 $(function(){
 	
 	 TweenMax.from($('img.logo'),1,{opacity:0,scale:3});
 	 TweenMax.from($('.tieude'),1,{opacity:0,x:800,delay:0.5});
 	 TweenMax.from($('.gioithieu'),1,{opacity:0,y:300,delay:1});
 	 TweenMax.from($('.keduoi'),2,{x:-3000,opacity:0,delay:1.4});
 	 TweenMax.staggerFrom($('.motkhoi'),0.6,{y:100,opacity:0,delay:2},0.2);

})  
 