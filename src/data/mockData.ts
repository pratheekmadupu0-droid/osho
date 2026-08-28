import { ProductCategory, Product, CropSolution, QualityFeature } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'insecticides',
    name: 'INSECTICIDES',
    badge: 'Pest Defense',
    shortDescription: 'Advanced formulations to defend cash crops, cereals, and vegetables against damaging insect pests.',
    fullDescription: 'Comprehensive insect control portfolio formulated to shield field crops, horticulture, and commercial plantations from sucking, chewing, and boring pests while ensuring maximum plant safety.',
    iconName: 'ShieldAlert',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop',
    solutionCount: '15+ Formulations'
  },
  {
    id: 'fungicides',
    name: 'FUNGICIDES',
    badge: 'Disease Shield',
    shortDescription: 'Preventive and curative solutions protecting crops from fungal blights, rots, and foliar diseases.',
    fullDescription: 'Advanced preventive and curative fungicidal formulations designed to stop spore germination, suppress fungal growth, and safeguard grain and fruit quality.',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop',
    solutionCount: '12+ Formulations'
  },
  {
    id: 'plant-nutrition',
    name: 'PLANT GROWTH & NUTRITION',
    badge: 'Growth Booster',
    shortDescription: 'High-purity organic activators, bio-stimulants, and growth regulators enhancing plant vigor.',
    fullDescription: 'Specialized plant growth regulators, bio-stimulants, and micronutrient complexes crafted to boost photosynthesis, flower retention, and grain filling.',
    iconName: 'Sprout',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop',
    solutionCount: '20+ Formulations'
  },
  {
    id: 'herbicides',
    name: 'HERBICIDES',
    badge: 'Weed Control',
    shortDescription: 'Selective and non-selective weed control solutions ensuring zero nutrient competition.',
    fullDescription: 'Selective and non-selective herbicide solutions engineered to eradicate competitive narrow and broad-leaf weeds, allowing main crops to flourish.',
    iconName: 'Scissors',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    solutionCount: '10+ Formulations'
  },
  {
    id: 'specialty-biological',
    name: 'BIOLOGICAL / SPECIALTY SOLUTIONS',
    badge: 'Bio Agri',
    shortDescription: 'Eco-conscious specialty bio-activators and certified seed varieties for modern agriculture.',
    fullDescription: 'Eco-conscious specialty solutions designed for modern bio-farming needs, zero-residue requirements, and integrated pest management (IPM) protocols.',
    iconName: 'Leaf',
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop',
    solutionCount: '18+ Formulations'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'osho-shooter',
    name: 'SHOOTER',
    category: 'Insecticides',
    targetCrops: ['Paddy / Rice', 'Cotton', 'Chilli', 'Vegetables', 'Pulses'],
    targetPestsWeeds: ['Bollworms', 'Stem Borer', 'Thrips', 'Aphids', 'Caterpillars'],
    formulationType: 'High-Efficacy Organic Insecticide',
    packageSizes: ['100ml', '250ml', '500ml', '1L'],
    shortDescription: 'Flagship organic crop protection formulation by Osho Crop Care, providing instant knockdown and long-lasting defense against destructive farm pests.',
    keyBenefits: [
      'Rapid contact knockdown & deep translaminar leaf penetration',
      'Superior crop canopy defense & green leaf longevity',
      'High rain-fastness resisting wash-off during heavy monsoon downpours',
      'Boosts flower retention and grain weight per panicle'
    ],
    recommendedUsage: 'Apply at 250ml per acre at initial pest infestation. Ensure uniform spray coverage across crop canopy.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop',
    videoUrl: '/shooter-product.mp4',
    hasVideo: true,
    isPlaceholder: false,
    chemicalCompositionPlaceholder: 'Enzyme Protein Hydrolysates 40%, Organic Acid 1%, Fillers & Carriers 59%',
    registrationNoPlaceholder: 'CGB / OSHO / 2017 / 8892',
    dosagePlaceholder: '250 ml per acre'
  },
  {
    id: 'osho-allout',
    name: 'ALL OUT',
    category: 'Insecticides',
    targetCrops: ['Cotton', 'Chilli', 'Groundnut', 'Redgram', 'Maize'],
    targetPestsWeeds: ['Spodoptera', 'Helicoverpa', 'Leaf Folder', 'Pink Bollworm'],
    formulationType: 'Broad-Spectrum Insect Shield',
    packageSizes: ['250ml', '500ml', '1L'],
    shortDescription: 'Specialized caterpillar and borer specialist engineered for targeted pest control in high-value commercial cash crops.',
    keyBenefits: [
      'Targeted neuro-toxic impact on tough lepidopteran larvae',
      'Ovicidal & larvicidal dual-action stopping pest life cycles',
      'Safe for beneficial predator insects when applied as directed',
      'Promotes clean boll formation and damage-free pods'
    ],
    recommendedUsage: 'Apply 200ml - 250ml per acre upon egg hatch or early larval sighting.',
    imageUrl: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop',
    videoUrl: '/allout-product.mp4',
    hasVideo: true,
    isPlaceholder: false,
    chemicalCompositionPlaceholder: 'Naturally Derived Bio-Active Chemistry 100%',
    registrationNoPlaceholder: 'CGB / OSHO / 2018 / 9402',
    dosagePlaceholder: '200ml - 250ml per acre'
  },
  {
    id: 'osho-mantra',
    name: 'MANTRA',
    category: 'Plant Growth & Nutrition',
    targetCrops: ['Paddy', 'Sugarcane', 'Cotton', 'Fruits', 'Commercial Crops'],
    targetPestsWeeds: ['Abiotic Stress', 'Nutrient Deficiency', 'Stunted Root Growth'],
    formulationType: 'Bio-Nutritional Immunity Activator',
    packageSizes: ['250ml', '500ml', '1L', '5L'],
    shortDescription: 'Advanced bio-stimulant formulation activating crop immune response, root proliferation, and chlorophyll synthesis.',
    keyBenefits: [
      'Stimulates deep fibrous root development and nutrient uptake',
      'Increases plant tolerance against drought and temperature heat stress',
      'Enhances photosynthetic efficiency and vegetative branching',
      'Zero chemical residue profile suitable for export-grade produce'
    ],
    recommendedUsage: 'Apply 250ml per acre at active tillering or flowering stage via foliar spray or fertigation.',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop',
    hasVideo: false,
    isPlaceholder: false,
    chemicalCompositionPlaceholder: 'Amino Acids 20%, Seaweed Extract 15%, Humic Acids 10%',
    registrationNoPlaceholder: 'CGB / OSHO / BIO / 1022',
    dosagePlaceholder: '250 ml per acre'
  },
  {
    id: 'osho-ozo-speed',
    name: 'OZO SPEED',
    category: 'Plant Growth & Nutrition',
    targetCrops: ['Vegetables', 'Fruits', 'Spices', 'Flowering Plants', 'Field Crops'],
    targetPestsWeeds: ['Flower Drop', 'Poor Fruit Set', 'Slow Vegetative Growth'],
    formulationType: 'Rapid Yield & Growth Booster',
    packageSizes: ['100ml', '250ml', '500ml', '1L'],
    shortDescription: 'Fast-acting botanical growth accelerator designed to prevent flower drop and promote uniform fruit sizing.',
    keyBenefits: [
      'Accelerates cell division and metabolic enzymatic reactions',
      'Prevents premature flower drop and fruit shedding',
      'Improves fruit color, shine, size, and shelf life',
      'Compatible with most standard tank-mix crop protection sprays'
    ],
    recommendedUsage: 'Foliar application of 1.5ml to 2ml per liter of water at pre-flowering and fruit initiation.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    hasVideo: false,
    isPlaceholder: false,
    chemicalCompositionPlaceholder: 'Fulvic Acid & Micronutrient Complex 100%',
    registrationNoPlaceholder: 'CGB / OSHO / OZO / 4411',
    dosagePlaceholder: '1.5ml - 2ml per liter'
  },
  {
    id: 'osho-ozo-power',
    name: 'OZO POWER',
    category: 'Biological / Specialty Solutions',
    targetCrops: ['All Field & Horticultural Crops', 'Soil Application'],
    targetPestsWeeds: ['Compacted Soil', 'Poor Soil Microflora', 'Low Cation Exchange'],
    formulationType: 'Soil Vitality & Microbe Granules',
    packageSizes: ['4kg', '8kg', '10kg'],
    shortDescription: 'Granular soil amendment enriching soil carbon, beneficial microbial populations, and root zone aeration.',
    keyBenefits: [
      'Rejuvenates depleted agricultural soils and restores bio-balance',
      'Unlocks bound soil phosphorus and essential micro-minerals',
      'Enhances moisture retention capacity in dryland soils',
      'Reduces chemical fertilizer dosage requirements by up to 25%'
    ],
    recommendedUsage: 'Broadband basal soil application of 4kg to 8kg per acre during land preparation or sowing.',
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop',
    hasVideo: false,
    isPlaceholder: false,
    chemicalCompositionPlaceholder: 'Organic Humates, Mycorrhizae & Bio-Nutritional Granules',
    registrationNoPlaceholder: 'CGB / OSHO / SOIL / 7721',
    dosagePlaceholder: '4kg - 8kg per acre'
  }
];

