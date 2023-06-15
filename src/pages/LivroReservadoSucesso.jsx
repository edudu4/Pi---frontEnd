import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LivroReservadoSucesso() {
  return (
    <div className="flex flex-col items-center justify-center mt-44">
      <FontAwesomeIcon
        icon="check-circle"
        className="text-green-600 text-9xl mb-4"
      />
      <Section titulo="Sucesso!" className="text-center text-4xl mb-8">
        <p>Livro reservado com sucesso</p>
      </Section>
    </div>
  );
}
