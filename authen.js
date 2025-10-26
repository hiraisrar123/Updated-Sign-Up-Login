import { supabase } from "./config.js";

const registerForm = document.getElementById('registerForm');
const semail = document.getElementById('signupEmail');
const spassword = document.getElementById('signupPassword');

async function signup(e) {
  e.preventDefault();

  if (!semail.value || !spassword.value) {
    alert('Please fill all fields');
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email: semail.value,
    password: spassword.value,
    options: {
      data: { name: document.getElementById('username').value }
    }
  });

  if (error) {
    console.log('Signup Error:', error);
    alert(error.message);
    return;
  }

  alert('Signup successful! Check your email to confirm.');
  location.href = 'todo.html';
}

registerForm?.addEventListener('submit', signup);





// login

const loginForm = document.getElementById('loginForm');
const lemail = document.getElementById('loginEmail');
const lpassword = document.getElementById('loginPassword');

async function login(e) {
  e.preventDefault();

  if (!lemail.value || !lpassword.value) {
    alert('Please fill all fields');
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: lemail.value,
    password: lpassword.value
  });

  if (error) {
    console.log('Login Error:', error);
    alert(error.message);
    return;
  }

  console.log('Login Success:', data);
  location.href = 'todo.html';
}


loginForm?.addEventListener('submit', login);



// ___________________________________________ LOGOUT 
let logoutBtn = document.getElementById('logout');


async function logout () {
  const { error } = await supabase.auth.signOut();
  if(!error){
   alert('Logout successful');
  location.href = 'index.html';
  } else {
    console.error('Logout error:', error.message);
  }
}


logoutBtn?.addEventListener('click', logout);


