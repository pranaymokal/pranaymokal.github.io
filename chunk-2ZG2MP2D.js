import{a as he}from"./chunk-AAFS6B6P.js";import{a as Ce}from"./chunk-DXXTMJZX.js";import{a as pe,b as fe}from"./chunk-SLBGDPRX.js";import{b as ee,c as te,d as ie}from"./chunk-5KZIVIVF.js";import{a as re,b as ae}from"./chunk-Y47YXGJH.js";import"./chunk-C6QZHBAB.js";import"./chunk-63GEP2K4.js";import{a as Q,b as Y,c as q,f as G,i as $}from"./chunk-2LISHA5I.js";import{b as me,c as ce}from"./chunk-D745OP35.js";import{a as le,f as de,g as se}from"./chunk-SB7J6B3K.js";import"./chunk-Y47PRXFR.js";import{c as J,g as X,j as K,w as Z}from"./chunk-UMCMM2JA.js";import"./chunk-AESYL7IM.js";import{a as U,f as j}from"./chunk-7PEHVKLN.js";import{e as R,f as z}from"./chunk-GPHSW5B3.js";import"./chunk-PICEHDVT.js";import"./chunk-V763EEI6.js";import{ea as ne,fa as oe}from"./chunk-HVICDWMH.js";import{$b as T,Ab as n,Bb as o,Cb as _,Gb as D,Jb as f,Oc as W,Qa as H,Qb as O,Rb as L,Sb as F,Tb as V,Ub as a,Va as p,Wa as I,Wb as N,Xc as A,Zb as M,_b as v,bc as B,ga as k,oa as s,ob as E,pa as m,qb as g}from"./chunk-VMGXP64E.js";import{f as be,g as S}from"./chunk-NEB6MB4Y.js";var ue=be(Ce());var we=["previewContainer"];function ye(h,c){h&1&&(n(0,"mat-icon"),a(1,"picture_as_pdf"),o())}function _e(h,c){h&1&&_(0,"mat-spinner",27)}var Ye=(()=>{let c=class c{constructor(t){this.snackBar=t,this.htmlContent=`<!DOCTYPE html>
<html>
<head>
    <title>Sample Document</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        p { line-height: 1.6; }
    </style>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a sample HTML document that will be converted to PDF.</p>
    <p>You can edit this HTML and see the preview update in real-time.</p>
</body>
</html>`,this.isConverting=!1,this.selectedTabIndex=0}onFileSelected(t){let i=t.target.files[0];if(i&&i.type==="text/html"){let e=new FileReader;e.onload=r=>{this.htmlContent=r.target?.result,this.updatePreview(),this.showNotification("HTML file loaded successfully")},e.readAsText(i)}else this.showNotification("Please select a valid HTML file",!0)}updatePreview(){if(this.previewContainer){let t=this.previewContainer.nativeElement.querySelector("iframe");if(t){let i=new Blob([this.htmlContent],{type:"text/html"}),e=URL.createObjectURL(i);t.src=e}}}convertToPdf(){return S(this,null,function*(){if(!this.htmlContent.trim()){this.showNotification("Please enter HTML content to convert",!0);return}this.isConverting=!0;try{let t=document.createElement("div");t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.width="800px",t.style.backgroundColor="#ffffff",t.style.fontFamily="Arial, sans-serif",t.style.fontSize="14px",t.style.lineHeight="1.4",t.style.padding="20px";let i=document.createElement("iframe");i.style.width="100%",i.style.height="auto",i.style.border="none",i.style.backgroundColor="transparent",t.appendChild(i),document.body.appendChild(t);let e=i.contentDocument||i.contentWindow?.document;if(e&&(e.open(),e.write(this.htmlContent),e.close(),yield new Promise(u=>{let x=()=>{e.body&&e.body.innerHTML.trim()?u(void 0):setTimeout(x,50)};i.onload=()=>u(void 0),x(),setTimeout(()=>u(void 0),2e3)}),e.body)){let u=e.body.scrollHeight||e.body.offsetHeight;i.style.height=u+40+"px",t.style.height=i.style.height}console.log("HTML Content:",this.htmlContent),console.log("Iframe height:",i.style.height);let r=yield(0,ue.default)(t,{scale:1.5,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff",width:800,height:parseInt(t.style.height)||600,scrollX:0,scrollY:0,logging:!1,foreignObjectRendering:!1});console.log("Canvas dimensions:",r.width,"x",r.height),document.body.removeChild(t);let d=r.toDataURL("image/png"),l=new he({orientation:"portrait",unit:"mm",format:"a4"}),w=210,P=295,b=r.height*w/r.width,C=b,y=0;for(l.addImage(d,"PNG",0,y,w,b),C-=P;C>=0;)y=C-b,l.addPage(),l.addImage(d,"PNG",0,y,w,b),C-=P;let ge=`html-to-pdf-${new Date().getTime()}.pdf`;l.save(ge),this.showNotification("PDF generated and downloaded successfully")}catch(t){console.error("PDF conversion error:",t),this.showNotification("Error converting HTML to PDF: "+t,!0)}finally{this.isConverting=!1}})}clear(){this.htmlContent="",this.updatePreview()}loadSample(){this.htmlContent=`<!DOCTYPE html>
<html>
<head>
    <title>Sample Invoice</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; }
        .invoice-details { margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .total { font-weight: bold; font-size: 18px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>INVOICE</h1>
        <p>Invoice #12345</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
    </div>

    <div class="invoice-details">
        <p><strong>Bill To:</strong> John Doe</p>
        <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Web Development Services</td>
                <td>40</td>
                <td>$75.00</td>
                <td>$3,000.00</td>
            </tr>
            <tr>
                <td>Hosting Setup</td>
                <td>1</td>
                <td>$150.00</td>
                <td>$150.00</td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="total">
                <td colspan="3">Total Amount</td>
                <td>$3,150.00</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`,this.updatePreview(),this.showNotification("Sample HTML loaded")}showNotification(t,i=!1){this.snackBar.open(t,"Close",{duration:3e3,panelClass:i?"error-snackbar":"success-snackbar"})}};c.\u0275fac=function(i){return new(i||c)(I(pe))},c.\u0275cmp=k({type:c,selectors:[["app-html-to-pdf"]],viewQuery:function(i,e){if(i&1&&O(we,5),i&2){let r;L(r=F())&&(e.previewContainer=r.first)}},standalone:!0,features:[B],decls:58,vars:7,consts:[["fileInput",""],["previewContainer",""],[1,"tool-container"],[1,"gradient-toolbar"],[1,"content"],[1,"file-upload-card"],[1,"upload-section"],["type","file","accept",".html,.htm",2,"display","none",3,"change"],["mat-raised-button","","color","primary",3,"click"],[1,"upload-text"],[1,"editor-card"],[3,"selectedIndexChange","selectedTabChange","selectedIndex"],["label","Edit HTML"],[1,"tab-content"],["appearance","outline",1,"full-width"],["matInput","","rows","15","placeholder","Enter your HTML code here...",3,"ngModelChange","input","ngModel"],["label","Preview"],[1,"preview-container"],["sandbox","allow-scripts allow-same-origin",1,"preview-iframe",3,"srcdoc"],[1,"button-group"],["mat-raised-button","","color","primary",3,"click","disabled"],[4,"ngIf"],["diameter","20","class","spinner",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","",3,"click"],[1,"info-card"],[1,"instructions-list"],["diameter","20",1,"spinner"]],template:function(i,e){if(i&1){let r=D();n(0,"div",2)(1,"mat-toolbar",3),a(2,"HTML to PDF Converter"),o(),n(3,"div",4)(4,"mat-card",5)(5,"mat-card-content")(6,"div",6)(7,"input",7,0),f("change",function(l){return s(r),m(e.onFileSelected(l))}),o(),n(9,"button",8),f("click",function(){s(r);let l=V(8);return m(l.click())}),n(10,"mat-icon"),a(11,"file_upload"),o(),a(12," Upload HTML File "),o(),n(13,"span",9),a(14,"or edit HTML below"),o()()()(),n(15,"mat-card",10)(16,"mat-card-content")(17,"mat-tab-group",11),T("selectedIndexChange",function(l){return s(r),v(e.selectedTabIndex,l)||(e.selectedTabIndex=l),m(l)}),f("selectedTabChange",function(){return s(r),m(e.selectedTabIndex===1&&e.updatePreview())}),n(18,"mat-tab",12)(19,"div",13)(20,"mat-form-field",14)(21,"mat-label"),a(22,"HTML Content"),o(),n(23,"textarea",15),T("ngModelChange",function(l){return s(r),v(e.htmlContent,l)||(e.htmlContent=l),m(l)}),f("input",function(){return s(r),m(e.selectedTabIndex===1&&e.updatePreview())}),o()()()(),n(24,"mat-tab",16)(25,"div",13)(26,"div",17,1),_(28,"iframe",18),o()()()()()(),n(29,"div",19)(30,"button",20),f("click",function(){return s(r),m(e.convertToPdf())}),E(31,ye,2,0,"mat-icon",21)(32,_e,1,0,"mat-spinner",22),a(33),o(),n(34,"button",23),f("click",function(){return s(r),m(e.loadSample())}),n(35,"mat-icon"),a(36,"code"),o(),a(37," Load Sample "),o(),n(38,"button",24),f("click",function(){return s(r),m(e.clear())}),n(39,"mat-icon"),a(40,"clear"),o(),a(41," Clear "),o()(),n(42,"mat-card",25)(43,"mat-card-header")(44,"mat-card-title"),a(45,"Instructions"),o()(),n(46,"mat-card-content")(47,"ul",26)(48,"li"),a(49,"Upload an HTML file or edit HTML directly in the editor"),o(),n(50,"li"),a(51,"Use the Preview tab to see how your HTML will look"),o(),n(52,"li"),a(53,'Click "Convert to PDF" to generate and download the PDF file'),o(),n(54,"li"),a(55,"The PDF will be generated with A4 page size and high quality"),o(),n(56,"li"),a(57,"Complex CSS and JavaScript may not render perfectly in the PDF"),o()()()()()()}i&2&&(p(17),M("selectedIndex",e.selectedTabIndex),p(6),M("ngModel",e.htmlContent),p(5),g("srcdoc",e.htmlContent,H),p(2),g("disabled",e.isConverting),p(),g("ngIf",!e.isConverting),p(),g("ngIf",e.isConverting),p(),N(" ",e.isConverting?"Converting...":"Convert to PDF"," "))},dependencies:[A,W,Z,J,X,K,oe,ne,se,de,le,ce,me,j,U,z,R,$,Q,q,G,Y,fe,ie,ee,te,ae,re],styles:[".tool-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:linear-gradient(135deg,#1a1a2e,#16213e)}.content[_ngcontent-%COMP%]{padding:2rem;flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:1.5rem}.full-width[_ngcontent-%COMP%]{width:100%}.upload-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}.upload-text[_ngcontent-%COMP%]{color:#ffffffb3;font-size:14px}.button-group[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;align-items:center}.tab-content[_ngcontent-%COMP%]{padding:1rem 0;min-height:400px}.preview-container[_ngcontent-%COMP%]{width:100%;height:400px;border:1px solid rgba(255,255,255,.2);border-radius:8px;overflow:hidden;background:#ffffff0d}.preview-iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:none;background:#fff}.instructions-list[_ngcontent-%COMP%]{color:#fffc;padding-left:1.5rem}.instructions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem;line-height:1.5}mat-card[_ngcontent-%COMP%]{width:100%;background:#ffffff0d!important;border:1px solid rgba(255,255,255,.15)!important;-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;color:#fff}.file-upload-card[_ngcontent-%COMP%]{background:#667eea1a!important;border:1px solid rgba(102,126,234,.3)!important}.editor-card[_ngcontent-%COMP%]{flex:1}.info-card[_ngcontent-%COMP%]{background:#ffffff08!important}textarea[_ngcontent-%COMP%]{font-family:Courier New,monospace;resize:vertical;min-height:350px}.spinner[_ngcontent-%COMP%]{margin-right:8px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ffffff0d}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#667eea80;border-radius:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#667eeacc}  .mat-mdc-tab-group{--mdc-tab-indicator-active-indicator-color: #667eea}  .mat-mdc-tab{color:#ffffffb3!important}  .mat-mdc-tab.mat-mdc-tab-active{color:#667eea!important}  .mat-mdc-tab-header{border-bottom:1px solid rgba(255,255,255,.1)}"]});let h=c;return h})();export{Ye as HtmlToPdfComponent};
