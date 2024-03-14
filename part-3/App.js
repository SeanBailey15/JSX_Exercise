const App = () => {
  return (
    <div>
      <Person
        name="Johnny"
        age={16}
        hobbies={["Skateboarding", "Video Games", "Flag Football"]}
      />
      <Person name="Nathaniel" age={17} hobbies={["Reading", "D&D"]} />
      <Person
        name="Michelle"
        age={27}
        hobbies={["Sewing", "Cosplay", "Comic Cons"]}
      />
      <Person
        name="Sean"
        age={37}
        hobbies={["Programming", "Drawing", "Making Music"]}
      />
      <Person name="Jen" age={18} />
    </div>
  );
};
