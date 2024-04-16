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
    document.querySelectorAll(".mobile__sidebar--modal").forEach((modal) => {
      modal.style.display = "none";
    });
    document.getElementById(targetModalId).style.display = "block";
    document.querySelector(".mobile__sidebar--modal-container").style.display =
      "block";

      if(targetModalId === 'mobile__sidebar--modal-2' && item.getAttribute('data-type') === 'settings'){
        const accountSettingTabsContent = document.querySelectorAll(
          ".account-settings-tab-content"
        );
        const accountSettingTab = document.querySelectorAll(
          ".account-settings-tabs"
        );
        accountSettingTabsContent.forEach((tab) => {
          tab.classList.remove('active')
        })
        accountSettingTab.forEach(tab => {
          tab.classList.remove('active')
        })

        const activeWithdraw = document.getElementById('account-settings-tab1');
        activeWithdraw.classList.add('active');
        
      }
      else if(targetModalId === 'mobile__sidebar--modal-2' && item.getAttribute('data-type') === 'notification') {
     const accountSettingTabsContent = document.querySelectorAll(
       ".account-settings-tab-content"
     );
     const accountSettingTab = document.querySelectorAll(
       ".account-settings-tabs"
     );
     accountSettingTabsContent.forEach((tab) => {
       tab.classList.remove("active");
     });
     accountSettingTab.forEach((tab) => {
       tab.classList.remove("active");
     });

     const activeWithdraw = document.getElementById("account-settings-tab5");
     activeWithdraw.classList.add("active");
      }
      else if(targetModalId === 'mobile__sidebar--modal-2'){
        console.log('hello');
        const accountSettingTabsContent = document.querySelectorAll(
          ".account-settings-tab-content"
        );
        const accountSettingTab = document.querySelectorAll(
          ".account-settings-tabs"
        );
        accountSettingTabsContent.forEach((tab) => {
          tab.classList.remove('active')
        })
        accountSettingTab.forEach(tab => {
          tab.classList.remove('active')
        })

        const activeWithdraw = document.getElementById('account-settings-tab4');
        activeWithdraw.classList.add('active');
        
      }
  });
});
// const settingsIcon = document.querySelector('.settings-icon');
// settingsIcon.addEventListener('click', (e) => {
//     const settingsModal = document.getElementById(e.target.getAttribute('data-target'));
//     settingsModal.style.display = 'block';
//      document.querySelector(".mobile__sidebar--modal-container").style.display = "block";
    
// })
document
  .querySelector(".mobile__sidebar--modal-container")
  .addEventListener("click", (event) => {
    console.log(event.target);

    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("close-mobile-modal")
    ) {
      document.querySelectorAll(".mobile__sidebar--modal").forEach((modal) => {
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
const accountSettingTabs = document.querySelectorAll(".account-settings-tab");
const accountSettingTabSlider = document.querySelector(
  ".account-settings-tab-slider"
);

accountSettingTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetTab = tab.getAttribute("data-tab");
    const targetContent = document.getElementById(targetTab);

    const activeTab = document.querySelector(".account-settings-tab.active");

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


const rolloverTabs = document.querySelectorAll('.rollover-tab');
const rolloverTabSlider = document.querySelector(".rollover-tab-slider");
rolloverTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute("data-tab");
     const targetContent = document.getElementById(targetTab);

     const activeTab = document.querySelector(".rollover-tab.active");

     if (activeTab) {
       activeTab.classList.remove("active");
     }
      tab.classList.add("active");
      rolloverTabSlider.style.width = `${tab.offsetWidth}px`;
      rolloverTabSlider.style.transform = `translateX(${tab.offsetLeft}px)`;

       document
         .querySelectorAll(".rollover-tab-content")
         .forEach((content) => {
           content.classList.remove("active");
         });

       targetContent.classList.add("active");

  })
})
const mobileRolloverTabs = document.querySelectorAll('.mobile-rollover-tab');
const mobileRolloverTabSlider = document.querySelector(".mobile-rollover-tab-slider");
mobileRolloverTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute("data-tab");
     const targetContent = document.getElementById(targetTab);

     const activeTab = document.querySelector(".mobile-rollover-tab.active");

     if (activeTab) {
       activeTab.classList.remove("active");
     }
      tab.classList.add("active");
      mobileRolloverTabSlider.style.width = `${tab.offsetWidth}px`;
      mobileRolloverTabSlider.style.transform = `translateX(${tab.offsetLeft}px)`;

       document
         .querySelectorAll(".mobile-rollover-tab-content")
         .forEach((content) => {
           content.classList.remove("active");
         });

       targetContent.classList.add("active");

  })
})

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

