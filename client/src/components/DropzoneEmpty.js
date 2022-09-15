import React, { useState } from 'react';
import ReactDropzoneUploader from 'react-dropzone-uploader';
import ReactTooltip from 'react-tooltip';
// Styles
import * as styles from 'styles/modules/Dropzone.module.scss';
// SVG
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { InformationCircleIcon } from '@heroicons/react/outline';
import PageIcon from 'assets/svg/page-icon.inline.svg';

const INIT_STATUS = 'init';
const DropzoneEmpty = () => {
  const [status, setStatus] = useState(INIT_STATUS);

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

            {status === 'rejected_file_type' && (
              <>
                <ReactTooltip
                  className='custom-tooltip'
                  place='left'
                  effect='solid'
                />

                <ExclamationCircleIcon
                  className={styles.errorIndicator}
                  data-tip='You need to upload a resume'
                />
              </>
            )}
          </>
        )}
        PreviewComponent={props => <span />}
        maxFiles={1}
        accept='.docx,application/msword,.pdf'
      />
      <div className={styles.captionWrapper}>
        <InformationCircleIcon style={{ width: 16, height: 16 }} />
        <p>Word doc, docx or PDF Format</p>
      </div>
    </div>
  );
};

export default DropzoneEmpty;