export const CROP_SOLUTIONS: CropSolution[] = [
  {
    id: 'paddy-solutions',
    name: 'PADDY / RICE DEFENSE',
    seasonality: 'Kharif & Rabi Seasons',
    tagline: 'Defending staple rice crops against Stem Borer, Blast, and Sheath Blight.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Stem Borer', 'Brown Plant Hopper (BPH)', 'Foliar Blast', 'Panicle Mite'],
    recommendedCategoryFocus: ['Insecticides', 'Plant Growth & Nutrition'],
    commonPests: ['Stem Borer', 'BPH', 'Blast'],
    fieldTips: 'Apply SHOOTER at early tillering and spray MANTRA at panicle initiation for maximum grain weight.'
  },
  {
    id: 'cotton-solutions',
    name: 'COTTON PROTECTION',
    seasonality: 'Kharif Season',
    tagline: 'Shielding cotton crops against Pink Bollworm, Sucking Pests, and Leaf Curl Virus.',
    imageUrl: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Pink Bollworm', 'Whitefly', 'Thrips', 'Aphids'],
    recommendedCategoryFocus: ['Insecticides', 'Biological / Specialty Solutions'],
    commonPests: ['Bollworm', 'Whitefly', 'Thrips'],
    fieldTips: 'Spray ALL OUT upon early larval sighting to protect squaring and boll opening.'
  },
  {
    id: 'chilli-vegetables',
    name: 'CHILLI & VEGETABLE CARE',
    seasonality: 'Round-the-Year',
    tagline: 'Protecting high-value Chilli, Tomato, and Brinjal crops from Leaf Curl & Thrips.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Chilli Thrips', 'Mites', 'Fruit Borer', 'Powdery Mildew'],
    recommendedCategoryFocus: ['Insecticides', 'Plant Growth & Nutrition'],
    commonPests: ['Black Thrips', 'Fruit Borer', 'Mites'],
    fieldTips: 'Combine SHOOTER with OZO SPEED at pre-flowering to avoid flower drop and control thrips.'
  },
  {
    id: 'pulses-oilseeds',
    name: 'PULSES & OILSEEDS',
    seasonality: 'Rabi & Summer',
    tagline: 'Ensuring pod integrity and high grain weight for Redgram, Bengalgram, and Groundnut.',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop',
    keyChallenges: ['Pod Borer', 'Helicoverpa', 'Tikka Disease', 'Wilt'],
    recommendedCategoryFocus: ['Insecticides', 'Biological / Specialty Solutions'],
    commonPests: ['Pod Borer', 'Helicoverpa', 'Wilt'],
    fieldTips: 'Incorporate OZO POWER granular amendment into basal soil preparation to stimulate nitrogen fixation.'
  }
];

