import * as yup from "yup";


export const BookSchema =yup.object({
    name:yup.string().required('please specify boook name'),
    Author:yup.string().required(
        "please specify author"),
    Language:yup.string().required("please specify language "),
    Pages:yup.string().required("please specify no of pages"),
    Published:yup.string().required("please specify published year"),
})