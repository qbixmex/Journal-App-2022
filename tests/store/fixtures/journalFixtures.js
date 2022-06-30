export const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
};

export const note1 = {
  id: 'abc123',
  title: 'Real Madrid Wins UEFA Champions League',
  body: 'Real Madrid wins the most importan title in UEFA Europe Confederation ...',
  date: 1656445396455,
  imageUrls: [
    'https://res.cloudinary.com/journal/123.jpg',
    'https://res.cloudinary.com/journal/456.jpg',
    'https://res.cloudinary.com/journal/789.jpg',
  ],
};

export const note2 = {
  id: 'cde456',
  title: 'Atlas BiChampion 2022',
  body: 'Atlas wins for second year mexican football tournament ...',
  date: 1656440197353,
  imageUrls: [
    'https://res.cloudinary.com/journal/123.jpg',
    'https://res.cloudinary.com/journal/456.jpg',
    'https://res.cloudinary.com/journal/789.jpg',
  ],
};

export const note3 = {
  id: 'fgh789',
  title: 'Shingeki no kyojin',
  body: 'Final season of this amazing anime serie ...',
  date: 1656440197358,
};

export const editingState = {
  isSaving: false,
  messageSaved: '',
  notes: [note1],
  active: note1,
};

export const demoEmptyNote = {
  title: '',
  body: '',
  date: new Date().getTime(),
};

export const imageUrls = [
  'https://res.cloudinary.com/journal/abc.jpg',
  'https://res.cloudinary.com/journal/def.jpg',
  'https://res.cloudinary.com/journal/ghi.jpg',
];
