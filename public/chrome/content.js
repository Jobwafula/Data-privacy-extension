
console.log('Content script has been injected and is running.');
function requiresPersonalInfo() {
  const personalInfoKeywords = ["name", "First Name", "Last Name","Phone Number", "Email Address","first_name", "last_name", "surname", "email", "institution", "country", "region", "territory", "phone", "contact", "password"];
  
  const inputFields = document.querySelectorAll('input, select, textarea');
  for (let i = 0; i < inputFields.length; i++) {
      const input = inputFields[i];
      
      for (let j = 0; j < personalInfoKeywords.length; j++) {
          if (input.name.toLowerCase().includes(personalInfoKeywords[j]) ||
              input.id.toLowerCase().includes(personalInfoKeywords[j]) ||
              (input.placeholder && input.placeholder.toLowerCase().includes(personalInfoKeywords[j]))) {
              return true;
          }
      }
  }
  return false;
}

function maskInputField(input) {
  input.setAttribute('data-original-value', input.value);
  input.value = '*'.repeat(input.value.length);
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('spellcheck', 'false');
  input.addEventListener('copy', (event) => {
      event.preventDefault();
  });
  input.addEventListener('paste', (event) => {
      event.preventDefault();
  });
  input.addEventListener('input', (event) => {
      event.preventDefault();
  });
}

function maskInputFields() {
  document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea').forEach(input => {
      maskInputField(input);
  });
}

function main() {
  if (requiresPersonalInfo()) {
      maskInputFields();
  }
}

document.addEventListener('DOMContentLoaded', main);

document.addEventListener('input', (event) => {
  const input = event.target;
  if (requiresPersonalInfo() && (input.tagName === 'INPUT' || input.tagName === 'SELECT' || input.tagName === 'TEXTAREA')) {
      maskInputField(input);
  }
});


/// demo testing
// content.js
window.addEventListener('click', () => {
  console.log("Click event")
  // Send a message to the background script
  chrome.runtime.sendMessage({ type: 'FROM_CONTENT_SCRIPT', payload: { "name": "Job", "event": "Hackathon" } });
});


// listen from background then emit to REACT
// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message from the background", message);
  if (message.type === 'FROM_EXTENSION') {
    console.log("Emitting data to the window")
    // Send a message to your React application
    window.postMessage({ type: 'FROM_EXTENSION', payload: message.payload }, "*");
  }
});