/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{481:function(ya,ua,r){r.r(ua);var pa=r(0),na=r(3),ma=r(170);ya=r(105);var ka=r(278);r=r(417);var ja=window;ya=function(ha){function aa(z,n,f){n=ha.call(this,z,n,f)||this;if(z.name&&"xod"!==z.name.toLowerCase().split(".").pop())throw Error("Not an XOD file");if(!ja.FileReader||!ja.File||!ja.Blob)throw Error("File API is not supported in this browser");n.file=z;n.ND=[];n.nL=0;return n}Object(pa.c)(aa,ha);aa.prototype.BO=function(z,
n,f){var a=this,b=new FileReader;b.onloadend=function(h){if(0<a.ND.length){var e=a.ND.shift();e.Mqa.readAsBinaryString(e.file)}else a.nL--;if(b.error){h=b.error;if(h.code===h.ABORT_ERR){Object(na.j)("Request for chunk "+n.start+"-"+n.stop+" was aborted");return}return f(h)}if(h=b.content||h.target.result)return f(!1,h);Object(na.j)("No data was returned from FileReader.")};n&&(z=(z.slice||z.webkitSlice||z.mozSlice||z.sza).call(z,n.start,n.stop));0===a.ND.length&&50>a.nL?(b.readAsBinaryString(z),a.nL++):
a.ND.push({Mqa:b,file:z});return function(){b.abort()}};aa.prototype.kv=function(z){var n=this;n.JD=!0;var f=ma.a;n.BO(n.file,{start:-f,stop:n.file.size},function(a,b){if(a)return Object(na.j)("Error loading end header: %s "+a),z(a);if(b.length!==f)throw Error("Zip end header data is wrong size!");n.Ud=new ka.a(b);var h=n.Ud.SY();n.BO(n.file,h,function(e,w){if(e)return Object(na.j)("Error loading central directory: %s "+e),z(e);if(w.length!==h.stop-h.start)throw Error("Zip central directory data is wrong size!");
n.Ud.K2(w);n.WK=!0;n.JD=!1;return z(!1)})})};aa.prototype.AP=function(z,n){var f=this,a=f.Qh[z];if(f.Ud.KW(z)){var b=f.Ud.Ky(z),h=f.BO(f.file,b,function(e,w){delete f.Qh[z];if(e)return Object(na.j)('Error loading part "%s": %s, '+z+", "+e),n(e);if(w.length!==b.stop-b.start)throw Error("Part data is wrong size!");n(!1,z,w,f.Ud.A_(z))});a.u5=!0;a.cancel=h}else n(Error('File not found: "'+z+'"'),z)};return aa}(ya.a);Object(r.a)(ya);Object(r.b)(ya);ua["default"]=ya}}]);}).call(this || window)
