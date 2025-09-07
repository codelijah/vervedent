'use strict';
const viewTeamBtn = document.querySelector('.view');
const showTeam = document.querySelectorAll('.show');
const menuBtn = document.getElementById('menu-btn');
const navDropDown = document.querySelector('.nav-dropdown');
// viewTeamBtn.addEventListener('click', function () {
//   showTeam.forEach(team => {
//     team.classList.toggle('hidden');
//   });

//   // for (let i = 0; i < showTeam.length; i++) {
//   //   showTeam[i].classList.toggle('hidden');
//   // }
//   viewTeamBtn.classList.toggle('hidden');
// });

// menuBtn.addEventListener('click', function () {
//   navDropDown.classList.toggle('pointer-events-none');
//   navDropDown.classList.toggle('pointer-events-auto');
//   navDropDown.classList.toggle('opacity-0');
//   document.body.classList.toggle('overflow-y-hidden');
//   navDropDown.classList.toggle('opacity-100');
//   menuBtn.classList.toggle('active')
// });

if (viewTeamBtn) {
  viewTeamBtn.addEventListener('click', () => {
    showTeam.forEach(team => team.classList.toggle('hidden'));
    viewTeamBtn.classList.toggle('hidden');
  });
}

if (menuBtn && navDropDown) {
  menuBtn.addEventListener('click', () => {
    navDropDown.classList.toggle('pointer-events-none');
    navDropDown.classList.toggle('pointer-events-auto');
    navDropDown.classList.toggle('opacity-0');
    navDropDown.classList.toggle('opacity-100');
    document.body.classList.toggle('overflow-y-hidden');
    menuBtn.classList.toggle('active');
  });
}
