import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Form, useFormik, FormikProvider } from 'formik';
import { addNewJet } from '../../redux/jets/jetAPI';
import { addJet } from '../../redux/jets/jetSlice';

const easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const AddJetForm = () => {
  const dispatch = useDispatch();

  const jetSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Name required'),
    description: Yup.string()
      .min(20, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Description required'),
    size: Yup.string().required('Size is required'),
    category: Yup.string().required('category is required'),
    pricePerDay: Yup.number().min(1).required('Price per day is required'),
    financeFee: Yup.number().min(1).required('Finance fee is required'),
    image: Yup.mixed().required('Jet image is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      description: '',
      size: '',
      pricePerDay: '',
      financeFee: '',
      image: '',
    },
    validationSchema: jetSchema,
    onSubmit: async (values, { resetForm }) => {
      const data = new FormData();
      data.append('name', values.name);
      data.append('category', values.category);
      data.append('size', values.size);
      data.append('description', values.description);
      data.append('pricePerDay', values.pricePerDay);
      data.append('financeFee', values.financeFee);
      data.append('image', values.image);

      const res = await addNewJet(data);
      if (res.jet !== null) {
        dispatch(addJet(res.jet));
        toast.success('Jet Added Successfuly');
      } else {
        toast.error('Jet is not saved!. Something is wrong');
      }
      resetForm({ values: '' });
    },
  });

  const {
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box
            component={motion.div}
            animate={{
              transition: {
                staggerChildren: 0.55,
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={animate}
            >
              <TextField
                variant="standard"
                type="text"
                label="Jet name"
                {...getFieldProps('name')}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                variant="standard"
                type="text"
                label="Jet Description"
                {...getFieldProps('description')}
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
              />
              <TextField
                variant="standard"
                type="text"
                label="Jet Size"
                {...getFieldProps('size')}
                error={Boolean(touched.size && errors.size)}
                helperText={touched.size && errors.size}
              />

              <TextField
                variant="standard"
                type="text"
                label="Jet Category"
                {...getFieldProps('category')}
                error={Boolean(touched.category && errors.category)}
                helperText={touched.category && errors.category}
              />

              <TextField
                variant="standard"
                type="number"
                label="Price per Day"
                {...getFieldProps('pricePerDay')}
                error={Boolean(touched.pricePerDay && errors.pricePerDay)}
                helperText={touched.pricePerDay && errors.pricePerDay}
              />
              <TextField
                variant="standard"
                type="number"
                label="Finance Fee"
                {...getFieldProps('financeFee')}
                error={Boolean(touched.financeFee && errors.financeFee)}
                helperText={touched.financeFee && errors.financeFee}
              />
              <TextField
                variant="standard"
                type="file"
                onChange={(e) => {
                  setFieldValue('image', e.target.files[0]);
                }}
                label="Upload image"
                error={Boolean(touched.image && errors.image)}
                helperText={touched.image && errors.image}
              />
            </Box>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <Button
                sx={{ mt: 5, fontSize: 15 }}
                fullWidth
                size="large"
                type="submit"
                color="success"
                variant="contained"
                loading={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Jet'}
              </Button>
            </Box>
          </Box>
        </Form>
      </FormikProvider>
    </>
  );
};

export default AddJetForm;
