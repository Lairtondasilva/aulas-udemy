export interface CardSelectProps {
  active: string;
  cardsOptions: Array<{ title: string; icon: string }>;
  onPress: (option: string) => void;
}
