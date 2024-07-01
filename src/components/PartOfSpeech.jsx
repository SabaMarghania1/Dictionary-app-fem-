export default function PartOfSpeech({data, sourceUrls}) {
  console.log(data);
  return (
    <div className="part-of-speech">
      <header className="part-of-speech__header">
        <h3 className="speech__header">{data.partOfSpeech}</h3>
        <div className="line"></div>
      </header>
      <section className="part-of-speech__content">
        <p className="meaning-title">Meaning</p>

        <ul className="speech__list">
          {data.definitions.map(definition => {
            console.log(definition);
            return (
              <>
                <li key={definition.definition} className="speech__list-item">
                  {definition.definition}
                  <p key={definition.example} className="example">
                    “{definition.example}”
                  </p>
                </li>
              </>
            );
          })}
        </ul>
        <div className="synonyms">
          {data.synonyms.length > 0 && (
            <>
              <p className="synonyms__title">Synonyms</p>
              <ul className="synonyms__list">
                {data.synonyms.map(synonym => {
                  return (
                    <li key={synonym} className="synonyms__list-item">
                      {synonym}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
