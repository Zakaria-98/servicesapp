"use strict";(self.webpackChunkservices=self.webpackChunkservices||[]).push([[97],{4097:(R,C,i)=>{i.r(C),i.d(C,{RegisterModule:()=>U});var l=i(9808),s=i(6157),t=i(3075),e=i(5e3),x=i(7908),b=i(7261),y=i(2557),c=i(7423),p=i(9224),d=i(5245),m=i(7322),f=i(7531),h=i(5899);function v(n,a){1&n&&e._UZ(0,"mat-progress-bar",12)}let w=(()=>{class n{constructor(o,r,u,g,j){this.load=o,this._snackBar=r,this.router=u,this.registerservice=g,this.formbuilder=j,this.regObject={email:"",password:""},this.invalidvar=!1,this.form=new t.cw({email:new t.NI("",[t.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),password:new t.NI("",[t.kI.pattern("^(?=.*\\d)(?=.*[A-Z]).{6,}$")])})}openSnackBar(o,r){this._snackBar.open(o,r,{duration:5e3,panelClass:["mat-toolbar","mat-warn"]})}ngOnInit(){localStorage.removeItem("Token"),localStorage.removeItem("rule")}onSubmit(){console.log("zz"),this.registerservice.register(this.form.getRawValue()).subscribe({next:o=>{console.log(o),this.openSnackBar("\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0643\u064a\u062f","\u062a\u0623\u0643\u064a\u062f \u062d\u0633\u0627\u0628\u0643"),setTimeout(()=>{this.router.navigateByUrl("auth/login")},5e3)},error:o=>{this.invalidvar=!0,this.errorMessage=o.message,console.log(o.message)}})}loginbtn(){this.router.navigateByUrl("auth/login")}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(x.b),e.Y36(b.ux),e.Y36(s.F0),e.Y36(y.a),e.Y36(t.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],decls:23,vars:6,consts:[["mode","indeterminate",4,"ngIf"],[1,"flex"],[1,"example-card"],[1,"example-form",3,"formGroup","ngSubmit"],[1,"example-full-width"],["matInput","","placeholder","\u0627\u0644\u0628\u0631\u064a\u0640\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u0640\u064a","type","email","name","email","formControlName","email","minlength","7","required",""],["matSuffix",""],["matInput","","placeholder","\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0645\u0646 \u0633\u062a\u0629 \u062d\u0631\u0648\u0641 \u0627\u062d\u062f\u0647\u0645\u0627 \u0631\u0642\u0645 \u0648\u0627\u062d\u062f\u0647\u0645\u0627 \u062d\u0631\u0641 \u0643\u0628\u064a\u0631","name","password","formControlName","password","minlength","4","type","password","required",""],[2,"color","red"],["type","submit","mat-raised-button","","color","primary",1,"loginbtn",3,"disabled"],[1,"reg"],["mat-button","","color","primary",3,"click"],["mode","indeterminate"]],template:function(o,r){1&o&&(e.YNc(0,v,1,0,"mat-progress-bar",0),e.ALo(1,"async"),e.TgZ(2,"div",1)(3,"mat-card",2)(4,"form",3),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(5,"mat-form-field",4),e._UZ(6,"input",5),e.TgZ(7,"mat-icon",6),e._uU(8,"email"),e.qZA()(),e.TgZ(9,"mat-form-field",4),e._UZ(10,"input",7),e.TgZ(11,"mat-icon",6),e._uU(12,"password"),e.qZA()(),e.TgZ(13,"h1",8),e._uU(14),e.qZA(),e.TgZ(15,"button",9),e._uU(16,"\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"),e.qZA()(),e.TgZ(17,"div",10)(18,"p"),e._uU(19,"\u0644\u062f\u064a\u0643 \u062d\u0633\u0627\u0628 \u0645\u0633\u0628\u0642\u0627"),e.qZA(),e.TgZ(20,"button",11),e.NdJ("click",function(){return r.loginbtn()}),e._uU(21,"\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"),e.qZA()()()(),e._UZ(22,"router-outlet")),2&o&&(e.Q6J("ngIf",e.lcZ(1,4,r.load.isLoading)),e.xp6(4),e.Q6J("formGroup",r.form),e.xp6(10),e.hij(" ",r.errorMessage," "),e.xp6(1),e.Q6J("disabled",r.form.invalid))},dependencies:[l.O5,s.lC,c.lW,p.a8,d.Hw,m.KE,m.R9,f.Nt,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.wO,t.sg,t.u,h.pW,l.Ov],styles:[".flex[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.example-card[_ngcontent-%COMP%]{width:600px;height:800px}.example-card[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;height:-moz-fit-content;height:fit-content}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.example-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.example-full-width[_ngcontent-%COMP%]{width:80%;margin-bottom:15px}.loginbtn[_ngcontent-%COMP%]{width:80%}.reg[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:center;align-items:center;margin-top:50px}.reg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:large;margin-top:10px}.regbtn[_ngcontent-%COMP%]{border:solid 1px #3f51b5}.nameflex[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}input[_ngcontent-%COMP%]{direction:rtl}"]}),n})();var M=i(4967);function O(n,a){1&n&&e._UZ(0,"mat-progress-bar",9)}function P(n,a){1&n&&e._UZ(0,"mat-progress-bar",9)}const A=[{path:"",component:w},{path:"forget",component:(()=>{class n{constructor(o,r){this.load=o,this.login=r,this.form=new t.cw({email:new t.NI("",[t.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])})}ngOnInit(){}onSubmit(){this.login.forgetpassword(this.email).subscribe({next:o=>{console.log(o)},error:o=>{}})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(x.b),e.Y36(M.r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-secondregister"]],decls:13,vars:5,consts:[["mode","indeterminate",4,"ngIf"],[1,"flex"],[1,"example-card"],[1,"example-form",3,"ngSubmit"],["LogInForm","ngForm"],[1,"example-full-width"],["matInput","","placeholder","\u0627\u0644\u0628\u0631\u064a\u0640\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u0640\u064a","type","email","name","email","minlength","7","required","",3,"ngModel","ngModelChange"],["matSuffix",""],["type","submit","mat-raised-button","","color","primary",1,"loginbtn",3,"disabled"],["mode","indeterminate"]],template:function(o,r){1&o&&(e.YNc(0,O,1,0,"mat-progress-bar",0),e.ALo(1,"async"),e.TgZ(2,"div",1)(3,"mat-card",2)(4,"form",3,4),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(6,"mat-form-field",5)(7,"input",6),e.NdJ("ngModelChange",function(g){return r.email=g}),e.qZA(),e.TgZ(8,"mat-icon",7),e._uU(9,"email"),e.qZA()(),e.TgZ(10,"button",8),e._uU(11,"\u0627\u0631\u0633\u0627\u0644 "),e.qZA()()()(),e._UZ(12,"router-outlet")),2&o&&(e.Q6J("ngIf",e.lcZ(1,3,r.load.isLoading)),e.xp6(7),e.Q6J("ngModel",r.email),e.xp6(3),e.Q6J("disabled",r.form.invalid))},dependencies:[l.O5,s.lC,c.lW,p.a8,d.Hw,m.KE,m.R9,f.Nt,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.wO,t.On,t.F,h.pW,l.Ov],styles:["@font-face{font-family:Alexandria;src:url(Alexandria-VariableFont_wght.941f8f3b0b6a4e3b.ttf)}@font-face{font-family:cairo;src:url(Cairo-VariableFont_slnt,wght.2394a57ce0b3b0c1.ttf)}.flex[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.example-card[_ngcontent-%COMP%]{width:600px;height:800px}.example-card[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;height:-moz-fit-content;height:fit-content}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.example-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.example-full-width[_ngcontent-%COMP%]{width:80%;margin-bottom:15px}.loginbtn[_ngcontent-%COMP%]{width:80%;font-family:cairo}.reg[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:50px}.reg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:large}.regbtn[_ngcontent-%COMP%]{border:solid 1px #3f51b5;font-family:cairo}.invalid[_ngcontent-%COMP%]{border-color:#f81515;background:#ffcdcd}p[_ngcontent-%COMP%]{font-size:25px;font-family:cairo}h1[_ngcontent-%COMP%]{font-size:25px;font-family:alexandria}"]}),n})()},{path:"change/:id",component:(()=>{class n{constructor(o,r,u,g){this.route=o,this.router=r,this.load=u,this.login=g,this.form=new t.cw({password:new t.NI("",[t.kI.pattern("^(?=.*\\d)(?=.*[A-Z]).{6,}$")])})}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id")}onSubmit(){this.login.changepassword(this.id,this.password).subscribe({next:o=>{console.log(o),this.router.navigateByUrl("auth/login")},error:o=>{}})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(s.gz),e.Y36(s.F0),e.Y36(x.b),e.Y36(M.r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-changepassword"]],decls:13,vars:5,consts:[["mode","indeterminate",4,"ngIf"],[1,"flex"],[1,"example-card"],[1,"example-form",3,"ngSubmit"],["LogInForm","ngForm"],[1,"example-full-width"],["matInput","","placeholder","\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0645\u0646 \u0633\u062a\u0629 \u062d\u0631\u0648\u0641 \u0627\u062d\u062f\u0647\u0645\u0627 \u0631\u0642\u0645 \u0648\u0627\u062d\u062f\u0647\u0645\u0627 \u062d\u0631\u0641 \u0643\u0628\u064a\u0631","name","password","minlength","4","type","password","required","",3,"ngModel","ngModelChange"],["matSuffix",""],["type","submit","mat-raised-button","","color","primary",1,"loginbtn",3,"disabled"],["mode","indeterminate"]],template:function(o,r){1&o&&(e.YNc(0,P,1,0,"mat-progress-bar",0),e.ALo(1,"async"),e.TgZ(2,"div",1)(3,"mat-card",2)(4,"form",3,4),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(6,"mat-form-field",5)(7,"input",6),e.NdJ("ngModelChange",function(g){return r.password=g}),e.qZA(),e.TgZ(8,"mat-icon",7),e._uU(9,"password"),e.qZA()(),e.TgZ(10,"button",8),e._uU(11,"\u062a\u0623\u0643\u064a\u062f"),e.qZA()()()(),e._UZ(12,"router-outlet")),2&o&&(e.Q6J("ngIf",e.lcZ(1,3,r.load.isLoading)),e.xp6(7),e.Q6J("ngModel",r.password),e.xp6(3),e.Q6J("disabled",r.form.invalid))},dependencies:[l.O5,s.lC,c.lW,p.a8,d.Hw,m.KE,m.R9,f.Nt,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.wO,t.On,t.F,h.pW,l.Ov],styles:[".flex[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.example-card[_ngcontent-%COMP%]{width:600px;height:800px}.example-card[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;height:-moz-fit-content;height:fit-content}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.example-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.example-full-width[_ngcontent-%COMP%]{width:80%;margin-bottom:15px}.loginbtn[_ngcontent-%COMP%]{width:80%}.reg[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:center;align-items:center;margin-top:50px}.reg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:large;margin-top:10px}.regbtn[_ngcontent-%COMP%]{border:solid 1px #3f51b5}.nameflex[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}input[_ngcontent-%COMP%]{direction:rtl}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(A),s.Bz]}),n})();var S=i(9832),F=i(2081),J=i(4594),_=i(2181),I=i(9062),z=i(9529);let U=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,T,c.ot,S.vV,p.QW,d.Ps,F.T5,b.ZX,J.g0,m.lN,f.c,_.Tx,I.TU,t.u5,z.bB,t.UX,h.Cv]}),n})()}}]);