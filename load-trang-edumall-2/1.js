 $(function(){
 	
 	 // TweenMax.from($('img.logo'),1,{opacity:0,scale:3});
 	 // TweenMax.from($('.tieude'),1,{opacity:0,x:800,delay:0.5});
 	 // TweenMax.from($('.gioithieu'),1,{opacity:0,y:300,delay:1});
 	 // TweenMax.from($('.keduoi'),2,{x:-3000,opacity:0,delay:1.4});
 	 // TweenMax.staggerFrom($('.motkhoi'),0.6,{y:100,opacity:0,delay:2},0.2);

 	 tutuhienra = new TimelineMax({onComplete:vaodi}); 
 	 tutuhienra.from($('.hinhload.text-center'),1.5,{scale:2,opacity:0})
 	 			.to($('.hinhload.text-center'),0.5,{scale:2,opacity:1})
 	 			.to($('.hinhload.text-center'),1,{scale:0.2,opacity:0})

 	 function vaodi() {
 	 	hieuung.play(); 
 	 }



 	 hieuung = new TimelineMax({paused:true});

 	 hieuung.from($('img.logo'),0.5,{opacity:0,scale:3})
 	 		.from($('.tieude'),0.5,{opacity:0,x:800,delay:0.5})
 	 		.from($('.gioithieu'),0.5,{opacity:0,y:300,delay:0.7})
 	 		.from($('.keduoi'),0.5,{x:-3000,opacity:0,delay:1})
 	 		.staggerFrom($('.motkhoi'),0.3,{y:100,opacity:0,delay:1.2},0.2);

 	 // khi click vao nut chay thi kich hoat timelinemax
 	 // $('.chay').click(function(){
 	 // 	hieuung.play();
 	 // })


})  
 