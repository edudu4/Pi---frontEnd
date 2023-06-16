export default function Image(props) {
  return <img className="w-36" src={props.book} alt={`book ${props.index}`} />;
}
