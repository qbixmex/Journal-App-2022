import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileHelper';

cloudinary.config({
  cloud_name: 'qbixmex',
  api_key: '619295395553212',
  api_secret: 'mam52EHjtouSDM6KMViuXPz8yGY',
  secure: true,
});

describe('Tests on FileHelper.js', () => {
  test('Should upload file to cloudinary', async () => {

    const imageUrl = 'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg';

    const response = await fetch( imageUrl );
    const blob = await response.blob();
    const file = new File([blob], 'facebook-logo.jpg');

    const url = await fileUpload( file );
    expect( typeof url ).toBe('string');

    const segments = url.split('/');

    const imageId = segments[ segments.length - 1 ].replace('.svg', '');

    const cloudinaryResponse = await cloudinary.api.delete_resources(['journal/' + imageId], {
      resource_type: 'image'
    });

    expect(cloudinaryResponse.deleted['journal/' + imageId]).toBe('deleted');

  });

  test('Should return null', async () => {

    const file = new File([], 'facebook-logo.jpg');
    const url = await fileUpload( file );
    expect( url ).toBe('Could not upload file');

  });
});
