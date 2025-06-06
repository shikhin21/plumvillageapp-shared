export type FeaturedContributor = {
  id: string, // refers to ID from 'contributors' collection
  roleIds: string[], // refers to ID from 'roles' collection
}

type ContributorReservedKeys = 'id' | 'slug' | 'website' | 'createdAt' | 'updatedAt';

type ContributorBase<SupportedLanguageCodeType extends string | number | symbol> = {
  [key in Exclude<SupportedLanguageCodeType, ContributorReservedKeys>]?: string;
};

export type Contributor<SupportedLanguageCodeType extends string | number | symbol, TimestampLike = unknown> = {
  en: string;
  id: string;
  slug: string;
  website?: string; // Website URL
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
} & ContributorBase<SupportedLanguageCodeType>;

export type ContributorRole<TimestampLike = unknown>  = {
  id: string,
  name: string,
  description: string,
  createdAt: TimestampLike,
  updatedAt: TimestampLike,
};

export type ContributorStrings<SupportedLanguageCodeType extends string | number | symbol, TimestampLike = unknown> = {
  // The language code is the document ID, but we must store it in the document as well.
  // This is because Firestore does not allow collectionGroup query with a document ID condition.
  // See https://stackoverflow.com/a/58104104/174979
  lang: SupportedLanguageCodeType,
  bio: string,
  createdAt: TimestampLike,
  updatedAt: TimestampLike,
};
