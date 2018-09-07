(function(window){var svgSprite='<svg><symbol id="icon-yuyue" viewBox="0 0 1024 1024"><path d="M359.808 64.384C227.072 87.616 115.904 176.256 65.856 297.408A24.704 24.704 0 0 0 80 329.792a25.856 25.856 0 0 0 33.344-13.824c43.52-105.28 140.16-182.464 255.488-202.56a25.024 25.024 0 0 0 20.736-28.928 25.6 25.6 0 0 0-29.76-20.096z m295.296 49.024c115.392 20.096 212.032 97.344 255.488 202.56 5.312 12.8 20.224 18.944 33.344 13.824a24.832 24.832 0 0 0 14.272-32.384C908.096 176.256 796.928 87.616 664.192 64.384a25.6 25.6 0 0 0-29.76 20.096 24.96 24.96 0 0 0 20.672 28.928z m-145.088 800c216.256 0 391.68-170.56 391.68-380.992s-175.424-380.992-391.68-380.992c-216.384 0-391.744 170.56-391.744 380.992s175.36 380.992 391.744 380.992z m0-49.472c-188.224 0-340.8-148.48-340.8-331.52 0-183.104 152.512-331.456 340.8-331.456s340.736 148.352 340.736 331.456c0 183.04-152.512 331.52-340.736 331.52z m236.608 26.816l63.744 61.952c9.984 9.728 26.176 9.728 36.16 0s9.984-25.408 0-35.136l-63.744-62.016a25.92 25.92 0 0 0-36.16 0 24.512 24.512 0 0 0 0 35.2zM486.656 284.608V532.48c0 13.76 11.456 24.832 25.664 24.832 14.08 0 25.536-11.072 25.536-24.832V284.608a25.344 25.344 0 0 0-25.536-24.896 25.216 25.216 0 0 0-25.664 24.896z m171.776 359.936l-123.84-122.816a26.368 26.368 0 0 0-36.288-0.384 24.32 24.32 0 0 0-0.32 35.2L622.016 679.36a25.984 25.984 0 0 0 36.096 0.256 24.256 24.256 0 0 0 0.32-35.072zM237.12 855.552l-63.744 62.016c-9.984 9.664-9.984 25.344 0 35.136s26.176 9.728 36.16 0l63.68-61.952a24.448 24.448 0 0 0 0-35.2 25.856 25.856 0 0 0-36.096 0z m0 0" fill="#323333" ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M961.174588 921.178353L918.588235 963.764706l-265.065411-265.065412A359.634824 359.634824 0 0 1 421.647059 783.058824C222.057412 783.058824 60.235294 621.236706 60.235294 421.647059S222.057412 60.235294 421.647059 60.235294s361.411765 161.822118 361.411765 361.411765c0 89.6-32.798118 171.429647-86.799059 234.586353l264.914823 264.944941zM722.823529 421.647059c0-166.339765-134.836706-301.176471-301.17647-301.176471S120.470588 255.307294 120.470588 421.647059s134.836706 301.176471 301.176471 301.17647 301.176471-134.836706 301.17647-301.17647z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)