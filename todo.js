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

 let tittle = document.getElementById('tittle');
 let description = document.getElementById('description');
 let priority = document.getElementsByName('priority');
 let addTodo = document.getElementById('addTodo');
 let main = document.getElementById('main');

//  _________________________Add Todo
async function _addTodo() {
  let selectedPriority;

  console.log("Email:", tittle.value);
  console.log("Description:", description.value);

  for (let p of priority) {
    if (p.checked) {
      selectedPriority = p.value;
    }
  }

  if (!tittle.value || !description.value) {
    alert('Please fill this form');
    return;
  }

  try {
  const { error } = await supabase.from('Todos').insert({
  tittle: tittle.value,
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

async function AllTodos(){
  try{
const { data, error } = await supabase.from('Todos').select('*')
if(data){
  return showAllTodos (data)
}
  } catch (err){
    console.log(err); 
  }
  if (error) {
  alert('Error in creating: ' + error.message);
} else {
  alert('Done ✅');
  AllTodos(); // 👈 ye line add karo
}

  AllTodos();
}


async function showAllTodos(todos) {
  main.innerHTML += `
  <div class="card m-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${todos.tittle}</h5>
      <p class="card-text">${todos.description}</p>
      <a href="#" class="card-link">${todos.priority}</a>
      <button class="btn btn-success mt-3">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <br>
      <button class="btn btn-danger mt-3">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>`;

  
}