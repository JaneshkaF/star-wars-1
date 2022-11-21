const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			 baseUrl: 'https://www.swapi.tech/api/',
			 baseImgUrl: 'https://starwars-visualguide.com/assets/img/',
			 characters: [],
			 favorites: [],
			 delete: [],
			 singleCharacter: {}
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseUrl + 'people')
					.then(res => res.json())
					.then(data => {
						console.log(data),
						setStore({characters:data.results})})
					.catch(error => console.log(error))
				},
				addFavorite: (favorite) => {
					const newFavorites = getStore().favorites
					newFavorites.push(favorite)
					setStore({favorites: newFavorites})
				},
				deleteFavorite: (favorite) => {
					let deleteFave = getStore().favorites;
					let delet = deleteFave.filter((item)=>item !== favorite)
					setStore({favorites: delet})
				},
				getSingleCharacter: (characterUrl) => {
					fetch(characterUrl)
					.then(resp => resp.json())
					.then(data => setStore({singleCharacter: data.result}))
				}
		}
	};
};

export default getState;
