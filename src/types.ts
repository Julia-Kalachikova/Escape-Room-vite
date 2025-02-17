export type CardType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string | null;
  type: string | null;
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
  agreement: string;
};

export type UserType = {
  email: string;
  token: string;
}

export type LevelFilterLink = {
  levelId: string;
  levelName: string;
};

export type GenreFilterLink = {
  id: string;
  xlinkHref: string;
  genreName: string;
};