export const QUALITY_FEATURES: QualityFeature[] = [
  {
    id: 'analytical-purity',
    title: 'ANALYTICAL PURITY CONTROL',
    subtitle: 'HPLC & GC Precision Standard',
    description: 'Every formulation batch undergoes rigorous High-Performance Liquid Chromatography (HPLC) testing to confirm 100% active purity and stability.',
    iconName: 'Microscope',
    checkpoints: [
      'High-Performance Liquid Chromatography (HPLC) verification',
      'Gas Chromatography (GC) impurity screening',
      'Active ingredient thermal & storage stability trials',
      'Batch certification issued prior to warehouse dispatch'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'formulation-innovation',
    title: 'ADVANCED AGRO-CHEMISTRY',
    subtitle: 'High Bio-Availability Formulations',
    description: 'State-of-the-art micro-emulsion and suspension concentrate technologies ensuring deep plant cuticle absorption and resistance to wash-off.',
    iconName: 'FlaskConical',
    checkpoints: [
      'Micro-emulsion technology for rapid stomatal uptake',
      'Rain-fast polymer additives preventing rain wash-off',
      'Synergistic adjuvant integration for canopy spread',
      'Continuous R&D in bio-organic plant defense chemistry'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'consistency',
    title: 'STANDARDIZED EXCELLENCE',
    subtitle: 'Identical Field Performance',
    description: 'Automated formulation processing and induction-sealed packaging guarantee identical high-performance solutions regardless of region or crop season.',
    iconName: 'ShieldCheck',
    checkpoints: [
      'Automated liquid & granular filling machinery',
      'Tamper-evident induction sealing and verification',
      'Climate-controlled logistics and storage protocols',
      'Zero-tolerance policy for active degradation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'responsible-ag',
    title: 'SUSTAINABLE AGRICULTURE',
    subtitle: 'Environmental & Farmer Stewardship',
    description: 'Promoting safe applicator protocols, precise dosage guidance, container recycling education, and sustainable crop care methods.',
    iconName: 'Globe2',
    checkpoints: [
      'Comprehensive safety documentation and applicator warnings',
      'Promoting correct PPE practices among farmers',
      'Formulations optimized to lower residual soil footprint',
      'Support for Integrated Pest Management (IPM) frameworks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: 'CROP PROTECTION',
    description: 'Focused agricultural protection solutions crafted to defend cash crops against devastating insects, weeds, and fungal pathogens.'
  },
  {
    number: '02',
    title: 'QUALITY FOCUS',
    description: 'Unwavering commitment to consistent product quality, HPLC analytical purity, and reliable field performance.'
  },
  {
    number: '03',
    title: 'FARMER CENTRIC',
    description: 'Solutions designed around real agricultural needs, supporting farmer livelihood, crop yield, and economic return.'
  },
  {
    number: '04',
    title: 'AGRI INNOVATION',
    description: 'Continuously evolving agricultural solutions, modern formulation chemistry, and sustainable bio-organic crop care.'
  }
];

export const STATISTIC_PLACEHOLDERS = [
  {
    numberPlaceholder: '50+',
    label: 'Products',
    subtext: 'High-Efficacy Crop Care Formulations & Bio-Nutrient Solutions'
  },
  {
    numberPlaceholder: '30+',
    label: 'Crops Supported',
    subtext: 'Field Crops, Commercial Cash Crops & Vegetables'
  },
  {
    numberPlaceholder: '10,000+',
    label: 'Distributor Network',
    subtext: 'Pan-India Agricultural Retail & Advisory Centers'
  },
  {
    numberPlaceholder: '10+ Years',
    label: 'Agri Excellence',
    subtext: 'Serving Farmers with Premium Crop Protection Chemistry'
  }
];

export const COMPANY_CONTACT_INFO = {
  name: 'OSHO CROP CARE PVT. LTD.',
  tagline: 'Advanced Agricultural Solutions & Crop Protection in India',
  addressPlaceholder: 'Plot No. 12, IDA Nacharam, Mallapur Road, Hyderabad, Telangana 500076, India',
  phonePlaceholder: '+91 1800-425-6746 / +91 40-27170099',
  emailPlaceholder: 'info@oshocropcare.com / contact@oshocropcare.com',
  businessHours: 'Monday - Saturday: 9:00 AM - 6:00 PM IST',
  technicalSupport: 'support@oshocropcare.com'
};
