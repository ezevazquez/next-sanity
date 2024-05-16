import Image from 'next/image';

export default function AdminPage() {
    return (
        <div>
            <h1>Admin Page</h1>
            <Image
                src="frontend/public/feliz-jueves.gif" 
                alt="Descripción de la imagen"
                width={500} // Ajusta el ancho según sea necesario
                height={300} // Ajusta la altura según sea necesario
            />
        </div>
    );
}