import './Person.scss';

export const Person = ({ person }) => {
  const partnerSex = person.sex === 'f'
    ? 'husband'
    : 'wife';
  const personIsMarried = person.isMarried
    ? `${person.partnerName} is my ${partnerSex}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {personIsMarried}
      </p>
    </section>
  );
};
