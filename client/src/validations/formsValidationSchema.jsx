import * as yup from 'yup';

const formsValidationSchema = yup.object().shape({
    title: yup.string().required("Añade un titulo"),
    content: yup.string().required("Añade el cuerpo de tu noticia"),
    date: yup.date().required("Selecciona una fecha"),
    image: yup.string().required("Hace falta un link").matches(/^(ftp|http|https):\/\/[^ "]+$/, "Sólo es válido formato http")});

export default formsValidationSchema;