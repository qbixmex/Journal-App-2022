/**
 * Upload image to Cloudinary
 * @param {File} file Image file
 * @returns {string} Image Url
 */
export const fileUpload = async ( file ) => {

  if (!file) return null;

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

    throw new Error( error.message );

  }

};