import React, {useState, useEffect} from 'react';
import ReactDropzoneUploader from 'react-dropzone-uploader';
import ReactTooltip from 'react-tooltip';
// Styles
import * as styles from 'styles/modules/Dropzone.module.scss';
// SVG
import {ExclamationCircleIcon} from '@heroicons/react/solid';
import {InformationCircleIcon} from '@heroicons/react/outline';
import PageIcon from 'assets/svg/page-icon.inline.svg';

const INIT_STATUS = 'init';
const Dropzone = props => {
  const [status, setStatus] = useState(INIT_STATUS);
  console.log(status);

  const getUploadParams = () => {
    return {url: 'https://httpbin.org/post'};
  };

  const handleChangeStatus = ({meta}, status, remove) => {
    console.log(status, meta);
    setStatus(status);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  return (
    <div className={styles.wrapper}>
      <ReactDropzoneUploader
        classNames={{
          dropzone: [
            styles.dropzoneWrapper,
            status !== INIT_STATUS && status !== 'rejected_file_type'
              ? styles.interacted
              : '',
            status === 'rejected_file_type' ? styles.rejected : '',
          ].join(' '),
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
        PreviewComponent={props => <Preview {...props} setStatus={setStatus} />}
        SubmitButtonComponent={null}
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        accept='.docx,application/msword,.pdf'
        onSubmit={handleSubmit}
      />
      <div className={styles.captionWrapper}>
        <InformationCircleIcon style={{width: 16, height: 16}} />
        <p>Word doc, docx or PDF Format</p>
      </div>
    </div>
  );
};

function Preview({fileWithMeta, setStatus}) {
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState(() => {
    return {x: 0, y: 0};
  });
  const {name} = fileWithMeta.meta;

  function handleClick() {
    fileWithMeta.remove();
    setStatus(INIT_STATUS);
  }

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    var x = e.clientX - rect.left; // x position within the element.
    var y = e.clientY - rect.top; // y position within the element.
    setMousePos({x, y});
  }

  return (
    <div
      className={`${styles.previewWrapper} ${hovering ? styles.hovering : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}>
      <span className={styles.previewText}>
        <PageIcon /> {name}
      </span>
      {hovering && (
        <span
          className={styles.mouseText}
          style={{
            transform: `translate(${mousePos.x - 48}px, ${mousePos.y - 18}px`,
          }}>
          Delete
        </span>
      )}
    </div>
  );
}

export default Dropzone;
