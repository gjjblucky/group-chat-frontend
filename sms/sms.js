const token = localStorage.getItem('token');
function addNewMssg(e) {
    e.preventDefault();
    console.log(e.target.name);
    const form = new FormData(e.target);
    

    const smsDetails = {
    message:form.get("textarea")
     

    }
    console.log(smsDetails)
    axios.post('http://localhost:5000/sms/sms',smsDetails, { headers: {"Authorization" : token} }
      ).then((response) => {
        console.log(response);
        if(response.status === 201){
            response.data.sms
        } else {
            throw new Error('Failed To send to new mssg');
        }
    
        }).catch(err => showError(err))
}

window.addEventListener('load', ()=> {
   
    axios.get('http://localhost:5000/sms/getmssg', { headers: {"Authorization" : token} }).then(response => {
        if(response.status === 200){
            response.data.sms
        } else {
            throw new Error();
        }
    }).catch(err => showError(err))
});

// function addNewMssgToChat(sms){
//     const parentElement = document.getElementById('listOfExpenses');
//     const expenseElemId = `expense-${expense.id}`;
//     parentElement.innerHTML += `
//         <li id=${expenseElemId}>
//             ${expense.expenseamount} - ${expense.category} - ${expense.description}
//             <button onclick='deleteExpense(event, ${expense.id})'>
//                 Delete Expense
//             </button>
//         </li>`
// }

