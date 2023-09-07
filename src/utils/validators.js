import * as Yup from "yup";

const signinValidator = Yup.object({
  email: Yup.string()
    .required("ایمیل الزامی می باشد")
    .email("لطفا یک ایمیل معتبر وارد کنید"),
  password: Yup.string().required("رمز عبور الزامی می باشد"),
});

const signupValidator = Yup.object({
  fullname: Yup.string()
    .required("نام و نام خانوادگی الزامی می باشد")
    .min(3, "نام باید حداقل 3 حرف باشد"),
  email: Yup.string()
    .required("ایمیل الزامی می باشد")
    .email("لطفا یک ایمیل معتبر وارد کنید"),
  password: Yup.string()
    .required("رمز عبور الزامی می باشد")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
      "رمز باید باید حداقل دارای 8 حرف، 1 حرف بزرگ، 1 حرف کوچک، 1 عدد باشد"
    ),
});

const upgradeValidator = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره موبایل الزامی می باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g,
      "لطفا یک شماره موبایل معتبر وارد کنید"
    ),
  biography: Yup.string()
    .required("درباره الزامی می باشد")
    .min(20, "باید حداقل 20 کلمه درباره خود بگویید"),
  fields: Yup.array().min(1, "باید حداقل یک حوضه را انتخاب کنید"),
  experience: Yup.string().required("میزان تجربه الزامی است"),
});

const userProfileValidator = Yup.object({
  fullname: Yup.string()
    .required("نام و نام خانوادگی الزامی می باشد")
    .min(3, "نام باید حداقل 3 حرف باشد"),
  email: Yup.string()
    .required("ایمیل الزامی می باشد")
    .email("لطفا یک ایمیل معتبر وارد کنید"),
});

const couponValidator = Yup.object({
  code: Yup.string().required("کد الزامی می باشد"),
  type: Yup.string(),
  discount: Yup.number().when("type", {
    is: "percentage",
    then: () =>
      Yup.number()
        .required("میزان تخفیف الزامی می باشد")
        .min(0, "میزان تخفیف نمیتواند از صفر کمتر باشد")
        .max(
          100,
          "در صورت انتخاب نوع درصد میزان تخفیف نمی تواند از 100% بیشتر باشد"
        ),
    otherwise: () =>
      Yup.number()
        .required("میزان تخفیف الزامی می باشد")
        .min(0, "میزان تخفیف نمیتواند از صفر کمتر باشد"),
  }),
  inStockCount: Yup.number()
    .required("تعداد موجود الزامی می باشد")
    .min(0, "تعداد نمی تواند کمتز از صفر باشد"),
  expireDate: Yup.object().required("تاریخ انقضا الزامی می باشد"),
  courses: Yup.array()
    .required("انتخاب دوره الزامی می باشد")
    .min(1, "حداقل باید یک دوره را انتخاب کنید"),
});

const mentorProfileValidator = Yup.object({
  fullname: Yup.string()
    .required("نام و نام خانوادگی الزامی می باشد")
    .min(3, "نام باید حداقل 3 حرف باشد"),
  email: Yup.string()
    .required("ایمیل الزامی می باشد")
    .email("لطفا یک ایمیل معتبر وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل الزامی می باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g,
      "لطفا یک شماره موبایل معتبر وارد کنید"
    ),
  biography: Yup.string()
    .required("درباره الزامی می باشد")
    .min(20, "باید حداقل 20 کلمه درباره خود بگویید"),
  fields: Yup.array().min(1, "باید حداقل یک حوضه را انتخاب کنید"),
  experience: Yup.string().required("میزان تجربه الزامی است"),
});

const socialMediasValidator = Yup.object({
  instagram: Yup.string().matches(
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
    "لطفا یک آدرس معتبر وارد کنید"
  ),
  twitter: Yup.string().matches(
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
    "لطفا یک آدرس معتبر وارد کنید"
  ),
  linkedin: Yup.string().matches(
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
    "لطفا یک آدرس معتبر وارد کنید"
  ),
  facebook: Yup.string().matches(
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
    "لطفا یک آدرس معتبر وارد کنید"
  ),
});

const detailsStepValidator = Yup.object({
  title: Yup.string().required("نام دوره الزامی است"),
  cover: Yup.mixed().required("عکس دوره الزامی است"),
  price: Yup.number()
    .required("قیمت الزامی است")
    .min(0, "قیمت نباید کمتر ا صفر باشد"),
  discount: Yup.number()
    .required("تخفیف دوره الزامی است")
    .max(Yup.ref("price"), "تخفیف نمی تواند از قیمت بیشتر باید"),
  category: Yup.string().required("دسته بندی الزامی می باشد"),
  duration: Yup.number()
    .required("زمان الزامی می باشد")
    .min(0, "زمان نباید کمتر از صفر باشد"),
  description: Yup.string()
    .required("توضیحات الزامی می باشد")
    .min(1000, "میزان توضیحات شما کم می باشد"),
});

const sessionsStepValidator = Yup.object({
  sessions: Yup.array()
    .min(1)
    .of(
      Yup.object({
        title: Yup.string().required("نام جلسه الزامی می باشد"),
        description: Yup.string()
          .trim()
          .min(100, "باید حداقل 100 حرف توضیح دهید"),
        videoLink: Yup.mixed().required("ویدیو جلسه الزامی می باشد"),
        isFree: Yup.boolean().notRequired(),
      })
    ),
});

const categoryValidator = Yup.object({
  title: Yup.string().required("نام فارسی الزامی می باشد"),
  englishTitle: Yup.string().required("نام انگلیسی الزامی می باشد"),
});

const fieldValidator = Yup.object({
  title: Yup.string().required("نام فارسی الزامی می باشد"),
  englishTitle: Yup.string().required("نام انگلیسی الزامی می باشد"),
});

const rejectCourseValidator = Yup.object({
  statusMessage: Yup.string().required("توضیحات الزامی می باشد"),
});

export {
  categoryValidator,
  couponValidator,
  detailsStepValidator,
  fieldValidator,
  mentorProfileValidator,
  rejectCourseValidator,
  sessionsStepValidator,
  signinValidator,
  signupValidator,
  socialMediasValidator,
  upgradeValidator,
  userProfileValidator,
};
