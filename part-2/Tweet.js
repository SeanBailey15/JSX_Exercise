const Tweet = ({
  username = "Username",
  name = "Name",
  date = new Date().toLocaleString(),
  message = "Message",
}) => {
  return (
    <div class="tweet">
      <h4>User: {username}</h4>
      <h4>Name: {name}</h4>
      <h4>Posted On: {date}</h4>
      <p class="msg">{message}</p>
      <br></br>
    </div>
  );
};
