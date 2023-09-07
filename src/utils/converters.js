import moment from "jalali-moment";

// convert the numbers in String or Number
const toPersianNumber = (number) =>
  String(number).replace(/\d+/g, (match) =>
    Number(match).toLocaleString("fa-ir")
  );

const toPersianTime = (time) =>
  Number(time).toLocaleString("fa-ir").replace("٫", ":");

const toPersianDate = (date) => new Date(date).toLocaleDateString("fa-ir");

/**  @param {object} {date} - includes year, month, day   */
const toEnDate = (date) => {
  const formattedDate = moment
    .from(moment(date).format(), "fa", "YYYY-MM-DD")
    .format();

  return moment(formattedDate).toDate();
};

const toPersianDateObject = (date) => {
  const stringDate = new Date(date).toLocaleDateString("en-US");
  const formattedDate = moment
    .from(stringDate, "en", "MM/DD/YYYY")
    .locale("fa")
    .format("YYYY-MM-DD");
    
  return {
    year: moment(formattedDate).year(),
    month: moment(formattedDate).month(),
    day: moment(formattedDate).date(),
  };
};

const objectToFormData = (object) => {
  const formData = new FormData()

  object.sessions.map((session, index) => {
    formData.append("videos", session.videoLink)
  })

  return formData
}

export {
  objectToFormData,
  toEnDate,
  toPersianDate,
  toPersianDateObject,
  toPersianNumber,
  toPersianTime};
