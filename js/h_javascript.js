
    function check_IE_version(){
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0")
        {
            DD_belatedPNG.fix('*');   //����png��ie6�б���͸��,�������еĿ�����*�ţ��磺DD_belatedPNG.fix('*')
        }
    }
//-------------------------
function MM_preloadImages() { //v3.0
    var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
        var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
            if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
    var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
    var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
    if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
    for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
    if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
        if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//---------------------
function check_bodywidth(sID,sWidth){
    check_IE_version();
    var c_width = document.body.clientWidth;
    if (c_width<sWidth){
        document.getElementById(sID).style.width = sWidth + "px";
    }
    else {
        document.getElementById(sID).style.width = c_width + "px";
    }
}
//---------------------
function setTab_con(nameCon,nameBh,itemCnt,curItem,nameCss)
{
    for(item_i=1;item_i<=itemCnt;item_i++){
        if (item_i==curItem){
            document.getElementById(nameCon + item_i).style.display="inline";
            document.getElementById(nameBh + item_i).className=nameCss + "A";
        }
        else
        {
            document.getElementById(nameCon + item_i).style.display="none";
            document.getElementById(nameBh + item_i).className=nameCss;
        }
    }
}
//---------------------
function setTab_service(curItem,itemCnt)
{
    for(item_i=1;item_i<=itemCnt;item_i++){
        if (item_i==curItem){
            document.getElementById("serlist_" + item_i).style.display="inline";
            document.getElementById("sercon_" + item_i).style.display="inline";
        }
        else
        {
            document.getElementById("serlist_" + item_i).style.display="none";
            document.getElementById("sercon_" + item_i).style.display="none";
        }
    }
}
//---------------------
function setTab_pro(curItem,itemCnt,curList,curCon,curStyle)
{
    for(item_i=1;item_i<=itemCnt;item_i++){
        if (item_i==curItem){
            document.getElementById(curCon + item_i).style.display="inline";
            document.getElementById(curList + item_i).className=curStyle + "A";
        }
        else
        {
            document.getElementById(curCon + item_i).style.display="none";
            document.getElementById(curList + item_i).className=curStyle;
        }
    }
}
//--------------------
function check_pro_over(sid){
    document.getElementById(sid).className = "proliA";
}

function check_pro_out(sid){
    document.getElementById(sid).className = "proli";
}
//-------------------
function check_imgs(imgpath)
{
    document.getElementById("imgb").src=imgpath;
}

function check_imgs_over(sid)
{
    document.getElementById("imgs" + sid).className="liimgA";
}

function check_imgs_out(sid)
{
    document.getElementById("imgs" + sid).className="liimg";
}

//-------------------
function check_prolist_over(curItem){
    document.getElementById("procon" + curItem).style.display = "inline";
}

function check_prolist_out(curItem,theEvent){

    if (theEvent){
        var browser=navigator.userAgent;   //ȡ�����������
        //if (browser.indexOf("Firefox")>0){  //�����Firefox
        // if (document.getElementById("workslist_" + sID).contains(theEvent.relatedTarget)) {  //�������Ԫ��
        //  return false;   //������ʽ
        // }
        // }
        if (browser.indexOf("MSIE")>0){  //�����IE
            if (document.getElementById("prolist" + curItem).contains(event.toElement)||document.getElementById("procon" + curItem).contains(event.toElement)) {  //�������Ԫ��
                return false;   //������ʽ
            }
        }
    }
    document.getElementById("procon" + curItem).style.display = "none";
}
//-----------
function checkuserinfo()
{
    if(checkspace(document.userinfo.uname.value)) {
        alert("����������");
        document.userinfo.uname.focus();
        return false;
    }
    if(checkspace(document.userinfo.tel.value)) {
        alert("��������ϵ�绰��");
        document.userinfo.tel.focus();
        return false;
    }
    if(checkspace(document.userinfo.email.value)) {
        alert("�����������ַ��");
        document.userinfo.email.focus();
        return false;
    }
    if(checkspace(document.userinfo.content.value)) {
        alert("�������������ݣ�");
        document.userinfo.content.focus();
        return false;
    }
    if(checkspace(document.userinfo.vcode.value)) {
        alert("��������֤�룡");
        document.userinfo.vcode.focus();
        return false;
    }
}

function checkspace(checkstr) {
    var str = '';
    for(i = 0; i < checkstr.length; i++) {
        str = str + ' ';
    }
    return (str == checkstr);
}


function check_ly_focus(sID,sText){
    if (document.getElementById(sID).value==sText){
        document.getElementById(sID).value="";
    }
}

function check_ly_blur(sID,sText){
    if (document.getElementById(sID).value==""){
        document.getElementById(sID).value=sText;
    }
}
//-----------------------
function check_search(){
    if (document.formsearch.key.value==""||document.formsearch.key.value=="������ؼ���"){
        alert("�����������ؼ���");
        document.formsearch.key.focus();
        return false;
    }
}

function check_search_focus(){
    if (document.formsearch.key.value=="������ؼ���"){
        document.formsearch.key.value="";
    }
}

function check_search_blur(){
    if (document.formsearch.key.value==""){
        document.formsearch.key.value="������ؼ���";
    }
}

//------------------------------

function check_req()
{
    if(checkspace(document.reqform.uname.value)||document.reqform.uname.value=="���� Name") {
        alert("����д����");
        document.reqform.uname.focus();
        return false;
    }
    if(checkspace(document.reqform.tel.value)||document.reqform.tel.value=="�绰 Phone") {
        alert("����д�绰��");
        document.reqform.tel.focus();
        return false;
    }
    if(checkspace(document.reqform.email.value)||document.reqform.email.value=="�����ʼ� E-mail") {
        alert("����д�����ʼ���");
        document.reqform.email.focus();
        return false;
    }
    if(checkspace(document.reqform.content.value)||document.reqform.content.value=="����д��������Ҫ����վ��Ʒ��") {
        alert("����д��������Ҫ����վ��Ʒ��");
        document.reqform.content.focus();
        return false;
    }
    if(checkspace(document.reqform.vcode.value)||document.reqform.vcode.value=="��֤��") {
        alert("����д��֤�룡");
        document.reqform.vcode.focus();
        return false;
    }
}

function check_req_focus(sID,sText){
    if (document.getElementById(sID).value==sText){
        document.getElementById(sID).value="";
    }
}

function check_req_blur(sID,sText){
    if (document.getElementById(sID).value==""){
        document.getElementById(sID).value=sText;
    }
}
//------------------------
//------------------------
var xmlHttp;
var xmlHttp = false;
function createXMLHttpRequest(){
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("�����������֧��AJAX��");
                return false;
            }
        }
    }
}
//------------------
function check_hits(s_table,s_id) {
    //var u_name = document.getElementById("u_name").value;
    //if ((u_name == null) || (u_name == "")) return;
    createXMLHttpRequest();
    var url = "ajax/ajax_hits.asp?s_table=" + escape(s_table) + "&s_id=" + escape(s_id);
    xmlHttp.open("get", url, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = updatePage1;
}

function updatePage1() {
    if (xmlHttp.readyState < 4) {
        //document.getElementById("ts_username").innerHTML = "<img src='images/loader.gif' align='absmiddle' border='0'>&nbsp;&nbsp;<font color='#FF0000'>ϵͳ���ڼ��û�Ա���Ƿ��ѱ�ע�ᣬ���Ժ�...... |</font>��";
    }
    if (xmlHttp.readyState == 4) {
        //document.getElementById("ts_username").innerHTML = "����";
        if (xmlHttp.status==200) {
            var response1 = xmlHttp.responseText;
            response_list1=response1.split('$');

            document.getElementById("hits_" + response_list1[0]).innerHTML = response_list1[1];

        }
    }
}
//------------------
function check_video(videourl,videoname) {
    var bd_url = "";

    document.getElementById("w_bgdiv").style.display = "block";
    document.getElementById("w_bgdiv").style.width = document.body.scrollWidth + "px";
    document.getElementById("w_bgdiv").style.height = document.body.scrollHeight + "px";

    document.getElementById("w_maincon").style.display = "block";
    document.getElementById("videoname").innerHTML = videoname;

//alert(videourl);

    if (videourl!="") {
        if (videourl.indexOf('UploadFiles/videofile')>-1) {

            bd_url = bd_url + "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' style='width:760px; height:450px;'>";
            bd_url = bd_url + "<param name='movie' value='player.swf'>";
            bd_url = bd_url + "<param name='quality' value='high'>";
            bd_url = bd_url + "<param name='menu' value='false'>";
            bd_url = bd_url + "<param name='AutoStart' value='false'>";
            bd_url = bd_url + "<param name='allowFullScreen' value='true' />";
            bd_url = bd_url + "<param name='FlashVars' isautoplay='0' value='vcastr_file=" + videourl + "&LogoText=&IsShowBar=1&EndSwf=&BeginSwf=&TextColor=0xFF000&vcastr_title='>";
            bd_url = bd_url + "<embed allowfullscreen='true' flashvars='vcastr_file=" + videourl + "&LogoText=&IsShowBar=1&EndSwf=&BeginSwf=&TextColor=0xFF000&vcastr_title=' menu='false' pluginspage='http://www.macromedia.com/go/getflashplayer' quality='high' src='player.swf' type='application/x-shockwave-flash' width='760' height='450'></embed>";
            bd_url = bd_url + "</object>";

            document.getElementById("videocon").innerHTML = bd_url;

        } else {
            document.getElementById("videocon").innerHTML = "<embed src=\"" + videourl + "\" allowFullScreen=\"true\" quality=\"high\" width=\"760\" height=\"450\" align=\"middle\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\"></embed>";
        }
    }

}


function close_video() {
    document.getElementById("w_maincon").style.display = "none";
    document.getElementById("w_bgdiv").style.display = "none";
    document.getElementById("videocon").innerHTML = "";
}

//------------------
function postToWb(){
    var _t = encodeURI(document.title);
    var _url = encodeURI(document.location);
    var _appkey = encodeURI("appkey");//�����Ѷ��õ�appkey
    var _pic = encodeURI('');//�����磺var _pic='ͼƬurl1|ͼƬurl2|ͼƬurl3....��
    var _site = '';//�����վ��ַ
    var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic;
    window.open( _u,'ת������Ѷ΢��', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}
//------------------
//-->