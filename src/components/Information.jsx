import audioIcon from '../assets/icon-play.svg';
import useSound from 'use-sound';

import Word from './Word.jsx';
import AudioButton from './AudioButton.jsx';

export default function Information({data, errors}) {
  const {word, phonetic, phonetics} = data;

  const audioUrls = phonetics?.map(entry => entry.audio).filter(url => url);

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
      </div>
    </>
  );
}
