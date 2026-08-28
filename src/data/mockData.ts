import { ProductCategory, Product, CropSolution, QualityFeature } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'insecticides',
    name: 'INSECTICIDES',
    badge: 'Pest Control',
    shortDescription: 'Protection against damaging insect pests to preserve foliage, stems, and yield potential.',
    fullDescription: 'Comprehensive insect control portfolio formulated to shield field crops, horticulture, and commercial plantations from sucking, chewing, and boring pests while ensuring plant safety.',
    iconName: 'ShieldAlert',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop',
    solutionCount: '[XX]+ Formulations'
  },
  {
    id: 'fungicides',
    name: 'FUNGICIDES',
    badge: 'Disease Defense',
    shortDescription: 'Solutions designed to help protect crops from fungal diseases, foliar blights, and root rots.',
    fullDescription: 'Advanced preventive and curative fungicidal formulations designed to stop spore germination, suppress fungal growth, and safeguard grain and fruit quality.',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop',
    solutionCount: '[XX]+ Formulations'
  },
  {
    id: 'herbicides',
    name: 'HERBICIDES',
    badge: 'Weed Control',
    shortDescription: 'Crop management solutions for effective weed control and zero nutrient competition.',
    fullDescription: 'Selective and non-selective herbicide solutions engineered to eradicate competitive narrow and broad-leaf weeds, allowing main crops to flourish.',
    iconName: 'Scissors',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    solutionCount: '[XX]+ Formulations'
  },
  {
    id: 'plant-nutrition',
    name: 'PLANT GROWTH & NUTRITION',
    badge: 'Growth Booster',
    shortDescription: 'Solutions supporting crop development, root vigor, stress recovery, and overall productivity.',
    fullDescription: 'Specialized plant growth regulators, bio-stimulants, and micronutrient complexes crafted to boost photosynthesis, flower retention, and grain filling.',
    iconName: 'Sprout',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop',
    solutionCount: '[XX]+ Formulations'
  },
  {
    id: 'specialty-biological',
    name: 'BIOLOGICAL / SPECIALTY SOLUTIONS',
    badge: 'Modern Agri',
    shortDescription: 'Modern agricultural approaches for responsible, sustainable crop management and soil vitality.',
    fullDescription: 'Eco-conscious specialty solutions designed for modern bio-farming needs, zero-residue requirements, and integrated pest management (IPM) protocols.',
    iconName: 'Leaf',
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop',
    solutionCount: '[XX]+ Formulations'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'osho-shooter-flagship',
    name: 'OSHO SHOOTER',
    category: 'Insecticides',
    targetCrops: ['Paddy / Rice', 'Cotton', 'Chilli', 'Vegetables', 'Pulses'],
    targetPestsWeeds: ['Stem Borer', 'Bollworms', 'Sucking Pests', 'Aphids', 'Thrips'],
    formulationType: 'High-Efficacy Liquid Formulation',
    packageSizes: ['100ml', '250ml', '500ml', '1L'],
    shortDescription: 'Flagship dynamic insecticide formulation providing instant knockdown and long-lasting systemic protection against destructive farm pests.',
    keyBenefits: [
      'Rapid contact action & deep translaminar leaf penetration',
      'Superior crop canopy protection & green leaf retention',
      'High resistance to wash-off during sudden rainfall',
      'Enhances grain filling weight and boll opening quality'
    ],
    recommendedUsage: 'Apply at initial pest infestation notice using recommended water volumes per acre. Refer to official product label.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop',
    videoUrl: '/shooter-product.mp4',
    hasVideo: true,
    isPlaceholder: false,
    chemicalCompositionPlaceholder: '[Official Active Ingredient Composition - Refer to Label]',
    registrationNoPlaceholder: '[CIR / CGB Official Registration No.]',
    dosagePlaceholder: '[Recommended Dosage per Acre / Hectare - Refer to Container Label]'
  },
  {
    id: 'osho-allout-flagship',
    name: 'OSHO ALL OUT',
    category: 'Biological / Specialty Solutions',
    targetCrops: ['Paddy / Rice', 'Cotton', 'Vegetables', 'Fruits', 'Pulses'],
    targetPestsWeeds: ['Broad-Spectrum Insect Pests', 'Fungal Blights', 'Soil Pathogens'],
    formulationType: 'Multi-Defense Specialty Formulation',
    packageSizes: ['250ml', '500ml', '1L', '5L'],
    shortDescription: 'Complete spectrum agricultural solution engineered for total crop shield, disease suppression, and robust root vitality.',
    keyBenefits: [
      'Multi-target defense suppressing sucking, chewing insects & fungal spores',
      'Enriched formulation promoting vigorous vegetative revival',
      'Extends post-treatment residual defense window',
      'Eco-compatible profile suitable for integrated pest management (IPM)'
    ],
    recommendedUsage: 'Foliar spray applied uniformly across crop canopy at early growth stages. Refer to official product label.',
    imageUrl: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop',
    videoUrl: '/allout-product.mp4',
    hasVideo: true,
    isPlaceholder: false,
    chemicalCompositionPlaceholder: '[Official Active Ingredient Composition - Refer to Label]',
    registrationNoPlaceholder: '[CIR / CGB Official Registration No.]',
    dosagePlaceholder: '[Recommended Dosage per Acre / Hectare - Refer to Container Label]'
  },
  {
    id: 'osho-prod-01',
    name: 'OSHO CropShield Ultra [Placeholder Name]',
    category: 'Insecticides',
    targetCrops: ['Paddy / Rice', 'Cotton', 'Chilli', 'Vegetables'],
    targetPestsWeeds: ['Sucking Pests', 'Bollworms', 'Aphids', 'Thrips'],
    formulationType: 'Emulsifiable Concentrate (EC) [Placeholder]',
    packageSizes: ['100ml', '250ml', '500ml', '1L [Placeholder]'],
    shortDescription: 'Broad-spectrum crop protection formulation designed for fast knockdown and residual control of damaging pests.',
    keyBenefits: [
      'Rapid contact and systemic action on targeted insect species',
      'Helps maintain green canopy and healthy vegetative growth',
      'High compatibility with standard spray application protocols',
      'Designed for optimum rainfastness and longevity'
    ],
    recommendedUsage: 'Apply at early infestation stage using recommended water volumes per acre. Refer to official product label.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop',
    isPlaceholder: true,
    chemicalCompositionPlaceholder: '[Technical Active Ingredient % - To Be Populated]',
    registrationNoPlaceholder: '[CIR / CGB Registration No. Placeholder]',
    dosagePlaceholder: '[Recommended Dosage per Acre / Hectare Placeholder]'
  },
  {
    id: 'osho-prod-02',
    name: 'OSHO FungoDefend Pro [Placeholder Name]',
    category: 'Fungicides',
    targetCrops: ['Paddy / Rice', 'Pulses', 'Fruits', 'Vegetables'],
    targetPestsWeeds: ['Blast', 'Sheath Blight', 'Powdery Mildew', 'Leaf Spot'],
    formulationType: 'Suspension Concentrate (SC) [Placeholder]',
    packageSizes: ['250ml', '500ml', '1L [Placeholder]'],
    shortDescription: 'Dual-action fungicidal protection guarding leaves, fruit, and tillers against persistent fungal infections.',
    keyBenefits: [
      'Preventive & curative leaf blade protection',
      'Enhances crop resilience during high-humidity periods',
      'Promotes uniform grain development and fruit skin shine',
      'Low phytotoxicity risk when applied as instructed'
    ],
    recommendedUsage: 'Spray proactively at first signs of cloud cover or disease onset. Follow official label dosage instructions.',
    imageUrl: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop',
    isPlaceholder: true,
    chemicalCompositionPlaceholder: '[Technical Active Ingredient % - To Be Populated]',
    registrationNoPlaceholder: '[CIR / CGB Registration No. Placeholder]',
    dosagePlaceholder: '[Recommended Dosage per Acre / Hectare Placeholder]'
  },
  {
    id: 'osho-prod-03',
    name: 'OSHO WeedTest Eradicator [Placeholder Name]',
    category: 'Herbicides',
    targetCrops: ['Paddy / Rice', 'Cotton', 'Pulses', 'Other Crops'],
    targetPestsWeeds: ['Broadleaf Weeds', 'Grasses', 'Sedges'],
    formulationType: 'Water Soluble Granules (WG) [Placeholder]',
    packageSizes: ['100g', '250g', '500g [Placeholder]'],
    shortDescription: 'Selective herbicide solution designed to eradicate competitive field weeds without stressing the primary crop.',
    keyBenefits: [
      'Eliminates weed nutrient theft early in crop development',
      'Provides extended pre-emergence and post-emergence weed control',
      'Supports efficient mechanical harvesting and field cleanliness',
      'Reduces manual weeding labor requirements'
    ],
    recommendedUsage: 'Apply uniformly to moist soil or young broadleaf weeds. Use recommended flat fan nozzles.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    isPlaceholder: true,
    chemicalCompositionPlaceholder: '[Technical Active Ingredient % - To Be Populated]',
    registrationNoPlaceholder: '[CIR / CGB Registration No. Placeholder]',
    dosagePlaceholder: '[Recommended Dosage per Acre / Hectare Placeholder]'
  },
  {
    id: 'osho-prod-04',
    name: 'OSHO BioMax Vigor Plus [Placeholder Name]',
    category: 'Plant Growth & Nutrition',
    targetCrops: ['Chilli', 'Cotton', 'Fruits', 'Vegetables', 'Paddy / Rice'],
    targetPestsWeeds: ['Nutrient Deficiency', 'Abiotic Stress', 'Flower Drop'],
    formulationType: 'Liquid Concentrate [Placeholder]',
    packageSizes: ['500ml', '1L', '5L [Placeholder]'],
    shortDescription: 'Balanced bio-stimulant formulation enriched with essential micronutrients for root expansion and flowering.',
    keyBenefits: [
      'Boosts chlorophyll synthesis and photosynthetic efficiency',
      'Reduces flower drop and improves fruit set percentage',
      'Protects crops against drought and temperature stress',
      'Enhances post-harvest shelf life and market produce value'
    ],
    recommendedUsage: 'Apply during vegetative growth and flowering initiation stages as a foliar spray or fertigation.',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop',
    isPlaceholder: true,
    chemicalCompositionPlaceholder: '[Technical Active Ingredient % - To Be Populated]',
    registrationNoPlaceholder: '[CIR / CGB Registration No. Placeholder]',
    dosagePlaceholder: '[Recommended Dosage per Acre / Hectare Placeholder]'
  }
];

