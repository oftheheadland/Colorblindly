//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

// stores the currently selected filter so that when the user stops hovering
// over options, the currently selected filter will still be applied to the popup
window.selectedFilter = null;

async function injectFilter(fileName) {
  console.log("Attempting to inject filter:", fileName);

  // Query the active tab in the current window
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length === 0) {
    console.error("No active tab found in the current window. Script injection aborted.");
    return;
  }

  const activeTab = tabs[0];
  console.log("Active tab found:", activeTab);

  try {
    // Inject the script into the active tab
    await chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: [fileName],
    });
    console.log("Script injected successfully:", fileName);
  } catch (error) {
    console.error("Error injecting script:", error);
  }
}

document.querySelectorAll(['[id^="radio"]']).forEach((radioButton) => {
  const filter = radioButton.parentElement.id.replace("option-", "");
  radioButton.addEventListener("click", function () {
    // inject the filter script
    injectFilter(`filters/${filter}.js`);
    // popup-specific filters
    applyFilter((window.selectedFilter = filter));
  });
});
