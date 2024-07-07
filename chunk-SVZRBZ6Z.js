import{e as N,f as j}from"./chunk-3D5OKLZC.js";import{a as V,b as z,c as q,d as $,e as Z,f as K,g as W,h as Y,i as G,j as X,k as J}from"./chunk-CUEN57UJ.js";import{d as _}from"./chunk-IRAS762N.js";import"./chunk-L36CAFLA.js";import{e as U}from"./chunk-JFP3LWEE.js";import"./chunk-IX6G3U3V.js";import{d as B}from"./chunk-SXYHIFXV.js";import"./chunk-NA5JYOI6.js";import{a as L}from"./chunk-FFX3ZHRM.js";import{H as M,Y as Q,Z as ee}from"./chunk-CSPXKSEQ.js";import{$b as u,Ab as r,Bb as b,Cb as c,Db as m,Dc as k,Fc as F,Jc as O,Kb as T,Kc as A,Nb as H,Tb as o,Ua as I,Vb as p,Xa as a,Ya as C,Yb as D,Zb as R,_b as P,aa as x,ba as g,bc as f,fa as E,ka as w,la as v,ob as l,qb as h,zb as n}from"./chunk-E7UGAO5T.js";var te=(()=>{let t=class t{};t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=v({type:t}),t.\u0275inj=g({});let e=t;return e})();var ie=(()=>{let t=class t{};t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=v({type:t}),t.\u0275inj=g({imports:[M,_,_,te,M]});let e=t;return e})();var ne=(()=>{let t=class t{constructor(s){this.http=s,this.apiUrl="https://api.coincap.io/v2/assets"}getCryptoData(){return this.http.get(this.apiUrl)}};t.\u0275fac=function(d){return new(d||t)(E(L))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var de=(e,t)=>({"positive-change":e,"negative-change":t}),ce=e=>({highlight:e});function me(e,t){e&1&&(n(0,"th",16),o(1," Rank "),r())}function he(e,t){if(e&1&&(n(0,"td",17),o(1),r()),e&2){let i=t.$implicit;a(),p(" ",i.rank," ")}}function pe(e,t){e&1&&(n(0,"th",16),o(1," Name "),r())}function ue(e,t){if(e&1&&(n(0,"td",17),o(1),r()),e&2){let i=t.$implicit;a(),p(" ",i.name," ")}}function fe(e,t){e&1&&(n(0,"th",16),o(1," Symbol "),r())}function _e(e,t){if(e&1&&(n(0,"td",17),o(1),r()),e&2){let i=t.$implicit;a(),p(" ",i.symbol," ")}}function ge(e,t){e&1&&(n(0,"th",16),o(1," Price (USD) "),r())}function ve(e,t){if(e&1&&(n(0,"td",17),o(1),u(2,"number"),r()),e&2){let i=t.$implicit;a(),p(" ",f(2,1,i.priceUsd,"1.2-2")," ")}}function Ce(e,t){e&1&&(n(0,"th",16),o(1," Market Cap (USD) "),r())}function ye(e,t){if(e&1&&(n(0,"td",17),o(1),u(2,"number"),r()),e&2){let i=t.$implicit;a(),p(" ",f(2,1,i.marketCapUsd,"1.2-2")," ")}}function xe(e,t){e&1&&(n(0,"th",16),o(1," Volume 24Hr (USD) "),r())}function Ee(e,t){if(e&1&&(n(0,"td",17),o(1),u(2,"number"),r()),e&2){let i=t.$implicit;a(),p(" ",f(2,1,i.volumeUsd24Hr,"1.2-2")," ")}}function be(e,t){e&1&&(n(0,"th",16),o(1," Change 24Hr (%) "),r())}function Me(e,t){e&1&&(n(0,"mat-icon",20),o(1,"trending_up"),r())}function Se(e,t){e&1&&(n(0,"mat-icon",20),o(1,"trending_down"),r())}function we(e,t){if(e&1&&(n(0,"td",18),o(1),u(2,"number"),l(3,Me,2,0,"mat-icon",19)(4,Se,2,0,"mat-icon",19),r()),e&2){let i=t.$implicit;h("ngClass",P(7,de,i.changePercent24Hr>0,i.changePercent24Hr<0)),a(),p(" ",f(2,4,i.changePercent24Hr,"1.2-2")," "),a(2),h("ngIf",i.changePercent24Hr>0),a(),h("ngIf",i.changePercent24Hr<0)}}function Ie(e,t){e&1&&(n(0,"th",16),o(1," Explorer "),r())}function Te(e,t){if(e&1&&(n(0,"td",17)(1,"a",21),o(2,"Link"),r()()),e&2){let i=t.$implicit;a(),H("href",i.explorer,I)}}function He(e,t){e&1&&b(0,"tr",22)}function De(e,t){if(e&1&&b(0,"tr",23),e&2){let i=t.$implicit,s=T();h("ngClass",R(1,ce,i.name.toLowerCase().includes(s.searchTerm.toLowerCase())))}}var rt=(()=>{let t=class t{constructor(s){this.cryptoService=s,this.displayedColumns=["rank","name","symbol","priceUsd","marketCapUsd","volumeUsd24Hr","changePercent24Hr","explorer"],this.dataSource=[],this.searchTerm=""}ngOnInit(){this.cryptoService.getCryptoData().subscribe(s=>{this.dataSource=s.data})}};t.\u0275fac=function(d){return new(d||t)(C(ne))},t.\u0275cmp=w({type:t,selectors:[["app-crypto"]],standalone:!0,features:[D],decls:31,vars:3,consts:[[1,"form-container"],[1,"gradient-toolbar"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","rank"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","symbol"],["matColumnDef","priceUsd"],["matColumnDef","marketCapUsd"],["matColumnDef","volumeUsd24Hr"],["matColumnDef","changePercent24Hr"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","explorer"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"ngClass"],["class","icon",4,"ngIf"],[1,"icon"],["target","_blank",3,"href"],["mat-header-row",""],["mat-row","",3,"ngClass"]],template:function(d,y){d&1&&(n(0,"div",0)(1,"mat-toolbar",1)(2,"span"),o(3,"Cryptocurrency Data (Powered by Coincap )"),r()(),n(4,"table",2),c(5,3),l(6,me,2,0,"th",4)(7,he,2,1,"td",5),m(),c(8,6),l(9,pe,2,0,"th",4)(10,ue,2,1,"td",5),m(),c(11,7),l(12,fe,2,0,"th",4)(13,_e,2,1,"td",5),m(),c(14,8),l(15,ge,2,0,"th",4)(16,ve,3,4,"td",5),m(),c(17,9),l(18,Ce,2,0,"th",4)(19,ye,3,4,"td",5),m(),c(20,10),l(21,xe,2,0,"th",4)(22,Ee,3,4,"td",5),m(),c(23,11),l(24,be,2,0,"th",4)(25,we,5,10,"td",12),m(),c(26,13),l(27,Ie,2,0,"th",4)(28,Te,3,1,"td",5),m(),l(29,He,1,0,"tr",14)(30,De,1,3,"tr",15),r()()),d&2&&(a(4),h("dataSource",y.dataSource),a(25),h("matHeaderRowDef",y.displayedColumns),a(),h("matRowDefColumns",y.displayedColumns))},dependencies:[A,k,F,O,J,V,q,W,$,z,Y,Z,K,G,X,B,j,N,ee,Q,U,_,ie],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:2em auto 0;width:100%}table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th.mat-header-cell[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;text-align:left;font-weight:700;padding:16px;border-bottom:2px solid #e0e0e0}td.mat-cell[_ngcontent-%COMP%]{padding:16px;border-bottom:1px solid #e0e0e0}tr.mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}tr.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fafafa}.mat-elevation-z8[_ngcontent-%COMP%]{border-radius:8px;overflow:hidden;margin:16px 0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}a[_ngcontent-%COMP%]{color:#3f51b5;text-decoration:none;font-weight:700}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.table-container[_ngcontent-%COMP%]{padding:16px}.positive-change[_ngcontent-%COMP%]{color:green}.negative-change[_ngcontent-%COMP%]{color:red}.icon[_ngcontent-%COMP%]{margin-left:4px;font-size:16px}.mat-cell[_ngcontent-%COMP%]{padding:16px;border-bottom:1px solid #e0e0e0;background-color:#fff}.search-field[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px}.gradient-toolbar[_ngcontent-%COMP%]{background:linear-gradient(to right,#9d4fc7,#7c03e6);color:#fff}"]});let e=t;return e})();export{rt as CryptoComponent};
