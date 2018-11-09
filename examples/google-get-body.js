  const { Chromeless } = require ('../dist/src')

  const chromeless = new Chromeless({
    debug: true
  });

  chromeless
    .goto('https://www.google.com')
    .type('chromeless', 'input[name="q"]')
    .press(13)
    .wait('#resultStats')
    .htmlUrl()
    .then(file => {
      console.log(file);
      return chromeless.end();
    })
    .catch(console.error.bind(console));
