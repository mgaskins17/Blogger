// Logout page script when clicking logout destroying cookie interaction
// const logout = document.getElementById('logout');
// logout.addEventListener('click', async function() {
// })

// async function logOut () {
//     const response = await fetch('/api/user/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//       });
    
//       if (response.ok) {
//       //   document.location.replace('/logout');
//       console.log(response);
//       } else {
//         alert(response.statusText);
//       }
// }

// logOut();


fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((response) => console.log(response));

//   if (response.ok) {
//   //   document.location.replace('/logout');
//   console.log(response);
//   } else {
//     alert(response.statusText);
//   }

        
