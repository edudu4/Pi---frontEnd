export default function Section(props) {
  return (
    <section className={props.className}>
      <h2>{props.titulo}</h2>
      {props.children}
    </section>
  );
}
