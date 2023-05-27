(() => {
    document 
    .querySelector('.subscribe-form')
    .addEventListener('submit', e => {
      e.preventDefault();

        new FormData(e.currentTarget).forEach((value, name) => 
        console.log(`${name}: ${value}`),
        );
    });
})();