import { useEffect, useState,useContext } from 'react';
import { StepperContext } from '../../../Context/StepperContext';


function MultiFileUpload(props) {
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const {userData,setUserData} = useContext(StepperContext);


  const uploadHandler = (e) => {
      
      const imageUploads = []
      const { files } = e.target

      for (let i = 0; i < files.length; i++) {
        const file = files[i]; // OR const file = files.item(i);
        // console.log(file.size,file.width,'HBNJKJIUJHGBNJKIUHJGBNJHUGBV')
        // let img = new Image()

        // img.src = window.URL.createObjectURL(file)
        // img.onload = () => {
        //   console.log(file.size,img.width,img.height)
        //   }                
      
        imageUploads.push(file)
      }

      setUserData({...userData,"Preview":imageUploads});

      if (imageUploads.length) {
          setImageFiles(imageUploads)
          return;
      }
  };

  useEffect(() => {
      const fileReaders = [];
      let isCancel = false;
      if (imageFiles.length) {
        const promises = imageFiles.map(file => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReaders.push(fileReader);
            fileReader.onload = (e) => {
              const { result } = e.target;
              if (result) {
                resolve(result);
              }
            }
            fileReader.onabort = () => {
              reject(new Error("File reading aborted"));
            }
            fileReader.onerror = () => {
              reject(new Error("Failed to read file"));
            }
            fileReader.readAsDataURL(file);
          })
        });
        Promise
          .all(promises)
          .then(images => {
            if (!isCancel) {
              setImages(images);
              
            }
          })
          .catch(reason => {
            console.log(reason);
          });
      };
      return () => {
        isCancel = true;
        fileReaders.forEach(fileReader => {
          if (fileReader.readyState === 1) {
            fileReader.abort()
          }
        })
      }
  }, [imageFiles]);

  
  return (
      <div>

          <div className="flex flex-col  w-full">
              <label className="mb-2 text-left font-medium text-[#fdae5c] text-base dark:text-gray-300" htmlFor="property_type">Preview Images</label>

                  <label id='MultipleFile' htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  
                      <input accept="image/*" id="dropzone-file" multiple onChange={uploadHandler} type="file" className="hidden" />

                      {
                      images.length > 0 ?
                      <div className='grid gap-2 grid-cols-2 items-center justify-center sm:grid-cols-4 relative w-4/5 bg-red-500 '>
                          {
                          images.map((image, idx) => {
                              return <p key={idx}> <img className='m-auto w-20' src={image} alt="" /> </p>
                          })
                          }
                      </div> : 
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG(MAX. 800x400px)</p>
                      </div>
                  }
              </label>
          </div> 
          
      </div>
  );
}

export default MultiFileUpload;