// ViB Rickroll Prank v3 - The Ultimate Lockdown Edition
(function vibRickrollLockdown() {
  // Create overlay to block interaction
  const overlay = document.createElement('div');
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '9997',
    pointerEvents: 'none',
  });

  // Create the fake error button
  const fakeErrorBtn = document.createElement('button');
  fakeErrorBtn.textContent = 'An error occurred. Refresh page';
  Object.assign(fakeErrorBtn.style, {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '16px 24px',
    fontSize: '18px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 0 12px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    zIndex: '9998',
    opacity: '0',
    transition: 'opacity 0.5s ease-in-out',
  });

  // Add both after 3 seconds
  setTimeout(() => {
    document.body.appendChild(overlay);
    document.body.appendChild(fakeErrorBtn);
    requestAnimationFrame(() => {
      fakeErrorBtn.style.opacity = '1';
      overlay.style.pointerEvents = 'auto'; // start blocking interaction
    });
  }, 3000);

  // On button click, launch the Rickroll
  fakeErrorBtn.onclick = () => {
    // Remove button with fade-out
    fakeErrorBtn.style.opacity = '0';
    setTimeout(() => document.body.removeChild(fakeErrorBtn), 500);

    // Create Rickroll video
    const rickrollVideo = document.createElement('video');
    rickrollVideo.src = 'https://mothersday.veerbajaj.com/rickroll.mp4';
    rickrollVideo.autoplay = true;
    rickrollVideo.controls = false;

    Object.assign(rickrollVideo.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxWidth: '800px',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0,0,0,0.8)',
      zIndex: '9999',
      opacity: '0',
      transition: 'opacity 0.8s ease-in-out',
    });

    document.body.appendChild(rickrollVideo);
    requestAnimationFrame(() => {
      rickrollVideo.style.opacity = '1';
    });

    rickrollVideo.onended = () => {
      // Fade out and clean everything
      rickrollVideo.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(rickrollVideo);
        document.body.removeChild(overlay);
      }, 800);
    };
  };
})();
