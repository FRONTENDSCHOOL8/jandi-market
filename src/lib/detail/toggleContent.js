export function toggleContent(titles, contents) {
  titles.forEach((title) => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      let hidden = !content.hidden;
      contents.forEach((content, index) => {
        content.hidden = true;
        content.setAttribute('aria-hidden', true);
        content.classList.remove('flex_column');
        titles[index].setAttribute('aria-expanded', false);
      });

      content.hidden = hidden;
      content.setAttribute('aria-hidden', hidden);
      if (!hidden) {
        content.classList.add('flex_column');
      }
      title.setAttribute('aria-expanded', !hidden);
    });
  });
}
