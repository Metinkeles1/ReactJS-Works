import { object, string, number, date, InferType, ref } from 'yup';

const Validations = object({
    email: string().email('Geçerli bir email giriniz.').required('zorunlu alan'),
    password: string().min(5, "parolanız en az 5 karakter olmalıdır").required(),
    passWordConfirm: string().oneOf([ref("password")], "parolalar uyuşmuyor").required()

});

export default Validations;