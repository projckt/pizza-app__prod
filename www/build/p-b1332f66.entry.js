import{r as t,h as i,H as s,d as e}from"./p-76bbd7fc.js";let r=class{constructor(i){t(this,i)}render(){return i(s,null,i("slot",null))}};r.style=":host{display:block;border:1px solid var(--grey-lightest);border-radius:var(--site-border-radius);padding:var(--site-padding-default);background:white}";let a=class{constructor(i){t(this,i),this.event_LinkClick=e(this,"event_LinkClick",7),this.variant="default",this.href="",this.target="",this.theme="default",this.event=!1,this.action="",this.styleClasses=""}componentWillLoad(){this.generateStyles()}generateStyles(){"navLink"===this.variant?this.styleClasses=this.styleClasses+" nav__link":"navLink_Active"===this.variant&&(this.styleClasses=this.styleClasses+" nav__link--active"),"danger"===this.theme&&(this.styleClasses=this.styleClasses+" danger")}handle_LinkClick(t){t.preventDefault(),this.event_LinkClick.emit({action:this.action,value:this.value})}render(){return i("a",this.event?{class:this.styleClasses,href:"#",onClick:t=>this.handle_LinkClick(t)}:{class:this.styleClasses,href:this.href,target:this.target},i("slot",null))}};a.style="a{text-decoration:none;display:inline-block;color:var(--blue-regular)}a:hover{color:var(--blue-dark)}a:active{color:var(--blue-darkest)}.nav__link{padding:0.5em 0 0.5em 0.75em}.nav__link--active{color:var(--blue-darkest);background:var(--blue-lightest);border-radius:var(--site-border-radius);padding:0.5em 1em}.danger{color:var(--red-regular)}.danger:hover{color:var(--red-dark)}.danger:active{color:var(--red-darkest)}";let l=class{constructor(i){t(this,i),this.variant="body",this.theme="default"}componentWillLoad(){this.generate_StyleClasses()}generate_StyleClasses(){this.styleClasses=`${this.variant} ${this.theme}`}render(){return i("display"===this.variant?"h1":"heading"===this.variant?"h2":"subHeading"===this.variant?"h3":"p",{class:this.styleClasses},i("slot",null))}};l.style="h1,h2,h3,p{margin:0;padding:0;line-height:1.6}.display{font-family:'PT Serif', serif}.footnote{font-size:0.8em;color:var(--grey-medium)}.success{color:var(--green-dark)}.danger{color:var(--red-dark)}.light-grey{color:rgba(0, 0, 0, 0.3)}.light{color:rgba(255, 255, 255, 0.6)}";let h=class{constructor(i){t(this,i),this.value=1,this.variant="vertical",this.styleObj={}}componentWillLoad(){"vertical"===this.variant?(this.styleObj.marginTop=`${this.value}em`,this.styleObj.marginBottom=`${this.value}em`):"horizontal"===this.variant&&(this.styleObj.marginLeft=`${this.value}em`,this.styleObj.marginRight=`${this.value}em`)}render(){return i(s,{style:this.styleObj})}};h.style=":host{display:block}";export{r as c_card,a as e_link,l as e_text,h as l_spacer}