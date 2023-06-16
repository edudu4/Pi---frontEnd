export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white fixed bottom-0 left-0 right-0 py-1 px-4 shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center">
        <p className="border-b border-white pb-2 sm:border-0">
          Eduardo Alves - Matricula: 2014290030
        </p>
        <p className="border-b border-white pb-2 sm:border-0">
          Julio Stohler - Matrícula: 2214290014
        </p>
        <p className="border-b border-white pb-2 sm:border-0">
          Luís Nascimento - Matrícula: 2214290100
        </p>
        <p className="sm:col-span-4 md:col-span-1 md:text-right">
          Direitos Autoriais 2023.
        </p>
      </div>
    </footer>
  );
}
