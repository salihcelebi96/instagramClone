import React from "react";
import { useFormik } from "formik";
import logo from "../Images/Instagram.png";
import { AiFillFacebook } from "react-icons/ai";
import google from "../Images/googlePlay.png";
import microsoft from "../Images/microsoft.png";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex flex-col justify-center  items-center h-screen">
      <form
        className="flex flex-col justify-start w-[350px] h-[445px] border border-gray-200 p-10 mt-3"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <img className="w-full mb-10" src={logo} alt="Background" />
        </div>
        <div className="relative">
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="Telefon numarası, kullanıcı adı veya e-posta"
            className="mb-2 bg-gray-200 focus:outline-gray-400  border rounded-sm text-xs w-[268px] h-[38px] p-2  text-gray-300 pl-1  placeholder-left placeholder-top"
          />

          <div>
            <input
              id="email"
              name="email"
              type={formik.values.showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Şifre"
              className="mb-2 bg-gray-200 focus:outline-gray-400 w-[268px] h-[38px] p-2 pr-10 border text-xs rounded-sm placeholder-left placeholder-top"
            />
            <button
              type="button"
              className="absolute top-11 flex justify-center items-center right-0 px-3 h-[38px] text-sm text-blue-400 hover:text-blue-500 focus:outline-none"
              onClick={() => {
                formik.setFieldValue(
                  "showPassword",
                  !formik.values.showPassword
                );
              }}
            >
              {formik.values.showPassword ? "Gizle" : "Göster"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-400 mt-5 hover:bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
        <div className="relative bg-gray-700 w-full mt-5">
          <hr className="text-gray-200" />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black bg-gray-50 px-2">
            Ya Da
          </p>
        </div>
        <div className="flex justify-center mt-7 gap-4 text-blue-900 text-md cursor-pointer">
          <div className=" flex justify-center items-center">
            <AiFillFacebook />
          </div>
          <div>
            <p>Facebook ile Giriş Yap</p>
          </div>
        </div>
        <div>
          <button type="" className="text-gray-600 text-sm mt-3">
            Şifreni mi unuttun ?
          </button>
        </div>
      </form>
      <div className="mt-5 border w-[350px] h-16 flex  justify-center  items-center cursor-pointer">
        <h3 className="text-gray-600 text-sm">
          Hesabın yok mu?{" "}
          <span className="text-blue-400 font-bold text-sm">Kaydol</span>
        </h3>
      </div>
      <div className="mt-4  ">
        <p className="text-gray-600 ">Uygulamayı indir.</p>
      </div>
      <div className="flex mt-4 gap-2">
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=tr&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-32 h-10" src={google} alt="Google Play" />
        </a>
        <a
          href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT?hl=tr-tr&gl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-32 h-10" src={microsoft} alt="Google Play" />
        </a>
      </div>
    </div>
  );
};

export default SignupForm;
