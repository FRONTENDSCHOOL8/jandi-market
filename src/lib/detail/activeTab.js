export function removeIsActiveTab(tabs) {
  return tabs.forEach((tab) => {
    tab.classList.remove('is_active_tab');
    tab.setAttribute('aria-selected', false);
  });
}
export function setActiveTab(selector) {
  selector.classList.add('is_active_tab');
  selector.setAttribute('aria-selected', true);
}
