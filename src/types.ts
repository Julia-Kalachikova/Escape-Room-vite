export type CardType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
};

export type CardTypeFull = {
  description: string;
  coverImg: string;
  coverImgWebp: string;
} & CardType


export type CardBelonging = ' decorated-page' | 'page-content';

export type AuthData = {
  email: string;
  password: string;
};

export type UserType = {
  email: string;
  token: string;
}
