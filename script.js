const container = document.querySelector('#artworks');
const url = 'https://www.artic.edu/iiif/2/';

// Make a request for a user with a given ID
axios.get('https://api.artic.edu/api/v1/artworks')
  .then(function (response) {
   for(artworks of response.data.data){
    renderArtwork(artworks);
    
   }
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  const renderArtwork = (artwork) => {

    console.log();
   let cards = document.createElement('div');
    cards.classList.add("card");
    cards.setAttribute('id','artwork_'+artworks.id);
    
    let title = document.createElement('a');
    title.innerHTML = artworks.title;
  
    //Details of each artwork
    let detailOrigin = document.createElement('h4');
    

    let artist = document.createElement('h3');
    artist.innerHTML = artworks.artist_title;

    let desc = document.createElement('p');
    desc.innerHTML = artworks.thumbnail.alt_text;

    let date = document.createElement('h4');
    date.innerHTML = artworks.date_display.replace('/',' - ') + ' · ' +     artworks.place_of_origin;

    let cs = document.createElement('p');
    cs.classList.add("cap");
    cs.innerHTML = artworks.classification_title;


      //This loads images(400px sized)
      let imageId = artworks.image_id;
      let fullUrl = url + imageId + '/full/300,/0/default.jpg';   

    
    
      let imgWrapper = document.createElement('div');
      imgWrapper.classList.add("wrapper");
      let image = document.createElement('div');
      
      image.innerHTML = ` <img src="${fullUrl}"> `;
      imgWrapper.appendChild(image);


    
    //Add each detail into the card
      cards.appendChild(imgWrapper);
      cards.appendChild(title);
      cards.appendChild(artist);
      cards.appendChild(date);
      //cards.appendChild(detailOrigin);
    cards.appendChild(cs);
      cards.appendChild(desc);
      
  
    //display every div in container
    
      container.appendChild(cards);

  } 
 
