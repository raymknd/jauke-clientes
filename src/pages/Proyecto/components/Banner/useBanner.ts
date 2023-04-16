import { useEffect, useState } from "react";

/**
 *  * Hook encargado de precargar el banner de un proyecto (si no hay banner, tira un fallback)
 * @version 0.0.1
 * @author raymknd ~ Jauke.cl
 * @param {string | null} bg Path para el banner
 * @param {boolean | undefined} isLoading Estado de la carga del proyecto
 * @returns Objeto con el estado del background
 */
const useBanner = (bg: string | null, isLoading?: boolean) => {
    // Estados
    const [background, setBackground] = useState<null | string>(null);

    // Fallback background
    const fallbackBackground = "";

    useEffect(() => {
        if(background === null && !isLoading) {
            const backgroundToBeLoaded = bg ?? fallbackBackground;
            const image = new Image();

            image.onload = () => {
                setBackground(backgroundToBeLoaded);
            }
            image.onerror = () => {
                setBackground(fallbackBackground);
            }

            image.src = backgroundToBeLoaded;
        }
    }, [background])

    return background;
}

export default useBanner;