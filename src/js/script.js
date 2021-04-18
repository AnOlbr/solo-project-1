/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* global flatpickr */

// import flatpickr from 'flatpickr';
function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
}
document.querySelector('.hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
function closeMenu() {
  document.querySelector('.menu').classList.remove('show');
}
document.querySelectorAll('.menu-item').forEach(function (btn) {
  btn.addEventListener('click', function () {
    closeMenu();
  });

});

function switchTab(e) {
  e.preventDefault();
  const clickedElement = this;
  const activeTabLinks = document.querySelectorAll('.menu-item');
  for (let activeTabLink of activeTabLinks) {
    activeTabLink.classList.remove('active');
  }
  clickedElement.classList.add('active');
  const activeTabs = document.querySelectorAll('.card-container');
  for (let activeTab of activeTabs) {
    activeTab.classList.remove('active');
  }
  const tabSelector = clickedElement.getAttribute('href');
  const targetTab = document.querySelector(tabSelector);
  targetTab.classList.add('active');
}

const links = document.querySelectorAll('.menu-item');
for (let link of links) {
  link.addEventListener('click', switchTab);
}


function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.popup').addEventListener('click', function (e) {
  if (e.target === this) {
    openModal('#myModalMessage');
  }
});

document.querySelector('.quit').addEventListener('click', function (e) {
  if (e.target === this) {
    openModal('#myModalQuit');
  }
});

document.querySelector('.top-bar-login').addEventListener('click', function (e) {
  if (e.target === this) {
    openModal('#myModalLogin');
  }
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { // eslint-disable-line
  type: 'bar',
  data: {

    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],

    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8', // zmienic kolory na $, zrobic okragle
      borderColor: '#8DBEC8',
      data: [400, 345, 289, 400, 568, 153, 280, 270, 423, 500],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [457, 478, 187, 378, 376, 457, 582, 443, 213, 550],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [577, 552, 134, 365, 326, 437, 659, 384, 374, 520],

      hidden: true,
    }]
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontColor: '#BABABA',
        fontSize: 16,
        boxWidth: 20,
        padding: 10
      }
    },
  }
});