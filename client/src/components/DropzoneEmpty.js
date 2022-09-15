import React, { useState } from 'react';
import ReactDropzoneUploader from 'react-dropzone-uploader';

// Styles
import * as styles from 'styles/modules/Dropzone.module.scss';

import { InformationCircleIcon } from '@heroicons/react/outline';

const DropzoneEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <ReactDropzoneUploader
        classNames={{
          dropzone: styles.dropzoneWrapper,
          dropzoneActive: styles.active,
          input: styles.input,
        }}
        inputContent={() => (
          <>
            <p className={styles.title}>
              Drag and drop your resume here*
              <br />
              <br />
              -or-
            </p>
            <div className={styles.hoverWrapper} />
          </>
        )}
        PreviewComponent={props => <span />}
        maxFiles={1}
        accept='.docx,application/msword,.pdf'
      />
      <div className={styles.captionWrapper}>
        <InformationCircleIcon style={{ width: 16, height: 16 }} />
        <p>Word doc, docx or PDF Format, Max file size 2Mb</p>
      </div>
    </div>
  );
};

export default DropzoneEmpty;
