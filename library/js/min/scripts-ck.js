function updateViewportDimensions(){var e=window,t=document,n=t.documentElement,o=t.getElementsByTagName("body")[0],i=e.innerWidth||n.clientWidth||o.clientWidth,a=e.innerHeight||n.clientHeight||o.clientHeight;return{width:i,height:a}}function loadGravatars(){viewport=updateViewportDimensions(),viewport.width>=768&&jQuery(".comment img[data-gravatar]").each(function(){jQuery(this).attr("src",$(this).attr("data-gravatar"))})}function heroInit(){var e=jQuery("#inicio"),t=jQuery(window).height(),n=t;e.css({height:n+"px"})}var viewport=updateViewportDimensions(),waitForFinalEvent=function(){var e={};return function(t,n,o){o||(o="Don't call this twice without a uniqueId"),e[o]&&clearTimeout(e[o]),e[o]=setTimeout(t,n)}}(),timeToWaitForLast=100;jQuery(document).ready(function(e){loadGravatars()}),jQuery(window).on("resize",heroInit),jQuery(document).on("ready",heroInit),$(function(){$(".panel-collapse").on("show.bs.collapse",function(){$(this).parent(".panel").toggleClass("estado-acordeon"),$(".bg-acordeon").toggleClass("bg-acordeon-show")}),$(".panel-collapse").on("hidden.bs.collapse",function(){$(this).parent(".panel").toggleClass("estado-acordeon"),$(".bg-acordeon").toggleClass("bg-acordeon-show")}),$(".bg-acordeon").on("click",function(e){e.preventDefault(),$(".panel-collapse").collapse("hide")})});