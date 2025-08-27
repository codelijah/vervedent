'use strict';
const viewTeamBtn = document.querySelector('.view');
const showTeam = document.querySelectorAll('.show');
const menuBtn = document.getElementById('menu-btn');
const navDropDown = document.querySelector('.nav-dropdown');
// const menuBtnRotate = document.querySelector('.menu-btn-rotate');

viewTeamBtn.addEventListener('click', function () {
  showTeam.forEach(team => {
    team.classList.toggle('hidden');
  });

  // for (let i = 0; i < showTeam.length; i++) {
  //   showTeam[i].classList.toggle('hidden');
  // }
  viewTeamBtn.classList.toggle('hidden');
});

menuBtn.addEventListener('click', function () {
  // navDropDown.classList.toggle('hidden');
  // navDropDown.classList.toggle('pointer-events-none');
  navDropDown.classList.toggle('opacity-0');
  document.body.classList.toggle('overflow-y-hidden');
  navDropDown.classList.toggle('opacity-100');
  menuBtn.classList.toggle('active')
});
