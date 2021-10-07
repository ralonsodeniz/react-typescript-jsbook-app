export const html = `
  <html lang='en'>
    <head>
      <title>preview</title>
    </head>
    <body>
      <div id='root' />
      <script>
        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (error) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red"><h4>Runtime Error</h4>'+error+'</div>';
            console.error(error);
          }
        }, false)
      </script>
    </body>
  </html>
  `;
