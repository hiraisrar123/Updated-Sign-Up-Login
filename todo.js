import { supabase } from "./config.js";

// user

let username = document.getElementById('username')
async function userFetch(){
  try{
    const {data, error } = await supabase.auth.getUser()
    if (data){
      username.innerHTML = data.user.user_metadata.Name
    }
  } catch (err){
  }
} 
userFetch();

// insert

 let title = document.getElementById('tittle');
 let description = document.getElementById('description');
 let priority = document.getElementsByName('priority');
 let addTodo = document.getElementById('addTodo');
 let main = document.getElementById('main');

//  _________________________Add Todo
async function _addTodo() {
  let selectedPriority;

  console.log("Email:", title.value);
  console.log("Description:", description.value);

  for (let p of priority) {
    if (p.checked) {
      selectedPriority = p.value;
    }
  }

  if (!title.value || !description.value) {
    alert('Please fill this form');
    return;
  }

  try {
    const { error } = await supabase.from('Todos').insert({ 
      title: title.value,
      priority: selectedPriority,
      description: description.value
    });

    if (error) {
      alert('Error in creating: ' + error.message);
    } else {
      alert('Done ✅');
    }
  } catch (err) {
    alert('Error in adding data: ' + err.message);
  }
}

addTodo.addEventListener('click', _addTodo);



//  _________________________Fetch Data from Database

async function showAllTodo(){
  try{
const { data, error } = await supabase.from('Todos').select().eq('primary', 'Hi')
console.log(data);


  } catch (err){
    console.log(err);
    
  }
}
showAllTodo();