import './polyfills.server.mjs';
import{E as v,a as f,b as u,c as h,d as g,e as x,f as r,g as o,h as c,i as m,j as i,k as C,p as M,s as _,u as O,v as b,y as P}from"./chunk-T6P4AUWP.mjs";var y=(()=>{let n=class n{constructor(e,t){this.element=e,this.renderer=t}HoverAction(){this.renderer.setStyle(this.element.nativeElement,"background-color","hsl(154, 59%, 65%)"),this.renderer.setStyle(this.element.nativeElement,"transition","1s")}MouseOff(){this.renderer.setStyle(this.element.nativeElement,"background-color","hsl(154, 59%, 50%)"),this.renderer.setStyle(this.element.nativeElement,"transition","1s")}};n.\u0275fac=function(t){return new(t||n)(g(h),g(x))},n.\u0275dir=u({type:n,selectors:[["","appSubmitHover",""]],hostBindings:function(t,a){t&1&&m("mouseenter",function(){return a.HoverAction()})("mouseleave",function(){return a.MouseOff()})},standalone:!0});let l=n;return l})();var S=(()=>{let n=class n{DisplayError(e){e.classList.add("error-display"),e.classList.add("placeholder-error"),e.placeholder="";let t=e.nextElementSibling;t.textContent===""&&(t.textContent="This field is required")}DisplayEmailError(e){e.classList.add("error-display"),e.classList.add("placeholder-error"),e.placeholder="email@example.com";let t=e?.nextElementSibling;t.textContent="please enter a valid email address"}CheckFormat(e){return e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!1}ValidateForm(e){let t=e.querySelector("#fname"),a=e.querySelector("#lname"),s=e.querySelector("#email"),d=e.querySelector("#pass"),p=!1;return e.querySelectorAll(".error").forEach(D=>D.textContent=""),t?.value?.trim()===""?(console.log(t),this.DisplayError(t),p=!0):t.classList.remove("red-border"),a?.value?.trim()===""?(this.DisplayError(a),p=!0):a.classList.remove("red-border"),s?.value?.trim()===""&&(this.DisplayError(s),p=!0),d?.value?.trim()===""?(this.DisplayError(d),p=!0):d.classList.remove("red-border"),this.CheckFormat(s?.value)?s.classList.remove("red-border"):(this.DisplayEmailError(s),p=!0),p==!1}SubmitForm(e){e.preventDefault();let t=e.target;this.ValidateForm(t)?(alert("form submitted!"),t.submit()):console.log("form raised error/s")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["app-root"]],standalone:!0,features:[C],decls:35,vars:0,consts:[[1,"left"],[1,"right"],[1,"notification"],["method","post",3,"submit"],[1,"input-group"],["type","text","placeholder","First Name","id","fname"],[1,"error"],["type","text","placeholder","Last Name","id","lname"],["type","text","placeholder","Email Address","id","email"],["type","text","placeholder","Password","id","pass"],["appSubmitHover","","type","submit"],[1,"tos"]],template:function(t,a){t&1&&(r(0,"main")(1,"div",0)(2,"h1"),i(3,"Learn to code by watching others"),o(),r(4,"p"),i(5,"See how experienced developers solve problems in real-time."),c(6,"br"),i(7," Watching scripted tutorials is great, but understanding how"),c(8,"br"),i(9," developers think is invaluable. "),o()(),r(10,"div",1)(11,"div",2)(12,"p")(13,"span"),i(14,"Try it free 7 days"),o(),i(15," then $20/mo. thereafter"),o()(),r(16,"form",3),m("submit",function(d){return a.SubmitForm(d)}),r(17,"div",4),c(18,"input",5)(19,"span",6),o(),r(20,"div",4),c(21,"input",7)(22,"span",6),o(),r(23,"div",4),c(24,"input",8)(25,"span",6),o(),r(26,"div",4),c(27,"input",9)(28,"span",6),o(),r(29,"button",10),i(30,"CLAIM YOUR FREE TRIAL"),o(),r(31,"p"),i(32,"By clicking the button, you are agreeing to our "),r(33,"span",11),i(34,"Terms and Services"),o()()()()())},dependencies:[y],styles:[".body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;padding:60px 30px;background-color:#ff000080}.left[_ngcontent-%COMP%]{width:30%;margin-right:50px;color:#fff}.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:bolder;margin-bottom:30px;font-size:48px}.right[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{background-color:#6055a5;color:#fff;text-align:center;padding:10px;border-radius:5px;margin-bottom:15px;box-shadow:6px 6px 4px #46464680}.right[_ngcontent-%COMP%]{width:400px}.right[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{border-radius:5px;margin-top:10px;padding:25px;background-color:#fff}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px;width:100%;border-radius:5px;border:1px solid rgb(60,59,59,.5);display:block;caret-color:#6055a5}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border:1px solid hsl(248,32%,49%)}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::selection{background-color:#6055a5}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;font-weight:500;background-color:#38cc8c;border:none;border-radius:5px;text-align:center;padding:15px;width:100%;cursor:pointer;margin-bottom:10px}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .tos[_ngcontent-%COMP%]{color:#ff7a7a;cursor:pointer}.input-group[_ngcontent-%COMP%]{text-align:right;margin-bottom:8px}.error[_ngcontent-%COMP%]{display:inline-block;font-size:12px;color:#ff7a7a}.error-display[_ngcontent-%COMP%]{background:url(/images/icon-error.svg);background-repeat:no-repeat;background-position:calc(100% - 10px) center;border:1px solid red!important}.placeholder-error[_ngcontent-%COMP%]::placeholder{color:#ff7a7a;font-weight:500}@media only screen and (max-width: 1000px){main[_ngcontent-%COMP%]{justify-content:space-around}}@media only screen and (max-width: 900px){.right[_ngcontent-%COMP%]{width:300px}.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px}.left[_ngcontent-%COMP%]{width:50%}}@media only screen and (max-width: 600px){.right[_ngcontent-%COMP%]{width:50%}.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}}@media only screen and (max-width : 555px){main[_ngcontent-%COMP%]{flex-direction:column;align-items:center;padding:50px}.right[_ngcontent-%COMP%]{width:100%}.left[_ngcontent-%COMP%]{width:100%;text-align:center;margin-bottom:20px;margin-right:0}}@media only screen and (max-width : 324px){.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{font-size:14px}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;font-size:12px}.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:80%}}"]});let l=n;return l})();var E=[];var w={providers:[M({eventCoalescing:!0}),v(E),b()]};var L={providers:[P()]},k=_(w,L);var F=()=>O(S,k),K=F;export{K as a};