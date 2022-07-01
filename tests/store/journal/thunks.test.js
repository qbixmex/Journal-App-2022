import { doc } from "firebase/firestore/lite";
import { fileUpload, loadNotes } from "../../../src/helpers";
import {
  addNewEmptyNote, savingNewNote, setActiveNote, setNotes,
  setSaving, updateNote, setPhotosToActiveNote, deleteNoteById
} from "../../../src/store/journal/JournalSlice";
import {
  startNewNote, startLoadingNotes, startSaveNote, startUploadingFiles,
  startDeletingNote
} from "../../../src/store/journal/thunks";
import { note1, note2 } from "../fixtures/journalFixtures";

jest.mock('firebase/firestore/lite');
jest.mock('../../../src/helpers');

describe('Tests on Journal Thunks', () => {

  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks() );

  test('startNewNote should create a new note', async () => {    

    getState.mockReturnValue({ auth: { uid: 'TEST-UID' } });

    const newNote = {
      id: 'xw224478',
      title: '',
      body: '',
    };

    doc.mockReturnValue({ id: newNote.id });

    await startNewNote()( dispatch, getState );

    expect( dispatch ).toHaveBeenCalledWith(savingNewNote() );
    expect( dispatch ).toHaveBeenCalledWith(addNewEmptyNote({
      ...newNote,
      date: expect.any( Number )
    }));
    expect( dispatch ).toHaveBeenCalledWith(setActiveNote({
      ...newNote,
      date: expect.any( Number )
    }));

  });

  test('startLoadingNotes should loading notes', async () => {

    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid: 'TEST-UID' } });

    loadNotes.mockResolvedValue([note1, note2]);

    startLoadingNotes()(dispatch, getState);

    await loadNotes( uid );

    expect( dispatch ).toHaveBeenCalledWith( setNotes([ note1, note2 ]) );

  });

  test('startSaveNote should save a new note', async () => {

    const uid = 'TEST-UID';
    getState.mockReturnValue({
      auth: { uid },
      journal: { active: note1 }
    });
    
    await startSaveNote()(dispatch, getState);

    expect( dispatch ).toHaveBeenCalledWith(setSaving());
    expect( dispatch ).toHaveBeenCalledWith(updateNote({
      ...note1,
      date: expect.any( Number )
    }));

  });

  test('startUploadingFiles should simulate loading files to cloudinary', async () => {

    const imageUrlMock = 'https://res.cloudinary.com/journal/image.jpg';

    fileUpload.mockResolvedValue(imageUrlMock);

    await startUploadingFiles([ 'image1.jpg', 'image2.jpg' ])( dispatch );

    expect( dispatch ).toHaveBeenCalledWith(setSaving());
    expect( dispatch ).toHaveBeenCalledWith(setPhotosToActiveNote([
      imageUrlMock,
      imageUrlMock,
    ]));
    
  });

  test('startDeletingNote should delete a note', async () => {

    const noteId = 'abc123';

    getState.mockReturnValue({
      auth: { uid: 'TEST-UID' },
      journal: { active: { id: noteId }},
    });

    await startDeletingNote()( dispatch, getState );

    expect(dispatch).toHaveBeenCalledWith( deleteNoteById( noteId ) );

  });
  
});