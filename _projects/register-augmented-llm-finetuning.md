
---
---
title: "Paper Title Number 1"
collection: projects
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: "This paper is about the number 1. The number 2 is left for future work."
date: 2009-10-01
//venue: "Journal 1"
slidesurl: "http://academicpages.github.io/files/slides1.pdf"
paperurl: "http://academicpages.github.io/files/paper1.pdf"]
---

### Project Overview

This project introduced a novel fine-tuning approach for large language models (LLMs) by integrating register tokens into transformer architectures. Inspired by Vision Transformers, the approach uses empty register tokens to better manage global context and reduce artifacts in attention mechanisms, such as high-norm tokens. These tokens offload less critical computations, allowing the model to focus on task-relevant details.

---

### Key Contributions

#### 1. Development of RegBERT:
- Extended **BERT** by appending register tokens and modifying embeddings and attention mechanisms.
- Designed **RegBERTForQA** specifically for Question-Answering tasks:
  - Optimized predictions by excluding register tokens during inference.

#### 2. Improved Performance:
- Conducted ablation studies to identify optimal register configurations.
- Achieved significant **F1** and **Exact Match** improvements on the **TyDi QA GoldP** dataset.

#### 3. Attention Analysis:
- Applied **Layer-wise Relevance Propagation (LRP)** to visualize improved focus and interpretability in attention mechanisms.
- Used **Integrated Gradients** to quantify token contributions, highlighting the systematic processing enabled by register tokens.

---

### Results
- **Performance Improvements:**
  - Register tokens consistently enhanced performance, with optimal results using 5-10 tokens.
- **Attention Insights:**
  - Attention maps showed reduced noise and better focus on relevant information.

---

### Future Directions
- Applying register augmentation to other NLP tasks.
- Testing robustness across architectures and languages.
- Further analysis of individual token roles and their impact.

---

### Conclusion

This work demonstrates the potential of register-augmented fine-tuning to improve LLM performance, interpretability, and efficiency in complex NLP tasks.

You can find the **codebase on [GitHub](#)**.

### Resources

- [Download Paper](http://academicpages.github.io/files/paper1.pdf)
- [Download presented Poster](http://academicpages.github.io/files/slides1.pdf)

---
