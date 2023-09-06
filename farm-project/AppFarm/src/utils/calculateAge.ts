import moment from "moment";

export function calculateAge(birthdate: string | Date): string {
  const currentDate = moment();
  const birthdateObj = moment(birthdate);

  const years = currentDate.diff(birthdateObj, "years");
  birthdateObj.add(years, "years");

  const months = currentDate.diff(birthdateObj, "months");
  birthdateObj.add(months, "months");

  const days = currentDate.diff(birthdateObj, "days");

  let age = "";

  if (years > 0) {
    age += `${years} ano${years > 1 ? "s" : ""}`;
    if (months > 0) {
      age += ` e ${months} mês${months > 1 ? "es" : ""}`;
    }
  } else if (months > 0) {
    age += `${months} mês${months > 1 ? "es" : ""}`;
    if (days > 0) {
      age += ` e ${days} dia${days > 1 ? "s" : ""}`;
    }
  } else {
    age += `${days} dia${days > 1 ? "s" : ""}`;
  }

  return age;
}
