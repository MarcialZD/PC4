class Servicios {
    fetchData(callback) {
        const apiurl = 'app/json/Entrenadores.json';        
        fetch(apiurl)
            .then(response => response.json())
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching filtered data:', error);
            });        
    }
}

export default Servicios;