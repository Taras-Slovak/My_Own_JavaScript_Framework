function toButton(button) {
  return `
    <div class="button">
      <i class="material-icons">${button.icon}</i>
    </div>`;
}

export function createToolbar() {
  const buttons = [
    {
      icon: 'format_align_left',
      active: false
    },
    {
      icon: 'format_align_center',
      active: false
    },
    {
      icon: 'format_align_right',
      active: false
    },
    {
      icon: 'format_bold',
      active: true
    },
    {
      icon: 'format_italic',
      active: false
    },
    {
      icon: 'format_underlined',
      active: false
    },
  ];
  return buttons.map(toButton).join('');
}
