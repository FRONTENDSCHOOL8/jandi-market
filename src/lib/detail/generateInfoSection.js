export function generateInfoSection(title, content, addContent = '') {
  return content !== ''
    ? /* html */ `
      <div class="info_flex">
        <dt class="min-w-32">${title}</dt>
        <dd>
          <p>${content}</p>
          ${addContent}
        </dd>
      </div>`
    : '';
}
