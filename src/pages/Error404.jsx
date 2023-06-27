import Section from "../components/Section";

export default function Error404() {
    return (
        <Section titulo="ERROR 404" style="flex justify-center items-center h-screen bg-gray-100">
            <p className="text-xl text-gray-700">Página não encontrada :/</p>
        </Section>
    );
}