const withdrawalBtnType = document.querySelectorAll(".withdrawal-type");
withdrawalBtnType.forEach((button) => {
  button.addEventListener("click", () => {
    withdrawalBtnType.forEach((active) => {
      active.classList.remove("active");
    });
    button.classList.add("active");
  });
});

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

let depositAmount
const inputField = document.getElementById("amountField");
document.addEventListener("DOMContentLoaded", function () {
  const valueButtons = document.querySelectorAll(".value-btn");
  inputField.value = "10";

  valueButtons.forEach((button) => {
    button.addEventListener("click", function () {
      inputField.value = button.getAttribute("data-value");
      depositAmount = inputField.value;
      setAmount()
    });

      
    
  
  });

  
});
function setAmount() {
const amountDeposit = document.querySelector(".total-deposit-amount");
amountDeposit.textContent = `${inputField.value}USD`;
}
inputField.addEventListener("change", setAmount);
setAmount();


let desktopDepositAmount
const desktopInputField = document.getElementById("desktop-amount-field");
const totalReceive = document.querySelector(".total-receive");
document.addEventListener("DOMContentLoaded", function () {
  const valueButtons = document.querySelectorAll("#desktopValue-btn");
  desktopInputField.value = "10";
 setDesktopAmount();
  valueButtons.forEach((button) => {
    button.addEventListener("click", function () {
      desktopInputField.value = button.getAttribute("data-value");
      desktopDepositAmount = desktopInputField.value;
      setDesktopAmount()
    });
 });
});

function setDesktopAmount() {
const amountDeposit = document.querySelector(".desktop-total-deposit-amount");
amountDeposit.textContent = `${desktopInputField.value}USD`;
  totalReceive.textContent = `$${desktopInputField.value}`;

}
desktopInputField.addEventListener("change", setDesktopAmount);
setDesktopAmount();

// const addFundModalBtn = document.querySelector('#button-add-wallet');
// console.log(addFundModalBtn)
// const addFundModal = document.querySelector('.add-funds-modal');
//   addFundModalBtn.addEventListener('click', () => {
//     console.log('hello')
//     addFundModal.style.display = 'block'
//   })

function showfundModal() {
  const addFundModal = document.querySelector(".add-funds-modal");
  addFundModal.style.display = "block";
}

function closeFundModal() {
  const addFundModal = document.querySelector(".add-funds-modal");
  addFundModal.style.display = "none";
}
// document.addEventListener('DOMContentLoaded', function() {
//   const bottomContinue = document.querySelector('.bottom-continue');
//   const fundModalContainer = document.querySelector('.fund-modal-container')

//   bottomContinue.addEventListener('click', () => {
//     console.log('hello')
//       fundModalContainer.style.display = 'block'
//   })
// })