export const CROP_SOLUTIONS: CropSolution[] = [
  {
    id: 'paddy-rice',
    name: 'Paddy / Rice',
    tagline: 'Comprehensive crop health from nursery stage to grain harvest.',
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Sheath Blight', 'Stem Borer', 'Brown Planthopper', 'Weed Competition'],
    commonPests: ['Stem Borer', 'Leaf Folder', 'BPH'],
    recommendedCategoryFocus: ['Insecticides', 'Fungicides', 'Herbicides'],
    seasonality: 'Kharif & Rabi Cycles',
    fieldTips: 'Ensure clean standing water management during pre-emergence herbicide applications to maximize weed suppression.'
  },
  {
    id: 'cotton',
    name: 'Cotton',
    tagline: 'Safeguarding bolls and foliage for maximum lint quality and yield.',
    imageUrl: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Bollworm Infestation', 'Whitefly Outbreak', 'Fungal Leaf Spot'],
    commonPests: ['Pink Bollworm', 'Whitefly', 'Thrips'],
    recommendedCategoryFocus: ['Insecticides', 'Plant Growth & Nutrition'],
    seasonality: 'Kharif Season',
    fieldTips: 'Monitor square formation daily and deploy targeted pest management at first threshold detection.'
  },
  {
    id: 'chilli',
    name: 'Chilli',
    tagline: 'Protecting fruit set and green canopy against sucking pests and rots.',
    imageUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Chilli Thrips', 'Mite Attack', 'Fruit Rot / Anthracnose'],
    commonPests: ['Black Thrips', 'Yellow Mites', 'Fruit Borer'],
    recommendedCategoryFocus: ['Insecticides', 'Fungicides', 'Plant Growth & Nutrition'],
    seasonality: 'Year-Round Cultivation',
    fieldTips: 'Combine balanced foliar micronutrients with fungicide protocols to avoid flower drop during humid weather.'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    tagline: 'High-value crop protection for tomatoes, brinjal, cabbage & okra.',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Fruit and Shoot Borer', 'Damping Off', 'Downy Mildew'],
    commonPests: ['Shoot Borer', 'Aphids', 'Leaf Miner'],
    recommendedCategoryFocus: ['Biological / Specialty Solutions', 'Fungicides', 'Insecticides'],
    seasonality: 'Multi-Season Rotation',
    fieldTips: 'Rotate modes of active chemical groups to prevent insect resistance development in commercial vegetable plots.'
  },
  {
    id: 'pulses',
    name: 'Pulses',
    tagline: 'Securing legume nodulation, pod formation, and grain filling.',
    imageUrl: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Pod Borer (Helicoverpa)', 'Wilt Disease', 'Weed Interference'],
    commonPests: ['Pod Borer', 'Spodoptera', 'Jassids'],
    recommendedCategoryFocus: ['Insecticides', 'Herbicides', 'Plant Growth & Nutrition'],
    seasonality: 'Rabi & Summer Seasons',
    fieldTips: 'Seed treatment before sowing provides vital protection against early soil-borne fungal pathogens.'
  },
  {
    id: 'fruits',
    name: 'Fruits',
    tagline: 'Orchard protection for mango, citrus, banana, pomegranate & grapes.',
    imageUrl: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Fruit Fly', 'Powdery Mildew', 'Dieback', 'Fruit Drop'],
    commonPests: ['Fruit Fly', 'Mealybug', 'Scale Insects'],
    recommendedCategoryFocus: ['Fungicides', 'Biological / Specialty Solutions', 'Plant Growth & Nutrition'],
    seasonality: 'Perennial Orchard Management',
    fieldTips: 'Maintain clean orchard sanitation and canopy pruning to allow airflow and maximum spray penetration.'
  },
  {
    id: 'other-crops',
    name: 'Other Crops',
    tagline: 'Customized defense strategies for sugarcane, oilseeds, and cereals.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Early Shoot Borer', 'Rusts & Smuts', 'Perennial Weeds'],
    commonPests: ['Termites', 'White Grub', 'Pyrilla'],
    recommendedCategoryFocus: ['Herbicides', 'Insecticides', 'Fungicides'],
    seasonality: 'Annual & Multi-Year',
    fieldTips: 'Consult OSHO technical representatives for specialized dosage recommendations tailored to specific soil conditions.'
  }
];

