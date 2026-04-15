type LanguageTexts = {
	nav: {
		home: string;
		cars: string;
		phones: string;
		laptops: string;
		watches: string;
	};
	listView: {
		title: string;
		createNewLink: string;
		listTitle: string;
		tableTitle: string;
		previous: string;
		next: string;
		pageTitle: string;
	};
	model: {
		cars: {
			image: string;
			id: string;
			name: string;
			brand: string;
			power: string;
		};
		phones: {
			id: string;
			name: string;
			brand: string;
			power: string;
		};
		laptops: {
			id: string;
			name: string;
			brand: string;
			power: string;
		};
		watches: {
			id: string;
			name: string;
			brand: string;
			power: string;
		};
	};
	form: {
		submitCreate: string;
		submitUpdate: string;
	};
};

type AllLanguageTexts = {
	cs: LanguageTexts;
	en: LanguageTexts;
};

export const TEXTS: AllLanguageTexts = {
	cs: {
		nav: {
			home: 'Domů',
			cars: 'Auto',
			phones: 'Telefony',
			laptops: 'Notebooky',
			watches: 'Hodinky'
		},
		listView: {
			title: 'Všechny auta',
			createNewLink: 'Vytvořit nové auto',
			listTitle: 'Seznam',
			tableTitle: 'Tabulka',
			previous: 'Předchozí',
			next: 'Další',
			pageTitle: 'Stránka'
		},
		model: {
			cars: {
				id: 'Id',
				name: 'Auto',
				brand: 'Značka',
				power: 'Výkon',
				image: 'Obrázek'
			},
			phones: {
				id: 'Id',
				name: '',
				brand: '',
				power: ''
			},
			laptops: {
				id: 'Id',
				name: '',
				brand: '',
				power: ''
			},
			watches: {
				id: 'Id',
				name: '',
				brand: '',
				power: ''
			}
		},

		form: {
			submitCreate: 'Vytvořit',
			submitUpdate: 'Poslat'
		}
	},
	en: {
		nav: {
			home: 'Home',
			cars: 'Cars',
			phones: 'Phones',
			laptops: 'Laptops',
			watches: 'Watches'
		},
		listView: {
			title: 'All cars',
			createNewLink: 'Create new car',
			listTitle: 'List',
			tableTitle: 'Table',
			previous: 'Previous',
			next: 'Next',
			pageTitle: 'Page'
		},
		model: {
			cars: {
				id: 'Id',
				name: 'Name',
				brand: 'Brand',
				power: 'Power',
				image: 'Image'
			},
			phones: {
				id: 'Id',
				name: 'Name',
				brand: 'Brand',
				power: 'Power'
			},
			laptops: {
				id: 'Id',
				name: 'Name',
				brand: 'Brand',
				power: 'Power'
			},
			watches: {
				id: 'Id',
				name: 'Name',
				brand: 'Brand',
				power: 'Power'
			}
		},

		form: {
			submitCreate: 'Create',
			submitUpdate: 'Update'
		}
	}
};

export const DEFAULT_LANG = 'en';
