---
title: "Register Augmented LLM Fine-tuning"
collection: projects
permalink: /projects/respirable-particles-detection
excerpt: 'Worked on the DDL project in Summer 2024 at the Brunaugh Lab, where I developed a custom image analysis pipeline to track the dissolution of respirable drug particles using microscopy data.'
paperurl: 'http://erapariharr.github.io/files/DDL_pharma.pdf'
---


### Project Overview

This project aimed to develop a novel and cost-effective image analysis algorithm to quantify the dissolution behavior of inhaled drug particles in artificial airway mucus. Understanding the dissolution of poorly water-soluble particles is critical in evaluating pulmonary drug bioavailability. The study used a custom flow-through cell setup to capture particle-level data over time, offering a biorelevant platform for respiratory drug evaluation.

This project explored how inhaled drug particles dissolve in artificial mucus—a key step influencing drug delivery in the lungs. Conducted in collaboration with the Brunaugh Lab, we developed a custom experimental and computational pipeline to simulate, observe, and quantify the dissolution behavior of microparticles deposited onto mucus-like substrates.

---

### My Contribution: Custom Computer Vision Pipeline

My primary responsibility was to design and implement a complete image analysis algorithm to detect and quantify particle dissolution from time-lapse microscopy images. This included:

#### 1. End-to-End Image Processing Workflow - 
- Converted raw microscopy images to grayscale and applied Gaussian blur to reduce noise.
- Performed threshold-based binarization and morphological transformations to enhance particle contours.
- Applied edge detection and contouring to isolate individual particles ("blobs").

#### 2. Feature Extraction & Particle Quantification -
- Developed logic to count particles, draw bounding boxes, and calculate size metrics (e.g., Feret’s diameter).
- Enabled batch processing of image sequences to measure particle disappearance over time.


#### 3. Temporal Analysis -
- Built a framework to link image-based metrics (e.g., particle count and size reduction) with dissolution time.
- Analyzed and interpreted drug-specific patterns—IPBr exhibited surface-level dissolution, while CFZ showed delayed immersion and disaggregation.

---
### My Contribution: Custom Computer Vision Pipeline
- Worked closely with the wet lab team to align imaging conditions with experimental needs.
- Helped validate imaging quality and particle visibility under different mucus concentrations and flow conditions.
- Contributed to writing and visualizing the results for the final poster presentation.


### Results
- The pipeline accurately detected and measured particle size changes across multiple time points and drug types.
- Quantitative metrics captured dissolution trends in a reproducible, automatable fashion.
- Demonstrated feasibility of low-cost, high-throughput image-based dissolution assessment using standard lab equipment.


---

### Future Directions
- Applying register augmentation to other NLP tasks.
- Testing robustness across architectures and languages.
- Further analysis of individual token roles and their impact.

---

### Conclusion

Conclusion
This project demonstrates the power of applying computer vision techniques to biomedical image analysis. My work enabled automated, reproducible measurement of particle dissolution using a custom detection pipeline, bridging the gap between experimental pharmaceutical science and computational analysis.

You can find the **codebase on github (link it) **.

### Resources

- [Download Poster](http://academicpages.github.io/files/DDL_pharma.pdf)


---
