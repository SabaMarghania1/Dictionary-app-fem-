export default function NotFound({error}) {
  console.log(error);
  return (
    <div className="error__screen">
      <p className="emoji">😕</p>
      <h3 className="error__title">{error.title}</h3>
      <p className="error__message">
        {error.message} {error.resolution}
      </p>
    </div>
  );
}
