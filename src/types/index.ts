export type PageType = 
  | 'home'
  | 'about'
  | 'products'
  | 'product-detail'
  | 'crop-solutions'
  | 'quality'
  | 'sustainability'
  | 'contact';

export interface ProductCategory {
  id: string;
  name: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageUrl: string;
  solutionCount: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Insecticides' | 'Fungicides' | 'Herbicides' | 'Plant Growth & Nutrition' | 'Biological / Specialty Solutions';
  targetCrops: string[];
  targetPestsWeeds: string[];
  formulationType: string;
  packageSizes: string[];
  shortDescription: string;
  keyBenefits: string[];
  recommendedUsage: string;
  imageUrl: string;
  videoUrl?: string;
  hasVideo?: boolean;
  isPlaceholder: boolean;
  chemicalCompositionPlaceholder?: string;
  registrationNoPlaceholder?: string;
  dosagePlaceholder?: string;
}

export interface CropSolution {
  id: string;
  name: string;
  tagline: string;
  imageUrl: string;
  keyChallenges: string[];
  commonPests: string[];
  recommendedCategoryFocus: string[];
  seasonality: string;
  fieldTips: string;
}

export interface QualityFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  checkpoints: string[];
  imageUrl: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
}
