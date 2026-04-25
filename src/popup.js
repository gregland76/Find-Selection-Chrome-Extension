// popup.js
async function getSelectionText() {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  if (!tab.id) return '';
  const [{ result }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => window.getSelection().toString()
  });
  return result.trim();
}

document.addEventListener('DOMContentLoaded', async () => {
  const googleBtn = document.getElementById('google');
  const bingBtn = document.getElementById('bing');
  const duckBtn = document.getElementById('duckduckgo');
  const leboncoinBtn = document.getElementById('leboncoin');
  const aboutBtn = document.getElementById('about');
  const aboutInfo = document.getElementById('about-info');
    aboutBtn.addEventListener('click', () => {
      if (aboutInfo.style.display === 'none') {
        aboutInfo.style.display = '';
        aboutBtn.textContent = 'Fermer';
      } else {
        aboutInfo.style.display = 'none';
        aboutBtn.textContent = 'À propos';
      }
    });
  const noSel = document.getElementById('no-selection');
  const selection = await getSelectionText();

  if (!selection) {
    googleBtn.disabled = true;
    bingBtn.disabled = true;
    duckBtn.disabled = true;
    leboncoinBtn.disabled = true;
    noSel.style.display = '';
  }

  googleBtn.addEventListener('click', () => {
    if (selection) {
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(selection);
      chrome.tabs.create({ url });
    }
  });
  bingBtn.addEventListener('click', () => {
    if (selection) {
      const url = 'https://www.bing.com/search?q=' + encodeURIComponent(selection);
      chrome.tabs.create({ url });
    }
  });
  duckBtn.addEventListener('click', () => {
    if (selection) {
      const url = 'https://duckduckgo.com/?q=' + encodeURIComponent(selection);
      chrome.tabs.create({ url });
    }
  });
  leboncoinBtn.addEventListener('click', () => {
    if (selection) {
      const url = 'https://www.leboncoin.fr/recherche?text=' + encodeURIComponent(selection);
      chrome.tabs.create({ url });
    }
  });
});
