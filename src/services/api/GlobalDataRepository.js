// dogsRepository.js
/*
export function getDogsData() {
    //https://api.coingecko.com/api/v3/ping
    let data = [
        { "id": 45, "firstname": "Pluto", "breed": "Saint-Hubert", "picture": "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" },
        { "id": 46, "firstname": "Rex", "breed": "Labrador", "picture": "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" }
    ];
    return data;
}
*/
export async function getGlobalData() {
    return fetch('https://api.coingecko.com/api/v3/global')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
            // Si vous souhaitez relancer l'erreur, vous pouvez le faire ici
            throw error;
        });
}



