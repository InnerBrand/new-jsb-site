import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import validation from '../libs/validation';
// Components
import Container from '../components/Container';
import Input from '../components/Input';
import Layout from '../components/Layout';
// Styles
import * as styles from '../styles/modules/pages/SubmitResume.module.scss';
// SVG
import FancyArrowRight from '../images/svg/fancy-arrow-right.inline.svg';

const SubmitResume = props => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data, e) => console.log('Submitting: ', data);
  const onError = (errors, e) => console.log('Errors: ', errors);

  return (
    <Layout header={false}>
      <Container>
        <section className={styles.hero}>
          <h1>Let's get started, together</h1>
        </section>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit, onError)}>
          <h3 className={styles.formQuestion}>What's your name</h3>
          <div className={styles.multiInputRow}>
            <Input
              wrapperClass={styles.input}
              name='firstName'
              id='firstName'
              type='text'
              placeholder='First name'
              errors={errors}
              register={register}
              validation={validation.generalRequired}
            />
            <Input
              wrapperClass={styles.input}
              name='lastName'
              id='lastName'
              type='text'
              placeholder='Last name'
              errors={errors}
              register={register}
              validation={validation.generalRequired}
            />
          </div>

          <button className={styles.formSubmitBtn} type='submit'>
            <span>
              Submit <FancyArrowRight />
            </span>
          </button>
        </form>
      </Container>
    </Layout>
  );
};

SubmitResume.propTypes = {};

export default SubmitResume;
