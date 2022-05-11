import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import validation from 'libs/validation';
// Components
import Blob from 'components/Blob';
import CircleButton from 'components/CircleButton';
import Container from 'components/Container';
import Dropzone from 'components/Dropzone';
import Input from 'components/Input';
import Layout from 'components/Layout';
import Space from 'components/Space';
import TabSelector from 'components/TabSelector';
// Styles
import * as styles from 'styles/modules/pages/SubmitResume.module.scss';

const SubmitResume = props => {
  const contactMethodData = [
    { id: 'phone', value: 'Phone', label: 'Phone' },
    { id: 'email', value: 'Email', label: 'Email', defaultChecked: true },
    { id: 'either', value: 'Either', label: 'Either' },
  ];
  const employmentStatusData = [
    { id: 'employed', value: 'Employed', label: 'Yes' },
    {
      id: 'unemployed',
      value: 'Unemployed',
      label: 'No',
      defaultChecked: true,
    },
  ];

  const getDefaultContactMethod = () =>
    contactMethodData.find(item => item.defaultChecked).id;
  const getDefaultEmploymentStatus = () =>
    employmentStatusData.find(item => item.defaultChecked).id;

  const [contactMethod, setContactMethod] = useState(getDefaultContactMethod);
  const [employmentStatus, setEmploymentStatus] = useState(
    getDefaultEmploymentStatus
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data, e) => console.log('Submitting: ', data);
  const onError = (errors, e) => console.log('Errors: ', errors);

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
            noValidate>
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
              <h3 className={styles.formQuestion}>
                Are you currently employed?
              </h3>
              <div className={styles.inputWrapper}>
                <TabSelector
                  name='employmentStatus'
                  register={register}
                  data={employmentStatusData}
                  onChange={setEmploymentStatus}
                />
              </div>
              <Space unit={16} />
              <div className={styles.inputWrapper}>
                {employmentStatus === 'employed' && (
                  <>
                    <Input
                      wrapperClass={styles.input}
                      name='currentCompany'
                      id='currentCompany'
                      type='text'
                      placeholder='Current Company*'
                      errors={errors}
                      register={register}
                      validation={validation.generalRequired}
                    />
                    <Input
                      wrapperClass={styles.input}
                      name='currentPosition'
                      id='currentPosition'
                      type='text'
                      placeholder='Current Position*'
                      errors={errors}
                      register={register}
                      validation={validation.generalRequired}
                    />
                  </>
                )}
              </div>
            </div>
            <div className={styles.formItem}>
              <h3 className={styles.formQuestion}>Upload your resume</h3>
              <Dropzone />
              <Blob className={styles.blob} />
            </div>

            <CircleButton ctaText='Submit' showArrow={true} />

            <Space unit={24} />
          </form>
        </Container>
      </main>
    </Layout>
  );
};

SubmitResume.propTypes = {};

export default SubmitResume;