document.addEventListener("DOMContentLoaded", function () {
  const fundModalContents = document.querySelectorAll(".fund-modal-content");
  const continueBtns = document.querySelectorAll(".bottom-continue");
  const backIcon = document.querySelector(".back-icon");
  const stepIndicator = document.querySelector(".fund-account-indicator");

  let currentStep = 1;
  const totalSteps = fundModalContents.length;

  function updateStepIndicator() {
    stepIndicator.textContent = `Method ${currentStep}/${totalSteps}`;
    fundModalContents.forEach((content, index) => {
      const stepIndicator =
        index + 1 === currentStep ? `${index + 1}/${totalSteps}` : "";
      content.setAttribute("data-step", stepIndicator);
    });
  }

  backIcon.addEventListener("click", () => {
    currentStep--;
    if (currentStep >= 1) {
      fundModalContents.forEach((content) => {
        content.classList.remove("show");
      });
      document.getElementById(`step${currentStep}`).classList.add("show");
      updateStepIndicator();
    } else {
      console.log("Already at the first step");
    }
  });

  continueBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      fundModalContents.forEach((content) => {
        content.classList.remove("show");
      });
      if (currentStep < totalSteps) currentStep++;

      if (currentStep <= totalSteps) {
        fundModalContents.forEach((content) => {
          content.classList.remove("show");
        });
        document.getElementById(`step${currentStep}`).classList.add("show");
        updateStepIndicator();
      } else {
        // Handle reaching the end of steps
        console.log("Reached the end of steps");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.getElementById("minus-btn");
  const plusBtn = document.getElementById("plus-btn");
  const input = document.getElementById("quantity");
 const profitValue =  document.getElementById("mobile-profit-value")

  profitValue.textContent = `$${(parseFloat(input.value) * 1.92).toFixed(2)}`;
  minusBtn.addEventListener("click", function () {
    let value = parseFloat(input.value);
    if (value > 1) {
      input.value = (value - 1).toFixed(2);
      profitValue.textContent = `$${(parseFloat(input.value) * 1.92).toFixed(
        2
      )}`;
    }
  });

  plusBtn.addEventListener("click", function () {
    let value = parseFloat(input.value);
    input.value = (value + 1).toFixed(2);
    profitValue.textContent = `$${(parseFloat(input.value) * 1.92).toFixed(2)}`;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.getElementById("desktop-minus-btn");
  const plusBtn = document.getElementById("desktop-plus-btn");
  const input = document.getElementById("desktop-trade-amount");
  const potentialProfit = document.getElementById('potential-profit');
  potentialProfit.textContent = `${(parseFloat(input.value) * 1.92).toFixed(
    2
  )} USD`;
  this.parentNode
  minusBtn.addEventListener("click", function () {
    let value = parseFloat(input.value);
    if (value > 1) {
      input.value = (value - 1).toFixed(2);
        potentialProfit.textContent = `${(
          parseFloat(input.value) * 1.92
        ).toFixed(2)} USD`;

    }
  });

  plusBtn.addEventListener("click", function () {
    let value = parseFloat(input.value);
    input.value = (value + 1).toFixed(2);
    potentialProfit.textContent = `${(parseFloat(input.value) * 1.92).toFixed(2)} USD`;

  });
});
document.addEventListener("DOMContentLoaded", function () {
  const timeMinusBtn = document.getElementById("time-minus-btn");
  const timePlusBtn = document.getElementById("time-plus-btn");
  const timeInput = document.getElementById("time-quantity");

  timeMinusBtn.addEventListener("click", function () {
    let value = parseInt(timeInput.value);
    if (value > 1) {
      timeInput.value = value - 1;
    }
  });

  timePlusBtn.addEventListener("click", function () {
    let value = parseInt(timeInput.value);
    timeInput.value = value + 1;
  });
});

let selectedCurrencyPair = 'GBPUSD'
let selectedPair = document.querySelector('.selected-pair')
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("currency-dropdown");
  const dropdownMenu = document.getElementById("currency-menu");
  const selectedCurrency = document.getElementById("selected-currency");
  const widgetScript = document.getElementById("tradingview-widget-script");
  
  


  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  dropdownMenu.addEventListener("click", function (e) { 
    
    if (e.target && e.target.classList.contains("custom-dropdown-item")) {
      const selectedValue = e.target.getAttribute("data-value");
      // const widgetScriptContent = `{
      //   "autosize": true,
      //   "symbol": "${selectedValue}",
      //   "interval": "1",
      //   "timezone": "Etc/UTC",
      //   "theme": "dark",
      //   "style": "1",
      //   "locale": "en",
      //   "enable_publishing": false,
      //   "backgroundColor": "rgb(38, 58, 82)",
      //   "hide_top_toolbar": true,
      //   "allow_symbol_change": false,
      //   "calendar": false,
      //   "hide_volume": true,
      //   "support_host": "https://www.tradingview.com"
      // }`;
      selectedCurrency.textContent = selectedValue;
      selectedPair.value = selectedValue
      dropdownMenu.style.display = "none";
      console.log(selectedPair.value)
    } 
  });


  document.addEventListener("click", function (e) {   
    if (
      !dropdownToggle.contains(e.target) &&  
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("desktop-currency-dropdown");
  const dropdownMenu = document.getElementById("desktop-currency-menu");
  const selectedCurrency = document.getElementById("desktop-selected-currency");

  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  dropdownMenu.addEventListener("click", function (e) {
    if (
      e.target &&
      e.target.classList.contains("desktop-custom-dropdown-item")
    ) {
      const selectedValue = e.target.getAttribute("data-value");
      selectedCurrency.textContent = selectedValue;
      dropdownMenu.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (
      !dropdownToggle.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("account-dropdown");
  const dropdownMenu = document.getElementById("account-menu");
  const selectedCurrency = document.getElementById("account-selected-type");

  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  dropdownMenu.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("account-dropdown-item")) {
      const selectedValue = e.target.getAttribute("data-value");
      selectedCurrency.textContent = selectedValue;
      dropdownMenu.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (
      !dropdownToggle.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});

function getCryptoAddress(crypto) {
  switch (crypto) {
    case "bitcoin":
      return "3MPAS7Vvejvo7Ay5ibXzwYTj9uWdwtr3bX";
    case "tetherErc":
      return "tethererck3jfikfkffjfjfjfj";
    case "tetherTrc":
      return "tetherTrcck3jfikfkffjfjfjfj";
    case "tetherBep":
      return "tetherBepck3jfikfkffjfjfjfj";
    case "trueUsd":
      return "trueUsdck3jfikfkffjfjfjfj";
    case "paxos":
      return "paxosck3jfikfkffjfjfjfj";
    case "ethereum":
      return "ethck3jfikfkffjfjfjfj";
    case "liteCoin":
      return "litecoinck3jfikfkffjfjfjfj";
    case "tron":
      return "tronck3jfikfkffjfjfjfj";
    case "binanceCoin":
      return "binancecoinck3jfikfkffjfjfjfj";
    case "binanceCash":
      return "binanceCoinck3jfikfkffjfjfjfj";
    case "dash":
      return "dashck3jfikfkffjfjfjfj";
    case "zCash":
      return "zCashck3jfikfkffjfjfjfj";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cryptoButtons = document.querySelectorAll(".coin");
  const cryptoAddress = document.querySelector(".crypto-address");

  cryptoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const crypto = button.getAttribute("data-crypto");

      cryptoButtons.forEach((active) => {
        active.classList.remove("active");
      });
      button.classList.add("active");

      const coinName = button.children[1].textContent;

      const address = getCryptoAddress(crypto); // Assuming you have a function to get the address for each crypto
      cryptoAddress.textContent = `${coinName} : ${address}`;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cryptoButtons = document.querySelectorAll(".desktop-coin");
  const cryptoAddress = document.querySelector(".desktop-crypto-address");

  cryptoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const crypto = button.getAttribute("data-crypto");

      cryptoButtons.forEach((active) => {
        active.classList.remove("active");
      });
      button.classList.add("active");

      const coinName = button.children[1].textContent;

      const address = getCryptoAddress(crypto); // Assuming you have a function to get the address for each crypto
      cryptoAddress.textContent = `${coinName} : ${address}`;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const openOrderBtn = document.querySelector('.open-orders')
  const downArrow = document.querySelector('.down-arrow')
  const openOrderContent = document.querySelector('.open-orders-content');

  openOrderBtn.addEventListener('click', function() {
      openOrderContent.classList.toggle('active');
      downArrow.classList.toggle('active')
  })
})

function openRolloverModal(){
  const rollover = document.querySelector('.rollover-modal');
  rollover.classList.add('active')
}
function closeRolloverModal(){
   const rollover = document.querySelector(".rollover-modal");
   rollover.classList.remove("active");
}
function openMobileRolloverModal(){
  const rollover = document.querySelector('.mobile-rollover-modal');
  rollover.classList.add('active')
}
function closeMobileRolloverModal(){
   const rollover = document.querySelector(".mobile-rollover-modal");
   rollover.classList.remove("active");
}

//  const input = document.getElementById("quantity");
//  const minusBtn = document.getElementById("minus-btn");
//  const plusBtn = document.getElementById("plus-btn");
// function calculateProfit() {
 
// const mobileProfitValue = parseFloat(input.value)

//   // var profit = (1.92 * Number(input.value)).toFixed(2)

//  if (!isNaN(mobileProfitValue)) {
//    var percentValue = (mobileProfitValue * 0.92).toFixed(2);
//    var totalValue = (parseFloat(percentValue) + mobileProfitValue).toFixed(2);

//    document.querySelector(".mobile-profit-value").value = totalValue;
//  } else {
//    // If profitValue is not a valid number, display an error message
//    document.querySelector(".mobile-profit-value").value = "Invalid Input";
//  }

// }
// minusBtn.addEventListener('click', calculateProfit);
// plusBtn.addEventListener('click', calculateProfit);
// input.addEventListener('input', calculateProfit)

// calculateProfit()


// function setSettings() {
//   const accountSettingTabsContent = document.querySelectorAll(
//     ".account-settings-tab-content"
//   );
//   const accountSettingTab = document.querySelectorAll(".account-settings-tabs");
//   accountSettingTabsContent.forEach((tab) => {
//     tab.classList.remove("active");
//   });
//   accountSettingTab.forEach((tab) => {
//     tab.classList.remove("active");
//   });
//   const activeWithdraw = document.getElementById("account-settings-tab1");
//   activeWithdraw.classList.add("active");

  
// }