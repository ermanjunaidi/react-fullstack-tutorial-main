const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateRegisterInput = (data) => {
  let errors = {};

  // check the email field
  if (isEmpty(data.email)) {
    errors.email = "Nama Email tidak boleh kosong";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email Salah,pastikan masukkan email yang benar";
  }

  // check password field
  if (isEmpty(data.password)) {
    errors.password = "Password Tidak Boleh kosong";
  } else if (!Validator.isLength(data.password, { min: 1, max: 150 })) {
    errors.password = "Password antara 1 sampai 150 karakter";
  }

  // check name field
  if (isEmpty(data.name)) {
    errors.name = "Nama Tidak Boleh Kosong";
  } else if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Nama Antara 2 sampai 30 karakter";
  }

  // check confirm password field
  if (isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Konfirmasi Password harus Di isi";
  } else if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Password and KOnfirmasi Password harus sama";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
