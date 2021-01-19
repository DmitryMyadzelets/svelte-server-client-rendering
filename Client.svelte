<script>
  let time
  const update = () => time = new Date().toLocaleTimeString()

  update()
  setInterval(update, 1000)
</script>

<p>
  This paragraph was rendered in the browser at <code>{update()}</code> by the client's script. The same script updates the current time value: <code>{time}</code>.
</p>
