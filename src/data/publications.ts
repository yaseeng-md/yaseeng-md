export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  publicationUrl: string;
  abstract: string;
  highlights: string[];
  metrics?: string;
  tags: string[];
  codeUrl?: string;
  doi?: string;
  status: "Published" | "Under Review" | "Preprint";
}

export const publications: Publication[] = [
  {
    id: "explicit-content-detection-vit",
    title: "Enhancing Vision Transformer Performance for NSFW Detection with Saliency-Guided Attention",
    authors: [
      "Gandluru Mohammad Yaseena",
      "Bilal Ahmad Mantoo"
    ],
    venue: "Procedia Computer Science – International Conference on Machine Learning and Data Engineering",
    year: "2025",
    publicationUrl: "https://www.sciencedirect.com/science/article/pii/S1877050926020545",
    status: "Published",
    codeUrl: "https://github.com/yaseeng-md/Explicit-Content-Detection",
    abstract:
      "Proposed a Transformer-based framework for explicit content detection using Vision Transformer (ViT), Swin Vision Transformer (SwinViT), and a novel Saliency-Guided Vision Transformer (SG-ViT). Introduced gradient and entropy-based information maps to guide self-attention mechanisms, combining spatial structure and local uncertainty to improve classification performance and interpretability. Evaluated the proposed architectures on Adult Content and NudeNet datasets against conventional CNN-based approaches.",
    highlights: [
      "Developed a Saliency-Guided Vision Transformer combining gradient magnitude maps and local entropy maps to guide self-attention toward discriminative visual regions.",
      "Introduced a weighted saliency formulation using gradient and entropy contributions, identifying optimal parameters of α = 0.6 and β = 0.4.",
      "Compared ViT, SwinViT, and SG-ViT against ResNet-50, EfficientNet, MobileNet, and a custom shallow CNN.",
      "Conducted ablation studies on patch sizes and saliency weighting parameters, identifying patch size 16 as an effective configuration for ViT.",
      "Evaluated performance across Adult Content and NudeNet datasets, demonstrating improvements in classification accuracy and F1-score through saliency-guided feature learning."
    ],
    metrics: "Adult Content: 98.41% accuracy and 98.40% F1-score. NudeNet: 98.86% accuracy and 96.86% F1-score.",
    tags: [
      "Vision Transformers",
      "Swin Transformer",
      "Saliency-Guided ViT",
      "Gradient Maps",
      "Entropy Maps",
      "Self-Attention",
      "Deep Learning",
      "Image Classification",
      "Content Moderation"
    ]
  },
  {
  id: "sar-image-colorization-review",
  title: "A Comprehensive Review of SAR Image Colorization Techniques: From Classical Methods to Deep Learning and Diffusion Models",
  authors: [
    "Gandluru Mohammed Yaseen",
    "Bilal Ahmad Mantoo",
    "Diksha Rani",
    "Riyazulla Rahman J",
    "Gulshan"
  ],
  venue: "IET Conference Proceedings (Q4)",
  year: "2026",
  publicationUrl: "https://digital-library.theiet.org/doi/10.1049/icp.2026.3756",
  status: "Published",
  abstract:
    "Presented a comprehensive review of Synthetic Aperture Radar (SAR) image colorization techniques, examining the evolution from traditional signal-processing methods to modern deep learning approaches, including GANs, diffusion models, and hybrid architectures. Analyzed existing methodologies, datasets, architectural designs, evaluation metrics, and implementation challenges to understand their effectiveness in SAR-to-optical image translation and identify opportunities for future research.",
  highlights: [
    "Categorized SAR image colorization approaches into traditional methods, machine learning techniques, standard GANs, architecturally enhanced GANs, condition-guided GANs, diffusion models, Vision Transformers, and hybrid frameworks.",
    "Conducted a comparative review of existing architectures, examining their generator and discriminator designs, feature extraction strategies, loss formulations, and SAR-to-optical translation capabilities.",
    "Analyzed benchmark datasets including SEN1-2, SEN12MS, WHU-SEN-City, QXS-SAROPT, RADARSAT-2, and MSTAR, examining dataset utilization and their role in evaluating colorization methods.",
    "Compared reported PSNR and SSIM results across different architectures and datasets, identifying the strengths and limitations of GAN-based, diffusion-based, and traditional approaches.",
    "Identified major research challenges including speckle noise amplification, domain shift, structural information loss, dependence on paired SAR-optical datasets, high computational requirements, and limited cross-dataset generalization.",
    "Outlined future research directions involving lightweight architectures, physics-aware learning, uncertainty-aware colorization, standardized benchmarking, and hybrid GAN-diffusion-transformer frameworks."
  ],
  tags: [
    "Synthetic Aperture Radar",
    "SAR Image Colorization",
    "Remote Sensing",
    "Literature Review",
    "Generative Adversarial Networks",
    "Conditional GANs",
    "Diffusion Models",
    "Vision Transformers",
    "Image-to-Image Translation",
    "SEN1-2",
    "PSNR",
    "SSIM",
    "Domain Adaptation"
  ]
}
];