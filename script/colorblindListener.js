//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

// stores the currently selected filter so that when the user stops hovering
// over options, the currently selected filter will still be applied to the popup
window.selectedFilter = null;

async function injectFilter(fileName) {
  const tab = await chrome.tabs.query({ active: true });
  if (tab.length === 0) return;
  chrome.scripting.executeScript({
    target: { tabId: tab[0].id },
    files: [fileName],
  });
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
