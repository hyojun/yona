yobi.Attachments=function(g){function n(q){p({vFile:q.oFile.files?q.oFile.files[0]:q.oFile,bTemporary:!0})}function p(q){if("undefined"===typeof q.vFile)return 0;var a,b=0,e=[];(q.vFile instanceof Array?q.vFile:[q.vFile]).forEach(function(d){var f=q.bTemporary,k=$.tmpl(m.sTplFileItem,{fileId:d.id,fileName:d.name,fileHref:d.url,fileSize:d.size,fileSizeReadable:humanize.filesize(d.size),mimeType:d.mimeType});w(k,d.mimeType);f&&k.addClass("temporary");a=k;"undefined"!==typeof d.id&&""!==d.id?(a.addClass("complete"),
0<h.welTextarea.length&&a.click(c)):(a.attr("id",d.nSubmitId),a.css("opacity","0.2"),a.data("progressBar",a.find(".progress > .bar")));e.push(a);b+=parseInt(d.size,10)});0<e.length&&(0===h.welFileList.length&&(h.welFileList=$(m.sTplFileList),h.welContainer.append(h.welFileList)),h.welFileList.show(),h.welFileListHelp.show(),h.welFileList.append(e));return b}function r(q,a){var h;a=a||"#f36c22";h=q.css("background");q.css("background",a);setTimeout(function(){q.css("background",h)},500)}function l(q){var a=
q.oRes,b=q.nSubmitId,e=q.oRes.id;-1===m.aTemporaryFileIds.indexOf(e)&&(m.aTemporaryFileIds.push(e),h.welTemporaryUploadFileList.val(m.aTemporaryFileIds.join(",")));if(!(a instanceof Object&&a.name&&a.url))return d(b,a);var e=$("#"+b),f=h.welFileList.find('[data-id="'+a.id+'"]');0<f.length?(e.remove(),r(f),a=!1):(e.attr({"data-id":a.id,"data-href":a.url,"data-name":a.name,"data-mime":a.mimeType}),e.find(".name").html(a.name),e.find(".size").html(humanize.filesize(a.size)),e.click(c),a=void 0);!1!==
a&&k(b,100);b=$(["#"+q.nSubmitId,'.attached-file[data-id="'+q.oRes.id+'"]'].join(", "));a=y(q.nSubmitId);e=v(b);f=h.welTextarea;if(0!==f.length){var l=f.prop("selectionStart"),g=e.length-a.length-1;f.val(f.val().split(a).join(e));0<g&&z(f,l+g)}w(b,q.oRes.mimeType)}function f(a){k(a.nSubmitId,a.nPercentComplete)}function k(a,h){var b=$("#"+a);b.data("progressBar").css("width",h+"%");100===1*h&&(b.css("opacity","1"),setTimeout(function(){b.addClass("complete")},1E3))}function d(a){$("#"+a.nSubmitId).remove();
0===h.welFileList.children().length&&(h.welFileList.hide(),h.welFileListHelp.hide());$yobi.notify(Messages("common.attach.error.upload",a.oRes.status,a.oRes.statusText));B(y(a.nSubmitId+".png"))}function c(q){var h=$(q.target);q=$(q.currentTarget);h.hasClass("btn-delete")?b(q):a(q)}function b(a){var b=a.attr("data-href");yobi.Files.deleteFile({sURL:b,fOnLoad:function(){var b=a.data("id"),b=m.aTemporaryFileIds.indexOf(b.toString());-1!==b&&(m.aTemporaryFileIds.splice(b,1),h.welTemporaryUploadFileList.val(m.aTemporaryFileIds.join(",")));
B(a);a.remove();0===h.welFileList.children().length&&(h.welFileList.hide(),h.welFileListHelp.hide())},fOnError:function(a){$yobi.notify(Messages("common.attach.error.delete",a.status,a.statusText))}})}function a(a){var b=h.welTextarea;if(0===b.length)return!1;var m=b.prop("selectionStart"),c=b.val();a="string"===typeof a?a:v(a);b.val(c.substring(0,m)+a+c.substring(m));z(b,m+a.length)}function e(a){return 0<=["video/mp4","video/ogg","video/webm"].indexOf($.trim(a).toLowerCase())}function w(a,b){e(b)&&
a.children("i.mimetype").addClass("yobicon-video2").show()}function v(a){var b=a.attr("data-mime"),h=a.attr("data-name");a=a.attr("data-href");h="["+h+"]("+a+") ";return"image"===b.substr(0,5)?"!"+h:e(b)?$("<div>").append($("<video>").attr("controls",!0).append($("<source>").attr("src",a)).append(h)).html():h}function y(a){return"\x3c!--_"+a+"_--\x3e"}function B(a){var b=h.welTextarea;if(0===b.length)return!1;a="string"===typeof a?a:v(a);var m=b.val().split(a).join(""),m=m.split(a.trim()).join("");
b.val(m)}function z(a,b){var h=a.get(0);h.setSelectionRange?h.setSelectionRange(b,b):h.createTextRange&&(h=h.createTextRange(),h.collapse(!0),h.moveEnd("character",b),h.moveStart("character",b),h.select())}function A(b){a(y(b.nSubmitId))}function t(a){var b=h.welTextarea;if(0===b.length)return!1;var m=b.prop("selectionStart"),c=b.val();b.val(c.substring(0,m)+a.markdownTableText+c.substring(m));z(b,m+a.markdownTableText.length)}function u(b){var h=b.oFiles,m=h.length;if("textarea"===b.weEvt.target.tagName.toLowerCase())for(b=
0;b<m;b++)a(y(h[b].nSubmitId))}function x(a){p({vFile:a.attachments,bTemporary:!1});"undefined"===typeof m.sResourceId&&p({vFile:a.tempFiles,bTemporary:!0})}var m={},h={};(function(a){var b=a=a||{},c='<a href="${fileHref}?action=download" class="download ybtn ybtn-mini" title="'+Messages("button.download")+' ${fileName}"><i class="yobicon-download"></i></a>';m.sTplFileList=b.sTplFileList||'<ul class="attaches wm">';m.sTplFileItem=b.sTplFileItem||'<li class="attach"><a href="${fileHref}" class="vmiddle" target="_blank"><i class="yobicon-paperclip"></i><span class="filename">${fileName}</span><span class="filesize">(${fileSizeReadable})</span></a>'+
c+"</li>";m.sResourceId=b.sResourceId;m.sResourceType=b.sResourceType;b=a;h.welToAttach=b.targetFormId||$(b.elContainer);h.welTemporaryUploadFileList=$('<input type="hidden" name="'+(b.sTagNameForTemporaryUploadFiles||"temporaryUploadFiles")+'">');h.welToAttach.prepend(h.welTemporaryUploadFileList);m.aTemporaryFileIds=[];h.welContainer=$(b.elContainer);h.welContainer.data("isYobiAttachment",!0);m.sResourceId=m.sResourceId||h.welContainer.data("resourceId");m.sResourceType=m.sResourceType||h.welContainer.data("resourceType");
m.attachments||(m.attachments=h.welContainer.data("attachments"));h.welTextarea=$(b.elTextarea);h.welFileList=h.welContainer.find("ul.attached-files");h.welFileListHelp=h.welContainer.find("p.help");b=yobi.Files.getEnv();h.welHelpDroppable=h.welContainer.find(".help-droppable");h.welHelpPastable=h.welContainer.find(".help-pastable");h.welHelpDroppable[b.bDroppable?"show":"hide"]();h.welHelpPastable[b.bPastable?"show":"hide"]();m.attachments?x(m.attachments):(m.sResourceType&&m.sResourceId||m.attachments)&&
yobi.Files.getList({fOnLoad:x,sResourceType:m.sResourceType,sResourceId:m.sResourceId});a.sUploaderId&&yobi.Files.attach({beforeUpload:n,uploadProgress:f,successUpload:l,errorUpload:d,pasteFile:A,pasteMarkdownTable:t,dropFile:u},a.sUploaderId)})(g||{});return{destroy:function(){g.sUploaderId&&yobi.Files.detach({beforeUpload:n,uploadProgress:f,successUpload:l,errorUpload:d,pasteFile:A,dropFile:u},g.sUploaderId);for(var a in h)h[a]=null;h=null}}};yobi.Files=function(){function g(a,b){if(a&&a.length)for(var c=0;c<a.length;c++)n(a[c],z(),b);else n(a,z(),b)}function n(a,b,c){a&&(a.nSubmitId=b||z());return!1===A("beforeUpload",{oFile:a,nSubmitId:a?a.nSubmitId:b},c)?!1:t.bXHR2?p(b,a,c):r(b,a,c)}function p(a,b,c){if(b.size&&b.size>t.nMaxFileSize)return k(a,{status:humanize.filesize(b.size),statusText:Messages("error.toolargefile",humanize.filesize(t.nMaxFileSize))},c);var e=new FormData;e.append("filePath",b,"image.png"===b.name?a+".png":b.name);
$.ajax({type:"post",url:t.sUploadURL,data:e,cache:!1,processData:!1,contentType:!1,success:function(b){f(a,b,c)},error:function(b){k(a,b,c)},xhr:function(){var b=$.ajaxSettings.xhr();b.upload&&b.upload.addEventListener("progress",function(b){b.lengthComputable&&l(a,Math.ceil(b.loaded/b.total*100),c)},!1);return b}})}function r(a,b,c){var e=u[c];if(!e.welInputFile&&!b)return!1;var d=e.welInputFile||$(b);b=d.clone();var w=$('<form method="post" enctype="multipart/form-data" style="display:none">');
b.insertAfter(d);b.on("change",$.proxy(v,this,c));e.welInputFile=b;w.attr("action",t.sUploadURL);w.append(d).appendTo(document.body);var g=function(){d.remove();w.remove();w=d=null},e=t.htUploadOpts;e.success=function(b){f(a,b,c);g();g=null};e.uploadProgress=function(b,h,e,d){l(a,d,c);g();g=null};e.error=function(b){k(a,b,c);g();g=null};w.ajaxForm(e);w.submit()}function l(a,b,c){A("uploadProgress",{nSubmitId:a,nPercentComplete:b},c)}function f(a,b,c){if(!(b instanceof Object&&b.name&&b.url))return k(a,
b);c&&u[c]&&u[c].welInputFile&&u[c].welInputFile.val("");A("successUpload",{nSubmitId:a,oRes:b},c)}function k(a,b,c){A("errorUpload",{nSubmitId:a,oRes:b},c)}function d(b){var c=u[b];c.welInputFile.on("change",$.proxy(v,this,b));if(t.bDroppable){c.welContainer.on({dragover:$.proxy(a,this,b),drop:$.proxy(y,this,b)});var d=$("#tplDropFilesHere").text().trim()||'<div class="upload-drop-here"><div class="msg-wrap"><div class="msg">'+Messages("common.attach.dropFilesHere")+"</div></div></div>";c.welDropper=
$(d);c.welTextarea.before(c.welDropper);c.welTextarea.on({dragover:$.proxy(a,this,b),dragenter:$.proxy(e,this,b),dragleave:$.proxy(w,this,b),drop:$.proxy(y,this,b)})}if(t.bPastable&&c.welTextarea)c.welTextarea.on("paste",$.proxy(B,this,b));c.welContainer.data("isYobiUploader",!0);c.welTextarea.data("isYobiUploader",!0)}function c(){$(document.body).addClass("dragover")}function b(){$(document.body).removeClass("dragover")}function a(a,b){c();b.stopPropagation();b.preventDefault();return!1}function e(a,
b){c();var e=b.originalEvent.dataTransfer,d;d=b.originalEvent.dataTransfer;d=d.types?-1<d.types.indexOf("text/uri-list")?"link":-1<d.types.indexOf("Files")||-1<d.types.indexOf("text/plain")?"copy":"none":"none";e.dropEffect=d;b.stopPropagation();b.preventDefault()}function w(a,c){b();c.originalEvent.dataTransfer.dropEffect="none";c.stopPropagation();c.preventDefault()}function v(a){var b=u[a],c;c=b.welInputFile.val();var e=c.indexOf("fakepath");(c=-1<e?c.substring(e+8+1):c)&&""!==c&&g(b.welInputFile[0].files||
b.welInputFile[0],a)}function y(a,c){b();var e=c.originalEvent.dataTransfer.files;if(e&&0!==e.length)return g(e,a),A("dropFile",{weEvt:c,oFiles:e},a),c.stopPropagation(),c.preventDefault(),!1}function B(a,b){function c(a){var b=!1,e=!1;if(a&&1<a.length)for(var d=0,h=a.length;d<h;d++)"string"===a[d].kind&&a[d].type.match("^text/plain")?b=!0:"file"===a[d].kind&&a[d].type.match("^image/")&&(e=!0);return b&&e}function e(a){var c;if(a&&a.length&&1<a.length)for(var d=0,m=a.length;d<m;d++)console.log(">>",
a[d]),"string"===a[d].kind&&a[d].type.match("^text/html")&&(c=b.originalEvent.clipboardData.getData("text/plain").trim(),c=new PasteTable(c),c.markdown(),c=c.markdown());return c}var d=b.originalEvent.clipboardData;if(d&&d.items){var f,k;if(c(d.items))return A("pasteMarkdownTable",{nSubmitId:z(),markdownTableText:e(d.items)},a),b.preventDefault();for(var w=0,l=d.items.length;w<l;w++)f=d.items[w],(k=f.getAsFile())&&0===k.type.indexOf("image/")&&(f=z(),k.name=f+".png",n(k,f,a),A("pasteFile",{nSubmitId:f,
oFile:k},a),b.preventDefault())}}function z(){var a=new Date;return a.getMilliseconds()+"-"+a.getFullYear()+""+(a.getMonth()+1)+"-"+a.getDate()+"-"+a.getHours()+""+a.getMinutes()+"-"+a.getSeconds()}function A(a,b,c){a=(x[a]||[]).concat(x[(c?c+".":"")+a]||[]);if(!1!==a instanceof Array){var e;a.forEach(function(a){e=e||a(b)});return e}}var t={},u={},x={};return{init:function(a){a=a||{};t.sListURL=a.sListURL;t.sUploadURL=a.sUploadURL;t.htUploadOpts=a.htUploadOpts||{dataType:"json"};t.bXHR2=!(!window.ProgressEvent||
!window.FileReader)&&!!window.FormData;-1<navigator.userAgent.toLowerCase().indexOf("trident")&&(t.bXHR2=t.bXHR2&&-1<location.protocol.toLowerCase().indexOf("https"));t.bDroppable="undefined"!=typeof window.File&&t.bXHR2;t.bPastable="undefined"!=typeof document.onpaste&&t.bXHR2&&-1===navigator.userAgent.indexOf("FireFox");t.nMaxFileSize=a.maxFileSize||2147483454},getEnv:function(){return t},getUploader:function(a,b,c){c=c||z();if($(a).data("isYobiUploader")||$(b).data("isYobiUploader"))return!1;var e=
c;u[e]={};u[e].welContainer=$(a);u[e].welTextarea=$(b);u[e].welInputFile=u[e].welContainer.find("input[type=file]");u[e].welContainer.attr("data-namespace",e);t.bXHR2||u[e].welInputFile.attr("multiple",null);d(c);return u[c].welContainer},destroyUploader:function(a){if(a&&u[a]){var b=u[a];b.welInputFile.off();b.welContainer.off();b.welTextarea.off();b.welContainer.data("isYobiUploader",!1);b.welTextarea.data("isYobiUploader",!1);delete u[a]}},attach:function(a,b,c){if("object"===typeof a){c=b?b+".":
"";for(var e in a)x[c+e]=x[c+e]||[],x[c+e].push(a[e])}else c=c?c+".":"",x[c+a]=x[c+a]||[],x[c+a].push(b)},detach:function(a,b,c){c=c?c+".":"";if(b){var e=x[c+a];b=e?e.indexOf(b):-1;-1<b&&x[c+a].splice(b,1)}else x[c+a]=[]},getList:function(a){$.ajax({type:"get",url:t.sListURL,success:a.fOnLoad,error:a.fOnError,data:{containerType:a.sResourceType,containerId:a.sResourceId}})},uploadFile:g,deleteFile:function(a){$yobi.sendForm({sURL:a.sURL,fOnLoad:a.fOnLoad,fOnError:a.fOnError,htData:{_method:"delete"},
htOptForm:{method:"post",enctype:"multipart/form-data"}})}}}();yobi.Markdown=function(g){var n,p;function r(d){n=d.sMarkdownRendererUrl;p={gfm:!0,tables:!0,pedantic:!1,sanitize:!1,smartLists:!0,langPrefix:"",highlight:function(c,b){if(b)try{return hljs.highlight(b.toLowerCase(),c).value}catch(a){console.log(a.message)}}}}function l(d,c){var b={body:c,breaks:d.hasClass("readme-body")?!1:!0};$.ajax(n,{type:"post",contentType:"application/json; charset=utf-8",data:JSON.stringify(b),success:function(a){d.html(a);$("pre code").each(function(a,b){hljs.highlightBlock(b)})}})}
function f(d){var c=d.parents('[data-toggle="markdown-editor"]').get(0);if(!c)return!1;$(c).on("click",'a[data-mode="preview"]',function(b){b=$(b.delegateTarget).find("div.markdown-preview");var a=d.val();n&&l(b,a);b.css({"min-height":d.height()+"px"})});d.on("keydown.tabkey-event-handler",function(b){if(9===b.keyCode){b.preventDefault();b=this.selectionStart;var a=this.selectionEnd;this.value=this.value.substring(0,b)+"\t"+this.value.substring(a);this.selectionEnd=b+1}})}function k(d){$(d||"[markdown]").each(function(c,
b){var a=b.tagName.toUpperCase();if("TEXTAREA"===a||"INPUT"===a||"true"==b.contentEditable)f($(b));else{var a=$(b),e=a.text(),e=e?$yobi.xssClean(marked(e,p)):a.html();$(".markdown-loader").remove();a.html(e).removeClass("markdown-before")}})}p=n=void 0;return{init:function(d){d=d||{};r(d);k(d.aTarget)},enableMarkdown:k,render:l}}();yobi.Mention=function(g){function n(d){d=d||window.event;d=d.which||d.keyCode;(64===d||35===d)&&f.doesNotDataLoaded&&l()}function p(){f.nKeyupEventGenerator&&clearInterval(f.nKeyupEventGenerator);f.nKeyupEventGenerator=setInterval(function(){f.sMentionText!=k.welTarget.val()&&(k.welTarget.trigger("keyup"),f.sMentionText=k.welTarget.val())},100)}function r(){f.nKeyupEventGenerator&&(clearInterval(f.nKeyupEventGenerator),f.nKeyupEventGenerator=null)}function l(){f.doesNotDataLoaded=!1;var d;k.welTarget.atwho({at:"@",
limit:10,displayTpl:"<li data-value='@${loginid}'><img style='width:20px;height:20px;' src='${image}'> ${name} <small>${loginid}</small></li>",suspendOnComposing:!1,searchKey:"searchText",insertTpl:"@${loginid}",callbacks:{remoteFilter:function(c,b){NProgress.start();clearTimeout(d);d=setTimeout(function(){$.getJSON(f.url,{query:c,mentionType:"user"},function(a){NProgress.done();b(a.result)})},300)}}}).atwho({at:"#",limit:10,displayTpl:"<li data-value='#${issueNo}'><small>#${issueNo}</small> ${title}</li>",
suspendOnComposing:!1,insertTpl:"#${issueNo}",callbacks:{remoteFilter:function(c,b){NProgress.start();$.getJSON(f.url,{query:c,mentionType:"issue"},function(a){NProgress.done();b(a.result)})},sorter:function(c,b,a){var e,d,f;if(!c)return b;f=[];e=0;for(d=b.length;e<d;e++){a=b[e];if(a.issueNo===c)a.atwhoOrder=0;else{var k=a.issueNo.toLowerCase().indexOf(c.toLowerCase());a.atwhoOrder=e+1+Math.pow(10,k)+(-1<k?0:Math.pow(100,a.title.toLowerCase().indexOf(c.toLowerCase())))}f.push(a)}return f.sort(function(a,
b){return a.atwhoOrder-b.atwhoOrder})}}}).atwho("run")}var f={},k={};(function(d){f=d||{};f.doesNotDataLoaded=!0;f.nKeyupEventGenerator=null;f.sMentionText=null;f.target?k.welTarget=$(f.target):window.console&&console.error("mention form element targeting doesn't exist!");k.welTarget.on("keypress",n);jQuery.browser.mozilla&&(k.welTarget.on("focus",p),k.welTarget.on("blur",r))})(g||{})};yobi.OriginalMessage=function(g){function n(g,n,l){var f,k;f=function(){n();g.click(k)};k=function(){l();g.click(f)};g.click(f)}return{hide:function(g){$.each(g,function(g,l){var f,k,d,c=$(l);c.find(":contains('---')").each(function(){var b=$(this).html();return b&&!$(this).is(c.children(":first"))&&b.match(/(^|^<[^>]+>)---+[^-]*---+/)?(f=$(this),!1):!0});f&&(k=f.add(f.nextAll()).add(f.parents().filter(function(b,a){return 0<c.has(a).length}).nextAll()).hide(),d=$("<button>").css("border",0).css("padding-left",
"5px").css("padding-right","5px").attr("type","button").text("..."),n(d,function(){k.show()},function(){k.hide()}),f.before(d))})}}}();yobi.Pagination=function(g,n){function p(c){var b=n.createElement("a");b.href=c.replace("&amp;","&");return b.search}function r(c,b,a){var e=p(c),d=new RegExp("(^|&|\\?)"+a+"=[^&]+"),f=d.exec(e);b=e=f?e.replace(d,f[1]+a+"="+b):e+"&"+a+"="+b;a=n.createElement("a");a.href=c;a.search="?"==b[0]?b:"?"+b;return a.href}function l(c){var b=$('<input type="number" pattern="[0-9]*" class="input-mini nospinner">');b.prop({name:c.paramNameForPage,max:c.totalPages,min:1});b.val(c.current);b.on("keydown",function(a){var e;
e=c.current;if(!1===d.test(b.val()))b.val(e),e=!1;else{e=parseInt(b.val(),10);var f=parseInt(b.attr("min"),10),k=parseInt(b.attr("max"),10);e<f?b.val(f):e>k&&b.val(k);e=!0}e&&(e=b.val(),"function"===typeof c.submit?c.submit(e):13===a.which&&(n.location.href=r(c.url,e,c.paramNameForPage)))});return b}function f(c){var b=$('<li class="page-num ikon">');if(c.bActive){var a=$("<a pjax-page>");a.html(c.sLinkHTMLOn);"function"===typeof c.submit?(a.attr("href","javascript: void(0);"),a.on("click",function(){c.submit(c.nSubmitPageNum)})):
a.attr("href",c.sLinkHref);b.append(a)}else b.html(c.sLinkHTMLOff);yobi.ShortcutKey&&(a={},a[c.sShortcutKey]=c.sLinkHref,yobi.ShortcutKey.setKeymapLink(a));return b}var k={},d=/^.[0-9]*$/;return{update:function(c,b,a){if(!(0>=b)){c=$(c);a=a||{};a.url=a.url||n.URL;a.firstPage=a.firstPage||1;a.totalPages=b;a.paramNameForPage=a.paramNameForPage||"pageNum";var e;if(d.test(a.current))e=a.current;else{var g=p(a.url);e=parseInt;var v=a.paramNameForPage;k[v]=k[v]||new RegExp("(^|&|\\?)"+v+"=([^&]+)");g=k[v].exec(g);
e=e(g?g[2]:null,10)||a.firstPage}a.current=e;a.hasPrev="undefined"===typeof a.hasPrev?a.current>a.firstPage:a.hasPrev;a.hasNext="undefined"===typeof a.hasNext?a.current<a.totalPages:a.hasNext;if(!$.isNumeric(a.current))throw Error("options.current is not valid: "+a.current);c.html("");c.addClass("page-navigation-wrap");g=Messages("button.prevPage")||"PREV";e='<i class="ico btn-pg-prev"></i><span>'+g+"</span>";g='<i class="ico btn-pg-prev off"></i><span class="off">'+g+"</span>";e=$.extend(a,{bActive:a.hasPrev,
sLinkHref:a.hasPrev?r(a.url,a.current-1,a.paramNameForPage):"",sLinkHTMLOn:e,sLinkHTMLOff:g,sShortcutKey:"LEFT",nSubmitPageNum:a.current-1});e=f(e);v=Messages("button.nextPage")||"NEXT";g="<span>"+v+'</span><i class="ico btn-pg-next"></i>';v='<span class="off">'+v+'</span><i class="ico btn-pg-next off"></i>';g=$.extend(a,{bActive:a.hasNext,sLinkHref:a.hasNext?r(a.url,a.current+1,a.paramNameForPage):"",sLinkHTMLOn:g,sLinkHTMLOff:v,sShortcutKey:"RIGHT",nSubmitPageNum:a.current+1});g=f(g);a=l(a);a=$('<li class="page-num">').append(a);
v=$('<li class="page-num delimiter">').text("/");b=$('<li class="page-num">').text(b);var y=$('<ul class="page-nums">');y.append([e,a,v,b,g]);c.append(y)}}}}(window,document);$(document).on("click.pagination.number-api",'input[name="pageNum"][type="number"]',function(){$(this).select()});yobi.ShortcutKey=function(g){function n(c){var b;var a=k.htKeycodeMap[c.keyCode];if("undefined"===typeof a)b=void 0;else{b=[];var e="";c.altKey&&b.push("ALT");(c.ctrlKey||c.metaKey)&&b.push("CTRL");c.shiftKey&&b.push("SHIFT");b.push(a);b=e=b.join("+").toUpperCase()}a=d[b];if("function"===typeof a){e=c.target.tagName.toUpperCase();c={weEvt:c,welTarget:$(c.target),sTagName:e,sKeyInput:b,bFormInput:-1<k.aFormTags.indexOf(e)};try{a(c)}catch(f){}finally{}}}function p(c,b){if("string"===typeof c){var a,
e=b;a=l(c);d[a]=e}else for(a in c){b=c[a];var e=a,f=b,e=l(e);d[e]=f}}function r(c){c=l(c);delete d[c]}function l(c){c=c.toUpperCase()||"";c=c.replace(k.rxTrim,"");return c=c.split("+").sort(function(b){return-1*k.aCombinationKeys.indexOf(b)}).join("+")}function f(){$(window).off({keydown:n,beforeunload:f});d=k=null}var k={},d={};k.rxTrim=/\s+/g;k.aFormTags=["INPUT","TEXTAREA"];k.aCombinationKeys=["CTRL","ALT","SHIFT"];k.htKeycodeMap={13:"ENTER",38:"UP",40:"DOWN",37:"LEFT",39:"RIGHT",13:"ENTER",27:"ESC",
32:"SPACE",8:"BACKSPACE",9:"TAB",46:"DELETE",33:"PAGEUP",34:"PAGEDOWN",36:"HOME",35:"END",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",219:"[",221:"]",186:";",222:"'",188:",",190:".",191:"/",189:"-",187:"=",220:"\\",192:"`",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",
120:"F9",121:"F10",122:"F11",123:"F12"};$(window).on({keydown:n,beforeunload:f});return{attach:p,detach:r,getHandlers:function(){return d},setKeymapLink:function(c){var b,a=function(a){a.bFormInput||(document.location.href=c[a.sKeyInput])};for(b in c)c[b]?p(b,a):r(b)}}}();(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g,p){function r(b){if("function"===typeof d.fOnClickButton&&!1===d.fOnClickButton({weEvt:b,nButtonIndex:$(this).index()}))return!1;l()}function l(){c.welContainer.modal("hide")}function f(){"function"==typeof d.fOnAfterShow&&d.fOnAfterShow();d.bAutoFocusOnLastButton&&c.welButtons.find(".ybtn-primary:last,button:last").focus()}function k(){c.welMessage.html("");"function"==typeof d.fOnAfterHide&&d.fOnAfterHide()}var d={},c={};(function(b,
a){d.sDefaultButton='<button type="button" class="ybtn ybtn-info" data-dismiss="modal">'+Messages("button.confirm")+"</button>";d.sTplCustomButton='<button type="button" class="ybtn ${class}">${text}</button>';d.bAutoFocusOnLastButton="undefined"!==typeof a.bAutoFocusOnLastButton?a.bAutoFocusOnLastButton:!0;c.welContainer=$(b).clone();c.welMessage=c.welContainer.find(".msg");c.welDescription=c.welContainer.find(".desc");c.welButtons=c.welContainer.find(".buttons");c.welContainer.modal({show:!1});
c.welContainer.on("shown",f);c.welContainer.on("hidden",k);c.welContainer.on("click","button.ybtn",r)})(g,p||{});return{show:function(b,a,e){d.fOnAfterShow=e.fOnAfterShow;d.fOnAfterHide=e.fOnAfterHide;d.fOnClickButton=e.fOnClickButton;var f;if(e.aButtonLabels){f=[];var k=e.aButtonLabels;e=e.aButtonStyles||[];for(var g=0,l=k.length;g<l;g++)f.push($yobi.tmpl(d.sTplCustomButton,{text:k[g],"class":e[g]||(0===e.length&&g===l-1?"ybtn-primary":"ybtn-default")}));f=f.join("")}else f=d.sDefaultButton;c.welButtons.html(f);
c.welMessage.html($yobi.nl2br(b));c.welDescription.html($yobi.nl2br(a||""));c.welContainer.modal("show")},hide:l}}})("yobi.ui.Dialog");(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g){function p(b){if(0<b.originalEvent.deltaY&&a.welList.scrollTop()+a.welList.height()===a.welList.get(0).scrollHeight||0>b.originalEvent.deltaY&&0===a.welList.scrollTop())return b.preventDefault(),b.stopPropagation(),!1}function r(a){var b=$(a.target),b="LI"===a.target.tagName?b:$(b.parents("li")[0]);if(0===b.length||"undefined"===typeof b.attr("data-value"))return a.stopPropagation(),a.preventDefault(),!1;l(b);f(b);k()}function l(b){a.welSelectedLabel.html(b.html());
a.waItems.removeClass("active");b.addClass("active")}function f(c){c=c.attr("data-value");var d=a.welContainer.attr("data-name");b.sName=d;b.sValue=c;if("undefined"!==typeof d){var f=a.welContainer.find("input[name='"+d+"']");0===f.length&&(f=$('<input type="hidden" name="'+d+'">'),a.welContainer.append(f));f.val(c)}}function k(){"function"==typeof b.fOnChange&&setTimeout(function(){b.fOnChange(d())},0)}function d(){return b.sValue}function c(b){b=a.welContainer.find(b);if(0>=b.length)return!1;b=
$(b[0]);l(b);f(b);return!0}var b={sValue:""},a={};(function(e){a.welContainer=$(e.elContainer);a.welSelectedLabel=a.welContainer.find(".d-label");a.welList=a.welContainer.find(".dropdown-menu");a.waItems=a.welList.find("li");a.welList.on("click","li",r);a.welList.on("mousewheel",p);b.fOnChange=e.fOnChange;c("li[data-selected=true]")})(g);return{getValue:d,onChange:function(a){b.fOnChange=a;return!0},selectByValue:function(a){return c("li[data-value='"+a+"']")},selectItem:c}}})("yobi.ui.Dropdown");$(document).ready(function(){function g(g,f){var k;f=$("#"+g).find("li > a");(k=localStorage.getItem("yobitab-"+g))&&f[k]&&(k=$(f[k]))&&k.data(!1)&&k.tab("show")}var n,p,r;$(".nav-tabs[id]").each(function(l,f){p=$(f);r=p.attr("id");"undefined"!=typeof r&&(n=p.find("li"),n.click(function(){localStorage.setItem("yobitab-"+r,$(this).index())}),g(r,n))})});(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g,p){function r(c){$(this).remove()}function l(c,b){c.bind("webkitTransitionEnd",function(){c.remove()});setTimeout(function(){c.css("opacity",0)},b)}var f,k,d;(function(c,b){b.sTplToast=b.sTplToast.replace("\n","");f=b.sTplToast||'<div class="toast" tabindex="-1">            <div class="btn-dismiss"><button type="button" class="btn-transparent">&times;</button></div>            <div class="center-text msg"></div></div>';k=$(c);
d=$(f)})(g,p||{});return{push:function(c,b){var a=d.clone(),e=a.find(".msg");a.css("opacity","0");a.click(r);e.html($yobi.nl2br(c));k.prepend(a);a.css("opacity","1");b&&0<b&&l(a,b)},clear:function(){k.empty()}}}})("yobi.ui.Toast");(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g,p){function r(f,d){f.match(l.sLastQuery)&&l.bIsLastRangeEntire?d(l.htCachedUsers):(l.htData.query=f,$yobi.sendForm({sURL:l.sActionURL,htOptForm:{method:"get"},htData:l.htData,sDataType:"json",fOnLoad:function(c,b,a){b=a.getResponseHeader("Content-Range");console.log(c);b=(b=l.rxContentRange.exec(b||""))?!(parseInt(b[1],10)<parseInt(b[2],10)):!0;l.bIsLastRangeEntire=b;l.sLastQuery=f;l.htCachedUsers=c;d(c)}}))}var l={},f;(function(g,
d){l.sActionURL=d.sActionURL||"/users";l.rxContentRange=/items\s+([0-9]+)\/([0-9]+)/;l.htData=d.htData||{};try{f=$(g);f.typeahead({minLength:l.htData.minLength||0,items:10});var c=f.data("typeahead")||{};c.items=l.htData.limit||10;c.source=l.htData.source||r;"function"===typeof l.htData.updater&&(c.updater=l.htData.updater);"function"===typeof l.htData.render&&(c.render=l.htData.render);c.minLength=l.htData.minLength||0;f.typeahead(c)}catch(b){"object"==typeof console&&console.log(b)}})(g,p||{})}})("yobi.ui.Typeahead");function temprarySaveHandler(g){var n=$(".editor-notice-label"),p;g.on("keyup",function(){g.val()!==localStorage.getItem(location.pathname)&&(clearTimeout(p),""===g.val()?localStorage.removeItem(location.pathname):(n.children().fadeOut(),p=setTimeout(function(){localStorage.setItem(location.pathname,g.val());n.html('<span class="saved">Draft saved</span>')},5E3)))});localStorage.getItem(location.pathname)&&g.val(localStorage.getItem(location.pathname))}
function removeCurrentPageTemprarySavedContent(){localStorage.removeItem(location.pathname)};
