(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},31:function(e,t,a){e.exports=a(45)},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(10),i=a.n(s),r=a(11),c=a(12),o=a(19),u=a(13),m=a(18),d=(a(23),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={days:0,hours:0,minutes:0,seconds:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.getTimeUntil(e.props.deadline)},1e3)}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date),a=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),l=Math.floor(t/36e5%24),s=Math.floor(t/864e5);this.setState({days:s,seconds:a,hours:l,minutes:n})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Clock-days"},this.state.days," ",1===this.state.days?"day":"days"),l.a.createElement("div",{className:"Clock-hours"},this.state.hours,"    ",1===this.state.hours?"hour":"hours"),l.a.createElement("div",{className:"Clock-minutes"},this.state.minutes," ",1===this.state.minutes?"minute":"minutes"),l.a.createElement("div",{className:"Clock-seconds"},this.state.seconds," ",1===this.state.seconds?"second":"seconds"))}}]),t}(n.Component)),h=a(48),p=a(49),E=a(29),v=a(50),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={deadline:"July 12, 2019",eventToChange:"Countdown to Senior Checkpoint",newDeadline:"",anEvent:"",brackets:"< >"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"changeDeadline",value:function(){this.setState({eventToChange:this.state.anEvent,deadline:this.state.newDeadline})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"relative"},l.a.createElement("div",{id:"top"}),l.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",className:"sticky"},l.a.createElement(h.a.Brand,{href:"#home",className:"padding-left"},l.a.createElement("a",{href:"#top"},this.state.brackets)),l.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end"},l.a.createElement(h.a.Text,{className:"padding-right"},l.a.createElement("a",{className:"undo",href:"#helpful"},"Helpful Resources")),l.a.createElement(h.a.Text,{className:"padding-right"},l.a.createElement("a",{href:"#motivation"},"You got this!")))),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-title"},this.state.eventToChange),l.a.createElement("div",{className:"App-subtitle"},this.state.deadline),l.a.createElement("div",null,l.a.createElement(d,{deadline:this.state.deadline}),l.a.createElement("div",{className:"App-smalltitle"},"Don't freak out. Change the countdown to something you're looking forward to like a beach trip!")),l.a.createElement("div",null,l.a.createElement(p.a,{inline:!0,className:"center"},l.a.createElement(E.a,{placeholder:"new event",onChange:function(t){return e.setState({anEvent:t.target.value})}}),l.a.createElement(E.a,{placeholder:"new date (plz format)",onChange:function(t){return e.setState({newDeadline:t.target.value})}}),l.a.createElement(v.a,{onClick:function(){return e.changeDeadline()}},"Submit")))),l.a.createElement("div",null,l.a.createElement("h1",{className:"center-title"},"Helpful Resources:"),l.a.createElement("div",{id:"helpful"}),l.a.createElement("div",{className:"width"},l.a.createElement("h3",null,"Express"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/watch?v=pKd0Rpw7O48"},"Youtube vid"),": Express.js Tutorial: Build RESTful APIs with Node and Express | Mosh (Mosh is the best!)")),l.a.createElement("h3",{className:"spaceAbove"},"Sequelize"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/watch?v=isk0JR0t_VQ"},"Youtube vid"),": Express-Sequelize review part 4 - Sequelize Associations (kinda low audio quality)")),l.a.createElement("h3",{className:"spaceAbove"},"React"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://scrimba.com/g/glearnreact"},"React tutorial")," (code and watch along environment)"))),l.a.createElement("h1",{className:"center-title"},"You got this!"),l.a.createElement("div",{id:"motivation"}),l.a.createElement("img",{src:"https://media.giphy.com/media/xT9IgEYXCNqPZnqMuY/giphy.gif",alt:"You got this"})),l.a.createElement("div",{className:"footer"},"Created with help from ",l.a.createElement("a",{target:"_blank",href:"https://www.skillshare.com/classes/ReactJS-and-Redux-Build-4-Web-Apps-14/1262069474"},"skillshare vid")," by David Katz, Software Engineer - Coding Instructor"))}}]),t}(n.Component);i.a.render(l.a.createElement(f,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.538cc1eb.chunk.js.map