import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import validation from 'libs/validation';
// Components
import Blob from 'components/Blob';
import CircleButton from 'components/CircleButton';
import Container from 'components/Container';
import Dropzone from 'components/Dropzone';
import DropzoneEmpty from 'components/DropzoneEmpty';
import Input from 'components/Input';
import Layout from 'components/Layout';
import Space from 'components/Space';
import TabSelector from 'components/TabSelector';
import axios from 'axios';
import { SEO } from '../components/Seo';

// Styles
import * as styles from 'styles/modules/pages/SubmitResume.module.scss';

const SubmitResume = props => {
  const contactMethodData = [
    { id: 'phone', value: 'Phone', label: 'Phone' },
    { id: 'email', value: 'Email', label: 'Email', defaultChecked: true },
    { id: 'either', value: 'Either', label: 'Either' },
  ];

  const getDefaultContactMethod = () =>
    contactMethodData.find(item => item.defaultChecked).id;

  const [contactMethod, setContactMethod] = useState(getDefaultContactMethod);
  const [file, setFile] = useState(null);
  const [empty, setEmpty] = useState(null);
  const [message, setMessage] = useState('Submit');
  const [showDropZone, setShowDropZone] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onSubmit' });

  /**
   * Change message after 5 seconds
   */
  useEffect(() => {
    if (message === 'Success' || message === 'Error') {
      setTimeout(() => {
        setMessage('Submit');
      }, 5000);
    }
  }, [message]);

  /**
   * Refresh dropZone after 1 seconds
   */
  useEffect(() => {
    if (!showDropZone) {
      setTimeout(() => {
        setShowDropZone(true);
      }, 100);
    }
  }, [showDropZone]);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    setMessage('Sending...');

    const formData = new FormData();
    formData.append('files', file);
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(process.env.GATSBY_GET_FORM_RESUME, formData, {
        headers: { Accept: 'application/json' },
      })
      .then(function (response) {
        setMessage('Success');
      })
      .catch(function (error) {
        console.log(error);
        alert(`Upss...!, Data has not been recorded`);
        setMessage('Error');
      })
      .finally(() => {
        resetForm();
      });
  };

  const onError = (errors, e) => console.log('Errors: ', errors);

  /**
   * Clean fileds form
   */
  const resetForm = () => {
    reset({
      firstName: '',
      lastName: '',
      orgName: '',
      email: '',
      phone: '',
      theNeeds: '',
    });
    setContactMethod('email');
    setFile(null);
    setShowDropZone(false);
  };

  return (
    <Layout>
      <main className={styles.main}>
        <Container>
          <section className={styles.hero}>
            <Space unit={40} />
            <h1>Let's get started finding your next opportunity</h1>
            <Space unit={30} />
          </section>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
          >
            <div className={styles.formItem}>
              <h3 className={styles.formQuestion}>What's your name?</h3>
              <div className={styles.inputWrapper}>
                <Input
                  wrapperClass={styles.input}
                  name='firstName'
                  id='firstName'
                  type='text'
                  placeholder='First name*'
                  errors={errors}
                  register={register}
                  validation={validation.generalRequired}
                />
                <Input
                  wrapperClass={styles.input}
                  name='lastName'
                  id='lastName'
                  type='text'
                  placeholder='Last name*'
                  errors={errors}
                  register={register}
                  validation={validation.generalRequired}
                />
              </div>
            </div>

            <div className={styles.formItem}>
              <h3 className={styles.formQuestion}>
                How would you like us to contact you?
              </h3>
              <div className={styles.inputWrapper}>
                <TabSelector
                  name='contactMethod'
                  register={register}
                  data={contactMethodData}
                  onChange={setContactMethod}
                />
              </div>
              <Space unit={16} />
              <div className={styles.inputWrapper}>
                {(contactMethod === 'email' || contactMethod === 'either') && (
                  <Input
                    wrapperClass={styles.input}
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email*'
                    errors={errors}
                    register={register}
                    validation={validation.email}
                  />
                )}
                {(contactMethod === 'phone' || contactMethod === 'either') && (
                  <Input
                    wrapperClass={styles.input}
                    name='phone'
                    id='phone'
                    type='tel'
                    placeholder='Phone*'
                    errors={errors}
                    register={register}
                    validation={validation.phone}
                  />
                )}
              </div>
            </div>

            <div className={styles.formItem}>
              <h3 className={styles.formQuestion}>Upload your resume</h3>
              {showDropZone ? (
                <Dropzone setFile={setFile} />
              ) : (
                <DropzoneEmpty />
              )}
              <Blob className={styles.blob} />
            </div>

            <CircleButton
              ctaText={`${message}`}
              showArrow={true}
              disabled={message !== 'Submit'}
            />

            <Space unit={24} />
          </form>
        </Container>
      </main>
    </Layout>
  );
};

SubmitResume.propTypes = {};

export default SubmitResume;

export const Head = () => <SEO title='Resume - JSB Partners' />;
