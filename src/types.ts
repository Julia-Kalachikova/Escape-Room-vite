export type CardType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
};

export type CardBelonging = ' decorated-page' | 'page-content';

export type AuthData = {
  email: string;
  password: string;
};

export type UserType = {
  name: string;
  avatarUrl: string;
  token: string;
}
