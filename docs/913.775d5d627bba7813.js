"use strict";(self.webpackChunkibm_assignment_shipment_search=self.webpackChunkibm_assignment_shipment_search||[]).push([[913],{8913:(qt,A,c)=>{c.r(A),c.d(A,{ShipmentModule:()=>Mt});var g=c(6895),f=c(8616),t=c(4650),T=c(8104),v=c(4463),M=c(9646),q=c(4968),N=c(5577),O=c(4004),w=c(8505),k=c(9300),L=c(4049),F=c(4482),y=c(5403),E=c(8421),Y=c(5963);function z(e,n,l,o){const s=window&&!!window.document&&window.document.documentElement;let i=s&&n?window:l;if(e&&(i=e&&s&&"string"==typeof e?function j(e,n,l){return(l?window.document:n).querySelector(e)}(e,l.nativeElement,o):e,!i))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return i}function S(e){return e&&!e.firstChange}const W={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},R={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class B{constructor(n=!0){this.vertical=n,this.propsMap=n?W:R}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function V(e){return["Window","global"].some(l=>Object.prototype.toString.call(e).includes(l))}function _(e,n){return e?n.document.documentElement:null}function D(e,n){const l=function et({container:e,isWindow:n,axis:l}){const{offsetHeightKey:o,clientHeightKey:s}=U(l);return b(e,n,o,s)}(n);return n.isWindow?function X(e,n,l){const{axis:o,container:s,isWindow:i}=l,{offsetHeightKey:a,clientHeightKey:d}=U(o),r=e+x(_(i,s),o,i),u=b(n.nativeElement,i,a,d),h=function nt(e,n,l){const o=n.topKey();if(e.getBoundingClientRect)return e.getBoundingClientRect()[o]+x(e,n,l)}(n.nativeElement,o,i)+u;return{height:e,scrolled:r,totalToScroll:h,isWindow:i}}(l,e,n):function tt(e,n,l){const{axis:o,container:s}=l;return{height:e,scrolled:s[o.scrollTopKey()],totalToScroll:s[o.scrollHeightKey()],isWindow:!1}}(l,0,n)}function U(e){return{offsetHeightKey:e.offsetHeightKey(),clientHeightKey:e.clientHeightKey()}}function b(e,n,l,o){if(isNaN(e[l])){const s=_(n,e);return s?s[o]:0}return e[l]}function x(e,n,l){const o=n.pageYOffsetKey(),s=n.scrollTopKey(),i=n.offsetTopKey();return isNaN(window.pageYOffset)?_(l,e)[s]:e.ownerDocument?e.ownerDocument.defaultView[o]:e[i]}function it(e,n={down:0,up:0},l){let o,s;if(e.totalToScroll<=0)return!1;const i=e.isWindow?e.scrolled:e.height+e.scrolled;return l?(o=(e.totalToScroll-i)/e.totalToScroll,s=(n?.down?n.down:0)/10):(o=e.scrolled/(e.scrolled+(e.totalToScroll-i)),s=(n?.up?n.up:0)/10),o<=s}class rt{constructor({totalToScroll:n}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=n}updateScrollPosition(n){return this.lastScrollPosition=n}updateTotalToScroll(n){this.lastTotalToScroll!==n&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=n)}updateScroll(n,l){this.updateScrollPosition(n),this.updateTotalToScroll(l)}updateTriggeredFlag(n,l){l?this.triggered.down=n:this.triggered.up=n}isTriggeredScroll(n,l){return l?this.triggered.down===n:this.triggered.up===n}}function ct(e){const{scrollContainer:n,scrollWindow:l,element:o,fromRoot:s}=e,i=function $({windowElement:e,axis:n}){return function G(e,n){const l=e.isWindow||n&&!n.nativeElement?n:n.nativeElement;return{...e,container:l}}({axis:n,isWindow:V(e)},e)}({axis:new B(!e.horizontal),windowElement:z(n,l,o,s)}),a=new rt({totalToScroll:D(o,i)}),r={up:e.upDistance,down:e.downDistance};return function dt(e){let n=(0,q.R)(e.container,"scroll");return e.throttle&&(n=n.pipe(function J(e,n=L.z,l){const o=(0,Y.H)(e,n);return function H(e,n){return(0,F.e)((l,o)=>{const{leading:s=!0,trailing:i=!1}=n??{};let a=!1,d=null,r=null,u=!1;const h=()=>{r?.unsubscribe(),r=null,i&&(P(),u&&o.complete())},C=()=>{r=null,u&&o.complete()},I=m=>r=(0,E.Xf)(e(m)).subscribe((0,y.x)(o,h,C)),P=()=>{if(a){a=!1;const m=d;d=null,o.next(m),!u&&I(m)}};l.subscribe((0,y.x)(o,m=>{a=!0,d=m,(!r||r.closed)&&(s?P():I(m))},()=>{u=!0,(!(i&&a&&r)||r.closed)&&o.complete()}))})}(()=>o,l)}(e.throttle,void 0,{leading:!0,trailing:!0}))),n}({container:i.container,throttle:e.throttle}).pipe((0,N.z)(()=>(0,M.of)(D(o,i))),(0,O.U)(u=>function ut(e,n,l){const{scrollDown:o,fire:s}=function ot(e,n,l){const o=function lt(e,n){return e<n.scrolled}(e,n);return{fire:it(n,l,o),scrollDown:o}}(e,n,l);return{scrollDown:o,fire:s,stats:n}}(a.lastScrollPosition,u,r)),(0,w.b)(({stats:u})=>a.updateScroll(u.scrolled,u.totalToScroll)),(0,k.h)(({fire:u,scrollDown:h,stats:{totalToScroll:C}})=>function Q(e,n,l){return!!(e&&n||!l&&n)}(e.alwaysCallback,u,a.isTriggeredScroll(C,h))),(0,w.b)(({scrollDown:u,stats:{totalToScroll:h}})=>{a.updateTriggeredFlag(h,u)}),(0,O.U)(pt))}const Z={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function pt(e){const{scrollDown:n,stats:{scrolled:l}}=e;return{type:n?Z.DOWN:Z.UP,payload:{currentScrollPosition:l}}}let gt=(()=>{class e{constructor(l,o){this.element=l,this.zone=o,this.scrolled=new t.vpe,this.scrolledUp=new t.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:l,infiniteScrollDisabled:o,infiniteScrollDistance:s}){const i=S(l),a=S(o),d=S(s),r=!a&&!this.infiniteScrollDisabled||a&&!o.currentValue||d;(i||a||d)&&(this.destroyScroller(),r&&this.setup())}setup(){(function K(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=ct({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(l=>this.handleOnScroll(l))})}handleOnScroll({type:l,payload:o}){const s=l===Z.DOWN?this.scrolled:this.scrolledUp;(function ft(e){return e.observed??e.observers.length>0})(s)&&this.zone.run(()=>s.emit(o))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return e.\u0275fac=function(l){return new(l||e)(t.Y36(t.SBq),t.Y36(t.R0b))},e.\u0275dir=t.lG2({type:e,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[t.TTD]}),e})(),ht=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})();var p=c(1165),mt=c(5861);function vt(e,n){if(1&e){const l=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(){const i=t.CHM(l).$implicit,a=t.oxw();return t.KtG(a.onItemClick(i.AssignedToUserId))}),t.TgZ(1,"div",2)(2,"div",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",4),t._uU(7),t.qZA(),t.TgZ(8,"div",5),t.NdJ("click",function(){const i=t.CHM(l).$implicit,a=t.oxw();return t.KtG(a.onItemClick(i.AssignedToUserId))}),t._uU(9," Shipment # "),t.TgZ(10,"span",6),t._uU(11),t.qZA()()(),t.TgZ(12,"div",2)(13,"div",3),t._uU(14),t.qZA(),t.TgZ(15,"div",4),t._uU(16),t.qZA(),t.TgZ(17,"div",4),t._uU(18),t.qZA()(),t.TgZ(19,"div",2)(20,"div",3),t._uU(21,"Customer Info"),t.qZA(),t.TgZ(22,"div",4),t._uU(23),t.qZA(),t.TgZ(24,"div",4),t._uU(25),t.qZA(),t.TgZ(26,"div",4),t._uU(27),t.qZA()()()}if(2&e){const l=n.$implicit;t.xp6(3),t.Oqu(l.OrderNo),t.xp6(2),t.hij(" ",l.ShipmentLines.TotalNumberOfRecords," Products "),t.xp6(2),t.hij("Carrier: ",l.ScacAndService,""),t.xp6(4),t.Oqu(l.ShipmentNo),t.xp6(3),t.Oqu(l.Status),t.xp6(2),t.Oqu(l.AssignedToUserId),t.xp6(2),t.Oqu(l.ExpectedShipmentDate),t.xp6(5),t.hij(" ",l.BillToAddress.FirstName+" "+l.BillToAddress.LastName," "),t.xp6(2),t.Oqu(l.BillToAddress.DayPhone),t.xp6(2),t.Oqu(l.BillToAddress.EMailID)}}let Tt=(()=>{const n=class{constructor(o,s,i){this.router=o,this.route=s,this.dataSvc=i}onItemClick(o){var s=this;return(0,mt.Z)(function*(){let i=yield s.dataSvc.getShipment(o);s.dataSvc.setShipmentData(i),s.router.navigate(["shipment/view"])})()}};let e=n;return n.\u0275fac=function(s){return new(s||n)(t.Y36(f.F0),t.Y36(f.gz),t.Y36(T.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-records"]],inputs:{data:"data"},decls:1,vars:1,consts:[["class","item",3,"click",4,"ngFor","ngForOf"],[1,"item",3,"click"],[1,"column"],[1,"row-header"],[1,"row"],[1,"row",3,"click"],[1,"hyperlink"]],template:function(s,i){1&s&&t.YNc(0,vt,28,10,"div",0),2&s&&t.Q6J("ngForOf",i.data)},dependencies:[g.sg],styles:[".item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px;border-bottom:1px solid #ccc}.item[_ngcontent-%COMP%]:hover{box-shadow:2px 2px 5px #cdcdcd;border:1px solid #d4d4d4;background-color:#f1f1f1;cursor:pointer}.item[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:baseline}.item[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .row-header[_ngcontent-%COMP%]{font-size:.875rem}.item[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{font-size:.75rem}.hyperlink[_ngcontent-%COMP%]{color:#00f;cursor:pointer}"]}),e})();function St(e,n){1&e&&(t.O4$(),t.kcU(),t.TgZ(0,"div",16),t.O4$(),t.TgZ(1,"svg",17),t._UZ(2,"path",18),t.qZA()())}function _t(e,n){if(1&e){const l=t.EpF();t.TgZ(0,"div",23),t.NdJ("scrolled",function(){t.CHM(l);const s=t.oxw(2);return t.KtG(s.loadMoreData())}),t.qZA()}if(2&e){const l=t.oxw(2);t.Q6J("infiniteScrollDistance",l.scrollDistance)("infiniteScrollUpDistance",l.scrollUpDistance)}}function Zt(e,n){1&e&&(t.TgZ(0,"div",24),t._uU(1,"Loading..."),t.qZA())}function Ct(e,n){if(1&e&&(t.O4$(),t.kcU(),t.TgZ(0,"div",19),t._UZ(1,"app-view-records",20),t.YNc(2,_t,1,2,"div",21),t.YNc(3,Zt,2,0,"div",22),t.qZA()),2&e){const l=t.oxw();t.xp6(1),t.Q6J("data",l.data),t.xp6(1),t.Q6J("ngIf",!l.loading),t.xp6(1),t.Q6J("ngIf",l.loading)}}function At(e,n){if(1&e){const l=t.EpF();t.TgZ(0,"div")(1,"label",26)(2,"input",27),t.NdJ("change",function(){const i=t.CHM(l).$implicit,a=t.oxw(2);return t.KtG(a.toggleItem(i))}),t.qZA(),t._uU(3),t.qZA()()}if(2&e){const l=n.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("checked",o.isItemSelected(l)),t.xp6(1),t.hij(" ",l," ")}}function Ot(e,n){if(1&e&&(t.O4$(),t.kcU(),t.TgZ(0,"div"),t._uU(1,"Status"),t.qZA(),t.YNc(2,At,4,2,"div",25)),2&e){const l=t.oxw();t.xp6(2),t.Q6J("ngForOf",l.items)}}function yt(e,n){if(1&e&&(t.TgZ(0,"div",24)(1,"div",12),t._uU(2,"Ship to"),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.qZA()()),2&e){const l=t.oxw();t.xp6(4),t.Oqu(null==l.data||null==l.data.BillToAddress?null:l.data.BillToAddress.AddressLine1)}}function Dt(e,n){1&e&&(t.TgZ(0,"span"),t._uU(1," hide info "),t.qZA())}function Ut(e,n){1&e&&(t.TgZ(0,"span"),t._uU(1," show info "),t.qZA())}function bt(e,n){if(1&e&&(t.TgZ(0,"div",10)(1,"div",26)(2,"div",27),t._UZ(3,"img",28),t.qZA(),t.TgZ(4,"div",29)(5,"div"),t._uU(6),t.qZA(),t.TgZ(7,"div"),t._uU(8),t.qZA(),t.TgZ(9,"div"),t._uU(10),t.qZA(),t.TgZ(11,"div"),t._uU(12),t.qZA()()()()),2&e){const l=n.$implicit;t.xp6(6),t.Oqu(null==l||null==l.OrderLine||null==l.OrderLine.ItemDetails?null:l.OrderLine.ItemDetails.Description),t.xp6(2),t.hij(" Product ID: ",null==l||null==l.OrderLine||null==l.OrderLine.ItemDetails?null:l.OrderLine.ItemDetails.ItemId," "),t.xp6(2),t.hij("Quantity: ",null==l?null:l.Quantity,""),t.xp6(2),t.hij(" Packed: ",null==l||null==l.OrderLine||null==l.OrderLine.ItemDetails?null:l.OrderLine.ItemDetails.DisplayUnitOfMeasure," ")}}function xt(e,n){if(1&e&&t.YNc(0,bt,13,4,"div",25),2&e){const l=t.oxw();t.Q6J("ngForOf",null==l.data||null==l.data.ShipmentLines?null:l.data.ShipmentLines.ShipmentLine)}}const It=[{path:"result",component:(()=>{const n=class{constructor(o,s,i,a){this.router=o,this.route=s,this.dataSvc=i,this.translate=a,this.data=[],this.page=10,this.loading=!1,this.scrollDistance=2,this.scrollUpDistance=2,this.scrollMaxDistance=2,this.total=0,this.prev=0,this.selectedItems=[],this.dataSource=[],this.copyOfDs=[]}ngOnInit(){this.dataSource=this.dataSvc.getData(),this.copyOfDs=[...this.dataSource],this.total=this.copyOfDs.length,this.items=[...new Set(this.dataSource.map(o=>o.Status))],this.loadMoreData()}loadMoreData(){this.loading||(this.loading=!0,setTimeout(()=>{const o=this.copyOfDs.slice(this.prev,this.page);this.data=[...this.data,...o],this.prev=this.page,this.page+=10,this.loading=!1},1500))}toggleItem(o){const s=this.selectedItems.indexOf(o);-1===s?this.selectedItems.push(o):this.selectedItems.splice(s,1),this.copyOfDs=this.selectedItems.length?this.dataSource.filter(i=>this.selectedItems.includes(i.Status)):[...this.dataSource],this.total=this.copyOfDs.length,this.data=[],this.prev=0,this.page=10,this.loadMoreData()}isItemSelected(o){return this.selectedItems.includes(o)}displaySelected(){return this.selectedItems.join(", ")||"None"}backToSearchPage(){this.router.navigate(["home"])}};let e=n;return n.\u0275fac=function(s){return new(s||n)(t.Y36(f.F0),t.Y36(f.gz),t.Y36(T.D),t.Y36(v.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-result"]],decls:21,vars:8,consts:[[1,"container"],[1,"top-nav"],[1,"back",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 320 512"],["d","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"],[1,"text"],[1,"close",3,"click"],["type","submit",1,"btn","btn-outline-primary","btn-sm"],[1,"content"],[1,"total-result"],["popoverTitle","Refine","triggers","click","placement","left",1,"filter",3,"ngbPopover","autoClose"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512"],["d","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"],["class","applied-filter",4,"ngIf"],["class","data-container",4,"ngIf"],["popoverContent",""],[1,"applied-filter"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["d","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"],[1,"data-container"],[3,"data"],["infiniteScroll","",3,"infiniteScrollDistance","infiniteScrollUpDistance","scrolled",4,"ngIf"],["class","loading",4,"ngIf"],["infiniteScroll","",3,"infiniteScrollDistance","infiniteScrollUpDistance","scrolled"],[1,"loading"],[4,"ngFor","ngForOf"],[1,"dropdown-item"],["type","checkbox",1,"mr-2",3,"checked","change"]],template:function(s,i){if(1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.NdJ("click",function(){return i.backToSearchPage()}),t.O4$(),t.TgZ(3,"svg",3),t._UZ(4,"path",4),t.qZA()(),t.kcU(),t.TgZ(5,"div",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",6),t.NdJ("click",function(){return i.backToSearchPage()}),t.TgZ(9,"button",7),t._uU(10," Close "),t.qZA()()(),t.TgZ(11,"div",8)(12,"div",9),t._uU(13),t.qZA(),t.TgZ(14,"div",10),t.O4$(),t.TgZ(15,"svg",11),t._UZ(16,"path",12),t.qZA(),t.YNc(17,St,3,0,"div",13),t.qZA()(),t.YNc(18,Ct,4,3,"div",14),t.YNc(19,Ot,3,1,"ng-template",null,15,t.W1O),t.qZA()),2&s){const a=t.MAs(20);t.xp6(6),t.hij(" ",t.lcZ(7,6,"shipment.LABEL_Shipmentsearchresults")," "),t.xp6(7),t.hij("",i.total," results"),t.xp6(1),t.Q6J("ngbPopover",a)("autoClose","outside"),t.xp6(3),t.Q6J("ngIf",i.selectedItems.length),t.xp6(1),t.Q6J("ngIf",i.data.length)}},dependencies:[g.sg,g.O5,gt,p.o8,Tt,v.X$],styles:[".top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px;border-bottom:1px solid #ccc}.back[_ngcontent-%COMP%]{width:10px}.content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px}.filter[_ngcontent-%COMP%]{display:flex;width:26px}.applied-filter[_ngcontent-%COMP%]{width:12px}.container[_ngcontent-%COMP%]{padding:5px;background-color:#fff}.item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px;border-bottom:1px solid #ccc}.item[_ngcontent-%COMP%]:hover{box-shadow:2px 2px 5px #cdcdcd;border:1px solid #d4d4d4;background-color:#f1f1f1}.item[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:baseline}.item[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .row-header[_ngcontent-%COMP%]{font-size:.875rem}.item[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{font-size:.75rem}.loading[_ngcontent-%COMP%]{text-align:center;padding:20px;font-size:1.5em;color:#007bff}"]}),e})()},{path:"view",component:(()=>{const n=class{constructor(o,s,i,a){this.router=o,this.dataSvc=s,this._location=i,this.translate=a,this.isCollapsed=!0,this.active=1}ngOnInit(){this.data=this.dataSvc.getShipmentData()}backToPreviousPage(){this._location.back()}backToSearchPage(){this.router.navigate(["home"])}};let e=n;return n.\u0275fac=function(s){return new(s||n)(t.Y36(f.F0),t.Y36(T.D),t.Y36(g.Ye),t.Y36(v.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details"]],decls:87,vars:29,consts:[[1,"container"],[1,"top-nav"],[1,"back",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 320 512"],["d","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"],[1,"text"],[1,"text-row"],[1,"close"],["type","submit",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"content"],[1,"content__row"],[1,"column"],[1,"label"],["class","column mobile-view",4,"ngIf"],[3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],["type","button","aria-controls","collapseExample",1,"btn","btn-link",3,"click"],[4,"ngIf"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"],[1,"column","mobile-view"],["class","content__row",4,"ngFor","ngForOf"],[1,"product"],[1,"image"],["src","https://www.w3schools.com/images/lamp.jpg","alt","testing"],[1,"product__details"]],template:function(s,i){if(1&s){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.NdJ("click",function(){return i.backToPreviousPage()}),t.O4$(),t.TgZ(3,"svg",3),t._UZ(4,"path",4),t.qZA()(),t.kcU(),t.TgZ(5,"div",5)(6,"div",6),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",6),t._uU(10),t.qZA()(),t.TgZ(11,"div",7)(12,"button",8),t.NdJ("click",function(){return i.backToSearchPage()}),t._uU(13," Close "),t.qZA()()(),t.TgZ(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",12),t._uU(18,"Shipment #"),t.qZA(),t.TgZ(19,"div"),t._uU(20),t.qZA()(),t.TgZ(21,"div",11)(22,"div",12),t._uU(23,"Expected Shipment Date"),t.qZA(),t.TgZ(24,"div"),t._uU(25),t.qZA()(),t.YNc(26,yt,5,1,"div",13),t.qZA()(),t.TgZ(27,"div",14,15),t.NdJ("ngbCollapseChange",function(r){return i.isCollapsed=r}),t.TgZ(29,"div",10)(30,"div",11)(31,"div",12),t._uU(32,"Carrier"),t.qZA(),t.TgZ(33,"div"),t._uU(34),t.qZA()(),t.TgZ(35,"div",11)(36,"div",12),t._uU(37,"Customer Info"),t.qZA(),t.TgZ(38,"div"),t._uU(39),t.qZA(),t.TgZ(40,"div"),t._uU(41),t.qZA(),t.TgZ(42,"div"),t._uU(43),t.qZA()()(),t.TgZ(44,"div",10)(45,"div",11)(46,"div",12),t._uU(47,"Assigned To"),t.qZA()(),t.TgZ(48,"div",11),t._uU(49,"testing2"),t.qZA()(),t.TgZ(50,"div",10)(51,"div",11)(52,"div",12),t._uU(53,"Ship to"),t.qZA(),t.TgZ(54,"div"),t._uU(55),t.qZA(),t.TgZ(56,"div"),t._uU(57),t.qZA(),t.TgZ(58,"div"),t._uU(59),t.qZA(),t.TgZ(60,"div"),t._uU(61),t.qZA(),t.TgZ(62,"div"),t._uU(63),t.qZA()(),t.TgZ(64,"div",11)(65,"div",12),t._uU(66,"Bill To"),t.qZA(),t.TgZ(67,"div"),t._uU(68),t.qZA(),t.TgZ(69,"div"),t._uU(70),t.qZA(),t.TgZ(71,"div"),t._uU(72),t.qZA(),t.TgZ(73,"div"),t._uU(74),t.qZA(),t.TgZ(75,"div"),t._uU(76),t.qZA()()()(),t.TgZ(77,"button",16),t.NdJ("click",function(){t.CHM(a);const r=t.MAs(28);return t.KtG(r.toggle())}),t.YNc(78,Dt,2,0,"span",17),t.YNc(79,Ut,2,0,"span",17),t.qZA(),t.TgZ(80,"ul",18,19),t.NdJ("activeIdChange",function(r){return i.active=r}),t.TgZ(82,"li",20)(83,"button",21),t._uU(84),t.qZA(),t.YNc(85,xt,1,1,"ng-template",22),t.qZA()(),t._UZ(86,"div",23),t.qZA()}if(2&s){const a=t.MAs(81);t.xp6(7),t.hij(" ",t.lcZ(8,27,"shipment.LABEL_ShipmentSummary")," "),t.xp6(3),t.Oqu(null==i.data?null:i.data.OrderNo),t.xp6(10),t.Oqu(null==i.data?null:i.data.ShipmentNo),t.xp6(5),t.Oqu(null==i.data?null:i.data.ExpectedShipmentDate),t.xp6(1),t.Q6J("ngIf",i.isCollapsed),t.xp6(1),t.Q6J("ngbCollapse",i.isCollapsed),t.xp6(7),t.Oqu(null==i.data?null:i.data.ScacAndService),t.xp6(5),t.hij(" ",(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.FirstName)+" "+(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.LastName)," "),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.DayPhone),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.EmailID),t.xp6(12),t.hij(" ",(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.FirstName)+" "+(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.LastName)," "),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.AddressLine1),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.AddressLine2),t.xp6(2),t.hij(" ",(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.City)+", "+(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.State)+", "+(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.ZipCode)," "),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.country),t.xp6(5),t.hij(" ",(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.FirstName)+" "+(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.LastName)," "),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.AddressLine1),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.AddressLine2),t.xp6(2),t.hij(" ",(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.City)+", "+(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.State)+", "+(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.ZipCode)," "),t.xp6(2),t.Oqu(null==i.data||null==i.data.ToAddress?null:i.data.ToAddress.country),t.xp6(1),t.uIk("aria-expanded",!i.isCollapsed),t.xp6(1),t.Q6J("ngIf",!i.isCollapsed),t.xp6(1),t.Q6J("ngIf",i.isCollapsed),t.xp6(1),t.Q6J("activeId",i.active),t.xp6(2),t.Q6J("ngbNavItem",1),t.xp6(2),t.hij(" Product ",null==i.data||null==i.data.ShipmentLines?null:i.data.ShipmentLines.TotalNumberOfRecords," "),t.xp6(2),t.Q6J("ngbNavOutlet",a)}},dependencies:[g.sg,g.O5,p._D,p.uN,p.Pz,p.nv,p.Is,p.Fh,p.tO,p.Dy,v.X$],styles:[".container[_ngcontent-%COMP%]{padding:5px;background-color:#fff}.top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px;border-bottom:1px solid #ccc}.back[_ngcontent-%COMP%]{width:10px}.content[_ngcontent-%COMP%]{padding:5px}.content__row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.content__row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.btn-link[_ngcontent-%COMP%]{float:right}.product[_ngcontent-%COMP%]{display:flex;gap:10px}.image[_ngcontent-%COMP%]{width:100px;height:100px}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]}),e})()}];let Pt=(()=>{const n=class{};let e=n;return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.Bz.forChild(It),f.Bz]}),e})(),Mt=(()=>{const n=class{};let e=n;return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,Pt,ht,p.dT,p.Oz,v.aw]}),e})()}}]);