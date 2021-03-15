function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector(""+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.querySelector(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.querySelector(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};
particlesJS.load('#pJS', '/src/json/pJS.json');
var __incog = {
    domain: document.domain.split('.').length > 2 ? document.domain.split('.').slice(-2).join('.') : document.domain,
    overridePageFavicon(url, elem = document.createElement('link')){
        if (arguments.length != 1) return;
        try { 
            url = new URL(url).href.split('/').slice(3).join('/').trim() == '' ? new URL(url).origin + '/favicon.ico' : new URL(url).href;
        } catch {
            url = url.startsWith('https://' || url.startsWith('http://')) ? '' : 'http://' + url;
            url = url.split('#')[0].split('?')[0].endsWith('/favicon.ico') ? url : url.split('#')[0].split('?')[0] + '/favicon.ico';
        }
        document.querySelectorAll('link').forEach(node => node.getAttribute('rel') == 'icon' ? node.removeAttribute('rel') : '');
        return (elem.setAttribute('rel', 'icon'), elem.setAttribute('href', url), document.querySelector('head').appendChild(elem));
    },
    mobile_header: {
        frontend: document.querySelector('#mobile-header'),
        overlay: document.querySelector('#mobile-header #overlay'),
        sidebar: document.querySelector('#mobile-header #mobile-sidebar'),
        openHeader: document.querySelector('#mobile-header nav #open-links'),
        closeHeader: document.querySelector('#mobile-header #mobile-sidebar #close-mobile-header')
    },
    pages: {
        home: `<div class="prox-container" style="display:none">
                <div id="controls">
                    ${/*<a title="Escape Frame" data-control="escape-frame">tab</a>
                    <a title="Refresh Frame" data-control="refresh-frame">refresh</a>*/''}
                    <a title="Close Frame" data-control="close-frame">close</a>
                </div>
                <iframe src="about:blank"></iframe>
            </div>
            <div id="logo">
            <div id="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.37 365.37"><circle class="cls-1" cx="182.68" cy="182.68" r="173.68" /><path class="cls-2" d="M210.41,66.38A115.27,115.27,0,0,1,70.52,248.19,134,134,0,1,0,210.41,66.38Z" transform="translate(-17.32 -17.32)" /></svg></div>
            <div id="text">Incognito</div>
            </div>
            <div id="search-wrapper">
                <div id="form">
                    <a title="Proxy selection" id="search-option" data-open="true"><span></span></a>
                    <input placeholder="Type in a keyword or URL" id="search-box">
                </div>
                <div id="search-dropdown" style="display: none;">
                    <a title="Alloy"><span id="alloy" class="icon"></span>Alloy</a>
                    <span id="seperate"></span>
                    <a title="SysYA Proxy"><span id="sysya" class="icon"></span>SysYA</a>
                    ${/*<span id="seperate"></span>
                    <a title="Womginx"><span id="womginx" class="icon"></span>Womginx</a>*/''}
                </div>
            </div>`,
        gs: `<div class="game-container" style="display:none;">
            <div id="controls">
                <a title="Controls" style="display:none" data-control="open-gba-controls">videogame_asset</a>
                <a title="Fullscreen" data-control="fullscreen">fullscreen</a>
                <a title="Close Game" data-control="close-game">close</a>
            </div>
            <div id="game" data-game="none"></div>
            </div>
            <div class="dashboard">
                <div id="controls">
                    <div id="storage-wrapper"><a data-control="import">Import Storage</a><a data-control="export">Export Storage</a></div>
                    <div id="search-wrapper"><input placeholder="Search for a game" id="gs-search"></div>
                </div>
                <span id="seperate"></span>
                <div id="entries"></div>
                <div style="display: none" id="invalid-search">No results for your input was found!</div>
            </div>`,
        privacy: `<div class="container">
                <h1>Incognito Privacy Policy</h1>
                <p>Last updated: December 21, 2020</p>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.</p>
                <h1>Interpretation and Definitions</h1>
                <h2>Interpretation</h2>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h2>Definitions</h2>
                <p>For the purposes of this Privacy Policy:</p>
                <ul>
                <li>
                <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                </li>
                <li>
                <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Incognito.</p>
                </li>
                <li>
                <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                </li>
                <li>
                <p><strong>Country</strong> refers to: New Jersey, United States</p>
                </li>
                <li>
                <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                </li>
                <li>
                <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                </li>
                <li>
                <p><strong>Service</strong> refers to the Website.</p>
                </li>
                <li>
                <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                </li>
                <li>
                <p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
                </li>
                <li>
                <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                </li>
                <li>
                <p><strong>Website</strong> refers to Incognito, accessible from <a href="https://www.incog.dev" rel="external nofollow noopener" target="_blank">https://www.incog.dev</a></p>
                </li>
                <li>
                <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </li>
                </ul>
                <h1>Collecting and Using Your Personal Data</h1>
                <h2>Types of Data Collected</h2>
                <h3>Personal Data</h3>
                <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                <ul>
                <li>Usage Data</li>
                </ul>
                <h3>Usage Data</h3>
                <p>Usage Data is collected automatically when using the Service.</p>
                <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                <h3>Tracking Technologies and Cookies</h3>
                <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                <ul>
                <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                <li><strong>Flash Cookies.</strong> Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read &quot;Where can I change the settings for disabling, or deleting local shared objects?&quot; available at <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_" rel="external nofollow noopener" target="_blank">https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</a></li>
                <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
                </ul>
                <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies here: <a href="https://www.termsfeed.com/blog/cookies/" target="_blank">All About Cookies by TermsFeed</a>.</p>
                <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                <ul>
                <li>
                <p><strong>Necessary / Essential Cookies</strong></p>
                <p>Type: Session Cookies</p>
                <p>Administered by: Us</p>
                <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                </li>
                <li>
                <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                </li>
                <li>
                <p><strong>Functionality Cookies</strong></p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                </li>
                </ul>
                <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
                <h2>Use of Your Personal Data</h2>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul>
                <li>
                <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                </li>
                <li>
                <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                </li>
                <li>
                <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                </li>
                <li>
                <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                </li>
                <li>
                <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                </li>
                <li>
                <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                </li>
                <li>
                <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                </li>
                <li>
                <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                </li>
                </ul>
                <p>We may share Your personal information in the following situations:</p>
                <ul>
                <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
                <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
                </ul>
                <h2>Retention of Your Personal Data</h2>
                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                <h2>Transfer of Your Personal Data</h2>
                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                <h2>Disclosure of Your Personal Data</h2>
                <h3>Business Transactions</h3>
                <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                <h3>Law enforcement</h3>
                <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                <h3>Other legal requirements</h3>
                <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
                </ul>
                <h2>Security of Your Personal Data</h2>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                <h1>Links to Other Websites</h1>
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                <h1>Changes to this Privacy Policy</h1>
                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                <h1>Contact Us</h1>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul>
                <li>By visiting this page on our website: <a href="https://discord.gg/uwyDPfP" rel="external nofollow noopener" target="_blank">https://discord.gg/uwyDPfP</a></li>
                </ul>
                </div>
                </div>`,
            terms: `<div class="container">
                <h1>Incognito Terms & Conditions</h1>
                <p>Last updated: December 21, 2020</p>
                <p>Please read these terms and conditions carefully before using Our Service.</p>
                <h1>Interpretation and Definitions</h1>
                <h2>Interpretation</h2>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h2>Definitions</h2>
                <p>For the purposes of these Terms and Conditions:</p>
                <ul>
                <li>
                <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                </li>
                <li>
                <p><strong>Country</strong> refers to: New Jersey, United States</p>
                </li>
                <li>
                <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Incognito.</p>
                </li>
                <li>
                <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                </li>
                <li>
                <p><strong>Service</strong> refers to the Website.</p>
                </li>
                <li>
                <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">Terms and Conditions Generator</a>.</p>
                </li>
                <li>
                <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                </li>
                <li>
                <p><strong>Website</strong> refers to Incognito, accessible from <a href="https://www.incog.dev" rel="external nofollow noopener" target="_blank">https://www.incog.dev</a></p>
                </li>
                <li>
                <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </li>
                </ul>
                <h1>Acknowledgment</h1>
                <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                <h1>Links to Other Websites</h1>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
                <h1>Termination</h1>
                <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                <p>Upon termination, Your right to use the Service will cease immediately.</p>
                <h1>Limitation of Liability</h1>
                <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
                <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>
                <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
                <h1>Governing Law</h1>
                <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                <h1>Disputes Resolution</h1>
                <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                <h1>For European Union (EU) Users</h1>
                <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
                <h1>United States Legal Compliance</h1>
                <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                <h1>Severability and Waiver</h1>
                <h2>Severability</h2>
                <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                <h2>Waiver</h2>
                <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.</p>
                <h1>Translation Interpretation</h1>
                <p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
                You agree that the original English text shall prevail in the case of a dispute.</p>
                <h1>Changes to These Terms and Conditions</h1>
                <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
                <h1>Contact Us</h1>
                <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                <ul>
                <li>By visiting this page on our website: <a href="https://discord.gg/uwyDPfP" rel="external nofollow noopener" target="_blank">https://discord.gg/uwyDPfP</a></li>
                </ul>
                </div>
                </div>`,
                about: `
                    <div class="container">
                        <h1>Our Mission</h1>
                        <p>Incognito's mission is to unlock parts of the internet that are prohibited by educators and workplaces. Tools such as web proxies are provided to aid with this mission. </p>
                        <span id="seperate"></span>
                        <h1>Credits</h1>
                        <ul>
                            <li><a href="https://github.com/shawtylikeamelody"">Shawty - Creator of Incognito & Alloy</a></li>
                            ${/*<li><a href="https://github.com/binary-person"">Simon Cheng - Developer of Womginx</a></li>*/''}
                            <li><a href="https://github.com/e9x/">Divide - Developer of SysYA Proxy</a></li>
                        </ul>
                    </div>
                `,
                utils: `
                    <div class="container">
                        <div id="tab"> 
                            <h1>Browser Tab Cloak</h1>
                            <input placeholder="New title or icon URL">
                            <a data-control="title">Title</a>
                            <a data-control="icon">Icon</a>
                            <p>Enter a link or a new tab title inside the form then press either "Title" or "Icon" to spoof the browser tab icon or title.</p>
                        </div>
                    </div>
                `
    },
    loadPage(page) {

        if (!__incog.pages[page]) return (document.querySelector('#desktop-header nav #moon').setAttribute('style', 'display: inline'), document.querySelector('#mobile-header nav #moon').setAttribute('style', 'display: inline'), document.querySelector('#desktop-header nav').setAttribute('style', ''), document.querySelector('.root').innerHTML = '<div id="invalidPage">404, Page not found!</div>')

        page == 'home' ? (document.querySelector('#desktop-header nav #moon').setAttribute('style', 'display: none'), document.querySelector('#mobile-header nav #moon').setAttribute('style', 'display: none'), document.querySelector('#desktop-header nav').setAttribute('style', 'width: calc(100% - 30px)')) : (document.querySelector('#desktop-header nav #moon').setAttribute('style', 'display: inline'), document.querySelector('#mobile-header nav #moon').setAttribute('style', 'display: inline'), document.querySelector('#desktop-header nav').setAttribute('style', ''));
        document.querySelector('.root').id = page;
        document.querySelector('.root').innerHTML = __incog.pages[page];

        switch (page) {
            case 'home':
                __incog.home = {
                    openContextMenu: document.querySelector('#search-wrapper #form #search-option'),
                    contextMenu: document.querySelector('#search-wrapper #search-dropdown'),
                    omniBox: document.querySelector('#search-wrapper #form #search-box'),
                    gateway: {
                        frame: document.querySelector('.root .prox-container iframe'),
                        controls: {
                            wrapper: document.querySelector('.root .prox-container #controls'),
                            closeFrame: document.querySelector('.root .prox-container #controls a[data-control="close-frame"]'),
                            //refreshFrame: document.querySelector('.root .prox-container #controls a[data-control="refresh-frame"]'),
                            //escapeFrame: document.querySelector('.root .prox-container #controls a[data-control="escape-frame"]')
                        },
                        wrapper: document.querySelector('.root .prox-container'),
                        setCookie(type){
                            if (type == 'sysya') (document.cookie=`gateway=sp; Domain=.${__incog.domain}; Path=/`, document.cookie=`gateway=sp; Domain=${__incog.domain}; Path=/`);
                            document.cookie=`__incog_prox=1; Domain=.${__incog.domain}; Path=/`;
                            document.cookie=`__incog_prox=1; Domain=${__incog.domain}; Path=/`;
                        },
                        init(url){
                            __incog.home.gateway.wrapper.style.display = "block";
                            __incog.home.gateway.frame.src = url;
                        }
                    }
                };

                __incog.home.openContextMenu.addEventListener('click', () => __incog.home.openContextMenu.getAttribute('data-open') == 'true' ? (__incog.home.openContextMenu.setAttribute('data-open', 'false'), __incog.home.openContextMenu.setAttribute('style', 'border-radius: 3px 0px 0px 0px') ,__incog.home.contextMenu.setAttribute('style', '')) : (__incog.home.openContextMenu.setAttribute('data-open', 'true'), __incog.home.openContextMenu.setAttribute('style', ''), (__incog.home.contextMenu.setAttribute('style', 'display:none'))))
    
                switch (localStorage.getItem('__incog_prox')) {
                    case 'alloy':
                        __incog.home.openContextMenu.querySelector('span').id = 'alloy';
                        break;
                    case 'sysya':
                        __incog.home.openContextMenu.querySelector('span').id = 'sysya';
                        break;
                    case 'womginx':
                        __incog.home.openContextMenu.querySelector('span').id = 'womginx';
                        break;
                    default:
                        __incog.home.openContextMenu.querySelector('span').id = 'alloy';
                };    

                __incog.home.gateway.controls.closeFrame.addEventListener('click', () => (__incog.home.gateway.frame.src="",__incog.home.gateway.wrapper.style.display="none"));

                document.querySelectorAll('#search-wrapper #search-dropdown a').forEach(node => node.addEventListener('click', () => {
                    localStorage.setItem('__incog_prox', node.querySelector('span').id);
                    document.querySelector('#search-wrapper #form #search-option span').id = node.querySelector('span').id;
                    __incog.home.openContextMenu.click();
                }));

                __incog.home.omniBox.addEventListener('keyup', key => key.keyCode == 13 && __incog.home.omniBox.value.trim() != '' ? (() => {
                    switch (localStorage.getItem('__incog_prox')) {
                        case 'alloy':
                            __incog.home.gateway.init(`//client.${__incog.domain}/portal?url=${encodeURIComponent(btoa(__incog.home.omniBox.value))}&type=ap`);
                        break;
                        case 'sysya':
                            __incog.home.gateway.init(`//client.${__incog.domain}/portal?url=${encodeURIComponent(btoa(__incog.home.omniBox.value))}&type=sp`);
                        break;
                        case 'womginx':
                            __incog.home.gateway.init();
                        break;
                        default:
                            __incog.home.gateway.init(`//client.${__incog.domain}/portal?url=${encodeURIComponent(btoa(__incog.home.omniBox.value))}`);
                        };    
                })() : null);

                break;
            case 'gs':
                var importStorageFile = document.createElement('input'),
                    exportStorageFile = document.createElement('a'),
                    ruffle = document.createElement('script');
                importStorageFile.type = 'file';
                exportStorageFile.setAttribute('download', 'gs.storage');
                exportStorageFile.target = '_blank';
    
                ruffle.src = '/src/gs/ruffle/ruffle.js';
                document.querySelector('.root[id="gs"]').appendChild(ruffle);

                __incog.gs = {
                    dashboard: {
                        frontend: document.querySelector('.root .dashboard'),
                        controls: {
                            import: document.querySelector('.root .dashboard #controls #storage-wrapper a[data-control="import"]'),
                            export: document.querySelector('.root .dashboard #controls #storage-wrapper a[data-control="export"]'),
                            search: document.querySelector('.root .dashboard #controls #gs-search')
                        },
                        searchError: document.querySelector('.root .dashboard #invalid-search'),
                        entries: document.querySelector('.root .dashboard #entries')
                    },
                    gameContainer: {
                        frontend: document.querySelector('.root .game-container'),
                        controls: {
                            fullscreen: document.querySelector('.root .game-container #controls a[data-control="fullscreen"]'),
                            exit: document.querySelector('.root .game-container #controls a[data-control="close-game"]'),
                            gbaControls: document.querySelector('.root .game-container #controls a[data-control="open-gba-controls"]')
                        },
                        frameWrapper: document.querySelector('.root .game-container #game')
                    },
                    focusGame(){
                        switch(__incog.gs.gameContainer.frameWrapper.getAttribute('data-game')){
                            case 'html': __incog.gs.gameContainer.frameWrapper.querySelector('iframe').focus(); break;
                            case 'flash': __incog.gs.gameContainer.frameWrapper.querySelector('ruffle-player').focus(); break;
                        }
                    }
                }

                __incog.gs.gameContainer.controls.gbaControls.addEventListener('click', () => alert(`
                    X and J keys = A
                    Z, Q, and Y keys = B
                    Shift = Select
                    Enter = Start
                    Arrow keys = Left, right, up, down movement
                    2 = R
                    1 = L
                `))

                __incog.gs.gameContainer.controls.fullscreen.addEventListener('click', () => {
                    if (!document.fullscreenElement) {
                        __incog.gs.gameContainer.frontend.requestFullscreen();
                        __incog.gs.focusGame();
                      } else {
                        if (document.exitFullscreen) {
                          document.exitFullscreen();
                          __incog.gs.focusGame();
                        }
                      }
                });
                document.addEventListener('fullscreenchange', () => document.fullscreenElement ? __incog.gs.gameContainer.controls.fullscreen.innerHTML = 'fullscreen_exit' : __incog.gs.gameContainer.controls.fullscreen.innerHTML = 'fullscreen');

                __incog.gs.gameContainer.controls.exit.addEventListener('click', () => {
                    __incog.gs.gameContainer.frameWrapper.setAttribute('data-game', 'none');
                    __incog.gs.gameContainer.frameWrapper.innerHTML = '';
                    __incog.gs.gameContainer.frontend.style.display = 'none';
                    __incog.gs.dashboard.frontend.style.display = 'grid';
                });
    
                fetch('/src/gs/data.json').then(res => res.json().then(data => {
                    data.forEach(gJSON => {
                        var entry = document.createElement('div');
                        entry.id = 'entry';
                        entry.setAttribute('style', `background: url(/src/gs/images/${gJSON.image}); background-repeat:no-repeat; background-size:cover; background-position:center;`);
                        entry.innerHTML = `<div id="title">${gJSON.title}</div>`
                        entry.addEventListener('click', () => {
                            __incog.gs.dashboard.frontend.style.display = 'none';
                            __incog.gs.gameContainer.frontend.style.display = 'inline';

                            gJSON.location.startsWith('gba') ? __incog.gs.gameContainer.controls.gbaControls.style.display = 'inline-block' : __incog.gs.gameContainer.controls.gbaControls.style.display = 'none';

                            switch(gJSON.type){
                                case 'flash': 
                                    __incog.gs.gameContainer.frameWrapper.setAttribute('data-game', 'flash'); 
                                    const player = window.RufflePlayer.newest().createPlayer();
                                    player.config = {
                                        autoplay: "auto",
                                        letterbox: "on",
                                        contextMenu: false,
                                        backgroundColor: null
                                    }
                                    __incog.gs.gameContainer.frameWrapper.appendChild(player);
                                    player.load(`/src/gs/public/swfs/${gJSON.location}`);
                                break;
                                case 'alloy':
                                    __incog.gs.gameContainer.frameWrapper.setAttribute('data-game', 'html'); 
                                    __incog.gs.gameContainer.frameWrapper.innerHTML = `<iframe src="//client.${__incog.domain}/portal?url=${encodeURIComponent(btoa(gJSON.location))}&type=ap"></iframe>`;
                                break;
                                default:
                                    __incog.gs.gameContainer.frameWrapper.setAttribute('data-game', 'html'); 
                                    __incog.gs.gameContainer.frameWrapper.innerHTML = `<iframe src="/src/gs/public/${gJSON.location}"></iframe>`;
                                break;
                            };
                        });
                        __incog.gs.dashboard.entries.appendChild(entry);
                    });
                    __incog.gs.dashboard.controls.search.addEventListener('keyup', () => {
                        var validEntries = 0,
                            input = __incog.gs.dashboard.controls.search.value.toLowerCase();
                        document.querySelectorAll('.root .dashboard #entries #entry').forEach(node => node.querySelector('#title').textContent.toLowerCase().match(input) ? (node.style.display = 'inline-block', validEntries = validEntries + 1) : node.style.display = 'none');
                        validEntries == 0 ? __incog.gs.dashboard.searchError.style.display = 'inline-block' : __incog.gs.dashboard.searchError.style.display = 'none';
                    });
                    __incog.gs.dashboard.controls.export.addEventListener('click', () => (exportStorageFile.href = `data:text/plain;charset=utf-8,${btoa(JSON.stringify(localStorage))}`, exportStorageFile.click()));
                    __incog.gs.dashboard.controls.import.addEventListener('click', () => importStorageFile.click());
                    importStorageFile.addEventListener('change', function() {
                        var reader = new FileReader();
                        reader.addEventListener('load', () => {
                            if (confirm('Adding in new game data can override data for games that already have data. Are you sure you wanna proceed?')) try {
                                Object.entries(JSON.parse(atob(reader.result))).forEach(([item_name, item_value]) => localStorage.setItem(item_name, item_value));
                                alert('Game data successfully imported!')
                            } catch {
                                alert('Storage file could not be parsed correctly!');
                            }
    
                        });
                        reader.readAsText(this.files[0]);
                    })
    
    
                }));

                document.querySelector('.root[id="gs"]') ? document.body.addEventListener('click', () =>__incog.gs.focusGame()) : null;
                break;
                case 'utils':
                    __incog.utils = {
                        tab: {
                            controls: {
                                title: document.querySelector('.root[id="utils"] a[data-control="title"]'),
                                icon: document.querySelector('.root[id="utils"] a[data-control="icon"]')
                            },
                            input: document.querySelector('.root[id="utils"] #tab input')
                        },
                    };
                
                __incog.utils.tab.controls.icon.addEventListener('click', () => __incog.utils.tab.input.value.trim() != '' ?  (localStorage.setItem('__incog_favicon', btoa(__incog.utils.tab.input.value.trim())), __incog.overridePageFavicon(__incog.utils.tab.input.value.trim())) : null);
                __incog.utils.tab.controls.title.addEventListener('click', () => (localStorage.setItem('__incog_title', btoa(__incog.utils.tab.input.value)), document.title = __incog.utils.tab.input.value));
        }
    },
    init(){

        __incog.mobile_header.openHeader.addEventListener('click', () => (__incog.mobile_header.overlay.style.display = 'block', __incog.mobile_header.sidebar.style.right = '0'));
        __incog.mobile_header.closeHeader.addEventListener('click', () => (__incog.mobile_header.overlay.style.display = 'none', __incog.mobile_header.sidebar.style.right = '-300px') )

        document.querySelectorAll('nav a[href], footer a[href], #mobile-sidebar a[href]').forEach(node => {
            switch (node.getAttribute('href').split('#')[0]) {
                case '/gs':
                    node.removeAttribute('href');
                    node.addEventListener('click', () => (history.pushState('', '', '/gs'), __incog.loadPage('gs')));
                    break;
                case '/about':
                    node.removeAttribute('href');
                    node.addEventListener('click', () => (history.pushState('', '', '/about'), __incog.loadPage('about')));
                    break;
                case '/privacy':
                    node.removeAttribute('href');
                    node.addEventListener('click', () => (history.pushState('', '', '/privacy'), __incog.loadPage('privacy')));
                    break;
                case '/terms':
                    node.removeAttribute('href');
                    node.addEventListener('click', () => (history.pushState('', '', '/terms'), __incog.loadPage('terms')));
                    break;
                case '/utils':
                    node.removeAttribute('href');
                    node.addEventListener('click', () => (history.pushState('', '', '/utils'), __incog.loadPage('utils')));
                    break;
                case '/':
                    node.removeAttribute('href');
                    node.addEventListener('click', () => (history.pushState('', '', '/'), __incog.loadPage('home')));
                    break;
            }
        
        });
        
        switch (window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/') {
            case '/gs/':
                __incog.loadPage('gs');
            break;
            case '/privacy/':
                __incog.loadPage('privacy');
            break;
            case '/terms/':
                __incog.loadPage('terms');
            break;
            case '/about/':
                __incog.loadPage('about');
            break;
            case '/utils/':
                __incog.loadPage('utils');
            break;
            case '/':
                __incog.loadPage('home');
            break;
            default: __incog.loadPage();
        }

        if (localStorage.__incog_favicon) try { __incog.overridePageFavicon(atob(localStorage.__incog_favicon)) } catch{};
        if (localStorage.__incog_title) try { document.title = atob(localStorage.__incog_title) } catch{};

    }
};
__incog.init();