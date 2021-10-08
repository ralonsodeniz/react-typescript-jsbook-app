export const html = `
  <html lang='en'>
    <head>
      <title>preview</title>
      <style>
        html {
          background-color: white;
        }
      </style>
    </head>
    <body>
      <div id='root' />
      <script>
        const handleError = error => {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red"><h4>Runtime Error</h4>'+error+'</div>';
          console.error(error);
        }
        window.addEventListener('error',(event) => {
          event.preventDefault();
          handleError(event.error);
        });
        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (error) {
            handleError(error);
          }
        }, false)
      </script>
    </body>
  </html>
  `;
