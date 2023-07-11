import{r as t,d as i,h as s,H as e}from"./p-76bbd7fc.js";let r=class{constructor(e){t(this,e),this.event_ButtonClick=i(this,"buttonClick",7),this.variant="primary",this.size="default",this.disabled=!1,this.active=!1,this.inAction=!1,this.styleClasses="",this.Spinner=()=>s("div",{class:"lds-ring"},s("div",null),s("div",null),s("div",null),s("div",null))}watch_ActionStatus(t,i){t!=i&&(this.inAction=t)}handle_ButtonClick(t){t.preventDefault(),this.event_ButtonClick.emit({action:this.action,value:this.value})}componentWillLoad(){this.inAction=this.active,this.generate_StyleClasses()}generate_StyleClasses(){this.styleClasses=`${this.variant} ${this.size}`}render(){return s("button",{class:`${this.styleClasses} ${this.inAction&&"in-action"}`,onClick:t=>this.handle_ButtonClick(t),disabled:this.disabled||this.inAction},s(this.inAction?this.Spinner:"slot",null))}static get watchers(){return{active:["watch_ActionStatus"]}}};r.style="button{background:none;border:0;font-size:0.9em}button:hover{cursor:pointer}button:disabled{opacity:0.3}.primary{font-weight:600;padding:0.5em 1em;background:var(--blue-regular);color:white;border-radius:0.25em}.primary:hover{background:var(--blue-dark)}.primary:active{background:var(--blue-darkest)}.transparent--white{outline:none;border:none;background:none;color:rgba(255, 255, 255, 0.6);padding:0.3em 0.3em 0em 0.3em;border-radius:0.25em;font-size:1.25em}.transparent--white:hover{background:rgba(255, 255, 255, 0.1);color:rgba(255, 255, 255, 0.6)}.wide{display:block;width:100%}.lds-ring{display:inline-block;position:relative;width:20px;height:20px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:16px;height:16px;margin:2px;border:2px solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#fff transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.in-action{padding:0.3em 0.8em}";let n=class{constructor(s){t(this,s),this.event_TextInput=i(this,"textInput",7),this.placeholder="Your text",this.checked=!1,this.styleObject_Textbox={}}componentWillLoad(){"email"!==this.type&&"number"!==this.type&&"password"!==this.type&&"text"!==this.type||this.generate_StyleObject_Textbox()}generate_StyleObject_Textbox(){this.styleObject_Textbox.padding="0.5em",this.styleObject_Textbox.border="1px solid rgba(0, 0, 0, 0.3)",this.styleObject_Textbox.borderRadius="0.25em",this.styleObject_Textbox.fontSize="0.9em",this.styleObject_Textbox.width="100%",this.styleObject_Textbox.boxSizing="border-box"}handle_AlphanumericInput(t){this.event_TextInput.emit({name:this.name,value:t.target.value.trim()})}render(){return"email"===this.type||"number"===this.type||"password"===this.type||"text"===this.type?s("input",{style:this.styleObject_Textbox,type:this.type,placeholder:this.placeholder,onInput:t=>this.handle_AlphanumericInput(t)}):"radio"===this.type?s("l-row",null,s("input",{id:this.name,type:this.type,name:this.name,value:this.value,checked:this.checked}),s("l-spacer",{variant:"horizontal",value:.15}),s("label",{htmlFor:this.name},this.label)):void 0}};n.style="e-input input{padding:1em}";let a=class{constructor(i){t(this,i)}render(){return s(e,null)}};a.style=":host{display:block;width:100%;height:1px;background:var(--grey-lightest)}";export{r as e_button,n as e_input,a as l_seperator}