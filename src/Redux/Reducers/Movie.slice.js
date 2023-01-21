import { createSlice } from "@reduxjs/toolkit";
export const Movie = createSlice({
    name: "Movie",
    initialState: {
      items: [
        {
          "id": "99",
          "name": "Vikram",
          "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
          "rating": 8.4,
          "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
          "trailer": "https://www.youtube.com/embed/OKBMCL-frPU",
          "price":"₹120",
          "certificate":"Tamil|U/A"
        },
        {
          "id": "100",
          "name": "RRR",
          "poster":
            "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
          "rating": 8.8,
          "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
          "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0",
          "price":"₹110",
          "certificate":"Telungu|U/A"
        },
        {
          "id": "101",
          "name": "Iron man 2",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
          "rating": 7,
          "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
          "trailer": "https://www.youtube.com/embed/wKtcmiifycU",
          "price":'₹120',
          "certificate":"English|U/A"
        },
        {
          "id": "102",
          "name": "No Country for Old Men",
          "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
          "rating": 8.1,
          "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
          "trailer": "https://www.youtube.com/embed/38A__WT3-o0",
          "price":'₹180',
          "certificate":"English|U"
        },
        {
          "id": "103",
          "name": "Jai Bhim",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
          "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
          "rating": 8.8,
          "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA",
          "price":'₹130',
          "certificate":"Tamil|U"
        },
        {
          "id": "104",
          "name": "The Avengers",
          "rating": 8,
          "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
          "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
          "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8",
          "price":'₹140',
          "certificate":"English|U/A"
        },
        {
          "id": "105",
          "name": "Interstellar",
          "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
          "rating": 8.6,
          "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
          "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E",
          "price":'₹100',
          "certificate":"English|U/"
        },
        {
          "id": "106",
          "name": "Baahubali",
          "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
          "rating": 8,
          "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
          "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI",
          "price":'₹190',
          "certificate":"Tamil|U/A"
        },
        {
          "id": "107",
          "name": "Ratatouille",
          "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
          "rating": 8,
          "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
          "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w",
          "price":'₹150',
          "certificate":"English|U"
        }
      ],
      isOrderPlaced: false,
    },
    reducers: {
      addItemToCart: (state, action) => {
        const Movie = action.payload;
        console.log(action);
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        // return state.items
        state.items.push(Movie);
      },
      checkIsAdded: (state, action) => {
        // const itemsCopy = [...state?.items];
        // console.log(action.payload);
        // return itemsCopy?.filter((item) => item._id === action.payload).length > 0
        //   ? true
        //   : false;
      },
      removeMovie: (state, action) => {
        state.value -= 1;
      },
      incrementByQuantity: (state, action) => {
        state.value -= 1;
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const {
    addItemToCart,
    checkIsAdded,
    removeMovie,
    incrementByQuantity,
  } = Movie.actions;
  
  export default Movie.reducer;