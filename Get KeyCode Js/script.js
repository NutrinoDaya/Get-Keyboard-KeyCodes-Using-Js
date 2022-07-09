const Enter = document.getElementById('Enter')

window.addEventListener('keydown', (e) => {
  Enter.innerHTML = `
  <div class="name">By Mohammad Dayarneh ~.~ </div>

  <div class="key">
  ${e.key === ' ' ? 'Space' : e.key} 
  <small>e Key </small>
</div>

<div class="key">
  ${e.keyCode}
  <small>KeyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>Key</small>
</div>
  `
})