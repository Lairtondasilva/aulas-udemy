import { GenderFemale, GenderMale } from "phosphor-react-native";
import React from "react";
import { IconDefault } from "../components/IconDefault";

type IconComponent = React.FC<{ color?: string }>;

export const getIcon = (key: string) => {
  const icons: { [key: string]: IconComponent } = {
    male: GenderMale,
    female: GenderFemale,
    default: IconDefault,
  };

  return icons[key];
};
