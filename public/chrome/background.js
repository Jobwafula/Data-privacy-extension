// background.js
console.log('Background script is running.');
// Define your dictionary fields
const dictionaryFields = [
    "name",
    "First Name",
    "Last Name",
    "Phone Number",
    "Email Address",
    // Add other fields from your dictionary
  ];
  
  // Assign scores for each matched field
  const fieldScores = {
    "name": 1,
    "First Name": 1,
    "Last Name": 1,
    "Phone Number": 1,
    "Email Address": 1,
    // Assign scores for other fields
  };
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "collectData") {
      const collectedData = message.data;
  
      // Calculate total score based on matched fields
      let totalScore = 0;
      let totalPossibleScore = 0;
  
      for (const field in collectedData) {
        if (dictionaryFields.includes(field)) {
          totalScore += fieldScores[field] || 0;
          totalPossibleScore += 1;
        }
      }
  
      // Calculate similarity percentage
      const similarityPercentage = totalPossibleScore > 0 ? (totalScore / totalPossibleScore) * 100 : 0;
  
      // Send the response back to the content script
      sendResponse({ similarityPercentage }); // Include the similarity percentage
  
      // Store or display the similarity percentage
      console.log(`Similarity Percentage: ${similarityPercentage.toFixed(2)}%`);
    }
  });


// demo testing
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'FROM_CONTENT_SCRIPT') {
    // Send a message to your content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'FROM_EXTENSION', payload: message.payload });
    });
  }
});