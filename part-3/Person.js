const Person = ({ age = null, name = null, hobbies = ["None"] }) => {
  let ageCheck;
  if (age < 18) {
    ageCheck = <h3 class="danger">You must be 18 to vote!</h3>;
  } else {
    ageCheck = <h3 class="success">Please go vote!</h3>;
  }

  let nameFormat;
  if (name.length > 8) {
    nameFormat = name.slice(0, 6);
  } else {
    nameFormat = name;
  }

  return (
    <div class="card">
      <p>Learn some information about this person.</p>
      <p class="info">Name: {nameFormat}</p>
      <p class="info">Age: {age}</p>
      {ageCheck}
      <div class="hobbies">
        <h4>Hobbies:</h4>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
