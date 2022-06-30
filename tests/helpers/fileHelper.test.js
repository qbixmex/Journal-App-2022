import { fileUpload } from '../../src/helpers/fileHelper';

describe('Tests on FileHelper.js', () => {
  test('Should upload file to cloudinary', async () => {

    const imageUrl = 'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg';

    const response = await fetch( imageUrl );
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg');

    const url = await fileUpload( file );
    expect( typeof url ).toBe('string');

  });
});
