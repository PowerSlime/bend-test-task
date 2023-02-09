import { FC, useEffect } from 'react';

import areas from './files/areas.json';
import things from './files/things.json';

const upload = () => {
  return fetch('https://example.com/api/upload', {
    method: 'POST',
    body: JSON.stringify({ areas, things }),
  });
};

const FileUploader: FC = () => {
  useEffect(() => {
    upload().then(() => console.log('Files uploaded'));
  }, []);

  return <div>Files will be uploaded automatically</div>;
};

export default FileUploader;
