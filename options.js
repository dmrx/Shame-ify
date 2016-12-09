// Saves options to chrome.storage
function save_options() {
  let shamelist = document.getElementById('shamelist').value;
  console.log(shamelist);
  chrome.storage.sync.set({
    'shamelist': shamelist
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    currsl.textContent = shamelist;
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    'shamelist': shamelist,
  }, function(items) {
    document.getElementById('shamelist').value = items.shamelist;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);