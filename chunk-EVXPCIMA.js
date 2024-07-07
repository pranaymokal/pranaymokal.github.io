import{a as v,b as w,c as g,d as y,e as T,f as M,g as b,h as I,i as R,j as $,k as H}from"./chunk-CUEN57UJ.js";import"./chunk-NA5JYOI6.js";import{a as D}from"./chunk-FFX3ZHRM.js";import{Y as j,Z as O}from"./chunk-CSPXKSEQ.js";import{Ab as i,Bb as S,Cb as d,Db as s,Tb as o,Ub as f,Xa as r,Ya as k,Yb as x,aa as C,fa as _,ka as E,ob as p,qb as u,zb as n}from"./chunk-E7UGAO5T.js";var K=(()=>{let e=class e{constructor(m){this.http=m,this.baseUrl="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=",this.apiKey="7RKVW481K2SUYY7V"}getStockData(m){let a=`${this.baseUrl}?function=TIME_SERIES_DAILY&symbol=${m}&outputsize=compact&apikey=${this.apiKey}`;return console.log(a),this.http.get(a)}};e.\u0275fac=function(a){return new(a||e)(_(D))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function z(t,e){t&1&&(n(0,"th",15),o(1,"Stock"),i())}function A(t,e){if(t&1&&(n(0,"td",16),o(1),i()),t&2){let l=e.$implicit;r(),f(l.symbol)}}function F(t,e){t&1&&(n(0,"th",15),o(1,"Date"),i())}function P(t,e){if(t&1&&(n(0,"td",16),o(1),i()),t&2){let l=e.$implicit;r(),f(l.date)}}function V(t,e){t&1&&(n(0,"th",15),o(1,"Open"),i())}function q(t,e){if(t&1&&(n(0,"td",16),o(1),i()),t&2){let l=e.$implicit;r(),f(l.open)}}function B(t,e){t&1&&(n(0,"th",15),o(1,"High"),i())}function N(t,e){if(t&1&&(n(0,"td",16),o(1),i()),t&2){let l=e.$implicit;r(),f(l.high)}}function W(t,e){t&1&&(n(0,"th",15),o(1,"Low"),i())}function G(t,e){if(t&1&&(n(0,"td",16),o(1),i()),t&2){let l=e.$implicit;r(),f(l.low)}}function J(t,e){t&1&&(n(0,"th",15),o(1,"Close"),i())}function Q(t,e){if(t&1&&(n(0,"td",16),o(1),i()),t&2){let l=e.$implicit;r(),f(l.close)}}function X(t,e){t&1&&(n(0,"th",15),o(1,"Volume"),i())}function Z(t,e){if(t&1&&(n(0,"td",16),o(1),i()),t&2){let l=e.$implicit;r(),f(l.volume)}}function tt(t,e){t&1&&S(0,"tr",17)}function et(t,e){t&1&&S(0,"tr",18)}var mt=(()=>{let e=class e{constructor(m){this.stockService=m,this.displayedColumns=["stock","date","open","high","low","close","volume"],this.dataSource=[],this.companies=["RELIANCE.BSE"]}ngOnInit(){this.fetchStockData()}fetchStockData(){this.companies.forEach(m=>{this.stockService.getStockData(m).subscribe(a=>{let c=a["Time Series (Daily)"],h=Object.keys(c)[0],L={symbol:a["Meta Data"]["2. Symbol"],date:h,open:c[h]["1. open"],high:c[h]["2. high"],low:c[h]["3. low"],close:c[h]["4. close"],volume:c[h]["5. volume"]};this.dataSource.push(L)},a=>{console.error(`Error fetching stock data for ${m}: `,a)})})}};e.\u0275fac=function(a){return new(a||e)(k(K))},e.\u0275cmp=E({type:e,selectors:[["app-stock"]],standalone:!0,features:[x],decls:29,vars:3,consts:[[1,"form-container"],[1,"gradient-toolbar"],[1,"mat-elevation-z8"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","stock"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","open"],["matColumnDef","high"],["matColumnDef","low"],["matColumnDef","close"],["matColumnDef","volume"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,c){a&1&&(n(0,"div",0)(1,"mat-toolbar",1)(2,"span"),o(3,"Stock Market Data (Powered by alphavantage )"),i()(),n(4,"div",2)(5,"table",3),d(6,4),p(7,z,2,0,"th",5)(8,A,2,1,"td",6),s(),d(9,7),p(10,F,2,0,"th",5)(11,P,2,1,"td",6),s(),d(12,8),p(13,V,2,0,"th",5)(14,q,2,1,"td",6),s(),d(15,9),p(16,B,2,0,"th",5)(17,N,2,1,"td",6),s(),d(18,10),p(19,W,2,0,"th",5)(20,G,2,1,"td",6),s(),d(21,11),p(22,J,2,0,"th",5)(23,Q,2,1,"td",6),s(),d(24,12),p(25,X,2,0,"th",5)(26,Z,2,1,"td",6),s(),p(27,tt,1,0,"tr",13)(28,et,1,0,"tr",14),i()()()),a&2&&(r(5),u("dataSource",c.dataSource),r(22),u("matHeaderRowDef",c.displayedColumns),r(),u("matRowDefColumns",c.displayedColumns))},dependencies:[H,v,g,b,y,w,I,T,M,R,$,O,j],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:2em auto 0;width:100%}.gradient-toolbar[_ngcontent-%COMP%]{background:linear-gradient(to right,#9d4fc7,#7c03e6);color:#fff}"]});let t=e;return t})();export{mt as StockComponent};
