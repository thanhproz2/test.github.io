function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var b=e[t];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(n,b.key,b)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3wwk":function(n,e,t){"use strict";t.r(e);var b,a,o=t("ofXK"),l=t("tyNb"),r=t("fXoL"),c=t("4d7C"),i=t("5Xxd"),d=t("sYmb"),s=[{path:"",component:(b=function(){function n(e,t,b){_classCallCheck(this,n),this.apiUrl=e,this.location=t,this.sharedService=b,this.modal=""}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;mApp.unblockPage(),this.sharedService.infoModal$.subscribe((function(e){""!=e&&($("body").removeClass("modal-open"),$("bs-modal-backdrop").removeClass("modal-backdrop fade in show"),n.modal=e,console.log(n.modal))}))}},{key:"download",value:function(n){window.open(this.apiUrl.download_template.replace("{type}",n))}},{key:"return",value:function(){if(""!=this.modal){var n=JSON.parse(this.modal);n.check=!0,this.sharedService.emitInfoModal(JSON.stringify(n))}this.location.back()}}]),n}(),b.\u0275fac=function(n){return new(n||b)(r.Lb(c.a),r.Lb(o.i),r.Lb(i.a))},b.\u0275cmp=r.Fb({type:b,selectors:[["app-legal-forms"]],decls:97,vars:45,consts:[[1,"container-fluid"],[1,"row","justify-content-md-center"],[1,"col-md-10"],[1,"row"],[1,"col-md-12"],[1,"col-md-6"],[1,"m-portlet","m-portlet--bordered","m-portlet--rounded","m-portlet--last"],[1,"m-portlet__head"],[1,"m-portlet__head-caption"],[1,"m-portlet__head-title"],[1,"m-portlet__head-text"],[1,"m-portlet__body"],[1,"language"],["disabled","",1,"form-control"],["value","en"],[1,"form"],[1,"btn","btn-dark",3,"click"],[1,"pull-right",2,"padding-right","20px"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"fa","fa-undo"]],template:function(n,e){1&n&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Ob(3,"div",3),r.Ob(4,"div",4),r.Ob(5,"div",3),r.Ob(6,"div",5),r.Ob(7,"div",6),r.Ob(8,"div",7),r.Ob(9,"div",8),r.Ob(10,"div",9),r.Ob(11,"h3",10),r.zc(12),r.Zb(13,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(14,"div",11),r.Ob(15,"label",12),r.zc(16),r.Zb(17,"translate"),r.Nb(),r.Ob(18,"select",13),r.Ob(19,"option",14),r.zc(20,"English"),r.Nb(),r.Nb(),r.Ob(21,"div",15),r.Ob(22,"button",16),r.Wb("click",(function(n){return e.download(3)})),r.zc(23),r.Zb(24,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(25,"div",5),r.Ob(26,"div",6),r.Ob(27,"div",7),r.Ob(28,"div",8),r.Ob(29,"div",9),r.Ob(30,"h3",10),r.zc(31),r.Zb(32,"translate"),r.Ob(33,"small"),r.zc(34),r.Zb(35,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(36,"div",11),r.Ob(37,"label",12),r.zc(38),r.Zb(39,"translate"),r.Nb(),r.Ob(40,"select",13),r.Ob(41,"option",14),r.zc(42,"English"),r.Nb(),r.Nb(),r.Ob(43,"div",15),r.Ob(44,"button",16),r.Wb("click",(function(n){return e.download(4)})),r.zc(45),r.Zb(46,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(47,"div",4),r.Ob(48,"div",3),r.Ob(49,"div",5),r.Ob(50,"div",6),r.Ob(51,"div",7),r.Ob(52,"div",8),r.Ob(53,"div",9),r.Ob(54,"h3",10),r.zc(55),r.Zb(56,"translate"),r.Ob(57,"small"),r.zc(58),r.Zb(59,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(60,"div",11),r.Ob(61,"label",12),r.zc(62),r.Zb(63,"translate"),r.Nb(),r.Ob(64,"select",13),r.Ob(65,"option",14),r.zc(66,"English"),r.Nb(),r.Nb(),r.Ob(67,"div",15),r.Ob(68,"button",16),r.Wb("click",(function(n){return e.download(5)})),r.zc(69),r.Zb(70,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(71,"div",5),r.Ob(72,"div",6),r.Ob(73,"div",7),r.Ob(74,"div",8),r.Ob(75,"div",9),r.Ob(76,"h3",10),r.zc(77),r.Zb(78,"translate"),r.Ob(79,"small"),r.zc(80),r.Zb(81,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(82,"div",11),r.Ob(83,"label",12),r.zc(84),r.Zb(85,"translate"),r.Nb(),r.Ob(86,"select",13),r.Ob(87,"option",14),r.zc(88,"English"),r.Nb(),r.Nb(),r.Ob(89,"div",15),r.Ob(90,"button",16),r.Wb("click",(function(n){return e.download(6)})),r.zc(91),r.Zb(92,"translate"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(93,"div",17),r.Ob(94,"button",18),r.Wb("click",(function(n){return e.return()})),r.Mb(95,"i",19),r.zc(96," Return "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&n&&(r.zb(12),r.Bc(" ",r.ac(13,15,"legalForms.guidelines")," "),r.zb(4),r.Ac(r.ac(17,17,"legalForms.language")),r.zb(7),r.Bc(" ",r.ac(24,19,"legalForms.download")," "),r.zb(8),r.Bc(" ",r.ac(32,21,"legalForms.model_release")," "),r.zb(3),r.Ac(r.ac(35,23,"legalForms.model_release_dec")),r.zb(4),r.Ac(r.ac(39,25,"legalForms.language")),r.zb(7),r.Bc(" ",r.ac(46,27,"legalForms.download")," "),r.zb(10),r.Bc(" ",r.ac(56,29,"legalForms.minor_release")," "),r.zb(3),r.Ac(r.ac(59,31,"legalForms.minor_release_dec")),r.zb(4),r.Ac(r.ac(63,33,"legalForms.language")),r.zb(7),r.Bc(" ",r.ac(70,35,"legalForms.download")," "),r.zb(8),r.Bc(" ",r.ac(78,37,"legalForms.property_release")," "),r.zb(3),r.Ac(r.ac(81,39,"legalForms.property_release_dec")),r.zb(4),r.Ac(r.ac(85,41,"legalForms.language")),r.zb(7),r.Bc(" ",r.ac(92,43,"legalForms.download")," "))},pipes:[d.c],styles:[".form[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-family: DINNextW1GRegular, NotoSansRegular, NotoSansThaiRegular, arial,\n      sans-serif;\n  }\n  .form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: rgba(12, 18, 28, 0.6);\n    margin: 0;\n  }\n  .form[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%] {\n    font-size: 13px;\n    color: rgba(12, 18, 28, 0.6);\n  }\n  .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    width: 100%;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n\n  .m-portlet__body[_ngcontent-%COMP%] {\n    padding: 1rem 1rem;\n  }\n\n  .m-portlet[_ngcontent-%COMP%]   .m-portlet__head[_ngcontent-%COMP%] {\n    height: 4rem !important;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px;\n  }"]}),b)}],m=((a=function n(){_classCallCheck(this,n)}).\u0275mod=r.Jb({type:a}),a.\u0275inj=r.Ib({factory:function(n){return new(n||a)},imports:[[l.g.forChild(s)],l.g]}),a);t.d(e,"LegalFormsModule",(function(){return p}));var O,p=((O=function n(){_classCallCheck(this,n)}).\u0275mod=r.Jb({type:O}),O.\u0275inj=r.Ib({factory:function(n){return new(n||O)},imports:[[o.c,m,d.b]]}),O)}}]);