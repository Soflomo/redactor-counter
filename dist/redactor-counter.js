define(function(){var e=function(e){var r=e.parentNode,o=r.querySelector(".redactor-editor");r.insertAdjacentHTML("beforeend",'<div class="redactor-counter">Characters: <span class="redactor-counter__characters">'+n(o)+'</span> Words: <span class="redactor-counter__words">'+c(o)+"</span></div>");var a=r.querySelector(".redactor-counter .redactor-counter__characters"),u=r.querySelector(".redactor-counter .redactor-counter__words");t(o,a,u)},t=function(e,t,n){e.addEventListener("keyup",function(){r(e,t,n)}),e.addEventListener("propertychange",function(){r(e,t,n)}),e.addEventListener("input",function(){r(e,t,n)}),e.addEventListener("paste",function(){r(e,t,n)})},r=function(e,t,r){t.textContent=n(e),r.textContent=c(e)},n=function(e){return e.textContent.replace(/\u200B/g,"").length},c=function(e){var t=e.innerText.replace(/\u200B/g,"").replace(/<\/?[a-z][^>]*>/gi,""),r=t.trim();return r?(r.replace(/['";:,.?¿\-!¡]+/g,"").match(/\S+/g)||[]).length:0};return{init:function(t){[].forEach.call(document.querySelectorAll(t),function(t){e(t)})}}});