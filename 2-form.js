import"./assets/styles-CPz8_5cp.js";const e=document.querySelector(".feedback-form");e&&(e.addEventListener("submit",function(l){l.preventDefault();const t=e.elements,m=t.email.value.trim(),s=t.message.value.trim();if(m===""||s===""){alert("All form fields must be filled in");return}console.log({email:m,message:s}),e.reset()}),e.elements.email.focus());
//# sourceMappingURL=2-form.js.map
