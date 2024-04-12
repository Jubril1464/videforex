
      const toggle = document.getElementById("toggle");
      toggle.addEventListener("change", function () {
        const toggleText = document.querySelector(".toggle-text");
        toggleText.textContent = toggle.checked ? "On" : "Off";
      });

      const progress = document.querySelector(".progress");
      const progressBar = document.querySelector(".progress-bar");

      // Set the initial progress
      let currentProgress = 70;
      progress.style.height = `${currentProgress}%`;

      // Function to update the progress
      function updateProgress(newProgress) {
        currentProgress = newProgress;
        progress.style.height = `${currentProgress}%`;

        // Add or remove the 'filled' class based on the progress
        if (currentProgress >= 100) {
          progress.classList.add("filled");
        } else {
          progress.classList.remove("filled");
        }
      }

      // Example usage: update the progress to 30%
      updateProgress(30);

      document.querySelectorAll(".sidebar-link").forEach((item) => {
        item.addEventListener("click", (event) => { 
          const targetModalId = item.getAttribute("data-target");
          document.querySelectorAll(".modal").forEach((modal) => {
            modal.style.display = "none";
          });
          document.getElementById(targetModalId).style.display = "block";
          document.querySelector(".modal-container").style.display = "block";
        });
      });

      document
        .querySelector(".modal-container")
        .addEventListener("click", (event) => {
          if (
            event.target === event.currentTarget ||
            event.target.classList.contains("close-modal")
          ) {
            document.querySelectorAll(".modal").forEach((modal) => {
              modal.style.display = "none";
            });
            event.currentTarget.style.display = "none";
          }
        });

      document.querySelectorAll(".grid-button").forEach((item) => {
        item.addEventListener("click", (event) => {
          const targetModalId = item.getAttribute("data-target");
          document
            .querySelectorAll(".mobile__sidebar--modal")
            .forEach((modal) => {
              modal.style.display = "none";
            });
          document.getElementById(targetModalId).style.display = "block";
          document.querySelector(
            ".mobile__sidebar--modal-container"
          ).style.display = "block";
        });
      });

      document
        .querySelector(".mobile__sidebar--modal-container")
        .addEventListener("click", (event) => {
          console.log(event.target);

          if (
            event.target === event.currentTarget ||
            event.target.classList.contains("close-mobile-modal")
          ) {
            document
              .querySelectorAll(".mobile__sidebar--modal")
              .forEach((modal) => {
                modal.style.display = "none";
              });
            event.currentTarget.style.display = "none";
          }
        });

      const bottomBtns = document.querySelectorAll(".bottom-button");
      const bottomModals = document.querySelectorAll(".bottom-modal");

      bottomBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const modalId = btn.getAttribute("data-modal");

          const modal = document.getElementById(modalId);
          modal.style.display = "block";
        });
      });
      bottomModals.forEach((modal) => {
        const closeModal = modal.querySelector(".close-bottom-modal");
        closeModal.addEventListener("click", () => {
          modal.style.display = "none";
        });
      });
      const tabs = document.querySelectorAll(".tab");
      const tabSlider = document.querySelector(".tab-slider");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const targetTab = tab.getAttribute("data-tab");
          const targetContent = document.getElementById(targetTab);
          const activeTab = document.querySelector(".tab.active");

          if (activeTab) {
            activeTab.classList.remove("active");
          }

          tab.classList.add("active");
          tabSlider.style.width = `${tab.offsetWidth}px`;
          tabSlider.style.transform = `translateX(${tab.offsetLeft}px)`;

          document.querySelectorAll(".tab-content").forEach((content) => {
            content.classList.remove("active");
          });

          targetContent.classList.add("active");
        });
      });
      const accountSettingTabs = document.querySelectorAll(
        ".account-settings-tab"
      );
      const accountSettingTabSlider = document.querySelector(".account-settings-tab-slider");

      accountSettingTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const targetTab = tab.getAttribute("data-tab");
          const targetContent = document.getElementById(targetTab);

          const activeTab = document.querySelector(
            ".account-settings-tab.active"
          );

          if (activeTab) {
            activeTab.classList.remove("active");
          }

          tab.classList.add("active");
         accountSettingTabSlider.style.width = `${tab.offsetWidth}px`;
         accountSettingTabSlider.style.transform = `translateX(${tab.offsetLeft}px)`;

          document
            .querySelectorAll(".account-settings-tab-content")
            .forEach((content) => {
              content.classList.remove("active");
            });

          targetContent.classList.add("active");
        });
      });

      function openSidebar() {
        document.querySelector(".mobile-sidebar").style.left = "0";
        document.querySelector(".mobile-sidebar").style.width = "100dvw";
      }
      function closeSidebar() {
        document.querySelector(".mobile-sidebar").style.left = "-100rem";
        document.querySelector(".mobile-sidebar").style.width = "0";
      }

      const addFundButton = document.querySelectorAll(".add__fund--buttons");
      addFundButton.forEach((button) => {
        button.addEventListener("click", () => {
          addFundButton.forEach((active) => {
            active.classList.remove("active");
          });
          button.classList.add("active");
        });
      });

      const withdrawalBtnType = document.querySelectorAll('.withdrawal-type');
      withdrawalBtnType.forEach(button => {
        button.addEventListener('click',() => {
          withdrawalBtnType.forEach(active => {
            active.classList.remove("active");
          });
          button.classList.add("active");
        } )
      })

      const myTradeBtn = document.querySelectorAll(".my-trades-btn");
      console.log(myTradeBtn);

      myTradeBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          myTradeBtn.forEach((active) => {
            active.classList.remove("active");
          });
          btn.classList.add("active");
        });
      });
      const addFund = document.querySelector(".button-add-wallet");
      addFund.addEventListener("click", () => {});
      document.addEventListener("DOMContentLoaded", function () {
        const dropdownBtn = document.querySelector(".dropdown-btn");
        const dropdownContent = document.querySelector(".dropdown-content");

        dropdownBtn.addEventListener("click", function () {
          dropdownContent.classList.toggle("show");
        });

        window.addEventListener("click", function (event) {
          if (!event.target.matches(".dropdown-btn")) {
            dropdownContent.classList.remove("show");
          }
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('amountField');
  const valueButtons = document.querySelectorAll('.value-btn');
  inputField.value = '10'

  valueButtons.forEach(button => {
    button.addEventListener('click', function() {
      inputField.value = button.getAttribute('data-value');
    });
  });
});



  // const addFundModalBtn = document.querySelector('#button-add-wallet');
  // console.log(addFundModalBtn)
  // const addFundModal = document.querySelector('.add-funds-modal');
  //   addFundModalBtn.addEventListener('click', () => {
  //     console.log('hello')
  //     addFundModal.style.display = 'block'
  //   })

    function showfundModal () {
      const addFundModal = document.querySelector('.add-funds-modal');
    addFundModal.style.display = 'block'

    }

    function closeFundModal (){
      const addFundModal = document.querySelector('.add-funds-modal');
    addFundModal.style.display = 'none'
    }
// document.addEventListener('DOMContentLoaded', function() {
//   const bottomContinue = document.querySelector('.bottom-continue');
//   const fundModalContainer = document.querySelector('.fund-modal-container')

//   bottomContinue.addEventListener('click', () => {
//     console.log('hello')
//       fundModalContainer.style.display = 'block'
//   })
// })

    document.addEventListener('DOMContentLoaded', function() {
      const fundModalContents = document.querySelectorAll('.fund-modal-content');
      const continueBtns = document.querySelectorAll('.bottom-continue');
      const backIcon = document.querySelector(".back-icon");
      const stepIndicator = document.querySelector('.fund-account-indicator')

  let currentStep = 1;
  const totalSteps = fundModalContents.length;

  function updateStepIndicator() {
    stepIndicator.textContent = `Method ${currentStep}/${totalSteps}`;
   fundModalContents.forEach((content, index) => {
      const stepIndicator = index + 1 === currentStep ? `${index + 1}/${totalSteps}` : '';
      content.setAttribute('data-step', stepIndicator);
    });
  }

  backIcon.addEventListener('click',() => {
    currentStep--;
    if(currentStep >=1){
      fundModalContents.forEach(content => {
        content.classList.remove('show');
      })
      document.getElementById(`step${currentStep}`).classList.add('show');
        updateStepIndicator();
    } else {
      console.log('Already at the first step');

    }
  })

  continueBtns.forEach(btn => {
    btn.addEventListener('click', function(){
      fundModalContents.forEach(content => {
        content.classList.remove("show")
      })
      if(currentStep < totalSteps)  currentStep++
     
      if(currentStep <= totalSteps){
        fundModalContents.forEach(content => {
          content.classList.remove("show");

        });
        document.getElementById(`step${currentStep}`).classList.add('show');
        updateStepIndicator();

      } else {
        // Handle reaching the end of steps
        console.log('Reached the end of steps');
      }
    })
  })
    })

  document.addEventListener('DOMContentLoaded', function() {
  const minusBtn = document.getElementById('minus-btn');
  const plusBtn = document.getElementById('plus-btn');
  const input = document.getElementById('quantity');

  minusBtn.addEventListener('click', function() {
    
    
    let value = parseFloat(input.value);
    if (value > 1) {
      input.value = (value - 1).toFixed(2);
    }
  });

  plusBtn.addEventListener('click', function() {
    
    let value = parseFloat(input.value);
    input.value = (value + 1).toFixed(2); 
  });
});
  document.addEventListener('DOMContentLoaded', function() {
  const minusBtn = document.getElementById('desktop-minus-btn');
  const plusBtn = document.getElementById('desktop-plus-btn');
  const input = document.getElementById('desktop-trade-amount');

  minusBtn.addEventListener('click', function() {
    
    
    let value = parseFloat(input.value);
    if (value > 1) {
      input.value = (value - 1).toFixed(2);
    }
  });

  plusBtn.addEventListener('click', function() {
    
    let value = parseFloat(input.value);
    input.value = (value + 1).toFixed(2); 
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const timeMinusBtn = document.getElementById('time-minus-btn');
  const timePlusBtn = document.getElementById('time-plus-btn');
  const timeInput = document.getElementById('time-quantity');

  timeMinusBtn.addEventListener('click', function() {
    let value = parseInt(timeInput.value);
    if (value > 1) {
      timeInput.value = value - 1;
    }
  });

  timePlusBtn.addEventListener('click', function() {
    let value = parseInt(timeInput.value);
    timeInput.value = value + 1;
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.getElementById('currency-dropdown');
  const dropdownMenu = document.getElementById('currency-menu');
  const selectedCurrency = document.getElementById('selected-currency');

  dropdownToggle.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  dropdownMenu.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('custom-dropdown-item')) {
      const selectedValue = e.target.getAttribute('data-value');
      selectedCurrency.textContent = selectedValue;
      dropdownMenu.style.display = 'none';
    }
  });

  document.addEventListener('click', function(e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.getElementById('desktop-currency-dropdown');
  const dropdownMenu = document.getElementById('desktop-currency-menu');
  const selectedCurrency = document.getElementById('desktop-selected-currency');

  dropdownToggle.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  dropdownMenu.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('desktop-custom-dropdown-item')) {
      const selectedValue = e.target.getAttribute('data-value');
      selectedCurrency.textContent = selectedValue;
      dropdownMenu.style.display = 'none';
    }
  });

  document.addEventListener('click', function(e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.getElementById('account-dropdown');
  const dropdownMenu = document.getElementById('account-menu');
  const selectedCurrency = document.getElementById('account-selected-type');

  dropdownToggle.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  dropdownMenu.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('account-dropdown-item')) {
      const selectedValue = e.target.getAttribute('data-value');
      selectedCurrency.textContent = selectedValue;
      dropdownMenu.style.display = 'none';
    }
  });

  document.addEventListener('click', function(e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});

  