(this.webpackJsonpnotemaking=this.webpackJsonpnotemaking||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o);a(23),a(24),a(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(5),s=a(4),i=a(10),m=a(2),u={notes:localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;console.log("pre",e,t);var a=Object(m.a)({},e),n=a.notes;if("ADD_NOTES"===t.type){var l=n.findIndex((function(e){return e.id===t.obj.id}));return-1===l&&(a.notes=[].concat(Object(i.a)(a.notes),[t.obj])),localStorage.setItem("notes",JSON.stringify(a.notes)),Object(m.a)(Object(m.a)({},a),{},{notes:a.notes})}if("UPDATE_NOTES"===t.type){var o=n.findIndex((function(e){return e.id===t.obj.id}));return-1===o||(a.notes.splice(o,1),a.notes=[].concat(Object(i.a)(a.notes),[t.obj])),localStorage.setItem("notes",JSON.stringify(a.notes)),Object(m.a)(Object(m.a)({},a),{},{notes:a.notes})}return"DELETE_NOTE"===t.type?(a.notes=n.filter((function(e){return e.id!==t.obj.id})),localStorage.setItem("notes",JSON.stringify(a.notes)),Object(m.a)(Object(m.a)({},a),{},{notes:a.notes})):e},h=a(13),E=a(14),f=a(17),b=a(16),g=a(15),N=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={date:localStorage.getItem("date")?new Date(localStorage.getItem("date")):"",note:{title:"",content:""},months:["January","February","March","April","June","July","August","September","October","November","December"],selectedNote:{},showEdit:0},e.onDateChange=function(t){localStorage.setItem("date",t),e.setState({date:t})},e.handleChange=function(t){var a=t.currentTarget,n=e.state.note;n[a.name]=a.value,e.setState({note:n})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.date,l=a.note,o=a.months,r=e.props.notes,c=n.getDate()+" "+o[n.getMonth()+1]+","+n.getFullYear(),s={id:r.length+1,date:c,title:l.title,content:l.content};e.props.addToNotes(s);e.setState({note:{title:"",content:""}})},e.handleChangeSel=function(t){t.preventDefault();var a=t.currentTarget,n=e.state.selectedNote;n[a.name]=a.value,e.setState({selectedNote:n})},e.handleSubmitSel=function(t){t.preventDefault();var a=e.state.selectedNote;e.props.updateNotes(a),e.setState({selectedNote:{},showEdit:0})},e.handleEdit=function(t){var a=Object(m.a)({},t);e.setState({selectedNote:a,showEdit:1})},e.handleDelete=function(t){e.props.deleteNote(t)},e}return Object(E.a)(a,[{key:"handleReset",value:function(){this.setState({note:{title:"",content:""}})}},{key:"handleResetSel",value:function(){this.setState({selectedNote:{},showEdit:0})}},{key:"render",value:function(){var e=this,t=this.props.notes,a=this.state,n=a.note,o=a.date,r=a.months,c=a.selectedNote,s=a.showEdit;console.log(o);var i=[];if(o){var m=o.getDate()+" "+r[o.getMonth()+1]+","+o.getFullYear();i=t.filter((function(e){return e.date===m}))}return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row",style:{backgroundColor:"dodgerblue"}},l.a.createElement("div",{className:"col-lg-6 col-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-center mb-2"},l.a.createElement(g.a,{value:o,onChange:this.onDateChange})),o?l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("h3",null,"Add Note")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",name:"title",required:!0,value:n.title,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"content"},"Content"),l.a.createElement("textarea",{type:"textArea",className:"form-control",name:"content",required:!0,value:n.content,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save")),l.a.createElement("div",{className:"col-6 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return e.handleReset()}},"Discard")))))):"")),l.a.createElement("div",{className:"col-lg-6 col-12"},l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("h3",null,"All Notes")),l.a.createElement("hr",null),i.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row d-flex justify-content-center mb-2"},l.a.createElement("h5",null,o.getDate()," ",r[o.getMonth()+1],",",o.getFullYear())),l.a.createElement("hr",null),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"title"),l.a.createElement("th",null," "),l.a.createElement("th",null," "))),l.a.createElement("tbody",null,i.map((function(t,a){return l.a.createElement(l.a.Fragment,{key:t.title},l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},a+1),l.a.createElement("td",{onClick:function(){return alert(JSON.stringify(t))}},t.title),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(){return e.handleEdit(t)}},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){return e.handleDelete(t)}},"Delete"))))})))),s?l.a.createElement("div",{className:"col-12 mt-3"},l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("h3",null,"Edit Note (",c.date,")")),l.a.createElement("form",{onSubmit:this.handleSubmitSel},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",name:"title",required:!0,value:c.title,onChange:this.handleChangeSel})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"content"},"Content"),l.a.createElement("textarea",{type:"textArea",className:"form-control",name:"content",required:!0,value:c.content,onChange:this.handleChangeSel})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save")),l.a.createElement("div",{className:"col-6 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return e.handleResetSel()}},"Discard")))))):""):l.a.createElement("h6",{className:"d-flex justify-content-center"},"No Note Available for today."))))}}]),a}(n.Component),v=Object(c.b)((function(e){return console.log(e),{notes:e.notes}}),(function(e){return{addToNotes:function(t){return e({type:"ADD_NOTES",obj:t})},updateNotes:function(t){return e({type:"UPDATE_NOTES",obj:t})},deleteNote:function(t){return e({type:"DELETE_NOTE",obj:t})}}}))(N),p=Object(s.b)(d);r.a.render(l.a.createElement(c.a,{store:p},l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.30b34970.chunk.js.map