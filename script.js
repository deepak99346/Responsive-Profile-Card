
    // ------------------------------
    // Small interaction: Follow toggle
    // ------------------------------
    (function () {
      const btn = document.getElementById('followBtn');
      const followersEl = document.getElementById('followersValue');
      const format = n => n.toLocaleString(undefined);

      // basic state
      let isFollowing = false;
      let followers = 1248;

      const render = () => {
        btn.setAttribute('aria-pressed', String(isFollowing));
        btn.textContent = isFollowing ? 'Following' : 'Follow';
        followersEl.textContent = format(followers);
        btn.style.setProperty('--btn-bg', isFollowing ? 'var(--color-success)' : 'var(--color-accent)');
        btn.style.setProperty('--btn-bg-press', isFollowing ? '#11a564' : 'var(--color-accent-press)');
      };

      btn.addEventListener('click', () => {
        isFollowing = !isFollowing;
        followers += isFollowing ? 1 : -1;
        render();
      });

      // keyboard affordance: toggle with Enter/Space when focused
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });

      render();
    })();
