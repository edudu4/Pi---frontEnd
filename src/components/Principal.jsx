    import '../Principal.css';
    import book1 from '../assets/book1.jpg';
    import book2 from '../assets/book2.jpg';
    import book3 from '../assets/book3.jpg';
    import book4 from '../assets/book4.jpg';
    import book5 from '../assets/book5.jpg';
    import { Link } from 'react-router-dom';
    import Image from './Images';


    export default function Principal() {

        const lista = [book1, book2, book3, book4, book5]

        return (
            <>

            <main className='flex text-center flex-col h-full mt-8'>
                <h2 className='font-bold'>Livros Mais Vendidos</h2>
                <hr className='Barra'/>                
                <div className="flex justify-center gap-5 mt-14">
                    {
                        lista.map((book, index) => (
                            <Link to={'/livroescolhido/' /*+ String(book).split('/').pop() */} > 
                                <Image book={book} index={index} />
                            </Link>
                        ))
                    }
                    {/* <Link to="/livroescolhido">
                        <img src={book1} alt="Book 1" />
                        <img src={book2} alt="Book 2" />
                        <img src={book3} alt="Book 3" />
                        <img src={book4} alt="Book 4" />
                        <img src={book5} alt="Book 5" />
                    </Link> */}
                </div>

            </main>
            </>
        )
    }