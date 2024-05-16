// app/feliz-jueves/page.tsx

import Image from 'next/image';
import React from 'react';

export default function FelizJuevesPage() {
    return (
        <div>
            <Image
                src="/feliz-jueves.gif" // Ruta relativa a la carpeta public
                alt="Feliz Jueves"
                width={320} // Ajusta el ancho según sea necesario
                height={320} // Ajusta la altura según sea necesario
            />
        </div>
    );
}
