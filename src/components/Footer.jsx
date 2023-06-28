import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white fixed bottom-0 left-0 right-0 py-4 px-4 shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center">
        <div className="border-b border-white pb-2 sm:border-0">
          <FontAwesomeIcon
            icon={faUser}
            className="inline-block text-lg text-white mr-2" />
          <span className="text-sm text-white font-bold">
            Eduardo Alves - Matrícula: 2014290030
          </span>
        </div>
        <div className="border-b border-white pb-2 sm:border-0">
          <FontAwesomeIcon
            icon={faUser}
            className="inline-block text-lg text-white mr-2" />
          <span className="text-sm text-white font-bold">
            Julio Stohler - Matrícula: 2214290014
          </span>
        </div>
        <div className="border-b border-white pb-2 sm:border-0">
          <FontAwesomeIcon
            icon={faUser}
            className="inline-block text-lg text-white mr-2" />
          <span className="text-sm text-white font-bold">
            Luís Nascimento - Matrícula: 2214290100
          </span>
        </div>
        <div className="sm:col-span-4 md:col-span-1 md:text-right">
          <FontAwesomeIcon
            icon={faCopy}
            className="inline-block text-lg text-white mr-2" />
          <span className="text-sm font-bold italic">Direitos Autorais 2023</span>
        </div>
      </div>
    </footer>
  )
}