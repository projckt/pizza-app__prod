import{r as i,h as l,H as t}from"./p-76bbd7fc.js";let n=class{constructor(t){i(this,t),this.isFetched_Toppings=!1,this.isFetched_Pizza=!1,this.isFetched_Countries=!1,this.isFetched_PizzaOptions=!1,this.view_Sidebar="toppings",this.isFetched_PizzaDetails=!1,this.activePizza="American",this.toppings=[],this.countries=[],this.pizzas=[],this.pizzaOptions=[],this.pizzaToppings=[],this.url="localhost"===document.domain?"http://localhost:2554":"https://pizza-api.audit4sg.org",this.isFirstLoad=!0,this.View_Topping_Sidebar=()=>l("div",null,l("p",{class:"label"},"TOPPINGS SPICINESS"),l("div",{class:"radio-container"},l("input",{id:"mild",name:"spiciness",type:"radio",value:"Mild",onChange:i=>this.handleSpicinesChange(i)}),l("label",{htmlFor:"mild"},"🌿  Mild")),l("div",{class:"radio-container"},l("input",{id:"medium",name:"spiciness",type:"radio",value:"Medium",onChange:i=>this.handleSpicinesChange(i)}),l("label",{htmlFor:"mild"},"🌶️  Medium")),l("div",{class:"radio-container"},l("input",{id:"hot",name:"spiciness",type:"radio",value:"Hot",onChange:i=>this.handleSpicinesChange(i)}),l("label",{htmlFor:"hot"},"🔥  Hot")),l("br",null),l("div",{class:"seperator"}),l("br",null),l("p",{class:"label"},"TOPPINGS"),this.isFetched_Toppings?l("div",{class:"pizza-toppings-container"},this.toppings.map((i=>l("div",{class:"radio-container"},l("input",{id:i,name:"toppings",type:"radio",value:i,onChange:i=>this.handleToppingsChange(i)}),l("label",{htmlFor:i},i))))):l("div",null,l("p-loader",null),l("br",null),l("p-loader",null),l("br",null),l("p-loader",null),l("br",null),l("p-loader",null))),this.View_Pizza_Sidebar=()=>l("div",null,l("p",{class:"label"},"PIZZAS"),this.isFetched_PizzaOptions?l("div",{class:"pizza-toppings-container"},this.pizzaOptions.map(((i,t)=>l("div",{class:"radio-container"},l("input",{id:i,name:"pizzaOptions",type:"radio",value:i,onChange:i=>this.handlePizzaChange(i),checked:0===t&&!0}),l("label",{htmlFor:i},i))))):l("div",null,l("p-loader",null),l("br",null),l("p-loader",null),l("br",null),l("p-loader",null),l("br",null),l("p-loader",null))),this.View_Country_Sidebar=()=>l("div",null,l("p",{class:"label"},"COUNTRIES"),this.isFetched_Countries?l("div",{class:"pizza-toppings-container"},this.countries.map((i=>l("div",{class:"radio-container"},l("input",{id:i,name:"countries",type:"radio",value:i,onChange:i=>this.handleCountryChange(i)}),l("label",{htmlFor:i},i," ","America"===i&&"🇺🇸","England"===i&&"🇬🇧","France"===i&&"🇫🇷","Germany"===i&&"🇩🇪","Italy"===i&&"🇮🇹")))),l("br",null),l("div",{class:"warning-container"},l("p",null,l("strong",null,"⚠️ Warning"),l("br",null),l("br",null),l("span",null,"1) Not all pizzas/toppings have their ",l("u",null,"countryOfOrigin")," defined in this ontology"),l("br",null),l("br",null),l("span",null," 2) Not all countries are assigned to pizzas"),l("br",null),l("br",null),l("span",null," ","3) This filter will yield results only for ",l("u",null,"America")," and ",l("u",null,"Italy"))))):l("div",null,l("p-loader",null),l("br",null),l("p-loader",null),l("br",null),l("p-loader",null),l("br",null),l("p-loader",null))),this.View_Pizza_Details=()=>l("div",null,l("p",null,l("strong",null,this.activePizza)),l("p",null,"Toppings:"),l("ul",null,this.isFetched_PizzaDetails?this.pizzaToppings.map((i=>l("li",null,i.topping," ","Mild"===i.spice&&"🌿","Medium"===i.spice&&"🌶️","Hot"===i.spice&&"🔥"))):l("div",{class:"pizza-details-loader"},l("p-loader",null),l("br",null),l("p-loader",null),l("br",null),l("p-loader",null))))}componentDidLoad(){this.getToppings()}async getToppings(){this.isFetched_Toppings=!1;let i=`${this.url}/toppings`;await fetch(i,{method:"GET",headers:{"Content-Type":"application/json"}}).then((i=>i.json())).then((i=>{this.toppings=i.payload})).catch((i=>{console.log(i)})),this.isFetched_Toppings=!0}async getCountries(){this.isFetched_Countries=!1;let i=`${this.url}/countries`;await fetch(i,{method:"GET",headers:{"Content-Type":"application/json"}}).then((i=>i.json())).then((i=>{this.countries=i.payload})).catch((i=>{console.log(i)})),this.isFetched_Countries=!0}async getPizzaOptions(){this.isFetched_PizzaOptions=!1;let i=`${this.url}/pizzas`;await fetch(i,{method:"GET",headers:{"Content-Type":"application/json"}}).then((i=>i.json())).then((i=>{this.pizzaOptions=i.payload,this.initPizzaToppings()})).catch((i=>{console.log(i)})),this.isFetched_PizzaOptions=!0}async handleSpicinesChange(i){this.isFirstLoad=!0,this.isFetched_Toppings=!1,this.isFetched_Pizza=!1;let l=`${this.url}/toppings-by-spiciness`,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i.target.value})};await fetch(l,t).then((i=>i.json())).then((i=>{this.toppings=i.payload})).catch((i=>{console.log(i)})),this.isFetched_Toppings=!0}async handleToppingsChange(i){this.isFirstLoad=!1,this.isFetched_Pizza=!1;let l=`${this.url}/pizzas-by-topping`,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i.target.value})};await fetch(l,t).then((i=>i.json())).then((i=>{this.pizzas=i.payload})).catch((i=>{console.log(i)})),this.isFetched_Pizza=!0}async handleCountryChange(i){this.isFirstLoad=!1,this.isFetched_Pizza=!1;let l=`${this.url}/pizzas-by-country`,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i.target.value})};await fetch(l,t).then((i=>i.json())).then((i=>{this.pizzas=i.payload})).catch((i=>{console.log(i)})),this.isFetched_Pizza=!0}async handlePizzaChange(i){this.activePizza=i.target.value,this.isFetched_PizzaDetails=!1;let l=`${this.url}/toppings-by-pizza`,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.activePizza})};await fetch(l,t).then((i=>i.json())).then((i=>{this.pizzaToppings=i.payload})).catch((i=>{console.log(i)})),this.isFetched_PizzaDetails=!0}async initPizzaToppings(){this.isFetched_PizzaDetails=!1;let i=`${this.url}/toppings-by-pizza`,l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.activePizza})};await fetch(i,l).then((i=>i.json())).then((i=>{this.pizzaToppings=i.payload})).catch((i=>{console.log(i)})),this.isFetched_PizzaDetails=!0}handleExplorationChange(i){this.view_Sidebar=i.target.value,"toppings"===this.view_Sidebar?this.getToppings():"pizzas"===this.view_Sidebar?this.getPizzaOptions():"countries"===this.view_Sidebar&&this.getCountries()}render(){return l(t,null,l("h1",null),l("p",null,l("strong",null,"EXPLORE THE PIZZA ONTOLOGY"),l("br",null)," Ontology: ",l("a",{href:"https://protege.stanford.edu/ontologies/pizza/pizza.owl"},"https://protege.stanford.edu/ontologies/pizza/pizza.owl")),l("hr",null),l("main",null,l("div",{class:"sidebar"},l("p",{class:"label"},"EXPLORE BY"),l("div",{class:"radio-container"},l("input",{id:"toppings",name:"exploration",type:"radio",value:"toppings",onChange:i=>this.handleExplorationChange(i),checked:!0}),l("label",{htmlFor:"toppings"},"🥗  Topping")),l("div",{class:"radio-container"},l("input",{id:"pizzas",name:"exploration",type:"radio",value:"pizzas",onChange:i=>this.handleExplorationChange(i)}),l("label",{htmlFor:"pizzas"},"🍕  Pizza")),l("div",{class:"radio-container"},l("input",{id:"countries",name:"exploration",type:"radio",value:"countries",onChange:i=>this.handleExplorationChange(i)}),l("label",{htmlFor:"countries"},"🌎  Country")),l("br",null),l("div",{class:"seperator"}),l("br",null),"toppings"===this.view_Sidebar&&l(this.View_Topping_Sidebar,null),"pizzas"===this.view_Sidebar&&l(this.View_Pizza_Sidebar,null),"countries"===this.view_Sidebar&&l(this.View_Country_Sidebar,null)),l("div",{class:"content"},"toppings"===this.view_Sidebar||"countries"===this.view_Sidebar?this.isFetched_Pizza?this.pizzas.length>0?this.pizzas.map((i=>l("div",{class:"pizza-container"},l("div",null,l("span",{class:"pizza-emoji"},"🍕"),l("br",null),l("span",null,i))))):l("p",null,"There are no pizzas"):this.isFirstLoad?l("p",null,"toppings"===this.view_Sidebar||"countries"===this.view_Sidebar?l("span",null," ","Kindly choose a ","toppings"===this.view_Sidebar&&"topping"," ","countries"===this.view_Sidebar&&"country"," to show pizzas"):l(this.View_Pizza_Details,null)):l("div",{class:"pizza-skel-container"},l("p-loader",{variant:"card"}),l("p-loader",{variant:"card"}),l("p-loader",{variant:"card"}),l("p-loader",{variant:"card"})):l(this.View_Pizza_Details,null))))}};n.style=":host{display:block}.sidebar{width:25%;border-right:1px solid rgba(0, 0, 0, 0.1)}main{display:flex;margin:2em 0 4em 0;align-items:flex-start;align-content:flex-start}.label{font-size:0.8em;font-weight:700;color:rgba(0, 0, 0, 0.5)}label{margin-left:0.5em}.seperator{border-bottom:1px solid rgba(0, 0, 0, 0.1);width:100%}.content{padding:0 2em;width:75%;display:flex;flex-wrap:wrap;row-gap:2em;column-gap:2em;row-gap:2em;column-gap:2em}.pizza-container{display:flex;align-items:center;justify-content:space-around;height:150px;width:150px;text-align:center;border-radius:0.25em;border:1px solid rgba(0, 0, 0, 0.1);word-wrap:break-word}.radio-container{color:#121212;font-size:1.1em;font-weight:400}.pizza-emoji{font-size:3em}.pizza-toppings-container{overflow:scroll}.pizza-skel-container{display:flex;flex-wrap:wrap;row-gap:2em;column-gap:2em;row-gap:2em;column-gap:2em;width:100%}.warning-container{display:block;background:#fff7dc;padding:0.25em 1em;border-radius:1em 0 0 1em;border:1px solid #ffeaa7;border-right:0}.pizza-details-loader{width:200px}";export{n as v_home}