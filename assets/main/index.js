System.register("chunks:///_virtual/main",["./start.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/start.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,r,t,o,i,s,a,c,l;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,a=e.Node,c=e.director,l=e.Component}],execute:function(){var u,d,g,f,p,h,B,b,v,m,P;i._RF.push({},"d7a4aOz9tBF/I8P1gkUIgTz","start",void 0);var S=s.ccclass,L=s.property;e("start",(u=S("start"),d=L(a),g=L(a),f=L(a),p=L(a),u((b=n((B=function(e){function n(){for(var n,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=e.call.apply(e,[this].concat(i))||this,t(n,"ndProgressBar",b,o(n)),t(n,"ndNum",v,o(n)),t(n,"ndStartBg",m,o(n)),t(n,"ndVersion",P,o(n)),n.version="version(1.0.0)",n.isLock=!1,n.isSceneLoaded=!1,n.isBundleLoaded=!1,n.bundleBarRate=50,n}r(n,e);var i=n.prototype;return i.onLoad=function(){this._fitMainBg()},i.start=function(){this.setVersion(),this.loadIndex()},i.myPreloadScene=function(e){void 0===e&&(e=null);var n=this;c.preloadScene("indexScene",this.onSceneProgress.bind(this),(function(){n.isSceneLoaded=!0,e&&e(),console.log("indexScene preloaded...")}))},i.onSceneProgress=function(e,n,r){var t=e/n,o=Math.trunc(100*t);o%10==0&&(o=this.bundleBarRate+o*((100-this.bundleBarRate)/100),this._setProgressBar(o))},i.loadIndex=function(){var e=this;e.isLock?console.log("is Locked..."):(e.isLock=!0,e.ndProgressBar.active=!0,e.mfProgress(),cc.assetManager.loadBundle("resources",(function(n,r){if(console.log("[start]isBundleLoaded.."),n)return e.isLock=!1,console.error(n);e.isBundleLoaded=!0,e._setProgressBar(e.bundleBarRate),e.myPreloadScene((function(){e._loadIndex()}))})))},i._loadIndex=function(){var e=this;c.loadScene("indexScene",(function(){e.isLock=!1,console.log("indexScene is loaded...")}))},i.mfProgress=function(e){void 0===e&&(e=null);var n=this,r=0,t=n.bundleBarRate,o=t/10;n.schedule((function i(){n.isBundleLoaded?n.unschedule(i):(console.log("[start]mfProgress curNum:",r),n._setProgressBar(r),(r+=o)==t&&e&&e())}),.05,10)},i._setProgressBar=function(e){e=Math.round(e),this.ndProgressBar.getComponent("cc.ProgressBar").progress=e/100,this.ndNum.getComponent("cc.Label").string="正在进入"+e+"%"},i._fitMainBg=function(){this.ndStartBg.getComponent("cc.UITransform").setContentSize(cc.view.getVisibleSize())},i.setVersion=function(){var e=this.ndVersion;e&&(e.active=!0,e.getComponent("cc.Label").string=this.version)},n}(l)).prototype,"ndProgressBar",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(B.prototype,"ndNum",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=n(B.prototype,"ndStartBg",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(B.prototype,"ndVersion",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=B))||h));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});