export const QUALITY_FEATURES: QualityFeature[] = [
  {
    id: 'qc',
    title: 'QUALITY CONTROL',
    subtitle: 'Rigorously Evaluated Ingredients & Formulations',
    description: 'Every batch of raw input and finished agricultural formulation undergoes systematic multi-stage analytical testing to ensure active ingredient purity, suspension stability, and batch uniformity.',
    iconName: 'CheckCircle2',
    checkpoints: [
      'High-performance liquid chromatography (HPLC) verification',
      'Physico-chemical parameter validation (pH, density, emulsion stability)',
      'Batch retain sample archiving for longitudinal stability tracking',
      'Strict adherence to agricultural standard guidelines'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rd',
    title: 'RESEARCH & DEVELOPMENT',
    subtitle: 'Scientific Innovation for Farm Productivity',
    description: 'Dedicated focus on formulation development, spray drift reduction, surfactant optimization, and multi-location field performance evaluations across diverse agro-climatic zones.',
    iconName: 'Microscope',
    checkpoints: [
      'Targeted delivery enhancement research',
      'Compatibility studies with common tank-mix components',
      'Bio-efficacy validation under variable climate conditions',
      'Continuous refinement of protective active carriers'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'consistency',
    title: 'PRODUCT CONSISTENCY',
    subtitle: 'Standardized Excellence in Every Pack',
    description: 'Automated formulation processing and sealed protective packaging guarantee that farmers receive identical high-performance solutions regardless of region or crop season.',
    iconName: 'ShieldCheck',
    checkpoints: [
      'Automated liquid & powder filling technology',
      'Tamper-evident induction sealing and anti-counterfeiting verification',
      'Strict climate-controlled storage and logistics protocols',
      'Zero-tolerance policy for formulation degradation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'responsible-ag',
    title: 'RESPONSIBLE AGRICULTURE',
    subtitle: 'Safe Handling & Environmental Stewardship',
    description: 'Promoting safe applicator protocols, precise dosage guidance, responsible container disposal education, and sustainable crop protection methods for long-term farm health.',
    iconName: 'Globe2',
    checkpoints: [
      'Comprehensive safety documentation and usage warnings',
      'Promoting correct PPE practices among agricultural applicators',
      'Formulations optimized to lower environmental residual footprint',
      'Support for Integrated Pest Management (IPM) frameworks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: 'CROP PROTECTION',
    description: 'Focused agricultural protection solutions crafted to defend crops against devastating insects, weeds, and fungal pathogens.'
  },
  {
    number: '02',
    title: 'QUALITY FOCUS',
    description: 'Unwavering commitment to consistent product quality, analytical purity, and reliable field performance.'
  },
  {
    number: '03',
    title: 'FARMER CENTRIC',
    description: 'Solutions designed around real agricultural needs, supporting farmer livelihood, crop yield, and economic return.'
  },
  {
    number: '04',
    title: 'INNOVATION',
    description: 'Continuously evolving agricultural solutions, modern formulation chemistry, and sustainable crop care technologies.'
  }
];

export const STATISTIC_PLACEHOLDERS = [
  {
    numberPlaceholder: '[XX]+',
    label: 'Products',
    subtext: 'Agricultural Formulations & Crop Care Solutions'
  },
  {
    numberPlaceholder: '[XX]+',
    label: 'Crops Supported',
    subtext: 'Field Crops, Vegetables & Commercial Horticulture'
  },
  {
    numberPlaceholder: '[XX]+',
    label: 'Markets Served',
    subtext: 'Agricultural Regions & Distribution Networks'
  },
  {
    numberPlaceholder: '[XX]+',
    label: 'Years of Expertise',
    subtext: 'Dedicated to Farmer Empowerment & Quality'
  }
];

export const COMPANY_CONTACT_INFO = {
  name: 'OSHO CROP CARE PVT. LTD.',
  tagline: 'Protecting Crops. Powering Farmers.',
  addressPlaceholder: '[Corporate / Registered Office Address Placeholder]',
  phonePlaceholder: '+91 [XX] XXXX XXXX / [Customer Support Phone Placeholder]',
  emailPlaceholder: 'info@oshocropcare.com / [Official Contact Email Placeholder]',
  businessHours: 'Monday - Saturday: 9:00 AM - 6:00 PM IST',
  technicalSupport: 'technical@oshocropcare.com [Placeholder]'
};
