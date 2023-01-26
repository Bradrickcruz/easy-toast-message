class ToastManager {
  constructor() {
    this.nextToastId = 1;
  }

  show(message, state, timeout = 3) {
    const toastDiv = document.createElement('div');
    const toastId = `toast-${this.nextToastId}`;
    toastDiv.id = toastId;

    toastDiv.className = 'toast';
    toastDiv.textContent = message;
    const className = `toast toast--visible ${state ? 'toast--' + state : ''}`;

    document.body.append(toastDiv);
    setTimeout(() => {
      const toastDiv = document.getElementById(toastId);
      toastDiv.className = className;
      setTimeout(() => {
        toastDiv.className = 'toast';
        setTimeout(() => {
          document.getElementById(toastId).remove();
        }, 250);
      }, 1000 * timeout - 250);
    }, 100);

    this.nextToastId += 1;
  }
}

let toast;
document.addEventListener('DOMContentLoaded', () => {
  toast = new ToastManager();
  document.querySelector('.toastShow.success')?.addEventListener('click', () => {
    toast.show('New success message.', 'success', 2);
  });
  document.querySelector('.toastShow.error')?.addEventListener('click', () => {
    toast.show('New error message.', 'danger', 2);
  });
});
