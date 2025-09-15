async function getInfo(){
    try{
        const [users, albums, photos] = await Promise.allSettled([
            fetch("https://jsonplaceholder.typicode.com/users").then(users => users.json()),
            fetch("https://jsonplaceholder.typicode.com/albums").then(albums => albums.json()),
            fetch("https://jsonplaceholder.typicode.com/photos").then(photos => photos.json()),
        ]);

        users.value.forEach(user=>{
            const userAlbums = albums.value.reduce((result, album)=>{
                if (album.userId === user.id){
                    const photosCount = photos.value.filter(photo => album.id === photo.albumId).length;
                    result += `    ${album.title} (${photosCount} photos)\n`
                }
                return result;
            },"\n");
            user["albums"] = userAlbums;
        });

        users.value.forEach((user) => {
            console.log("name: ", user.name);
            console.log("email: ", user.email);
            console.log("phone: ", user.phone);
            console.log("company: ", user.company.name);
            console.log("albums: ", user.albums);
        });
        
    } catch(error){
        console.log(error.message);
    }
}

getInfo()
