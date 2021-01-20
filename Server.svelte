<script>
  const time = new Date().toLocaleTimeString()
  import html from './static.html'
</script>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>
	<title>sapp</title>
  <link rel='stylesheet' href='/global.css'>
	<script defer src='/client.js'></script>
</head>

<body>
  {@html html.render().html}
  <p>
    This paragraph was rendered on the server at <code>{time}</code> by the script <code>{__filename}</code>. The script does it every time this page is requested.
  </p>
</body>

</html>
