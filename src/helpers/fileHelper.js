export const fileUpload = async ( file ) => {

  if (!file) throw new Error('File not found!');

  const cloudUrl = 'https://api.cloudinary.com/v1_1/qbixmex/upload';

  const formData = new FormData();
 
  formData.append('upload_preset', 'react-journal-2022');
  formData.append('file', file);

  try {

    const response = await fetch( cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if ( !response.ok ) throw new Error('Could not upload file');

    const cloudResponse = await response.json();

    return cloudResponse.secure_url;

  } catch( error ) {

    console.error( 'error' );
    throw new Error( error.message );

  }

};