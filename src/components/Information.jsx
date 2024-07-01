import Word from './Word.jsx';
import AudioButton from './AudioButton.jsx';
import PartOfSpeech from './PartOfSpeech.jsx';

import iconNew from '../assets/icon-new-window.svg';

export default function Information({data, errors}) {
  const {word, phonetic, phonetics, meanings, sourceUrls} = data;

  const seenPartsOfSpeech = new Set();
  const filteredMeanings = meanings.filter(meaning => {
    if (
      ['noun', 'verb', 'adjective'].includes(meaning.partOfSpeech) &&
      !seenPartsOfSpeech.has(meaning.partOfSpeech)
    ) {
      seenPartsOfSpeech.add(meaning.partOfSpeech);
      return true;
    }
    return false;
  });

  const audioUrls = phonetics.map(entry => entry.audio).filter(url => url);

  return (
    <>
      <div className="information__container">
        {/* Header part */}
        <div className="information__container-top">
          <Word word={word} phonetic={phonetic} />
          {audioUrls?.length > 0 && (
            <AudioButton audioUrl={audioUrls[0] || audioUrls[1] || audioUrls[2]} />
          )}
        </div>
        <div className="information__container-bottom">
          {meanings.map(meaning => {
            return (
              <PartOfSpeech key={meaning.partOfSpeech} data={meaning} sourceUrls={sourceUrls} />
            );
          })}
          <div className="source__urls">
            <h4>Source</h4>
            <a href={sourceUrls[0]} target="__blank">
              {sourceUrls[0]}
              <span>
                <img src={iconNew} alt="icon" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
